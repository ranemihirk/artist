import type { NextConfig } from "next";
import dotenv from "dotenv";

// Load environment variables from .env.local (or .env)
dotenv.config();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = withBundleAnalyzer({
  
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
});

export default nextConfig;
