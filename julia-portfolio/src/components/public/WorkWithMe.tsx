import { whatsappLink } from "@/lib/utils";
import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WorkWithMe({ t }: { t: Translations["work"] }) {
  return (
    <section id="trabalhar-comigo" className="bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <SectionHeading
          number="06"
          eyebrow={t.eyebrow}
          title={`${t.formats.length} ${t.titleSuffix}`}
          subtitle={t.localNote || undefined}
          light
        />

        {/* Cada serviço é uma linha que abre o WhatsApp com mensagem pronta. */}
        <ul className="mt-14 border-t border-cream/15">
          {t.formats.map((format, index) => (
            <li key={format.title} className="border-b border-cream/15">
              <a
                href={whatsappLink(`${t.whatsappIntro} ${format.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-3 py-7 transition md:grid-cols-[4rem_1fr_1.3fr_auto] md:items-baseline md:gap-8"
              >
                <span className="font-display text-sm italic text-wine-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-2xl text-cream transition group-hover:translate-x-2 md:text-3xl">
                  {format.title}
                </span>
                <span className="text-sm leading-relaxed text-cream/60">{format.description}</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-wine-300 transition group-hover:text-cream">
                  {t.ctaLabel} →
                </span>
              </a>
            </li>
          ))}
        </ul>

        <dl className="mt-12 grid gap-8 text-cream sm:grid-cols-3">
          {[
            [t.deliveryLabels.prazoPadrao, t.delivery.prazoPadrao],
            [t.deliveryLabels.prazoExpress, t.delivery.prazoExpress],
            [t.deliveryLabels.nota, t.delivery.emiteNota],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-[10px] uppercase tracking-[0.25em] text-cream/50">{label}</dt>
              <dd className="mt-2 text-sm text-cream/90">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
