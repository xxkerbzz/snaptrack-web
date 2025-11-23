import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import TableOfContents from "@/components/TableOfContents";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Food Truck Operations Guide: Systems for Profitability",
  description:
    "Complete guide to food truck operations including financial management, inventory, equipment, staffing, permits, and scaling strategies for maximum profitability.",
  keywords: [
    "food truck operations",
    "food truck management",
    "food truck business",
    "mobile food operations",
  ],
  openGraph: {
    title: "Food Truck Operations Guide: Systems for Profitability",
    description: "Complete operational guide for profitable food truck management.",
    url: "https://snaptrack.io/resources/food-truck-operations",
    type: "article",
  },
  alternates: {
    canonical: "https://snaptrack.io/resources/food-truck-operations",
  },
};

const tocItems = [
  { id: "financial-management", title: "Financial Management", level: 2 },
  { id: "inventory-optimization", title: "Inventory Optimization", level: 2 },
  { id: "equipment-tech", title: "Equipment and Tech Stack", level: 2 },
  { id: "staffing", title: "Staffing and Training", level: 2 },
  { id: "permits", title: "Permits and Compliance", level: 2 },
  { id: "route-planning", title: "Route Planning", level: 2 },
  { id: "scaling", title: "Scaling Your Operation", level: 2 },
];

const relatedArticles = [
  {
    title: "Food Truck Inventory Management",
    description: "Complete system setup for mobile inventory tracking",
    href: "/resources/food-truck-inventory-management",
    category: "Operations",
  },
  {
    title: "Food Truck Profit Margins",
    description: "Maximize earnings through cost control and efficiency",
    href: "/resources/food-truck-profit-margins",
    category: "Financial",
  },
  {
    title: "Best Food Truck Software",
    description: "Compare top technology solutions for mobile operations",
    href: "/resources/best-food-truck-software",
    category: "Technology",
  },
  {
    title: "Food Truck Waste Reduction",
    description: "Specialized waste prevention strategies for mobile kitchens",
    href: "/resources/food-truck-waste-reduction",
    category: "Efficiency",
  },
];

export default function FoodTruckOperationsPage() {
  return (
    <ArticleLayout
      title="Food Truck Operations Guide: Systems for Profitability and Growth"
      description="Master food truck operations with proven systems for financial management, inventory optimization, compliance, and sustainable growth."
      publishDate="2025-01-15"
      readTime="20 min read"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Food Truck Operations", href: "/resources/food-truck-operations" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Food Truck Operations Guide: Systems for Profitability and Growth",
            author: { "@type": "Organization", name: "SnapTrack" },
            publisher: {
              "@type": "Organization",
              name: "SnapTrack",
              logo: { "@type": "ImageObject", url: "https://snaptrack.io/logo.png" },
            },
            datePublished: "2025-01-15",
          }),
        }}
      />

      <TableOfContents items={tocItems} />

      <p className="lead">
        Food trucks generating $300,000-$500,000 in annual revenue operate on 5-15% net profit margins—thin enough that operational inefficiencies quickly turn profits into losses. This comprehensive guide provides battle-tested systems to optimize every aspect of your mobile food operation for maximum profitability and sustainable growth.
      </p>

      <h2 id="financial-management">Financial Management</h2>
      <p>
        Effective financial management separates thriving food trucks from those that barely survive. Mobile operations face unique financial challenges requiring specialized tracking and analysis.
      </p>

      <h3>Core Financial Metrics to Track Daily</h3>
      <ul>
        <li><strong>Revenue per service period:</strong> Track by location, event, day-part</li>
        <li><strong>Cost of goods sold (COGS):</strong> Target 28-32% for most concepts</li>
        <li><strong>Labor cost percentage:</strong> Typically 25-30% of revenue</li>
        <li><strong>Fuel and vehicle costs:</strong> Often overlooked, usually 3-5% of revenue</li>
        <li><strong>Waste rate:</strong> Should be under 3% with proper systems</li>
      </ul>

      <h3>Event-Based Profitability Analysis</h3>
      <p>
        Unlike brick-and-mortar restaurants, food trucks must evaluate profitability by individual events and locations:
      </p>
      <ul>
        <li><strong>True event profit = Revenue - (Food Cost + Labor + Fuel + Permits + Event Fees)</strong></li>
        <li>Track setup/breakdown time as labor cost (often 2-4 hours per event)</li>
        <li>Calculate profit per hour worked, not just per dollar of revenue</li>
        <li>Eliminate events with consistent sub-$100/hour profitability</li>
      </ul>

      <p>
        For comprehensive financial tracking strategies, see our <a href="/resources/food-truck-financial-management">food truck financial management guide</a>.
      </p>

      <ArticleCTA
        variant="compact"
        title="Track Every Dollar"
        description="SnapTrack integrates with your POS to provide real-time cost tracking"
        primaryCTA={{ text: "See Integration", href: "/integrations" }}
      />

      <h2 id="inventory-optimization">Inventory Optimization</h2>
      <p>
        Inventory management makes or breaks <a href="/resources/food-truck-profit-margins">food truck profitability</a>. Limited storage space, split operations between truck and commissary, and event-based demand create unique challenges.
      </p>

      <h3>The Space-Constrained Inventory System</h3>
      <p>
        With 10-20 cubic feet of refrigeration vs 100+ in traditional kitchens, every inch matters:
      </p>
      <ul>
        <li><strong>Menu ingredient matrix:</strong> 15-25 core ingredients used across multiple items</li>
        <li><strong>Par levels by location:</strong> Separate pars for truck vs commissary</li>
        <li><strong>FIFO enforcement:</strong> Critical in cramped spaces where items get buried</li>
        <li><strong>Mobile tracking:</strong> Smartphone-based systems accessible anywhere</li>
      </ul>

      <h3>Commissary-to-Truck Workflow</h3>
      <p>
        Optimize the daily transfer process:
      </p>
      <ol>
        <li><strong>Morning commissary check:</strong> Photograph all inventory before loading (2 min)</li>
        <li><strong>Load oldest first:</strong> FIFO starts at commissary, not just on truck</li>
        <li><strong>Update mobile inventory:</strong> Log what moved to truck (3 min)</li>
        <li><strong>Evening reconciliation:</strong> Count remaining truck inventory, plan next day (5 min)</li>
      </ol>

      <p>
        Detailed implementation instructions in our <a href="/resources/food-truck-inventory-management">food truck inventory management guide</a>.
      </p>

      <h2 id="equipment-tech">Equipment and Tech Stack</h2>
      <p>
        The right technology transforms operations from chaotic to systematic. Modern <a href="/resources/best-food-truck-software">food truck software</a> handles everything from ordering to compliance.
      </p>

      <h3>Essential Technology Stack</h3>

      <h4>1. Point of Sale (POS) System</h4>
      <p>
        Mobile-first POS with offline capability is non-negotiable:
      </p>
      <ul>
        <li><strong>Must-have features:</strong> Works offline, integrates with inventory, fast checkout</li>
        <li><strong>Top options:</strong> Square, Toast, Clover (mobile versions)</li>
        <li><strong>Cost:</strong> $0-60/month + 2.6-2.9% processing fees</li>
      </ul>

      <h4>2. Inventory Management</h4>
      <p>
        Mobile scanning and expiration tracking prevent waste:
      </p>
      <ul>
        <li><strong>Computer vision systems:</strong> SnapTrack, automatically read handwritten dates</li>
        <li><strong>Barcode systems:</strong> MarketMan, require pre-labeled inventory</li>
        <li><strong>Manual systems:</strong> Spreadsheets (time-consuming, error-prone)</li>
      </ul>

      <h4>3. Accounting Software</h4>
      <ul>
        <li><strong>QuickBooks Online:</strong> Industry standard, $30-90/month</li>
        <li><strong>Xero:</strong> Alternative with better mobile app</li>
        <li><strong>Integration:</strong> Must sync with POS for automatic sales recording</li>
      </ul>

      <h4>4. Route Planning and Scheduling</h4>
      <ul>
        <li><strong>Google Calendar:</strong> Free, shareable with team</li>
        <li><strong>Roaming Hunger:</strong> Find events and manage bookings</li>
        <li><strong>Custom CRM:</strong> For high-volume catering operations</li>
      </ul>

      <h2 id="staffing">Staffing and Training</h2>
      <p>
        Food truck staffing differs fundamentally from restaurant staffing due to space constraints, mobile operations, and variable schedules.
      </p>

      <h3>Optimal Staffing Models by Revenue</h3>
      <ul>
        <li><strong>$100-200k annual revenue:</strong> Owner-operator + 1 part-time (2 total)</li>
        <li><strong>$200-400k annual revenue:</strong> Owner + 2-3 part-time staff</li>
        <li><strong>$400-600k annual revenue:</strong> Owner + 1 full-time manager + 3-4 part-time</li>
        <li><strong>$600k+ annual revenue:</strong> Full management team, owner strategic role</li>
      </ul>

      <h3>Critical Training Areas</h3>
      <ul>
        <li><strong>Inventory management:</strong> FIFO, expiration tracking, mobile system usage</li>
        <li><strong>Portion control:</strong> Proper use of scoops, scales, visual guides</li>
        <li><strong>Service speed:</strong> 2-3 minute ticket times during peak</li>
        <li><strong>Equipment operation:</strong> Generator, propane, refrigeration troubleshooting</li>
        <li><strong>Food safety:</strong> Temperature monitoring, expiration enforcement</li>
      </ul>

      <h2 id="permits">Permits and Compliance</h2>
      <p>
        Navigating <a href="/resources/food-truck-health-permits">food truck permits and regulations</a> varies dramatically by jurisdiction. Non-compliance can shut down your operation.
      </p>

      <h3>Required Permits and Licenses</h3>
      <ul>
        <li><strong>Mobile food vendor license:</strong> Primary operating permit</li>
        <li><strong>Health department permit:</strong> After passing initial inspection</li>
        <li><strong>Business license:</strong> City/county level</li>
        <li><strong>EIN and tax registrations:</strong> Federal and state</li>
        <li><strong>Fire safety certification:</strong> For propane and cooking equipment</li>
        <li><strong>Parking permits:</strong> For each operating location</li>
        <li><strong>Event-specific permits:</strong> Required by many festivals and events</li>
      </ul>

      <h3>Multi-Jurisdiction Operations</h3>
      <p>
        Operating across city/county lines multiplies compliance complexity:
      </p>
      <ul>
        <li>Research requirements for every jurisdiction before operating</li>
        <li>Maintain binder with copies of all permits (digital and physical)</li>
        <li>Calendar renewal dates 60 days in advance</li>
        <li>Budget 2-5% of revenue for permits and compliance</li>
      </ul>

      <h2 id="route-planning">Route Planning and Location Strategy</h2>
      <p>
        Location selection directly impacts revenue, with top locations generating 3-5x more than poor ones.
      </p>

      <h3>Location Evaluation Framework</h3>
      <p>
        Assess potential locations using these criteria:
      </p>
      <ul>
        <li><strong>Foot traffic volume:</strong> Minimum 200-300 people/hour during service</li>
        <li><strong>Demographics match:</strong> Income level and food preferences align with concept</li>
        <li><strong>Competition analysis:</strong> Fewer than 3 similar concepts nearby</li>
        <li><strong>Accessibility:</strong> Easy approach, parking, turnaround</li>
        <li><strong>Permit availability:</strong> Legal to operate at desired times</li>
        <li><strong>Nearby amenities:</strong> Restrooms, waste disposal, water access</li>
      </ul>

      <h3>Weekly Schedule Optimization</h3>
      <p>
        Build your route around profitable recurring opportunities:
      </p>
      <ul>
        <li><strong>Anchor locations:</strong> 3-4 high-performing weekly spots</li>
        <li><strong>Fill-in opportunities:</strong> Events and catering between anchors</li>
        <li><strong>Down days:</strong> Use for prep, maintenance, marketing (not random low-traffic spots)</li>
        <li><strong>Geographic clustering:</strong> Minimize drive time between consecutive days</li>
      </ul>

      <h2 id="scaling">Scaling Your Operation</h2>
      <p>
        Strategic growth requires systems that scale without proportional time investment from the owner.
      </p>

      <h3>Growth Path Options</h3>

      <h4>Option 1: Second Truck (Most Common)</h4>
      <ul>
        <li><strong>Investment:</strong> $50,000-150,000 for second truck</li>
        <li><strong>Staffing:</strong> Requires reliable manager for first truck</li>
        <li><strong>Risk:</strong> Doubles fixed costs, requires strong systems</li>
        <li><strong>Timeline:</strong> Add truck 2-3 years after first truck becomes profitable</li>
      </ul>

      <h4>Option 2: Brick-and-Mortar Expansion</h4>
      <ul>
        <li><strong>Investment:</strong> $200,000-500,000 depending on location</li>
        <li><strong>Benefits:</strong> Stable location, higher volume potential, weather-proof</li>
        <li><strong>Challenges:</strong> Higher fixed costs, longer payback period</li>
      </ul>

      <h4>Option 3: Commissary Kitchen / Catering Focus</h4>
      <ul>
        <li><strong>Investment:</strong> $50,000-100,000 for commercial kitchen equipment</li>
        <li><strong>Model:</strong> Use truck for marketing, deliver catering from commissary</li>
        <li><strong>Benefits:</strong> Higher margins on catering, predictable revenue</li>
      </ul>

      <h3>Systems Required Before Scaling</h3>
      <p>
        Don't add a second truck until these are systematized:
      </p>
      <ul>
        <li><strong>Inventory management:</strong> Daily counts take under 10 minutes</li>
        <li><strong>Financial tracking:</strong> Automated reporting, not manual spreadsheets</li>
        <li><strong>Staff training:</strong> Written procedures for all key tasks</li>
        <li><strong>Quality control:</strong> Consistent product without owner present</li>
        <li><strong>Supply chain:</strong> Reliable vendors with backup options</li>
        <li><strong>Marketing:</strong> Predictable customer acquisition not dependent on owner</li>
      </ul>

      <RelatedArticles articles={relatedArticles} />

      <ArticleCTA />
    </ArticleLayout>
  );
}
