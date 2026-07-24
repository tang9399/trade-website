/** 野莓国际物流 - 线路查询 API */
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  res.json({
    success: true,
    data: {
      routes: [
        { from: '义乌', to: '莫斯科', westTime: '18-25天', eastTime: '28-35天' },
        { from: '广州', to: '莫斯科', westTime: '18-25天', eastTime: '28-35天' },
        { from: '义乌', to: '哈萨克斯坦', westTime: '7-12天', eastTime: '7-12天' },
        { from: '义乌', to: '吉尔吉斯斯坦', westTime: '7-12天', eastTime: '7-12天' },
        { from: '义乌', to: '塔吉克斯坦', westTime: '7-12天', eastTime: '7-12天' },
        { from: '义乌', to: '乌兹别克斯坦', westTime: '7-12天', eastTime: '7-12天' },
        { from: '义乌', to: '土库曼斯坦', westTime: '7-12天', eastTime: '7-12天' },
        { from: '广州', to: '哈萨克斯坦', westTime: '7-12天', eastTime: '7-12天' },
        { from: '广州', to: '吉尔吉斯斯坦', westTime: '7-12天', eastTime: '7-12天' },
        { from: '广州', to: '塔吉克斯坦', westTime: '7-12天', eastTime: '7-12天' },
        { from: '广州', to: '乌兹别克斯坦', westTime: '7-12天', eastTime: '7-12天' },
        { from: '广州', to: '土库曼斯坦', westTime: '7-12天', eastTime: '7-12天' }
      ]
    }
  });
};
