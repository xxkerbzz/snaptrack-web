import { SEOProps } from "@/types/seo";
import { Metadata } from "next";

export function generateMetadata(seo: SEOProps): Metadata {
  const robots = [];
  if (seo.noindex) robots.push("noindex");
  if (seo.nofollow) robots.push("nofollow");

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    robots: robots.length > 0 ? robots.join(", ") : undefined,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: "SnapTrack",
      images: seo.ogImage
        ? [
            {
              url: seo.ogImage,
              width: 1200,
              height: 630,
              alt: seo.title,
            },
          ]
        : [],
      locale: "en_US",
      type: (seo.ogType as "website") || "website",
    },
    twitter: {
      card: seo.twitterCard || "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
    },
    alternates: {
      canonical: seo.canonical,
    },
  };
}
