import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import FeatureCard from "@/components/FeatureCard";
import {
  ChefHat,
  TrendingDown,
  Users,
  Smartphone,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Package,
  Clock,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Kitchen Inventory System - Ghost Kitchen & Catering",
  description:
    "SnapTrack inventory management for ghost kitchens, catering businesses, and small restaurants. Scan expiration dates with your phone, reduce waste by 94%, optimize ordering. Perfect for delivery-only kitchens.",
  keywords: [
    "small kitchen inventory system",
    "ghost kitchen management",
    "catering inventory software",
    "delivery kitchen inventory",
    "small restaurant software",
  ],
  openGraph: {
    title: "Small Kitchen Inventory Management - Ghost Kitchens & Catering",
    description:
      "Purpose-built for ghost kitchens, catering, and small restaurants. Eliminate waste, optimize inventory.",
    url: "https://snaptrack.io/small-kitchens",
    images: [
      {
        url: "https://snaptrack.io/og-small-kitchens.jpg",
        width: 1200,
        height: 630,
        alt: "SnapTrack for Small Kitchens",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptrack.io/small-kitchens",
  },
};

export default function SmallKitchensPage() {
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
        name: "Small Kitchens",
        item: "https://snaptrack.io/small-kitchens",
      },
    ],
  };

  const useCases = [
    {
      icon: ChefHat,
      title: "Ghost Kitchens",
      description:
        "Multiple brands, one kitchen. Track inventory by brand, optimize ordering for delivery-only operations, and prevent cross-contamination with digital tracking.",
      benefits: [
        "Multi-brand inventory separation",
        "Delivery-optimized ordering predictions",
        "Real-time stock alerts for popular items",
      ],
    },
    {
      icon: Users,
      title: "Catering Operations",
      description:
        "Plan events weeks in advance with confidence. Track what you have, what you need, and when to buy it for maximum freshness.",
      benefits: [
        "Event-based inventory planning",
        "Bulk order optimization",
        "Freshness tracking for event dates",
      ],
    },
    {
      icon: Package,
      title: "Small Restaurants",
      description:
        "Limited storage means every inch counts. Eliminate waste, optimize ordering, and ensure FIFO compliance without manual tracking.",
      benefits: [
        "FIFO compliance automation",
        "Space-efficient inventory tracking",
        "Supplier order optimization",
      ],
    },
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Quick Scanning",
      description:
        "Scan entire shelves in seconds. No interruption to prep workflow. AI reads handwritten and printed labels instantly.",
    },
    {
      icon: TrendingDown,
      title: "Waste Prevention",
      description:
        "Get alerts before items expire. Plan menu changes or specials to use ingredients approaching their dates.",
    },
    {
      icon: BarChart3,
      title: "Multi-Location Support",
      description:
        "Managing multiple kitchen locations? Track inventory across all sites from one dashboard. Compare waste metrics between locations.",
    },
    {
      icon: Clock,
      title: "Predictive Ordering",
      description:
        "AI learns your usage patterns and predicts optimal reorder timing. Never run out during peak service or over-order.",
    },
    {
      icon: DollarSign,
      title: "Cost Tracking",
      description:
        "Track cost per dish, inventory value, and waste costs. See exactly where your money goes and identify savings opportunities.",
    },
    {
      icon: Users,
      title: "Team Management",
      description:
        "Multiple staff accounts with role-based permissions. Track who scanned what for accountability and training.",
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbSchema} />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
                <ChefHat className="w-4 h-4 mr-2" />
                For Ghost Kitchens, Catering & Small Restaurants
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Maximize Every Inch of{" "}
                <span className="text-primary-600">Kitchen Space</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Small kitchens mean tight margins. SnapTrack helps ghost
                kitchens, catering businesses, and small restaurants eliminate
                waste, optimize storage, and save thousands monthly with phone
                camera inventory tracking.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/signup"
                  className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-lg font-semibold flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold flex items-center justify-center border border-gray-300"
                >
                  Watch Demo
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    $1,800
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
                    30 sec
                  </div>
                  <div className="text-sm text-gray-600">Daily scanning</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built for Your Operation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you're running a ghost kitchen, catering business, or
                small restaurant, SnapTrack adapts to your workflow
              </p>
            </div>

            <div className="space-y-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center">
                        <useCase.icon className="w-8 h-8 text-primary-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {useCase.description}
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        {useCase.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-start bg-primary-50 rounded-lg p-4"
                          >
                            <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-primary-900">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Everything You Need
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful features designed for efficiency in tight spaces
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Start Saving Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of small kitchens saving thousands monthly
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-lg font-semibold"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
