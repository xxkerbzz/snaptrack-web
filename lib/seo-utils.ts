import { SEOProps, OrganizationSchema, WebsiteSchema } from "@/types/seo";

// Helper function to get base URL (works in both server and client)
export const getSiteUrl = () => {
  // Server-side: use environment variable or Vercel's automatic URL
  if (typeof window === 'undefined') {
    // Check for explicit site URL first
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      return process.env.NEXT_PUBLIC_SITE_URL;
    }
    // Use Vercel's automatic URL if available (includes protocol)
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    // Default to Vercel deployment domain
    return 'https://snaptrack-web.vercel.app';
  }
  // Client-side: use current origin
  return window.location.origin;
};

// Default base URL for static initialization
const DEFAULT_BASE_URL = 'https://snaptrack-web.vercel.app';

export const DEFAULT_SEO: SEOProps = {
  title: "SnapTrack - Food Truck Inventory Management & Waste Prevention",
  description:
    "Stop throwing money in the trash. SnapTrack uses computer vision to scan handwritten expiration dates, track inventory, and prevent food waste for food trucks and small kitchens. Guaranteed ROI in one week.",
  canonical: DEFAULT_BASE_URL,
  ogImage: `${DEFAULT_BASE_URL}/og-image.jpg`,
  ogType: "website",
  twitterCard: "summary_large_image",
  keywords: [
    "food truck inventory management",
    "food waste prevention",
    "expiration date tracking",
    "restaurant inventory scanner",
    "small kitchen management",
    "food safety compliance",
    "inventory tracking app",
    "handwritten label scanner",
  ],
};

export const SITE_CONFIG = {
  name: "SnapTrack",
  get url() {
    return getSiteUrl();
  },
  description:
    "Computer vision inventory scanner for food trucks and small kitchens that eliminates food waste by automatically reading handwritten expiration dates.",
  get logo() {
    return `${getSiteUrl()}/logo.png`;
  },
  email: "support@snaptrack.io",
};

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    description: SITE_CONFIG.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE_CONFIG.email,
    },
    sameAs: [
      "https://twitter.com/snaptrack",
      "https://linkedin.com/company/snaptrack",
      "https://facebook.com/snaptrack",
    ],
  };
}

export function generateWebsiteSchema(): WebsiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function mergeSEO(customSEO?: Partial<SEOProps>): SEOProps {
  return {
    ...DEFAULT_SEO,
    ...customSEO,
  };
}
