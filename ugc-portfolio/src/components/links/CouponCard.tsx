"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import type { Coupon } from "@/lib/data/links";

// Linha de cupom no estilo editorial do link da bio: número, marca, desconto e
// o código num botão que copia.
export function CouponCard({ n, brand, code, discount, href }: Coupon & { n: number }) {
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
    <div className="border-b border-duo/20 py-5">
      <div className="flex items-baseline gap-4">
        <span className="text-sm text-duo/60">{String(n).padStart(2, "0")}</span>
        <div className="min-w-0 flex-1">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold">
              {brand} <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <p className="font-bold">{brand}</p>
          )}
          <p className="text-xs text-duo/60">{discount ?? "Cupom de desconto"}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={copy}
        className="mt-4 flex w-full items-center justify-between border border-duo/30 px-4 py-3 text-left transition hover:bg-duo hover:text-duo-off"
        aria-label={`Copiar cupom ${code}`}
      >
        <span className="font-mono text-sm font-semibold">{code}</span>
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
          {copied ? "Copiado" : "Copiar"}
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </span>
      </button>
    </div>
  );
}
