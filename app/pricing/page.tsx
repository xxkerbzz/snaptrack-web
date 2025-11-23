import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import PricingCard from "@/components/PricingCard";
import ROICalculator from "@/components/ROICalculator";
import { Check, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing & Plans - Transparent ROI Calculator",
  description:
    "SnapTrack pricing starts at $29/month for Essentials. Calculate your ROI instantly with our transparent pricing. Free demo available. No hidden fees, cancel anytime. Save $2,400+ monthly on food waste.",
  keywords: [
    "inventory software pricing",
    "food truck software cost",
    "inventory management ROI",
    "restaurant software pricing",
    "food waste prevention cost",
  ],
  openGraph: {
    title: "SnapTrack Pricing - Plans Starting at $29/month",
    description:
      "Transparent pricing with instant ROI calculator. See how much you will save with SnapTrack inventory management.",
    url: "https://snaptrack.io/pricing",
    images: [
      {
        url: "https://snaptrack.io/og-pricing.jpg",
        width: 1200,
        height: 630,
        alt: "SnapTrack Pricing Plans",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptrack.io/pricing",
  },
};

export default function PricingPage() {
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
        name: "Pricing",
        item: "https://snaptrack.io/pricing",
      },
    ],
  };

  const pricingTiers = [
    {
      name: "Free Demo",
      price: "$0",
      period: "14 days",
      description: "Try SnapTrack risk-free with full feature access",
      features: [
        { text: "All Pro features included", included: true },
        { text: "Scan up to 100 items", included: true },
        { text: "Email support", included: true },
        { text: "No credit card required", included: true },
        { text: "Cancel anytime", included: true },
      ],
      cta: {
        text: "Start Free Trial",
        href: "/signup",
      },
    },
    {
      name: "Essentials",
      price: "$29",
      period: "month",
      description: "Perfect for single food truck or small kitchen",
      features: [
        { text: "Unlimited inventory scanning", included: true },
        { text: "Expiration tracking & alerts", included: true },
        { text: "Basic waste analytics", included: true },
        { text: "Mobile app (iOS & Android)", included: true },
        { text: "Email support", included: true },
        { text: "1 location", included: true },
        { text: "2 user accounts", included: true },
        { text: "POS integrations", included: false },
        { text: "Predictive ordering", included: false },
        { text: "API access", included: false },
      ],
      cta: {
        text: "Get Started",
        href: "/signup?plan=essentials",
      },
    },
    {
      name: "Pro",
      price: "$99",
      period: "month",
      description: "For growing businesses and multi-location operations",
      features: [
        { text: "Everything in Essentials", included: true },
        { text: "Predictive ordering AI", included: true },
        { text: "Advanced waste analytics", included: true },
        { text: "POS integrations (Square, Toast, Clover)", included: true },
        { text: "Multi-location support (up to 3)", included: true },
        { text: "Unlimited user accounts", included: true },
        { text: "Priority support (24/7)", included: true },
        { text: "Custom alerts & workflows", included: true },
        { text: "API access", included: true },
        { text: "Dedicated account manager", included: false },
      ],
      cta: {
        text: "Start Pro Trial",
        href: "/signup?plan=pro",
      },
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large operations with custom needs",
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Unlimited locations", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom integrations", included: true },
        { text: "White-label options", included: true },
        { text: "SLA guarantees", included: true },
        { text: "On-premise deployment option", included: true },
        { text: "Custom training", included: true },
        { text: "Priority feature requests", included: true },
      ],
      cta: {
        text: "Contact Sales",
        href: "/contact",
      },
    },
  ];

  const comparisonFeatures = [
    { category: "Core Features", features: [] },
    { name: "Inventory scanning", free: true, essentials: true, pro: true },
    { name: "Expiration tracking", free: true, essentials: true, pro: true },
    { name: "Mobile apps", free: true, essentials: true, pro: true },
    { name: "Waste analytics", free: "Basic", essentials: "Basic", pro: "Advanced" },
    { name: "Email alerts", free: true, essentials: true, pro: true },
    { name: "Push notifications", free: true, essentials: true, pro: true },

    { category: "Advanced Features", features: [] },
    { name: "Predictive ordering", free: false, essentials: false, pro: true },
    { name: "POS integrations", free: false, essentials: false, pro: true },
    { name: "Multi-location", free: "1", essentials: "1", pro: "Up to 3" },
    { name: "User accounts", free: "2", essentials: "2", pro: "Unlimited" },
    { name: "API access", free: false, essentials: false, pro: true },
    { name: "Custom workflows", free: false, essentials: false, pro: true },

    { category: "Support", features: [] },
    { name: "Email support", free: true, essentials: true, pro: true },
    { name: "Priority support", free: false, essentials: false, pro: "24/7" },
    { name: "Phone support", free: false, essentials: false, pro: true },
    { name: "Account manager", free: false, essentials: false, pro: "Enterprise only" },
  ];

  const faqs = [
    {
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required to start.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Absolutely. You can upgrade or downgrade at any time. Changes take effect immediately, and we'll prorate your billing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, Amex, Discover) and ACH bank transfers for annual plans.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees, ever. The price you see is the price you pay. No hidden costs or surprise charges.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "If you're not satisfied within the first 30 days, we'll give you a full refund - no questions asked. Plus, we guarantee ROI in one week or your money back.",
    },
    {
      question: "Do you offer discounts for annual plans?",
      answer:
        "Yes! Save 20% when you pay annually. That's 2 months free. Contact us for annual pricing.",
    },
    {
      question: "How many items can I track?",
      answer:
        "Unlimited on all paid plans. The free trial has a 100-item limit to prevent abuse, but paid plans have no restrictions.",
    },
    {
      question: "What if I have multiple locations?",
      answer:
        "Pro plan includes up to 3 locations. Need more? Our Enterprise plan supports unlimited locations with centralized management.",
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
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Simple, Transparent{" "}
                <span className="text-primary-600">Pricing</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Start free, scale as you grow. No hidden fees, no surprises.
                Average customer saves $2,400/month - more than 80x the cost of
                Pro.
              </p>

              <div className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                <Check className="w-5 h-5 mr-2" />
                14-day free trial • No credit card required • Cancel anytime
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingTiers.map((tier, index) => (
                <PricingCard key={index} {...tier} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                All plans include unlimited scanning, mobile apps, and email
                support
              </p>
              <Link
                href="/product"
                className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
              >
                View Full Feature Comparison
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Calculate Your ROI
              </h2>
              <p className="text-xl text-gray-600">
                See how much you'll save with SnapTrack
              </p>
            </div>

            <ROICalculator />
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Feature Comparison
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to make the right choice
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                        Features
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                        Free Trial
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                        Essentials
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-primary-600 bg-primary-50">
                        Pro
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparisonFeatures.map((item, index) => {
                      if (item.category) {
                        return (
                          <tr key={index} className="bg-gray-50">
                            <td
                              colSpan={4}
                              className="px-6 py-3 text-sm font-bold text-gray-900 uppercase tracking-wide"
                            >
                              {item.category}
                            </td>
                          </tr>
                        );
                      }
                      return (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {typeof item.free === "boolean" ? (
                              item.free ? (
                                <Check className="w-5 h-5 text-primary-600 mx-auto" />
                              ) : (
                                <span className="text-gray-300">—</span>
                              )
                            ) : (
                              <span className="text-sm text-gray-600">
                                {item.free}
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {typeof item.essentials === "boolean" ? (
                              item.essentials ? (
                                <Check className="w-5 h-5 text-primary-600 mx-auto" />
                              ) : (
                                <span className="text-gray-300">—</span>
                              )
                            ) : (
                              <span className="text-sm text-gray-600">
                                {item.essentials}
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center bg-primary-50/30">
                            {typeof item.pro === "boolean" ? (
                              item.pro ? (
                                <Check className="w-5 h-5 text-primary-600 mx-auto" />
                              ) : (
                                <span className="text-gray-300">—</span>
                              )
                            ) : (
                              <span className="text-sm text-gray-600">
                                {item.pro}
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about pricing
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-start">
                    <HelpCircle className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Still have questions about pricing?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Contact our sales team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Money-Back Guarantee */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Risk-Free Guarantee
              </h2>
              <p className="text-xl text-primary-50 mb-8 max-w-3xl mx-auto leading-relaxed">
                We guarantee you'll see positive ROI within one week, or we'll
                refund your money. No questions asked. Plus, you can cancel
                anytime with no penalties.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
