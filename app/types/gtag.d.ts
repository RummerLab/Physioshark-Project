interface Window {
  gtag: (
    command: 'config' | 'event' | 'js',
    targetId: string,
    config?: {
      page_path?: string;
      transport_url?: string;
      first_party_collection?: boolean;
      anonymize_ip?: boolean;
      allow_google_signals?: boolean;
      allow_ad_personalization_signals?: boolean;
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
} 