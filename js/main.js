/* ==========================================
   TradeDragon - Sourcing Partner Website
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
        'hero.title': '野莓国际 · TradeDragon<br>Your Sourcing Partner',
        'hero.subtitle': '一站式采购 · 跨境物流 · 全球交付',
        'hero.desc': '深耕进出口贸易多年，整合稳定供应链与成熟跨境物流体系，为全球客户提供全链条贸易服务',
        'hero.inquiry': '获取报价',
        'hero.products': '了解服务',
        'hero.years': '年行业经验',
        'hero.countries': '市场覆盖',
        'hero.clients': '合作客户',
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
        'about.factory': '义乌总部',
        'products.title': '服务范围',
        'products.subtitle': '全链条贸易服务，让跨境采购省心无忧',
        'products.p1.title': '采购代理',
        'products.p1.desc': '根据客户需求精准匹配优质供应商，涵盖日用百货、五金工具、家居用品、电子配件、纺织服装等多品类，提供样品寄送与品质初验',
        'products.p2.title': '跨境物流',
        'products.p2.desc': '海运、空运、铁路、快递多模式运输方案，覆盖欧亚主要贸易线路，实时物流跟踪，确保货物安全准时到达',
        'products.p3.title': '报关清关',
        'products.p3.desc': '专业报关团队，熟悉各国进出口政策法规，高效办理报关、清关、商检等手续，降低通关风险与时间成本',
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
        'nav.gallery': '公司实景',
        'gallery.title': '公司实景',
        'gallery.subtitle': '真实场景，展现我们的专业实力',
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
        'cases.title': '成功案例',
        'cases.subtitle': '助力全球客户成功，用实力说话',
        'cases.featured': '🌟 重点案例',
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
        'cases.cta': '想了解我们如何助力您的品牌开拓海外市场？',
        'cases.btn': '立即咨询',
        'contact.title': '联系我们',
        'contact.subtitle': '立即获取报价，开启合作之旅',
        'contact.name': '您的姓名 *',
        'contact.email': '电子邮箱 *',
        'contact.company': '公司名称',
        'contact.phone': '电话 / WhatsApp',
        'contact.inquiry1': '产品询价',
        'contact.inquiry2': '物流咨询',
        'contact.inquiry3': 'OEM/ODM定制',
        'contact.inquiry4': '其他合作',
        'contact.message': '请告诉我们您的需求 *',
        'contact.submit': '发送询盘',
        'contact.addr': '公司地址',
        'contact.tel': '联系电话',
        'contact.email_label': '电子邮箱',
        'contact.hours': '工作时间',
        'footer.tagline': '您值得信赖的中国采购伙伴',
        'footer.quick': '快速链接',
        'footer.products': '服务分类',
        'footer.subscribe': '订阅动态',
        'footer.sub_desc': '获取最新产品资讯和行业洞察',
        'footer.rights': '保留所有权利。',
        'footer.design': '设计制作',
    },
    'en': {
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.products': 'Services',
        'nav.advantages': 'Advantages',
        'nav.cert': 'Strengths',
        'nav.contact': 'Contact',
        'hero.title': 'TradeDragon<br>Your Sourcing Partner in China',
        'hero.subtitle': 'One-Stop Sourcing · Cross-Border Logistics · Global Delivery',
        'hero.desc': 'Years of experience in import & export trade. Integrated supply chain and logistics to serve global clients.',
        'hero.inquiry': 'Get a Quote',
        'hero.products': 'Our Services',
        'hero.years': 'Years Experience',
        'hero.countries': 'Market Coverage',
        'hero.clients': 'Clients Served',
        'about.title': 'About Us',
        'about.subtitle': 'Discover TradeDragon — Your Trusted China Sourcing & Logistics Partner',
        'about.h3': 'Quality First · Integrity Wins',
        'about.p1': 'Wild Berry International Trading Co., Ltd. (TradeDragon) has been深耕 the import & export trade industry for years, specializing in sourcing and logistics services with market coverage across Europe and Asia. Headquartered in Yiwu, Zhejiang — the world\'s small commodities capital — we leverage Yiwu\'s unparalleled supply chain resources and global logistics hub advantages to provide one-stop services including sourcing, customization, customs clearance, and freight delivery.',
        'about.p2': 'We have integrated stable factory supply chains with mature cross-border logistics systems, covering daily necessities, hardware tools, home products, electronic accessories, textiles and more. Through strict quality control and efficient logistics coordination, every shipment is delivered on time, to specification, and in full quantity.',
        'about.p3': 'We adhere to the business philosophy of quality first and win-win integrity. With stable supply, fair pricing, and efficient after-sales service, we continuously create value for global partners.',
        'about.f1': 'Integrated Factory Supply Network',
        'about.f2': 'Mature Cross-Border Logistics',
        'about.f3': 'Professional Customs Clearance Service',
        'about.f4': 'FOB / CIF / DDP Trade Terms Available',
        'about.factory': 'Yiwu HQ',
        'products.title': 'Our Services',
        'products.subtitle': 'Full-chain trade services for worry-free cross-border sourcing',
        'products.p1.title': 'Sourcing Agent',
        'products.p1.desc': 'Match quality suppliers based on client needs — daily goods, hardware, home products, electronics, textiles. Sample delivery and quality inspection included.',
        'products.p2.title': 'Cross-Border Logistics',
        'products.p2.desc': 'Sea, air, rail, and courier solutions covering major Europe-Asia trade routes. Real-time tracking for safe and timely delivery.',
        'products.p3.title': 'Customs Clearance',
        'products.p3.desc': 'Professional customs team familiar with global import/export regulations. Efficient customs clearance, inspection procedures to reduce risk and time.',
        'products.p4.title': 'OEM/ODM Customization',
        'products.p4.desc': 'Leverage Yiwu\'s vast factory resources for product customization, packaging design, and brand manufacturing to meet individual requirements.',
        'products.p5.title': 'Quotation & Negotiation',
        'products.p5.desc': 'Accurate cost estimation based on your procurement list. Competitive pricing and factory price negotiation to secure the best deal.',
        'products.p6.title': 'Order Confirmation',
        'products.p6.desc': 'Assist with contract signing covering specs, quantity, pricing, delivery, and payment terms. Protecting both parties\' interests and minimizing trade risks.',
        'products.p7.title': 'Production Follow-up',
        'products.p7.desc': 'End-to-end production tracking from raw materials to finished goods. Regular progress reports and timely issue resolution to ensure on-time delivery.',
        'products.p8.title': 'Quality Inspection',
        'products.p8.desc': 'Professional QC team conducting multiple rounds of inspection during production and before shipment. Ensuring products meet your quality standards.',
        'adv.title': 'Why Choose Us',
        'adv.subtitle': 'Four core advantages for peace of mind',
        'adv.a1.title': 'Direct Sourcing',
        'adv.a1.desc': 'Based in Yiwu International Trade City, we have an extensive factory and supplier network. Bypass middlemen for best pricing and stable supply.',
        'adv.a2.title': 'Quality Control',
        'adv.a2.desc': 'Full quality management from supplier screening to shipment inspection. Third-party inspection available to meet your quality standards.',
        'adv.a3.title': 'Efficient Logistics',
        'adv.a3.desc': 'Integrated shipping, air freight, and cross-border channels. Real-time tracking, transparent information, industry-leading on-time delivery.',
        'adv.a4.title': 'Full Service',
        'adv.a4.desc': 'From inquiry, sourcing, order follow-up, inspection, customs to delivery — dedicated team throughout. 24/7 response makes trade simple.',
        'nav.gallery': 'Gallery',
        'nav.cases': 'Success Stories',
        'gallery.title': 'Gallery',
        'gallery.subtitle': 'Real scenes showcasing our professionalism',
        'cert.title': 'Our Strengths',
        'cert.subtitle': 'Professional team, honest operation, trustworthy',
        'cert.c1': 'Yiwu Advantage',
        'cert.c2': 'Integrity',
        'cert.c3': 'Logistics Network',
        'cert.c4': 'Expert Team',
        'cert.c5': 'Quality',
        'cert.c6': 'Fast Response',
        'cert.cta': 'Global partners welcome — let\'s grow together!',
        'cert.btn': 'Contact Now',
                'cases.title': 'Success Stories',
        'cases.subtitle': 'Proven results that speak for themselves',
        'cases.featured': '🌟 Featured Case',
        'cases.story.title': 'Kazakhstan Franchise Project',
        'cases.story.desc1': 'Our team successfully connected a Kazakhstani client with a leading Chinese franchise brand headquarters. We provided full cross-border support — brand evaluation, business negotiation, supply chain setup, and store operations training.',
        'cases.story.desc2': 'To date, the brand has opened <strong>95 stores</strong> across Kazakhstan, covering Almaty, Nur-Sultan, Shymkent and other major cities, becoming one of the most influential Chinese franchise brands in the region.',
        'cases.stores': 'Stores',
        'cases.cities': 'Cities Covered',
        'cases.jobs': 'Jobs Created',
        'cases.p1': 'Signing Ceremony',
        'cases.p2': 'First Store Opening in Almaty',
        'cases.p3': 'Store Interior',
        'cases.p4': 'Operations Training',
        'cases.p5': 'Supply Chain Shipment',
        'cases.p6': 'New Store in Nur-Sultan',
        'cases.p7': 'Client Visit',
        'cases.p8': 'Team Group Photo',
        'cases.cta': 'Want to know how we can help your brand expand overseas?',
        'cases.btn': 'Inquire Now',
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get a quote now and start your partnership',
        'contact.name': 'Your Name *',
        'contact.email': 'Email Address *',
        'contact.company': 'Company Name',
        'contact.phone': 'Phone / WhatsApp',
        'contact.inquiry1': 'Product Inquiry',
        'contact.inquiry2': 'Logistics',
        'contact.inquiry3': 'OEM/ODM',
        'contact.inquiry4': 'Other',
        'contact.message': 'Tell us what you need *',
        'contact.submit': 'Send Inquiry',
        'contact.addr': 'Office Address',
        'contact.tel': 'Phone',
        'contact.email_label': 'Email',
        'contact.hours': 'Working Hours',
        'footer.tagline': 'Your Trusted Sourcing Partner in China',
        'footer.quick': 'Quick Links',
        'footer.products': 'Services',
        'footer.subscribe': 'Subscribe',
        'footer.sub_desc': 'Get latest product news and industry insights',
        'footer.rights': 'All Rights Reserved.',
        'footer.design': 'Designed with',
    },

    'ru': {
        'nav.home': 'Главная',
        'nav.about': 'О нас',
        'nav.products': 'Услуги',
        'nav.advantages': 'Преимущества',
        'nav.cert': 'Лицензии',
        'nav.contact': 'Контакты',
        'hero.title': 'TradeDragon<br>Ваш партнер по sourcing в Китае',
        'hero.subtitle': 'Комплексный sourcing · Международная логистика · Глобальная доставка',
        'hero.desc': 'Многолетний опыт в импортно-экспортной торговле. Интегрированная цепочка поставок и логистика для обслуживания глобальных клиентов.',
        'hero.inquiry': 'Получить предложение',
        'hero.products': 'Наши услуги',
        'hero.years': 'Лет опыта',
        'hero.countries': 'Охват рынка',
        'hero.clients': 'Клиентов',
        'about.title': 'О компании',
        'about.subtitle': 'Узнайте о TradeDragon — вашем надежном партнере по sourcing и логистике в Китае',
        'about.h3': 'Качество прежде всего · Честность побеждает',
        'about.p1': 'Wild Berry International Trading Co., Ltd. (TradeDragon) много лет работает в сфере импортно-экспортной торговли, специализируясь на услугах sourcing и логистики с охватом рынков Европы и Азии. Главный офис находится в Иу, Чжэцзян — мировой столице мелких товаров. Мы используем преимущества уникальной供应链 и глобального логистического узла Иу для предоставления комплексных услуг: sourcing, кастомизация, таможенное оформление и грузоперевозки.',
        'about.p2': 'Мы интегрировали стабильные заводские цепочки поставок с成熟的 международными логистическими системами, охватывая товары повседневного спроса, инструменты, товары для дома, электронные аксессуары, текстиль и многое другое. Благодаря строгому контролю качества и эффективной логистической координации каждая поставка осуществляется вовремя, в спецификации и в полном объеме.',
        'about.p3': 'Мы придерживаемся философии бизнеса «качество прежде всего и взаимовыгодное сотрудничество». Стабильные поставки, справедливые цены и эффективное послепродажное обслуживание — мы постоянно создаем ценность для глобальных партнеров.',
        'about.f1': 'Интегрированная сеть заводских поставок',
        'about.f2': 'Развитая международная логистика',
        'about.f3': 'Профессиональное таможенное оформление',
        'about.f4': 'FOB / CIF / DDP — различные условия поставки',
        'about.factory': 'Главный офис в Иу',
        'products.title': 'Наши услуги',
        'products.subtitle': 'Полный спектр торговых услуг для беззаботного международного sourcing',
        'products.p1.title': 'Агент по sourcing',
        'products.p1.desc': 'Подбор качественных поставщиков по вашим потребностям — товары повседневного спроса, инструменты, товары для дома, электроника, текстиль. Включает доставку образцов и проверку качества.',
        'products.p2.title': 'Международная логистика',
        'products.p2.desc': 'Морские, авиационные, железнодорожные и курьерские решения, охватывающие основные торговые маршруты Европа-Азия. Отслеживание в реальном времени для безопасной и своевременной доставки.',
        'products.p3.title': 'Таможенное оформление',
        'products.p3.desc': 'Профессиональная команда по таможне, знакомая с международными правилами импорта/экспорта. Эффективное таможенное оформление и инспекционные процедуры для снижения рисков и времени.',
        'products.p4.title': 'OEM/ODM кастомизация',
        'products.p4.desc': 'Используйте обширные заводские ресурсы Иу для кастомизации продукции, дизайна упаковки и контрактного производства под вашими брендом.',
        'products.p5.title': 'Ценообразование и переговоры',
        'products.p5.desc': 'Точный расчет затрат на основе вашего списка закупок. Конкурентные цены и переговоры с фабриками для получения наилучших условий.',
        'products.p6.title': 'Подтверждение заказа',
        'products.p6.desc': 'Помощь в подписании контракта с указанием спецификаций, количества, цены, сроков поставки и условий оплаты. Защита интересов обеих сторон.',
        'products.p7.title': 'Контроль производства',
        'products.p7.desc': 'Сквозное отслеживание производства от сырья до готовой продукции. Регулярные отчеты о прогрессе и своевременное решение проблем.',
        'products.p8.title': 'Инспекция качества',
        'products.p8.desc': 'Профессиональная команда QC проводит многоступенчатый контроль во время производства и перед отгрузкой. Гарантия соответствия продукции вашим стандартам.',
        'adv.title': 'Почему выбирают нас',
        'adv.subtitle': 'Четыре ключевых преимущества для вашего спокойствия',
        'adv.a1.title': 'Прямой sourcing',
        'adv.a1.desc': 'Базируясь в Международном торговом центре Иу, мы имеем обширную сеть заводов и поставщиков. Минуя посредников, обеспечиваем лучшие цены и стабильные поставки.',
        'adv.a2.title': 'Контроль качества',
        'adv.a2.desc': 'Полное управление качеством от отбора поставщиков до инспекции отгрузки. Доступна сторонняя инспекция для соответствия вашим стандартам.',
        'adv.a3.title': 'Эффективная логистика',
        'adv.a3.desc': 'Интегрированные морские, авиационные и международные каналы. Отслеживание в реальном времени, прозрачная информация, лидирующая в отрасли своевременность доставки.',
        'adv.a4.title': 'Полный сервис',
        'adv.a4.desc': 'От запроса, sourcing, сопровождения заказа, инспекции, таможни до доставки — выделенная команда на всех этапах. Круглосуточная поддержка.',
        'nav.gallery': 'Галерея',
        'nav.cases': 'Кейсы',
        'gallery.title': 'Галерея',
        'gallery.subtitle': 'Реальные сцены, демонстрирующие наш профессионализм',
        'cert.title': 'Наши преимущества',
        'cert.subtitle': 'Профессиональная команда, честная работа, заслуживающая доверия',
        'cert.c1': 'Преимущество Иу',
        'cert.c2': 'Честность',
        'cert.c3': 'Логистическая сеть',
        'cert.c4': 'Команда экспертов',
        'cert.c5': 'Качество',
        'cert.c6': 'Быстрый ответ',
        'cert.cta': 'Приглашаем глобальных партнеров к сотрудничеству!',
        'cert.btn': 'Связаться сейчас',
                'cases.title': 'Успешные кейсы',
        'cases.subtitle': 'Реальные результаты, подтвержденные опытом',
        'cases.featured': '🌟 Ключевой кейс',
        'cases.story.title': 'Франчайзинг в Казахстане',
        'cases.story.desc1': 'Мы успешно соединили казахстанского клиента с ведущим китайским франчайзинговым брендом. Полная поддержка: оценка бренда, переговоры, настройка поставок и обучение персонала.',
        'cases.story.desc2': 'На сегодняшний день бренд открыл <strong>95 магазинов</strong> по всему Казахстану, включая Алматы, Нур-Султан, Шымкент и другие города. Это один из самых влиятельных китайских франчайзинговых брендов в регионе.',
        'cases.stores': 'Магазинов',
        'cases.cities': 'Городов',
        'cases.jobs': 'Рабочих мест',
        'cases.p1': 'Церемония подписания',
        'cases.p2': 'Открытие первого магазина',
        'cases.p3': 'Интерьер магазина',
        'cases.p4': 'Обучение персонала',
        'cases.p5': 'Отгрузка товара',
        'cases.p6': 'Новый магазин в Нур-Султане',
        'cases.p7': 'Визит клиента',
        'cases.p8': 'Командное фото',
        'cases.cta': 'Хотите узнать, как мы можем помочь вашему бренду выйти на国际市场?',
        'cases.btn': 'Связаться',
        'contact.title': 'Свяжитесь с нами',
        'contact.subtitle': 'Получите предложение и начните сотрудничество',
        'contact.name': 'Ваше имя *',
        'contact.email': 'Электронная почта *',
        'contact.company': 'Название компании',
        'contact.phone': 'Телефон / WhatsApp',
        'contact.inquiry1': 'Запрос продукции',
        'contact.inquiry2': 'Логистика',
        'contact.inquiry3': 'OEM/ODM',
        'contact.inquiry4': 'Другое',
        'contact.message': 'Расскажите о ваших потребностях *',
        'contact.submit': 'Отправить запрос',
        'contact.addr': 'Адрес офиса',
        'contact.tel': 'Телефон',
        'contact.email_label': 'Электронная почта',
        'contact.hours': 'Рабочие часы',
        'footer.tagline': 'Ваш надежный партнер по sourcing в Китае',
        'footer.quick': 'Быстрые ссылки',
        'footer.products': 'Услуги',
        'footer.subscribe': 'Подписаться',
        'footer.sub_desc': 'Получайте последние новости о продукции',
        'footer.rights': 'Все права защищены.',
        'footer.design': 'Создано с',
    }
};

// ======== Current Language ========
let currentLang = 'en'; // Default: English (B2B外贸)

const langCycle = ['en', 'zh-CN', 'ru'];
const langLabels = { 'en': '中', 'zh-CN': 'RU', 'ru': 'EN' };

function toggleLang() {
    const idx = langCycle.indexOf(currentLang);
    currentLang = langCycle[(idx + 1) % langCycle.length];
    applyLang(currentLang);
    document.getElementById('langToggle').textContent = langLabels[currentLang];
}

function applyLang(lang) {
    const translations = i18n[lang];
    if (!translations) return;

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
            el.innerHTML = translations[key];
        }
    });

    // Update data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
            el.placeholder = translations[key];
        }
    });
}

// ======== Mobile Menu Toggle ========
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
}

// Close menu on nav link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('show');
    });
});

// ======== Contact Form Submit ========
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = (currentLang === 'en') ? 'Sending...' : '发送中...';
    btn.disabled = true;

    // Simulate submission (in production, send to your backend)
    setTimeout(() => {
        btn.textContent = (currentLang === 'en') ? '✓ Sent Successfully' : '✓ 发送成功';
        btn.style.background = '#28a745';
        btn.style.color = 'white';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
            btn.disabled = false;
            e.target.reset();
        }, 2000);
    }, 1000);
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

// ======== Initialize ========
document.addEventListener('DOMContentLoaded', () => {
    applyLang(currentLang);
});
