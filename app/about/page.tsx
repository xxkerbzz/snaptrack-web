import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import { Target, Heart, Users, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SnapTrack - Our Mission to Eliminate Food Waste",
  description:
    "SnapTrack was founded to help small food businesses stop wasting money on expired ingredients. Learn about our mission, values, and commitment to sustainability through technology.",
  keywords: [
    "about SnapTrack",
    "food waste mission",
    "inventory management company",
    "sustainable food technology",
  ],
  openGraph: {
    title: "About SnapTrack - Fighting Food Waste with Technology",
    description:
      "Our mission is to eliminate food waste in small food businesses through accessible AI technology.",
    url: "https://snaptrack.io/about",
    images: [
      {
        url: "https://snaptrack.io/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About SnapTrack",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptrack.io/about",
  },
};

export default function AboutPage() {
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
        name: "About",
        item: "https://snaptrack.io/about",
      },
    ],
  };

  const values = [
    {
      icon: Target,
      title: "Impact-Driven",
      description:
        "Every feature we build is designed to reduce waste and save money. If it doesn't serve that mission, we do not build it.",
    },
    {
      icon: Heart,
      title: "Small Business First",
      description:
        "We're not building for enterprise. We're building for the food truck operator, the ghost kitchen, the independent restaurant.",
    },
    {
      icon: Lightbulb,
      title: "Accessible Innovation",
      description:
        "Advanced AI shouldn't require a computer science degree. We make cutting-edge technology simple enough for anyone to use.",
    },
    {
      icon: Users,
      title: "Customer Obsessed",
      description:
        "Our customers' success is our success. We listen, iterate, and improve based on real feedback from real operators.",
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
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fighting Food Waste,{" "}
                <span className="text-primary-600">One Kitchen at a Time</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SnapTrack was born from a simple observation: small food
                businesses waste thousands on expired ingredients, not because
                they don't care, but because tracking inventory manually is
                impossible at scale.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl text-primary-50 mb-6 leading-relaxed">
                  We believe every small food business should have access to the
                  same technology that large chains use - without the complexity
                  or cost. Our mission is to eliminate food waste in small food
                  businesses through accessible AI technology.
                </p>
                <p className="text-lg text-primary-100 leading-relaxed">
                  40% of food in America is wasted. Most of it comes from the
                  retail and food service sector. We're changing that by giving
                  operators the tools to track, predict, and prevent waste
                  before it happens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="leading-relaxed mb-6">
                SnapTrack started in 2023 when our founder, a former restaurant
                operator, watched another $300 worth of produce get thrown away
                because it had been forgotten in the back of the walk-in. He
                thought: "There has to be a better way."
              </p>
              <p className="leading-relaxed mb-6">
                Traditional inventory systems were too expensive, too complex,
                and required hardware that food trucks couldn't accommodate.
                Clipboards and spreadsheets were unreliable and time-consuming.
                Something had to change.
              </p>
              <p className="leading-relaxed mb-6">
                With the advent of GPT-4's vision capabilities, we saw an
                opportunity: what if your phone camera could read expiration
                dates just by looking at them? What if AI could predict when
                you'd run out of ingredients before it happened?
              </p>
              <p className="leading-relaxed">
                Six months and 500+ beta testers later, SnapTrack was born. Now
                we help hundreds of food businesses save thousands monthly while
                reducing their environmental impact.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 p-8"
                >
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Placeholder */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A small, dedicated team building for food professionals
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                We're Hiring!
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Want to help eliminate food waste? We're looking for passionate
                people to join our mission.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join the Fight Against Food Waste
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              See how SnapTrack can help your business save money and reduce
              waste
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
                href="/contact"
                className="w-full sm:w-auto bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-lg font-semibold border border-gray-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
