import { FlatCompat } from "@eslint/eslintrc";

// eslint-config-next still ships in the legacy eslintrc format, so it is
// bridged into flat config here.
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "next-env.d.ts",
      "*.tsbuildinfo",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default config;
