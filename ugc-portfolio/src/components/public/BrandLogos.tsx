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

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {BRAND_LOGOS.map((brand) => (
            <div
              key={brand.name}
              className="flex h-24 w-24 items-center justify-center rounded-full bg-white p-4"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
