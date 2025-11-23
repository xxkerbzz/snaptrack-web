import React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

interface ArticleCTAProps {
  title?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "compact";
}

export default function ArticleCTA({
  title = "Ready to Eliminate Food Waste?",
  description = "Join hundreds of food trucks and small kitchens using SnapTrack to track inventory, prevent waste, and boost profits.",
  primaryCTA = {
    text: "Start Free Trial",
    href: "/signup",
  },
  secondaryCTA = {
    text: "See How It Works",
    href: "/demo",
  },
  variant = "default",
}: ArticleCTAProps) {
  if (variant === "compact") {
    return (
      <div className="my-8 p-6 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-primary-100 text-sm">{description}</p>
          </div>
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm whitespace-nowrap"
          >
            {primaryCTA.text}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="my-16 p-10 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl text-white text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
          <Zap className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-primary-100 mb-8">{description}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryCTA.href}
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-xl hover:bg-gray-50 transition-all font-bold text-base shadow-lg hover:shadow-xl hover:scale-105"
          >
            {primaryCTA.text}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          {secondaryCTA && (
            <Link
              href={secondaryCTA.href}
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all font-semibold text-base border border-white/30"
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
