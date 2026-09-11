import { SiteHeader } from "@/components/public/SiteHeader";
import { Hero } from "@/components/public/Hero";
import { Niches } from "@/components/public/Niches";
import { Portfolio } from "@/components/public/Portfolio";
import { SocialProof } from "@/components/public/SocialProof";
import { HowToHire } from "@/components/public/HowToHire";
import { ContactForm } from "@/components/public/ContactForm";
import { SiteFooter } from "@/components/public/SiteFooter";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Niches />
      <Portfolio />
      <SocialProof />
      <HowToHire />
      <ContactForm />
      <SiteFooter />
    </main>
  );
}
