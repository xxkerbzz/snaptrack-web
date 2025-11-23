import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    product: [
      { label: "Features", href: "/product" },
      { label: "Pricing", href: "/pricing" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Integrations", href: "/integrations" },
      { label: "Case Studies", href: "/case-studies" },
    ],
    industries: [
      { label: "Food Trucks", href: "/food-trucks" },
      { label: "Small Kitchens", href: "/small-kitchens" },
      { label: "Grocery Stores", href: "/grocery-stores" },
    ],
    topGuides: [
      { label: "Food Waste Prevention", href: "/resources/food-waste-prevention" },
      { label: "Food Truck Operations", href: "/resources/food-truck-operations" },
      { label: "Inventory Software Guide", href: "/resources/restaurant-inventory-management-software" },
      { label: "Cost Control", href: "/resources/restaurant-cost-control" },
      { label: "Food Safety Compliance", href: "/resources/food-safety-compliance" },
      { label: "Predictive Ordering", href: "/resources/predictive-ordering" },
    ],
    resources: [
      { label: "All Resources", href: "/resources" },
      { label: "Food Waste Calculator", href: "/tools/food-waste-calculator" },
      { label: "ROI Calculator", href: "/pricing#roi" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/snaptrack", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/snaptrack", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/snaptrack", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/snaptrack", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Industries
            </h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Guides */}
          <div className="col-span-2">
            <h3 className="text-white font-semibold text-sm mb-4">
              Top Guides
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {footerLinks.topGuides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-semibold text-sm mt-6 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-12 pb-8">
          <div className="max-w-md mx-auto text-center mb-12">
            <h3 className="text-white font-bold text-lg mb-2">
              Stay Updated on Food Waste Prevention
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Get weekly tips on reducing food waste and optimizing restaurant inventory
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 text-sm"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors text-sm font-semibold flex items-center whitespace-nowrap"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </button>
            </form>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Copyright */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="text-white font-bold">SnapTrack</div>
                  <div className="text-xs text-gray-500">
                    © 2025 SnapTrack. All rights reserved.
                  </div>
                </div>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
