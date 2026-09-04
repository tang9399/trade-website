/**
 * TradeDragon Mall - 下单Excel邮件发送 API
 * 接收前端订单数据 → 生成 .xlsx（含商品图片/订单号/收款人/店铺名称/电话/总金额）
 * → 通过 QQ SMTP 发送带附件邮件到商城邮箱
 *
 * 依赖环境变量（在 Vercel 控制台配置）：
 *   SMTP_USER   = 401562890@qq.com（发件账号）
 *   SMTP_PASS   = QQ 邮箱 SMTP 授权码（非邮箱登录密码）
 *   SMTP_TO     = 收件邮箱，默认 401562890@qq.com
 */
const ExcelJS = require('exceljs');
const nodemailer = require('nodemailer');

const SMTP_HOST = 'smtp.qq.com';
const SMTP_PORT = 465;
const SMTP_USER = process.env.SMTP_USER || '401562890@qq.com';
const SMTP_PASS = process.env.SMTP_PASS || '';
const SMTP_TO = process.env.SMTP_TO || '401562890@qq.com';
const SITE_ORIGIN = 'https://9399dragon.com';

async function downloadImage(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 50) return null;
    return buf;
  } catch (e) {
    return null;
  }
}

function extFromUrl(url) {
  const m = /\.(jpg|jpeg|png|gif|webp)(\?|$)/i.exec(url);
  return m ? m[1].toLowerCase().replace('jpeg', 'jpg') : 'jpg';
}

async function buildWorkbook(order) {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'TradeDragon Mall';
  wb.created = new Date(order.date || Date.now());
  const ws = wb.addWorksheet('订单');

  ws.columns = [
    { key: 'img', width: 12 },
    { key: 'name', width: 46 },
    { key: 'qty', width: 10 },
    { key: 'price', width: 12 },
    { key: 'amount', width: 14 },
  ];

  const headStyle = {
    font: { bold: true, size: 11, color: { argb: 'FFFFFFFF' } },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0F3A5F' } },
    alignment: { vertical: 'middle', horizontal: 'center' },
  };
  const labelStyle = {
    font: { bold: true, size: 11 },
    alignment: { vertical: 'middle', horizontal: 'center' },
    fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFDCE7F5' } },
  };

  // 第 1 行：订单信息（订单号 / 收款人 / 店铺名称 / 电话）
  ws.getCell('A1').value = '订单号';
  ws.getCell('B1').value = order.orderNo || '';
  ws.getCell('C1').value = '收款人';
  ws.getCell('D1').value = (order.customer && order.customer.name) || '';
  ws.getCell('E1').value = '店铺名称';
  ws.getCell('F1').value = (order.customer && order.customer.store) || '';
  ws.getCell('G1').value = '电话';
  ws.getCell('H1').value = (order.customer && order.customer.phone) || '';
  ['A1', 'C1', 'E1', 'G1'].forEach((r) => { ws.getCell(r).style = labelStyle; });
  ws.getRow(1).height = 22;

  // 第 3 行：明细表头
  const headerRow = ws.getRow(3);
  headerRow.values = ['图片', '商品名称', '数量', '单价(¥)', '金额(¥)'];
  headerRow.eachCell((cell) => { cell.style = headStyle; });
  headerRow.height = 22;

  // 商品明细 + 图片
  let r = 4;
  const items = Array.isArray(order.items) ? order.items : [];
  for (const it of items) {
    ws.getRow(r).height = 72;
    ws.getCell(`B${r}`).value = it.name || '';
    ws.getCell(`C${r}`).value = it.qty || 0;
    ws.getCell(`D${r}`).value = Number(it.price || 0);
    ws.getCell(`E${r}`).value = Number((it.price || 0) * (it.qty || 0));
    ws.getCell(`C${r}`).numFmt = '0';
    ws.getCell(`D${r}`).numFmt = '0.00';
    ws.getCell(`E${r}`).numFmt = '0.00';
    ws.getCell(`A${r}`).alignment = { vertical: 'middle', horizontal: 'center' };

    if (it.img) {
      const url = /^https?:/i.test(it.img) ? it.img : `${SITE_ORIGIN}/${it.img.replace(/^\/+/, '')}`;
      const buf = await downloadImage(url);
      if (buf) {
        try {
          const imageId = wb.addImage({ buffer: buf, extension: extFromUrl(url) });
          ws.addImage(imageId, {
            tl: { col: 0, row: r - 1 },
            ext: { width: 66, height: 66 },
          });
        } catch (e) { /* 图片嵌入失败则忽略 */ }
      }
    }
    r++;
  }

  // 总金额（最后一行）
  const totalRow = r + 1;
  const total = Number(order.total || 0);
  ws.getCell(`D${totalRow}`).value = '订单总金额(¥):';
  ws.getCell(`D${totalRow}`).style = {
    font: { bold: true, size: 12 },
    alignment: { horizontal: 'right' },
  };
  ws.getCell(`E${totalRow}`).value = total;
  ws.getCell(`E${totalRow}`).numFmt = '0.00';
  ws.getCell(`E${totalRow}`).style = {
    font: { bold: true, size: 13, color: { argb: 'FFC0392B' } },
    alignment: { horizontal: 'left' },
  };

  const buf = await wb.xlsx.writeBuffer();
  return Buffer.from(buf);
}

function buildText(order) {
  const c = order.customer || {};
  const items = (order.items || [])
    .map((it) => `- ${it.name} ×${it.qty} = ¥${((it.price || 0) * (it.qty || 0)).toFixed(2)}`)
    .join('\n');
  return [
    `订单号：${order.orderNo || ''}`, '',
    `收款人：${c.name || ''}`,
    `店铺名称：${c.store || ''}`,
    `电话：${c.phone || ''}`,
    `国家/地区：${c.country || ''}`,
    `收货地址：${c.address || ''}`,
    c.note ? `备注：${c.note}` : '', '',
    `--- 商品明细 ---`, items, '',
    `订单总金额：¥${Number(order.total || 0).toFixed(2)}`,
    `支付方式：${order.payMethodLabel || ''}`,
  ].filter(Boolean).join('\n');
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, error: 'Method Not Allowed' });

  try {
    const order = (typeof req.body === 'object' && req.body) || {};
    if (!order.orderNo) return res.status(400).json({ success: false, error: '缺少订单号' });
    if (!SMTP_PASS) return res.status(500).json({ success: false, error: 'SMTP_PASS 未配置' });

    const xlsxBuffer = await buildWorkbook(order);
    const subject = `【新订单】${order.orderNo} · ¥${Number(order.total || 0).toFixed(2)} (${SMTP_TO})`;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"TradeDragon Mall" <${SMTP_USER}>`,
      to: SMTP_TO,
      subject,
      text: buildText(order),
      attachments: [
        { filename: `订单-${order.orderNo}.xlsx`, content: xlsxBuffer },
      ],
    });

    return res.json({ success: true, orderNo: order.orderNo });
  } catch (e) {
    return res.status(500).json({ success: false, error: String(e && e.message || e) });
  }
};
