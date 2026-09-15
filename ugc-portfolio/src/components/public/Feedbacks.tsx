import { FEEDBACK_TYPES } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function Feedbacks({ t }: { t: Translations["feedbacks"] }) {
  return (
    <section id="feedbacks" className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
        {t.eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">
        {t.title}
      </h2>
      <p className="mt-2 max-w-2xl text-ink-700">{t.subtitle}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {t.items.map((item, index) => {
          const type = FEEDBACK_TYPES[index];
          return (
            <div
              key={index}
              className="flex h-56 flex-col justify-between rounded-2xl border border-dashed border-ink-900/20 bg-white p-5"
            >
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "w-fit rounded-full px-3 py-1 text-xs font-semibold",
                    type === "resultado"
                      ? "bg-brand-100 text-brand-700"
                      : "bg-ink-900/10 text-ink-800"
                  )}
                >
                  {type === "resultado" ? t.resultLabel : t.testimonialLabel}
                </span>
                {type === "depoimento" && (
                  <span className="text-xs font-medium text-olive-700">
                    ✓ {t.verifiedLabel}
                  </span>
                )}
              </div>
              <p className="text-sm text-ink-700">{item.caption}</p>
              <span className="text-xs text-ink-700/50">{item.footnote}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
