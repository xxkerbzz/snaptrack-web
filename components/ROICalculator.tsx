"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";

export default function ROICalculator() {
  const [monthlyWaste, setMonthlyWaste] = useState(1500);

  const wasteReduction = 0.94; // 94% waste reduction
  const monthlySavings = monthlyWaste * wasteReduction;
  const annualSavings = monthlySavings * 12;
  const subscriptionCost = 49; // monthly cost
  const netMonthlySavings = monthlySavings - subscriptionCost;
  const roi = ((netMonthlySavings / subscriptionCost) * 100).toFixed(0);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
            <Calculator className="w-4 h-4 mr-2" />
            Calculate Your Savings
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            See Your <span className="text-primary-600">ROI</span> in Seconds
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Most food trucks waste $1,000-$3,000 monthly on expired ingredients.
            How much are you losing?
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-12 border border-primary-100 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Input Section */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Estimated Monthly Food Waste ($)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400">
                  $
                </span>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={monthlyWaste}
                  onChange={(e) => setMonthlyWaste(parseInt(e.target.value))}
                  className="hidden"
                  id="waste-slider"
                />
                <input
                  type="number"
                  value={monthlyWaste}
                  onChange={(e) => setMonthlyWaste(parseInt(e.target.value) || 0)}
                  className="w-full text-4xl font-bold text-gray-900 pl-10 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500"
                />
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={monthlyWaste}
                onChange={(e) => setMonthlyWaste(parseInt(e.target.value))}
                className="w-full mt-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$500</span>
                <span>$5,000</span>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Monthly Savings
                  </span>
                  <TrendingUp className="w-5 h-5 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-primary-600">
                  ${monthlySavings.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  After 94% waste reduction
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Annual Savings
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  ${annualSavings.toLocaleString()}
                </div>
              </div>

              <div className="bg-primary-600 rounded-xl p-6 text-white">
                <div className="text-sm font-medium opacity-90 mb-2">
                  Return on Investment
                </div>
                <div className="text-4xl font-bold">{roi}%</div>
                <div className="text-sm opacity-90 mt-2">
                  Net savings: ${netMonthlySavings.toLocaleString()}/month
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 pt-8 border-t border-primary-100 text-center">
            <p className="text-gray-700 font-medium">
              Based on average 94% waste reduction across 500+ food trucks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
