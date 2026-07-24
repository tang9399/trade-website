/** 野莓国际物流 - 健康检查 API */
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    success: true,
    name: '野莓国际物流 API',
    version: '1.0.0',
    status: 'running',
    timestamp: new Date().toISOString()
  });
};
