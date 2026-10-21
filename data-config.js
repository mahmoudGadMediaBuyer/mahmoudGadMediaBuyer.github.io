/* =========================================================
   SITE DATA — edit this file only to update site content.
   Case study logos: drop PNG files into assets/logos/ using
   the filenames referenced below (logo: "assets/logos/xxx.png").
   Until a file exists, a colored initials placeholder is shown.
   ========================================================= */

const SITE_DATA = {
  // Client logo marquee. Order here = order on screen.
  // Remove a line to drop a logo; no component changes needed.
  // Client logo strip style: "tile" = white card behind each logo,
  // "plain" = logo straight on the dark ground. One-word switch.
  logoStyle: "tile",

  // key: true marks the clients Mahmoud wants seen first: larger on the globe,
  // ringed, kept on its middle band, named first, and first in the square.
  clients: [
    { name: "100 Watt", logo: "assets/logos/100-watt.png", bg: "#fbeef0", key: true },
    { name: "Moaz Pharmacy", logo: "assets/logos/1200x630wa.png", bg: "#ffffff", key: true },
    { name: "Client", logo: "assets/logos/273f9a8e-ed36-4c8f-8dea-772abcf6b2ed.png", bg: "#282217" },
    { name: "Saudi Oud Center", logo: "assets/logos/2wvaaeqq9ksmsdtphaknplejuqm4mkfv40obgbtn.png", bg: "#f6f6f5", scale: 98, key: true },
    { name: "Hats Design Studio", logo: "assets/logos/385758111-663718309069823-4818112914134233472-n.png", bg: "#191728" },
    { name: "Beauty Elena", logo: "assets/logos/462295814-496597723275628-3849022124690097324-n.png", bg: "#f6f6f5" },
    { name: "SAR for Shoes", logo: "assets/logos/467639251-2323655747977072-5326972089541191345-n.png", bg: "#282217" },
    { name: "Alamoudi", logo: "assets/logos/5164575a3b415866208a4131b13afccf77fa9800-778x778.png", bg: "#ffffff", scale: 98, key: true },
    { name: "Arabesque", logo: "assets/logos/arabesque.png", bg: "#eef6fb", scale: 98 },
    { name: "Ashrafco", logo: "assets/logos/asharfco.png", bg: "#fbf6ee", scale: 98 },
    { name: "Audit Home", logo: "assets/logos/audit-home.png", bg: "#eef3fb" },
    { name: "Abdullah Alamoudi — Zakat & Tax", logo: "assets/logos/aztec.png", bg: "#282217" },
    { name: "Al Dakheel", logo: "assets/logos/dakheel.png", bg: "#281e17", key: true },
    { name: "Dimaan", logo: "assets/logos/dimaan.png", bg: "#eefbf6" },
    { name: "Client", logo: "assets/logos/dncogluocjea81q5kqfkuyiatlvbojymsnzvjouq.png", bg: "#fbf3ee" },
    { name: "Enwan Developments", logo: "assets/logos/enwan.png", bg: "#282217" },
    { name: "Golden Baby", logo: "assets/logos/golden-baby.png", bg: "#fbf6ee", key: true },
    { name: "Golden House", logo: "assets/logos/golden-house.png", bg: "#fbf6ee" },
    { name: "Golden Technology", logo: "assets/logos/golden-tech.png", bg: "#ffffff", scale: 98, key: true },
    { name: "Gulf Gardens", logo: "assets/logos/gulf-gardens.png", bg: "#222817" },
    { name: "Hamad Perfumes", logo: "assets/logos/hamad.png", bg: "#f6f6f5" },
    { name: "Home Sport", logo: "assets/logos/home-sports-logo.png", bg: "#eef3fb" },
    { name: "Nuts City", logo: "assets/logos/image-removebg-preview.png", bg: "#fbf6ee" },
    { name: "Hazal Rent a Car", logo: "assets/logos/logo-3.png", bg: "#fbf3ee" },
    { name: "Saudi Oud Center", logo: "assets/logos/logo-63b5bd08f41a5.png", bg: "#fbf6ee", scale: 98, key: true },
    { name: "Client", logo: "assets/logos/logo-web-e1679300623970-removebg-preview.png", bg: "#282217" },
    { name: "Lorev", logo: "assets/logos/logo2-99b24819-a58c-4cf6-bc32-4dbd7deb0154.png", bg: "#1b1b21" },
    { name: "Maestro Rent a Car", logo: "assets/logos/maestro.png", bg: "#eefbf6" },
    { name: "Mhmmi", logo: "assets/logos/mhmmi.png", bg: "#fbeef0" },
    { name: "Plus Audit", logo: "assets/logos/plus-audit.png", bg: "#eef6fb" },
    { name: "Range Star", logo: "assets/logos/range-star-logo-cars-parts-accessories.png", bg: "#f6f6f5", scale: 98 },
    { name: "Revolution Beauty London", logo: "assets/logos/revolution.png", bg: "#f6f6f5", scale: 98, key: true },
    { name: "Roses New Capital", logo: "assets/logos/roses.png", bg: "#f6f6f5" },
    { name: "Teenager Startups", logo: "assets/logos/teenager.png", bg: "#f9eefb" },
    { name: "Selected Textiles", logo: "assets/logos/udbkoolnt6tluhmxisbyf5svkpgvis4rysvnnz5f.png", bg: "#eef9fb" },
    { name: "Vision Consultancy", logo: "assets/logos/vision.png", bg: "#fbf6ee" },
    { name: "Ashwered", logo: "assets/logos/xofedyxi-400x400.png", bg: "#eef3fb", key: true },
  ],

  // Hero marquee — platforms worked with
  marquee: [
    "Meta", "Instagram", "TikTok", "Snapchat", "Google Ads", "YouTube"
  ],

  // "What I do" tags in the About section
  whatIDo: [
    "Ad Serving",
    "Analytical Skills",
    "Conversion Tracking",
    "Remarketing",
    "Reporting",
    "A/B Testing",
    "Campaign Optimization",
    "Communication & Collaboration"
  ],

  // Case studies — one card per client, real account data from the screenshots.
  // `results` holds each screenshot's platform-reported spend / revenue / orders
  // in its own currency. Card stats, the case overview and the hero totals are
  // all computed from it, so adding or removing a case updates everything.
  // Cases without revenue (lead gen, messages) keep hand-written `stats`.
  // Conversion to USD for the overview and hero totals (SAR and AED are pegged;
  // EGP uses the 2023 official rate, when those Egypt campaigns ran).
  fx: { USD: 1, SAR: 3.75, AED: 3.6725, EGP: 30.9 },

  // Hero stats. Spend and orders are summed from `work` unless overridden here.
  heroStats: {
    spendOverrideUSD: 10000000,    // total career spend (his figure); null = sum of the case screenshots
    // store dashboards only (one source per client, no platform overlap):
    // Footwear on Salla 162,972 + Technology Store on Magento 4,877
    ordersOverride: 167849,
    peakDailyBudgetUSD: 130000,
    peakCampaignsPerDay: 30,
  },

  work: [
    {
      // One client, three platforms, May 2026. `proofs` opens as a gallery.
      // Revenue is platform-reported: each platform attributes on its own.
      title: "Charity Organization",
      place: "🇸🇦 Saudi Arabia · Meta · TikTok · Snapchat",
      story: {
        headline: "We exceeded the 7M SAR donation target during Hajj season, with an open-ended budget and about two weeks to reach it.",
        // one source for every figure: the charity's own dashboard (1–25 May 2026), spend from the platforms
        keyNumbers: [
          { value: "7.82M", label: "SAR in donations · charity dashboard" },
          { value: "33,461", label: "donors" },
          { value: "2.74M", label: "SAR ad spend" },
          { value: "189", label: "SAR average donation" }
        ],
        challenge: [
          "Hajj season is one of the year's busiest fundraising periods, and competition for donors increases sharply. We had about two weeks, an open-ended budget and a 7M SAR target.",
          "The challenge was allocating spend by location and time. A nationwide campaign could spend throughout the day and concentrate on major cities, leaving other locations and time windows underserved."
        ],
        sections: [
          { title: "Before launch", items: [
            "Checked that the website could handle the expected seasonal traffic.",
            "Reworked the donation landing pages for CRO and content. I clarified the case for donating and highlighted social proof, official charity permits and donor testimonials to build trust.",
            "Coordinated shooting angles and hooks with the creative team and the influencers and models in the ads. We prepared several edits of each video, each with a different opening hook."
          ] },
          { title: "Testing", items: [
            "Launched Maximize Conversions campaigns using ABO, with one campaign per influencer or model featured in the ads, to identify one or two winning creative versions for each.",
            "I ran the same test separately on each platform. Performance varied by platform: creative that won on one did not necessarily win on another."
          ] },
          { title: "Scaling", intro: "Once we identified the winning creative, I shifted to Maximize Conversion Value campaigns and built the scaling plan around donor behavior:", items: [
            { lead: "Scaling by prayer times.", text: "Saudi Arabia's major cities are far apart, and prayer times can differ by more than 30 minutes between them. The data showed that donations often increased after prayer, especially after Friday prayer, Fajr and Maghrib. A nationwide campaign would scale spend across broad time windows. I instead created city-specific campaigns for Riyadh, Jeddah and Dammam, prioritizing the cities that generated the most donations and scaling each around its local prayer times." },
            { lead: "Cities the budget never reached.", text: "Nationwide targeting concentrated most spend in Riyadh, Jeddah and Dammam. I created separate ad sets for underserved cities, giving them dedicated budget; those cities also contributed a meaningful share of donations." },
            { lead: "Men and women.", text: "Men received most of the spend, while women generated a higher ROAS on a smaller budget. I split the audiences into separate campaigns so I could allocate spend based on performance." },
            { lead: "Age groups.", text: "I gave age groups receiving little spend their own ad sets and budgets." },
            { lead: "Retargeting.", text: "Retargeting campaigns for people who added a donation to the cart without completing it, and for people who had already donated." },
            "The same system ran on Meta, TikTok and Snapchat."
          ] }
        ],
        outcome: [
          "We finished above target. The charity's dashboard recorded 7.82M SAR in donations from 33,461 donors between May 1 and 25, 2026, against a 7M SAR target. Ad spend across Meta, TikTok and Snapchat was 2.74M SAR.",
          "The campaign combined donation pages prepared for seasonal traffic, structured creative testing and scaling based on donor behavior."
        ],
        // platform totals overlap and differ from the dashboard; the story quotes the dashboard only
        table: false,
        credits: [
          { label: "Platforms", value: "Meta · TikTok · Snapchat" },
          { label: "My role", value: "Performance strategy · Creative testing · Media buying · Budget allocation · Scaling and optimization" }
        ]
      },
      currency: "SAR",
      revenueLabel: "Donated",
      ordersLabel: "No. of donations",
      // platform-reported totals per screenshot; card, overview and hero stats are computed from these
      results: [
        { platform: "Meta", currency: "SAR", spend: 1417299.73, revenue: 3977996.48, orders: 20337 },
        { platform: "TikTok", currency: "SAR", spend: 1049562.24, revenue: 3318559.0, orders: 18105 },
        { platform: "Snapchat", currency: "SAR", spend: 268564.49, revenue: 1067317.68, orders: 5681 }
      ],
      proofs: [
        { src: "assets/case-studies/charity-overview.jpg", label: "Overview" },
        { src: "assets/case-studies/charity-meta.jpg", label: "Meta" },
        { src: "assets/case-studies/charity-tiktok.jpg", label: "TikTok" },
        { src: "assets/case-studies/charity-snapchat.jpg", label: "Snapchat" },
        { src: "assets/case-studies/charity-dashboard.jpg", label: "Donation dashboard" }
      ],
      tags: ["Meta", "TikTok", "Snapchat", "Donations"]
    },
    {
      // Screenshots come from different periods and accounts, so nothing is
      // summed across them: the card shows the store's own numbers.
      title: "Footwear Store",
      place: "🇸🇦 Saudi Arabia · Google Ads · Meta · TikTok · Snapchat",
      story: {
        meta: "E-commerce · Saudi Arabia · September 2024 – March 2025",
        headline: "I took over the account at the start of Saudi National Day season. Over the next seven months, the store recorded 20.98M SAR in sales from 162,972 orders.",
        // every figure from one source: the store's own dashboard on Salla (Sep 2024 – Mar 2025)
        keyNumbers: [
          { value: "20.98M", label: "SAR store sales" },
          { value: "162,972", label: "orders" },
          { value: "+112%", label: "growth on the previous period" },
          { value: "129", label: "SAR AOV" }
        ],
        challenge: "The store specializes in sharqi footwear, a traditional Saudi style, and had substantial inventory to sell. I took over the account at the start of National Day season, one of the year's most competitive periods. My focus was to improve the offer, accelerate sales and build a strategy that could scale across platforms.",
        sections: [
          { title: "Store and offer review", items: [
            "Before launching campaigns, I reviewed tracking, the site experience, offers and pricing. Products were sold individually, limiting AOV, so I kept the single-item options and added bundles and offers based on market and competitor research.",
            "I built the landing page around the offers, product quality and range of styles, with clear product descriptions and customer reviews as social proof.",
            "Set up tracking and conversion measurement across Meta, TikTok, Snapchat and Google Ads."
          ] },
          { title: "Creative and preparation", items: [
            "Briefed creative across several angles, including dedicated assets for bundles and promotional offers.",
            "Re-edited the store's existing videos with different hooks, giving us new versions to test without producing content from scratch.",
            "Before launch, I prepared Google keywords, headlines and descriptions; creative in each required format; videos; the budget plan; and the testing and scaling strategy."
          ] },
          { title: "Google Ads", items: [
            "Researched the market, competitors and search terms, then grouped keywords into relevant ad groups and created a separate brand campaign.",
            "Most keywords used phrase match.",
            "Monitored keyword performance and the Search terms report to see which queries drove traffic.",
            "Structured Performance Max asset groups by product: one for best sellers and another for inventory we wanted to clear, with a dedicated offer for each group."
          ] },
          { title: "Meta", items: [
            "Tested creative in Conversions campaigns, then scaled the winners through Conversion Value and Catalog campaigns.",
            "Tested several landing pages and continued with the strongest performer.",
            "I started with Automatic Placements. After Instagram showed a higher conversion rate, I separated Facebook and Instagram campaigns and directed most of the scaling budget to Instagram.",
            { lead: "Women, buying a gift.", text: "Men were the primary buyers, but I also tested a gifting angle for women: a simple gift for their husbands." }
          ] },
          { title: "TikTok", items: [
            "I used the same creative testing approach, then scaled through Conversion, Conversion Value and Target CPA campaigns.",
            "Campaigns for women on the gift angle."
          ] },
          { title: "Snapchat", items: [
            "Tested Auto Bid, Target Cost and Max Bid alongside broad targeting to identify a workable CPA.",
            "Tested Single Video, Single Image and Story ads, with each format in its own ad set.",
            "Tested the landing pages here too."
          ] },
          { title: "Scaling", intro: "After three days of testing on a small budget, I began scaling in two ways:", items: [
            { lead: "Vertical Scaling:", text: "increased budgets on the winning campaigns." },
            { lead: "Horizontal Scaling:", text: "launched new campaigns using winning creative and briefed new assets around the strongest angles." },
            { lead: "Retargeting.", text: "Retargeting campaigns for people who added to the cart without buying, and for people who had already bought." },
            "Creative that performs well on one platform may not perform as well on another, so I tested and scaled each platform separately.",
            { lead: "Comments and messages.", text: "I worked with the community moderator to respond to comments and messages across platforms, maintain engagement on the ads and convert inquiries into orders." },
            "Throughout the campaign, I stayed in touch with the client about inventory, returns and store performance so media decisions reflected what was happening in the business."
          ] }
        ],
        outcome: "Between September 2024 and March 2025, the store recorded 20.98M SAR in sales from 162,972 orders, up 112% from the previous period, with a 129 SAR AOV. During this period, I worked on the offer and creative, then tested and scaled each platform separately.",
        // the platform screenshots cover different, partly unknown windows; the story quotes the store only
        table: false,
        credits: [
          { label: "Platforms", value: "Google Ads · Meta · TikTok · Snapchat" }
        ]
      },
      currency: "SAR",
      // platform-reported totals per screenshot; card, overview and hero stats are computed from these
      results: [
        { platform: "Google Ads", currency: "SAR", spend: 19400, revenue: 521949, orders: 4170, note: "cost shown rounded (19.4K); revenue = 2,690.46% x cost" },
        { platform: "Meta", currency: "SAR", spend: 157601.22, revenue: 1407217.95, orders: 10952 },
        { platform: "TikTok", currency: "SAR", spend: 133376.57, revenue: 2207569.21, orders: 17772 },
        { platform: "Snapchat", currency: "USD", spend: 15039.54, revenue: 157464.31, orders: 4563 }
      ],
      proofs: [
        { src: "assets/case-studies/footwear-dashboard.jpg", label: "Store dashboard" },
        { src: "assets/case-studies/footwear-google.jpg", label: "Google Ads" },
        { src: "assets/case-studies/footwear-meta.jpg", label: "Meta" },
        { src: "assets/case-studies/footwear-tiktok.jpg", label: "TikTok" },
        { src: "assets/case-studies/footwear-snapchat-usd.jpg", label: "Snapchat" }
      ],
      tags: ["Google Ads", "Meta", "TikTok", "Snapchat"]
    },
    {
      // Ad screenshots cover different windows between Nov 2023 and Jul 2024,
      // so nothing is summed across them; the card shows the store's own
      // numbers for the closest matching period. Labels carry each window.
      title: "Technology Store",
      place: "🇸🇦 Saudi Arabia · Google Ads · Meta · Snapchat",
      story: {
        meta: "E-commerce · Electronics · Saudi Arabia · November 2023 – March 2024",
        headline: "How I grew an electronics store's revenue without increasing its ad budget.",
        // every figure from one source: the store's own Magento sales overview (Nov 2023 – Mar 2024)
        keyNumbers: [
          { value: "7.32M", label: "SAR in sales, VAT included" },
          { value: "4,877", label: "orders" },
          { value: "1,501", label: "SAR AOV" },
          { value: "~1.46M", label: "SAR average monthly sales" }
        ],
        challenge: [
          "The store's ad channels were performing steadily. The goal was to grow revenue and improve ROAS without increasing the budget.",
          "I focused on opportunities within the store: reallocating budget toward the categories and products with the greatest potential to grow sales."
        ],
        sections: [
          { title: "Data analysis and the opportunity", items: [
            "I audited the website and ad accounts, analyzed category and product performance, and compared the store's prices and offers with competitors.",
            { lead: "The winning category.", text: "Gaming products, including laptops, monitors, PCs and accessories, were among the store's strongest-demand categories, but had no dedicated ad strategy." },
            "I made Gaming the primary growth opportunity and focused the strategy on the products with the strongest demand in the store's own data."
          ] },
          { title: "Budget and campaign strategy", items: [
            "Rather than split budget evenly, I allocated the largest share to Gaming and coordinated the category strategy across Meta, Google Ads and Snapchat.",
            "I built a dedicated Gaming campaign with creative, video and catalog assets, keeping the message consistent from the ad through to the product page.",
            "I also featured the Gaming category and its offers across the website through banners and pop-ups."
          ] },
          { title: "Budget on payday", items: [
            "Sales data showed demand rising from the 26th of each month.",
            "I reserved part of the budget for that period and increased spend on the campaigns and products already performing well.",
            "This aligned spend with observed buying patterns instead of treating every day of the month the same."
          ] },
          { title: "Website CRO and AOV", intro: "Alongside the campaigns, I improved product merchandising to increase order value, not only order volume:", items: [
            { lead: "Product order.", text: "I moved higher-value products higher on category pages to give them greater visibility." },
            { lead: "Complementary products.", text: "I surfaced related and complementary products during the purchase so customers could add them to their order." },
            "Together, these changes were designed to increase the value of traffic the campaigns were already generating."
          ] },
          { title: "Retargeting", items: [
            "I expanded retargeting alongside prospecting, prioritizing people who showed intent, especially those who added a product to their cart without purchasing.",
            "The goal was to recover incomplete purchases and make better use of existing paid traffic."
          ] },
          { title: "How I worked", intro: "I used an ongoing cycle of analysis and action:", items: [
            "Compare category, product and pricing performance with competitors.",
            "Identify high-demand categories and shift budget toward growth opportunities.",
            "Align spend with the days when demand is highest.",
            "Improve product merchandising to support a higher AOV.",
            "Review campaign and audience performance, then reallocate budget based on the results."
          ] }
        ],
        outcome: [
          "The strategy focused on growing revenue and improving ROAS with the existing budget by prioritizing Gaming, timing spend around demand and improving product merchandising.",
          "Between November 2023 and March 2024, the store recorded 7.32M SAR in sales, including VAT, from 4,877 orders, with a 1,501 SAR AOV. The budget remained unchanged while I focused on reallocating spend toward the strongest opportunities."
        ],
        // the ad screenshots cover different windows; the story quotes the store only
        table: false,
        credits: [
          { label: "Platforms", value: "Meta · Google Ads · Snapchat" }
        ]
      },
      currency: "SAR",
      // platform-reported totals per screenshot; card, overview and hero stats are computed from these
      results: [
        { platform: "Google Ads", currency: "SAR", spend: 4394.7, revenue: 664671.27, orders: 422 },
        { platform: "Google Ads", currency: "SAR", spend: 26944.11, revenue: 787647.41, orders: 501 },
        { platform: "Meta", currency: "SAR", spend: 115286.36, revenue: 2017191, orders: 2296 },
        { platform: "Snapchat", currency: "USD", spend: 2254.31, revenue: 62187.41, orders: 155 }
      ],
      proofs: [
        { src: "assets/case-studies/tech-store.jpg", label: "Store · Nov 2023 – Mar 2024" },
        { src: "assets/case-studies/tech-1.jpg", label: "Google Search · Dec 2023 – Jan 2024" },
        { src: "assets/case-studies/tech-2.jpg", label: "Google PMax · Dec 2023 – Jan 2024" },
        { src: "assets/case-studies/tech-3.jpg", label: "Meta · Jan – Apr 2024" },
        { src: "assets/case-studies/tech-4.jpg", label: "Snapchat · Jan – Jul 2024" }
      ],
      tags: ["Google Ads", "Meta", "Snapchat", "Search", "Performance Max"]
    },
    {
      // One brand, different windows: best single screenshot shown, nothing summed.
      title: "Perfume Brand",
      place: "🇸🇦 Saudi Arabia · Google Ads · Meta · Snapchat",
      story: {
        meta: "E-commerce · Perfumes · Saudi Arabia · Google Ads, Meta and Snapchat",
        headline: "A well-known Saudi perfume brand: we turned the searches for its name on Google into 1.86M SAR in sales, at 16 SAR per order and a 15.8x ROAS.",
        // key figures from one screenshot: the brand Search campaign (no dates, at Mahmoud's request)
        keyNumbers: [
          { value: "1.86M", label: "SAR in sales" },
          { value: "15.8x", label: "ROAS" },
          { value: "7,339", label: "orders" },
          { value: "253", label: "SAR average order" }
        ],
        challenge: [
          "A well-known perfume brand in Saudi Arabia that people search for by name every day. That demand is the most valuable thing the brand has: a customer who knows what they want and is ready to buy. But any known name becomes a target for competitors who advertise on it, to appear in front of that customer at the same moment.",
          "So the job had two parts: make sure everyone searching for the brand finds the brand and buys from it at the lowest cost, and grow sales beyond the name searches, on Shopping, Meta and Snapchat, without ROAS dropping."
        ],
        sections: [
          { title: "Google Ads: brand campaign", items: [
            "A Search campaign on the brand name, so the brand is the first result for anyone looking for it, ahead of any competitor.",
            { lead: "Bidding on Maximize Conversion Value with a Target ROAS:", text: "the campaign goes after the value of each order, not just the number of orders." },
            { lead: "43% CTR:", text: "almost half of the people searching for the brand clicked on its own ad, not on a competitor’s." },
            "323K clicks at 0.36 SAR per click, with a 2.27% conversion rate.",
            { lead: "7,339 orders at 16 SAR each,", text: "with an average order of 253 SAR, higher than any other channel: people who search for the brand by name spend more." }
          ] },
          { title: "Google Ads: Performance Max", items: [
            { lead: "A different job from the brand campaign:", text: "the brand campaign catches people searching for the name, while Performance Max reaches people searching for perfume in general, with Shopping ads showing the product and its price, plus YouTube and Display." },
            "Bidding on Maximize Conversion Value with a Target ROAS, and asset groups split by product and by best sellers.",
            "13.8M impressions and 1,725 orders worth 402K SAR, a 4.7x ROAS."
          ] },
          { title: "Meta", items: [
            "A Conversion campaign to keep the brand, its offers and its products in front of customers, with creative tested across several angles and hooks, then scaled on the winners.",
            "In one month: 2,046 orders on 9.8K USD of spend, about 4.8 USD (18 SAR) per order, an 8.88x ROAS."
          ] },
          { title: "Snapchat", items: [
            "A Conversion campaign launched alongside Meta, to reach Snapchat’s large audience in Saudi Arabia.",
            "In 6 weeks: 1,257 orders on 12.6K USD of spend, a 4.81x ROAS."
          ] },
          { title: "Retargeting", items: [
            "Retargeting campaigns for people who added to the cart without buying, and for people who had already bought."
          ] }
        ],
        outcome: [
          "The brand’s name was its biggest asset, and the work was turning it into sales and protecting it:",
          "The brand campaign: 1.86M SAR at 16 SAR per order, with the highest average order in the account.",
          "Performance Max: 402K SAR from people searching for perfume in general.",
          "Meta and Snapchat completed the picture: Meta at an 8.88x ROAS in one month, Snapchat at 4.81x in 6 weeks."
        ],
        // each screenshot covers its own window, so nothing is added across platforms
        table: false,
        credits: [
          { label: "Platforms", value: "Google Ads · Meta · Snapchat" }
        ]
      },
      currency: "SAR",
      // platform-reported totals per screenshot; card, overview and hero stats are computed from these
      results: [
        { platform: "Google Ads", currency: "SAR", spend: 117704.55, revenue: 1860161.95, orders: 7339 },
        { platform: "Google Ads", currency: "SAR", spend: 85436.38, revenue: 401560.18, orders: 1725 },
        { platform: "Meta", currency: "USD", spend: 9794.08, revenue: 86972, orders: 2046 },
        { platform: "Snapchat", currency: "USD", spend: 12619.12, revenue: 60671.23, orders: 1257 }
      ],
      proofs: [
        { src: "assets/case-studies/perfume-1.jpg", label: "Google Search" },
        { src: "assets/case-studies/perfume-2.jpg", label: "Google PMax" },
        { src: "assets/case-studies/perfume-3.jpg", label: "Meta · Jan 26 – Feb 28" },
        { src: "assets/case-studies/perfume-4.jpg", label: "Snapchat · Jan 15 – Mar 1, 2024" }
      ],
      tags: ["Google Ads", "Meta", "Snapchat", "Search", "Performance Max"]
    },
    {
      // Same account, same window: PMax + Search summed (1,552,169.56 / 26,765.09 SAR spend).
      title: "Home Appliances",
      place: "🇸🇦 Saudi Arabia · Google Ads",
      story: {
        meta: "E-commerce · Home Appliances · Saudi Arabia · Google Ads · May – July 2024",
        headline: "1.55M SAR in sales from Google Ads on 26.8K SAR spend: a Performance Max campaign split the right way, and a brand campaign that keeps the store’s name from its competitors.",
        // one source: Google Ads, same account and window (1 May – 20 Jul 2024), PMax + branded Search
        keyNumbers: [
          { value: "1.55M", label: "SAR in sales" },
          { value: "58x", label: "ROAS" },
          { value: "1,192", label: "purchases" },
          { value: "26.8K", label: "SAR spend" }
        ],
        challenge: "I was responsible for Google Ads only. The website and tracking were sound, so the opportunity wasn’t on the site: it was in how the campaigns were built, and in the brand searches the competitors were taking.",
        sections: [
          { title: "Website review", items: [
            "I reviewed the website’s products and tracking. Everything was sound, so all the work went into the campaigns."
          ] },
          { title: "Performance Max campaign", items: [
            "One Performance Max campaign with several asset groups, each with its own assets and products.",
            { lead: "At first:", text: "the asset groups followed the categories, large appliances on their own and small appliances on their own." },
            { lead: "Then:", text: "I split them by performance instead: the best sellers in one asset group, and the products that weren’t moving in another, with a discount on them to get them moving." }
          ] },
          { title: "Brand campaign", items: [
            { lead: "The problem:", text: "the brand name wasn’t used in any campaign, and competitors were running campaigns on our brand. When a customer searched for us by name, the competitors showed up first, so we were losing customers who were already looking for us." },
            { lead: "The fix:", text: "a Search campaign on the brand name." },
            { lead: "The result:", text: "the brand campaign alone brought in 452K SAR in sales at 80.5x ROAS, with a 57.8% CTR and 0.51 SAR per click." }
          ] }
        ],
        outcome: "From 1 May to 20 July 2024, the Google Ads campaigns brought in 1.55M SAR in sales from 1,192 purchases on 26.8K SAR spend, a 58x ROAS according to Google Ads: 1.10M from Performance Max and 452K from the brand campaign.",
        table: false,
        credits: [
          { label: "Platforms", value: "Google Ads" }
        ]
      },
      currency: "SAR",
      // platform-reported totals per screenshot; card, overview and hero stats are computed from these
      results: [
        { platform: "Google Ads", currency: "SAR", spend: 21157.78, revenue: 1100633.55, orders: 917 },
        { platform: "Google Ads", currency: "SAR", spend: 5607.31, revenue: 451536.01, orders: 275 }
      ],
      proofs: [
        { src: "assets/case-studies/appliances-1.jpg", label: "Google PMax · May 1 – Jul 20, 2024" },
        { src: "assets/case-studies/appliances-2.jpg", label: "Google Search · May 1 – Jul 20, 2024" }
      ],
      tags: ["Google Ads", "Performance Max", "Search"]
    },
    {
      // Both screenshots cover 1 Nov – 11 Dec 2023 (the Meta chart runs Nov 1 – Dec 11).
      title: "Home Appliances",
      place: "🇪🇬 Egypt · Google Ads · Meta",
      story: {
        meta: "E-commerce · Home Appliances · Egypt · Meta and Google Ads · November – December 2023",
        headline: "A brand new brand built from scratch, and in its second month a “Red Friday” campaign that brought in 6.15M EGP from Google Ads and 3.55M EGP from Meta.",
        // both screenshots cover 1 Nov – 11 Dec 2023; each platform counts its own sales, so sales stay per platform and only spend is added up
        keyNumbers: [
          { value: "6.15M", label: "EGP in sales from Google Ads" },
          { value: "3.55M", label: "EGP in sales from Meta" },
          { value: "105K", label: "EGP spend across both platforms" },
          { value: "41", label: "days" }
        ],
        challenge: "A brand new home appliances brand in Egypt, with a website and a showroom opening for the first time: no known name, no past data, no ad accounts. I gave my view on the name, the logo and the website build, since I would be the one running it, while the decisions sat with management. My part: get the brand selling as much of its stock as possible from the first months.",
        sections: [
          { title: "Competitors and the market", items: [
            "I reviewed the competitors in the market: their websites, how they showed products, their bundles, and the campaigns they were running at the time, whether built on specific discounts or on different offers.",
            { lead: "Our edge:", text: "price, plus opening offers and discounts on almost every product, on the website and in the showroom." }
          ] },
          { title: "Getting the website ready", items: [
            "Reviewed how products were shown, the site’s sections and the banners, and set up shipping.",
            "Added several instalment options (valU, Aman, Souhoola and bank-card instalments) to make buying easier for the customer and help the brand sell as much stock as possible."
          ] },
          { title: "Launch", items: [
            "Created the ad accounts on Meta and Google Ads, and set up tracking on the website and with the platforms.",
            { lead: "Before the sales campaigns:", text: "Awareness campaigns for the showroom opening, and simple Traffic campaigns to warm up the website and get the events firing on the platforms, so the conversion campaigns would start on real data instead of from zero." }
          ] },
          { title: "Red Friday", items: [
            "The store’s second month was November, so I used it for Black Friday campaigns.",
            "The brand’s logo is red, so I called the campaign Red Friday instead of Black Friday, to make it the brand’s own campaign and not one more seasonal offer like the rest of the market."
          ] },
          { title: "Meta", items: [
            "One ABO campaign with several ad sets, one per category:",
            { lead: "General ad set:", text: "designs and videos about the store, the products, the offers, the discounts and the prices." },
            { lead: "Fridges ad set:", text: "fridges only, with designs, videos and a catalog of fridges." },
            "An ad set for air conditioners, and so on for every category.",
            { lead: "Why:", text: "to see which category had the most demand, and to be able to scale that category on its own so it got its share of the budget." }
          ] },
          { title: "Google Ads", items: [
            "A Performance Max campaign with the same split: every category in its own asset group, each with different assets."
          ] }
        ],
        outcome: [
          "From 1 November to 11 December 2023, on 105K EGP of spend across both platforms:",
          "The Performance Max campaign on Google Ads brought in 6.15M EGP in sales from 603 purchases, a 106x ROAS.",
          "The Red Friday campaign on Meta brought in 3.55M EGP in sales from 684 purchases, a 76x ROAS.",
          "The whole idea was to bring three things together at once: a competitive price, the opening offers and the Black Friday season."
        ],
        table: false,
        credits: [
          { label: "Platforms", value: "Meta · Google Ads" }
        ]
      },
      currency: "EGP",
      // platform-reported totals per screenshot; card, overview and hero stats are computed from these
      results: [
        { platform: "Google Ads", currency: "EGP", spend: 58014.22, revenue: 6147401.96, orders: 603 },
        { platform: "Meta", currency: "EGP", spend: 46815, revenue: 3548568, orders: 684, note: "spend = sales / 75.80 ROAS (caption shows 46K)" }
      ],
      proofs: [
        { src: "assets/case-studies/appliances-3.jpg", label: "Google PMax · Nov 1 – Dec 11, 2023" },
        { src: "assets/case-studies/appliances-4.jpg", label: "Meta · Red Friday · Nov 1 – Dec 11, 2023" }
      ],
      tags: ["Google Ads", "Meta", "Performance Max"]
    },
    {
      // No platform screenshots: access to the accounts ended before they were
      // taken. Figures come from the original ad reports, and the proof image
      // is a summary that says so. Orders are left out (not in the reports).
      title: "Car Parts Store",
      approx: true,
      place: "🇸🇦 Saudi Arabia · Google Ads · Meta · TikTok · Snapchat",
      // Fill these in and the case opens as a story instead of a gallery.
      // Anything still marked [STORY: …] is skipped, so nothing unfinished ships.
      story: {
        challenge: "[STORY: where the account stood when you took it over — the problem in one or two sentences]",
        changes: [
          "[STORY: what you changed — one line each, e.g. rebuilt campaign structure]"
        ],
        strategy: [
          { platform: "Google Ads", role: "[STORY: what this platform was for — e.g. demand creation, intent capture, creative testing]" },
          { platform: "Meta", role: "[STORY: what this platform was for — e.g. demand creation, intent capture, creative testing]" },
          { platform: "TikTok", role: "[STORY: what this platform was for — e.g. demand creation, intent capture, creative testing]" },
          { platform: "Snapchat", role: "[STORY: what this platform was for — e.g. demand creation, intent capture, creative testing]" }
        ]
      },
      currency: "SAR",
      results: [
        { platform: "Meta", currency: "SAR", spend: 60000, revenue: 240000 },
        { platform: "TikTok", currency: "SAR", spend: 55000, revenue: 250000 },
        { platform: "Snapchat", currency: "SAR", spend: 25000, revenue: 100000 },
        { platform: "Google Ads", currency: "SAR", spend: 70000, revenue: 300000 }
      ],
      proofs: [
        { src: "assets/case-studies/carparts-summary.jpg", label: "Results summary · from ad reports" }
      ],
      tags: ["Google Ads", "Meta", "TikTok", "Snapchat"]
    },
    {
      // Same window: 1,692.77 leads for 5,553.19 SAR across PMax + Search.
      title: "Task Management SaaS",
      place: "🇸🇦 Saudi Arabia · Google Ads",
      // Fill these in and the case opens as a story instead of a gallery.
      // Anything still marked [STORY: …] is skipped, so nothing unfinished ships.
      story: {
        challenge: "[STORY: where the account stood when you took it over — the problem in one or two sentences]",
        changes: [
          "[STORY: what you changed — one line each, e.g. rebuilt campaign structure]"
        ],
        strategy: [
          { platform: "Google Ads", role: "[STORY: what this platform was for — e.g. demand creation, intent capture, creative testing]" }
        ]
      },
      currency: "SAR",
      // platform-reported totals per screenshot; card, overview and hero stats are computed from these
      results: [
        { platform: "Google Ads", currency: "SAR", spend: 2827.99 },
        { platform: "Google Ads", currency: "SAR", spend: 2725.2 }
      ],
      proofs: [
        { src: "assets/case-studies/saas-1.jpg", label: "Google PMax · Feb 6 – Jun 26, 2023" },
        { src: "assets/case-studies/saas-2.jpg", label: "Google Search · Feb 6 – Jun 26, 2023" }
      ],
      stats: [
        { label: "Leads", value: "1,693" },
        { label: "Cost / Lead", value: "3.28 SAR" },
        { label: "Spend", value: "5.6K SAR" }
      ],
      tags: ["Google Ads", "Performance Max", "Search", "Lead Gen"]
    },
    {
      title: "Car Rental",
      place: "🇦🇪 UAE · Meta (Messages)",
      // Fill these in and the case opens as a story instead of a gallery.
      // Anything still marked [STORY: …] is skipped, so nothing unfinished ships.
      story: {
        challenge: "[STORY: where the account stood when you took it over — the problem in one or two sentences]",
        changes: [
          "[STORY: what you changed — one line each, e.g. rebuilt campaign structure]"
        ],
        strategy: [
          { platform: "Meta", role: "[STORY: what this platform was for — e.g. demand creation, intent capture, creative testing]" }
        ]
      },
      currency: "AED",
      // platform-reported totals per screenshot; card, overview and hero stats are computed from these
      results: [
        { platform: "Meta", currency: "AED", spend: 22755.07 }
      ],
      proof: "assets/case-studies/car-rental.jpg",
      stats: [
        { label: "Conversations", value: "2,084" },
        { label: "Cost / Msg", value: "10.92 AED" },
        { label: "Spend", value: "22.7K AED" }
      ],
      tags: ["Meta", "Lead Gen"]
    }
  ],

  // Services grid
  // How I work — the six steps a new account goes through.
  // Book a call: the Cal.com event shown inline under the contact form.
  // Remove calLink to hide the calendar.
  booking: { calLink: "mahmoud-gad/intro-call" },

  howIWork: [
    { title: "Audit", desc: "I review the account, funnel, tracking, creative and unit economics before recommending where to spend." },
    { title: "Strategy", desc: "I build campaign structure, KPIs, budget allocation and a testing plan around business goals and margins." },
    { title: "Launch", desc: "I set up campaigns and measurement together so performance is clear from day one." },
    { title: "Test", desc: "I test creative, audiences, offers and campaign structures one variable at a time." },
    { title: "Optimize", desc: "I shift budget toward campaigns meeting their targets and away from those that aren't." },
    { title: "Scale", desc: "I increase spend or expand reach when performance supports it, while monitoring CPA and margin." },
  ],

  // The loop the tools serve. Shown as a strip above the tool groups.
  // The loop the whole stack serves. Each step carries one line explaining it;
  // the section cycles through them on its own and stops on hover or focus.
  systemFlow: [
    { name: "Track", desc: "I set up and verify key events across platforms so reporting starts with reliable data." },
    { name: "Analyze", desc: "I review performance by creative, audience and product, not only at account level." },
    { name: "Test", desc: "I test one variable at a time to understand what changes performance." },
    { name: "Optimize", desc: "I shift budget toward campaigns meeting their targets and away from those that aren't." },
    { name: "Scale", desc: "I increase budgets or expand reach while monitoring CPA and margin." },
  ],

  // Each service is one scope of work: a line saying what it is, then the
  // three things actually delivered inside it. The points are what make a
  // card readable — without them every service sounds like every other one.
  services: [
    {
      icon: "🚀", title: "Paid Acquisition",
      desc: "I manage Meta, Google, TikTok and Snapchat as one coordinated paid acquisition program.",
      points: [
        "Campaign structure tailored to each platform",
        "Budget allocation based on performance and business goals",
        "Ongoing optimization against agreed CPA and ROAS targets",
      ],
    },
    {
      icon: "📈", title: "Campaign Strategy & Scaling",
      desc: "A clear plan for budget allocation, performance targets and what to test next.",
      points: [
        "CPA and ROAS targets aligned with your margins and business goals",
        "A scaling plan for budget increases and audience expansion",
        "Budget limits tested before increasing spend",
      ],
    },
    {
      icon: "🎯", title: "Conversion Tracking",
      desc: "Reliable tracking that gives you data you can act on.",
      points: [
        "Pixel, CAPI and server-side events",
        "GTM, GA4 and ad-platform conversion setup",
        "Event checks before launch and major budget changes",
      ],
    },
    {
      icon: "🎬", title: "Creative Testing",
      desc: "Structured creative testing to identify repeatable winners.",
      points: [
        "Hooks, creative angles and offers tested one at a time",
        "Creative briefs written from what the data says",
        "A creative refresh cadence guided by performance signals",
      ],
    },
    {
      icon: "🛒", title: "Funnel & CRO",
      desc: "Landing pages, offers and checkout flows that help paid traffic convert.",
      points: [
        "Landing page and offer reviews aligned with the ad promise",
        "Checkout and form friction reviewed and reduced step by step",
        "A/B tests run on the step with the most traffic",
      ],
    },
    {
      icon: "📊", title: "Performance Analytics",
      desc: "Dashboards and attribution that show how campaigns contribute to business results.",
      points: [
        "Attribution across platforms and store data",
        "A live dashboard in Looker Studio or GA4",
        "Weekly reporting with clear next steps",
      ],
    },
  ],

  // CV / résumé download. Put the file in assets/cv/ and name it here.
  // Leave `file` empty and the whole section disappears.
  cv: {
    file: "assets/cv/Mahmoud-Gad-CV.pdf",
    updated: "",                 // e.g. "September 2026" — shown next to the button
  },

  // Skills tags in the Skills & Tools section
  skills: [
    "Ad Serving",
    "Analytical Skills",
    "Conversion Tracking",
    "Remarketing",
    "Reporting",
    "A/B Testing",
    "Campaign Optimization",
    "Communication & Collaboration"
  ],

  // LINKEDIN POSTS
  // LinkedIn blocks automated reading (HTTP 999), so posts are added by hand.
  // For each one: open the post on LinkedIn → "Copy link to post" → paste below.
  //   featured: true  → shows on the homepage (keep it to 3–4)
  //   url         → the real post link. Leave it out if you don't have it;
  //                  never invent one.
  //   ar          → optional Arabic version of title/excerpt. Falls back to
  //                  the English text when missing.
  insights: [
    // LinkedIn's official embeds. Grab the urn from "..." → "Embed this post".
    // `height` is what LinkedIn suggested for that post; the rail clips to a
    // uniform card height so the row stays even.
    { embed: 'urn:li:ugcPost:7241164787303243777', height: 546, featured: true },
    { embed: 'urn:li:ugcPost:7233247525162409984', height: 609, featured: true },
    { embed: 'urn:li:share:7021408453722054656',   height: 1078, featured: true },
    { embed: 'urn:li:ugcPost:7231548075201200129', height: 651, featured: true },

    // ---- or write your own, in this site's design -----------------------
    // {
    //   title:   "Why your ROAS drops the week after you scale",
    //   excerpt: "One line — the hook of the post.",
    //   content: "Longer body.\n\nBlank lines become paragraphs.",
    //   image:   "assets/insights/scaling.jpg",
    //   date:    "2026-05-14",
    //   category:"Media Buying",
    //   url:     "https://www.linkedin.com/posts/...",
    //   featured: true,
    //   ar: { title: "…", excerpt: "…", category: "شراء إعلانات" }
    // },
  ],

  // FAQ — the questions that actually decide whether someone contacts you.
  faq: [
    {
      q: "Are you available for a full-time role?",
      a: "Yes, I’m open to full-time roles, and also to freelance, part-time or remote work. I work across the Gulf markets in general and the Egyptian market."
    },
    {
      q: "Have you worked in a team or on your own? Have you managed a media buying team?",
      a: "Both. I’ve worked inside teams and on my own, and for a period I managed a small media buying team of two."
    },
    {
      q: "Have you worked at an agency or in-house?",
      a: "Both. I’ve worked at agencies and in-house."
    },
    {
      q: "What’s the largest daily budget you’ve managed?",
      a: "130K USD in a single day."
    },
    {
      q: "Do you set up tracking yourself? Pixel, CAPI, GTM and GA4",
      a: "Yes. When there’s no tracking specialist on the team, I set it up myself: Pixel, CAPI, GTM and GA4."
    },
    {
      q: "Do you build landing pages too?",
      a: "Yes. I build landing pages that help increase sales and improve the conversion rate."
    },
    {
      q: "Do you run app campaigns?",
      a: "Yes, I’ve worked on two app marketing accounts."
    }
  ],

  // Ordered so related tools sit together: ad platforms → analytics →
  // attribution → retention → commerce → workflow.
  tools: [
    { group: "Advertising", items: ["Meta Ads Manager", "Google Ads", "TikTok Ads Manager", "Snapchat Ads"] },
    { group: "Analytics", items: ["GA4", "Mixpanel", "Microsoft Clarity", "Looker Studio"] },
    { group: "Tracking & Attribution", items: ["Google Tag Manager", "Pixel & CAPI", "AppsFlyer", "Adjust"] },
    { group: "Commerce", items: ["Salla", "Zid", "Shopify", "Magento", "WordPress"] },
    { group: "Lifecycle", items: ["SALESmanago", "OneSignal"] },
    { group: "Workflow", items: ["Notion", "Slack", "Asana"] },
  ],
};
