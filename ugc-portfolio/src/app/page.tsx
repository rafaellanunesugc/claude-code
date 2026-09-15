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

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <TagMarquee />
      <BrandLogos />
      <AboutMe />
      <InfluencerSection />
      <UGCSection />
      <WorkWithMe />
      <Portfolio />
      <Feedbacks />
      <FAQ />
      <WhyUGC />
      <ContactForm />
      <SiteFooter />
    </main>
  );
}
