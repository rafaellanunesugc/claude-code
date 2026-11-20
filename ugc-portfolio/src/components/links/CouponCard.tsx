"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Copy } from "lucide-react";
import type { Coupon } from "@/lib/data/links";

export function CouponCard({ brand, code, logo, discount, href }: Coupon) {
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

  const brandName = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700">
      {brand} ↗
    </a>
  ) : (
    brand
  );

  return (
    <div className="rounded-2xl border border-ink-900/10 bg-white p-4 shadow-soft">
      <div className="flex items-center gap-3">
        {logo ? (
          <span className="relative h-12 w-12 flex-none overflow-hidden rounded-xl border border-ink-900/10 bg-white">
            <Image src={logo} alt={brand} fill sizes="48px" className="object-cover" />
          </span>
        ) : (
          <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-600 font-display text-xl font-bold text-white">
            {brand.charAt(0)}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-full bg-wine-50 px-2.5 py-0.5 text-xs font-bold text-wine-700">{discount ?? "Cupom"}</span>
          <p className="mt-1 font-bold text-ink-900">{brandName}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-dashed border-ink-900/25 bg-cream px-4 py-2.5 font-mono text-sm font-semibold text-ink-900 transition hover:border-brand-500"
        aria-label={`Copiar cupom ${code}`}
      >
        {code}
        {copied ? <Check className="h-4 w-4 text-brand-600" /> : <Copy className="h-4 w-4 text-ink-700" />}
        <span className="font-sans text-xs font-normal text-ink-700/70">{copied ? "copiado!" : "copiar"}</span>
      </button>
    </div>
  );
}
