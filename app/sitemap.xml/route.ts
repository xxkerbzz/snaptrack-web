import { NextRequest, NextResponse } from 'next/server'

// Define all sitemap paths (without domain)
const sitemapPaths = [
  { path: '/', lastmod: '2025-11-23', changefreq: 'daily', priority: '1.0' },
  { path: '/product', lastmod: '2025-11-23', changefreq: 'weekly', priority: '0.9' },
  { path: '/pricing', lastmod: '2025-11-23', changefreq: 'weekly', priority: '0.9' },
  { path: '/how-it-works', lastmod: '2025-11-23', changefreq: 'monthly', priority: '0.8' },
  { path: '/food-trucks', lastmod: '2025-11-23', changefreq: 'monthly', priority: '0.9' },
  { path: '/small-kitchens', lastmod: '2025-11-23', changefreq: 'monthly', priority: '0.8' },
  { path: '/grocery-stores', lastmod: '2025-11-23', changefreq: 'monthly', priority: '0.8' },
  { path: '/resources', lastmod: '2025-11-23', changefreq: 'weekly', priority: '0.8' },
  { path: '/case-studies', lastmod: '2025-11-23', changefreq: 'monthly', priority: '0.8' },
  { path: '/about', lastmod: '2025-11-23', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', lastmod: '2025-11-23', changefreq: 'monthly', priority: '0.7' },
  { path: '/integrations', lastmod: '2025-11-23', changefreq: 'monthly', priority: '0.7' },
  // Pillar pages
  { path: '/resources/food-waste-prevention', lastmod: '2025-01-15', changefreq: 'weekly', priority: '0.8' },
  { path: '/resources/food-truck-operations', lastmod: '2025-01-15', changefreq: 'weekly', priority: '0.8' },
  { path: '/resources/restaurant-inventory-management-software', lastmod: '2025-01-15', changefreq: 'weekly', priority: '0.8' },
  { path: '/resources/restaurant-cost-control', lastmod: '2025-01-15', changefreq: 'weekly', priority: '0.8' },
  { path: '/resources/food-safety-compliance', lastmod: '2025-01-15', changefreq: 'weekly', priority: '0.8' },
  { path: '/resources/predictive-ordering', lastmod: '2025-01-15', changefreq: 'weekly', priority: '0.8' },
  // Supporting pages
  { path: '/resources/restaurant-food-waste-statistics', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/food-truck-waste-reduction', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/expiration-date-tracking', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/tools/food-waste-calculator', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/food-truck-inventory-management', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/food-truck-profit-margins', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/best-food-truck-software', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/food-truck-commissary-storage', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/mobile-inventory-management', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/computer-vision-inventory-systems', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/small-restaurant-inventory-management', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/best-inventory-apps-food-trucks', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/food-cost-percentage', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/restaurant-cash-flow-management', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/food-truck-financial-management', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/food-expiration-date-regulations', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/food-safety-record-keeping', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/food-truck-health-permits', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/restaurant-analytics-metrics', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/ai-restaurant-management', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  { path: '/resources/inventory-velocity', lastmod: '2025-01-15', changefreq: 'monthly', priority: '0.7' },
  // Blog
  { path: '/blog', lastmod: '2025-01-15', changefreq: 'daily', priority: '0.7' },
  { path: '/blog/hidden-causes-food-waste-food-trucks', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/real-cost-food-waste', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/manual-vs-automated-inventory', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/ai-food-waste-prevention', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/food-truck-startup-costs', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/food-truck-technology-tools', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/manage-food-truck-multi-event-inventory', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/food-truck-food-safety-checklist', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/why-inventory-software-fails-food-trucks', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/barcode-vs-computer-vision-inventory', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/gpt4-vision-handwritten-labels', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/free-vs-paid-inventory-software', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/hidden-costs-food-waste-profit-loss', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/inventory-software-roi', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/inventory-mismanagement-destroys-margins', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/automated-inventory-food-safety-audits', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/food-safety-violations-expiration-dates', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/digital-food-safety-logs', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/machine-learning-predicts-inventory', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/data-driven-ordering-vs-gut-instinct', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
  { path: '/blog/inventory-patterns-over-ordering', lastmod: '2025-01-14', changefreq: 'monthly', priority: '0.6' },
]

export async function GET(request: NextRequest) {
  // Get the base URL from the request host
  // This ensures the sitemap URLs match the domain being accessed
  const host = request.headers.get('host') || 'snaptrack.io'
  const protocol = request.headers.get('x-forwarded-proto') || 'https'
  const baseUrl = `${protocol}://${host}`

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sitemapPaths
  .map(
    ({ path, lastmod, changefreq, priority }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  })
}

