import Image from "next/image";
import { BRAND_LOGOS } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";

export function BrandLogos({ t }: { t: Translations["brandLogos"] }) {
  return (
    <section className="bg-ink-900 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-brand-400">
          {t.eyebrow}
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-white md:text-3xl">
          {t.titleBold} <span className="font-display italic text-white/70">{t.titleItalic}</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-white/60">
          {t.subtitle}
        </p>

        <div className="mt-8 overflow-hidden">
          <div className="brand-marquee-track flex w-max items-center gap-5">
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="h-32 w-32 flex-none overflow-hidden rounded-full md:h-36 md:w-36"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={144}
                  height={144}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .brand-marquee-track { animation: brand-marquee-scroll 28s linear infinite; }
        @keyframes brand-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .brand-marquee-track { animation: none; } }
      `}</style>
    </section>
  );
}
