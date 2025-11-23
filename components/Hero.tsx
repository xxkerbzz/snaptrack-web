import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Trusted by 500+ food trucks nationwide
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Throwing Money in the{" "}
            <span className="text-primary-600">Trash</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Food truck operators waste thousands monthly on expired ingredients.
            SnapTrack uses your phone camera to scan handwritten dates, alert
            you before items expire, and predict exactly what to reorder.
          </p>

          {/* Value Proposition */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10 inline-block shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              <span className="text-primary-600">Guaranteed ROI</span> in one
              week or your money back
            </p>
          </div>

          {/* CTA Buttons */}
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
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">
                $2.4K
              </div>
              <div className="text-sm text-gray-600">
                Avg. monthly savings
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">
                94%
              </div>
              <div className="text-sm text-gray-600">Waste reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">
                30 sec
              </div>
              <div className="text-sm text-gray-600">
                Daily time investment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
