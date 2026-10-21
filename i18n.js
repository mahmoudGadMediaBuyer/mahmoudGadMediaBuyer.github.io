/* =========================================================
   ARABIC / ENGLISH COPY
   عدّل النصوص العربية من هنا — مش محتاج تفتح أي ملف تاني.

   ملاحظات مهنية:
   • أسماء المنصات (Meta / Google Ads / Snapchat) تفضل إنجليزي — ده المتعارف
     عليه في السوق ومحدش بيكتبها عربي.
   • الأرقام بتفضل بالأرقام اللاتينية (1.86M) — دي الصيغة المستخدمة في
     تقارير الأعمال في الخليج ومصر.
   • النص عربية فصحى معاصرة عشان تشتغل في السعودية ومصر والإمارات مع بعض،
     من غير لهجة تخص بلد واحد.
   ========================================================= */

const I18N = {
  en: {
    nav: {
      home: 'Home', work: 'Case Studies', services: 'Services', about: 'About',
      insights: "Blogs", tools: 'Tools', faq: 'FAQ', contact: 'Contact', whatsapp: 'WhatsApp',
    },
    hero: {
      title: "Performance Media Buyer Turning <span class=\"accent\">Ad Spend Into Measurable Results.</span>",
      sub: "I manage campaigns across Meta, Google, TikTok and Snapchat, supported by reliable tracking, analytics, CRO and automation. Every decision is grounded in performance data.",
      cta1: 'View Case Studies →', cta2: "Let's Work Together",
      statSpend: 'Ad Spend Managed', statOrders: 'Orders', statDaily: 'Peak Daily Budget', statCampaigns: 'Campaigns Run in a Day',
    },
    clients: {
      eyebrow: 'Clients', title: "Brands I've worked with.",
      desc: "E-commerce, service and SaaS brands across Egypt and the Gulf. Drag the globe to explore, or click to view every client side by side.",
    },
    work: {
      eyebrow: 'Case Studies',
      title: "Campaigns I've scaled. Results you can verify.",
      desc: "A selection of e-commerce, lead-generation and charity campaigns across Saudi Arabia, Egypt and the UAE. Figures come from campaign reports and store or charity dashboards.",
      proofBtn: 'View campaign data →',
      allShots: 'All screenshots',
      zoomHint: "Click to zoom · drag to explore the image",
      zoomHintTouch: 'Double-tap or pinch to zoom',
    },
    services: { eyebrow: 'Services', title: "Paid media focused on measurable growth." },
    process: {
      eyebrow: 'How I Work',
      title: "A clear process from audit to scale.",
      desc: "Six repeatable steps keep decisions grounded in data, from the first audit through scaling.",
    },
    swipe: { hint: 'Swipe to browse', prev: 'Previous', next: 'Next' },
    toTop: 'Back to top',
    system: { label: "A feedback loop for every account", coreLabel: "The outcome we work toward", core: "Growth" },
    cv: {
      title: "Full CV", desc: "Experience, accounts and platforms in one PDF.",
      button: 'Download CV (PDF)',
    },
    caseStudy: {
      challenge: 'The Challenge', changes: 'What I Changed',
      strategy: 'The Strategy', results: 'The Results', proof: 'The Proof',
      platform: 'Platform', spend: 'Spend', revenue: 'Revenue', orders: 'Orders', total: 'Total',
    },
    insights: {
      eyebrow: "Blogs", title: "How I approach performance marketing.",
      desc: "Selected LinkedIn posts on the thinking behind campaign strategy and performance.",
      more: 'All posts on LinkedIn →', read: 'Read on LinkedIn →',
      offline: 'LinkedIn posts load when the page is opened from a web address.',
      empty: 'No posts added yet — paste them into the `insights` array in data-config.js.',
    },
    about: {
      eyebrow: 'About',
      title: "A data-led approach to paid growth.",
      desc: "I'm Mahmoud Gad, a Senior Performance Media Buyer managing paid campaigns across the Gulf and Egypt. I've worked with e-commerce, SaaS, lead-generation, automotive and charity accounts across Meta, Google, TikTok and Snapchat in Saudi Arabia, Egypt and the UAE. My work spans campaign strategy, tracking, creative testing, CRO, attribution and scaling, with decisions guided by measurable performance.",
      tagsTitle: 'What I do',
    },
    tools: {
      eyebrow: 'Skills & Tools', title: "I manage campaigns through a connected measurement system.",
      desc: "Tracking, attribution and analytics help me see which campaigns are contributing to results, where to reduce spend and what to scale.",
      subtitle: 'Tools I use daily', heading: "The platforms I use to plan, measure and optimize campaigns.",
    },
    faq: {
      eyebrow: 'FAQ', title: "Questions to answer before we start.",
      desc: "A few practical details to help us decide whether we're a good fit.",
    },
    contact: {
      eyebrow: "Let's talk", title: "Let's talk about your growth goals.",
      desc: "Book a 30-minute call at a time that suits you, or reach me on WhatsApp or by email. I reply within 24 hours.",
      send: 'Send message',
    },
    form: {
      name: 'Name', email: 'Email', message: 'Message',
      namePh: 'Your full name', emailPh: 'you@brand.com',
      messagePh: "Briefly describe your business, monthly ad spend and goals.",
      sending: 'Sending…',
      success: "Thanks — your message is on its way. I'll reply within 24 hours.",
      failPre: "Couldn't send that. Please email ", failMid: ' or message me on ', failWa: 'WhatsApp',
    },
    filters: { market: 'Market', platform: 'Platform', all: 'All', count: '{n} of {total} projects' },
    cta: {
      button: "Let's talk",
      default: "Let's discuss your next growth stage.",
      work: 'Want results like these?',
      services: 'Need help choosing?',
      about: "Let's plan your growth.",
      insights: "Let's plan your growth.",
      tools: 'Need tracking you trust?',
      faq: 'Still have a question?',
    },
    dict: {}, // English needs no lookups — it is the source
  },

  ar: {
    nav: {
      home: 'الرئيسية', work: 'دراسات الحالة', services: 'الخدمات', about: 'نبذة',
      insights: 'مقالات', tools: 'الأدوات', faq: 'الأسئلة الشائعة', contact: 'تواصل', whatsapp: 'واتساب',
    },
    hero: {
      // ليست ترجمة حرفية: العنوان الإنجليزي يصف الدور، والعربي يخاطب صاحب العمل مباشرة
      title: 'أُحوّل الإنفاق الإعلاني إلى <span class="accent">أرباح قابلة للقياس.</span>',
      sub: 'أدير حملات Meta و Google و TikTok و Snapchat ضمن منظومة نمو متكاملة. أتابع الأداء من أول نقرة حتى الشراء، وأستخدم البيانات لتحسين الحملات وتوجيه الميزانية نحو ما يحقق عائدًا أفضل.',
      cta1: 'استعرض دراسات الحالة ←', cta2: 'تواصل معي',
      statSpend: 'إجمالي الميزانيات التي أدرتها', statOrders: 'إجمالي الطلبات', statDaily: 'أعلى ميزانية يومية', statCampaigns: 'حملة خلال يوم واحد',
    },
    clients: {
      eyebrow: 'العملاء', title: 'علامات تجارية عملت معها.',
      desc: 'متاجر إلكترونية وشركات خدمات ومنتجات SaaS في مصر والخليج. استكشف العلامات التجارية التي عملت معها.',
    },
    work: {
      eyebrow: 'دراسات الحالة',
      title: 'حسابات أدرتها. ونتائج موثّقة.',
      desc: 'نماذج من حملات E-commerce و Lead Generation في السعودية ومصر والإمارات، مع أرقام موثّقة من منصات الإعلان وبيانات المتاجر.',
      proofBtn: 'عرض بيانات الحملة ←',
      allShots: 'كل الصور',
      zoomHint: 'اضغط على الصورة للتكبير · حرّك الماوس للتنقّل',
      zoomHintTouch: 'اضغط مرتين أو باعِد إصبعيك للتكبير',
    },
    services: { eyebrow: 'الخدمات', title: 'إدارة حملات تركّز على النمو والعائد.' },
    process: {
      eyebrow: 'طريقة عملي',
      title: 'كيف أعمل على الحساب.',
      desc: 'أبدأ بفهم الحساب والبيانات، ثم أبني خطة اختبار وتحسين مستمرة.',
    },
    swipe: { hint: 'اسحب للتصفّح', prev: 'السابق', next: 'التالي' },
    toTop: 'العودة للأعلى',
    system: { label: 'خطوات العمل على كل حساب', coreLabel: 'الهدف في كل خطوة', core: 'النمو المربح' },
    cv: {
      title: 'السيرة الذاتية', desc: 'خبراتي والحسابات والمنصات التي عملت عليها في ملف PDF.',
      button: 'تحميل السيرة الذاتية (PDF)',
    },
    caseStudy: {
      challenge: 'التحدي', changes: 'ما الذي غيّرته',
      strategy: 'الاستراتيجية', results: 'النتائج', proof: 'الإثبات',
      platform: 'المنصة', spend: 'الإنفاق', revenue: 'الإيراد', orders: 'الطلبات', total: 'الإجمالي',
    },
    insights: {
      eyebrow: 'مقالات', title: 'أفكار عن الأداء والنمو.',
      desc: 'مختارات من منشوراتي على LinkedIn عن طريقة بناء الحملات وقراءة نتائجها.',
      more: 'كل المقالات على LinkedIn ←', read: 'اقرأ على LinkedIn ←',
      offline: 'تظهر منشورات LinkedIn عند فتح الموقع عبر الإنترنت.',
      empty: 'لا توجد مقالات مضافة حاليًا.',
    },
    about: {
      eyebrow: 'نبذة',
      title: 'إدارة حملات تبدأ من البيانات وتنتهي بنتائج واضحة.',
      desc: 'أنا محمود جاد، Performance Media Buyer أعمل مع علامات تجارية في الخليج ومصر على إدارة الحملات وتحسين أدائها. أدرت حملات على Meta و Google و TikTok و Snapchat لقطاعات تشمل التجارة الإلكترونية و SaaS وجذب العملاء والسيارات والجمعيات الخيرية في السعودية ومصر والإمارات. يبدأ عملي بتحليل الحساب و Tracking، ويشمل اختبار Creative وتحسين Funnel وقياس النتائج، ثم توسيع الحملات بناءً على البيانات.',
      tagsTitle: 'مجالات عملي',
    },
    tools: {
      eyebrow: 'المهارات والأدوات', title: 'إدارة الحملات جزء من منظومة الأداء.',
      desc: 'أستخدم أدوات Tracking و Attribution و Analytics لقياس النتائج، وفهم القنوات والحملات التي تحقق عائدًا، واتخاذ قرارات التحسين والتوسّع.',
      subtitle: 'أدوات أستخدمها في عملي', heading: 'منصات الإعلان والتحليل والقياس.',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة', title: 'أسئلة تُطرح عادةً قبل أن نبدأ.',
      desc: 'إجابات عن أكثر الأسئلة شيوعًا قبل بدء العمل معًا.',
    },
    contact: {
      eyebrow: 'تواصل معي', title: 'لنتحدث عن نمو نشاطك.',
      desc: 'احجز مكالمة لمدة 30 دقيقة في الوقت الذي يناسبك، أو تواصل معي عبر واتساب أو البريد الإلكتروني. أرد خلال 24 ساعة.',
      send: 'إرسال الرسالة',
    },
    form: {
      name: 'الاسم', email: 'البريد الإلكتروني', message: 'الرسالة',
      namePh: 'اسمك بالكامل', emailPh: 'you@brand.com',
      messagePh: 'اكتب نبذة عن نشاطك، وميزانيتك الشهرية، وأهدافك.',
      sending: 'جارٍ الإرسال…',
      success: 'شكرًا، وصلتني رسالتك. سأرد عليك خلال 24 ساعة.',
      failPre: 'تعذّر الإرسال. راسلني على ', failMid: ' أو عبر ', failWa: 'واتساب',
    },
    filters: { market: 'السوق', platform: 'المنصة', all: 'الكل', count: '{n} من {total} مشروع' },
    cta: {
      button: 'لنتحدث',
      default: 'لنتحدث عن خطوتك التالية.',
      work: 'تريد نتائج كهذه؟',
      services: 'هل تحتاج دعمًا في حملاتك؟',
      about: 'لنتحدث عن أهدافك.',
      insights: 'لنتحدث عن أهدافك.',
      tools: 'هل تريد قياسًا أوضح للأداء؟',
      faq: 'لديك سؤال آخر؟',
    },

    // ترجمة المحتوى المتولّد من data-config.js
    dict: {
      // ---- FAQ (Oct 2026) ----
      "Are you available for a full-time role?":
        "هل أنا متاح لفرصة بدوام كامل؟",
      "Yes, I’m open to full-time roles, and also to freelance, part-time or remote work. I work across the Gulf markets in general and the Egyptian market.":
        "نعم، أنا منفتح على فرص بدوام كامل أو جزئي، كما أقبل العمل الحر والعمل عن بُعد. أعمل في أسواق الخليج عمومًا والسوق المصري.",
      "Have you worked in a team or on your own? Have you managed a media buying team?":
        "هل عملت ضمن فريق أو بشكل مستقل؟ وهل سبق أن أدرت فريق Media Buying؟",
      "Both. I’ve worked inside teams and on my own, and for a period I managed a small media buying team of two.":
        "عملت بالطريقتين: ضمن فرق وبشكل مستقل، وتوليت لفترة إدارة فريق Media Buying صغير من شخصين.",
      "Have you worked at an agency or in-house?":
        "هل عملت في وكالة أم داخل شركة؟",
      "Both. I’ve worked at agencies and in-house.":
        "عملت في وكالات وضمن فرق داخل الشركات.",
      "What’s the largest daily budget you’ve managed?":
        "ما أكبر ميزانية يومية أدرتها؟",
      "130K USD in a single day.":
        "130 ألف دولار في يوم واحد.",
      "Do you set up tracking yourself? Pixel, CAPI, GTM and GA4":
        "هل تجهّز Tracking بنفسك؟ مثل Pixel و CAPI و GTM و GA4",
      "Yes. When there’s no tracking specialist on the team, I set it up myself: Pixel, CAPI, GTM and GA4.":
        "نعم. عند غياب متخصص Tracking في الفريق، أتولى الإعداد بنفسي باستخدام Pixel و CAPI و GTM و GA4.",
      "Do you build landing pages too?":
        "هل تنشئ Landing Pages أيضًا؟",
      "Yes. I build landing pages that help increase sales and improve the conversion rate.":
        "نعم. أعمل على Landing Pages تساعد في زيادة المبيعات وتحسين Conversion Rate.",
      "Do you run app campaigns?":
        "هل تدير حملات للتطبيقات؟",
      "Yes, I’ve worked on two app marketing accounts.":
        "نعم، عملت على حسابين في مجال App Marketing.",
      // ---- case: Perfume Brand ----
      "E-commerce · Perfumes · Saudi Arabia · Google Ads, Meta and Snapchat":
        "E-commerce · Perfumes · السعودية · Google Ads و Meta و Snapchat",
      "A well-known Saudi perfume brand: we turned the searches for its name on Google into 1.86M SAR in sales, at 16 SAR per order and a 15.8x ROAS.":
        "براند عطور معروف في السعودية: حوّلنا البحث عن اسمه في Google إلى 1.86M ريال مبيعات، بتكلفة 16 ريال للأوردر و ROAS بقيمة 15.8x.",
      "SAR average order":
        "ريال متوسط الأوردر",
      "A well-known perfume brand in Saudi Arabia that people search for by name every day. That demand is the most valuable thing the brand has: a customer who knows what they want and is ready to buy. But any known name becomes a target for competitors who advertise on it, to appear in front of that customer at the same moment.":
        "براند عطور معروف في السعودية، والناس بتدوّر عليه بالاسم كل يوم. والطلب ده أغلى حاجة عند البراند: عميل عارف هو عايز إيه وجاهز يشتري. بس أي اسم معروف بيبقى هدف للمنافسين اللي بيعلنوا عليه، علشان يظهروا قدام العميل في نفس اللحظة.",
      "So the job had two parts: make sure everyone searching for the brand finds the brand and buys from it at the lowest cost, and grow sales beyond the name searches, on Shopping, Meta and Snapchat, without ROAS dropping.":
        "فالمطلوب كان حاجتين: إن كل اللي بيدوّر على البراند يلاقيه هو ويشتري منه بأقل تكلفة، وإننا نكبّر المبيعات برّه البحث عن الاسم، على Shopping و Meta و Snapchat، من غير ما الـROAS ينزل.",
      "Google Ads: brand campaign":
        "حملة البراند على Google Ads",
      "A Search campaign on the brand name, so the brand is the first result for anyone looking for it, ahead of any competitor.":
        "حملة Search على البراند نيم، علشان البراند يكون أول نتيجة لأي حد بيدوّر عليه، قبل أي منافس.",
      "Bidding on Maximize Conversion Value with a Target ROAS:":
        "الـbidding على Maximize Conversion Value بـ Target ROAS:",
      "the campaign goes after the value of each order, not just the number of orders.":
        "الحملة بتدوّر على قيمة الأوردر مش عدد الأوردرات بس.",
      "43% CTR:":
        "الـCTR وصل 43%:",
      "almost half of the people searching for the brand clicked on its own ad, not on a competitor’s.":
        "يعني تقريبًا نص اللي بيدوّروا على البراند ضغطوا على إعلانه هو، مش على المنافسين.",
      "323K clicks at 0.36 SAR per click, with a 2.27% conversion rate.":
        "323K كليك بسعر 0.36 ريال للكليك، و Conversion Rate بقيمة 2.27%.",
      "7,339 orders at 16 SAR each,":
        "7,339 أوردر بتكلفة 16 ريال للأوردر،",
      "with an average order of 253 SAR, higher than any other channel: people who search for the brand by name spend more.":
        "ومتوسط أوردر 253 ريال، أعلى من أي قناة تانية. اللي بيدوّر على البراند بالاسم بيشتري بقيمة أعلى.",
      "Google Ads: Performance Max":
        "حملة Performance Max على Google Ads",
      "A different job from the brand campaign:":
        "دورها مختلف عن حملة البراند:",
      "the brand campaign catches people searching for the name, while Performance Max reaches people searching for perfume in general, with Shopping ads showing the product and its price, plus YouTube and Display.":
        "حملة البراند بتلتقط اللي بيدوّر على الاسم، و PMax بتوصل للي بيدوّر على العطور عمومًا، بإعلانات Shopping فيها صورة المنتج وسعره، ومعاها YouTube و Display.",
      "Bidding on Maximize Conversion Value with a Target ROAS, and asset groups split by product and by best sellers.":
        "تقسيم الـasset groups حسب المنتجات والأكثر مبيعًا، والـbidding على Maximize Conversion Value بـ Target ROAS.",
      "13.8M impressions and 1,725 orders worth 402K SAR, a 4.7x ROAS.":
        "النتيجة: 13.8M ظهور، و 1,725 أوردر بقيمة 402K ريال، و ROAS بقيمة 4.7x.",
      "A Conversion campaign to keep the brand, its offers and its products in front of customers, with creative tested across several angles and hooks, then scaled on the winners.":
        "حملة Conversion علشان البراند يفضل قدام عين العميل بعروضه ومنتجاته، مع تيست الكرييتف بأكتر من أنجل وهوك، وبعدها سكيلنج على الوينرز.",
      "In one month: 2,046 orders on 9.8K USD of spend, about 4.8 USD (18 SAR) per order, an 8.88x ROAS.":
        "النتيجة: في شهر واحد 2,046 أوردر بصرف 9.8K دولار، يعني حوالي 4.8 دولار (18 ريال) للأوردر، و ROAS بقيمة 8.88x.",
      "A Conversion campaign launched alongside Meta, to reach Snapchat’s large audience in Saudi Arabia.":
        "حملة Conversion اتطلقت مع Meta في نفس الوقت، علشان نوصل لجمهور Snapchat الكبير في السعودية.",
      "In 6 weeks: 1,257 orders on 12.6K USD of spend, a 4.81x ROAS.":
        "النتيجة: في 6 أسابيع 1,257 أوردر بصرف 12.6K دولار، و ROAS بقيمة 4.81x.",
      "The brand’s name was its biggest asset, and the work was turning it into sales and protecting it:":
        "اسم البراند كان أكبر أصل عنده، والشغل كان إننا نحوّله لمبيعات ونحميه:",
      "The brand campaign: 1.86M SAR at 16 SAR per order, with the highest average order in the account.":
        "حملة البراند: 1.86M ريال بتكلفة 16 ريال للأوردر، وأعلى متوسط أوردر في الحساب.",
      "Performance Max: 402K SAR from people searching for perfume in general.":
        "حملة PMax: 402K ريال من اللي بيدوّروا على العطور عمومًا.",
      "Meta and Snapchat completed the picture: Meta at an 8.88x ROAS in one month, Snapchat at 4.81x in 6 weeks.":
        "حملات Meta و Snapchat كمّلوا الصورة: Meta بـ ROAS بقيمة 8.88x في شهر، و Snapchat بـ ROAS بقيمة 4.81x في 6 أسابيع.",
      // ---- case: Home Appliances (Egypt) ----
      "E-commerce · Home Appliances · Egypt · Meta and Google Ads · November – December 2023":
        "E-commerce · Home Appliances · مصر · Meta و Google Ads · نوفمبر – ديسمبر 2023",
      "A brand new brand built from scratch, and in its second month a “Red Friday” campaign that brought in 6.15M EGP from Google Ads and 3.55M EGP from Meta.":
        "براند جديد من الصفر، وفي تاني شهر بعد الافتتاح حملة «Red Friday» جابت 6.15M جنيه من Google Ads و 3.55M جنيه من Meta.",
      "EGP in sales from Google Ads":
        "جنيه مبيعات من Google Ads",
      "EGP in sales from Meta":
        "جنيه مبيعات من Meta",
      "EGP spend across both platforms":
        "جنيه صرف على المنصتين",
      "days":
        "يوم",
      "A brand new home appliances brand in Egypt, with a website and a showroom opening for the first time: no known name, no past data, no ad accounts. I gave my view on the name, the logo and the website build, since I would be the one running it, while the decisions sat with management. My part: get the brand selling as much of its stock as possible from the first months.":
        "براند أجهزة منزلية جديد تمامًا في مصر، بموقع ومعرض بيفتحوا لأول مرة. يعني مفيش اسم معروف، ولا بيانات سابقة، ولا حسابات إعلانية. شاركت برأيي في اختيار الاسم واللوجو وبناء الموقع، لأني اللي هشتغل عليه، والقرار فيهم كان للإدارة. والجزء اللي كنت مسؤول عنه: إن البراند يبيع أكبر قدر من الستوك من أول شهور.",
      "Competitors and the market":
        "دراسة المنافسين والسوق",
      "I reviewed the competitors in the market: their websites, how they showed products, their bundles, and the campaigns they were running at the time, whether built on specific discounts or on different offers.":
        "راجعت المنافسين في السوق: شكل مواقعهم، وطريقة عرض المنتجات، والباكدجات، والحملات اللي كانت شغالة عندهم وقتها، وهل بتعتمد على خصومات معيّنة ولا عروض مختلفة.",
      "Our edge:":
        "ميزتنا التنافسية:",
      "price, plus opening offers and discounts on almost every product, on the website and in the showroom.":
        "السعر، ومعاه عروض وخصومات الافتتاح على أغلب المنتجات، في الموقع والمعرض.",
      "Getting the website ready":
        "تجهيز الموقع",
      "Reviewed how products were shown, the site’s sections and the banners, and set up shipping.":
        "راجعت عرض المنتجات وتقسيمات الموقع والبانرات، وظبطنا الشحن.",
      "Added several instalment options (valU, Aman, Souhoola and bank-card instalments) to make buying easier for the customer and help the brand sell as much stock as possible.":
        "وفّرنا أكثر من وسيلة تقسيط: فاليو وأمان وسهولة وتقسيط بطاقات البنوك، علشان نسهّل الشراء على العميل، ونساعد البراند يبيع أكبر قدر من الستوك.",
      "Launch":
        "الإطلاق",
      "Created the ad accounts on Meta and Google Ads, and set up tracking on the website and with the platforms.":
        "أنشأت الحسابات الإعلانية على Meta و Google Ads، وظبطت التراكينج على الموقع ومع المنصات.",
      "Before the sales campaigns:":
        "قبل حملات المبيعات:",
      "Awareness campaigns for the showroom opening, and simple Traffic campaigns to warm up the website and get the events firing on the platforms, so the conversion campaigns would start on real data instead of from zero.":
        "حملات Awareness لافتتاح المعرض، وحملات Traffic بسيطة لتسخين الموقع وتشغيل الإيفنتات على المنصات. علشان لما تبدأ حملات الكونفيرجن، تكون المنصات اتعلمت من بيانات حقيقية مش بادئة من الصفر.",
      "The store’s second month was November, so I used it for Black Friday campaigns.":
        "تاني شهر بعد الافتتاح كان نوفمبر، فاستغليته في حملات البلاك فرايداي.",
      "The brand’s logo is red, so I called the campaign Red Friday instead of Black Friday, to make it the brand’s own campaign and not one more seasonal offer like the rest of the market.":
        "لون لوجو البراند أحمر، فسمّيت الحملة Red Friday بدل Black Friday، علشان تبقى حملة البراند نفسه مش مجرد عرض موسمي زي باقي السوق.",
      "One ABO campaign with several ad sets, one per category:":
        "حملة واحدة ABO فيها أكثر من ad set، كل category في ad set لوحدها:",
      "General ad set:":
        "ad set عام:",
      "designs and videos about the store, the products, the offers, the discounts and the prices.":
        "تصاميم وفيديوهات عن المتجر والمنتجات والعروض والخصومات والأسعار.",
      "Fridges ad set:":
        "ad set للتلاجات:",
      "fridges only, with designs, videos and a catalog of fridges.":
        "للتلاجات بس، بتصاميم وفيديوهات وكتالوج خاص بالتلاجات.",
      "An ad set for air conditioners, and so on for every category.":
        "ad set للتكييفات، وهكذا لكل category.",
      "Why:":
        "ليه؟",
      "to see which category had the most demand, and to be able to scale that category on its own so it got its share of the budget.":
        "علشان أشوف أكتر category عليها طلب، وأقدر أعمل سكيلنج عليها لوحدها وتاخد حقها في البادجت.",
      "A Performance Max campaign with the same split: every category in its own asset group, each with different assets.":
        "حملة Performance Max بنفس التقسيمة: كل category في asset group لوحدها، وكل asset group فيها assets مختلفة.",
      "From 1 November to 11 December 2023, on 105K EGP of spend across both platforms:":
        "من 1 نوفمبر إلى 11 ديسمبر 2023، وبصرف 105K جنيه على المنصتين:",
      "The Performance Max campaign on Google Ads brought in 6.15M EGP in sales from 603 purchases, a 106x ROAS.":
        "حملة PMax على Google Ads حققت 6.15M جنيه مبيعات من 603 عملية شراء، و ROAS بقيمة 106x.",
      "The Red Friday campaign on Meta brought in 3.55M EGP in sales from 684 purchases, a 76x ROAS.":
        "حملة Red Friday على Meta حققت 3.55M جنيه مبيعات من 684 عملية شراء، و ROAS بقيمة 76x.",
      "The whole idea was to bring three things together at once: a competitive price, the opening offers and the Black Friday season.":
        "الفكرة كلها كانت إني أجمع 3 حاجات في نفس الوقت: سعر منافس، وعروض الافتتاح، وموسم البلاك فرايداي.",
      "Meta · Red Friday · Nov 1 – Dec 11, 2023":
        "Meta · Red Friday · 1 نوفمبر – 11 ديسمبر 2023",
      // ---- case: Home Appliances (Saudi Arabia) ----
      "E-commerce · Home Appliances · Saudi Arabia · Google Ads · May – July 2024":
        "E-commerce · Home Appliances · السعودية · Google Ads · مايو – يوليو 2024",
      "1.55M SAR in sales from Google Ads on 26.8K SAR spend: a Performance Max campaign split the right way, and a brand campaign that keeps the store’s name from its competitors.":
        "1.55M ريال مبيعات من Google Ads بصرف 26.8K ريال: PMax متقسّمة صح، وحملة براند تحمي اسم المتجر من المنافسين.",
      "SAR in sales":
        "ريال مبيعات",
      "purchases":
        "عملية شراء",
      "SAR spend":
        "ريال صرف",
      "I was responsible for Google Ads only. The website and tracking were sound, so the opportunity wasn’t on the site: it was in how the campaigns were built, and in the brand searches the competitors were taking.":
        "كنت مسؤول عن Google Ads فقط. الموقع والتراكينج كانوا سليمين، فالفرصة لم تكن في الموقع، بل في طريقة بناء الحملات وفي بحث البراند اللي كان المنافسين بياخدوه.",
      "Website review":
        "مراجعة الموقع",
      "I reviewed the website’s products and tracking. Everything was sound, so all the work went into the campaigns.":
        "راجعت الموقع من ناحية المنتجات والتراكينج، وكان كل شيء سليم، فركّزت الشغل كله على الحملات.",
      "Performance Max campaign":
        "حملة Performance Max",
      "One Performance Max campaign with several asset groups, each with its own assets and products.":
        "حملة PMax فيها أكثر من asset group، كل asset group فيها assets ومنتجات مختلفة.",
      "At first:":
        "في البداية:",
      "the asset groups followed the categories, large appliances on their own and small appliances on their own.":
        "قسّمت الـasset groups حسب الـcategories، يعني الأجهزة الكبيرة لوحدها والأجهزة الصغيرة لوحدها.",
      "Then:":
        "بعدها:",
      "I split them by performance instead: the best sellers in one asset group, and the products that weren’t moving in another, with a discount on them to get them moving.":
        "غيّرت التقسيم حسب الأداء: المنتجات الأكثر مبيعًا في asset group لوحدها، والمنتجات اللي مش بتتحرك في asset group لوحدها، وعليها خصم علشان تبدأ تتحرك.",
      "Brand campaign":
        "حملة البراند",
      "The problem:":
        "المشكلة:",
      "the brand name wasn’t used in any campaign, and competitors were running campaigns on our brand. When a customer searched for us by name, the competitors showed up first, so we were losing customers who were already looking for us.":
        "اسم البراند ما كانش مستخدم في الحملات، وكان فيه منافسين عاملين حملات على اسم البراند بتاعنا. فلما العميل يدوّر علينا بالاسم، يظهرله المنافسين قبلنا. يعني كنا بنخسر عملاء كانوا بيدوّروا علينا أصلًا.",
      "The fix:":
        "الحل:",
      "a Search campaign on the brand name.":
        "عملت حملة Search على البراند نيم.",
      "The result:":
        "النتيجة:",
      "the brand campaign alone brought in 452K SAR in sales at 80.5x ROAS, with a 57.8% CTR and 0.51 SAR per click.":
        "حملة البراند لوحدها جابت 452K ريال مبيعات، و ROAS بقيمة 80.5x، و CTR بقيمة 57.8%، وسعر كليك 0.51 ريال.",
      "From 1 May to 20 July 2024, the Google Ads campaigns brought in 1.55M SAR in sales from 1,192 purchases on 26.8K SAR spend, a 58x ROAS according to Google Ads: 1.10M from Performance Max and 452K from the brand campaign.":
        "من 1 مايو إلى 20 يوليو 2024 حققت حملات Google Ads حسب Google Ads مبيعات 1.55M ريال من 1,192 عملية شراء، بصرف 26.8K ريال، و ROAS بقيمة 58x: منها 1.10M من PMax، و 452K من حملة البراند.",
      // ---- case: Technology Store ----
      "E-commerce · Electronics · Saudi Arabia · November 2023 – March 2024":
        "E-commerce · Electronics · السعودية · نوفمبر 2023 – مارس 2024",
      "How I grew an electronics store's revenue without increasing its ad budget.":
        "زيادة إيرادات متجر إلكترونيات من غير زيادة البادجت الإعلاني.",
      "SAR in sales, VAT included":
        "ريال مبيعات شاملة الضريبة",
      "SAR average monthly sales":
        "ريال متوسط المبيعات الشهري",
      "The store's ad channels were performing steadily. The goal was to grow revenue and improve ROAS without increasing the budget.":
        "كان أداء المتجر مستقرًا نسبيًا على القنوات الإعلانية. والمطلوب كان زيادة الإيرادات وتحسين الـROAS بنفس البادجت، من غير الاعتماد على زيادة الصرف كطريقة للنمو.",
      "I focused on opportunities within the store: reallocating budget toward the categories and products with the greatest potential to grow sales.":
        "لذلك كان التركيز على فرص النمو الموجودة داخل المتجر نفسه: توزيع أذكى للبادجت، والـcategories والمنتجات التي عندها أكبر فرصة لمبيعات إضافية.",
      "Data analysis and the opportunity":
        "تحليل البيانات واكتشاف الفرصة",
      "I audited the website and ad accounts, analyzed category and product performance, and compared the store's prices and offers with competitors.":
        "بدأت بتحليل كامل للموقع والحسابات الإعلانية والـcategories والمنتجات، وقارنت أسعار المتجر وعروضه بأسعار المنافسين.",
      "The winning category.":
        "الفئة الوينر.",
      "Gaming products, including laptops, monitors, PCs and accessories, were among the store's strongest-demand categories, but had no dedicated ad strategy.":
        "فئة الـGaming (لابتوبات وشاشات وأجهزة PC وإكسسوارات) كان عليها من أعلى طلب في المتجر، ومع ذلك لم تكن لها استراتيجية إعلانية خاصة بها.",
      "I made Gaming the primary growth opportunity and focused the strategy on the products with the strongest demand in the store's own data.":
        "فاعتبرتها فرصة النمو الأساسية، ووجّهت الاستراتيجية نحو المنتجات الأعلى طلبًا حسب بيانات المتجر نفسه.",
      "Budget and campaign strategy":
        "توزيع البادجت واستراتيجية الحملات",
      "Rather than split budget evenly, I allocated the largest share to Gaming and coordinated the category strategy across Meta, Google Ads and Snapchat.":
        "بدل توزيع البادجت بالتساوي على الـcategories، خصّصت الجزء الأكبر لمنتجات الـGaming، بتوجّه واحد للفئة على المنصات الثلاث: Meta و Google Ads و Snapchat.",
      "I built a dedicated Gaming campaign with creative, video and catalog assets, keeping the message consistent from the ad through to the product page.":
        "بنيت كامبين كاملة للفئة: تصاميم وفيديوهات وكتالوج، بنفس الرسالة من الإعلان حتى صفحة المنتج.",
      "I also featured the Gaming category and its offers across the website through banners and pop-ups.":
        "والتغيير لم يكن في الإعلانات فقط: بانرات و Pop-ups على الموقع نفسه أبرزت الفئة وعروضها لكل زائر.",
      "Budget on payday":
        "البادجت على توقيت الرواتب",
      "Sales data showed demand rising from the 26th of each month.":
        "من تحليل المبيعات على مدار الشهر، ظهر أن الطلب يرتفع من يوم 26 مع نزول الرواتب.",
      "I reserved part of the budget for that period and increased spend on the campaigns and products already performing well.":
        "فخصّصت جزءًا من البادجت لهذه الفترة، لأسكيل فيها الحملات والمنتجات التي أداؤها جيد.",
      "This aligned spend with observed buying patterns instead of treating every day of the month the same.":
        "الهدف أن يمشي الصرف مع سلوك الشراء الفعلي، بدل التعامل مع كل أيام الشهر بنفس الطريقة.",
      "Website CRO and AOV":
        "تحسين الموقع ورفع الـAOV",
      "Alongside the campaigns, I improved product merchandising to increase order value, not only order volume:":
        "بالتوازي مع الحملات، عملت على طريقة عرض المنتجات في المتجر، لرفع قيمة الأوردر وليس عدد الأوردرات فقط:",
      "Product order.":
        "ترتيب المنتجات.",
      "I moved higher-value products higher on category pages to give them greater visibility.":
        "المنتجات الأعلى قيمة في أول صفحات الـcategories، لتظهر وتُباع أكثر.",
      "Complementary products.":
        "المنتجات المكمّلة.",
      "I surfaced related and complementary products during the purchase so customers could add them to their order.":
        "اقتراح منتجات مرتبطة ومكمّلة أثناء الشراء، ليضيفها العميل لأوردره كباندل.",
      "Together, these changes were designed to increase the value of traffic the campaigns were already generating.":
        "وبذلك أصبح كل عميل تجلبه الإعلانات يحقق إيرادًا أعلى من زيارته.",
      "Retargeting":
        "الريتارجتنج",
      "I expanded retargeting alongside prospecting, prioritizing people who showed intent, especially those who added a product to their cart without purchasing.":
        "زدت حملات الريتارجتنج للأشخاص الذين أبدوا اهتمامًا فعليًا، خصوصًا من أضاف إلى السلة ولم يشترِ، بجانب حملات الـProspecting.",
      "The goal was to recover incomplete purchases and make better use of existing paid traffic.":
        "الهدف: استرجاع المبيعات التي لم تكتمل، والاستفادة أكثر من ترافيك دفع المتجر ثمنه بالفعل.",
      "How I worked":
        "منهجية العمل",
      "I used an ongoing cycle of analysis and action:":
        "دورة مستمرة من التحليل والقرار:",
      "Compare category, product and pricing performance with competitors.":
        "تحليل الـcategories والمنتجات والأسعار مقارنة بالمنافسين.",
      "Identify high-demand categories and shift budget toward growth opportunities.":
        "تحديد الفئات الأعلى طلبًا، ونقل البادجت لفرص النمو.",
      "Align spend with the days when demand is highest.":
        "ربط الصرف بأيام الطلب العالي في الشهر.",
      "Improve product merchandising to support a higher AOV.":
        "تحسين عرض المنتجات على الموقع لرفع الـAOV.",
      "Review campaign and audience performance, then reallocate budget based on the results.":
        "مراجعة أداء الحملات والجمهور، وتحريك البادجت حسب النتائج.",
      "The strategy focused on growing revenue and improving ROAS with the existing budget by prioritizing Gaming, timing spend around demand and improving product merchandising.":
        "كان الهدف زيادة إيرادات المتجر وتحسين الـROAS بنفس البادجت الإعلاني، من خلال توزيع أذكى للصرف، وفئة الـGaming، وتوقيت الطلب، وقيمة أعلى للأوردر.",
      "Between November 2023 and March 2024, the store recorded 7.32M SAR in sales, including VAT, from 4,877 orders, with a 1,501 SAR AOV. The budget remained unchanged while I focused on reallocating spend toward the strongest opportunities.":
        "ومن نوفمبر 2023 إلى مارس 2024 حقق المتجر 7.32M ريال مبيعات (شاملة الضريبة) من 4,877 أوردر، و AOV بقيمة 1,501 ريال. خطوات بسيطة، لكن مع التحليل والمراجعة المستمرة رفعت الـRevenue والـROAS بنفس البادجت.",
      // ---- retargeting, added to the scaling stage of both stories ----
      "Retargeting.":
        "الريتارجتنج.",
      "Retargeting campaigns for people who added a donation to the cart without completing it, and for people who had already donated.":
        "حملات ريتارجتنج لمن أضاف تبرعًا إلى السلة دون أن يُكمله، ولمن تبرّع من قبل.",
      "Retargeting campaigns for people who added to the cart without buying, and for people who had already bought.":
        "حملات ريتارجتنج لمن أضاف إلى السلة ولم يشترِ، ولمن اشترى من قبل.",
      // ---- case: Footwear Store ----
      "E-commerce · Saudi Arabia · September 2024 – March 2025":
        "E-commerce · السعودية · سبتمبر 2024 – مارس 2025",
      "I took over the account at the start of Saudi National Day season. Over the next seven months, the store recorded 20.98M SAR in sales from 162,972 orders.":
        "بدأت الحساب مع موسم اليوم الوطني، ووصل المتجر إلى 20.98M ريال مبيعات و 162,972 أوردر خلال 7 أشهر.",
      "SAR store sales":
        "ريال مبيعات المتجر",
      "orders":
        "أوردر",
      "growth on the previous period":
        "نمو عن الفترة السابقة",
      "SAR AOV":
        "ريال AOV",
      "The store specializes in sharqi footwear, a traditional Saudi style, and had substantial inventory to sell. I took over the account at the start of National Day season, one of the year's most competitive periods. My focus was to improve the offer, accelerate sales and build a strategy that could scale across platforms.":
        "متجر سعودي متخصص في الأحذية الشرقية، لديه ستوك كبير جدًا، والمطلوب تحقيق أكبر عدد ممكن من المبيعات. بدأت مسؤوليتي عن الحساب مع موسم اليوم الوطني، في واحدة من أكثر فترات السنة منافسة. وكان التحدي: تحريك المبيعات بسرعة، وتحسين العروض، وبناء استراتيجية تقبل السكيلنج على أكثر من منصة.",
      "Store and offer review":
        "مراجعة المتجر والعروض",
      "Before launching campaigns, I reviewed tracking, the site experience, offers and pricing. Products were sold individually, limiting AOV, so I kept the single-item options and added bundles and offers based on market and competitor research.":
        "راجعت المتجر قبل أي إنفاق: التراكينج وتجربة الموقع والعروض والأسعار. وكانت المشكلة في التسعير: كل منتج يُباع منفردًا، فيبقى الـAOV منخفضًا جدًا. أبقيت المنتجات الفردية، وأضفت باكدجات وعروض بعد مراجعة السوق والمنافسين.",
      "I built the landing page around the offers, product quality and range of styles, with clear product descriptions and customer reviews as social proof.":
        "بنيت اللاندينج بيدج على العروض، وجودة المنتجات، وأشكال وألوان غير موجودة في السوق، ووصف واضح لكل منتج، مع سوشيال بروف من سكرينات آراء العملاء.",
      "Set up tracking and conversion measurement across Meta, TikTok, Snapchat and Google Ads.":
        "ضبطت التراكينج والكونفيرجن على Meta و TikTok و Snapchat و Google Ads.",
      "Creative and preparation":
        "الكرييتف والتجهيز",
      "Briefed creative across several angles, including dedicated assets for bundles and promotional offers.":
        "طلبت تصاميم بأكثر من أنجل، وتصاميم للباكدجات والعروض.",
      "Re-edited the store's existing videos with different hooks, giving us new versions to test without producing content from scratch.":
        "أعدت استخدام الفيديوهات الموجودة في نسخ جديدة بهوكات مختلفة، بدل إنتاج محتوى جديد من الصفر.",
      "Before launch, I prepared Google keywords, headlines and descriptions; creative in each required format; videos; the budget plan; and the testing and scaling strategy.":
        "جهّزت كل شيء قبل الإطلاق: الكيووردز والهيدلاينز والديسكريبشن لـ Google، والتصاميم بكل المقاسات، والفيديوهات، والبادجت بلان، واستراتيجية التيست والسكيلنج.",
      "Researched the market, competitors and search terms, then grouped keywords into relevant ad groups and created a separate brand campaign.":
        "ريسيرش مفصّل للمنافسين والسوق والكيووردز، وتقسيم الكيووردز على أكثر من ad group، مع حملة منفصلة على البراند نيم.",
      "Most keywords used phrase match.":
        "معظم الكيووردز Phrase Match.",
      "Monitored keyword performance and the Search terms report to see which queries drove traffic.":
        "متابعة الكيووردز وتقرير Search Terms باستمرار، لأعرف بالضبط من أي عمليات بحث يأتي الترافيك.",
      "Structured Performance Max asset groups by product: one for best sellers and another for inventory we wanted to clear, with a dedicated offer for each group.":
        "حملات Performance Max مقسّمة إلى asset groups حسب المنتجات: asset group للمنتجات الأكثر مبيعًا، وأخرى للمنتجات التي نحتاج تحريكها من الستوك، ومعها عرض خاص.",
      "Tested creative in Conversions campaigns, then scaled the winners through Conversion Value and Catalog campaigns.":
        "تيست الكرييتف بحملات Conversions، ثم حملات Conversion Value و Catalog على الوينرز.",
      "Tested several landing pages and continued with the strongest performer.":
        "تيست أكثر من لاندينج بيدج، والإكمال على اللاندينج الوينر.",
      "I started with Automatic Placements. After Instagram showed a higher conversion rate, I separated Facebook and Instagram campaigns and directed most of the scaling budget to Instagram.":
        "بدأت بـ Automatic Placements، ومع التحليل ظهر أن الكونفيرجن ريت على Instagram أعلى، فقسّمت الحملات بين Facebook و Instagram وركّزت السكيلنج على Instagram.",
      "Women, buying a gift.":
        "النساء كمشتريات للهدية.",
      "Men were the primary buyers, but I also tested a gifting angle for women: a simple gift for their husbands.":
        "المنتج رجالي والمشتري الأساسي هو الرجل، لكني استهدفت النساء بأنجل مختلف: هدية بسيطة تقدّمها لزوجك.",
      "I used the same creative testing approach, then scaled through Conversion, Conversion Value and Target CPA campaigns.":
        "التيست نفسه على الكرييتف، ثم السكيلنج بحملات Conversion و Conversion Value و Target CPA.",
      "Campaigns for women on the gift angle.":
        "حملات مخصّصة للنساء بأنجل الهدية.",
      "Tested Auto Bid, Target Cost and Max Bid alongside broad targeting to identify a workable CPA.":
        "تيست للـbidding strategy: بدأت بالـAuto Bid، ثم اختبرت Target Cost و Max Bid لمعرفة الـCPA المناسب للعمل عليه، مع حملات Broad.",
      "Tested Single Video, Single Image and Story ads, with each format in its own ad set.":
        "تيست لأنواع الإعلانات: Single Video و Single Image و Story، كل نوع في ad set مستقل.",
      "Tested the landing pages here too.":
        "وتيست اللاندينج بيدج كذلك.",
      "After three days of testing on a small budget, I began scaling in two ways:":
        "بعد 3 أيام من التيست ببادجت صغيرة، بدأت السكيلنج بطريقتين:",
      "increased budgets on the winning campaigns.":
        "رفع بادجت الحملات الرابحة.",
      "launched new campaigns using winning creative and briefed new assets around the strongest angles.":
        "إطلاق حملات جديدة بالكرييتف الوينر، مع طلب كرييتف جديد على الأنجلز الرابحة نفسها.",
      "Creative that performs well on one platform may not perform as well on another, so I tested and scaled each platform separately.":
        "الكرييتف الرابح على منصة ليس بالضرورة رابحًا على غيرها، والعكس، لذلك كان التيست والسكيلنج لكل منصة على حدة.",
      "Comments and messages.":
        "التعليقات والرسائل.",
      "I worked with the community moderator to respond to comments and messages across platforms, maintain engagement on the ads and convert inquiries into orders.":
        "نسّقت مع الموديريتور لمتابعة التعليقات والرسائل على المنصات، فبقي الإنجيجمنت والسوشيال بروف على الإعلانات في حالة جيدة، وهو ما يدعم الـQuality Ranking و Engagement Ranking للإعلان. وكنا نقفل أوردرات من التعليقات والرسائل نفسها.",
      "Throughout the campaign, I stayed in touch with the client about inventory, returns and store performance so media decisions reflected what was happening in the business.":
        "وطوال الفترة كنت أتابع مع العميل حالة الستوك والمرتجعات والوضع العام، لأربط القرارات الإعلانية بالواقع الفعلي للمتجر.",
      "Between September 2024 and March 2025, the store recorded 20.98M SAR in sales from 162,972 orders, up 112% from the previous period, with a 129 SAR AOV. During this period, I worked on the offer and creative, then tested and scaled each platform separately.":
        "من سبتمبر 2024 إلى مارس 2025 حقق المتجر 20.98M ريال مبيعات من 162,972 أوردر، بنمو 112% عن الفترة السابقة، و AOV بقيمة 129 ريال. وهذه أرقام المتجر خلال فترة عملت فيها على العروض والكرييتف والتيست والسكيلنج لكل منصة على حدة.",
      // ---- case: Charity Organization ----
      "We exceeded the 7M SAR donation target during Hajj season, with an open-ended budget and about two weeks to reach it.":
        "تجاوزنا تارجت 7 ملايين ريال تبرعات في موسم الحج، خلال قرابة أسبوعين بميزانية مفتوحة.",
      "SAR in donations · charity dashboard":
        "ريال تبرعات · لوحة الجمعية",
      "donors":
        "متبرع",
      "SAR ad spend":
        "ريال إنفاق إعلاني",
      "SAR average donation":
        "ريال متوسط التبرع",
      "Hajj season is one of the year's busiest fundraising periods, and competition for donors increases sharply. We had about two weeks, an open-ended budget and a 7M SAR target.":
        "موسم الحج أعلى موسم تبرعات في السنة، وأشدّ موسم منافسة على المتبرع. كان أمامنا قرابة أسبوعين وميزانية مفتوحة وتارجت 7 ملايين ريال.",
      "The challenge was allocating spend by location and time. A nationwide campaign could spend throughout the day and concentrate on major cities, leaving other locations and time windows underserved.":
        "التحدي لم يكن في زيادة الإنفاق، بل في أين ومتى يُصرف. حملة تستهدف السعودية كلها كانت ستصرف الميزانية في أي وقت وفي المدن الكبرى وحدها، وتضيّع جزءًا كبيرًا من التبرعات والمتبرعين.",
      "Before launch":
        "قبل الإطلاق",
      "Checked that the website could handle the expected seasonal traffic.":
        "جهّزت الموقع لتحمّل ضغط الترافيك العالي.",
      "Reworked the donation landing pages for CRO and content. I clarified the case for donating and highlighted social proof, official charity permits and donor testimonials to build trust.":
        "ضبطت صفحات المشاريع من ناحية CRO والمحتوى: رسالة مقنعة، وسوشيال بروف، والتصاريح، وآراء المتبرعين التي تمنح الثقة.",
      "Coordinated shooting angles and hooks with the creative team and the influencers and models in the ads. We prepared several edits of each video, each with a different opening hook.":
        "اتفقت مع فريق الكرييتف والإنفلونسرز والموديلز اللي بيظهروا في الإعلانات على زوايا التصوير والهوكات، ونسخ متعددة من كل فيديو بهوكات مختلفة.",
      "Testing":
        "مرحلة التيست",
      "Launched Maximize Conversions campaigns using ABO, with one campaign per influencer or model featured in the ads, to identify one or two winning creative versions for each.":
        "حملة Maximize Conversions بنظام ABO لكل إنفلونسر أو موديل على حدة، علشان أخرج من كل واحد بنسخة أو نسختين وينر.",
      "I ran the same test separately on each platform. Performance varied by platform: creative that won on one did not necessarily win on another.":
        "التيست نفسه على كل منصة منفصلة، لأن الوينر على منصة ليس بالضرورة وينر على غيرها. وهذا ما ظهر فعلًا: نسخ رابحة على منصة كانت خاسرة على أخرى، والعكس.",
      "Scaling":
        "مرحلة السكيل",
      "Once we identified the winning creative, I shifted to Maximize Conversion Value campaigns and built the scaling plan around donor behavior:":
        "بعد تحديد الوينرز انتقلت إلى حملات Maximize Conversion Value، وبنيت السكيل على سلوك المتبرعين:",
      "Scaling by prayer times.":
        "السكيل حسب مواقيت الصلاة.",
      "Saudi Arabia's major cities are far apart, and prayer times can differ by more than 30 minutes between them. The data showed that donations often increased after prayer, especially after Friday prayer, Fajr and Maghrib. A nationwide campaign would scale spend across broad time windows. I instead created city-specific campaigns for Riyadh, Jeddah and Dammam, prioritizing the cities that generated the most donations and scaling each around its local prayer times.":
        "السعودية دولة كبيرة جدًا، ومدنها الرئيسية كبيرة ومتباعدة، مثل الرياض وجدة والدمام والمدينة المنورة وغيرها، والفرق في مواقيت الصلاة بين مدينة وأخرى قد يصل إلى أكثر من نصف ساعة. وفي الوقت نفسه اكتشفت أن المتبرعين هنا يفضّلون دائمًا التبرع بعد الصلاة، خصوصًا صلاة الجمعة وصلاة الفجر والمغرب. فلو رفعت الميزانية على حملة تستهدف السعودية كلها، سيكون السكيل عامًا: يصل الإعلان ويتم السكيل في أي وقت، لا في الأوقات التي تحدث فيها ذروة التبرعات. لذلك قسّمت الحملات حسب المدن والمناطق: حملة فيها أكثر من ad set بنظام ABO، واحد للرياض فقط، وآخر لجدة فقط، وآخر للدمام فقط، مع البدء بالمدن الكبرى التي تأتي منها معظم التبرعات. ولأن لكل مدينة مواقيت صلاة مختلفة، أصبح السكيل في كل مدينة على مواقيت الصلاة فيها.",
      "Cities the budget never reached.":
        "المدن التي لا تصلها الميزانية.",
      "Nationwide targeting concentrated most spend in Riyadh, Jeddah and Dammam. I created separate ad sets for underserved cities, giving them dedicated budget; those cities also contributed a meaningful share of donations.":
        "الاستهداف على السعودية كلها كان يصرف معظم الميزانية في الرياض وجدة والدمام. فأنشأت ad sets منفصلة للمدن الأقل نصيبًا، فأخذت حقها من الميزانية، وجاءت منها نسبة جيدة جدًا من التبرعات.",
      "Men and women.":
        "الرجال والنساء.",
      "Men received most of the spend, while women generated a higher ROAS on a smaller budget. I split the audiences into separate campaigns so I could allocate spend based on performance.":
        "الرجال كانوا يأخذون معظم الميزانية، بينما ROAS النساء أعلى ونصيبهن من الصرف قليل جدًا. ففصلتهم في حملات مستقلة.",
      "Age groups.":
        "الفئات العمرية.",
      "I gave age groups receiving little spend their own ad sets and budgets.":
        "الفئات التي كانت تأخذ نسبة قليلة من الميزانية فُصلت في ad sets بميزانية خاصة.",
      "The same system ran on Meta, TikTok and Snapchat.":
        "النظام نفسه طُبّق على Meta و TikTok و Snapchat.",
      "We finished above target. The charity's dashboard recorded 7.82M SAR in donations from 33,461 donors between May 1 and 25, 2026, against a 7M SAR target. Ad spend across Meta, TikTok and Snapchat was 2.74M SAR.":
        "أغلقنا الموسم فوق التارجت: سجّلت لوحة تبرعات الجمعية 7.82M ريال من 33,461 متبرعًا من 1 إلى 25 مايو 2026، مقابل تارجت 7 ملايين ريال وإنفاق إعلاني 2.74M ريال على Meta و TikTok و Snapchat.",
      "The campaign combined donation pages prepared for seasonal traffic, structured creative testing and scaling based on donor behavior.":
        "جاءت النتيجة من ثلاثة أشياء معًا: صفحات تبرع جاهزة، وتيست منظم للكرييتف، وسكيل مبني على سلوك المتبرعين.",
      "Platforms":
        "المنصات",
      "My role":
        "دوري",
      "Performance strategy · Creative testing · Media buying · Budget allocation · Scaling and optimization":
        "استراتيجية الأداء · اختبار Creative · الميديا باينج · توزيع الميزانية · التوسّع والتحسين",
      // أسواق
      '🇸🇦 Saudi Arabia': '🇸🇦 السعودية', '🇪🇬 Egypt': '🇪🇬 مصر', '🇦🇪 UAE': '🇦🇪 الإمارات',
      // أنواع الحسابات
      'Perfume Store': 'متجر عطور', 'Perfume Brand': 'علامة عطور',
      'Technology Store': 'متجر إلكترونيات', 'Home Appliances': 'أجهزة منزلية',
      'Task Management SaaS': 'منصة إدارة مهام', 'Car Rental': 'تأجير سيارات',
      'Accounting Office': 'مكتب محاسبة', 'Water Filters': 'فلاتر مياه',
      'Roastery Shop': 'محمصة بن',
      // مؤشرات
      'Sales': 'المبيعات', 'Orders': 'الطلبات', 'ROAS': 'ROAS',
      'Leads': "Leads", 'Cost / Lead': "CPL", 'Spend': 'الإنفاق',
      'Donations': 'التبرعات', 'No. of donations': 'عدد التبرعات', 'Charity Organization': 'جمعية خيرية',
      'Overview': 'الإجمالي', 'Donation dashboard': 'لوحة التبرعات',
      'Footwear Store': 'متجر أحذية',
      'Paid Acquisition': 'اكتساب العملاء عبر الإعلانات',
      "I manage Meta, Google, TikTok and Snapchat as one coordinated paid acquisition program.":
        'Meta و Google و TikTok و Snapchat تعمل كمنظومة واحدة لاكتساب العملاء، لا أربعة حسابات منفصلة.',
      'Campaign Strategy & Scaling': "استراتيجية الحملات و Scaling",
      'Account structure, budget allocation and scaling systems that hold CPA while spend grows.':
        'بنية الحساب وتوزيع الميزانية وأنظمة توسيع تحافظ على تكلفة الطلب مع زيادة الإنفاق.',
      'Pixel, CAPI, server-side events, GTM and GA4 — so every decision rests on numbers you can trust.':
        'Pixel و CAPI والأحداث من الخادم و GTM و GA4 — لتستند قراراتك إلى بيانات موثوقة.',
      'Creative Testing': "Creative Testing",
      'Hooks, angles and offers tested on a fixed framework, so winners are found on purpose.':
        'أختبر Hook وزوايا الرسائل والعروض بطريقة منظمة لاكتشاف ما يحقق أفضل نتيجة.',
      'Funnel & CRO': 'Funnel و CRO',
      'Landing pages, offers and checkout — the part of the funnel that decides what the traffic is worth.':
        'صفحات الهبوط والعروض وإتمام الشراء — الجزء الذي يحدد قيمة الزيارات فعليًا.',
      'Performance Analytics': "Performance Analytics",
      'Attribution, dashboards and reporting that answer one question: where does the next riyal go?':
        'الإسناد ولوحات المتابعة والتقارير للإجابة على سؤال واحد: أين يذهب الريال التالي؟',
      'Audit': 'الفحص',
      "I review the account, funnel, tracking, creative and unit economics before recommending where to spend.":
        'أراجع الحساب والـFunnel و Tracking و Creative وتكلفة اكتساب العميل قبل إطلاق الحملات.',
      'Strategy': 'الاستراتيجية',
      "I build campaign structure, KPIs, budget allocation and a testing plan around business goals and margins.":
        'هيكل الحملات ومؤشرات الأداء وتوزيع الميزانية وخطة الاختبار ترتبط بهامش الربح وأهداف النشاط.',
      'Launch': 'الإطلاق',
      "I set up campaigns and measurement together so performance is clear from day one.":
        'الحملات والتتبّع والقياس تُبنى معًا، لتكون النتائج مقروءة من اليوم الأول.',
      'Test': 'الاختبار',
      "I test creative, audiences, offers and campaign structures one variable at a time.":
        'اختبار الإعلانات والجمهور والعروض والبنية، متغيّر واحد في كل مرة.',
      'Optimize': 'التحسين',
      "I shift budget toward campaigns meeting their targets and away from those that aren't.":
        'تتحرك الميزانية نحو ما يربح وبعيدًا عما لا يربح — يوميًا لا شهريًا.',
      'Scale': "Scaling",
      "I increase spend or expand reach when performance supports it, while monitoring CPA and margin.":
        "Vertical و Horizontal Scaling يحمي CPA والربح، بدل الجري وراء الحجم.",
      'Advertising': 'الإعلانات', 'Analytics': 'التحليلات',
      'Tracking & Attribution': 'التتبّع والإسناد', 'Commerce': 'المتاجر',
      'Lifecycle': 'التواصل مع العملاء', 'Workflow': 'إدارة العمل',
      'Track': 'التتبّع', 'Analyze': 'التحليل',

      'Snapchat · 2nd account': 'سناب شات · الحساب الثاني',
      // the loop, one line each
      "I set up and verify key events across platforms so reporting starts with reliable data.":
        'أتحقق من إعداد الأحداث على كل منصة لتوحيد مصدر بيانات الأداء.',
      "I review performance by creative, audience and product, not only at account level.":
        'أحلل النتائج على مستوى الإعلان والجمهور والمنتج، إلى جانب مؤشرات الحساب العامة.',
      "I test one variable at a time to understand what changes performance.":
        'أختبر متغيرًا واحدًا في كل مرة حتى أعرف سبب تحسن النتيجة.',
      "I increase budgets or expand reach while monitoring CPA and margin.":
        'زيادة الميزانية تدريجيًا وتوسيع الوصول، مع الحفاظ على ثبات CPA وهامش الربح.',
      // services — the scope line and its three points
      "A clear plan for budget allocation, performance targets and what to test next.":
        'خطة توضح أين تُستثمر الميزانية وما العائد المتوقع منها.',
      "Reliable tracking that gives you data you can act on.":
        'بيانات دقيقة تساعد على اتخاذ قرارات واضحة.',
      "Structured creative testing to identify repeatable winners.":
        'الإعلانات الرابحة تُكتشف بنظام لا بالصدفة.',
      "Landing pages, offers and checkout flows that help paid traffic convert.":
        'الجزء من المسار الذي يحدد القيمة الحقيقية للزيارات.',
      "Dashboards and attribution that show how campaigns contribute to business results.":
        "لوحة واحدة تجيب: أين ذهبت الميزانية، وما العائد منها.",
      "Campaign structure tailored to each platform":
        'بناء هيكل الحساب والحملات لكل منصة على حدة',
      "Budget allocation based on performance and business goals":
        'توزيع الميزانية بين المنصات حسب الهامش لا حسب العادة',
      "Ongoing optimization against agreed CPA and ROAS targets":
        "Optimization يومي على أهداف CPA و ROAS",
      "CPA and ROAS targets aligned with your margins and business goals":
        "تحديد Target CPA و ROAS انطلاقًا من هامش الربح",
      "A scaling plan for budget increases and audience expansion":
        "خطة Scaling واضحة: متى نرفع الميزانية، ومتى نفتح جمهورًا جديدًا",
      "Budget limits tested before increasing spend":
        'اختبار سقف الميزانية قبل رفعه',
      'Pixel, CAPI and server-side events':
        "Pixel و CAPI و Server-side Events",
      "GTM, GA4 and ad-platform conversion setup":
        'إعداد GTM و GA4 وتحويلات المنصات',
      "Event checks before launch and major budget changes":
        'مراجعة الأحداث قبل أي قرار خاص بالميزانية',
      "Hooks, creative angles and offers tested one at a time":
        "اختبار Hook و Angle والعرض، كل واحد على حدة",
      'Creative briefs written from what the data says':
        "Creative Briefs مبنية على البيانات",
      "A creative refresh cadence guided by performance signals":
        "تجديد Creative قبل أن يرفع Ad Fatigue قيمة CPA",
      "Landing page and offer reviews aligned with the ad promise":
        'مراجعة Landing Page والعرض للتأكد من تطابقهما مع رسالة الإعلان',
      "Checkout and form friction reviewed and reduced step by step":
        'إزالة عوائق الدفع والنماذج خطوة بخطوة',
      'A/B tests run on the step with the most traffic':
        'اختبارات A/B على الخطوة الأكثر زيارات',
      'Attribution across platforms and store data':
        "Attribution يجمع بين المنصات وبيانات المتجر",
      'A live dashboard in Looker Studio or GA4':
        'لوحة حيّة على Looker Studio أو GA4',
      "Weekly reporting with clear next steps":
        'قراءة أسبوعية تنتهي بخطوات تنفيذية', 'Car Parts Store': 'متجر قطع غيار سيارات',
      'Results summary · from ad reports': 'ملخص النتائج · من تقارير الإعلانات', 'Revenue': 'الإيرادات', 'Donated': 'مبلغ التبرعات', 'Avg. order': 'متوسط الطلب',
      'Perfume Brand': 'علامة عطور', 'Platforms': 'المنصات', 'Top sales': 'أعلى مبيعات', 'Top ROAS': 'أعلى عائد',
      'Google Search': 'Google بحث', 'Google PMax': 'Google PMax',
      'Meta · Jan 26 – Feb 28': 'Meta · 26 يناير – 28 فبراير', 'Snapchat · Jan 15 – Mar 1, 2024': 'Snapchat · 15 يناير – 1 مارس 2024',
      'Google PMax · May 1 – Jul 20, 2024': 'Google PMax · 1 مايو – 20 يوليو 2024', 'Google Search · May 1 – Jul 20, 2024': 'Google بحث · 1 مايو – 20 يوليو 2024',
      'Google PMax · Nov 1 – Dec 11, 2023': 'Google PMax · 1 نوفمبر – 11 ديسمبر 2023',
      'Google PMax · Feb 6 – Jun 26, 2023': 'Google PMax · 6 فبراير – 26 يونيو 2023', 'Google Search · Feb 6 – Jun 26, 2023': 'Google بحث · 6 فبراير – 26 يونيو 2023',
      'Store · Nov 2023 – Mar 2024': 'المتجر · نوفمبر 2023 – مارس 2024',
      'Google Search · Dec 2023 – Jan 2024': 'Google بحث · ديسمبر 2023 – يناير 2024',
      'Google PMax · Dec 2023 – Jan 2024': 'Google PMax · ديسمبر 2023 – يناير 2024',
      'Meta · Jan – Apr 2024': 'Meta · يناير – أبريل 2024',
      'Snapchat · Jan – Jul 2024': 'Snapchat · يناير – يوليو 2024', 'Store dashboard': 'لوحة المتجر', 'Growth': 'النمو',
      'Snapchat · USD account': 'Snapchat · حساب بالدولار',
      'Conversations': 'محادثات', 'Cost / Msg': 'تكلفة المحادثة',
      // أنواع الحملات — اسم المنصة يفضل إنجليزي والنوع يتعرّب
      'Google Ads (Search)': 'Google Ads (بحث)',
      'Google Ads (PMax)': 'Google Ads (أداء أقصى)',
      'Meta (Messages)': 'Meta (رسائل)',
      // وسوم
      'Search': 'بحث', 'Conversion': 'تحويل', 'Lead Gen': 'جذب عملاء',
      // ما الذي أعمله
      'Ad Serving': 'Ad Serving', 'Analytical Skills': 'مهارات تحليلية',
      'Conversion Tracking': "Conversion Tracking", 'Remarketing': 'Remarketing',
      'Reporting': 'إعداد التقارير', 'A/B Testing': 'اختبارات A/B',
      'Campaign Optimization': 'تحسين الحملات',
      'Communication & Collaboration': 'التواصل والعمل مع الفرق',
      // الخدمات
      'E-commerce': 'التجارة الإلكترونية',
      'Full-funnel structures built to scale online stores and one-product brands.':
        'بناء منظومة Funnel متكاملة تساعد المتاجر الإلكترونية وعلامات المنتج الواحد على النمو.',
      'Scaling & Optimization': 'التوسّع والتحسين',
      'Vertical and horizontal scaling without breaking CPA or profit margins.':
        'توسّع رأسي وأفقي دون أن ترتفع تكلفة الاكتساب أو يتآكل هامش الربح.',
      'Campaign Management': 'إدارة الحملات',
      'End-to-end planning, launch, and daily optimization across platforms.':
        'تخطيط وإطلاق ومتابعة يومية للحملات عبر كل المنصات.',
      'Google Ads': 'إعلانات Google',
      'Search, Shopping, and Performance Max campaigns that capture intent.':
        'حملات بحث وتسوّق و Performance Max تلتقط نية الشراء في لحظتها.',
      'Search, Shopping, and Performance Max campaigns that capture intent':
        'حملات بحث وتسوّق و Performance Max تلتقط نية الشراء في لحظتها',
      'Pixel, CAPI, server-side events, and clean attribution setups.':
        'إعداد Pixel و CAPI والأحداث من جهة الخادم، مع إسناد نظيف لا يضيّع بيانات.',
      'Executive-ready insights that tie every metric back to revenue.':
        'تقارير جاهزة للإدارة تربط كل مؤشر برقم الإيراد في النهاية.',
      'Performance Marketing': 'تسويق الأداء',
      'Data-driven channels optimized for real business outcomes.':
        'قنوات تُدار بالبيانات وتُقاس بنتائج تجارية حقيقية لا بمؤشرات سطحية.',
      'ROAS / ROI / Retargeting': 'العائد وإعادة الاستهداف',
      'Profit-focused remarketing that brings buyers back to convert.':
        'إعادة استهداف تركّز على الربح وتُعيد المشتري ليُكمل عملية الشراء.',
      'Creative Direction': 'التوجيه الإبداعي',
      'Hook-driven concepts, scripts, and visuals built for paid social.':
        'أفكار ونصوص ومواد بصرية مبنية على «الخطّاف» الأول، مصمّمة لإعلانات السوشيال.',
      'Audit & Growth': 'التدقيق والنمو',
      'Deep account audits and a clear roadmap to unlock the next level.':
        'تدقيق عميق للحساب وخارطة طريق واضحة للوصول إلى المستوى التالي.',
    },
  },
};
