/**
 * 野莓国际物流 - 运费估算 API
 * 请求: POST /api/rates  body: { from, to, weight, type }
 */
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { from, to, weight: w, type = '散货' } = (req.body || {});
  const weight = parseFloat(w);
  if (!from || !to || isNaN(weight) || weight <= 0) {
    return res.status(400).json({ success: false, message: '请提供 from, to, weight' });
  }

  const rates = {
    '莫斯科': { rail: 8.5 }, '哈萨克斯坦': { rail: 5.5 },
    '吉尔吉斯斯坦': { rail: 6.0 }, '塔吉克斯坦': { rail: 6.5 },
    '乌兹别克斯坦': { rail: 6.0 }, '土库曼斯坦': { rail: 7.0 }
  };
  const r = rates[to];
  if (!r) return res.status(400).json({ success: false, message: '不支持的目的地' });

  const unitPrice = r.rail * (from === '广州' ? 1.05 : 1.0) * (type === '整柜' ? 0.85 : 1.0);
  let total = Math.round(weight * unitPrice);
  if (total > 1000) total = Math.round(total / 100) * 100;

  res.json({
    success: true,
    data: {
      from, to, transportType: type, weight,
      unitPrice: Math.round(unitPrice * 100) / 100,
      total, currency: 'CNY',
      routeTime: to === '莫斯科' ? '西线18-25天 / 东线28-35天' : '预计7-12天',
      note: '含基本报关费，不含关税及特殊操作费'
    }
  });
};
