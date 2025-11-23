export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  noindex?: boolean;
  nofollow?: boolean;
  keywords?: string[];
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint?: {
    "@type": "ContactPoint";
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

export interface WebsiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

export interface SoftwareApplicationSchema {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication";
  name: string;
  applicationCategory: string;
  operatingSystem: string;
  description: string;
  offers?: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
  };
}
