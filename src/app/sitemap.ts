import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

/**
 * Static sitemap. The site is a single page, so this exists mainly to give
 * crawlers an explicit, dated entry point rather than leaving them to
 * discover the root on their own.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = portfolio.seo.url;
  if (!url) return [];

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
