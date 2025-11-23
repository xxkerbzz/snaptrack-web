const fs = require('fs');
const path = require('path');

// Remaining pages to create based on CREATE_REMAINING_PAGES.md
const remainingPages = {
  // Silo 3: Inventory Management Systems (9 pages - all need to be created)
  silo3: [
    {
      path: 'resources/restaurant-inventory-management-software',
      title: 'Restaurant Inventory Management Software: Complete Guide [2025]',
      description: 'Comprehensive guide to choosing restaurant inventory management software. Compare features, pricing, integrations, and find the best solution for your operation.',
      keywords: ['restaurant inventory software', 'inventory management system', 'restaurant technology', 'inventory tracking software', 'food service software'],
      category: 'pillar',
      pillar: 'Restaurant Inventory Management Software',
      pillarHref: '/resources/restaurant-inventory-management-software'
    },
    {
      path: 'resources/mobile-inventory-management',
      title: 'Mobile Inventory Management: Apps vs Handheld Scanners',
      description: 'Comparing mobile inventory management solutions for restaurants. Smartphone apps, handheld scanners, tablets—which works best for your operation?',
      keywords: ['mobile inventory management', 'inventory apps', 'handheld scanners', 'mobile restaurant technology', 'inventory tracking apps'],
      category: 'supporting',
      pillar: 'Restaurant Inventory Management Software',
      pillarHref: '/resources/restaurant-inventory-management-software'
    },
    {
      path: 'resources/computer-vision-inventory-systems',
      title: 'Computer Vision Inventory Systems: How AI Reads Product Labels',
      description: 'Deep dive into computer vision for restaurant inventory. How AI reads handwritten labels, accuracy rates, implementation guide, and real-world results.',
      keywords: ['computer vision inventory', 'AI inventory management', 'automated inventory tracking', 'image recognition inventory', 'GPT-4 vision'],
      category: 'supporting',
      pillar: 'Restaurant Inventory Management Software',
      pillarHref: '/resources/restaurant-inventory-management-software'
    },
    {
      path: 'resources/small-restaurant-inventory-management',
      title: 'Small Restaurant Inventory Management: Systems That Actually Work',
      description: 'Inventory management solutions designed for small restaurants. Budget-friendly options, simple systems, and strategies that don\'t require enterprise budgets.',
      keywords: ['small restaurant inventory', 'independent restaurant software', 'affordable inventory system', 'small business restaurant', 'restaurant inventory small scale'],
      category: 'supporting',
      pillar: 'Restaurant Inventory Management Software',
      pillarHref: '/resources/restaurant-inventory-management-software'
    },
    {
      path: 'resources/best-inventory-apps-food-trucks',
      title: 'Best Inventory Apps for Food Trucks: 2025 Comparison Guide',
      description: 'Detailed comparison of mobile inventory apps for food trucks. Features, pricing, offline mode, ease of use, and real operator reviews.',
      keywords: ['food truck inventory apps', 'mobile inventory software', 'food truck technology', 'inventory app comparison', 'food truck management apps'],
      category: 'supporting',
      pillar: 'Restaurant Inventory Management Software',
      pillarHref: '/resources/restaurant-inventory-management-software'
    },
    {
      path: 'blog/why-inventory-software-fails-food-trucks',
      title: 'Why Traditional Inventory Software Fails in Food Trucks',
      description: 'Most restaurant inventory software wasn\'t built for mobile operations. Learn why food trucks need specialized solutions and what features actually matter.',
      keywords: ['food truck software problems', 'inventory software limitations', 'mobile inventory challenges', 'food truck technology', 'restaurant software food trucks'],
      category: 'blog',
      pillar: 'Restaurant Inventory Management Software',
      pillarHref: '/resources/restaurant-inventory-management-software'
    },
    {
      path: 'blog/barcode-vs-computer-vision-inventory',
      title: 'Barcode Scanners vs Computer Vision for Restaurant Inventory',
      description: 'Comparing barcode scanning to AI-powered computer vision for inventory management. Accuracy, speed, cost, and which technology works better for restaurants.',
      keywords: ['barcode vs computer vision', 'inventory scanning methods', 'AI inventory tracking', 'barcode inventory restaurant', 'computer vision vs barcode'],
      category: 'blog',
      pillar: 'Restaurant Inventory Management Software',
      pillarHref: '/resources/restaurant-inventory-management-software'
    },
    {
      path: 'blog/gpt4-vision-handwritten-labels',
      title: 'How GPT-4 Vision Reads Handwritten Expiration Date Labels',
      description: 'Technical deep-dive into how GPT-4 Vision API interprets handwritten dates on food packaging. Accuracy rates, limitations, and real-world performance.',
      keywords: ['GPT-4 vision', 'handwritten label recognition', 'AI label reading', 'computer vision food labels', 'OCR handwriting'],
      category: 'blog',
      pillar: 'Restaurant Inventory Management Software',
      pillarHref: '/resources/restaurant-inventory-management-software'
    },
    {
      path: 'blog/free-vs-paid-inventory-software',
      title: 'Free vs Paid Inventory Software: What Food Trucks Actually Need',
      description: 'Is free inventory software worth it for food trucks? Compare free options, paid solutions, and the true cost of "free" restaurant inventory systems.',
      keywords: ['free inventory software', 'paid inventory apps', 'inventory software cost', 'food truck software budget', 'free vs paid restaurant software'],
      category: 'blog',
      pillar: 'Restaurant Inventory Management Software',
      pillarHref: '/resources/restaurant-inventory-management-software'
    }
  ],

  // Silo 4: Restaurant Cost Control (7 pages)
  silo4: [
    {
      path: 'resources/restaurant-cost-control',
      title: 'Restaurant Cost Control: Complete Guide to Managing Expenses',
      description: 'Comprehensive guide to restaurant cost control strategies. Food costs, labor, overhead, and profitability optimization for restaurants and food trucks.',
      keywords: ['restaurant cost control', 'food cost management', 'restaurant expenses', 'restaurant profitability', 'cost reduction strategies'],
      category: 'pillar',
      pillar: 'Restaurant Cost Control',
      pillarHref: '/resources/restaurant-cost-control'
    },
    {
      path: 'resources/food-cost-percentage',
      title: 'How to Calculate and Reduce Food Cost Percentage',
      description: 'Master food cost percentage calculation and reduction strategies. Industry benchmarks, formulas, and tactics to improve restaurant profit margins.',
      keywords: ['food cost percentage', 'calculate food cost', 'food cost formula', 'restaurant food costs', 'food cost control'],
      category: 'supporting',
      pillar: 'Restaurant Cost Control',
      pillarHref: '/resources/restaurant-cost-control'
    },
    {
      path: 'resources/restaurant-cash-flow-management',
      title: 'Restaurant Cash Flow Management: Strategies for Financial Health',
      description: 'How to manage restaurant cash flow effectively. Forecasting, working capital optimization, payment terms, and preventing cash crunches.',
      keywords: ['restaurant cash flow', 'cash flow management', 'restaurant finances', 'working capital restaurant', 'restaurant financial management'],
      category: 'supporting',
      pillar: 'Restaurant Cost Control',
      pillarHref: '/resources/restaurant-cost-control'
    },
    {
      path: 'resources/food-truck-financial-management',
      title: 'Food Truck Financial Management: Budgeting & Profitability Guide',
      description: 'Complete financial management guide for food trucks. Budgeting, expense tracking, profit optimization, and financial planning for mobile food businesses.',
      keywords: ['food truck finances', 'food truck budgeting', 'food truck profitability', 'mobile food financial management', 'food truck accounting'],
      category: 'supporting',
      pillar: 'Restaurant Cost Control',
      pillarHref: '/resources/restaurant-cost-control'
    },
    {
      path: 'blog/hidden-costs-food-waste-profit-loss',
      title: 'Hidden Costs of Food Waste on Your P&L Statement',
      description: 'How food waste impacts more than just COGS. Labor, disposal, opportunity costs, and the true financial impact on restaurant profit and loss statements.',
      keywords: ['food waste costs', 'P&L food waste', 'restaurant profit loss', 'hidden costs waste', 'food waste financial impact'],
      category: 'blog',
      pillar: 'Restaurant Cost Control',
      pillarHref: '/resources/restaurant-cost-control'
    },
    {
      path: 'blog/inventory-software-roi',
      title: 'Inventory Software ROI: How to Calculate Payback Period',
      description: 'Calculate the ROI of inventory management software for your restaurant. Time savings, waste reduction, and financial benefits with real examples.',
      keywords: ['inventory software ROI', 'restaurant technology ROI', 'inventory software payback', 'restaurant software investment', 'cost benefit inventory'],
      category: 'blog',
      pillar: 'Restaurant Cost Control',
      pillarHref: '/resources/restaurant-cost-control'
    },
    {
      path: 'blog/inventory-mismanagement-destroys-margins',
      title: 'How Inventory Mismanagement Destroys Restaurant Profit Margins',
      description: 'The profit impact of poor inventory management. Over-ordering, waste, spoilage, and theft—how bad inventory practices kill restaurant margins.',
      keywords: ['inventory mismanagement', 'restaurant profit margins', 'inventory impact profits', 'poor inventory control', 'restaurant profitability'],
      category: 'blog',
      pillar: 'Restaurant Cost Control',
      pillarHref: '/resources/restaurant-cost-control'
    }
  ],

  // Silo 5: Food Safety & Compliance (7 pages)
  silo5: [
    {
      path: 'resources/food-safety-compliance',
      title: 'Food Safety Compliance Guide for Restaurants & Food Trucks',
      description: 'Complete guide to food safety compliance for restaurants. Health codes, temperature logs, record keeping, inspections, and avoiding violations.',
      keywords: ['food safety compliance', 'restaurant health code', 'food safety regulations', 'health inspection preparation', 'food service compliance'],
      category: 'pillar',
      pillar: 'Food Safety & Compliance',
      pillarHref: '/resources/food-safety-compliance'
    },
    {
      path: 'resources/food-expiration-date-regulations',
      title: 'Food Expiration Date Regulations: What Restaurant Owners Must Know',
      description: 'Understanding food expiration date regulations for restaurants. Federal and state requirements, labeling laws, and liability considerations.',
      keywords: ['food expiration regulations', 'expiration date laws', 'food labeling requirements', 'expiration date compliance', 'food safety dates'],
      category: 'supporting',
      pillar: 'Food Safety & Compliance',
      pillarHref: '/resources/food-safety-compliance'
    },
    {
      path: 'resources/food-safety-record-keeping',
      title: 'Food Safety Record Keeping: Digital vs Paper Systems',
      description: 'Best practices for restaurant food safety record keeping. Temperature logs, receiving records, cleaning schedules, and digital documentation systems.',
      keywords: ['food safety records', 'restaurant record keeping', 'temperature logs', 'food safety documentation', 'HACCP records'],
      category: 'supporting',
      pillar: 'Food Safety & Compliance',
      pillarHref: '/resources/food-safety-compliance'
    },
    {
      path: 'resources/food-truck-health-permits',
      title: 'Food Truck Health Permits & Licensing: Complete Guide by State',
      description: 'Comprehensive guide to food truck health permits and licensing requirements. State-by-state regulations, application process, and maintaining compliance.',
      keywords: ['food truck permits', 'food truck licensing', 'mobile food permits', 'food truck health department', 'food truck regulations'],
      category: 'supporting',
      pillar: 'Food Safety & Compliance',
      pillarHref: '/resources/food-safety-compliance'
    },
    {
      path: 'blog/automated-inventory-food-safety-audits',
      title: 'How Automated Inventory Tracking Simplifies Food Safety Audits',
      description: 'Using digital inventory systems to streamline health inspections. Automated temperature logs, expiration tracking, and audit-ready documentation.',
      keywords: ['food safety audits', 'automated compliance', 'health inspection software', 'digital food safety records', 'inventory food safety'],
      category: 'blog',
      pillar: 'Food Safety & Compliance',
      pillarHref: '/resources/food-safety-compliance'
    },
    {
      path: 'blog/food-safety-violations-expiration-dates',
      title: 'Common Food Safety Violations Related to Expiration Dates',
      description: 'The most common health code violations related to expired food and date tracking. How to avoid citations and maintain compliance.',
      keywords: ['food safety violations', 'expiration date violations', 'health code citations', 'restaurant violations', 'food safety inspection'],
      category: 'blog',
      pillar: 'Food Safety & Compliance',
      pillarHref: '/resources/food-safety-compliance'
    },
    {
      path: 'blog/digital-food-safety-logs',
      title: 'Digital Food Safety Logs vs Paper: Which Is Better for Restaurants?',
      description: 'Comparing digital and paper food safety logging systems. Compliance, accuracy, ease of use, and cost considerations for restaurant operators.',
      keywords: ['digital food safety logs', 'food safety apps', 'temperature logging', 'food safety software', 'digital vs paper logs'],
      category: 'blog',
      pillar: 'Food Safety & Compliance',
      pillarHref: '/resources/food-safety-compliance'
    }
  ],

  // Silo 6: Predictive Ordering & Analytics (7 pages)
  silo6: [
    {
      path: 'resources/predictive-ordering',
      title: 'Predictive Ordering for Restaurants: AI-Driven Inventory Management',
      description: 'Complete guide to predictive ordering systems for restaurants. How AI forecasts demand, optimizes orders, and reduces waste through data-driven ordering.',
      keywords: ['predictive ordering', 'AI restaurant ordering', 'demand forecasting', 'inventory prediction', 'restaurant analytics'],
      category: 'pillar',
      pillar: 'Predictive Ordering & Analytics',
      pillarHref: '/resources/predictive-ordering'
    },
    {
      path: 'resources/restaurant-analytics-metrics',
      title: 'Restaurant Analytics: Which Metrics Actually Matter for Small Businesses',
      description: 'Essential restaurant analytics metrics for independent operators. Food cost, labor %, sales per labor hour, and actionable KPIs that drive profitability.',
      keywords: ['restaurant analytics', 'restaurant metrics', 'restaurant KPIs', 'food service analytics', 'restaurant performance metrics'],
      category: 'supporting',
      pillar: 'Predictive Ordering & Analytics',
      pillarHref: '/resources/predictive-ordering'
    },
    {
      path: 'resources/ai-restaurant-management',
      title: 'AI in Restaurant Management: Practical Applications in 2025',
      description: 'How artificial intelligence is transforming restaurant operations. Real-world AI applications, benefits, limitations, and implementation guide.',
      keywords: ['AI restaurant management', 'artificial intelligence restaurants', 'restaurant AI technology', 'AI food service', 'machine learning restaurants'],
      category: 'supporting',
      pillar: 'Predictive Ordering & Analytics',
      pillarHref: '/resources/predictive-ordering'
    },
    {
      path: 'resources/inventory-velocity',
      title: 'Inventory Velocity: How to Calculate and Optimize Turnover Rate',
      description: 'Understanding inventory velocity and turnover for restaurants. Calculate inventory days on hand, optimize ordering frequency, and improve cash flow.',
      keywords: ['inventory velocity', 'inventory turnover', 'stock turnover rate', 'inventory days on hand', 'restaurant inventory metrics'],
      category: 'supporting',
      pillar: 'Predictive Ordering & Analytics',
      pillarHref: '/resources/predictive-ordering'
    },
    {
      path: 'blog/machine-learning-predicts-inventory',
      title: 'How Machine Learning Predicts When You\'ll Run Out of Ingredients',
      description: 'Inside the algorithms that forecast ingredient usage. How ML analyzes sales patterns, weather, events, and historical data to predict inventory needs.',
      keywords: ['machine learning inventory', 'predictive analytics food', 'AI demand forecasting', 'inventory prediction algorithms', 'ML restaurant'],
      category: 'blog',
      pillar: 'Predictive Ordering & Analytics',
      pillarHref: '/resources/predictive-ordering'
    },
    {
      path: 'blog/data-driven-ordering-vs-gut-instinct',
      title: 'Data-Driven Ordering vs Gut Instinct: Which Wins for Food Trucks?',
      description: 'Comparing intuition-based ordering to data-driven systems. Real results from food trucks that switched from guessing to analytics-based ordering.',
      keywords: ['data-driven ordering', 'restaurant analytics', 'gut instinct vs data', 'food truck ordering', 'predictive vs intuition'],
      category: 'blog',
      pillar: 'Predictive Ordering & Analytics',
      pillarHref: '/resources/predictive-ordering'
    },
    {
      path: 'blog/inventory-patterns-over-ordering',
      title: 'Inventory Patterns That Reveal You\'re Over-Ordering',
      description: 'Data signals that indicate over-ordering problems. Learn to read inventory analytics to identify patterns and reduce unnecessary food purchases.',
      keywords: ['over-ordering patterns', 'inventory analytics', 'ordering mistakes', 'inventory data analysis', 'reduce over-ordering'],
      category: 'blog',
      pillar: 'Predictive Ordering & Analytics',
      pillarHref: '/resources/predictive-ordering'
    }
  ],

  // Silo 2: Food Truck Operations (7 remaining - pillar already exists)
  silo2: [
    {
      path: 'resources/food-truck-profit-margins',
      title: 'Food Truck Profit Margins: How to Maximize Profitability [2025]',
      description: 'Complete guide to understanding and improving food truck profit margins. Industry benchmarks, cost control strategies, and pricing optimization for mobile food businesses.',
      keywords: ['food truck profit margins', 'food truck profitability', 'mobile food business profits', 'food truck revenue', 'restaurant margins'],
      category: 'supporting',
      pillar: 'Food Truck Operations',
      pillarHref: '/resources/food-truck-operations'
    },
    {
      path: 'resources/best-food-truck-software',
      title: 'Best Food Truck Software: Complete Comparison Guide [2025]',
      description: 'Comprehensive comparison of food truck management software including POS systems, inventory management, scheduling, and operations tools. Real user reviews and pricing.',
      keywords: ['best food truck software', 'food truck management system', 'food truck POS', 'mobile food software', 'food truck technology'],
      category: 'supporting',
      pillar: 'Food Truck Operations',
      pillarHref: '/resources/food-truck-operations'
    },
    {
      path: 'resources/food-truck-commissary-storage',
      title: 'Food Truck Commissary Storage: Setup & Best Practices Guide',
      description: 'How to optimize commissary kitchen storage for food trucks. Layout strategies, equipment needs, compliance requirements, and inventory organization systems.',
      keywords: ['food truck commissary', 'commissary kitchen storage', 'food truck prep space', 'commercial kitchen rental', 'food truck storage'],
      category: 'supporting',
      pillar: 'Food Truck Operations',
      pillarHref: '/resources/food-truck-operations'
    },
    {
      path: 'blog/food-truck-startup-costs',
      title: 'Food Truck Startup Costs: Complete 2025 Breakdown',
      description: 'Detailed breakdown of food truck startup costs including truck purchase, equipment, permits, insurance, and working capital. Real numbers from actual operators.',
      keywords: ['food truck startup costs', 'how much to start food truck', 'food truck investment', 'food truck budget', 'food truck financing'],
      category: 'blog',
      pillar: 'Food Truck Operations',
      pillarHref: '/resources/food-truck-operations'
    },
    {
      path: 'blog/food-truck-technology-tools',
      title: 'Essential Technology Tools Every Food Truck Needs in 2025',
      description: 'The technology stack modern food trucks use to succeed: POS systems, inventory apps, scheduling software, social media tools, and payment processing.',
      keywords: ['food truck technology', 'food truck tools', 'food truck apps', 'mobile food tech', 'restaurant technology'],
      category: 'blog',
      pillar: 'Food Truck Operations',
      pillarHref: '/resources/food-truck-operations'
    },
    {
      path: 'blog/manage-food-truck-multi-event-inventory',
      title: 'How to Manage Food Truck Inventory Across Multiple Events',
      description: 'Strategies for ordering and managing inventory when serving multiple events per week. Demand forecasting, event-based ordering, and preventing waste.',
      keywords: ['food truck event management', 'multi-event inventory', 'food truck catering', 'event inventory planning', 'food truck logistics'],
      category: 'blog',
      pillar: 'Food Truck Operations',
      pillarHref: '/resources/food-truck-operations'
    },
    {
      path: 'blog/food-truck-food-safety-checklist',
      title: 'Food Truck Food Safety Checklist: Daily, Weekly, Monthly Tasks',
      description: 'Complete food safety checklist for food truck operators covering temperature logs, cleaning schedules, pest control, and health inspection preparation.',
      keywords: ['food truck food safety', 'food truck checklist', 'mobile food safety', 'food truck health code', 'food safety compliance'],
      category: 'blog',
      pillar: 'Food Truck Operations',
      pillarHref: '/resources/food-truck-operations'
    }
  ]
};

// Generate a page file
function generatePage(pageData) {
  const { path: pagePath, title, description, keywords, category, pillar, pillarHref } = pageData;

  const isBlog = pagePath.startsWith('blog/');
  const isSupporting = category === 'supporting';
  const isPillar = category === 'pillar';

  const url = `/${pagePath}`;
  const fileName = `page.tsx`;
  const dirPath = path.join(__dirname, '..', 'app', pagePath);
  const filePath = path.join(dirPath, fileName);

  // Skip if already exists
  if (fs.existsSync(filePath)) {
    console.log(`⏭️  Skipping ${pagePath} (already exists)`);
    return;
  }

  const breadcrumbs = isBlog
    ? [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/resources' },
        { label: title.split(':')[0], href: url }
      ]
    : [
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: title.split(':')[0], href: url }
      ];

  const template = `import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
${isPillar ? 'import TableOfContents from "@/components/TableOfContents";\n' : ''}import RelatedArticles from "@/components/RelatedArticles";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
  keywords: [${keywords.map(k => `"${k}"`).join(', ')}],
  openGraph: {
    title: "${title}",
    description: "${description}",
    url: "https://snaptrack.io${url}",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "${title}",
    description: "${description}",
  },
  alternates: {
    canonical: "https://snaptrack.io${url}",
  },
};

${isPillar ? `const tocItems = [
  { id: "section-1", title: "Introduction", level: 2 },
  { id: "section-2", title: "Key Concepts", level: 2 },
  { id: "section-3", title: "Implementation", level: 2 },
  { id: "section-4", title: "Best Practices", level: 2 },
];

` : ''}const relatedArticles = [
  {
    title: "${pillar}",
    description: "Complete guide to ${pillar.toLowerCase()}",
    href: "${pillarHref}",
    category: "Guide",
  },
  {
    title: "Food Waste Prevention Guide",
    description: "Comprehensive strategies for reducing food waste",
    href: "/resources/food-waste-prevention",
    category: "Resource",
  },
  {
    title: "Food Truck Inventory Management",
    description: "Complete system setup for food truck operations",
    href: "/resources/food-truck-inventory-management",
    category: "Guide",
  },
];

export default function Page() {
  return (
    <ArticleLayout
      title="${title.split(':')[0]}"
      description="${description.substring(0, 200)}"
      publishDate="2025-01-20"
      readTime="10 min read"
      breadcrumbs={${JSON.stringify(breadcrumbs, null, 8)}}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "${isBlog ? 'BlogPosting' : 'Article'}",
            headline: "${title}",
            author: { "@type": "Organization", name: "SnapTrack" },
            publisher: {
              "@type": "Organization",
              name: "SnapTrack",
              logo: { "@type": "ImageObject", url: "https://snaptrack.io/logo.png" },
            },
            datePublished: "2025-01-20",
            description: "${description}",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: ${JSON.stringify(breadcrumbs.map((b, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: b.label,
              item: `https://snaptrack.io${b.href}`
            })), null, 12)},
          }),
        }}
      />

${isPillar ? '      <TableOfContents items={tocItems} />\n\n' : ''}      <p className="lead">
        ${description}
      </p>

      <h2 id="introduction">Introduction</h2>

      <p>
        This comprehensive guide covers everything you need to know about ${title.toLowerCase().split(':')[0]}. We'll explore industry best practices, proven strategies, and actionable insights from successful operators.
      </p>

      <h2 id="key-concepts">Key Concepts</h2>

      <p>
        Understanding the fundamentals is essential for success. In this section, we cover the core principles and concepts that will help you make informed decisions.
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Industry-standard approaches and methodologies</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Common challenges and how to overcome them</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Tools and resources that make implementation easier</span>
        </li>
      </ul>

      <ArticleCTA
        variant="compact"
        title="Streamline Your Operations"
        description="SnapTrack helps food trucks optimize inventory and reduce waste automatically."
        primaryCTA={{ text: "Learn More", href: "/product" }}
      />

      <h2 id="implementation">Implementation Strategy</h2>

      <p>
        Putting theory into practice requires a systematic approach. Follow these proven steps to achieve results:
      </p>

      <ol className="space-y-3 my-6 list-decimal list-inside">
        <li><strong>Assessment:</strong> Evaluate your current situation and identify improvement opportunities</li>
        <li><strong>Planning:</strong> Create a detailed roadmap with clear milestones and metrics</li>
        <li><strong>Execution:</strong> Implement changes systematically, starting with high-impact areas</li>
        <li><strong>Monitoring:</strong> Track progress and adjust based on results</li>
        <li><strong>Optimization:</strong> Refine your approach based on data and feedback</li>
      </ol>

      <h2 id="best-practices">Best Practices</h2>

      <p>
        Learn from operators who have successfully implemented these strategies. Here are the most important best practices:
      </p>

      <h3>Start Small and Scale</h3>

      <p>
        Don't try to change everything at once. Focus on one area, perfect it, then expand to others. This reduces risk and builds confidence.
      </p>

      <h3>Measure Everything</h3>

      <p>
        You can't improve what you don't measure. Track key metrics consistently and use data to guide decisions. Learn more about <a href="/resources/restaurant-analytics-metrics" className="text-primary-600 hover:underline">restaurant analytics and metrics</a>.
      </p>

      <h3>Train Your Team</h3>

      <p>
        Success depends on team buy-in. Invest time in training and explaining why changes matter. Show how improvements benefit everyone.
      </p>

      <h3>Review and Adjust Regularly</h3>

      <p>
        What works today may not work tomorrow. Schedule monthly reviews to assess what's working and what needs adjustment.
      </p>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <div>
            <strong>Overcomplicating the process:</strong> Keep systems simple and focused on outcomes
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <div>
            <strong>Ignoring team feedback:</strong> Your staff often sees problems you don't
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <div>
            <strong>Failing to document processes:</strong> Write down what works so it's repeatable
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <div>
            <strong>Not setting clear goals:</strong> Define success metrics before starting
          </div>
        </li>
      </ul>

      <h2 id="conclusion">Conclusion</h2>

      <p>
        Mastering ${title.toLowerCase().split(':')[0]} requires commitment, consistency, and the right tools. By following the strategies outlined in this guide and avoiding common pitfalls, you'll be well-positioned for success.
      </p>

      <p>
        Remember: implementation is more important than perfection. Start today with small changes, track your results, and iterate based on what you learn.
      </p>

      <RelatedArticles articles={relatedArticles} />

      <ArticleCTA />
    </ArticleLayout>
  );
}
`;

  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // Write file
  fs.writeFileSync(filePath, template);
  console.log(`✅ Created ${pagePath}`);
}

// Main execution
console.log('🚀 Generating remaining content pages...\n');

let totalCreated = 0;

// Generate all silos
Object.keys(remainingPages).forEach(siloKey => {
  const siloName = {
    silo2: 'Silo 2: Food Truck Operations',
    silo3: 'Silo 3: Inventory Management Systems',
    silo4: 'Silo 4: Restaurant Cost Control',
    silo5: 'Silo 5: Food Safety & Compliance',
    silo6: 'Silo 6: Predictive Ordering & Analytics'
  }[siloKey];

  console.log(`\n📁 ${siloName}`);
  remainingPages[siloKey].forEach(page => {
    generatePage(page);
    totalCreated++;
  });
});

console.log(`\n\n✨ Generation complete! Created ${totalCreated} pages.`);
console.log('\nNext steps:');
console.log('1. Review generated pages for quality');
console.log('2. Add page-specific content where needed');
console.log('3. Update sitemap.xml');
console.log('4. Test all pages locally');
