import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Optimized for Vercel deployment
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Turbopack configuration
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
