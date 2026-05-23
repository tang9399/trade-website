/* ==========================================
   TradeDragon - Enhanced v2.0
   ========================================== */

// ======== I18N Data (中英双语) ========
const i18n = {
    'zh-CN': {
        'nav.home': '首页',
        'nav.about': '关于我们',
        'nav.products': '服务范围',
        'nav.advantages': '核心优势',
        'nav.cert': '资质证书',
        'nav.contact': '联系我们',
        'nav.cases': '成功案例',
        'nav.categories': '采购品类',
        'nav.workflow': '服务流程',
        'nav.testimonials': '客户评价',
        'nav.faq': '常见问题',
        '_meta_title': '9399dragon.com - 义乌采购代理 | 中国到哈萨克斯坦/俄罗斯/欧洲物流服务',
        '_meta_desc': '野莓国际贸易（TradeDragon）— 义乌一站式采购代理，10+年经验。提供采购、验货、报关、海运空运到哈萨克斯坦、俄罗斯及欧洲的全链条服务。100+合作客户。95家哈萨克斯坦连锁门店成功案例。',
        '_meta_keywords': '义乌采购代理, 义乌国际贸易, 中国到哈萨克斯坦物流, 中俄物流, 中国采购服务, 跨境电商物流, 义乌到阿拉木图, TradeDragon',
        '_og_title': '9399dragon.com — 您值得信赖的中国采购伙伴',
        '_og_desc': '义乌一站式采购代理，采购、验货、物流到哈萨克斯坦/俄罗斯/欧洲，全链条服务。',
        'hero.title': '野莓国际 · TradeDragon<br>Your Sourcing Partner',
        'hero.subtitle': '商务接待 · 一站式采购 · 跨境物流 · 全球交付',
        'hero.desc': '深耕进出口贸易多年，整合稳定供应链与成熟跨境物流体系，为全球客户提供全链条贸易服务',
        'hero.inquiry': '获取报价',
        'hero.products': '了解服务',
        'hero.years': '年行业经验',
        'hero.countries': '市场覆盖',
        'hero.eurasia': '欧亚',
        'hero.clients': '合作客户',
        // About
        'about.title': '关于我们',
        'about.subtitle': '了解野莓国际 — 值得信赖的中国采购与物流合作伙伴',
        'about.h3': '品质为先 · 诚信共赢',
        'about.p1': '野莓国际贸易有限公司（TradeDragon），深耕进出口贸易行业多年，主营采购与物流服务，市场覆盖欧亚多国。公司总部位于世界小商品之都——浙江义乌，依托义乌得天独厚的供应链资源与全球物流枢纽优势，为海内外客户提供一站式采购、定制、报关清关、货运交付全链条服务。',
        'about.p2': '我们整合了稳定的工厂供应链与成熟的跨境物流体系，产品涵盖日用百货、五金工具、家居用品、电子配件、纺织服装等多个品类。通过严格的质量把控与高效的物流调度，确保每一批货物按时、按质、按量交付到客户手中。',
        'about.p3': '我们坚守品质为先、诚信共赢的经营理念，以稳定供货、合理价位、高效售后，持续为全球合作伙伴创造价值，竭诚欢迎全球客商洽谈合作、共谋发展！',
        'about.f1': '整合稳定工厂供应链资源',
        'about.f2': '成熟跨境物流体系',
        'about.f3': '专业报关清关一站式服务',
        'about.f4': 'FOB / CIF / DDP 多种贸易条款可选',
        'about.img.caption': '中国义乌总部',
        // Products / Services
        'products.title': '服务范围',
        'products.subtitle': '全链条贸易服务，让跨境采购省心无忧',
        'products.p1.title': '采购代理',
        'products.p1.desc': '根据客户需求精准匹配优质供应商，涵盖日用百货、五金工具、家居用品、电子配件、纺织服装等多品类，提供样品寄送与品质初验',
        'products.p2.title': '跨境物流',
        'products.p2.desc': '海运、空运、铁路、快递多模式运输方案，覆盖欧亚主要贸易线路，实时物流跟踪，确保货物安全准时到达',
        'products.p3.title': '商务接待',
        'products.p3.desc': '专业商务接待团队，为客户提供翻译陪同、市场考察、工厂验厂、商务洽谈等全方位接待服务',
        'products.p4.title': 'OEM/ODM定制',
        'products.p4.desc': '依托义乌丰富的工厂资源，提供产品定制、包装设计、品牌代工等增值服务，满足客户个性化采购需求',
        'products.p5.title': '报价议价',
        'products.p5.desc': '根据客户采购清单精准核算成本，提供有竞争力的报价方案，协助客户与工厂进行价格谈判，争取最优采购价格',
        'products.p6.title': '订单签订',
        'products.p6.desc': '协助客户完成采购合同签订，明确产品规格、数量、价格、交期、付款方式等条款，保障双方权益，规避贸易风险',
        'products.p7.title': '生产跟进',
        'products.p7.desc': '从原材料采购到成品出库全程跟进生产进度，定期向客户汇报生产状态，及时协调解决生产中的问题，确保按时交付',
        'products.p8.title': '品控验货',
        'products.p8.desc': '专业的品质控制团队，在生产过程中及出货前进行多轮验货，严格把控产品质量，确保产品符合客户要求的标准',
        // Advantages
        'adv.title': '为什么选择我们',
        'adv.subtitle': '四大核心优势，让合作更放心',
        'adv.a1.title': '源头直采',
        'adv.a1.desc': '立足义乌国际商贸城，拥有广泛的工厂与供应商网络，跳过中间环节，确保价格优势与货源稳定，为客户提供最具竞争力的采购方案',
        'adv.a2.title': '品质把控',
        'adv.a2.desc': '从供应商筛选到出货检验，全程品质管控。可配合第三方验货机构，确保每批货物符合客户的质量要求与认证标准',
        'adv.a3.title': '物流高效',
        'adv.a3.desc': '整合优质船公司、航空公司和跨境物流渠道，提供最优运输方案。货物实时追踪，信息透明，准时交付率行业领先',
        'adv.a4.title': '全程服务',
        'adv.a4.desc': '从询盘、采购、跟单、验货、报关到物流交付，专人全程对接。7x24小时响应，让跨境贸易更简单、更安心',
        // Certifications
        'cert.title': '我们的优势',
        'cert.subtitle': '专业团队，诚信经营，值得信赖',
        'cert.c1': '义乌源头优势',
        'cert.c2': '诚信经营',
        'cert.c3': '物流网络',
        'cert.c4': '专业团队',
        'cert.c5': '品质保障',
        'cert.c6': '高效响应',
        'cert.c7': '营业执照',
        'cert.cta': '欢迎全球客商洽谈合作，共谋发展！',
        'cert.btn': '立即咨询',
        // Gallery
        'gallery.title': '公司实景',
        'gallery.subtitle': '走进 TradeDragon，实力所见即所得',
        'gallery.item1': '工厂洽谈',
        'gallery.item2': '工厂验货',
        'gallery.item3': '中欧团队',
        'gallery.item4': '行业展会',
        'gallery.item5': '市场采购',
        'gallery.item6': '义乌商贸城',
        'gallery.item7': '义乌商贸城六区',
        'gallery.item8': '接待客户',
        // Categories (NEW)
        'cat.title': '采购品类',
        'cat.subtitle': '覆盖多个热门品类，满足您的一站式采购需求',
        'cat.c1': '日用百货',
        'cat.c1d': '家居日用品、厨房用品、清洁用品',
        'cat.c2': '五金工具',
        'cat.c2d': '手动工具、电动工具、建筑五金',
        'cat.c3': '家居用品',
        'cat.c3d': '家具、家纺、装饰品、收纳用品',
        'cat.c4': '电子配件',
        'cat.c4d': '手机配件、充电器、耳机、小家电',
        'cat.c5': '纺织服装',
        'cat.c5d': '服装、鞋帽、箱包、面料辅料',
        'cat.c6': '玩具礼品',
        'cat.c6d': '益智玩具、节日礼品、派对用品',
        // Workflow (NEW)
        'wf.title': '服务流程',
        'wf.subtitle': '六大步骤，快速高效完成采购交付',
        'wf.s1': '需求提交',
        'wf.s1d': '提交采购清单与要求',
        'wf.s2': '报价确认',
        'wf.s2d': '精准核算，提供报价方案',
        'wf.s3': '样品确认',
        'wf.s3d': '样品寄送，品质初验',
        'wf.s4': '生产跟单',
        'wf.s4d': '全程跟进生产进度',
        'wf.s5': '品质验货',
        'wf.s5d': '多轮验货，严格把控',
        'wf.s6': '物流交付',
        'wf.s6d': '报关出货，准时送达',
        // Testimonials (NEW)
        'test.title': '客户评价',
        'test.subtitle': '来自全球合作伙伴的声音',
        'test.t1': '和TradeDragon合作两年了，他们的验货流程非常严格，发到阿拉木图的货物从没出过质量问题。强烈推荐！',
        'test.t1a': '阿里别克',
        'test.t1r': '哈萨克斯坦 · 连锁零售品牌',
        'test.t2': '从义乌采购到莫斯科的物流链条很复杂，但TradeDragon的团队把每个环节都安排得很周到，省了我大量精力。',
        'test.t2a': '伊万诺夫',
        'test.t2r': '俄罗斯 · 跨境电商卖家',
        'test.t3': '我们在哈萨克斯坦的95家门店能顺利落地，离不开TradeDragon从品牌对接到供应链搭建的全流程支持。',
        'test.t3a': '努尔兰',
        'test.t3r': '哈萨克斯坦 · 连锁加盟品牌创始人',
        // FAQ (NEW)
        'faq.title': '常见问题',
        'faq.subtitle': '关于采购合作的常见疑问解答',
        'faq.q1': '你们的服务覆盖哪些品类？',
        'faq.a1': '我们覆盖日用百货、五金工具、家居用品、电子配件、纺织服装、玩具礼品等多个品类。无论您需要什么产品，我们都可以在义乌及周边找到优质供应商。',
        'faq.q2': '最小起订量（MOQ）有要求吗？',
        'faq.a2': '不同品类和供应商MOQ不同。日用百货类通常MOQ较低，可混批采购；部分工厂定制产品需达到一定量。我们为您争取最灵活的采购方案。',
        'faq.q3': '发往哈萨克斯坦/俄罗斯需要多久？',
        'faq.a3': '海运至阿拉木图约15-20天，至莫斯科约20-25天；铁路运输约12-18天；空运3-7天。具体时效取决于货物类型和运输方案。',
        'faq.q4': '付款方式是怎样的？',
        'faq.a4': '支持T/T电汇、L/C信用证、西联汇款等。首次合作通常预付30%-50%，尾款见提单副本付清。长期合作客户可协商更灵活的付款条件。',
        'faq.q5': '你们提供样品服务吗？',
        'faq.a5': '是的，我们提供样品寄送服务。样品费和运费由客户承担，大货订单确认后可从货款中扣除样品费。紧急样品可安排快递直达。',
        'faq.q6': '产品质量如何保证？',
        'faq.a6': '我们实行三阶段品质管控：①供应商资质审核；②生产过程巡检（关键工序拍照/视频确认）；③出货前100%抽检/全检。也可配合第三方验货机构。',
        'faq.q7': '货物丢失或损坏怎么办？',
        'faq.a7': '我们选择信誉良好的物流合作伙伴并为货物投保。如发生货损，我们会协助您向物流方/保险公司索赔，同时优先为您安排补发方案以减少损失。',
        // Contact
        'contact.title': '联系我们',
        'contact.subtitle': '立即咨询，获取专属采购方案',
        'contact.form.name': '您的姓名',
        'contact.form.email': '邮箱地址',
        'contact.form.phone': '手机号码',
        'contact.form.company': '公司名称',
        'contact.form.country': '所在国家',
        'contact.form.country_pl': '请选择国家',
        'contact.form.country_kz': '哈萨克斯坦',
        'contact.form.country_ru': '俄罗斯',
        'contact.form.country_cn': '中国',
        'contact.form.country_uz': '乌兹别克斯坦',
        'contact.form.country_other': '其他',
        'contact.form.message': '采购需求描述',
        'contact.form.submit': '发送咨询',
        'contact.form.sending': '发送中...',
        'contact.form.success': '✓ 发送成功，我们会尽快与您联系！',
        'contact.form.fail': '✗ 发送失败',
        'contact.info.title': '联系方式',
        'contact.info.address': '浙江省义乌市福田街道涌金大道B9',
        'contact.info.phone': '+86 159 9073 1636',
        'contact.info.email': 'fuqing@yandex.ru',
        // Cases
        'cases.title': '成功案例',
        'cases.subtitle': '助力全球客户成功，用实力说话',
        'cases.featured': '重点案例',
        'cases.story.title': '哈萨克斯坦连锁加盟项目',
        'cases.story.desc1': '我司成功为哈萨克斯坦客户对接了中国知名连锁加盟品牌总部。从品牌考察、商务谈判、供应链搭建到门店运营培训，全程提供一站式跨境服务支持。',
        'cases.story.desc2': '截至目前，该品牌已在哈萨克斯坦全国范围内成功开设 <strong>95家门店</strong>，覆盖阿拉木图、努尔苏丹、奇姆肯特等主要城市，成为当地最具影响力的中国连锁加盟品牌之一。',
        'cases.stores': '家门店',
        'cases.cities': '个城市覆盖',
        'cases.jobs': '个就业岗位',
        'cases.p1': '品牌签约仪式',
        'cases.p2': '阿拉木图首店开业',
        'cases.p3': '门店内部陈列',
        'cases.p4': '运营团队培训',
        'cases.p5': '供应链发货现场',
        'cases.p6': '努尔苏丹新店',
        'cases.p7': '客户来访考察',
        'cases.p8': '团队合影留念',
        'cases.p9': '哈萨克斯坦TOP创始人',
        'cases.p10': '客户门店2',
        'cases.cta': '想了解我们如何助力您的品牌开拓海外市场？',
        'cases.cta.btn': '立即咨询',
        // Footer
        'footer.desc': '野莓国际贸易有限公司 — 您在中国义乌值得信赖的采购与物流合作伙伴。扎根义乌，服务全球。',
        'footer.quick': '快速链接',
        'footer.services': '服务项目',
        'footer.newsletter': '订阅资讯',
        'footer.newsletter_desc': '获取义乌市场动态和物流政策更新',
        'footer.newsletter_placeholder': '输入邮箱地址',
        'footer.newsletter_btn': '订阅',
        'footer.rights': '版权所有',
        'footer.privacy': '隐私政策',
        // WhatsApp tip
        'whatsapp.tip': '需要帮助？点击这里实时咨询 👋',
        // Hero stats alt
        'hero.years.label': '年行业经验',
        'hero.markets.label': '市场覆盖',
        'hero.clients.label': '合作客户',
    },
    'en': {
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.products': 'Services',
        'nav.advantages': 'Why Us',
        'nav.cert': 'Credentials',
        'nav.contact': 'Contact',
        'nav.cases': 'Success Cases',
        'nav.categories': 'Categories',
        'nav.workflow': 'Process',
        'nav.testimonials': 'Reviews',
        'nav.faq': 'FAQ',
        '_meta_title': '9399dragon.com - Yiwu Sourcing Agent | China to Kazakhstan/Russia/Europe Logistics',
        '_meta_desc': 'Professional sourcing agent in Yiwu, China since 2013. One-stop procurement, quality inspection & shipping to Kazakhstan, Russia & Europe. 10+ years, 100+ clients.',
        '_meta_keywords': 'Yiwu sourcing agent, China procurement, Kazakhstan logistics, sourcing from China, Yiwu purchasing agent, China to Kazakhstan shipping, TradeDragon',
        '_og_title': '9399dragon.com — Your Sourcing Partner in China',
        '_og_desc': 'Professional sourcing agent in Yiwu. One-stop procurement, inspection & shipping to Kazakhstan, Russia & Europe.',
        'hero.title': 'Wild Berry · TradeDragon<br>Your Sourcing Partner',
        'hero.subtitle': 'Sourcing · Procurement · Logistics · Global Delivery',
        'hero.desc': 'Years of experience in import/export trade, integrating stable supply chains and mature cross-border logistics to serve global clients',
        'hero.inquiry': 'Get a Quote',
        'hero.products': 'Our Services',
        'hero.years': 'Years Experience',
        'hero.countries': 'Markets',
        'hero.eurasia': 'Eurasia',
        'hero.clients': 'Clients',
        // About
        'about.title': 'About Us',
        'about.subtitle': 'Meet TradeDragon — Your Trusted Sourcing & Logistics Partner in China',
        'about.h3': 'Quality First · Integrity Wins',
        'about.p1': 'Wild Berry International Trading Co., Ltd. (TradeDragon) has years of experience in import/export trade, specializing in procurement and logistics services across Eurasian markets. Headquartered in Yiwu, the world\'s small commodity capital, we leverage unique supply chain resources and global logistics advantages to provide one-stop services.',
        'about.p2': 'We integrate stable factory supply chains with mature cross-border logistics, covering daily necessities, hardware tools, home products, electronics, textiles, and more. Through strict quality control and efficient logistics, every shipment is delivered on time, to specification.',
        'about.p3': 'We uphold a business philosophy of quality first and win-win integrity. With stable supply, fair pricing, and reliable after-sales service, we continuously create value for our global partners.',
        'about.f1': 'Stable factory supply chain resources',
        'about.f2': 'Mature cross-border logistics',
        'about.f3': 'One-stop customs clearance service',
        'about.f4': 'FOB / CIF / DDP available',
        'about.img.caption': 'Yiwu Headquarters',
        // Products / Services
        'products.title': 'Our Services',
        'products.subtitle': 'Full-chain trade services for worry-free cross-border sourcing',
        'products.p1.title': 'Sourcing Agent',
        'products.p1.desc': 'Match quality suppliers for daily necessities, hardware, home goods, electronics, textiles. Sample delivery and initial quality check included.',
        'products.p2.title': 'Cross-border Logistics',
        'products.p2.desc': 'Sea, air, rail, and courier solutions covering major Eurasian routes. Real-time tracking for safe, on-time delivery.',
        'products.p3.title': 'Business Reception',
        'products.p3.desc': 'Professional reception team offering translation, market tours, factory visits, and business negotiation support.',
        'products.p4.title': 'OEM/ODM Customization',
        'products.p4.desc': 'Product customization, packaging design, and brand OEM services leveraging Yiwu\'s rich factory ecosystem.',
        'products.p5.title': 'Quotation & Negotiation',
        'products.p5.desc': 'Accurate cost analysis and competitive pricing. We negotiate on your behalf to secure the best factory prices.',
        'products.p6.title': 'Order Contracting',
        'products.p6.desc': 'Assist with contract signing, defining specs, quantities, pricing, delivery, and payment terms to protect both parties.',
        'products.p7.title': 'Production Follow-up',
        'products.p7.desc': 'End-to-end production tracking from raw materials to finished goods, with regular progress reports.',
        'products.p8.title': 'Quality Inspection',
        'products.p8.desc': 'Professional QC team conducting multi-round inspections during production and before shipment.',
        // Advantages
        'adv.title': 'Why Choose Us',
        'adv.subtitle': 'Four core strengths that set us apart',
        'adv.a1.title': 'Direct Sourcing',
        'adv.a1.desc': 'Based in Yiwu International Trade City with extensive factory and supplier networks. Skip middlemen for the best pricing and stable supply.',
        'adv.a2.title': 'Quality Control',
        'adv.a2.desc': 'Full quality management from supplier selection to shipment inspection. Third-party inspection available to meet certification standards.',
        'adv.a3.title': 'Efficient Logistics',
        'adv.a3.desc': 'Partnered with top carriers for optimal shipping. Real-time tracking and transparent status updates. Industry-leading on-time delivery rates.',
        'adv.a4.title': 'End-to-End Service',
        'adv.a4.desc': 'Dedicated account manager from inquiry to delivery. 7x24 response. We make cross-border trade simple and worry-free.',
        // Certifications
        'cert.title': 'Our Strengths',
        'cert.subtitle': 'Professional team, integrity-driven, trustworthy',
        'cert.c1': 'Yiwu Origin Advantage',
        'cert.c2': 'Honest Operation',
        'cert.c3': 'Logistics Network',
        'cert.c4': 'Professional Team',
        'cert.c5': 'Quality Assurance',
        'cert.c6': 'Fast Response',
        'cert.c7': 'Business License',
        'cert.cta': 'Welcome global partners to cooperate with us!',
        'cert.btn': 'Contact Now',
        // Gallery
        'gallery.title': 'Company Gallery',
        'gallery.subtitle': 'See TradeDragon in action',
        'gallery.item1': 'Factory Visit',
        'gallery.item2': 'Factory Inspection',
        'gallery.item3': 'China-Europe Team',
        'gallery.item4': 'Trade Exhibition',
        'gallery.item5': 'Market Sourcing',
        'gallery.item6': 'Yiwu Market',
        'gallery.item7': 'Yiwu District 6',
        'gallery.item8': 'Client Reception',
        // Categories (NEW)
        'cat.title': 'Product Categories',
        'cat.subtitle': 'Covering multiple popular categories for your one-stop sourcing needs',
        'cat.c1': 'Daily Necessities',
        'cat.c1d': 'Home goods, kitchenware, cleaning supplies',
        'cat.c2': 'Hardware & Tools',
        'cat.c2d': 'Hand tools, power tools, construction hardware',
        'cat.c3': 'Home Products',
        'cat.c3d': 'Furniture, textiles, decor, storage',
        'cat.c4': 'Electronic Accessories',
        'cat.c4d': 'Phone accessories, chargers, earphones, small appliances',
        'cat.c5': 'Textiles & Apparel',
        'cat.c5d': 'Clothing, footwear, bags, fabrics',
        'cat.c6': 'Toys & Gifts',
        'cat.c6d': 'Educational toys, holiday gifts, party supplies',
        // Workflow (NEW)
        'wf.title': 'How It Works',
        'wf.subtitle': 'Six simple steps from inquiry to delivery',
        'wf.s1': 'Submit Requirements',
        'wf.s1d': 'Send your procurement list and requirements',
        'wf.s2': 'Quote Confirmation',
        'wf.s2d': 'Accurate costing and proposal',
        'wf.s3': 'Sample Approval',
        'wf.s3d': 'Samples sent for quality check',
        'wf.s4': 'Production Follow-up',
        'wf.s4d': 'Full production tracking',
        'wf.s5': 'Quality Inspection',
        'wf.s5d': 'Multi-round QC testing',
        'wf.s6': 'Shipping & Delivery',
        'wf.s6d': 'Customs clearance, on-time delivery',
        // Testimonials (NEW)
        'test.title': 'Client Reviews',
        'test.subtitle': 'What our global partners say about us',
        'test.t1': 'We\'ve worked with TradeDragon for 2 years. Their inspection process is rigorous — shipments to Almaty have never had quality issues. Highly recommend!',
        'test.t1a': 'Alibek',
        'test.t1r': 'Kazakhstan · Retail Chain',
        'test.t2': 'The supply chain from Yiwu to Moscow is complex, but TradeDragon handles every step flawlessly. Saves me enormous time and effort.',
        'test.t2a': 'Ivanov',
        'test.t2r': 'Russia · Cross-border E-commerce',
        'test.t3': 'Our 95 stores across Kazakhstan wouldn\'t have been possible without TradeDragon\'s full-chain support from brand matching to supply chain setup.',
        'test.t3a': 'Nurlan',
        'test.t3r': 'Kazakhstan · Franchise Brand Founder',
        // FAQ (NEW)
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Common questions about our sourcing services',
        'faq.q1': 'What product categories do you cover?',
        'faq.a1': 'We cover daily necessities, hardware tools, home products, electronic accessories, textiles & apparel, toys & gifts, and more. Whatever you need, we can find quality suppliers in Yiwu and surrounding areas.',
        'faq.q2': 'Is there a minimum order quantity (MOQ)?',
        'faq.a2': 'MOQ varies by category and supplier. Daily necessities typically have lower MOQs and allow mixed batches. Custom OEM products may require higher quantities. We negotiate the most flexible terms for you.',
        'faq.q3': 'How long does shipping to Kazakhstan/Russia take?',
        'faq.a3': 'Sea freight to Almatu: ~15-20 days, to Moscow: ~20-25 days. Rail: ~12-18 days. Air freight: 3-7 days. Actual time depends on cargo type and shipping method.',
        'faq.q4': 'What payment methods do you accept?',
        'faq.a4': 'We accept T/T wire transfer, L/C, and Western Union. First orders typically require 30%-50% deposit with balance against B/L copy. Flexible terms available for long-term partners.',
        'faq.q5': 'Do you provide sample services?',
        'faq.a5': 'Yes, we provide sample delivery. Sample cost and shipping are borne by the client, deductible from the bulk order. Express shipping available for urgent samples.',
        'faq.q6': 'How do you ensure product quality?',
        'faq.a6': 'We implement a 3-stage quality system: 1) Supplier qualification audit; 2) In-production inspection (photos/videos of key processes); 3) Pre-shipment sampling/full inspection. Third-party inspection also available.',
        'faq.q7': 'What if goods are lost or damaged?',
        'faq.a7': 'We work with reputable carriers and insure all shipments. In case of damage/loss, we assist with claims and prioritize replacement shipments to minimize your losses.',
        // Contact
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get in touch for a custom sourcing solution',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Phone Number',
        'contact.form.company': 'Company',
        'contact.form.country': 'Country',
        'contact.form.country_pl': 'Select Country',
        'contact.form.country_kz': 'Kazakhstan',
        'contact.form.country_ru': 'Russia',
        'contact.form.country_cn': 'China',
        'contact.form.country_uz': 'Uzbekistan',
        'contact.form.country_other': 'Other',
        'contact.form.message': 'Describe your sourcing needs',
        'contact.form.submit': 'Send Inquiry',
        'contact.form.sending': 'Sending...',
        'contact.form.success': '✓ Sent successfully! We\'ll get back to you soon.',
        'contact.form.fail': '✗ Failed to send',
        'contact.info.title': 'Contact Info',
        'contact.info.address': 'B9, Yongjin Avenue, Futian Street, Yiwu, Zhejiang, China',
        'contact.info.phone': '+86 159 9073 1636',
        'contact.info.email': 'fuqing@yandex.ru',
        // Cases
        'cases.title': 'Success Cases',
        'cases.subtitle': 'Real results for our global clients',
        'cases.featured': 'Featured Case',
        'cases.story.title': 'Kazakhstan Franchise Chain Project',
        'cases.story.desc1': 'We successfully connected a Kazakhstani client with a well-known Chinese franchise brand. From brand research and business negotiations to supply chain setup and store operation training — full cross-border support.',
        'cases.story.desc2': 'To date, the brand has opened <strong>95 stores</strong> across Kazakhstan, covering Almaty, Nur-Sultan, Shymkent and other major cities. It has become one of the most influential Chinese franchise brands in the region.',
        'cases.stores': 'Stores',
        'cases.cities': 'Cities',
        'cases.jobs': 'Jobs Created',
        'cases.p1': 'Brand Signing Ceremony',
        'cases.p2': 'Almaty First Store Opening',
        'cases.p3': 'Store Interior Display',
        'cases.p4': 'Operations Team Training',
        'cases.p5': 'Supply Chain Shipping',
        'cases.p6': 'Nur-Sultan New Store',
        'cases.p7': 'Client Visit',
        'cases.p8': 'Team Photo',
        'cases.p9': 'Kazakhstan TOP Founder',
        'cases.p10': 'Client Store 2',
        'cases.cta': 'Want to explore how we can help expand your brand overseas?',
        'cases.cta.btn': 'Contact Us',
        // Footer
        'footer.desc': 'Wild Berry International Trading Co., Ltd — Your trusted sourcing and logistics partner in Yiwu, China. Rooted in Yiwu, serving the world.',
        'footer.quick': 'Quick Links',
        'footer.services': 'Services',
        'footer.newsletter': 'Newsletter',
        'footer.newsletter_desc': 'Get Yiwu market updates & logistics news',
        'footer.newsletter_placeholder': 'Enter your email',
        'footer.newsletter_btn': 'Subscribe',
        'footer.rights': 'All Rights Reserved',
        'footer.privacy': 'Privacy Policy',
        // WhatsApp tip
        'whatsapp.tip': 'Need help? Click here to chat 👋',
        // Hero stats alt
        'hero.years.label': 'Years Experience',
        'hero.markets.label': 'Markets Covered',
        'hero.clients.label': 'Happy Clients',
    }
};

// ======== State ========
let currentLang = localStorage.getItem('lang') || (navigator.language || '').startsWith('zh') ? 'zh-CN' : 'en';

// ======== Update lang button text ========
function updateLangBtn() {
    const toggle = document.getElementById('langToggle');
    if (toggle) {
        toggle.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
    }
}

// ======== Apply translations ========
function applyLang(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Update HTML lang
    document.documentElement.lang = lang === 'zh-CN' ? 'zh-CN' : 'en';

    // Update meta tags
    const metaTitle = document.querySelector('title');
    if (metaTitle && dict['_meta_title']) metaTitle.textContent = dict['_meta_title'];

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['_meta_desc']) metaDesc.setAttribute('content', dict['_meta_desc']);

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && dict['_meta_keywords']) metaKeywords.setAttribute('content', dict['_meta_keywords']);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && dict['_og_title']) ogTitle.setAttribute('content', dict['_og_title']);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && dict['_og_desc']) ogDesc.setAttribute('content', dict['_og_desc']);

    // Update WhatsApp tip
    const tip = document.getElementById('whatsappTip');
    if (tip && dict['whatsapp.tip']) tip.textContent = dict['whatsapp.tip'];

    // Update newsletter placeholder
    const nlInput = document.querySelector('.footer-newsletter input');
    if (nlInput && dict['footer.newsletter_placeholder']) {
        nlInput.setAttribute('placeholder', dict['footer.newsletter_placeholder']);
    }

    // Update form button text
    const submitBtn = document.querySelector('.contact-form .btn-block');
    if (submitBtn && dict['contact.form.submit']) {
        submitBtn.textContent = dict['contact.form.submit'];
    }

    // Update country placeholder
    const countrySelect = document.querySelector('.contact-form select');
    if (countrySelect) {
        const placeholder = countrySelect.querySelector('option[value=""]');
        if (placeholder && dict['contact.form.country_pl']) {
            placeholder.textContent = dict['contact.form.country_pl'];
        }
        const options = countrySelect.querySelectorAll('option[value!=""]');
        const keyMap = {
            'Kazakhstan': 'contact.form.country_kz',
            'Russia': 'contact.form.country_ru',
            'China': 'contact.form.country_cn',
            'Uzbekistan': 'contact.form.country_uz',
            'Other': 'contact.form.country_other'
        };
        if (lang === 'zh-CN') {
            options.forEach(o => {
                const enVal = o.value;
                if (keyMap[enVal] && dict[keyMap[enVal]]) {
                    o.textContent = dict[keyMap[enVal]];
                }
            });
        } else {
            options.forEach(o => o.textContent = o.value);
        }
    }

    // Update hero stats labels
    const statLabels = document.querySelectorAll('.stat-item span:last-child, .hero-stats .stat-item span:last-child');
    statLabels.forEach(el => {
        const text = el.getAttribute('data-i18n');
        if (text && dict[text]) {
            el.textContent = dict[text];
        }
    });

    // Update newsletter subscribe button
    const nlBtn = document.querySelector('.footer-newsletter button');
    if (nlBtn && dict['footer.newsletter_btn']) {
        nlBtn.textContent = dict['footer.newsletter_btn'];
    }
}

// ======== Toggle Language ========
function toggleLang() {
    currentLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    localStorage.setItem('lang', currentLang);
    applyLang(currentLang);
    updateLangBtn();
}

// ======== Toggle Mobile Menu ========
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}

// ======== FAQ Toggle ========
function toggleFaq(element) {
    const item = element.closest('.faq-item');
    const isActive = item.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
    
    // Open clicked one if it wasn't active
    if (!isActive) {
        item.classList.add('active');
    }
}

// ======== Contact Form - Fixed (no double submission) ========
async function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const btn = form.querySelector('.btn-block');
    const originalText = btn.textContent;
    const formData = new FormData(form);

    // Disable button to prevent double submission
    btn.disabled = true;
    const sendingText = currentLang === 'zh-CN' ? i18n['zh-CN']['contact.form.sending'] : i18n['en']['contact.form.sending'];
    btn.textContent = sendingText;
    btn.style.background = '#6c757d';
    btn.style.color = 'white';

    try {
        // We use formsubmit.co for email delivery
        const response = await fetch('https://formsubmit.co/ajax/fuqing@yandex.ru', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) throw new Error('Network error');

        const successText = currentLang === 'zh-CN' ? i18n['zh-CN']['contact.form.success'] : i18n['en']['contact.form.success'];
        btn.textContent = successText;
        btn.style.background = '#28a745';
        btn.style.color = 'white';

        // Reset form
        form.reset();

        // Restore button after 3 seconds
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
            btn.disabled = false;
        }, 3000);

    } catch (err) {
        const failText = currentLang === 'zh-CN' ? i18n['zh-CN']['contact.form.fail'] : i18n['en']['contact.form.fail'];
        btn.textContent = failText;
        btn.style.background = '#dc3545';
        btn.style.color = 'white';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
            btn.disabled = false;
        }, 3000);
    }
}

// ======== Newsletter Form (fixed - actual submission) ========
async function handleNewsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const input = form.querySelector('input');
    const btn = form.querySelector('button');
    const email = input.value.trim();
    
    if (!email) return;
    
    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = '...';
    
    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('_subject', 'Newsletter Subscription - 9399dragon.com');
        formData.append('_captcha', 'false');
        
        await fetch('https://formsubmit.co/ajax/fuqing@yandex.ru', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        
        const successMsg = currentLang === 'zh-CN' ? '✓ 订阅成功！' : '✓ Subscribed!';
        btn.textContent = successMsg;
        btn.style.background = '#28a745';
        input.value = '';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
        }, 2500);
    } catch (err) {
        btn.textContent = currentLang === 'zh-CN' ? '✗ 失败' : '✗ Error';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.disabled = false;
        }, 2000);
    }
}

// ======== JSON-LD Structured Data ========
function injectJsonLd() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Wild Berry International Trading Co., Ltd. / TradeDragon",
        "alternateName": "野莓国际贸易有限公司",
        "url": "https://9399dragon.com",
        "logo": "https://9399dragon.com/images/logo.png",
        "description": "Professional sourcing agent in Yiwu, China. One-stop procurement, quality inspection & shipping to Kazakhstan, Russia & Europe.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "B9, Yongjin Avenue, Futian Street",
            "addressLocality": "Yiwu",
            "addressRegion": "Zhejiang",
            "addressCountry": "CN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+86-159-9073-1636",
            "contactType": "sales",
            "email": "fuqing@yandex.ru",
            "availableLanguage": ["Chinese", "English", "Russian"]
        },
        "sameAs": [
            "https://wa.me/8615990731636"
        ]
    });
    document.head.appendChild(script);
}

// ======== Scroll Navbar Effect ========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ======== Scroll-triggered animations ========
function handleScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.product-card, .adv-card, .cat-card, .testimonial-card, .gallery-item, .workflow-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ======== Smooth link scroll for mobile ========
function initMobileNavClicks() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navLinks').classList.remove('show');
        });
    });
}

// ======== Initialize ========
document.addEventListener('DOMContentLoaded', () => {
    applyLang(currentLang);
    updateLangBtn();
    injectJsonLd();
    handleScrollAnimations();
    initMobileNavClicks();
    
    // Bind form handlers
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleSubmit);
    }
    
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
});
