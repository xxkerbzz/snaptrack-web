import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import {
  BookOpen,
  FileText,
  TrendingUp,
  Truck,
  Shield,
  DollarSign,
  Package,
  BarChart3,
  Calculator,
  ArrowRight,
  Mail,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources Hub - Food Waste & Inventory Management Guides | SnapTrack",
  description:
    "Expert guides on food waste reduction, inventory management best practices, restaurant operations tips. Free ROI calculator, case studies, and educational content for food businesses.",
  keywords: [
    "food waste resources",
    "inventory management guides",
    "restaurant operations tips",
    "food truck best practices",
    "kitchen management resources",
  ],
  openGraph: {
    title: "SnapTrack Resources - Food Waste Prevention Guides",
    description:
      "Free guides, calculators, and educational content for reducing food waste and optimizing inventory.",
    url: "https://snaptrack.io/resources",
    type: "website",
  },
  alternates: {
    canonical: "https://snaptrack.io/resources",
  },
};

export default function ResourcesPage() {
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
        name: "Resources",
        item: "https://snaptrack.io/resources",
      },
    ],
  };

  const topicalSilos = [
    {
      icon: TrendingUp,
      title: "Food Waste Prevention",
      description: "Strategies to eliminate food waste and save money",
      pillarPage: {
        title: "Food Waste Prevention: Complete Guide",
        href: "/resources/food-waste-prevention",
      },
      pages: [
        { title: "Restaurant Food Waste Statistics", href: "/resources/restaurant-food-waste-statistics" },
        { title: "Food Truck Waste Reduction", href: "/resources/food-truck-waste-reduction" },
        { title: "Expiration Date Tracking", href: "/resources/expiration-date-tracking" },
        { title: "Food Waste Calculator", href: "/tools/food-waste-calculator" },
      ],
      blogs: [
        { title: "Hidden Causes of Food Waste in Food Trucks", href: "/blog/hidden-causes-food-waste-food-trucks" },
        { title: "The Real Cost of Food Waste", href: "/blog/real-cost-food-waste" },
        { title: "Manual vs Automated Inventory", href: "/blog/manual-vs-automated-inventory" },
        { title: "AI Food Waste Prevention", href: "/blog/ai-food-waste-prevention" },
      ],
    },
    {
      icon: Truck,
      title: "Food Truck Operations",
      description: "Complete guides for mobile food business success",
      pillarPage: {
        title: "Food Truck Operations: Complete Guide",
        href: "/resources/food-truck-operations",
      },
      pages: [
        { title: "Food Truck Inventory Management", href: "/resources/food-truck-inventory-management" },
        { title: "Food Truck Profit Margins", href: "/resources/food-truck-profit-margins" },
        { title: "Best Food Truck Software", href: "/resources/best-food-truck-software" },
        { title: "Commissary Storage Guide", href: "/resources/food-truck-commissary-storage" },
      ],
      blogs: [
        { title: "Food Truck Startup Costs", href: "/blog/food-truck-startup-costs" },
        { title: "Essential Technology Tools", href: "/blog/food-truck-technology-tools" },
        { title: "Multi-Event Inventory Management", href: "/blog/manage-food-truck-multi-event-inventory" },
        { title: "Food Safety Checklist", href: "/blog/food-truck-food-safety-checklist" },
      ],
    },
    {
      icon: Package,
      title: "Inventory Management Systems",
      description: "Technology solutions for inventory tracking",
      pillarPage: {
        title: "Restaurant Inventory Management Software",
        href: "/resources/restaurant-inventory-management-software",
      },
      pages: [
        { title: "Mobile Inventory Management", href: "/resources/mobile-inventory-management" },
        { title: "Computer Vision Inventory Systems", href: "/resources/computer-vision-inventory-systems" },
        { title: "Small Restaurant Inventory", href: "/resources/small-restaurant-inventory-management" },
        { title: "Best Inventory Apps for Food Trucks", href: "/resources/best-inventory-apps-food-trucks" },
      ],
      blogs: [
        { title: "Why Inventory Software Fails", href: "/blog/why-inventory-software-fails-food-trucks" },
        { title: "Barcode vs Computer Vision", href: "/blog/barcode-vs-computer-vision-inventory" },
        { title: "GPT-4 Vision for Labels", href: "/blog/gpt4-vision-handwritten-labels" },
        { title: "Free vs Paid Software", href: "/blog/free-vs-paid-inventory-software" },
      ],
    },
    {
      icon: DollarSign,
      title: "Restaurant Cost Control",
      description: "Financial management and profitability strategies",
      pillarPage: {
        title: "Restaurant Cost Control Guide",
        href: "/resources/restaurant-cost-control",
      },
      pages: [
        { title: "Food Cost Percentage", href: "/resources/food-cost-percentage" },
        { title: "Cash Flow Management", href: "/resources/restaurant-cash-flow-management" },
        { title: "Food Truck Financial Management", href: "/resources/food-truck-financial-management" },
      ],
      blogs: [
        { title: "Hidden Costs on P&L Statements", href: "/blog/hidden-costs-food-waste-profit-loss" },
        { title: "Inventory Software ROI", href: "/blog/inventory-software-roi" },
        { title: "How Mismanagement Destroys Margins", href: "/blog/inventory-mismanagement-destroys-margins" },
      ],
    },
    {
      icon: Shield,
      title: "Food Safety & Compliance",
      description: "Health codes, regulations, and safety best practices",
      pillarPage: {
        title: "Food Safety Compliance Guide",
        href: "/resources/food-safety-compliance",
      },
      pages: [
        { title: "Expiration Date Regulations", href: "/resources/food-expiration-date-regulations" },
        { title: "Food Safety Record Keeping", href: "/resources/food-safety-record-keeping" },
        { title: "Food Truck Health Permits", href: "/resources/food-truck-health-permits" },
      ],
      blogs: [
        { title: "Automated Food Safety Audits", href: "/blog/automated-inventory-food-safety-audits" },
        { title: "Common Expiration Violations", href: "/blog/food-safety-violations-expiration-dates" },
        { title: "Digital vs Paper Logs", href: "/blog/digital-food-safety-logs" },
      ],
    },
    {
      icon: BarChart3,
      title: "Predictive Ordering & Analytics",
      description: "AI-driven demand forecasting and optimization",
      pillarPage: {
        title: "Predictive Ordering for Restaurants",
        href: "/resources/predictive-ordering",
      },
      pages: [
        { title: "Restaurant Analytics Metrics", href: "/resources/restaurant-analytics-metrics" },
        { title: "AI in Restaurant Management", href: "/resources/ai-restaurant-management" },
        { title: "Inventory Velocity & Turnover", href: "/resources/inventory-velocity" },
      ],
      blogs: [
        { title: "Machine Learning Predictions", href: "/blog/machine-learning-predicts-inventory" },
        { title: "Data-Driven vs Gut Instinct", href: "/blog/data-driven-ordering-vs-gut-instinct" },
        { title: "Over-Ordering Patterns", href: "/blog/inventory-patterns-over-ordering" },
      ],
    },
  ];

  const featuredTools = [
    {
      icon: Calculator,
      title: "Food Waste Calculator",
      description:
        "Calculate how much money you're losing to food waste and what you could save with better inventory management.",
      link: "/tools/food-waste-calculator",
      type: "Tool",
    },
    {
      icon: DollarSign,
      title: "ROI Calculator",
      description:
        "See how much SnapTrack could save your operation with our interactive ROI calculator.",
      link: "/pricing#roi",
      type: "Tool",
    },
    {
      icon: FileText,
      title: "Case Studies",
      description:
        "Real-world examples of food businesses that eliminated waste and saved thousands with better inventory management.",
      link: "/case-studies",
      type: "Case Studies",
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
                <BookOpen className="w-4 h-4 mr-2" />
                Free Resources & Guides
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Master Food Waste{" "}
                <span className="text-primary-600">Prevention</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert guides, calculators, and best practices for food trucks,
                restaurants, and kitchens. Everything you need to reduce waste and maximize profits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#guides"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  Browse Guides
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/tools/food-waste-calculator"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors font-semibold"
                >
                  <Calculator className="mr-2 w-5 h-5" />
                  Waste Calculator
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Tools & Resources
              </h2>
              <p className="text-lg text-gray-600">
                Start with these popular tools and case studies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredTools.map((tool, index) => (
                <Link
                  key={index}
                  href={tool.link}
                  className="bg-white rounded-xl border border-gray-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center">
                      <tool.icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {tool.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <span className="inline-flex items-center text-primary-600 font-semibold group-hover:translate-x-1 transition-transform">
                    Access Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Guides by Topic */}
        <section id="guides" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Resource Library
              </h2>
              <p className="text-lg text-gray-600">
                48 in-depth guides organized by topic
              </p>
            </div>

            <div className="space-y-12">
              {topicalSilos.map((silo, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10"
                >
                  {/* Silo Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <silo.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {silo.title}
                      </h3>
                      <p className="text-gray-600">{silo.description}</p>
                    </div>
                  </div>

                  {/* Pillar Page */}
                  <div className="mb-6">
                    <Link
                      href={silo.pillarPage.href}
                      className="inline-flex items-center text-lg font-bold text-primary-600 hover:text-primary-700 group"
                    >
                      <BookOpen className="w-5 h-5 mr-2" />
                      {silo.pillarPage.title}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Supporting Pages & Blogs */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        In-Depth Guides
                      </h4>
                      <ul className="space-y-2">
                        {silo.pages.map((page, idx) => (
                          <li key={idx}>
                            <Link
                              href={page.href}
                              className="text-gray-700 hover:text-primary-600 transition-colors flex items-center group"
                            >
                              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></span>
                              {page.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Related Articles
                      </h4>
                      <ul className="space-y-2">
                        {silo.blogs.map((blog, idx) => (
                          <li key={idx}>
                            <Link
                              href={blog.href}
                              className="text-gray-700 hover:text-primary-600 transition-colors flex items-center group"
                            >
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                              {blog.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center">
              <Mail className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                Get Weekly Waste Reduction Tips
              </h2>
              <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
                Join thousands of food professionals receiving weekly tips on reducing
                waste, optimizing inventory, and increasing profits.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold whitespace-nowrap"
                >
                  Subscribe Free
                </button>
              </form>
              <p className="text-sm text-primary-100 mt-4">
                Unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
