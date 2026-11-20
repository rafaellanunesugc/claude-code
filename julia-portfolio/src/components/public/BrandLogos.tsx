import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Só aparece quando tiver pelo menos uma logo cadastrada.
export function BrandLogos({ t }: { t: Translations["brandLogos"] }) {
  if (BRAND_LOGOS.length === 0) return null;

  return (
    <section className="border-y border-ink-900/10 bg-paper py-16">
      <SectionHeading
        eyebrow={t.eyebrow}
        title={`${t.titleBold} ${t.titleItalic}`}
        subtitle={t.subtitle}
        center
        className="px-5"
      />
      <div className="mt-10 overflow-hidden">
        <div className="brand-marquee-track flex w-max items-center gap-8">
          {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="h-32 w-32 flex-none overflow-hidden rounded-full md:h-40 md:w-40">
              <Image src={brand.src} alt={brand.name} width={160} height={160} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .brand-marquee-track { animation: brand-marquee-scroll 32s linear infinite; }
        @keyframes brand-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .brand-marquee-track { animation: none; } }
      `}</style>
    </section>
  );
}
