import type { CSSProperties, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/lib/data/links";

// Peças do estilo editorial (duas cores, caixa alta, linhas finas) usadas no
// link da bio e na página da mentoria.
// O link da bio usa só duas cores: a principal (textos, linhas, botões, faixas)
// e um creme (fundo). Para trocar o tema, mude THEME. Valores em R G B.
export const THEMES = {
  marrom: { main: "58 40 25", off: "244 236 224" }, // café #3A2819 + creme off #F4ECE0 (link e portfólio)
  bordo: { main: "92 15 36", off: "250 246 240" }, // bordô escuro #5C0F24 + off-white #FAF6F0 (mentoria)
};

export function themeStyle(theme: { main: string; off: string }) {
  return { "--duo": theme.main, "--duo-off": theme.off } as CSSProperties;
}

export const CONTACT_HREF = whatsappLink("Oi, Rafa! Vim pelo seu link da bio.");

export function linkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

export function pad(n: number) {
  return String(n).padStart(2, "0");
}

// Etiqueta pequena em caixa alta e bem espaçada, acima dos títulos.
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-duo-off/80" : "text-duo/80"}`}>
      {children}
    </p>
  );
}

// Título grande em caixa alta (Urbanist ExtraBold).
export function Headline({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={`mt-4 font-name text-[2.6rem] font-extrabold uppercase leading-[0.95] tracking-tight ${
        light ? "text-duo-off" : "text-duo"
      }`}
    >
      {children}
    </h2>
  );
}

// Linha de índice: número, título, seta e uma linha fina embaixo.
export function IndexRow({
  n,
  title,
  description,
  href,
  light = false,
}: {
  n: number;
  title: string;
  description?: string;
  href: string;
  light?: boolean;
}) {
  return (
    <a
      href={href}
      {...linkProps(href)}
      className={`group flex items-start gap-4 border-b py-5 ${light ? "border-duo-off/25" : "border-duo/20"}`}
    >
      <span className={`pt-0.5 text-sm ${light ? "text-duo-off/70" : "text-duo/60"}`}>{pad(n)}</span>
      <span className="min-w-0 flex-1">
        <span className="block font-bold">{title}</span>
        {description && (
          <span className={`mt-1 block text-sm leading-relaxed ${light ? "text-duo-off/75" : "text-duo/70"}`}>
            {description}
          </span>
        )}
      </span>
      <ArrowUpRight className="mt-0.5 h-4 w-4 flex-none transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

export function SolidButton({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <a
      href={href}
      {...linkProps(href)}
      className={`inline-flex items-center gap-6 px-6 py-4 text-sm font-semibold transition hover:opacity-90 ${
        light ? "bg-duo-off text-duo" : "bg-duo text-duo-off"
      }`}
    >
      {children} <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

