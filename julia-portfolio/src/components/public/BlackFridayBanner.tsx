"use client";

import { useEffect, useState } from "react";
import type { Translations } from "@/lib/i18n/translations";

const STORAGE_KEY = "julia_banner_dismissed_v1";

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
    <div className="relative bg-wine-100 px-10 py-2.5 text-center text-xs text-ink-900 sm:text-sm">
      <span>{t.text}</span>{" "}
      <a href="#contato" className="font-semibold underline underline-offset-4 hover:text-wine-700">
        {t.cta}
      </a>
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Fechar"
        className="absolute right-3 top-1/2 -translate-y-1/2 px-1 text-ink-700 hover:text-ink-900"
      >
        ✕
      </button>
    </div>
  );
}
