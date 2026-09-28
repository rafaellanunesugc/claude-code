"use client";

import { useEffect, useState } from "react";
import type { Translations } from "@/lib/i18n/translations";

const STORAGE_KEY = "ugc_bf_banner_dismissed_v1";

export function BlackFridayBanner({ t }: { t: Translations["blackFridayBanner"] }) {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(window.localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  function handleDismiss() {
    setDismissed(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // localStorage indisponível — só não persiste entre visitas.
    }
  }

  if (dismissed) return null;

  return (
    <div className="relative bg-ink-900 px-4 py-3 text-center text-sm text-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-1 pr-6">
        <span className="font-medium">{t.text}</span>
        <a
          href="#contato"
          className="inline-flex flex-none items-center rounded-full bg-brand-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-brand-700"
        >
          {t.cta}
        </a>
      </div>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Fechar"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 transition hover:text-white"
      >
        ✕
      </button>
    </div>
  );
}
