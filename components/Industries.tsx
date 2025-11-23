import React from "react";
import Link from "next/link";
import { Truck, ChefHat, Store, ArrowRight } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Truck,
      name: "Food Trucks",
      description:
        "Mobile kitchens with limited storage and tight margins. Perfect for operators managing inventory on the go.",
      benefits: ["Multi-location sync", "Mobile-first design", "Quick scanning"],
      link: "/industries/food-trucks",
    },
    {
      icon: ChefHat,
      name: "Small Kitchens",
      description:
        "Boutique restaurants, catering operations, and ghost kitchens that need professional inventory control without enterprise complexity.",
      benefits: ["Bulk scanning", "Team access", "POS integration"],
      link: "/industries/small-kitchens",
    },
    {
      icon: Store,
      name: "Specialty Grocery",
      description:
        "Independent grocers, delis, and specialty food shops tracking fresh inventory with irregular packaging and handwritten labels.",
      benefits: ["Department tracking", "Vendor management", "Compliance reports"],
      link: "/industries/grocery",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Built for <span className="text-primary-600">Your Business</span>
          </h2>
          <p className="text-xl text-gray-600">
            Purpose-designed for small food businesses where every dollar counts
            and traditional systems don't fit.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <industry.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {industry.name}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {industry.description}
              </p>

              <ul className="space-y-2 mb-6">
                {industry.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <svg
                      className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                href={industry.link}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
