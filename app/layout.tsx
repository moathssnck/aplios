// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";
export const metadata: Metadata = {
  title: "اخر الخدمات واقوى العروض",
  description: "استكشف اخر الخدمات واقوى العروض  ",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-B1CQC966C2";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* 1) Consent defaults BEFORE anything else */}
        <Script id="consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            // Consent Mode v2 defaults (deny until user acts)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>

        {/* 2) Load gtag.js */}
        {GA_ID && (
          <>
            <Script
              id="gtag-loader"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-config" strategy="afterInteractive">
              {`
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        {children}
        <FirebaseAnalytics />
      </body>
    </html>
  );
}
