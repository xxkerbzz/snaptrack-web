"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const industriesLinks = [
    { href: "/food-trucks", label: "Food Trucks", description: "Mobile food operations" },
    { href: "/small-kitchens", label: "Small Kitchens", description: "Ghost kitchens & catering" },
    { href: "/grocery-stores", label: "Grocery Stores", description: "Specialty & boutique stores" },
  ];

  const resourcesLinks = {
    pillars: [
      { href: "/resources/food-waste-prevention", label: "Food Waste Prevention", category: "Guide" },
      { href: "/resources/food-truck-operations", label: "Food Truck Operations", category: "Guide" },
      { href: "/resources/restaurant-inventory-management-software", label: "Inventory Software", category: "Guide" },
      { href: "/resources/restaurant-cost-control", label: "Cost Control", category: "Guide" },
      { href: "/resources/food-safety-compliance", label: "Food Safety", category: "Guide" },
      { href: "/resources/predictive-ordering", label: "Predictive Ordering", category: "Guide" },
    ],
    quickLinks: [
      { href: "/resources", label: "All Resources", icon: "📚" },
      { href: "/case-studies", label: "Case Studies", icon: "📊" },
      { href: "/tools/food-waste-calculator", label: "Waste Calculator", icon: "🧮" },
    ],
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SnapTrack</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/product"
              className="px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Product
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Pricing
            </Link>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium flex items-center gap-1">
                Industries
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "industries" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                    {industriesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900">{link.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{link.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium flex items-center gap-1">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-[600px] bg-white rounded-lg shadow-lg border border-gray-100 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Main Topics */}
                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Main Topics
                        </h3>
                        <div className="space-y-1">
                          {resourcesLinks.pillars.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                            >
                              <div className="text-sm font-medium text-gray-900">{link.label}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{link.category}</div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Quick Links */}
                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Quick Links
                        </h3>
                        <div className="space-y-1">
                          {resourcesLinks.quickLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                            >
                              <div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                                <span>{link.icon}</span>
                                {link.label}
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Featured */}
                        <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                          <h4 className="text-sm font-semibold text-primary-900 mb-2">
                            New Guide Available
                          </h4>
                          <p className="text-xs text-primary-700 mb-3">
                            Complete guide to AI-powered inventory management
                          </p>
                          <Link
                            href="/resources/computer-vision-inventory-systems"
                            className="text-xs font-medium text-primary-600 hover:text-primary-700"
                          >
                            Read Now →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/case-studies"
              className="px-4 py-2 text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Case Studies
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              href="/signup"
              className="bg-primary-600 text-white px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/product"
              className="block text-gray-600 hover:text-primary-600 transition-colors py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-600 hover:text-primary-600 transition-colors py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>

            {/* Mobile Industries */}
            <div className="py-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">Industries</div>
              <div className="pl-4 space-y-2">
                {industriesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-600 hover:text-primary-600 transition-colors py-1 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Resources */}
            <div className="py-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">Resources</div>
              <div className="pl-4 space-y-2">
                {resourcesLinks.pillars.slice(0, 3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-600 hover:text-primary-600 transition-colors py-1 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/resources"
                  className="block text-primary-600 hover:text-primary-700 transition-colors py-1 text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  View All Resources →
                </Link>
              </div>
            </div>

            <Link
              href="/case-studies"
              className="block text-gray-600 hover:text-primary-600 transition-colors py-2 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </Link>

            <div className="pt-4 space-y-2 border-t border-gray-100 mt-4">
              <Link
                href="/contact"
                className="block text-center text-gray-600 hover:text-primary-600 transition-colors py-2 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/signup"
                className="block text-center bg-primary-600 text-white px-5 py-2.5 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
