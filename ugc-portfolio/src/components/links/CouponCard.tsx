"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Props = { brand: string; discount: string; code: string; href: string };

export function CouponCard({ brand, discount, code, href }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Navegadores sem acesso à área de transferência: o código continua visível.
    }
  }

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-dashed border-wine-300 bg-white p-4 shadow-soft">
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-wine-600">{discount}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 block truncate font-semibold text-ink-900 hover:text-brand-700"
        >
          {brand} ↗
        </a>
      </div>
      <button
        type="button"
        onClick={copy}
        className="flex flex-none items-center gap-2 rounded-xl bg-blush-100 px-3 py-2 font-mono text-sm font-semibold text-ink-900 transition hover:bg-blush-200"
        aria-label={`Copiar cupom ${code}`}
      >
        {code}
        {copied ? <Check className="h-4 w-4 text-brand-600" /> : <Copy className="h-4 w-4 text-ink-700" />}
      </button>
    </div>
  );
}
