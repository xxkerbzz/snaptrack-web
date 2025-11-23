import React from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PricingFeature[];
  cta: {
    text: string;
    href: string;
  };
  highlighted?: boolean;
  badge?: string;
}

export default function PricingCard({
  name,
  price,
  period = "month",
  description,
  features,
  cta,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-8 ${
        highlighted
          ? "border-2 border-primary-500 shadow-xl shadow-primary-100"
          : "border border-gray-200 shadow-sm"
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-5xl font-bold text-gray-900">{price}</span>
          {period && (
            <span className="text-gray-600 ml-2">/{period}</span>
          )}
        </div>
      </div>

      <Link
        href={cta.href}
        className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors mb-8 ${
          highlighted
            ? "bg-primary-600 text-white hover:bg-primary-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        {cta.text}
      </Link>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            {feature.included ? (
              <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
            )}
            <span
              className={
                feature.included ? "text-gray-700" : "text-gray-400"
              }
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
