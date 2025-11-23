import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import {
  Camera,
  Smartphone,
  Cpu,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Cloud,
  Bell,
  BarChart3,
  Package,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works - AI Inventory Scanner Technology",
  description:
    "Learn how SnapTrack's GPT-4 vision technology scans handwritten expiration dates in 3 simple steps. Phone camera inventory tracking that reads messy labels with 99% accuracy. No hardware required.",
  keywords: [
    "how inventory scanner works",
    "GPT-4 vision inventory",
    "phone camera inventory tracking",
    "handwritten label scanner",
    "AI inventory technology",
  ],
  openGraph: {
    title: "How SnapTrack Works - 3-Step Inventory Scanning Process",
    description:
      "Point your camera, AI reads labels, get alerts. Simple 3-step process to eliminate food waste.",
    url: "https://snaptrack.io/how-it-works",
    images: [
      {
        url: "https://snaptrack.io/og-how-it-works.jpg",
        width: 1200,
        height: 630,
        alt: "How SnapTrack Works",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptrack.io/how-it-works",
  },
};

export default function HowItWorksPage() {
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
        name: "How It Works",
        item: "https://snaptrack.io/how-it-works",
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Track Inventory with SnapTrack",
    description:
      "Three-step process to eliminate food waste using AI-powered inventory scanning",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Scan Your Inventory",
        text: "Point your phone camera at items to scan handwritten or printed expiration dates",
        image: "https://snaptrack.io/step-1-scan.jpg",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "AI Processes Labels",
        text: "GPT-4 vision reads and extracts expiration dates, quantities, and product names",
        image: "https://snaptrack.io/step-2-process.jpg",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Get Smart Alerts",
        text: "Receive notifications before items expire with usage suggestions",
        image: "https://snaptrack.io/step-3-alerts.jpg",
      },
    ],
    totalTime: "PT30S",
  };

  const technicalSpecs = [
    {
      icon: Cpu,
      title: "GPT-4 Vision AI",
      description:
        "Powered by OpenAI's latest multimodal AI that can understand images and text simultaneously.",
    },
    {
      icon: Zap,
      title: "Sub-2 Second Processing",
      description:
        "Cloud-based processing delivers results in under 2 seconds, even on slow connections.",
    },
    {
      icon: Shield,
      title: "99% Accuracy Rate",
      description:
        "Industry-leading accuracy even with messy handwriting, poor lighting, or awkward angles.",
    },
    {
      icon: Cloud,
      title: "Offline Mode",
      description:
        "Scans are cached locally and auto-sync when you reconnect to internet.",
    },
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Download & Sign Up",
      description: "Get the app from App Store or Google Play. Sign up takes 30 seconds.",
      time: "1 minute",
    },
    {
      step: 2,
      title: "Quick Tutorial",
      description: "Interactive 3-minute walkthrough shows you the basics.",
      time: "3 minutes",
    },
    {
      step: 3,
      title: "First Scan",
      description: "Scan your current inventory. We'll guide you through each item.",
      time: "10-15 minutes",
    },
    {
      step: 4,
      title: "Set Preferences",
      description: "Configure alert timing, notification preferences, and integrations.",
      time: "5 minutes",
    },
    {
      step: 5,
      title: "You're Live!",
      description: "Start saving money immediately. Daily scans take just 30 seconds.",
      time: "Ongoing",
    },
  ];

  const faqs = [
    {
      question: "Does it work with handwritten labels?",
      answer:
        "Yes! Our GPT-4 vision AI is specifically trained to read handwritten dates, even messy or faded writing. It achieves 99% accuracy on handwritten labels.",
    },
    {
      question: "What if I have poor lighting in my storage area?",
      answer:
        "SnapTrack works in low light conditions. The AI can adjust for shadows, glare, and varying lighting. If needed, your phone's flashlight provides additional illumination.",
    },
    {
      question: "Do I need special hardware or scanners?",
      answer:
        "No special hardware needed! SnapTrack works with any smartphone camera from the last 5 years. No barcode scanners, no extra equipment.",
    },
    {
      question: "How long does scanning take?",
      answer:
        "Initial inventory scan takes 10-15 minutes. Daily updates take just 30 seconds. You can scan up to 10 items per photo with batch mode.",
    },
    {
      question: "What happens if the AI can't read a label?",
      answer:
        "If confidence is below 95%, you'll get a prompt to confirm or manually enter the date. The AI learns from corrections and improves over time.",
    },
    {
      question: "Does it work offline?",
      answer:
        "Yes! Scans are processed locally on your phone in offline mode, then sync to the cloud when you reconnect. All features work offline except real-time reporting.",
    },
    {
      question: "Can multiple people scan at the same time?",
      answer:
        "Absolutely. All team members can scan simultaneously. Changes sync in real-time when connected to internet.",
    },
    {
      question: "What date formats does it recognize?",
      answer:
        "SnapTrack recognizes all common formats: MM/DD/YY, DD/MM/YY, Month DD YYYY, and even informal notations like 'EXP 3/15' or 'Use by March 15th'.",
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={howToSchema} />

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
                <Camera className="w-4 h-4 mr-2" />
                No Hardware Required
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                From Photo to Alert in{" "}
                <span className="text-primary-600">3 Simple Steps</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SnapTrack uses advanced computer vision to eliminate inventory
                guesswork. Point your camera, let AI do the work, and never
                waste food again.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/signup"
                  className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-lg font-semibold flex items-center justify-center group"
                >
                  Try It Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/demo"
                  className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold flex items-center justify-center border border-gray-300"
                >
                  <Smartphone className="mr-2 w-5 h-5" />
                  Watch Demo
                </Link>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-600 mr-2" />
                  30 sec daily
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-2" />
                  99% accuracy
                </div>
                <div className="flex items-center">
                  <Smartphone className="w-5 h-5 text-primary-600 mr-2" />
                  Just your phone
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-20">
              {/* Step 1: Scan */}
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-2xl font-bold text-2xl mb-6">
                    1
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Scan Your Inventory
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Open the SnapTrack app and point your phone camera at any
                    item with an expiration date. Tap once to capture. That's
                    it.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Batch Scanning
                        </h3>
                        <p className="text-gray-600">
                          Scan entire shelves at once. AI detects and processes
                          up to 10 items per photo.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Works with Anything
                        </h3>
                        <p className="text-gray-600">
                          Handwritten labels, printed stickers, original
                          packaging, even faded or smudged dates.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          No Special Angle Needed
                        </h3>
                        <p className="text-gray-600">
                          Take photos from any angle. AI handles rotation,
                          skew, and perspective automatically.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          Pro Tip
                        </h4>
                        <p className="text-gray-700">
                          Take one photo of your entire shelf during prep. AI
                          will find all expiration dates automatically. Full
                          walk-in inventory in under 2 minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-96 flex items-center justify-center">
                      <Camera className="w-32 h-32 text-gray-400" />
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-600 italic">
                        Point your camera at items and tap to scan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: AI Processing */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-2xl font-bold text-2xl mb-6">
                    2
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    AI Reads Everything
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Our GPT-4 vision AI analyzes the photo in under 2 seconds,
                    extracting expiration dates, quantities, product names, and
                    more.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Understands Context
                        </h3>
                        <p className="text-gray-600">
                          Distinguishes between production dates, sell-by dates,
                          use-by dates, and expiration dates.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Extracts Quantities
                        </h3>
                        <p className="text-gray-600">
                          Reads "2 lbs", "500g", "12 oz" and automatically
                          converts to your preferred units.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Learns Your Products
                        </h3>
                        <p className="text-gray-600">
                          After first scan, AI remembers your products and
                          pre-fills details automatically.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {technicalSpecs.map((spec, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                      >
                        <spec.icon className="w-8 h-8 text-primary-600 mb-2" />
                        <h4 className="font-bold text-gray-900 text-sm mb-1">
                          {spec.title}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {spec.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl h-96 flex items-center justify-center">
                      <Cpu className="w-32 h-32 text-primary-600" />
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-600 italic">
                        GPT-4 vision processes labels in under 2 seconds
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Smart Alerts */}
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-2xl font-bold text-2xl mb-6">
                    3
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Get Smart Alerts
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    SnapTrack monitors your inventory 24/7 and sends
                    intelligent alerts before items expire, with actionable
                    suggestions.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Proactive Notifications
                        </h3>
                        <p className="text-gray-600">
                          Get alerts 3 days before expiration via push, email,
                          or SMS - whatever you prefer.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Menu Suggestions
                        </h3>
                        <p className="text-gray-600">
                          AI suggests recipes and specials to use expiring
                          ingredients before they spoil.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          Predictive Ordering
                        </h3>
                        <p className="text-gray-600">
                          Get reorder recommendations based on consumption
                          patterns - never run out or over-order again.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-white">
                    <BarChart3 className="w-10 h-10 mb-4" />
                    <h4 className="font-bold text-xl mb-2">
                      Real-Time Dashboard
                    </h4>
                    <p className="text-primary-50">
                      Track waste costs, savings trends, and ROI in real-time.
                      See which items spoil most often and optimize your
                      ordering.
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl h-96 flex items-center justify-center">
                      <Bell className="w-32 h-32 text-orange-500" />
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-600 italic">
                        Receive alerts before items expire with action items
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Getting Started Takes 20 Minutes
              </h2>
              <p className="text-xl text-gray-600">
                From download to tracking inventory - here's exactly what to
                expect
              </p>
            </div>

            <div className="space-y-6">
              {implementationSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <span className="text-sm text-primary-600 font-semibold bg-primary-50 px-3 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-primary-50 border border-primary-200 rounded-xl p-8 text-center">
              <Package className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No Training Required
              </h3>
              <p className="text-gray-700 mb-6">
                If you can take a photo, you can use SnapTrack. The interface
                is so intuitive, you'll master it in minutes.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technical Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about how SnapTrack works
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 group"
                >
                  <summary className="flex items-start cursor-pointer list-none">
                    <HelpCircle className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 transform group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="mt-4 ml-10 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Have more technical questions?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Talk to our team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Demo CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white text-center">
              <Smartphone className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                See It In Action
              </h2>
              <p className="text-xl text-primary-50 mb-8 max-w-3xl mx-auto">
                Watch a 3-minute demo showing real scans, live processing, and
                actual results from food truck operators.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/demo"
                  className="w-full sm:w-auto bg-white text-primary-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold inline-flex items-center justify-center"
                >
                  <Smartphone className="mr-2 w-5 h-5" />
                  Watch Demo
                </Link>
                <Link
                  href="/signup"
                  className="w-full sm:w-auto bg-primary-700 text-white px-8 py-4 rounded-xl hover:bg-primary-800 transition-colors text-lg font-semibold inline-flex items-center justify-center border-2 border-white/20"
                >
                  Try It Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
