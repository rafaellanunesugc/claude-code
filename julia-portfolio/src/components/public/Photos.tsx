import Image from "next/image";
import { PORTFOLIO_PHOTOS } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Só aparece quando tiver pelo menos uma foto cadastrada.
export function Photos({ t }: { t: Translations["photos"] }) {
  if (PORTFOLIO_PHOTOS.length === 0) return null;

  return (
    <section id="fotos" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        <div className="mt-12 columns-2 gap-4 sm:columns-3 md:columns-4 [&>*]:mb-4">
          {PORTFOLIO_PHOTOS.map((photo) => (
            <div key={photo.src} className="relative w-full overflow-hidden">
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
      </div>
    </section>
  );
}
