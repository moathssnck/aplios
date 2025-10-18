// lib/analytics.ts
export async function loadAnalytics() {
  if (typeof window === "undefined") return null; // SSR guard

  // Dynamically import to keep analytics out of the server bundle
  const [
    { getAnalytics, isSupported, setAnalyticsCollectionEnabled },
    { app },
  ] = await Promise.all([import("firebase/analytics"), import("./firebase")]);

  const supported = await isSupported().catch(() => false);
  if (!supported) return null; // e.g., no cookies / unsupported environment

  const analytics = getAnalytics(app);

  // Start with collection disabled until user consents (optional, but recommended)
  setAnalyticsCollectionEnabled(analytics, false);

  return analytics;
}
