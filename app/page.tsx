import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ROICalculator from "@/components/ROICalculator";
import Industries from "@/components/Industries";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo-utils";

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SnapTrack",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web",
    description:
      "Computer vision inventory scanner for food trucks and small kitchens that eliminates food waste by automatically reading handwritten expiration dates and predicting optimal reorder timing.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "149",
      offerCount: "3",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={softwareApplicationSchema} />

      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Testimonials />
        <ROICalculator />
        <Industries />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
