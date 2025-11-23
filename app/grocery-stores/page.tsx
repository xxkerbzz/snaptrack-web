import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import FeatureCard from "@/components/FeatureCard";
import {
  Store,
  Shield,
  FileCheck,
  TrendingDown,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grocery Store Inventory Management - Compliance & Waste Reduction",
  description:
    "SnapTrack for boutique grocery stores and specialty food shops. Automated FIFO compliance, expiration tracking, health inspection readiness. Reduce waste by 94%, maintain perfect audit trails.",
  keywords: [
    "grocery inventory management",
    "small grocery store software",
    "specialty food inventory",
    "grocery compliance software",
    "FIFO tracking grocery",
  ],
  openGraph: {
    title: "Grocery Store Inventory Software - Compliance Made Easy",
    description:
      "For boutique grocers and specialty food shops. Automated compliance, waste reduction, perfect audit trails.",
    url: "https://snaptrack.io/grocery-stores",
    images: [
      {
        url: "https://snaptrack.io/og-grocery.jpg",
        width: 1200,
        height: 630,
        alt: "SnapTrack for Grocery Stores",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptrack.io/grocery-stores",
  },
};

export default function GroceryStoresPage() {
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
        name: "Grocery Stores",
        item: "https://snaptrack.io/grocery-stores",
      },
    ],
  };

  const complianceFeatures = [
    {
      icon: Shield,
      title: "Automated FIFO Compliance",
      description:
        "Digital tracking ensures oldest items sell first. Automatic alerts when stock rotation is needed. Pass health inspections with confidence.",
    },
    {
      icon: FileCheck,
      title: "Audit-Ready Records",
      description:
        "Timestamped records of every scan, rotation, and disposal. Complete audit trail for health inspectors and internal reviews.",
    },
    {
      icon: TrendingDown,
      title: "Expiration Management",
      description:
        "Track expiration dates across your entire inventory. Get alerts before items expire, reduce shrink from spoilage by 94%.",
    },
    {
      icon: BarChart3,
      title: "Waste Analytics",
      description:
        "Track what's expiring, why, and how much it costs. Identify patterns and optimize ordering to minimize waste.",
    },
    {
      icon: Users,
      title: "Staff Accountability",
      description:
        "Multi-user accounts with role-based access. Track who rotated stock, who disposed of items, and when.",
    },
    {
      icon: Store,
      title: "Department Tracking",
      description:
        "Separate tracking for produce, dairy, deli, bakery, and more. Monitor waste and compliance by department.",
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
                <Store className="w-4 h-4 mr-2" />
                For Boutique Grocery & Specialty Food Shops
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Compliance Made{" "}
                <span className="text-primary-600">Effortless</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SnapTrack helps boutique grocers and specialty food shops
                maintain perfect FIFO compliance, reduce waste, and pass health
                inspections with digital audit trails.
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
                    100%
                  </div>
                  <div className="text-sm text-gray-600">FIFO compliance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    94%
                  </div>
                  <div className="text-sm text-gray-600">Shrink reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    Digital
                  </div>
                  <div className="text-sm text-gray-600">Audit trails</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built for Compliance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to maintain food safety standards and pass
                inspections
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Health Inspection Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <Shield className="w-16 h-16 text-primary-600 mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Health Inspection Ready
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    When health inspectors arrive, pull up complete records
                    instantly. Show timestamped proof of FIFO compliance, stock
                    rotation, and proper disposal procedures.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Complete audit trail of all inventory movements
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Timestamped records of stock rotation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Digital temperature and expiration logs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Staff accountability records
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/signup"
                    className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-96 flex items-center justify-center">
                    <FileCheck className="w-32 h-32 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pass Every Inspection with Confidence
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join specialty grocers using SnapTrack for perfect compliance
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
