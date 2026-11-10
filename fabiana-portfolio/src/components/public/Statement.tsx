import type { Translations } from "@/lib/i18n/translations";

export function Statement({ t }: { t: Translations["statement"] }) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-14 text-center">
      <p className="text-2xl font-extrabold uppercase tracking-tight text-ink-900 md:text-4xl">
        {t.line1}
      </p>
      <p className="mt-1 font-display text-2xl italic text-wine-700 md:text-4xl">
        {t.line2}
      </p>
    </section>
  );
}
