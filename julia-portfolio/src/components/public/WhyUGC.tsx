import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUGC({ t }: { t: Translations["whyUgc"] }) {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-5">
          <SectionHeading number="08" eyebrow={t.eyebrow} title={t.title} subtitle={t.paragraph} />
        </div>
        <ul className="grid gap-px self-center bg-ink-900/10 sm:grid-cols-2 md:col-span-6 md:col-start-7">
          {t.stats.map((stat, index) => (
            <li key={stat} className="bg-cream p-6">
              <span className="font-display text-sm italic text-wine-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 leading-relaxed text-ink-900">{stat}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
