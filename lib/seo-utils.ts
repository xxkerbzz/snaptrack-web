import { SEOProps, OrganizationSchema, WebsiteSchema } from "@/types/seo";

export const DEFAULT_SEO: SEOProps = {
  title: "SnapTrack - Food Truck Inventory Management & Waste Prevention",
  description:
    "Stop throwing money in the trash. SnapTrack uses computer vision to scan handwritten expiration dates, track inventory, and prevent food waste for food trucks and small kitchens. Guaranteed ROI in one week.",
  canonical: "https://snaptrack.io",
  ogImage: "https://snaptrack.io/og-image.jpg",
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
  url: "https://snaptrack.io",
  description:
    "Computer vision inventory scanner for food trucks and small kitchens that eliminates food waste by automatically reading handwritten expiration dates.",
  logo: "https://snaptrack.io/logo.png",
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
