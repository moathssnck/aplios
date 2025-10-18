// app/_components/FirebaseAnalytics.tsx
"use client";

import { useEffect, useRef } from "react";
import { loadAnalytics } from "@/lib/analytics";

export default function FirebaseAnalytics() {
  const inited = useRef(false);

  useEffect(() => {
    if (inited.current) return;
    inited.current = true;

    // Fire and forget; handles unsupported envs and avoids SSR
    loadAnalytics();
  }, []);

  return null;
}
