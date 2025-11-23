"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, List } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
        aria-label="Toggle table of contents"
      >
        <List className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* TOC Container */}
      <div
        className={`
        fixed top-24 right-8 w-72 max-h-[calc(100vh-120px)] overflow-y-auto
        bg-white rounded-lg border border-gray-200 p-6 shadow-sm
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-[400px]"}
        lg:translate-x-0 lg:block
        z-50
      `}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
            Table of Contents
          </h3>
        </div>

        <nav>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id} style={{ marginLeft: `${(item.level - 2) * 12}px` }}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex items-start text-left text-sm transition-colors w-full py-1
                    ${
                      activeId === item.id
                        ? "text-primary-600 font-semibold"
                        : "text-gray-600 hover:text-primary-600"
                    }
                  `}
                >
                  <ChevronRight
                    className={`w-4 h-4 mr-1 mt-0.5 flex-shrink-0 transition-transform ${
                      activeId === item.id ? "rotate-90" : ""
                    }`}
                  />
                  <span className="leading-tight">{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
