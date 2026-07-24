/**
 * 野莓国际物流 - 运单查询 API (Vercel Serverless)
 * 部署方式: vercel deploy
 * 请求: POST /api/tracking  body: { trackingNo: "WB20250701" }
 * 请求: GET /api/tracking/:no
 */

const trackingDB = {
  "WB20250701": {
    trackingNo: "WB20250701",
    from: "义乌 Yiwu",
    to: "莫斯科 Moscow",
    status: "transporting",
    statusText: "运输中",
    transportType: "铁路运输",
    weight: "850kg",
    eta: "2025-07-25",
    origin: "义乌福田街道涌金大道B9号",
    timeline: [
      { time: "2025-07-01 14:30", text: "已揽收，货物到达义乌仓", done: true },
      { time: "2025-07-03 09:15", text: "海关报关完成，等待发运", done: true },
      { time: "2025-07-05 22:00", text: "货物已出关，运往满洲里口岸", done: true },
      { time: "2025-07-08 16:40", text: "到达满洲里口岸，进行换装作业", done: true },
      { time: "2025-07-10 08:00", text: "已出关，驶往莫斯科方向", done: false, current: true },
      { time: "2025-07-25 (预计)", text: "预计到达莫斯科", done: false }
    ]
  },
  "WB20250615": {
    trackingNo: "WB20250615",
    from: "广州 Guangzhou",
    to: "哈萨克斯坦 Kazakhstan",
    status: "delivered",
    statusText: "已签收",
    transportType: "散货拼车",
    weight: "320kg",
    eta: "2025-07-03",
    origin: "义乌福田街道涌金大道B9号",
    timeline: [
      { time: "2025-06-15 10:00", text: "已揽收，货物到达广州仓", done: true },
      { time: "2025-06-17 14:20", text: "海关报关完成，安排发运", done: true },
      { time: "2025-06-19 06:00", text: "货物出关，驶往霍尔果斯口岸", done: true },
      { time: "2025-06-22 11:30", text: "到达霍尔果斯口岸，通关中", done: true },
      { time: "2025-06-24 09:00", text: "已出关，进入哈萨克斯坦境内", done: true },
      { time: "2025-07-03 16:00", text: "✅ 货物已签收", done: true }
    ]
  },
  "WB20240620": {
    trackingNo: "WB20240620",
    from: "义乌 Yiwu",
    to: "乌兹别克斯坦 Uzbekistan",
    status: "delivered",
    statusText: "已签收",
    transportType: "散货拼车",
    weight: "560kg",
    eta: "2025-07-10",
    origin: "义乌福田街道涌金大道B9号",
    timeline: [
      { time: "2025-06-20 08:30", text: "已揽收，货物到达义乌仓", done: true },
      { time: "2025-06-22 11:00", text: "海关报关完成", done: true },
      { time: "2025-06-24 06:00", text: "货物出关，驶往霍尔果斯口岸", done: true },
      { time: "2025-06-27 14:00", text: "到达霍尔果斯口岸，通关中", done: true },
      { time: "2025-06-29 09:00", text: "已出关，驶往乌兹别克斯坦", done: true },
      { time: "2025-07-08 11:00", text: "✅ 货物已签收", done: true }
    ]
  },  "9399-W7671-0720-1": {
    trackingNo: "9399-W7671-0720-1",
    from: "义乌 Yiwu",
    to: "莫斯科 Moscow",
    status: "transporting",
    statusText: "运输中",
    transportType: "陆路运输",
    weight: "17kg",
    eta: "2025-08-15",
    origin: "义乌福田街道涌金大道B9号",
    timeline: [
      { time: "2025-07-18 18:00", text: "包装完成，等待发货", done: true },
      { time: "2025-07-20 10:00", text: "已发货，从义乌出发", done: true, current: true },
      { time: "2025-07-25", text: "预计到达霍尔果斯口岸", done: false },
      { time: "2025-08-15 (预计)", text: "预计到达莫斯科", done: false }
    ]
  }
};

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();

  let trackingNo = '';

  // GET /api/tracking/:no
  if (req.method === 'GET') {
    trackingNo = (req.query.no || '').toUpperCase().trim();
  }
  // POST /api/tracking
  else if (req.method === 'POST') {
    trackingNo = (req.body && req.body.trackingNo || '').toUpperCase().trim();
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  if (!trackingNo) {
    return res.status(400).json({ success: false, message: '请提供运单号 (trackingNo)' });
  }

  const data = trackingDB[trackingNo];
  if (!data) {
    return res.status(200).json({ success: true, found: false, trackingNo, message: '未找到该运单信息' });
  }

  return res.status(200).json({ success: true, found: true, data });
};
