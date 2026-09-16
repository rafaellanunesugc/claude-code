"use client";

import { useEffect, useState } from "react";
import { translations, type Locale } from "@/lib/i18n/translations";
import type { PortfolioVideo } from "@/lib/data/placeholders";
import { SiteHeader } from "@/components/public/SiteHeader";
import { Hero } from "@/components/public/Hero";
import { TagMarquee } from "@/components/public/TagMarquee";
import { BrandLogos } from "@/components/public/BrandLogos";
import { AboutMe } from "@/components/public/AboutMe";
import { InfluencerSection } from "@/components/public/InfluencerSection";
import { UGCSection } from "@/components/public/UGCSection";
import { WorkWithMe } from "@/components/public/WorkWithMe";
import { Portfolio } from "@/components/public/Portfolio";
import { Feedbacks } from "@/components/public/Feedbacks";
import { FAQ } from "@/components/public/FAQ";
import { WhyUGC } from "@/components/public/WhyUGC";
import { ContactForm } from "@/components/public/ContactForm";
import { SiteFooter } from "@/components/public/SiteFooter";
import { ContactPopup } from "@/components/public/ContactPopup";
import { FloatingWhatsApp } from "@/components/public/FloatingWhatsApp";

const STORAGE_KEY = "ugc_locale";

export function PageContent({ videos }: { videos: PortfolioVideo[] }) {
  const [locale, setLocale] = useState<Locale>("pt");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "pt" || saved === "en") setLocale(saved);
    } catch {
      // localStorage indisponível — mantém o padrão.
    }
  }, []);

  function handleChangeLocale(next: Locale) {
    setLocale(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage indisponível — só não persiste entre visitas.
    }
  }

  const t = translations[locale];
  const followersValue = t.hero.stats[1]?.value ?? "";

  return (
    <main lang={locale}>
      <SiteHeader t={t.nav} locale={locale} onChangeLocale={handleChangeLocale} />
      <Hero t={t.hero} />
      <TagMarquee tags={t.marquee} />
      <BrandLogos t={t.brandLogos} />
      <AboutMe t={t.about} />
      <InfluencerSection t={t.influencer} followers={followersValue} />
      <UGCSection t={t.ugc} />
      <WorkWithMe t={t.work} />
      <Portfolio t={t.portfolio} videos={videos} />
      <Feedbacks t={t.feedbacks} />
      <FAQ t={t.faq} />
      <WhyUGC t={t.whyUgc} />
      <ContactForm t={t.contact} />
      <SiteFooter t={t.footer} />
      <ContactPopup t={t.popup} />
      <FloatingWhatsApp />
    </main>
  );
}
