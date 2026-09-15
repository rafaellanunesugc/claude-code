import type { Translations } from "@/lib/i18n/translations";

export function AboutMe({ t }: { t: Translations["about"] }) {
  return (
    <section id="sobre" className="mx-auto max-w-4xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
        {t.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">
        {t.title}
      </h2>

      <div className="mt-6 space-y-4 text-ink-700">
        {t.paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

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
    </section>
  );
}
