import type { NextConfig } from "next";

const config: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['rummerlab.com'],
  },
};

export default config;
