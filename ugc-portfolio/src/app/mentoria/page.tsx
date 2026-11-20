import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { MentoriaContent } from "@/components/links/MentoriaContent";
import { Eyebrow, Headline, SolidButton, THEMES, themeStyle } from "@/components/links/editorial";
import { LINKS_PROFILE, MENTORIA } from "@/lib/data/links";

export const metadata: Metadata = {
  title: "Mentoria | Rafa Nunes",
  description:
    "Mentoria individual com a Rafa Nunes: 30 dias e 4 encontros para transformar conteúdo em profissão. +15 alunas mentoradas.",
  alternates: { canonical: "/mentoria" },
};

// Página da mentoria, nas duas cores da mentoria (bordô escuro + off-white).
export default function MentoriaPage() {
  return (
    <main className="min-h-screen bg-duo-off font-sans text-duo" style={themeStyle(THEMES.bordo)}>
      <div className="mx-auto max-w-md px-5">
        <header className="flex items-center justify-between gap-4 border-b border-duo/20 py-6">
          <a href="/">
            <p className="font-name text-2xl font-extrabold uppercase leading-none tracking-tight">{LINKS_PROFILE.name}</p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-duo/80">Mentoria individual</p>
          </a>
          <a
            href={MENTORIA.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-none items-center gap-3 bg-duo px-4 py-3 text-xs font-semibold text-duo-off"
          >
            Quero minha vaga <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </header>

        <section className="py-10">
          <MentoriaContent showProducts={false} />
        </section>
      </div>

      <section className="bg-duo py-14 text-duo-off">
        <div className="mx-auto max-w-md px-5">
          <Eyebrow light>Ainda com dúvida?</Eyebrow>
          <Headline light>Me chama e a gente conversa.</Headline>
          <p className="mt-5 leading-relaxed text-duo-off/80">
            Me conta onde você está hoje e eu te digo se a mentoria faz sentido pra você agora.
          </p>
          <div className="mt-8">
            <SolidButton href={MENTORIA.href} light>
              {MENTORIA.cta}
            </SolidButton>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-md px-5 py-8 text-xs uppercase tracking-[0.25em] text-duo/60">
        <a href="/" className="underline underline-offset-4">
          Voltar pro link da bio
        </a>
      </footer>
    </main>
  );
}
