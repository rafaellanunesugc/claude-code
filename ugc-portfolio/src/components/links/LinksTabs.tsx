"use client";

import { useEffect, useState } from "react";

// Abas "Links" / "Meu setup" do link da bio.
// O endereço rafanunes.site/#setup abre direto na aba do setup (bom pra mandar no story).
// Os botões "Sou creator" / "Sou marca" (#creator, #marca) voltam pra aba Links e rolam até a seção.
export function LinksTabs({
  links,
  setup,
  setupCount,
}: {
  links: React.ReactNode;
  setup: React.ReactNode;
  setupCount: number;
}) {
  const [tab, setTab] = useState<"links" | "setup">("links");

  useEffect(() => {
    function syncWithHash() {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      if (hash === "setup") {
        setTab("setup");
        return;
      }
      setTab("links");
      // Espera a aba Links aparecer antes de rolar até a seção pedida.
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }));
    }
    syncWithHash();
    window.addEventListener("hashchange", syncWithHash);
    return () => window.removeEventListener("hashchange", syncWithHash);
  }, []);

  function choose(next: "links" | "setup") {
    setTab(next);
    history.replaceState(null, "", next === "setup" ? "#setup" : window.location.pathname);
  }

  const base = "flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold uppercase tracking-[0.18em] transition";

  return (
    <>
      <div id="setup" className="sticky top-2 z-20 mx-auto max-w-md scroll-mt-2 px-4">
        <div role="tablist" className="flex gap-1 rounded-full border border-ink-900/10 bg-white/95 p-1.5 shadow-soft backdrop-blur">
          <button
            role="tab"
            aria-selected={tab === "links"}
            onClick={() => choose("links")}
            className={`${base} ${tab === "links" ? "bg-ink-900 text-white" : "text-ink-700/70 hover:text-ink-900"}`}
          >
            Links
          </button>
          <button
            role="tab"
            aria-selected={tab === "setup"}
            onClick={() => choose("setup")}
            className={`${base} ${tab === "setup" ? "bg-ink-900 text-white" : "text-ink-700/70 hover:text-ink-900"}`}
          >
            Meu setup
            <span
              className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1.5 text-xs tracking-normal ${
                tab === "setup" ? "bg-blush-200 text-ink-900" : "bg-wine-50 text-wine-700"
              }`}
            >
              {setupCount}
            </span>
          </button>
        </div>
      </div>

      <div hidden={tab !== "links"}>{links}</div>
      <div hidden={tab !== "setup"}>{setup}</div>
    </>
  );
}
