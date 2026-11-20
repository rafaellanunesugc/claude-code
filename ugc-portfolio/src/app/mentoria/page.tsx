import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { Star } from "@/components/ui/Star";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { TagMarquee } from "@/components/public/TagMarquee";
import { MENTORIA } from "@/lib/data/links";
import { MENTORIA_LP } from "@/lib/data/mentoria";

export const metadata: Metadata = {
  title: "Mentoria 1:1 | Rafa Nunes",
  description:
    "Mentoria individual de UGC com a Rafa Nunes: 4 encontros ao vivo e 30 dias de acompanhamento pra montar perfil, portfólio e abordagem e fechar com marcas.",
  alternates: { canonical: "/mentoria" },
  openGraph: {
    title: "Mentoria 1:1 | Rafa Nunes",
    description: "Transformando conteúdo em profissão. 4 encontros individuais + 30 dias de acompanhamento.",
    siteName: "Rafa Nunes",
    locale: "pt_BR",
    type: "website",
  },
};

const ctaProps = { href: MENTORIA.href, target: "_blank", rel: "noopener noreferrer" };

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-brand-300" : "text-brand-600"}`}>
      {children}
    </p>
  );
}

function Heading({ title, accent, dark = false }: { title: string; accent: string; dark?: boolean }) {
  return (
    <h2 className={`mt-2 text-3xl font-bold leading-tight md:text-4xl ${dark ? "text-white" : "text-ink-900"}`}>
      {title}{" "}
      <span className={`font-display italic font-normal ${dark ? "text-blush-300" : "text-wine-700"}`}>{accent}</span>
    </h2>
  );
}

function CtaButton({ light = false }: { light?: boolean }) {
  return (
    <a
      {...ctaProps}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-bold transition sm:w-auto ${
        light ? "bg-white text-ink-900 hover:bg-blush-100" : "bg-brand-600 text-white hover:bg-brand-700"
      }`}
    >
      {MENTORIA.cta} <ArrowRight className="h-5 w-5" />
    </a>
  );
}

export default function MentoriaPage() {
  return (
    <main className="min-h-screen bg-white text-ink-900">
      {/* Hero */}
      <section className="bg-ink-900 text-white">
        <div className="mx-auto max-w-5xl px-5 pt-6">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Rafa Nunes
          </Link>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 pb-16 pt-8 md:grid-cols-2 md:pb-20">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blush-200">
              {MENTORIA.tag}
            </span>
            <h1 className="mt-5 text-5xl font-extrabold uppercase leading-none tracking-tight md:text-6xl">
              {MENTORIA_LP.heroTitle}
            </h1>
            <p className="mt-2 font-display text-2xl italic text-blush-300 md:text-3xl">{MENTORIA_LP.heroAccent}</p>
            <p className="mt-5 text-xl font-semibold">{MENTORIA.slogan}</p>
            <p className="mt-3 text-lg leading-relaxed text-white/80">{MENTORIA_LP.heroText}</p>
            <div className="mt-7">
              <CtaButton />
              <p className="mt-2 text-sm text-white/60">Você fala direto comigo no WhatsApp.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {MENTORIA.proof.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/10 px-4 py-3">
                  <p className="text-3xl font-extrabold">{item.value}</p>
                  <p className="text-sm text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft ring-4 ring-wine-400/40">
              <Image
                src={MENTORIA.photo}
                alt="Rafa Nunes, mentora de creators"
                fill
                sizes="(min-width: 768px) 384px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <Star className="absolute -left-4 top-6 h-9 w-9 text-brand-400" />
            <Star className="absolute -right-3 bottom-10 h-6 w-6 text-wine-400" />
          </div>
        </div>
      </section>

      <TagMarquee tags={["Mentoria 1:1", "UGC", "Portfólio", "Abordagem de marcas", "30 dias de acompanhamento"]} />

      {/* Pra quem é */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <Eyebrow>Pra quem é</Eyebrow>
            <Heading title="Essa mentoria é pra você" accent="se..." />
          </div>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {MENTORIA_LP.forYou.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-ink-900/10 bg-white p-5 text-lg">
                <Check className="mt-1 h-5 w-5 flex-none text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Os 4 encontros */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <Eyebrow>Como funciona</Eyebrow>
            <Heading title="4 encontros," accent="30 dias comigo." />
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {MENTORIA.steps.map((step, i) => (
              <li key={step.title} className="rounded-3xl bg-white p-6 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-lg font-extrabold text-white">
                  {i + 1}
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-wine-600">Encontro {i + 1}</p>
                <h3 className="mt-1 text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-lg text-ink-700">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-6 flex max-w-2xl items-start justify-center gap-2 text-center text-lg text-ink-800">
            <Sparkles className="mt-1 h-5 w-5 flex-none text-wine-500" />
            {MENTORIA.bonus}
          </p>
        </div>
      </section>

      {/* O que você leva */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <Eyebrow>Depois da mentoria</Eyebrow>
            <Heading title="Você sai com" accent="tudo pronto." />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MENTORIA_LP.outcomes.map((item) => (
              <div key={item.title} className="rounded-3xl border border-ink-900/10 p-6">
                <Star className="h-6 w-6 text-wine-400" />
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-ink-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que 1:1 */}
      <section className="bg-ink-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <Eyebrow dark>Por que individual</Eyebrow>
            <Heading title="Nada de aula genérica." accent="É sobre você." dark />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {MENTORIA_LP.whyOneToOne.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/10 p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Rafa */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[2fr_3fr]">
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full border-4 border-white shadow-soft ring-2 ring-wine-300">
            <Image
              src={MENTORIA_LP.about.photo}
              alt="Rafa Nunes"
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Quem vai te acompanhar</Eyebrow>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">{MENTORIA_LP.about.title}</h2>
            <div className="mt-4 space-y-3 text-lg leading-relaxed text-ink-800">
              {MENTORIA_LP.about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link href="/portfolio" className="mt-5 inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:underline">
              Ver meu portfólio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section id="investimento" className="scroll-mt-4 bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-xl px-5">
          <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
            <div className="bg-wine-600 px-6 py-5 text-center text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blush-100">Mentoria 1:1</p>
              <p className="mt-1 font-display text-2xl italic">{MENTORIA.slogan}</p>
            </div>
            <div className="p-6 md:p-8">
              <ul className="space-y-3">
                {MENTORIA_LP.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-lg">
                    <Check className="mt-1 h-5 w-5 flex-none text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-ink-900/10 pt-6 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-wine-600">Investimento</p>
                <p className="mt-1 text-5xl font-extrabold">{MENTORIA.price}</p>
                <p className="mt-1 text-ink-700/80">{MENTORIA.priceNote}</p>
                <div className="mt-6">
                  <CtaButton />
                </div>
                <p className="mt-3 text-sm text-ink-700/70">Vagas limitadas · você fala direto comigo no WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <Eyebrow>Dúvidas frequentes</Eyebrow>
            <Heading title="Antes de" accent="você decidir." />
          </div>
          <div className="mt-10 space-y-3">
            {MENTORIA_LP.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                  {item.question}
                  <span className="ml-4 text-2xl text-brand-600 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-ink-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-ink-900 py-16 text-center text-white md:py-20">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            {MENTORIA_LP.finalTitle}{" "}
            <span className="font-display italic font-normal text-blush-300">{MENTORIA_LP.finalAccent}</span>
          </h2>
          <p className="mt-4 text-lg text-white/75">{MENTORIA_LP.finalText}</p>
          <div className="mt-8">
            <CtaButton light />
          </div>
          <a
            href={MENTORIA_LP.doubtHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-white/70 hover:text-white"
          >
            <SocialIcon name="whatsapp" className="h-4 w-4" /> Ainda tem dúvida? Me chama
          </a>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-ink-700/60">
        © {new Date().getFullYear()} Rafa Nunes · Goiânia-GO
      </footer>
    </main>
  );
}
