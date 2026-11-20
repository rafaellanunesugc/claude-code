"use client";

import { useState } from "react";
import Image from "next/image";
import { FEEDBACK_TYPES } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <section id="feedbacks" className="bg-white">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-10 md:py-28">
        <SectionHeading number="07" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} center />

        <div className={cn("mt-14", item.image && "grid gap-10 text-left md:grid-cols-[0.6fr_1fr] md:items-center")}>
          {item.image && (
            <div className="relative aspect-[9/13] w-full overflow-hidden">
              <Image src={item.image} alt={item.footnote} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover" />
            </div>
          )}
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-olive-700">
              {type === "resultado" ? t.resultLabel : `${t.testimonialLabel} · ${t.verifiedLabel}`}
            </p>
            <span className="mt-4 block font-display text-7xl leading-none text-wine-300" aria-hidden>
              “
            </span>
            <blockquote className="mx-auto -mt-4 max-w-3xl font-display text-2xl italic leading-snug text-ink-900 md:text-3xl">
              {item.caption}
            </blockquote>
            <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-ink-700">{item.footnote}</p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm">
          <button type="button" onClick={() => goTo(index - 1)} aria-label="Anterior" className="text-ink-700 hover:text-wine-700">
            ←
          </button>
          <span className="font-display italic text-ink-700">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button type="button" onClick={() => goTo(index + 1)} aria-label="Próximo" className="text-ink-700 hover:text-wine-700">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
