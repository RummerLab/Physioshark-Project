import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'",
  },
  {
    key: "Content-Security-Policy-Report-Only",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://rummerlab.com https://*.rummerlab.com https://jodierummer.com https://api.dicebear.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const config: NextConfig = {
  poweredByHeader: false,
  images: {
    deviceSizes: [480, 768, 1080, 1440],
    imageSizes: [320, 480, 640],
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
  headers: async () => [
    {
      source: "/:path*",
      headers: securityHeaders,
    },
  ],
};

export default config;
