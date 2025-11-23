import React from "react";
import {
  OrganizationSchema,
  WebsiteSchema,
  SoftwareApplicationSchema,
} from "@/types/seo";

interface StructuredDataProps {
  data:
    | OrganizationSchema
    | WebsiteSchema
    | SoftwareApplicationSchema
    | Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
