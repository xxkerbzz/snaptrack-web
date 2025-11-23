"use client";

import { useState } from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calculator, DollarSign, TrendingDown, AlertTriangle } from "lucide-react";

export default function FoodWasteCalculatorPage() {
  const [revenue, setRevenue] = useState("");
  const [wastePercent, setWastePercent] = useState("6");
  const [results, setResults] = useState<any>(null);

  const calculateWaste = () => {
    const annualRevenue = parseFloat(revenue);
    const waste = parseFloat(wastePercent);

    if (isNaN(annualRevenue) || isNaN(waste)) return;

    const foodCostPercent = 30; // Industry average
    const annualFoodCost = annualRevenue * (foodCostPercent / 100);
    const wasteAmount = annualFoodCost * (waste / 100);
    const trueCostMultiplier = 3.5; // Including labor, overhead, etc.
    const totalImpact = wasteAmount * trueCostMultiplier;

    // Reduction scenarios
    const reduction50 = totalImpact * 0.5;
    const reduction70 = totalImpact * 0.7;

    setResults({
      annualFoodCost,
      wasteAmount,
      totalImpact,
      weeklyWaste: totalImpact / 52,
      monthlyWaste: totalImpact / 12,
      reduction50,
      reduction70,
    });
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
              <Calculator className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Food Waste Cost Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate exactly how much food waste is costing your business, including hidden costs of labor, overhead, and lost opportunity.
            </p>
          </div>

          {/* Calculator Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Numbers</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  placeholder="500000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Your total annual revenue from food sales
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Estimated Waste Rate (%)
                </label>
                <input
                  type="number"
                  value={wastePercent}
                  onChange={(e) => setWastePercent(e.target.value)}
                  step="0.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Best-in-class: 2-3%</span>
                  <span>Average: 4-6%</span>
                  <span>Poor: 8-10%</span>
                </div>
              </div>

              <button
                onClick={calculateWaste}
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors"
              >
                Calculate My Waste Costs
              </button>
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="space-y-6">
              {/* Total Impact */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Total Annual Impact</h3>
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div className="text-5xl font-bold mb-2">
                  ${results.totalImpact.toLocaleString()}
                </div>
                <p className="text-red-100 text-lg">
                  This is what food waste is really costing your business each year
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-red-400">
                  <div>
                    <div className="text-red-100 text-sm">Monthly</div>
                    <div className="text-2xl font-bold">
                      ${results.monthlyWaste.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-red-100 text-sm">Weekly</div>
                    <div className="text-2xl font-bold">
                      ${results.weeklyWaste.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakdown */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow p-6">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-6 h-6 text-gray-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Cost Breakdown</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Food cost (direct)</span>
                      <span className="font-semibold">
                        ${results.wasteAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Labor & overhead</span>
                      <span className="font-semibold">
                        ${(results.totalImpact - results.wasteAmount).toLocaleString()}
                      </span>
                    </div>
                    <div className="pt-3 border-t border-gray-200 flex justify-between">
                      <span className="font-bold text-gray-900">Total Impact</span>
                      <span className="font-bold text-primary-600">
                        ${results.totalImpact.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow p-6">
                  <div className="flex items-center mb-4">
                    <TrendingDown className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-gray-900">Savings Potential</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">50% Waste Reduction</div>
                      <div className="text-2xl font-bold text-green-600">
                        ${results.reduction50.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">saved annually</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">70% Waste Reduction</div>
                      <div className="text-2xl font-bold text-green-600">
                        ${results.reduction70.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">saved annually</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">
                  Ready to Capture These Savings?
                </h3>
                <p className="text-primary-100 text-lg mb-6">
                  SnapTrack customers reduce waste by 60-80% within the first 90 days
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/demo"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-xl font-bold hover:bg-gray-50 transition-all"
                  >
                    See Live Demo
                  </a>
                  <a
                    href="/signup"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary-800 text-white rounded-xl font-bold hover:bg-primary-900 transition-all border border-white/30"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Additional Info */}
          <div className="mt-12 bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Understanding the True Cost of Food Waste
            </h2>
            <p className="text-gray-700 mb-4">
              Most restaurant operators underestimate waste by focusing only on the purchase price of discarded food. The true economic impact includes:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Labor costs:</strong> Time spent receiving, storing, preparing, and cooking wasted food</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Overhead allocation:</strong> Utilities, refrigeration, storage space, and transportation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Disposal fees:</strong> Waste hauling costs and environmental compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span><strong>Opportunity cost:</strong> Revenue that could have been generated from sold items</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              Industry research shows every $1 of wasted food costs $3-4 when all factors are included. Our calculator uses a conservative 3.5x multiplier to estimate your true waste impact.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
