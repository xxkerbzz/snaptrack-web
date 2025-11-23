import React from "react";
import { Camera, Bell, TrendingUp, BarChart3 } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Camera,
      title: "Phone Camera Scanner",
      description:
        "Point your phone at any handwritten label. Our GPT-4 Vision AI instantly reads dates, product names, and quantities—no special equipment needed.",
      benefits: ["Works with any packaging", "Reads messy handwriting", "Under 3 seconds per scan"],
    },
    {
      icon: Bell,
      title: "Smart Expiration Alerts",
      description:
        "Get push notifications before items expire based on your custom buffer zones. Never discover spoiled food during service again.",
      benefits: ["Custom alert timing", "Priority notifications", "SMS & email options"],
    },
    {
      icon: TrendingUp,
      title: "Predictive Ordering",
      description:
        "AI analyzes your usage patterns and automatically suggests reorder quantities and timing to minimize waste while preventing stockouts.",
      benefits: ["Historical usage analysis", "Seasonal adjustments", "Supplier integration"],
    },
    {
      icon: BarChart3,
      title: "Waste Analytics",
      description:
        "See exactly how much money you're saving with detailed tracking of prevented waste, usage trends, and ROI calculations.",
      benefits: ["Dollar savings tracked", "Trend visualizations", "Exportable reports"],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="text-primary-600">Eliminate Waste</span>
          </h2>
          <p className="text-xl text-gray-600">
            Purpose-built for food trucks and small kitchens. No complicated
            setup, no expensive hardware, no learning curve.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
