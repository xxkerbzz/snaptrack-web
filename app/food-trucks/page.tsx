import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import FeatureCard from "@/components/FeatureCard";
import {
  Truck,
  DollarSign,
  TrendingDown,
  Clock,
  Smartphone,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food Truck Inventory Management - Stop Wasting Profits",
  description:
    "SnapTrack helps food trucks eliminate waste and save $2,400+ monthly. Scan handwritten expiration dates with your phone, get alerts before spoilage, and optimize mobile kitchen inventory. Built for life on the road.",
  keywords: [
    "food truck inventory management",
    "food truck software",
    "mobile food business inventory",
    "food truck waste prevention",
    "mobile kitchen management",
  ],
  openGraph: {
    title: "Food Truck Inventory Software - Save $2,400+ Monthly",
    description:
      "Purpose-built inventory management for food trucks. Eliminate waste, optimize ordering, track from your phone.",
    url: "https://snaptrack.io/food-trucks",
    images: [
      {
        url: "https://snaptrack.io/og-food-trucks.jpg",
        width: 1200,
        height: 630,
        alt: "SnapTrack for Food Trucks",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptrack.io/food-trucks",
  },
};

export default function FoodTrucksPage() {
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
        name: "Food Trucks",
        item: "https://snaptrack.io/food-trucks",
      },
    ],
  };

  const painPoints = [
    {
      problem: "Throwing away $300-500 worth of expired ingredients monthly",
      solution:
        "Get alerts 3 days before expiration. Average customers reduce waste by 94%.",
    },
    {
      problem: "Running out of popular items mid-service",
      solution:
        "Predictive ordering tells you exactly what to buy and when, based on your patterns.",
    },
    {
      problem: "Spending 30+ minutes counting inventory by hand",
      solution:
        "Scan your entire truck in under 30 seconds with phone camera. No clipboards, no manual counts.",
    },
    {
      problem: "No space for bulky inventory equipment or scanners",
      solution:
        "Just your smartphone. No hardware, no extra equipment cluttering your limited space.",
    },
    {
      problem: "Forgetting what's buried in the back of the cooler",
      solution:
        "FIFO tracking ensures oldest items get used first. Never discover expired food hiding in corners.",
    },
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Built for food truck life. Quick scans during prep, offline mode when you're on the road, instant sync when connected.",
    },
    {
      icon: Clock,
      title: "30-Second Daily Updates",
      description:
        "Scan new inventory in seconds during morning prep. That's it. SnapTrack monitors everything else automatically.",
    },
    {
      icon: AlertTriangle,
      title: "Expiration Alerts",
      description:
        "Push notifications 3 days before items expire. Plan specials or menu changes to use ingredients before they spoil.",
    },
    {
      icon: TrendingDown,
      title: "Waste Analytics",
      description:
        "Track exactly what you're throwing away and why. See waste costs in real dollars to make better buying decisions.",
    },
    {
      icon: BarChart3,
      title: "Predictive Ordering",
      description:
        "AI learns your sales patterns and suggests optimal reorder quantities. Stop guessing, start saving.",
    },
    {
      icon: Zap,
      title: "POS Integration",
      description:
        "Connect with Square, Clover, or Toast. Inventory updates automatically when you sell menu items.",
    },
  ];

  const stats = [
    { value: "$2,400", label: "Average monthly savings" },
    { value: "94%", label: "Waste reduction" },
    { value: "30 sec", label: "Daily time investment" },
    { value: "500+", label: "Food trucks using SnapTrack" },
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
                <Truck className="w-4 h-4 mr-2" />
                Built for Food Trucks
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Stop Throwing{" "}
                <span className="text-primary-600">Profits in the Trash</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                You didn't start a food truck to waste money on expired
                ingredients. SnapTrack helps mobile food businesses eliminate
                waste, optimize inventory, and save thousands monthly - all from
                your phone.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/signup"
                  className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-lg font-semibold flex items-center justify-center group shadow-lg shadow-primary-600/20"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold flex items-center justify-center border border-gray-300"
                >
                  <Truck className="mr-2 w-5 h-5" />
                  See Food Truck Demo
                </Link>
              </div>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points & Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Sound Familiar?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The biggest challenges facing food truck operators - and how
                SnapTrack solves them
              </p>
            </div>

            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-8 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex items-start mb-3">
                        <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                        <h3 className="text-xl font-bold text-gray-900">
                          {point.problem}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-1 bg-primary-50 rounded-lg p-6">
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-primary-900 mb-2">
                            SnapTrack Solution
                          </h4>
                          <p className="text-primary-800">{point.solution}</p>
                        </div>
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
                Built for Life on the Road
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Features designed specifically for the unique challenges of
                mobile food businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white">
                <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                  Case Study
                </div>
                <h2 className="text-3xl font-bold mb-2">
                  Taco Fury Food Truck
                </h2>
                <p className="text-primary-50 text-lg">
                  Austin, TX • Mexican Street Food • 2 trucks
                </p>
              </div>

              <div className="p-8">
                <blockquote className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                  "We were throwing away $400-500 worth of produce and dairy
                  every week. With SnapTrack, we cut waste by 90% in the first
                  month. The alerts helped us plan daily specials around
                  expiring ingredients, which actually increased our profit
                  margins. Best $99/month we've ever spent."
                </blockquote>
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div className="font-bold text-gray-900">
                      Maria Rodriguez
                    </div>
                    <div className="text-sm text-gray-600">
                      Owner, Taco Fury
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      $3,200
                    </div>
                    <div className="text-sm text-gray-600">
                      Monthly savings
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      90%
                    </div>
                    <div className="text-sm text-gray-600">
                      Waste reduction
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      5 days
                    </div>
                    <div className="text-sm text-gray-600">Time to ROI</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Breakdown */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Your Numbers Will Look Different
              </h2>
              <p className="text-xl text-gray-600">
                But here's what the average food truck saves with SnapTrack
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Prevented Waste
                    </h3>
                    <p className="text-sm text-gray-600">
                      Items saved from expiring
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      +$1,800
                    </div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Optimized Ordering
                    </h3>
                    <p className="text-sm text-gray-600">
                      Reduced over-purchasing
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      +$600
                    </div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                </div>

                <div className="flex justify-between items-center pb-6 border-b border-gray-200">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Time Saved
                    </h3>
                    <p className="text-sm text-gray-600">
                      15 hours monthly @ $25/hr
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      +$375
                    </div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl">
                      Total Monthly Savings
                    </h3>
                    <p className="text-sm text-gray-600">
                      Average across 500+ food trucks
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-primary-600">
                      $2,775
                    </div>
                    <div className="text-sm text-gray-600">per month</div>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-lg p-6 mt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-primary-900 mb-1">
                        SnapTrack Pro Cost
                      </div>
                      <div className="text-sm text-primary-700">
                        Full feature access
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-900">
                        -$99
                      </div>
                      <div className="text-sm text-primary-700">per month</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-white text-center">
                  <div className="text-sm font-semibold uppercase tracking-wide mb-2">
                    Net Monthly Profit Increase
                  </div>
                  <div className="text-5xl font-bold mb-2">$2,676</div>
                  <div className="text-primary-50">
                    That's a 2,700% ROI on your investment
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/pricing"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                See All Pricing Plans
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Food Trucks Choose SnapTrack */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Food Trucks Choose SnapTrack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Purpose-built for the unique needs of mobile food businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  No Extra Equipment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Just your phone. No barcode scanners, no tablets, no hardware
                  cluttering your limited space. Perfect for tight food truck
                  quarters.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Works Offline
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Scan inventory even without cell service. Everything syncs
                  automatically when you reconnect. Perfect for events with poor
                  coverage.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Multi-Truck Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Growing beyond one truck? Pro plan supports up to 3
                  locations. Track inventory across your entire fleet from one
                  dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join 500+ Food Trucks Saving Money Daily
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your 14-day free trial. No credit card required. See ROI in
              one week or your money back.
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
                href="/case-studies"
                className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold border border-gray-300"
              >
                Read More Success Stories
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
