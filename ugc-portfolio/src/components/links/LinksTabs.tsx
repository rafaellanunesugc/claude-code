"use client";

import { useEffect, useState, type ReactNode } from "react";

type Tab = "links" | "setup";

// Abas "Links" e "Meu setup" da página principal. As duas ficam no HTML (bom
// pro Google); só a ativa aparece. O endereço com #setup abre direto no setup.
export function LinksTabs({
  links,
  setup,
  setupCount,
}: {
  links: ReactNode;
  setup: ReactNode;
  setupCount: number;
}) {
  const [tab, setTab] = useState<Tab>("links");

  useEffect(() => {
    function syncWithHash() {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const next: Tab = id === "setup" ? "setup" : "links";
      setTab(next);
      // Links como "Sou creator" apontam pra seções da aba Links: espera ela
      // aparecer e então rola até a seção.
      if (next === "links") {
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
      }
    }
    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, []);

  function choose(next: Tab) {
    setTab(next);
    history.replaceState(null, "", next === "setup" ? "#setup" : window.location.pathname);
  }

  const base = "flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-bold uppercase tracking-[0.14em] transition";
  const active = "bg-ink-900 text-white";
  const idle = "text-ink-700 hover:text-ink-900";

  return (
    <>
      <div id="setup" className="sticky top-3 z-30 mx-auto max-w-md scroll-mt-3 px-4">
        <div role="tablist" className="flex gap-1 rounded-full border border-ink-900/10 bg-white p-1.5 shadow-soft">
          <button type="button" role="tab" aria-selected={tab === "links"} onClick={() => choose("links")} className={`${base} ${tab === "links" ? active : idle}`}>
            Links
          </button>
          <button type="button" role="tab" aria-selected={tab === "setup"} onClick={() => choose("setup")} className={`${base} ${tab === "setup" ? active : idle}`}>
            Meu setup
            <span className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs ${tab === "setup" ? "bg-white text-ink-900" : "bg-blush-100 text-ink-900"}`}>
              {setupCount}
            </span>
          </button>
        </div>
      </div>

      <div className={tab === "links" ? "mt-6" : "hidden"}>{links}</div>
      <div className={tab === "setup" ? "mt-6" : "hidden"}>{setup}</div>
    </>
  );
}
