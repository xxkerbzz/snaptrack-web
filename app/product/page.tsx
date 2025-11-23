import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import FeatureCard from "@/components/FeatureCard";
import {
  Camera,
  Calendar,
  TrendingDown,
  Bell,
  BarChart3,
  Smartphone,
  Zap,
  Shield,
  DollarSign,
  Clock,
  CheckCircle,
  RefreshCw,
  Package,
  AlertTriangle,
  Users,
  Globe,
  ArrowRight,
  Play,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Features - AI Inventory Management Scanner",
  description:
    "Discover how SnapTrack's computer vision technology scans handwritten expiration dates, predicts reorder timing, and eliminates food waste. Features include GPT-4 vision scanning, automated alerts, and ROI tracking.",
  keywords: [
    "inventory management software features",
    "food waste prevention technology",
    "expiration date scanner",
    "GPT-4 vision inventory",
    "automated inventory tracking",
    "restaurant inventory features",
  ],
  openGraph: {
    title: "SnapTrack Product Features - AI Inventory Scanner",
    description:
      "Computer vision inventory scanner with handwritten label reading, automated alerts, and predictive ordering for food trucks and kitchens.",
    url: "https://snaptrack.io/product",
    images: [
      {
        url: "https://snaptrack.io/og-product.jpg",
        width: 1200,
        height: 630,
        alt: "SnapTrack Product Features",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptrack.io/product",
  },
};

export default function ProductPage() {
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
        name: "Product",
        item: "https://snaptrack.io/product",
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SnapTrack Inventory Management",
    description:
      "Computer vision inventory scanner for food trucks and small kitchens",
    brand: {
      "@type": "Brand",
      name: "SnapTrack",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "149",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };

  const coreFeatures = [
    {
      icon: Camera,
      title: "Smart Vision Scanning",
      description:
        "Point your phone camera at any handwritten or printed label. Our GPT-4 powered vision reads expiration dates, quantities, and product names instantly with 99% accuracy.",
    },
    {
      icon: Calendar,
      title: "Expiration Tracking",
      description:
        "Automatically track every item's expiration date. Get color-coded dashboards showing what expires soon, today, or next week - never miss a spoilage deadline again.",
    },
    {
      icon: Bell,
      title: "Intelligent Alerts",
      description:
        "Receive push notifications 3 days before items expire. Alerts adapt to your usage patterns and suggest alternative menu items to use up expiring ingredients.",
    },
    {
      icon: TrendingDown,
      title: "Predictive Ordering",
      description:
        "AI analyzes your consumption patterns and predicts optimal reorder timing. Know exactly what to buy, when to buy it, and how much - eliminating over-ordering.",
    },
    {
      icon: BarChart3,
      title: "Waste Analytics",
      description:
        "Real-time dashboard showing waste costs, savings trends, and ROI metrics. Track which items spoil most often and adjust ordering patterns accordingly.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Built for busy food truck operators. Scan inventory during prep in under 30 seconds. Works offline and syncs when you're back online.",
    },
  ];

  const advancedFeatures = [
    {
      icon: RefreshCw,
      title: "Auto-Sync Integrations",
      description:
        "Connect with Square, Toast, Clover, and 50+ POS systems. Inventory automatically updates when you sell menu items.",
    },
    {
      icon: Package,
      title: "Batch Scanning",
      description:
        "Scan entire shelves in one go. Multi-item detection processes up to 10 products per photo for lightning-fast inventory counts.",
    },
    {
      icon: AlertTriangle,
      title: "Compliance Tracking",
      description:
        "Automated FIFO alerts, temperature logs, and digital audit trails. Pass health inspections with timestamped records.",
    },
    {
      icon: DollarSign,
      title: "Cost Analysis",
      description:
        "Track cost per unit, total inventory value, and waste costs. See exactly where your money goes and identify savings opportunities.",
    },
    {
      icon: Users,
      title: "Team Management",
      description:
        "Multiple user accounts with role-based permissions. Track who scanned what and when for accountability.",
    },
    {
      icon: Globe,
      title: "Multi-Location Support",
      description:
        "Manage inventory across multiple trucks or kitchen locations from one dashboard. Compare waste metrics between locations.",
    },
  ];

  const technicalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Scan and process in under 2 seconds",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "256-bit encryption for all data",
    },
    {
      icon: Clock,
      title: "Works Offline",
      description: "Sync automatically when connected",
    },
    {
      icon: CheckCircle,
      title: "99% Accuracy",
      description: "Even with messy handwriting",
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={productSchema} />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Built for Food Professionals
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Every Feature Built to{" "}
                <span className="text-primary-600">Eliminate Waste</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From computer vision scanning to predictive ordering, every
                feature in SnapTrack is designed to save you money and reduce
                food waste. No bloat, no complexity - just the tools you need.
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
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Core Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The essential tools you need to track inventory, prevent waste,
                and save thousands monthly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Detailed */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three simple steps to eliminate waste and optimize inventory
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Scan Your Inventory
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Open the app and point your camera at shelves, boxes, or
                    individual items. Our GPT-4 vision AI reads handwritten
                    dates, product names, and quantities instantly - even messy
                    handwriting or awkward angles.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      Batch scan up to 10 items per photo
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      Works with handwritten labels, printed stickers, and
                      original packaging
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      Takes under 30 seconds for full walk-in inventory
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <Camera className="w-24 h-24 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Get Intelligent Alerts
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    SnapTrack monitors expiration dates 24/7 and sends smart
                    alerts before items spoil. You'll get notifications 3 days
                    in advance with suggestions on how to use expiring
                    ingredients.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      Push notifications to your phone and email
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      Menu suggestions to use expiring ingredients
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      Color-coded dashboard: green, yellow, red zones
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <Bell className="w-24 h-24 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-full font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Optimize Ordering
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    Our AI analyzes your consumption patterns and predicts
                    optimal reorder timing. You'll know exactly what to buy,
                    when, and how much - eliminating both waste and stockouts.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      Predictive reorder recommendations based on usage
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      Seasonal demand adjustments
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      One-click ordering from integrated suppliers
                    </li>
                  </ul>
                </div>
                <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <TrendingDown className="w-24 h-24 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Power features for teams ready to scale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technical Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built on cutting-edge technology for reliability and speed
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center border border-gray-200"
                >
                  <feature.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-4">
                Integrates With Your Existing Tools
              </h2>
              <p className="text-xl text-primary-50 mb-8 max-w-3xl mx-auto">
                Connect with Square, Toast, Clover, QuickBooks, and 50+ POS and
                accounting systems. Inventory updates automatically when you
                make sales.
              </p>
              <Link
                href="/integrations"
                className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold"
              >
                View All Integrations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Eliminate Food Waste?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join 500+ food trucks saving an average of $2,400 per month with
              SnapTrack
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-lg font-semibold"
              >
                Start Free Trial
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold border border-gray-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
