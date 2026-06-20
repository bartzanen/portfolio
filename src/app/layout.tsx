import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

// Self-hosted variable fonts (no requests to Google at runtime).
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

import { portfolio } from "@/data/portfolio";

const { seo, hero } = portfolio;

/**
 * All SEO metadata is derived from `portfolio.seo` — edit the config,
 * not this file.
 */
export const metadata: Metadata = {
  ...(seo.url ? { metadataBase: new URL(seo.url) } : {}),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: hero.name }],
  openGraph: {
    type: "website",
    title: seo.title,
    description: seo.description,
    siteName: hero.name,
    ...(seo.url ? { url: seo.url } : {}),
    ...(seo.ogImage
      ? { images: [{ url: seo.ogImage, width: 1200, height: 630 }] }
      : {}),
  },
  twitter: {
    card: seo.ogImage ? "summary_large_image" : "summary",
    title: seo.title,
    description: seo.description,
    ...(seo.ogImage ? { images: [seo.ogImage] } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning is required because next-themes mutates the
    // class on <html> before React hydrates (to avoid a theme flash).
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
