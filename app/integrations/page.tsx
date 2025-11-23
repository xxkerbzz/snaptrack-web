import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import IntegrationCard from "@/components/IntegrationCard";
import { Zap, ArrowRight, Code } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrations - POS & Software Compatibility",
  description:
    "SnapTrack integrates with Square, Toast, Clover, QuickBooks, and 50+ POS and accounting systems. Automatic inventory sync when you make sales. API available for custom integrations.",
  keywords: [
    "inventory software integrations",
    "POS integration",
    "restaurant software compatibility",
    "Square inventory integration",
    "Toast POS integration",
  ],
  openGraph: {
    title: "SnapTrack Integrations - Connect Your POS & Accounting",
    description:
      "Seamlessly integrate with Square, Toast, Clover, and 50+ POS systems. Auto-sync inventory.",
    url: "https://snaptrack.io/integrations",
    images: [
      {
        url: "https://snaptrack.io/og-integrations.jpg",
        width: 1200,
        height: 630,
        alt: "SnapTrack Integrations",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptrack.io/integrations",
  },
};

export default function IntegrationsPage() {
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
        name: "Integrations",
        item: "https://snaptrack.io/integrations",
      },
    ],
  };

  const posIntegrations = [
    {
      name: "Square",
      description:
        "Auto-sync inventory when items are sold. Real-time updates for accurate stock levels.",
      category: "POS System",
    },
    {
      name: "Toast",
      description:
        "Full integration with Toast POS. Menu items automatically update inventory quantities.",
      category: "POS System",
    },
    {
      name: "Clover",
      description:
        "Connect Clover POS to track sales and inventory in one place. Seamless data sync.",
      category: "POS System",
    },
    {
      name: "Lightspeed",
      description:
        "Sync inventory across Lightspeed and SnapTrack. Perfect for multi-location operations.",
      category: "POS System",
      comingSoon: true,
    },
  ];

  const accountingIntegrations = [
    {
      name: "QuickBooks",
      description:
        "Sync inventory costs and waste data directly to QuickBooks for accurate financial reporting.",
      category: "Accounting",
    },
    {
      name: "Xero",
      description:
        "Automatic inventory value tracking and COGS calculations synced to Xero.",
      category: "Accounting",
      comingSoon: true,
    },
  ];

  const orderingIntegrations = [
    {
      name: "DoorDash",
      description:
        "Track inventory sold through DoorDash orders. Auto-update stock levels.",
      category: "Delivery Platform",
      comingSoon: true,
    },
    {
      name: "Uber Eats",
      description:
        "Monitor inventory consumption from Uber Eats orders in real-time.",
      category: "Delivery Platform",
      comingSoon: true,
    },
    {
      name: "Grubhub",
      description:
        "Sync Grubhub orders with inventory tracking for complete visibility.",
      category: "Delivery Platform",
      comingSoon: true,
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
                <Zap className="w-4 h-4 mr-2" />
                50+ Integrations
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Connect Your{" "}
                <span className="text-primary-600">Existing Tools</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SnapTrack integrates seamlessly with your POS, accounting
                software, and ordering platforms. Inventory updates
                automatically when you make sales.
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
                  href="/docs"
                  className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold flex items-center justify-center border border-gray-300"
                >
                  <Code className="mr-2 w-5 h-5" />
                  API Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* POS Integrations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                POS Systems
              </h2>
              <p className="text-lg text-gray-600">
                Automatic inventory sync with leading point-of-sale systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posIntegrations.map((integration, index) => (
                <IntegrationCard key={index} {...integration} />
              ))}
            </div>
          </div>
        </section>

        {/* Accounting Integrations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Accounting Software
              </h2>
              <p className="text-lg text-gray-600">
                Keep your books accurate with automated inventory tracking
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accountingIntegrations.map((integration, index) => (
                <IntegrationCard key={index} {...integration} />
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Platforms */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Delivery Platforms
              </h2>
              <p className="text-lg text-gray-600">
                Track inventory consumed through third-party delivery orders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orderingIntegrations.map((integration, index) => (
                <IntegrationCard key={index} {...integration} />
              ))}
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <Code className="w-16 h-16 text-primary-600 mb-6" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Custom Integrations with Our API
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Need a custom integration? Our REST API gives you full
                    access to inventory data, scanning capabilities, and
                    analytics. Build custom workflows that fit your exact needs.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">•</span>
                      Complete REST API documentation
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">•</span>
                      Webhooks for real-time events
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">•</span>
                      Rate limits suitable for enterprise
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-primary-600 mr-2">•</span>
                      Dedicated developer support
                    </li>
                  </ul>
                  <div className="flex gap-4">
                    <Link
                      href="/docs"
                      className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                    >
                      View API Docs
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-gray-100 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm">
                    <div className="text-gray-500">// Example API call</div>
                    <div className="mt-2">
                      POST /api/v1/inventory/scan
                    </div>
                    <div className="text-gray-500 mt-4">
                      {'{'} <br />
                      &nbsp;&nbsp;"image": "base64...", <br />
                      &nbsp;&nbsp;"location_id": "loc_123" <br />
                      {'}'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Need a Specific Integration?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us know what tools you use and we'll prioritize building that
              integration
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-lg font-semibold"
            >
              Request Integration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
