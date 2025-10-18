"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 p-4 z-50 animate-in slide-in-from-bottom-5"
      dir="rtl"
    >
      <Card className="max-w-2xl mx-auto bg-card border-border shadow-lg">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                نستخدم ملفات تعريف الارتباط
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك على موقعنا،
                وتحليل حركة المرور، وتخصيص المحتوى. باستخدامك لهذا الموقع، فإنك
                توافق على استخدامنا لملفات تعريف الارتباط وفقاً لسياسة الخصوصية
                الخاصة بنا.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={acceptCookies}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  قبول جميع ملفات تعريف الارتباط
                </Button>
                <Button onClick={declineCookies} variant="outline">
                  رفض
                </Button>
              </div>
            </div>
            <button
              onClick={declineCookies}
              className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
