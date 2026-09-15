"use client";

import { useRef } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  MapPin,
  Megaphone,
  MessageCircle,
  Play,
  ShoppingBag,
  Users,
  Video,
} from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";

const ICONS = [
  Megaphone,
  Play,
  Users,
  Lightbulb,
  MessageCircle,
  MapPin,
  ShoppingBag,
  Video,
  Calendar,
];

export function WorkWithMe({ t }: { t: Translations["work"] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCards(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 280) + 16;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <section id="trabalhar-comigo" className="mx-auto max-w-6xl px-5 py-16">
      <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {t.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-ink-900 md:text-3xl">
          {t.formats.length} <em className="text-wine-700">{t.titleSuffix}</em>
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-700">{t.scrollHint}</p>
        <p className="mt-1 max-w-2xl text-sm text-ink-700/70">{t.localNote}</p>
      </div>

      <div className="relative mt-6">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {t.formats.map((format, index) => {
            const Icon = ICONS[index % ICONS.length];
            const message = encodeURIComponent(
              `Olá Rafa! Quero saber mais sobre: ${format.title}`
            );
            return (
              <div
                key={format.title}
                data-card
                className="w-64 flex-none snap-start rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft sm:w-72"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-wine-50 px-2 py-0.5 text-xs font-bold text-wine-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-ink-900">{format.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{format.description}</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-4 py-2 text-xs font-semibold text-ink-900 transition hover:border-brand-500 hover:text-brand-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.ctaLabel}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/15 bg-white text-ink-900 hover:bg-ink-900/5"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Próximo"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/15 bg-white text-ink-900 hover:bg-ink-900/5"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft sm:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase text-ink-700/60">
            {t.deliveryLabels.prazoPadrao}
          </p>
          <p className="mt-1 text-sm text-ink-900">{t.delivery.prazoPadrao}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-ink-700/60">
            {t.deliveryLabels.prazoExpress}
          </p>
          <p className="mt-1 text-sm text-ink-900">{t.delivery.prazoExpress}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-ink-700/60">
            {t.deliveryLabels.nota}
          </p>
          <p className="mt-1 text-sm text-ink-900">{t.delivery.emiteNota}</p>
        </div>
      </div>
    </section>
  );
}
