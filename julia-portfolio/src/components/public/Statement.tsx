import type { Translations } from "@/lib/i18n/translations";

export function Statement({ t }: { t: Translations["statement"] }) {
  return (
    <section className="bg-ink-900">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="font-display text-4xl leading-tight text-cream md:text-6xl">
          {t.line1}
        </p>
        <p className="mt-2 font-display text-4xl italic leading-tight text-wine-300 md:ml-24 md:text-6xl">
          {t.line2}
        </p>
      </div>
    </section>
  );
}
