import Image from "next/image";
import { SITE_NAME } from "@/lib/site";
import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "@/components/ui/SectionHeading";

function RichText({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-ink-900">
            {part}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

export function AboutMe({ t }: { t: Translations["about"] }) {
  return (
    <section id="sobre" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeading number="01" eyebrow={t.eyebrow} title={t.title} />

            <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink-700">
              {t.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>

            <p className="mt-10 font-display text-2xl italic leading-snug text-wine-700 md:text-3xl">
              “{t.commitment}”
            </p>

            <p className="mt-8 text-[11px] uppercase tracking-[0.28em] text-ink-700">
              {t.chips.join("  ·  ")}
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt={SITE_NAME}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-ink-900/15 md:grid-cols-4">
          {t.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-6 ${index % 2 === 1 ? "pl-6" : ""} ${index > 0 ? "md:border-l md:border-ink-900/15 md:pl-6" : ""}`}
            >
              <dt className="text-[11px] uppercase tracking-[0.2em] text-ink-700/70">{stat.label}</dt>
              <dd className="mt-2 font-display text-2xl text-ink-900 md:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
