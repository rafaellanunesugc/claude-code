"use client";

import { useState } from "react";
import { FEEDBACK_TYPES } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function Feedbacks({ t }: { t: Translations["feedbacks"] }) {
  const [index, setIndex] = useState(0);
  const total = t.items.length;
  const item = t.items[index];
  const type = FEEDBACK_TYPES[index];

  function goTo(next: number) {
    setIndex(((next % total) + total) % total);
  }

  return (
    <section id="feedbacks" className="mx-auto max-w-4xl px-5 py-16">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-wine-700">
            {t.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">{t.title}</h2>
          <p className="mt-2 max-w-lg text-ink-700">{t.subtitle}</p>
        </div>

        <div className="flex flex-none gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition hover:bg-ink-900/5"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próximo"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition hover:bg-ink-900/5"
          >
            →
          </button>
        </div>
      </div>

      <div className="mt-8 min-h-[12rem] rounded-2xl border border-dashed border-ink-900/20 bg-white p-6">
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
        <p className="mt-4 text-ink-700">{item.caption}</p>
        <span className="mt-4 block text-xs text-ink-700/50">{item.footnote}</span>
      </div>

      <div className="mt-4 text-sm font-medium text-ink-700/60">
        {String(index + 1).padStart(2, "0")} — {String(total).padStart(2, "0")}
      </div>
    </section>
  );
}
