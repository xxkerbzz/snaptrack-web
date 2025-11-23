import React from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

interface Article {
  title: string;
  description: string;
  href: string;
  category?: string;
}

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
}

export default function RelatedArticles({
  articles,
  title = "Related Articles",
}: RelatedArticlesProps) {
  return (
    <section className="my-16 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
      <div className="flex items-center mb-8">
        <FileText className="w-6 h-6 text-primary-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group block p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200"
          >
            {article.category && (
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-3">
                {article.category}
              </div>
            )}
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {article.description}
            </p>
            <div className="flex items-center text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all">
              Read more
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
