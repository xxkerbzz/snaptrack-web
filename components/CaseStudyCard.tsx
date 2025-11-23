import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudyMetric {
  label: string;
  value: string;
}

interface CaseStudyCardProps {
  title: string;
  industry: string;
  description: string;
  metrics: CaseStudyMetric[];
  href: string;
  image?: string;
  quote?: string;
  author?: string;
}

export default function CaseStudyCard({
  title,
  industry,
  description,
  metrics,
  href,
  quote,
  author,
}: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {industry}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {quote && (
          <blockquote className="border-l-4 border-primary-500 pl-4 mb-6 italic text-gray-700">
            "{quote}"
            {author && (
              <footer className="text-sm text-gray-600 mt-2 not-italic">
                — {author}
              </footer>
            )}
          </blockquote>
        )}

        <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-gray-100">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>

        <Link
          href={href}
          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group"
        >
          Read Full Story
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
