const fs = require('fs');
const path = require('path');

function loadTrackingDB() {
  try {
    const dbPath = path.join(__dirname, '..', 'data', 'tracking.json');
    const raw = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load tracking data:', e.message);
    return {};
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  let trackingNo = '';
  if (req.method === 'GET') {
    trackingNo = (req.query.no || '').toUpperCase().trim();
  } else if (req.method === 'POST') {
    trackingNo = (req.body && req.body.trackingNo || '').toUpperCase().trim();
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  if (!trackingNo) {
    return res.status(400).json({ success: false, message: '请提供运单号 (trackingNo)' });
  }

  const trackingDB = loadTrackingDB();
  const data = trackingDB[trackingNo];
  if (!data) {
    return res.status(200).json({ success: true, found: false, trackingNo, message: '未找到该运单信息' });
  }
  return res.status(200).json({ success: true, found: true, data });
};
