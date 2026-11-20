"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/utils";
import type { Translations } from "@/lib/i18n/translations";

const STORAGE_KEY = "julia_popup_shown";

// Cartão que desliza no canto da tela ~1,5s depois de carregar.
// Não aparece de novo na mesma sessão.
export function ContactPopup({ t }: { t: Translations["popup"] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // sessionStorage indisponível — mostra mesmo assim.
    }
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // segue sem persistir.
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label={t.eyebrow}
      className="popup-in fixed bottom-24 left-4 right-4 z-50 border border-ink-900/15 bg-cream p-7 shadow-2xl sm:left-6 sm:right-auto sm:w-[22rem]"
    >
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Fechar"
        className="absolute right-4 top-4 text-ink-700 hover:text-ink-900"
      >
        ✕
      </button>
      <p className="text-[10px] uppercase tracking-[0.28em] text-wine-700">{t.eyebrow}</p>
      <h3 className="mt-3 font-display text-2xl leading-snug text-ink-900">
        {t.title} <em className="text-wine-700">{t.titleHighlight}</em>
      </h3>
      <p className="mt-2 text-sm text-ink-700">{t.subtitle}</p>
      <a
        href={whatsappLink(t.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(false)}
        className="mt-6 block bg-ink-900 px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-cream transition hover:bg-wine-700"
      >
        {t.submit}
      </a>
      <style>{`
        .popup-in { animation: popup-in 0.5s ease-out; }
        @keyframes popup-in { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .popup-in { animation: none; } }
      `}</style>
    </div>
  );
}
