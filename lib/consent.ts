// lib/consent.ts
type ConsentState = "granted" | "denied";

export function updateConsent(mode: {
  ad_storage: ConsentState;
  analytics_storage: ConsentState;
  ad_user_data: ConsentState;
  ad_personalization: ConsentState;
}) {
  if (typeof window === "undefined") return;
  // window.gtag may not exist yet if script is blocked; guard it.
  const gtag =
    (window as any).gtag ||
    ((...args: any[]) => {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(args);
    });

  gtag("consent", "update", mode);
}

export function grantAll() {
  updateConsent({
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
}

export function denyAll() {
  updateConsent({
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
