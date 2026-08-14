import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

/**
 * Replaces Cloudflare's injected default robots.txt with one we control,
 * and points crawlers at our own sitemap.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const url = portfolio.seo.url;

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    ...(url ? { sitemap: new URL("/sitemap.xml", url).toString() } : {}),
    ...(url ? { host: url } : {}),
  };
}
