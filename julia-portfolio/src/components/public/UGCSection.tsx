import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function UGCSection({ t }: { t: Translations["ugc"] }) {
  return (
    <section id="ugc" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-5">
          <SectionHeading number="04" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />
        </div>
        <ol className="md:col-span-6 md:col-start-7">
          {t.formats.map((format, index) => (
            <li
              key={format}
              className="flex items-baseline gap-6 border-b border-ink-900/15 py-5 first:border-t"
            >
              <span className="font-display text-sm italic text-wine-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl text-ink-900 md:text-3xl">{format}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
