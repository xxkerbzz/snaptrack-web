import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Get base URL - prioritize explicit config, then Vercel auto URL, then default
  const baseUrl = 
    process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    'https://snaptrack-web.vercel.app'

  // Define all sitemap entries with proper metadata
  const routes: MetadataRoute.Sitemap = [
    // Homepage
    {
      url: `${baseUrl}/`,
      lastModified: '2025-01-23',
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Core product pages
    {
      url: `${baseUrl}/product`,
      lastModified: '2025-01-23',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: '2025-01-23',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: '2025-01-23',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Industry pages
    {
      url: `${baseUrl}/food-trucks`,
      lastModified: '2025-01-23',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/small-kitchens`,
      lastModified: '2025-01-23',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/grocery-stores`,
      lastModified: '2025-01-23',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Content & resources
    {
      url: `${baseUrl}/resources`,
      lastModified: '2025-01-23',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: '2025-01-23',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Company pages
    {
      url: `${baseUrl}/about`,
      lastModified: '2025-01-23',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2025-01-23',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/integrations`,
      lastModified: '2025-01-23',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Pillar pages (Priority: 0.8)
    {
      url: `${baseUrl}/resources/food-waste-prevention`,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/food-truck-operations`,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/restaurant-inventory-management-software`,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/restaurant-cost-control`,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/food-safety-compliance`,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/predictive-ordering`,
      lastModified: '2025-01-15',
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Supporting resource pages (Priority: 0.7)
    {
      url: `${baseUrl}/resources/restaurant-food-waste-statistics`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/food-truck-waste-reduction`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/expiration-date-tracking`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/food-truck-inventory-management`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/food-truck-profit-margins`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/best-food-truck-software`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/food-truck-commissary-storage`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/mobile-inventory-management`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/computer-vision-inventory-systems`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/small-restaurant-inventory-management`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/best-inventory-apps-food-trucks`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/food-cost-percentage`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/restaurant-cash-flow-management`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/food-truck-financial-management`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/food-expiration-date-regulations`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/food-safety-record-keeping`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/food-truck-health-permits`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/restaurant-analytics-metrics`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/ai-restaurant-management`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/inventory-velocity`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Tools
    {
      url: `${baseUrl}/tools/food-waste-calculator`,
      lastModified: '2025-01-15',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: '2025-01-15',
      changeFrequency: 'daily',
      priority: 0.7,
    },
    // Blog posts (Priority: 0.6)
    {
      url: `${baseUrl}/blog/hidden-causes-food-waste-food-trucks`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/real-cost-food-waste`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/manual-vs-automated-inventory`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/ai-food-waste-prevention`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/food-truck-startup-costs`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/food-truck-technology-tools`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/manage-food-truck-multi-event-inventory`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/food-truck-food-safety-checklist`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/why-inventory-software-fails-food-trucks`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/barcode-vs-computer-vision-inventory`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/gpt4-vision-handwritten-labels`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/free-vs-paid-inventory-software`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/hidden-costs-food-waste-profit-loss`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/inventory-software-roi`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/inventory-mismanagement-destroys-margins`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/automated-inventory-food-safety-audits`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/food-safety-violations-expiration-dates`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/digital-food-safety-logs`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/machine-learning-predicts-inventory`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/data-driven-ordering-vs-gut-instinct`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/inventory-patterns-over-ordering`,
      lastModified: '2025-01-14',
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  return routes
}

