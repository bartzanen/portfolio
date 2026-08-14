import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

// Self-hosted variable fonts (no requests to Google at runtime).
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

import { portfolio } from "@/data/portfolio";
import { personSchema } from "@/lib/structured-data";

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
  creator: hero.name,
  ...(seo.url ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: seo.title,
    description: seo.description,
    siteName: hero.name,
    ...(seo.url ? { url: seo.url } : {}),
    ...(seo.ogImage
      ? {
          images: [
            {
              url: seo.ogImage,
              width: 1200,
              height: 630,
              alt: `${hero.name} — ${hero.headline}`,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: seo.ogImage ? "summary_large_image" : "summary",
    title: seo.title,
    description: seo.description,
    ...(seo.ogImage ? { images: [seo.ogImage] } : {}),
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

// Set in the Cloudflare Pages dashboard. Analytics is simply omitted when
// the token is absent, so local and preview builds stay untracked.
const cfBeaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning is required because next-themes mutates the
    // class on <html> before React hydrates (to avoid a theme flash).
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // Structured data is generated from the portfolio config, so it
          // can never drift from what the page actually shows.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema(portfolio)),
          }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal-700 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white dark:focus:bg-teal-500 dark:focus:text-zinc-950"
        >
          Skip to content
        </a>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {cfBeaconToken && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            strategy="afterInteractive"
            data-cf-beacon={`{"token": "${cfBeaconToken}"}`}
          />
        )}
      </body>
    </html>
  );
}
