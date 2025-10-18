// app/_components/ConsentButtons.tsx
"use client";

import { grantAll, denyAll } from "@/lib/consent";
import { loadAnalytics } from "@/lib/analytics";

export default function ConsentButtons() {
  const onAccept = async () => {
    grantAll();

    // Enable Firebase analytics collection after consent
    const mod = await import("firebase/analytics");
    const analytics = await loadAnalytics();
    if (analytics) mod.setAnalyticsCollectionEnabled(analytics, true);
  };

  const onDeny = async () => {
    denyAll();

    const mod = await import("firebase/analytics");
    const analytics = await loadAnalytics();
    if (analytics) mod.setAnalyticsCollectionEnabled(analytics, false);
  };

  return (
    <div>
      <button onClick={onAccept}>Accept</button>
      <button onClick={onDeny}>Deny</button>
    </div>
  );
}
