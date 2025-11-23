import React from "react";
import { AlertTriangle, ClipboardList, DollarSign, Clock } from "lucide-react";

export default function Problem() {
  const painPoints = [
    {
      icon: DollarSign,
      title: "Thousands Lost Monthly",
      description:
        "Expired ingredients eat into already thin profit margins, with some operators losing $3,000+ per month to preventable waste.",
    },
    {
      icon: Clock,
      title: "No Time for Manual Tracking",
      description:
        "Between cooking, serving, and managing operations, food truck operators don't have hours to maintain spreadsheets and check dates.",
    },
    {
      icon: ClipboardList,
      title: "Handwritten Labels Fail",
      description:
        "Sharpie on plastic bags and irregular packaging makes tracking impossible with traditional systems built for retail stores.",
    },
    {
      icon: AlertTriangle,
      title: "Unpredictable Cash Flow",
      description:
        "Without visibility into usage patterns, operators over-order to avoid running out, tying up capital in inventory that expires.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The Hidden Cost of{" "}
            <span className="text-primary-600">Food Waste</span>
          </h2>
          <p className="text-xl text-gray-600">
            Every food truck faces the same problem: handwritten expiration
            dates on bags and packages that get buried, overlooked, and
            forgotten until it's too late.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <point.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Sound familiar? You're not alone. But there's a better way.
          </p>
        </div>
      </div>
    </section>
  );
}
