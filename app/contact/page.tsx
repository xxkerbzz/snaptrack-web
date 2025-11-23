import React from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import ContactForm from "@/components/ContactForm";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - Get a Demo or Enterprise Inquiry",
  description:
    "Contact SnapTrack for product demos, enterprise inquiries, or support questions. Email support@snaptrack.io or book a personalized demo. Response within 24 hours guaranteed.",
  keywords: [
    "SnapTrack contact",
    "inventory software demo",
    "enterprise inquiry",
    "customer support",
  ],
  openGraph: {
    title: "Contact SnapTrack - Demo Requests & Support",
    description:
      "Get in touch for demos, enterprise solutions, or support questions. 24-hour response time.",
    url: "https://snaptrack.io/contact",
    images: [
      {
        url: "https://snaptrack.io/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SnapTrack",
      },
    ],
  },
  alternates: {
    canonical: "https://snaptrack.io/contact",
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: "https://snaptrack.io/contact",
      },
    ],
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "General inquiries and support",
      detail: "support@snaptrack.io",
      action: "mailto:support@snaptrack.io",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant answers to quick questions",
      detail: "Available 9am-6pm EST",
      action: "#",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Enterprise and partnership inquiries",
      detail: "(555) 123-4567",
      action: "tel:+15551234567",
    },
  ];

  const faqs = [
    {
      question: "How quickly will I hear back?",
      answer:
        "We respond to all inquiries within 24 hours on business days. For urgent matters, use our live chat for instant responses.",
    },
    {
      question: "Can I schedule a product demo?",
      answer:
        "Absolutely! Use the form to request a demo, or book directly on our calendar. Demos typically last 15-20 minutes.",
    },
    {
      question: "Do you offer enterprise pricing?",
      answer:
        "Yes. For operations with 5+ locations or custom requirements, contact us for enterprise pricing and dedicated support options.",
    },
    {
      question: "What if I have a technical issue?",
      answer:
        "Email support@snaptrack.io or use the live chat. Pro customers get priority 24/7 support.",
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
                Let's Talk About{" "}
                <span className="text-primary-600">Your Inventory</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Whether you want a demo, have questions, or need enterprise
                solutions, we're here to help. Response within 24 hours
                guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="bg-white rounded-xl border border-gray-200 p-8 hover:border-primary-300 hover:shadow-md transition-all group text-center"
                >
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                    <method.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="text-primary-600 font-semibold">
                    {method.detail}
                  </p>
                </a>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <ContactForm
                  title="Send Us a Message"
                  description="Fill out the form and we'll get back to you within 24 hours."
                  submitText="Send Message"
                />
              </div>

              {/* Office Info & Demo CTA */}
              <div className="space-y-8">
                {/* Demo CTA */}
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Want to See SnapTrack in Action?
                  </h3>
                  <p className="text-primary-50 mb-6">
                    Book a personalized 15-minute demo. We'll show you exactly
                    how SnapTrack works for your type of operation.
                  </p>
                  <Link
                    href="/demo"
                    className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                {/* Office Info */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Our Office
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          Address
                        </div>
                        <div className="text-gray-600">
                          123 Tech Plaza, Suite 400
                          <br />
                          San Francisco, CA 94105
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Hours</div>
                        <div className="text-gray-600">
                          Monday - Friday: 9am - 6pm EST
                          <br />
                          Weekend: Emergency support only
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/help"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <HelpCircle className="w-5 h-5 mr-2" />
                      Help Center
                    </Link>
                    <Link
                      href="/docs"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <HelpCircle className="w-5 h-5 mr-2" />
                      API Documentation
                    </Link>
                    <Link
                      href="/pricing"
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <HelpCircle className="w-5 h-5 mr-2" />
                      Pricing & Plans
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
