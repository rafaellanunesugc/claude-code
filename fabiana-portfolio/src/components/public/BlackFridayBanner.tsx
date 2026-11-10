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

  const items = [t.text, t.text, t.text];

  return (
    <div className="flex items-center gap-3 bg-ink-900 py-2.5 pl-4 pr-3 text-sm text-white">
      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="bf-marquee-track flex w-max items-center gap-10 whitespace-nowrap font-medium">
          {[...items, ...items].map((text, index) => (
            <span key={index} className="flex items-center gap-10">
              {text}
              <span className="text-brand-400">✦</span>
            </span>
          ))}
        </div>
      </div>

      <a
        href="#contato"
        className="inline-flex flex-none items-center whitespace-nowrap rounded-full bg-brand-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-brand-700"
      >
        {t.cta}
      </a>

      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Fechar"
        className="flex-none text-white/60 transition hover:text-white"
      >
        ✕
      </button>

      <style>{`
        .bf-marquee-track {
          animation: bf-marquee-scroll 26s linear infinite;
        }
        @keyframes bf-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bf-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
