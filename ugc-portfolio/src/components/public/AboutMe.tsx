import Image from "next/image";
import type { Translations } from "@/lib/i18n/translations";

function RichText({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-bold text-brand-700">
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
    <section id="sobre" className="bg-cream py-16">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
          {t.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">
          {t.title}
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {t.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-ink-900/10 bg-white p-3 shadow-sm"
            >
              <p className="font-bold text-brand-700">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-ink-700/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4 text-ink-700">
          {t.paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        <p className="mt-6 border-l-2 border-brand-600 pl-4 text-xl italic leading-relaxed text-brand-700">
          {t.commitment}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {t.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-brand-700"
            >
              {chip}
            </span>
          ))}
        </div>

        <a
          href="/#creator"
          className="group mt-4 flex items-center gap-3 rounded-2xl bg-wine-900 px-4 py-3.5 transition hover:-translate-y-0.5"
        >
          <Image
            src="/images/cria-logo.png"
            alt="CRIA"
            width={140}
            height={64}
            className="h-7 w-auto flex-none"
          />
          <span className="text-sm leading-snug text-cream/90">
            {t.criaBadge}
          </span>
        </a>
      </div>
    </section>
  );
}
