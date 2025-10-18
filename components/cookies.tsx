// components/CookieConsent.tsx
"use client";

import { useEffect, useState } from "react";
import { grantAll, denyAll } from "@/lib/consent";
import ConsentButtons from "./ConsentButtons";

const STORAGE_KEY = "cookie_consent_v2"; // your key

type ConsentChoice = "granted" | "denied" | "unset";

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>("unset");

  useEffect(() => {
    const saved =
      (localStorage.getItem(STORAGE_KEY) as ConsentChoice | null) || "unset";
    setChoice(saved);
    if (saved === "granted") grantAll();
    if (saved === "denied") denyAll();
    if (saved === "unset") setOpen(true);
  }, []);

  const acceptAll = () => {
    grantAll();
    localStorage.setItem(STORAGE_KEY, "granted");
    setChoice("granted");
    setOpen(false);
  };

  const rejectAll = () => {
    denyAll();
    localStorage.setItem(STORAGE_KEY, "denied");
    setChoice("denied");
    setOpen(false);
  };

  // Optional button to reopen banner from footer/menu
  // export this or render a small "Privacy settings" somewhere:
  // <button onClick={()=>setOpen(true)}>إدارة الخصوصية</button>

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-3xl m-3 rounded-xl p-4 glass-effect border">
        <p className="text-sm">
          نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتك، وتخصيص المحتوى
          والإعلانات، وتحليل حركة المرور على موقعنا. يمكنك الموافقة على جميع
          ملفات تعريف الارتباط أو إدارة تفضيلاتك. بالنقر على "أوافق على الكل"،
          فإنك توافق على استخدام ملفات تعريف الارتباط نستخدم ملفات تعريف
          الارتباط لتحسين التجربة وقياس الأداء. اختر موافقتك.
        </p>
        <div className="mt-3 flex gap-2 justify-end">
          <ConsentButtons setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}
