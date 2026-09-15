import type { Translations } from "@/lib/i18n/translations";

export function WhyUGC({ t }: { t: Translations["whyUgc"] }) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
        {t.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">
        {t.title}
      </h2>
      <p className="mt-3 max-w-2xl text-ink-700">{t.paragraph}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {t.stats.map((stat) => (
          <div
            key={stat}
            className="flex items-start gap-3 rounded-2xl border border-ink-900/10 bg-white p-4 shadow-sm"
          >
            <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
              ✓
            </span>
            <p className="text-sm text-ink-700">{stat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
