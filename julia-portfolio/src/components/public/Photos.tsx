import Image from "next/image";
import { PORTFOLIO_PHOTOS } from "@/lib/data/placeholders";
import { Star } from "@/components/ui/Star";
import type { Translations } from "@/lib/i18n/translations";

export function Photos({ t }: { t: Translations["photos"] }) {
  if (PORTFOLIO_PHOTOS.length === 0) return null;

  return (
    <section id="fotos" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900 md:text-3xl">
        <Star className="h-5 w-5 flex-none text-brand-500 md:h-6 md:w-6" />
        {t.title}
      </h2>
      <p className="mt-2 max-w-2xl text-ink-700">{t.subtitle}</p>

      <div className="mt-8 columns-2 gap-4 sm:columns-3 md:columns-4 [&>*]:mb-4">
        {PORTFOLIO_PHOTOS.map((photo) => (
          <div
            key={photo.src}
            className="relative w-full overflow-hidden rounded-2xl border border-ink-900/10 shadow-soft"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={750}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
