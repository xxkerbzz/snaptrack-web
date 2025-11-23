import { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import RelatedArticles from "@/components/RelatedArticles";
import ArticleCTA from "@/components/ArticleCTA";

export const metadata: Metadata = {
  title: "Expiration Date Tracking Best Practices Guide",
  description:
    "Complete guide to tracking expiration dates, implementing FIFO rotation, and preventing spoilage waste in restaurants and food trucks.",
  keywords: [
    "expiration date tracking",
    "FIFO rotation",
    "food expiration management",
    "prevent food spoilage",
  ],
  openGraph: {
    title: "Expiration Date Tracking Best Practices Guide",
    description: "Best practices for tracking expiration dates and implementing FIFO rotation.",
    url: "https://snaptrack.io/resources/expiration-date-tracking",
    type: "article",
  },
  alternates: {
    canonical: "https://snaptrack.io/resources/expiration-date-tracking",
  },
};

const relatedArticles = [
  {
    title: "Food Waste Prevention Complete Guide",
    description: "Comprehensive waste reduction strategies for food businesses",
    href: "/resources/food-waste-prevention",
    category: "Guide",
  },
  {
    title: "Computer Vision Inventory Systems",
    description: "How AI automatically reads handwritten expiration dates",
    href: "/resources/computer-vision-inventory-systems",
    category: "Technology",
  },
  {
    title: "Food Safety Violations from Expired Products",
    description: "Avoid health code violations with proper tracking",
    href: "/blog/food-safety-violations-expiration-dates",
    category: "Compliance",
  },
];

export default function ExpirationDateTrackingPage() {
  return (
    <ArticleLayout
      title="Expiration Date Tracking Best Practices Guide"
      description="Learn proven methods to track expiration dates, implement FIFO rotation, and prevent spoilage waste while maintaining food safety compliance."
      publishDate="2025-01-15"
      readTime="12 min read"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Food Waste Prevention", href: "/resources/food-waste-prevention" },
        { label: "Expiration Tracking", href: "/resources/expiration-date-tracking" },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Expiration Date Tracking Best Practices Guide",
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

      <p className="lead">
        Expiration-related waste costs restaurants $8,000-$25,000 annually and creates serious food safety risks. Systematic expiration date tracking prevents 70-85% of spoilage waste while ensuring regulatory compliance and protecting customer health.
      </p>

      <h2>Why Expiration Tracking Fails</h2>
      <p>
        Most restaurants attempt expiration tracking but fail due to common implementation problems:
      </p>

      <h3>Manual Tracking Limitations</h3>
      <ul>
        <li><strong>Illegible handwriting:</strong> Staff can't read dates written by others</li>
        <li><strong>Inconsistent labeling:</strong> Some items labeled, others forgotten</li>
        <li><strong>No centralized system:</strong> Dates written on containers but not tracked anywhere</li>
        <li><strong>Time-consuming checks:</strong> Opening every container daily is impractical</li>
        <li><strong>Human error:</strong> Items get pushed to back of refrigerator and forgotten</li>
      </ul>

      <h3>Technology Barriers</h3>
      <ul>
        <li><strong>Barcode systems:</strong> Require pre-printed labels not used in most kitchens</li>
        <li><strong>Manual spreadsheets:</strong> Too time-consuming to maintain daily</li>
        <li><strong>Complex software:</strong> Staff won't use systems requiring extensive data entry</li>
        <li><strong>Cost barriers:</strong> Enterprise systems too expensive for small operations</li>
      </ul>

      <h2>FIFO Rotation Principles</h2>
      <p>
        First In, First Out (FIFO) is the foundation of expiration management. Proper FIFO ensures older inventory is used before newer stock.
      </p>

      <h3>Core FIFO Rules</h3>
      <ol>
        <li><strong>Date everything immediately:</strong> Label all items upon receipt or preparation</li>
        <li><strong>Store new behind old:</strong> Place newly received items behind existing stock</li>
        <li><strong>Use oldest first:</strong> Always pull from front of storage for production</li>
        <li><strong>Visual indicators:</strong> Color-code or position items by age</li>
        <li><strong>Daily rotation:</strong> Check and rotate high-risk perishables daily</li>
      </ol>

      <h3>Storage Organization for FIFO</h3>
      <p>
        Physical organization makes FIFO possible:
      </p>
      <ul>
        <li><strong>Clear containers:</strong> See contents and dates without opening</li>
        <li><strong>Front-facing labels:</strong> Dates visible without moving items</li>
        <li><strong>Shelf organization:</strong> Group items by type, arrange by date within groups</li>
        <li><strong>Limited depth:</strong> One or two containers deep maximum</li>
        <li><strong>Elevated storage:</strong> Nothing on floor where it's forgotten</li>
      </ul>

      <ArticleCTA
        variant="compact"
        title="Automate Expiration Tracking"
        description="SnapTrack reads handwritten dates automatically - no new labels needed"
        primaryCTA={{ text: "See How It Works", href: "/demo" }}
      />

      <h2>Labeling Best Practices</h2>
      <p>
        Consistent, clear labeling is critical for <a href="/resources/food-waste-prevention">waste prevention</a>:
      </p>

      <h3>What to Include on Every Label</h3>
      <ul>
        <li><strong>Item name:</strong> Specific description (not just "chicken")</li>
        <li><strong>Prep/receipt date:</strong> When item was prepared or received</li>
        <li><strong>Use-by date:</strong> When item must be used or discarded</li>
        <li><strong>Staff initials:</strong> Who prepared or labeled the item</li>
        <li><strong>Optional - quantity:</strong> Helps with inventory counts</li>
      </ul>

      <h3>Color-Coding System</h3>
      <p>
        Many operations use color-coded labels for quick visual identification:
      </p>
      <ul>
        <li><strong>Monday - Blue labels</strong></li>
        <li><strong>Tuesday - Green labels</strong></li>
        <li><strong>Wednesday - Yellow labels</strong></li>
        <li><strong>Thursday - Orange labels</strong></li>
        <li><strong>Friday - Red labels</strong></li>
        <li><strong>Saturday - Purple labels</strong></li>
        <li><strong>Sunday - Brown labels</strong></li>
      </ul>
      <p>
        This allows instant identification of age without reading dates - if it's Wednesday and you see Monday's blue labels, they're already 2 days old.
      </p>

      <h3>Label Placement Rules</h3>
      <ul>
        <li>Always on the same location (typically upper right front)</li>
        <li>Horizontal orientation for easy reading</li>
        <li>Never on bottom or back of containers</li>
        <li>Use waterproof labels in wet environments</li>
        <li>Ensure labels stay adhered in refrigeration</li>
      </ul>

      <h2>Shelf Life Standards</h2>
      <p>
        Different food categories have different safe storage durations. Follow <a href="/resources/food-safety-compliance">food safety guidelines</a>:
      </p>

      <h3>Refrigerated Foods (34-38°F)</h3>
      <ul>
        <li><strong>Fresh fish:</strong> 1-2 days</li>
        <li><strong>Ground meat:</strong> 1-2 days</li>
        <li><strong>Fresh poultry:</strong> 1-2 days</li>
        <li><strong>Fresh beef/pork:</strong> 3-5 days</li>
        <li><strong>Cooked proteins:</strong> 3-4 days</li>
        <li><strong>Opened dairy:</strong> 5-7 days</li>
        <li><strong>Hard cheeses:</strong> 3-4 weeks</li>
        <li><strong>Fresh produce:</strong> 3-7 days (varies by type)</li>
        <li><strong>Prepared salads:</strong> 1-2 days</li>
        <li><strong>Cooked vegetables:</strong> 3-4 days</li>
        <li><strong>Soups and sauces:</strong> 3-4 days</li>
      </ul>

      <h3>Frozen Foods (0°F or below)</h3>
      <ul>
        <li><strong>Ground meat:</strong> 3-4 months</li>
        <li><strong>Whole poultry:</strong> 12 months</li>
        <li><strong>Poultry pieces:</strong> 9 months</li>
        <li><strong>Beef roasts:</strong> 12 months</li>
        <li><strong>Steaks/chops:</strong> 6-12 months</li>
        <li><strong>Fish (fatty):</strong> 2-3 months</li>
        <li><strong>Fish (lean):</strong> 6 months</li>
        <li><strong>Soups and stews:</strong> 2-3 months</li>
        <li><strong>Cooked foods:</strong> 2-3 months</li>
      </ul>

      <h3>Dry Storage (50-70°F, dry)</h3>
      <ul>
        <li><strong>Flour:</strong> 6-8 months</li>
        <li><strong>Sugar:</strong> 2 years</li>
        <li><strong>Pasta:</strong> 1-2 years</li>
        <li><strong>Rice:</strong> 1-2 years</li>
        <li><strong>Canned goods:</strong> 1-5 years (check dates)</li>
        <li><strong>Oils:</strong> 6-12 months (varies by type)</li>
        <li><strong>Spices (whole):</strong> 2-4 years</li>
        <li><strong>Spices (ground):</strong> 1-3 years</li>
      </ul>

      <h2>Daily Monitoring Procedures</h2>
      <p>
        Systematic daily checks prevent expiration waste:
      </p>

      <h3>Morning Routine (5-10 minutes)</h3>
      <ol>
        <li><strong>Check high-risk items:</strong> Scan refrigerated proteins, dairy, produce</li>
        <li><strong>Flag expiring items:</strong> Note anything expiring today or tomorrow</li>
        <li><strong>Plan usage:</strong> Add expiring items to specials or prioritize in prep</li>
        <li><strong>Update inventory:</strong> Log current quantities and dates</li>
        <li><strong>Discard expired:</strong> Remove anything past use-by date immediately</li>
      </ol>

      <h3>Mid-Service Check</h3>
      <ul>
        <li>Verify FIFO compliance during busy service</li>
        <li>Ensure staff pulling oldest items first</li>
        <li>Check walk-in temperature hasn't been compromised</li>
      </ul>

      <h3>End-of-Day Protocol</h3>
      <ul>
        <li>Date and label all prepared items</li>
        <li>Rotate stock putting newer items behind older</li>
        <li>Set alerts for items expiring next day</li>
        <li>Document waste with reasons in waste log</li>
      </ul>

      <h2>Technology Solutions</h2>
      <p>
        Modern <a href="/resources/computer-vision-inventory-systems">computer vision technology</a> automates expiration tracking:
      </p>

      <h3>Computer Vision Systems</h3>
      <p>
        Systems like SnapTrack use smartphone cameras to:
      </p>
      <ul>
        <li>Read handwritten expiration dates automatically</li>
        <li>Create digital inventory from photos in seconds</li>
        <li>Send alerts 2-3 days before items expire</li>
        <li>Track which items are expiring most often</li>
        <li>Generate reports for waste analysis</li>
        <li>Work with existing labeling practices (no new labels needed)</li>
      </ul>

      <h3>Digital Tracking Benefits</h3>
      <ul>
        <li><strong>Time savings:</strong> 5-minute inventory vs 30-45 minutes manually</li>
        <li><strong>Proactive alerts:</strong> Know what's expiring before it's too late</li>
        <li><strong>Historical data:</strong> Identify patterns in expiring items</li>
        <li><strong>Multi-location tracking:</strong> See inventory across commissary and truck</li>
        <li><strong>Audit trails:</strong> Documentation for health inspections</li>
      </ul>

      <h2>Staff Training and Compliance</h2>
      <p>
        Technology only works if staff follow proper procedures:
      </p>

      <h3>Training Checklist</h3>
      <ul>
        <li><strong>Proper labeling:</strong> What to write, where to place labels, importance of legibility</li>
        <li><strong>FIFO principles:</strong> Why it matters, how to implement, consequences of failure</li>
        <li><strong>Shelf life standards:</strong> How long different items last, safety implications</li>
        <li><strong>Storage organization:</strong> Where items belong, how to arrange for visibility</li>
        <li><strong>Daily procedures:</strong> When to check, what to look for, how to respond</li>
        <li><strong>Technology use:</strong> How to scan items, interpret alerts, update system</li>
      </ul>

      <h3>Enforcement and Accountability</h3>
      <ul>
        <li>Assign specific staff to daily expiration checks</li>
        <li>Include compliance in performance reviews</li>
        <li>Track waste by staff member to identify training needs</li>
        <li>Reward staff who catch near-expiration items proactively</li>
        <li>Make expiration tracking part of opening/closing checklists</li>
      </ul>

      <h2>Case Study: Commissary Kitchen Eliminates Expiration Waste</h2>
      <p>
        <strong>Challenge:</strong> A shared commissary kitchen serving 8 food trucks had chronic expiration waste due to unclear ownership, poor labeling, and forgotten items.
      </p>
      <p>
        <strong>Solutions:</strong>
      </p>
      <ul>
        <li>Implemented color-coded labeling by vendor</li>
        <li>Added computer vision scanning for automated tracking</li>
        <li>Set up text alerts 48 hours before expiration</li>
        <li>Created daily rotation protocol during morning prep</li>
        <li>Installed clear storage containers with front-facing labels</li>
      </ul>
      <p>
        <strong>Results:</strong>
      </p>
      <ul>
        <li>Expiration-related waste reduced by 87%</li>
        <li>Combined savings across all vendors: $3,800/month</li>
        <li>Zero health violations related to expired items</li>
        <li>Daily inventory time reduced from 45 minutes to 7 minutes</li>
        <li>Improved vendor satisfaction and retention</li>
      </ul>

      <RelatedArticles articles={relatedArticles} />

      <ArticleCTA />
    </ArticleLayout>
  );
}
