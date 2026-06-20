import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // Allow project images hosted anywhere over HTTPS. Tighten this to the
    // specific hosts you actually use before going to production if you like.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
