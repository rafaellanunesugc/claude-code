import Image from "next/image";
import type { Translations } from "@/lib/i18n/translations";

function RichText({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-bold text-wine-700">
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
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
        {t.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">
        {t.title}
      </h2>

      <div className="mt-8 grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/about.jpg"
              alt="Rafa Nunes"
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {t.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-ink-900/10 bg-white p-3 shadow-sm"
              >
                <p className="font-bold text-wine-700">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-ink-700/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="space-y-4 text-ink-700">
            {t.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                <RichText text={paragraph} />
              </p>
            ))}
          </div>

          <p className="mt-6 border-l-2 border-wine-600 pl-4 text-xl italic leading-relaxed text-wine-700">
            {t.commitment}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {t.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-wine-50 px-4 py-2 text-center text-sm font-semibold text-wine-700"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
