import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import CaseStudyCard from "@/components/CaseStudyCard";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies - Real Food Waste Reduction Success Stories",
  description:
    "See how food trucks, restaurants, and kitchens reduced waste by 94% and saved $2,400+ monthly with SnapTrack. Real metrics, real results from inventory management customers.",
  keywords: [
    "inventory management success stories",
    "food waste reduction results",
    "food truck case studies",
    "restaurant inventory ROI",
  ],
  openGraph: {
    title: "SnapTrack Case Studies - 94% Waste Reduction Success Stories",
    description:
      "Real results from food businesses using SnapTrack. See how they saved thousands monthly.",
    url: "https://snaptrack.io/case-studies",
    images: [
      {
        url: "https://snaptrack.io/og-case-studies.jpg",
        width: 1200,
        height: 630,
        alt: "SnapTrack Case Studies",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptrack.io/case-studies",
  },
};

export default function CaseStudiesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://snaptrack.io",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://snaptrack.io/case-studies",
      },
    ],
  };

  const caseStudies = [
    {
      title: "Taco Fury Food Truck",
      industry: "Food Truck",
      description:
        "Austin-based Mexican street food truck eliminated 90% of waste in their first month, saving $3,200 monthly. Used alerts to plan daily specials around expiring ingredients.",
      metrics: [
        { label: "Monthly Savings", value: "$3,200" },
        { label: "Waste Reduction", value: "90%" },
        { label: "Time to ROI", value: "5 days" },
      ],
      href: "/case-studies/taco-fury",
      quote:
        "We were throwing away $400-500 worth of produce every week. SnapTrack cut our waste by 90% in the first month.",
      author: "Maria Rodriguez, Owner",
    },
    {
      title: "CloudKitchen Co.",
      industry: "Ghost Kitchen",
      description:
        "Multi-brand ghost kitchen managing 4 delivery-only concepts reduced waste across all brands by 85%. Predictive ordering optimized purchasing for each brand separately.",
      metrics: [
        { label: "Monthly Savings", value: "$4,800" },
        { label: "Waste Reduction", value: "85%" },
        { label: "Brands Managed", value: "4" },
      ],
      href: "/case-studies/cloudkitchen-co",
      quote:
        "Managing inventory for 4 brands was chaos. SnapTrack gave us visibility and control we never had before.",
      author: "James Chen, Operations Manager",
    },
    {
      title: "The Daily Grind Cafe",
      industry: "Small Restaurant",
      description:
        "Neighborhood cafe with limited storage space used SnapTrack to maintain perfect FIFO compliance, pass health inspections, and reduce dairy/produce waste by 95%.",
      metrics: [
        { label: "Monthly Savings", value: "$1,400" },
        { label: "Waste Reduction", value: "95%" },
        { label: "Time Saved", value: "10 hrs" },
      ],
      href: "/case-studies/daily-grind-cafe",
      quote:
        "Health inspections went from stressful to effortless. We can pull up complete records in seconds.",
      author: "Sarah Mitchell, Owner",
    },
    {
      title: "Artisan Market",
      industry: "Specialty Grocery",
      description:
        "Boutique grocery store tracking 2,000+ specialty items reduced shrink by 88%. Digital audit trails ensured FIFO compliance across all perishable departments.",
      metrics: [
        { label: "Annual Savings", value: "$52K" },
        { label: "Shrink Reduction", value: "88%" },
        { label: "Items Tracked", value: "2,000+" },
      ],
      href: "/case-studies/artisan-market",
      quote:
        "Our shrink rate dropped from 8% to under 1%. That's $52K back to our bottom line annually.",
      author: "Michael Torres, Manager",
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbSchema} />

      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Real Results
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Success Stories from{" "}
                <span className="text-primary-600">Real Businesses</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                See how food trucks, restaurants, and kitchens are using
                SnapTrack to eliminate waste, save thousands monthly, and
                streamline operations.
              </p>

              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    $2,400
                  </div>
                  <div className="text-sm text-gray-600">Avg. savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    94%
                  </div>
                  <div className="text-sm text-gray-600">Waste reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    7 days
                  </div>
                  <div className="text-sm text-gray-600">Avg. time to ROI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of food businesses saving thousands monthly with
              SnapTrack
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-lg font-semibold inline-flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold border border-gray-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
