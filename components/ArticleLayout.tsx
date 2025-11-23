import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Clock, Calendar, User } from "lucide-react";

interface ArticleLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  author?: string;
  publishDate?: string;
  readTime?: string;
  breadcrumbs?: Array<{ label: string; href: string }>;
}

export default function ArticleLayout({
  children,
  title,
  description,
  author = "SnapTrack Team",
  publishDate = "2025-01-15",
  readTime = "8 min read",
  breadcrumbs = [],
}: ArticleLayoutProps) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-50 to-white pt-24 pb-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={crumb.href}>
                    {index > 0 && <span className="text-gray-400">/</span>}
                    <a
                      href={crumb.href}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {crumb.label}
                    </a>
                  </React.Fragment>
                ))}
              </nav>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {readTime}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
