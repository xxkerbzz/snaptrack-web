import React from "react";
import { ExternalLink } from "lucide-react";

interface IntegrationCardProps {
  name: string;
  description: string;
  category: string;
  logo?: string;
  connected?: boolean;
  comingSoon?: boolean;
}

export default function IntegrationCard({
  name,
  description,
  category,
  connected = false,
  comingSoon = false,
}: IntegrationCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-400">
            {name.charAt(0)}
          </span>
        </div>
        {comingSoon ? (
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
            Coming Soon
          </span>
        ) : connected ? (
          <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
            Connected
          </span>
        ) : null}
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
        <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
          {category}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {!comingSoon && (
        <button className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors inline-flex items-center group">
          Learn More
          <ExternalLink className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}
