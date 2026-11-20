import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { CouponCard } from "@/components/links/CouponCard";
import {
  BRAND_LINKS,
  COUPONS,
  CREATOR_PRODUCTS,
  LINKS_PROFILE,
  LINKS_SOCIALS,
  MENTORIA,
  SETUP_INTRO,
  SETUP_ITEMS,
  whatsappLink,
} from "@/lib/data/links";

export const metadata: Metadata = {
  title: "Rafa Nunes | UGC Creator",
  description:
    "UGC Creator, influenciadora e mentora de creators. +60 marcas atendidas e +15 alunas. Portfólio, mentoria individual, cupons de desconto e contato para parcerias.",
  alternates: { canonical: "/" },
  // Prévia ao mandar o link (WhatsApp, Instagram etc.). A imagem vem de app/opengraph-image.png.
  openGraph: {
    title: "Rafa Nunes | UGC Creator",
    description: "Portfólio, mentoria, cupons e contato: tudo num link só.",
    siteName: "Rafa Nunes",
    locale: "pt_BR",
    type: "website",
  },
};

// O link da bio usa só duas cores: a principal (textos, linhas, botões, faixas)
// e um creme (fundo). Para trocar o tema, mude THEME. Valores em R G B.
const THEMES = {
  marrom: { main: "58 40 25", off: "244 236 224" }, // café #3A2819 + creme off #F4ECE0
  bordo: { main: "116 17 43", off: "250 246 240" }, // bordô #74112B + off-white #FAF6F0
};
const THEME = THEMES.marrom;
const THEME_STYLE = { "--duo": THEME.main, "--duo-off": THEME.off } as CSSProperties;

const CONTACT_HREF = whatsappLink("Oi, Rafa! Vim pelo seu link da bio.");

function linkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

// Etiqueta pequena em caixa alta e bem espaçada, acima dos títulos.
function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${light ? "text-duo-off/80" : "text-duo/80"}`}>
      {children}
    </p>
  );
}

// Título grande em caixa alta (Urbanist ExtraBold).
function Headline({ children, light = false }: { children: ReactNode; light?: boolean }) {
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
function IndexRow({
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

function SolidButton({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
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

export default function LinksPage() {
  const withPhoto = SETUP_ITEMS.filter((item) => item.image);
  const textOnly = SETUP_ITEMS.filter((item) => !item.image);

  const index = [
    { title: "Sou marca", href: "#marca" },
    { title: "Mentoria", href: "#mentoria" },
    { title: "Meu setup", href: "#setup" },
    { title: "Cupons", href: "#cupons" },
  ];

  return (
    <main className="min-h-screen bg-duo-off font-sans text-duo" style={THEME_STYLE}>
      <div className="mx-auto max-w-md px-5">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between gap-4 border-b border-duo/20 py-6">
          <div>
            <p className="font-name text-2xl font-extrabold uppercase leading-none tracking-tight">{LINKS_PROFILE.name}</p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-duo/80">UGC Creator & Mentora</p>
          </div>
          <a
            href={CONTACT_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-none items-center gap-3 bg-duo px-4 py-3 text-xs font-semibold text-duo-off"
          >
            Vamos conversar? <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </header>

        {/* Abertura */}
        <section className="py-10">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-duo/10">
            <Image src={LINKS_PROFILE.photo} alt={LINKS_PROFILE.name} fill sizes="448px" className="object-cover object-[center_25%]" priority />
          </div>
          <div className="mt-8">
            <Eyebrow>{LINKS_PROFILE.role}</Eyebrow>
            <h1 className="mt-4 font-name text-[2.9rem] font-extrabold uppercase leading-[0.95] tracking-tight">
              Conteúdo que vira resultado.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-duo/80">{LINKS_PROFILE.bio}</p>
          </div>
          <div className="mt-8 grid grid-cols-3 border-y border-duo/20">
            {LINKS_PROFILE.stats.map((stat, i) => (
              <div key={stat.label} className={`py-5 ${i > 0 ? "border-l border-duo/20 pl-4" : ""}`}>
                <p className="font-name text-3xl font-extrabold">{stat.value}</p>
                <p className="mt-1 text-xs text-duo/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Índice */}
        <section className="pb-12">
          <Eyebrow>Comece por aqui</Eyebrow>
          <Headline>O que você procura?</Headline>
          <div className="mt-6 grid grid-cols-2 gap-x-6 border-t border-duo/20">
            {index.map((item, i) => (
              <a key={item.title} href={item.href} className="group flex items-center gap-3 border-b border-duo/20 py-5">
                <span className="text-sm text-duo/60">{pad(i + 1)}</span>
                <span className="flex-1 font-bold">{item.title}</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* Para marcas */}
      <section id="marca" className="scroll-mt-4 bg-duo py-14 text-duo-off">
        <div className="mx-auto max-w-md px-5">
          <Eyebrow light>Para marcas</Eyebrow>
          <Headline light>Seu produto na rotina de verdade.</Headline>
          <div className="mt-6 border-t border-duo-off/25">
            {BRAND_LINKS.map((link, i) => (
              <IndexRow key={link.title} n={i + 1} title={link.title} description={link.description} href={link.href} light />
            ))}
          </div>
          <p className="mt-6 text-sm text-duo-off/75">
            Prefere e-mail?{" "}
            <a href={`mailto:${LINKS_PROFILE.email}`} className="font-semibold text-duo-off underline underline-offset-4">
              {LINKS_PROFILE.email}
            </a>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-md px-5">
        {/* Mentoria */}
        <section id="mentoria" className="scroll-mt-4 py-14">
          <Eyebrow>{MENTORIA.tag}</Eyebrow>
          <Headline>{MENTORIA.slogan}</Headline>
          <div className="relative mt-8 aspect-square w-full overflow-hidden bg-duo/10">
            <Image src={MENTORIA.photo} alt="Rafa Nunes, mentora" fill sizes="448px" className="object-cover object-center" />
          </div>
          <p className="mt-6 text-lg leading-relaxed text-duo/80">{MENTORIA.pitch}</p>

          <div className="mt-8 grid grid-cols-2 border-y border-duo/20">
            {MENTORIA.proof.map((item, i) => (
              <div key={item.label} className={`py-5 ${i > 0 ? "border-l border-duo/20 pl-4" : ""}`}>
                <p className="font-name text-4xl font-extrabold">{item.value}</p>
                <p className="mt-1 text-sm text-duo/70">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            {MENTORIA.steps.map((step, i) => (
              <div key={step.title}>
                <p className="text-sm text-duo/60">
                  {pad(i + 1)} / Encontro {i + 1}
                </p>
                <h3 className="mt-3 font-name text-xl font-extrabold leading-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-duo/75">{step.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 border-l-2 border-duo pl-4 leading-relaxed text-duo/80">{MENTORIA.bonus}</p>

          <div className="mt-10 border border-duo/25 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-duo/70">Investimento</p>
            <p className="mt-3 font-name text-5xl font-extrabold">{MENTORIA.price}</p>
            <p className="mt-2 text-sm text-duo/70">{MENTORIA.priceNote}</p>
            <div className="mt-6">
              <SolidButton href={MENTORIA.href}>{MENTORIA.cta}</SolidButton>
            </div>
            <p className="mt-3 text-xs text-duo/60">Você fala direto comigo no WhatsApp.</p>
          </div>

          {CREATOR_PRODUCTS.length > 0 && (
            <div className="mt-12">
              <Eyebrow>Em breve</Eyebrow>
              <div className="mt-4 border-t border-duo/20">
                {CREATOR_PRODUCTS.map((product, i) => (
                  <IndexRow
                    key={product.title}
                    n={i + 1}
                    title={product.title}
                    description={`${product.description}. Entre na lista de espera.`}
                    href={product.href}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Meu setup */}
      <section id="setup" className="scroll-mt-4 bg-duo/[0.07] py-14">
        <div className="mx-auto max-w-md px-5">
          <Eyebrow>{SETUP_INTRO.eyebrow}</Eyebrow>
          <Headline>
            {SETUP_INTRO.title} {SETUP_INTRO.accent}
          </Headline>
          <p className="mt-5 leading-relaxed text-duo/80">{SETUP_INTRO.text}</p>

          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8">
            {withPhoto.map((item) => (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer sponsored" className="group block">
                <span className="relative block aspect-[4/5] overflow-hidden bg-duo-off">
                  <Image src={item.image!} alt={item.name} fill sizes="200px" className="object-contain p-4 transition group-hover:scale-105" />
                </span>
                <span className="mt-3 block text-xs text-duo/60">
                  {item.category} / {item.store}
                </span>
                <span className="mt-1 flex items-start justify-between gap-2 text-sm font-bold leading-snug">
                  {item.name}
                  <ArrowUpRight className="mt-0.5 h-4 w-4 flex-none" />
                </span>
              </a>
            ))}
          </div>

          {textOnly.length > 0 && (
            <div className="mt-10 border-t border-duo/20">
              {textOnly.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group flex items-center gap-4 border-b border-duo/20 py-4"
                >
                  <span className="text-sm text-duo/60">{pad(withPhoto.length + i + 1)}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold">{item.name}</span>
                    <span className="block text-xs text-duo/60">
                      {item.category} / {item.store}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 flex-none" />
                </a>
              ))}
            </div>
          )}

          <p className="mt-6 text-xs leading-relaxed text-duo/60">{SETUP_INTRO.disclosure}</p>
        </div>
      </section>

      <div className="mx-auto max-w-md px-5">
        {/* Cupons */}
        {COUPONS.length > 0 && (
          <section id="cupons" className="scroll-mt-4 py-14">
            <Eyebrow>Descontos que eu uso</Eyebrow>
            <Headline>Meus cupons.</Headline>
            <div className="mt-6 border-t border-duo/20">
              {COUPONS.map((coupon, i) => (
                <CouponCard key={coupon.code} n={i + 1} {...coupon} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Fechamento */}
      <section className="bg-duo py-14 text-duo-off">
        <div className="mx-auto max-w-md px-5">
          <Eyebrow light>Vamos criar juntas</Eyebrow>
          <Headline light>Ficou com alguma dúvida?</Headline>
          <p className="mt-5 leading-relaxed text-duo-off/80">Me manda uma mensagem. Quem responde sou eu.</p>
          <div className="mt-8">
            <SolidButton href={whatsappLink("Oi, Rafa! Vim pelo seu link da bio e fiquei com uma dúvida.")} light>
              Falar comigo no WhatsApp
            </SolidButton>
          </div>
          <div className="mt-10 flex gap-3 border-t border-duo-off/25 pt-8">
            {LINKS_SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...linkProps(social.href)}
                aria-label={social.label}
                className="flex h-12 w-12 items-center justify-center border border-duo-off/30 transition hover:bg-duo-off hover:text-duo"
              >
                <SocialIcon name={social.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-md px-5 py-8 text-xs uppercase tracking-[0.25em] text-duo/60">
        © {new Date().getFullYear()} {LINKS_PROFILE.name} · Goiânia-GO
      </footer>
    </main>
  );
}
