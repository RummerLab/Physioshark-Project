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
  redirects: async () => [
      {
          source: '/projects',
          destination: '/#projects',
          permanent: true,
      },
      {
          source: '/publications',
          destination: '/#publications',
          permanent: true,
      },
      {
          source: '/contact',
          destination: '/#contact',
          permanent: true,
      },
      {
          source: '/physioshark',
          destination: '/',
          permanent: true,
      },
      {
          source: '/our-team',
          destination: '/#team',
          permanent: true,
      },
      {
          source: '/our-mission',
          destination: '/#our-mission',
          permanent: true,
      },
  ],
};




export default config;
