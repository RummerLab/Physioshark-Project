'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect, Suspense } from 'react';

// Define pageview function
const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    transport_type: 'beacon',
    debug_mode: process.env.NODE_ENV === 'development',
  });
};

function GoogleAnalyticsContent({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + searchParams.toString();
      pageview(GA_MEASUREMENT_ID, url);
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'granted'
            });
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              transport_type: 'beacon',
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });
          `,
        }}
      />
    </>
  );
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <Suspense>
      <GoogleAnalyticsContent GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
    </Suspense>
  );
} 