import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbItem } from "@/types/seo";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
              {index === items.length - 1 ? (
                <span className="font-medium text-gray-900">{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
