import React from "react";
import { Scan, Eye, Wallet } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Scan,
      number: "01",
      title: "Scan",
      description:
        "Pull out your phone and snap a photo of any handwritten label when ingredients arrive. Takes 3 seconds.",
      timeframe: "3 seconds per item",
    },
    {
      icon: Eye,
      number: "02",
      title: "Track",
      description:
        "SnapTrack automatically adds items to your digital inventory with expiration dates, quantities, and locations.",
      timeframe: "Real-time updates",
    },
    {
      icon: Wallet,
      number: "03",
      title: "Save",
      description:
        "Get alerts before items expire, use them in time, and watch your waste (and costs) disappear. See exact dollar savings.",
      timeframe: "Track ROI daily",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            So Simple, It Feels Like{" "}
            <span className="text-primary-600">Magic</span>
          </h2>
          <p className="text-xl text-gray-600">
            Three steps to eliminate waste. No training, no complicated setup,
            no expensive equipment.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 -z-10"></div>
              )}

              <div className="text-center">
                {/* Icon Circle */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 bg-primary-600 rounded-full mb-6 shadow-lg shadow-primary-600/30">
                  <step.icon className="w-12 h-12 text-white" />
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 font-bold text-sm shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-gray-50 text-primary-700 rounded-full text-sm font-medium">
                  {step.timeframe}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-primary-50 rounded-2xl p-8 text-center">
          <p className="text-2xl font-bold text-gray-900 mb-2">
            Average time saved per week:{" "}
            <span className="text-primary-600">4.5 hours</span>
          </p>
          <p className="text-gray-600">
            That's time you can spend serving customers or growing your
            business.
          </p>
        </div>
      </div>
    </section>
  );
}
