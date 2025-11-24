import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Get base URL - prioritize explicit config, then Vercel auto URL, then default
  const baseUrl = 
    process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    'https://snaptrack-web.vercel.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap/sitemap.xml`,
  }
}

