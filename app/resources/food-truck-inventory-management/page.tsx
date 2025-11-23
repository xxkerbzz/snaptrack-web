import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import TableOfContents from "@/components/TableOfContents";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Food Truck Inventory Management: Complete System Setup Guide [2025]",
  description:
    "Step-by-step guide to setting up inventory management for food trucks. Covers tracking methods, software options, best practices, and mobile solutions that actually work in trucks.",
  keywords: [
    "food truck inventory management",
    "mobile inventory system",
    "food truck operations",
    "inventory tracking food truck",
    "restaurant inventory mobile",
  ],
  openGraph: {
    title: "Food Truck Inventory Management Guide",
    description:
      "Complete guide to managing food truck inventory efficiently—from manual systems to automated mobile solutions.",
    url: "https://snaptrack.io/resources/food-truck-inventory-management",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Truck Inventory Management Guide",
    description:
      "Complete guide to managing food truck inventory efficiently—from manual systems to automated mobile solutions.",
  },
  alternates: {
    canonical: "https://snaptrack.io/resources/food-truck-inventory-management",
  },
};

const tocItems = [
  { id: "challenges", title: "Unique Challenges of Food Truck Inventory", level: 2 },
  { id: "essential-tracking", title: "What You Must Track", level: 2 },
  { id: "methods", title: "Tracking Methods Compared", level: 2 },
  { id: "setup", title: "Setting Up Your System", level: 2 },
  { id: "mobile-solutions", title: "Best Mobile Solutions", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes to Avoid", level: 2 },
];

const relatedArticles = [
  {
    title: "Food Truck Operations Guide",
    description: "Comprehensive resource for food truck operational excellence",
    href: "/resources/food-truck-operations",
    category: "Guide",
  },
  {
    title: "Best Inventory Apps for Food Trucks",
    description: "Detailed comparison of mobile inventory management apps",
    href: "/resources/best-inventory-apps-food-trucks",
    category: "Software",
  },
  {
    title: "Food Truck Profit Margins",
    description: "How to maximize profitability in food truck operations",
    href: "/resources/food-truck-profit-margins",
    category: "Finance",
  },
  {
    title: "Manual vs Automated Inventory",
    description: "Which inventory system delivers better ROI for food trucks",
    href: "/blog/manual-vs-automated-inventory",
    category: "Analysis",
  },
];

export default function FoodTruckInventoryManagement() {
  return (
    <ArticleLayout
      title="Food Truck Inventory Management: Complete System Setup Guide"
      description="Food trucks face unique inventory challenges—limited storage, mobile operations, and zero room for error. Here's how to build a system that actually works."
      publishDate="2025-01-15"
      readTime="15 min read"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Food Truck Inventory Management", href: "/resources/food-truck-inventory-management" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Food Truck Inventory Management: Complete System Setup Guide",
            author: { "@type": "Organization", name: "SnapTrack" },
            publisher: {
              "@type": "Organization",
              name: "SnapTrack",
              logo: { "@type": "ImageObject", url: "https://snaptrack.io/logo.png" },
            },
            datePublished: "2025-01-15",
            description:
              "Complete guide to setting up effective inventory management systems for food trucks, covering tracking methods and mobile solutions.",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://snaptrack.io/" },
              { "@type": "ListItem", position: 2, name: "Resources", item: "https://snaptrack.io/resources" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Food Truck Inventory Management",
                item: "https://snaptrack.io/resources/food-truck-inventory-management",
              },
            ],
          }),
        }}
      />

      <TableOfContents items={tocItems} />

      <p className="lead">
        Managing inventory in a food truck is fundamentally different from running a restaurant. You're working in 80-200 square feet instead of thousands. Your storage moves daily. Your commissary is separate from your service location. And a single stockout can mean lost revenue for an entire event.
      </p>

      <p>
        This guide covers everything you need to build an inventory management system that works for mobile food operations—from tracking methodologies to software options to operational best practices drawn from hundreds of successful food truck operators.
      </p>

      <h2 id="challenges">Unique Challenges of Food Truck Inventory</h2>

      <p>
        Before choosing a tracking system, understand the specific challenges food trucks face that brick-and-mortar restaurants don't:
      </p>

      <h3>Limited Storage Space</h3>

      <p>
        Food trucks typically have:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>50-80 cubic feet of refrigeration</strong> (vs 200-500 in restaurants)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>30-60 cubic feet of dry storage</strong> (often in awkward undercounter spaces)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Zero walk-in cooler access</strong> during service (everything must fit in truck)</span>
        </li>
      </ul>

      <p>
        This means <strong>precision ordering is critical</strong>—over-ordering leads to waste because there's nowhere to store excess inventory. Learn more about <a href="/resources/food-waste-prevention" className="text-primary-600 hover:underline">food waste prevention strategies</a> specific to small spaces.
      </p>

      <h3>Dual-Location Operations</h3>

      <p>
        Most food trucks operate from two locations:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Commissary/storage facility:</strong> Where bulk inventory is stored and prep happens</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Truck:</strong> Limited working inventory for daily service</span>
        </li>
      </ul>

      <p>
        Effective systems track <em>both</em> locations and manage transfers between them. Check out <a href="/resources/food-truck-commissary-storage" className="text-primary-600 hover:underline">commissary storage best practices</a>.
      </p>

      <h3>Mobile Environment</h3>

      <p>
        Your inventory system moves constantly, which creates problems manual systems can't handle:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Clipboards get dirty, wet, or lost</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>No desktop computer access during service</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Everything must work on smartphone/tablet</span>
        </li>
      </ul>

      <h3>Event-Driven Demand Variability</h3>

      <p>
        Unlike restaurants with relatively predictable daily traffic, food trucks often serve:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Large events:</strong> 500-1,000+ customers in 4-6 hours</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Lunch service:</strong> 80-150 customers in 2 hours</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Slow days:</strong> 20-40 customers over 6 hours</span>
        </li>
      </ul>

      <p>
        Ordering the right inventory for unpredictable demand requires data-driven forecasting.
      </p>

      <h2 id="essential-tracking">What You Must Track (Minimum Viable System)</h2>

      <p>
        Start with these essential data points—everything else is optional until your system is running smoothly:
      </p>

      <h3>1. Current Quantity</h3>

      <p>
        How much of each ingredient you have <strong>right now</strong> in both truck and commissary. Track by:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Count (5 bags of buns)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Weight (2.5 lbs of ground beef)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Volume (1 gallon of salsa)</span>
        </li>
      </ul>

      <h3>2. Expiration Dates</h3>

      <p>
        <strong>The #1 cause of food truck waste</strong> is expired ingredients that weren't tracked. For every perishable item, log:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Supplier's "use by" or "sell by" date</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Your internal expiration date (often more conservative)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Date opened (for items with post-opening shelf life)</span>
        </li>
      </ul>

      <p>
        Use <a href="/resources/expiration-date-tracking" className="text-primary-600 hover:underline">expiration date tracking systems</a> to automate alerts.
      </p>

      <h3>3. Reorder Point</h3>

      <p>
        When quantity drops below this threshold, reorder. Calculate as:
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
        <p className="font-mono">
          <strong>Reorder Point = (Daily Usage × Lead Time) + Safety Stock</strong>
        </p>
        <p className="text-sm mt-4">
          Example: If you use 10 lbs of chicken daily, your supplier delivers in 2 days, and you want 1 day of safety stock, your reorder point is (10 × 2) + 10 = 30 lbs.
        </p>
      </div>

      <h3>4. Cost Per Unit</h3>

      <p>
        Track what you paid for each ingredient to:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Calculate food cost percentage accurately</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Identify when suppliers raise prices</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Quantify waste in dollar terms</span>
        </li>
      </ul>

      <h3>Optional (But Useful) Data Points</h3>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Supplier information:</strong> Who you bought from, order number</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Location:</strong> Truck vs commissary vs backup storage</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Batch/lot number:</strong> For food safety traceability</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Recipe mapping:</strong> Which menu items use this ingredient</span>
        </li>
      </ul>

      <ArticleCTA
        variant="compact"
        title="Track Everything Automatically"
        description="SnapTrack captures quantities, expiration dates, and costs with a phone camera—no manual data entry."
        primaryCTA={{ text: "See How It Works", href: "/how-it-works" }}
      />

      <h2 id="methods">Tracking Methods Compared</h2>

      <p>
        There are four main approaches food trucks use for inventory management. Here's how they stack up:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">Method</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Time Cost</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Accuracy</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm font-medium">Mental Tracking</td>
              <td className="px-4 py-3 text-sm">0 hours</td>
              <td className="px-4 py-3 text-sm text-red-600">Poor (40-60%)</td>
              <td className="px-4 py-3 text-sm">Very small operations (&lt;20 items)</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium">Clipboard/Paper</td>
              <td className="px-4 py-3 text-sm">6-8 hours/month</td>
              <td className="px-4 py-3 text-sm text-yellow-600">Fair (70-75%)</td>
              <td className="px-4 py-3 text-sm">Simple menus, patient owners</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-medium">Spreadsheets</td>
              <td className="px-4 py-3 text-sm">10-15 hours/month</td>
              <td className="px-4 py-3 text-sm text-yellow-600">Good (80-85%)</td>
              <td className="px-4 py-3 text-sm">Tech-comfortable operators with time</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium">Mobile Apps/Automated</td>
              <td className="px-4 py-3 text-sm">2-4 hours/month</td>
              <td className="px-4 py-3 text-sm text-green-600">Excellent (90-95%)</td>
              <td className="px-4 py-3 text-sm">Most food trucks (50+ SKUs)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="setup">Setting Up Your Inventory System (Step-by-Step)</h2>

      <p>
        Whether you're using paper, spreadsheets, or software, follow this process:
      </p>

      <h3>Step 1: Create Your Master Ingredient List</h3>

      <p>
        List every ingredient and supply item you use, organized by category:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Proteins (chicken, beef, fish, etc.)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Produce (fresh vegetables, fruits, herbs)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Dairy (milk, cheese, butter, cream)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Dry goods (flour, rice, pasta, spices)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Prepared items (sauces, condiments, marinades)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Packaging (containers, cups, napkins, utensils)</span>
        </li>
      </ul>

      <p>
        For each item, note: preferred supplier, typical unit size, current cost, and typical shelf life.
      </p>

      <h3>Step 2: Conduct Initial Physical Count</h3>

      <p>
        Count everything in both truck and commissary. This is your baseline. Don't skip this—inaccurate starting data ruins everything downstream.
      </p>

      <p>
        <strong>Pro tip:</strong> Do this right before placing a weekly order so you're starting with a full count.
      </p>

      <h3>Step 3: Set Reorder Points for Each Item</h3>

      <p>
        Use historical usage if you have it. If not, make educated guesses and adjust over 2-3 weeks as you gather data.
      </p>

      <h3>Step 4: Establish Counting Routine</h3>

      <p>
        Choose one of these frequencies:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Daily (recommended):</strong> Quick 10-minute count focusing on perishables and high-turnover items</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Twice weekly:</strong> Full count before major order days (e.g., Monday & Thursday)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span><strong>Weekly:</strong> Minimum frequency—higher waste risk but less time investment</span>
        </li>
      </ul>

      <h3>Step 5: Track Waste Separately</h3>

      <p>
        Create a waste log noting:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>What was thrown away</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Quantity</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Why (expired, spoiled, prep error, customer return)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Dollar value</span>
        </li>
      </ul>

      <p>
        This data reveals patterns that help prevent future waste. See <a href="/blog/real-cost-food-waste" className="text-primary-600 hover:underline">the real cost of food waste</a> for why this matters.
      </p>

      <h2 id="mobile-solutions">Best Mobile Solutions for Food Trucks</h2>

      <p>
        Most food trucks eventually move to mobile apps because they're purpose-built for on-the-go operations. Key features to look for:
      </p>

      <h3>Must-Have Features</h3>

      <ul className="space-y-3 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">✓</span>
          <div>
            <strong>Offline mode:</strong> Works without internet (syncs when reconnected)
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">✓</span>
          <div>
            <strong>Fast input methods:</strong> Camera scanning or voice entry beats typing every time
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">✓</span>
          <div>
            <strong>Multi-location support:</strong> Track truck and commissary separately
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">✓</span>
          <div>
            <strong>Expiration alerts:</strong> Proactive notifications before items spoil
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">✓</span>
          <div>
            <strong>Reorder notifications:</strong> Automatic alerts when stock is low
          </div>
        </li>
      </ul>

      <h3>Nice-to-Have Features</h3>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>POS integration (auto-deduct sold items)</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Recipe costing calculator</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Supplier order automation</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Waste analytics and reporting</span>
        </li>
      </ul>

      <p>
        Explore detailed comparisons in our <a href="/resources/best-inventory-apps-food-trucks" className="text-primary-600 hover:underline">best inventory apps for food trucks guide</a>.
      </p>

      <h2 id="best-practices">Best Practices from Successful Food Truck Operators</h2>

      <h3>1. Scan Deliveries Immediately</h3>

      <p>
        Don't let deliveries sit unlogged. Scan or record items <em>before</em> putting them away. This prevents the "I think we have 5 bags of onions but I'm not sure" problem.
      </p>

      <h3>2. Use FIFO Religiously</h3>

      <p>
        First In, First Out. Put new inventory behind old inventory so you use older items first. Label shelves with dates if needed.
      </p>

      <h3>3. Color-Code Expiration Warnings</h3>

      <p>
        Whether using paper tags or software, create a visual system:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-green-600 mr-2">●</span>
          <span><strong>Green:</strong> More than 3 days until expiration</span>
        </li>
        <li className="flex items-start">
          <span className="text-yellow-600 mr-2">●</span>
          <span><strong>Yellow:</strong> 1-3 days until expiration (use soon)</span>
        </li>
        <li className="flex items-start">
          <span className="text-red-600 mr-2">●</span>
          <span><strong>Red:</strong> Less than 1 day (use today or discard)</span>
        </li>
      </ul>

      <h3>4. Pre-Portion When Possible</h3>

      <p>
        Batch prep ingredients into recipe-sized portions. This makes counting easier (2 bags of pre-portioned chicken vs estimating from a 10-lb bulk package).
      </p>

      <h3>5. Run Weekly Waste Audits</h3>

      <p>
        Every Sunday (or your weekly prep day), review:
      </p>

      <ul className="space-y-2 my-6">
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>What got thrown away last week</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Dollar value of waste</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>What needs to be used this week</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary-600 mr-2">•</span>
          <span>Patterns (same items wasted repeatedly?)</span>
        </li>
      </ul>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>

      <h3>1. Over-Complicated Systems</h3>

      <p>
        Don't track 50 data points when you only need 5. Start simple, add complexity only when needed.
      </p>

      <h3>2. Inconsistent Tracking</h3>

      <p>
        Tracking inventory only when you "have time" is worse than not tracking at all—your data becomes unreliable and you lose trust in the system.
      </p>

      <h3>3. Ignoring Waste Data</h3>

      <p>
        Logging waste without analyzing patterns is pointless. Review waste trends monthly and adjust ordering.
      </p>

      <h3>4. Not Training Staff</h3>

      <p>
        If employees don't understand why inventory tracking matters, they won't do it properly. Explain how waste affects their job security and potential bonuses.
      </p>

      <h3>5. Treating All Items Equally</h3>

      <p>
        Focus tracking intensity on high-value and high-waste items. Counting every napkin isn't worth your time.
      </p>

      <h2 id="next-steps">Getting Started Today</h2>

      <p>
        If you're not currently tracking inventory (or using a broken system), here's your action plan:
      </p>

      <ol className="space-y-3 my-6 list-decimal list-inside">
        <li><strong>Today:</strong> Create your master ingredient list</li>
        <li><strong>This week:</strong> Do a full physical count and log expiration dates</li>
        <li><strong>Next week:</strong> Set reorder points and test your counting routine</li>
        <li><strong>Within 30 days:</strong> Evaluate whether your system is working or if you need better tools</li>
      </ol>

      <p>
        Effective inventory management is the difference between profitable food truck operations and constantly wondering where your money went. The system doesn't need to be perfect—it just needs to exist and be used consistently.
      </p>

      <RelatedArticles articles={relatedArticles} />

      <ArticleCTA />
    </ArticleLayout>
  );
}
