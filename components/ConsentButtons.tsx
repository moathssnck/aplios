// app/_components/ConsentButtons.tsx
"use client";

import { grantAll, denyAll } from "@/lib/consent";
import { loadAnalytics } from "@/lib/analytics";
import { Button } from "./ui/button";

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
      <Button className="bg-blue-500 mx-1" onClick={onAccept}>
        موافقة
      </Button>
      <Button className="bg-red-500" onClick={onDeny}>
        رفض
      </Button>
    </div>
  );
}
