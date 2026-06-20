import type { Config } from "tailwindcss";

const config: Config = {
  // "class" strategy: dark mode is controlled by a `class="dark"` on <html>,
  // which next-themes manages (defaulting to the system preference).
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Single accent used across links, badges and CTAs.
        accent: {
          DEFAULT: "#0d9488", // teal-600
          soft: "#14b8a6", // teal-500 (used on dark backgrounds)
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "52rem", // reading column used by every section
      },
    },
  },
  plugins: [],
};

export default config;
