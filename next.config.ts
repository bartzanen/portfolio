import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // Required by `output: "export"` — Next does no resizing at build time,
    // so every asset in src/assets ships exactly as committed. They are
    // pre-sized and encoded to WebP for that reason.
    unoptimized: true,
    // All images are local static imports; no remote hosts are permitted.
    remotePatterns: [],
  },
};

export default nextConfig;
