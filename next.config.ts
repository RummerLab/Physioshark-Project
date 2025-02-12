import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'rummerlab.com',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: '*.rummerlab.com',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'jodierummer.com',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'api.dicebear.com',
            pathname: '/**',
        },
    ],
  },
  redirects: async () => [
      {
          source: '/home',
          destination: '/',
          permanent: true,
      },
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
