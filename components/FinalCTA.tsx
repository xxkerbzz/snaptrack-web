import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function FinalCTA() {
  const guarantees = [
    "14-day free trial, no credit card required",
    "Cancel anytime, no questions asked",
    "ROI guarantee or money back",
    "Free onboarding & setup support",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Stop Wasting Money?
        </h2>
        <p className="text-xl sm:text-2xl text-primary-50 mb-12 max-w-2xl mx-auto">
          Join 500+ food truck operators who've eliminated food waste and saved
          thousands with SnapTrack.
        </p>

        {/* CTA Button */}
        <Link
          href="/signup"
          className="inline-flex items-center bg-white text-primary-600 px-10 py-5 rounded-xl hover:bg-gray-50 transition-colors text-lg font-bold shadow-2xl group mb-12"
        >
          Start Your Free Trial
          <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Guarantees */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-white bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium text-left">{guarantee}</span>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-primary-100 text-sm">
            Questions? Email us at{" "}
            <a
              href="mailto:support@snaptrack.io"
              className="underline hover:text-white transition-colors"
            >
              support@snaptrack.io
            </a>{" "}
            or schedule a demo call
          </p>
        </div>
      </div>
    </section>
  );
}
