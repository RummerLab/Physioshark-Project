import type { NextConfig } from "next";

const config: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'rummerlab.com',
            pathname: '/images/**',
        },
        {
            protocol: 'https',
            hostname: 'jodierummer.com',
            pathname: '/images/**',
        },
    ],
},
};

export default config;
