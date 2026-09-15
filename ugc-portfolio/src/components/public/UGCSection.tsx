import type { Translations } from "@/lib/i18n/translations";

export function UGCSection({ t }: { t: Translations["ugc"] }) {
  return (
    <section id="ugc" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
          {t.eyebrow}
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-bold text-ink-900 md:text-3xl">
          {t.title}
        </h2>
        <p className="mt-3 max-w-2xl text-ink-700">{t.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {t.formats.map((format) => (
            <span
              key={format}
              className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-brand-700"
            >
              {format}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
