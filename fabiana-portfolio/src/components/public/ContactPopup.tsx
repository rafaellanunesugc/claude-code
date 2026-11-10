"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/utils";
import type { Translations } from "@/lib/i18n/translations";

const STORAGE_KEY = "ugc_popup_shown";

export function ContactPopup({ t }: { t: Translations["popup"] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // localStorage indisponível — mostra o popup mesmo assim.
    }

    const timer = setTimeout(() => setOpen(true), 1200);
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute right-4 top-4 text-ink-700 hover:text-ink-900"
        >
          ✕
        </button>

        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {t.eyebrow}
        </p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-ink-900">
          {t.title} <em className="not-italic text-wine-700">{t.titleHighlight}</em>
        </h3>
        <p className="mt-1 text-sm text-ink-700">{t.subtitle}</p>

        <a
          href={whatsappLink(t.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-5 flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          {t.submit}
        </a>
      </div>
    </div>
  );
}
