"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Shield, Lock, FileText, Sparkles, Link } from "lucide-react";
import { CookieConsent } from "@/components/cookies";
import { Avatar } from "@/components/ui/avatar";

export default function BioLinks() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [securityOpen, setSecurityOpen] = useState(false);

  const links = [
    {
      icon: Link,
      label: "الدفع السريع",
      href: "#",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Link,
      label: "دفع الفواتير",
      href: "#",
      gradient: "from-pink-600 to-purple-500",
    },
    {
      icon: Link,
      label: "شحن باقات رصيد",
      href: "#",
      gradient: "from-pink-600 to-purple-400",
    },
    {
      icon: Link,
      label: "الخدمات والعروض",
      href: "#",
      gradient: "from-purple-600 to-purple-400",
    },
  ];

  return (
    <>
      <div
        className="min-h-screen bg-background py-12 px-4 relative overflow-hidden"
        dir="rtl"
      >
        <div className="absolute inset-0 gradient-radial pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-chart-2/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="max-w-md mx-auto relative z-10">
          <div className="text-center mb-10 animate-fade-in">
            <div className="relative w-28 h-28 mx-auto mb-6">
              <div className="absolute inset-0 gradient-teal rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="relative w-28 h-28 rounded-full gradient-teal flex items-center justify-center glow-effect">
                <Avatar className="w-24 h-24 text-primary-foreground">
                  <img
                    src="https://uk.farnell.com/wcsstore/ExtendedSitesCatalogAssetStore/cms/asset//images/common/technology/articles/2597671/2597671-5g-applications.jpg"
                    alt=""
                  />
                </Avatar>
              </div>
            </div>
            <h1 className="text-xl font-bold text-foreground mb-3 text-glow">
              استكشف اخر الخدمات واقوى العروض
            </h1>
          </div>

          <div className="space-y-4 mb-10">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="flex justify-between w-full glass-effect rounded-xl p-5 transition-all duration-300 hover:scale-[1.02] border-2 hover:glow-effect group animate-scale-in border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-card-foreground font-semibold text-lg">
                      {link.label}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <FileText className="w-4 h-4" />
              <span>سياسة الخصوصية</span>
            </button>
            <span className="text-border">•</span>
            <button
              onClick={() => setSecurityOpen(true)}
              className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105"
            >
              <Shield className="w-4 h-4" />
              <span>الأمان والحماية</span>
            </button>
          </div>

          <p className="text-center text-muted-foreground text-sm">
            © 2025 جميع الحقوق محفوظة
          </p>
        </div>

        {/* Privacy Policy Dialog */}
        <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
          <DialogContent
            className="max-w-2xl max-h-[80vh] overflow-y-auto glass-effect border-primary/30"
            dir="rtl"
          >
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                سياسة الخصوصية
              </DialogTitle>
              <DialogDescription className="text-right text-base">
                آخر تحديث: 17 أكتوبر 2025
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 text-right leading-relaxed">
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  1. جمع المعلومات
                </h3>
                <p className="text-muted-foreground text-base">
                  نحن نجمع المعلومات التي تقدمها لنا مباشرة عند استخدام خدماتنا،
                  بما في ذلك الاسم وعنوان البريد الإلكتروني ومعلومات الاتصال
                  الأخرى. كما نجمع معلومات تلقائياً حول استخدامك للموقع من خلال
                  ملفات تعريف الارتباط وتقنيات التتبع المماثلة.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  2. استخدام المعلومات
                </h3>
                <p className="text-muted-foreground text-base">
                  نستخدم المعلومات التي نجمعها لتوفير وتحسين خدماتنا، والتواصل
                  معك، وتخصيص تجربتك، وحماية أمن الموقع. لن نشارك معلوماتك
                  الشخصية مع أطراف ثالثة دون موافقتك الصريحة، باستثناء ما يقتضيه
                  القانون.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  3. حماية البيانات
                </h3>
                <p className="text-muted-foreground text-base">
                  نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير
                  المصرح به أو الاستخدام أو الكشف. نستخدم التشفير وبروتوكولات
                  الأمان الصناعية القياسية لحماية بياناتك.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  4. حقوقك
                </h3>
                <p className="text-muted-foreground text-base">
                  لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها.
                  يمكنك أيضاً الاعتراض على معالجة بياناتك أو طلب تقييد المعالجة.
                  للممارسة هذه الحقوق، يرجى الاتصال بنا عبر البريد الإلكتروني.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  5. ملفات تعريف الارتباط
                </h3>
                <p className="text-muted-foreground text-base">
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك
                  التحكم في استخدام ملفات تعريف الارتباط من خلال إعدادات المتصفح
                  الخاص بك. لمزيد من المعلومات، يرجى الاطلاع على سياسة ملفات
                  تعريف الارتباط الخاصة بنا.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  6. التغييرات على السياسة
                </h3>
                <p className="text-muted-foreground text-base">
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي
                  تغييرات جوهرية عن طريق نشر السياسة الجديدة على هذه الصفحة
                  وتحديث تاريخ "آخر تحديث" أعلاه.
                </p>
              </section>
            </div>
            <div className="flex justify-end mt-6">
              <Button
                onClick={() => setPrivacyOpen(false)}
                className="gradient-teal text-primary-foreground hover:opacity-90"
              >
                إغلاق
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Security Dialog */}
        <Dialog open={securityOpen} onOpenChange={setSecurityOpen}>
          <DialogContent
            className="max-w-2xl max-h-[80vh] overflow-y-auto glass-effect border-primary/30"
            dir="rtl"
          >
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                الأمان والحماية
              </DialogTitle>
              <DialogDescription className="text-right text-base">
                التزامنا بحماية بياناتك
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 text-right leading-relaxed">
              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  التشفير والأمان
                </h3>
                <p className="text-muted-foreground text-base">
                  نستخدم بروتوكول SSL/TLS لتشفير جميع البيانات المنقولة بين
                  متصفحك وخوادمنا. هذا يضمن أن معلوماتك الشخصية محمية من
                  الاعتراض أثناء النقل. جميع البيانات الحساسة مشفرة أيضاً عند
                  التخزين.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  أدوار الأمان والصلاحيات
                </h3>
                <div className="space-y-4">
                  <div className="glass-effect border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2 text-lg">
                      المستخدم العادي
                    </h4>
                    <p className="text-muted-foreground">
                      الوصول إلى المحتوى العام، عرض الملف الشخصي، والتفاعل مع
                      الروابط المتاحة.
                    </p>
                  </div>
                  <div className="glass-effect border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2 text-lg">
                      المستخدم المسجل
                    </h4>
                    <p className="text-muted-foreground">
                      جميع صلاحيات المستخدم العادي بالإضافة إلى إمكانية حفظ
                      التفضيلات والوصول إلى المحتوى الحصري.
                    </p>
                  </div>
                  <div className="glass-effect border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2 text-lg">
                      المسؤول
                    </h4>
                    <p className="text-muted-foreground">
                      صلاحيات كاملة لإدارة المحتوى، تعديل الإعدادات، ومراقبة
                      نشاط المستخدمين.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  الحماية من التهديدات
                </h3>
                <ul className="space-y-2 text-muted-foreground text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      حماية من هجمات DDoS باستخدام شبكة توزيع المحتوى (CDN)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      جدار حماية تطبيقات الويب (WAF) لمنع الهجمات الشائعة
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      مراقبة مستمرة للأنشطة المشبوهة والتهديدات الأمنية
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      نسخ احتياطية منتظمة للبيانات لضمان استمرارية الخدمة
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  الإبلاغ عن المشاكل الأمنية
                </h3>
                <p className="text-muted-foreground text-base">
                  إذا اكتشفت ثغرة أمنية أو مشكلة في موقعنا، يرجى الاتصال بنا
                  فوراً على security@zimsapp. نحن نقدر جهود الباحثين الأمنيين
                  ونلتزم بالرد السريع على جميع التقارير.
                </p>
              </section>
            </div>
            <div className="flex justify-end mt-6">
              <Button
                onClick={() => setSecurityOpen(false)}
                className="gradient-teal text-primary-foreground hover:opacity-90"
              >
                إغلاق
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <CookieConsent />
    </>
  );
}
