import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  iconBgColor?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconColor = "text-primary-600",
  iconBgColor = "bg-primary-50",
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all">
      <div className={`${iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
