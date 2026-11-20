import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Briefcase,
  Check,
  Send,
  ShoppingBag,
} from "lucide-react";
import { Star } from "@/components/ui/Star";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { TagMarquee } from "@/components/public/TagMarquee";
import { CouponCard } from "@/components/links/CouponCard";
import { LinksTabs } from "@/components/links/LinksTabs";
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

// O link da bio usa só duas cores: a principal (blocos, textos, botões) e um
// creme (fundo). Para trocar o tema, mude THEME. Valores em R G B.
const THEMES = {
  marrom: { main: "58 40 25", off: "244 236 224" }, // café #3A2819 + creme off #F4ECE0
  bordo: { main: "116 17 43", off: "250 246 240" }, // bordô #74112B + off-white #FAF6F0
};
const THEME = THEMES.marrom;
const THEME_STYLE = { "--duo": THEME.main, "--duo-off": THEME.off } as CSSProperties;

const BRAND_ICONS = { briefcase: Briefcase, send: Send };

function linkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

// Mesmo padrão de título do portfólio: etiqueta verde em caixa alta, título em
// Poppins com um trecho em itálico vinho, alinhado à esquerda.
function SectionHeading({
  eyebrow,
  title,
  accent,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-6">
      <p className={`text-xs font-semibold uppercase tracking-wide ${dark ? "text-duo-off/70" : "text-duo/70"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-2 text-3xl font-bold leading-tight ${dark ? "text-duo-off" : "text-duo"}`}>
        {title} <span className={`italic ${dark ? "text-duo-off" : "text-duo"}`}>{accent}</span>
      </h2>
    </div>
  );
}

// Cores do cartão da mentoria: as mesmas do cartão de mentora no portfólio (café + terracota).
const MENTORIA_BG = "bg-duo";
const MENTORIA_ACCENT = "bg-duo-off text-duo";

export default function LinksPage() {
  const linksContent = (
    <>
      <TagMarquee
        tags={["UGC Creator", "Influenciadora", "Mentora de Creators", "Publicidade no perfil"]}
        className="border-y border-duo-off/20 bg-duo text-duo-off"
        dotClassName="text-duo-off/60"
      />

      {/* Sou marca */}
      <section id="marca" className="scroll-mt-20 bg-duo py-14">
        <div className="mx-auto max-w-md px-5">
          <SectionHeading eyebrow="Para marcas" title="Seu produto," accent="na rotina de verdade." dark />
          <div className="space-y-3">
            {BRAND_LINKS.map((link) => {
              const Icon = BRAND_ICONS[link.icon];
              return (
                <a
                  key={link.title}
                  href={link.href}
                  {...linkProps(link.href)}
                  className={`group flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-0.5 ${
                    link.featured ? "bg-duo-off text-duo shadow-soft" : "border border-duo-off/20 text-duo-off"
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${
                      link.featured ? "bg-duo text-duo-off" : "bg-duo-off/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold">{link.title}</span>
                    <span className={`block text-sm ${link.featured ? "text-duo" : "text-duo-off/70"}`}>
                      {link.description}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 flex-none transition group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>
          <p className="mt-5 text-sm text-duo-off/70">
            Ou escreva pra{" "}
            <a href={`mailto:${LINKS_PROFILE.email}`} className="font-semibold text-duo-off underline-offset-2 hover:underline">
              {LINKS_PROFILE.email}
            </a>
          </p>
        </div>
      </section>

      {/* Sou creator */}
      <section id="creator" className="scroll-mt-20 bg-duo-off py-14">
        <div className="mx-auto max-w-md px-5">
          <SectionHeading eyebrow="Para creators" title="Do zero à" accent="primeira parceria paga." />

          <div className={`overflow-hidden rounded-2xl ${MENTORIA_BG} text-duo-off shadow-soft`}>
            <div className="relative aspect-square">
              <Image src={MENTORIA.photo} alt="Rafa Nunes, mentora" fill sizes="448px" className="object-cover object-center" />
              <span className="absolute left-4 top-4 rounded-full bg-duo-off px-3 py-1 text-xs font-bold uppercase tracking-wide text-duo">
                {MENTORIA.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-extrabold uppercase tracking-tight">{MENTORIA.title}</h3>
              <p className="mt-1 text-xl font-bold italic text-duo-off">{MENTORIA.slogan}</p>
              <p className="mt-4 leading-relaxed text-duo-off/85">{MENTORIA.pitch}</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {MENTORIA.proof.map((item) => (
                  <div key={item.label} className="rounded-xl bg-duo-off/10 px-4 py-3">
                    <p className="text-3xl font-extrabold">{item.value}</p>
                    <p className="text-sm text-duo-off/75">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-duo-off">Os 4 encontros</p>
              <ol className="mt-3 space-y-3">
                {MENTORIA.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full text-sm font-extrabold ${MENTORIA_ACCENT}`}>
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-bold">{step.title}</span>
                      <span className="block text-sm text-duo-off/75">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 flex gap-2 text-sm text-duo-off/85">
                <Check className="mt-0.5 h-4 w-4 flex-none text-duo-off" />
                {MENTORIA.bonus}
              </p>

              <div className="mt-6 rounded-xl bg-duo-off/10 p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-duo-off/75">Investimento</p>
                <p className="mt-1 text-4xl font-extrabold">{MENTORIA.price}</p>
                <p className="mt-1 text-sm text-duo-off/75">{MENTORIA.priceNote}</p>
                <a
                  href={MENTORIA.href}
                  {...linkProps(MENTORIA.href)}
                  className={`mt-4 flex items-center justify-center gap-2 rounded-full px-5 py-4 font-semibold transition hover:brightness-95 ${MENTORIA_ACCENT}`}
                >
                  {MENTORIA.cta} <ArrowRight className="h-5 w-5" />
                </a>
                <p className="mt-2 text-xs text-duo-off/70">Você fala direto comigo no WhatsApp.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {CREATOR_PRODUCTS.map((product) => (
              <a
                key={product.title}
                href={product.href}
                {...linkProps(product.href)}
                className="group flex items-center gap-4 rounded-2xl border border-duo/10 bg-duo-off p-5 shadow-soft transition hover:-translate-y-0.5"
              >
                <span className="min-w-0 flex-1">
                  {product.tag && (
                    <span className="inline-block rounded-full bg-duo/10 px-2.5 py-0.5 text-xs font-bold text-duo">
                      {product.tag}
                    </span>
                  )}
                  <span className="mt-2 block font-bold text-duo">{product.title}</span>
                  <span className="block text-sm text-duo">{product.description}</span>
                  {product.soon && (
                    <span className="mt-2 inline-flex rounded-full border border-duo/15 px-3 py-1 text-xs font-semibold text-duo">
                      Entrar na lista de espera
                    </span>
                  )}
                </span>
                <ArrowRight className="h-5 w-5 flex-none text-duo/70 transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-md px-5">
        {/* Cupons */}
        {COUPONS.length > 0 && (
          <section id="cupons" className="scroll-mt-20 pt-14">
            <SectionHeading eyebrow="Descontos que eu uso" title="Meus" accent="cupons." />
            <div className="space-y-3">
              {COUPONS.map((coupon) => (
                <CouponCard key={coupon.code} {...coupon} />
              ))}
            </div>
          </section>
        )}

        {/* Redes */}
        <section className="pt-14">
          <SectionHeading eyebrow="Me acompanhe" title="Bastidores" accent="todo dia." />
          <div className="flex flex-wrap gap-3">
            {LINKS_SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...linkProps(social.href)}
                aria-label={social.label}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-duo/15 bg-duo-off text-duo transition hover:-translate-y-0.5 hover:border-duo hover:text-duo"
              >
                <SocialIcon name={social.icon} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </section>

        {/* WhatsApp */}
        <section className="pt-14">
          <div className="rounded-2xl bg-duo p-6 text-duo-off shadow-soft">
            <h2 className="text-2xl font-bold">
              Ficou com <span className="italic text-duo-off">alguma dúvida?</span>
            </h2>
            <p className="mt-2 text-duo-off/90">Me manda uma mensagem, quem responde sou eu.</p>
            <a
              href={whatsappLink("Oi, Rafa! Vim pelo seu link da bio e fiquei com uma dúvida.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-duo-off px-6 py-3 font-semibold text-duo"
            >
              <SocialIcon name="whatsapp" className="h-5 w-5" /> Falar comigo no WhatsApp
            </a>
          </div>
        </section>
      </div>
    </>
  );

  return (
    <main className="min-h-screen bg-duo-off text-duo" style={THEME_STYLE}>
      {/* Topo: mesmo estilo do topo do portfólio */}
      <section className="mx-auto max-w-md px-5 pb-8 pt-8">
        <div className="relative">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-duo-off shadow-soft">
            <Image
              src={LINKS_PROFILE.photo}
              alt={LINKS_PROFILE.name}
              fill
              sizes="448px"
              className="object-cover object-[center_25%]"
              priority
            />
          </div>
          <Star className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 text-duo" />
          <Star className="pointer-events-none absolute -bottom-2 -right-2 h-5 w-5 text-duo" />
        </div>

        <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-duo/10 px-3 py-1 text-xs font-semibold text-duo">
          <span className="h-2 w-2 rounded-full bg-duo" />
          Disponível para novas campanhas
        </span>

        <h1 className="mt-4 flex items-center gap-3 font-name text-5xl font-extrabold leading-none tracking-tight text-duo">
          <Star className="h-7 w-7 flex-none text-duo" />
          {LINKS_PROFILE.name}
        </h1>
        <p className="mt-3 text-lg font-light text-duo">{LINKS_PROFILE.role}</p>
        <p className="mt-4 leading-relaxed text-duo">{LINKS_PROFILE.bio}</p>

        <div className="mt-5 flex flex-wrap gap-6">
          {LINKS_PROFILE.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold text-duo">{stat.value}</p>
              <p className="text-xs text-duo/70">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href="#creator"
            className="flex items-center justify-center gap-1.5 rounded-full bg-duo px-4 py-3 text-sm font-semibold text-duo-off transition hover:opacity-90"
          >
            Sou creator <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#marca"
            className="flex items-center justify-center gap-1.5 rounded-full border border-duo/15 bg-duo-off px-4 py-3 text-sm font-semibold text-duo transition hover:bg-duo/5"
          >
            Sou marca <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </section>

      {SETUP_ITEMS.length > 0 ? (
        <LinksTabs links={linksContent} setup={<SetupTab />} setupCount={SETUP_ITEMS.length} />
      ) : (
        linksContent
      )}

      <footer className="mt-14 border-t border-duo/10 py-8 text-center text-sm text-duo/70">
        © {new Date().getFullYear()} {LINKS_PROFILE.name} · Goiânia-GO
      </footer>
    </main>
  );
}

// Etiqueta da loja nas duas cores do link.
const STORE_BADGE: Record<string, string> = {};

function StoreBadge({ store, className = "" }: { store: string; className?: string }) {
  return (
    <span
      className={`flex-none rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
        STORE_BADGE[store] ?? "bg-duo text-duo-off"
      } ${className}`}
    >
      {store}
    </span>
  );
}

function SetupTab() {
  const withPhoto = SETUP_ITEMS.filter((item) => item.image);
  const textOnly = SETUP_ITEMS.filter((item) => !item.image);

  return (
    <div className="mx-auto max-w-md px-5">
      <div className="rounded-2xl bg-duo p-6 text-duo-off shadow-soft">
        {SETUP_INTRO.photo && (
          <div className="relative -mx-6 -mt-6 mb-6 aspect-square overflow-hidden rounded-t-2xl">
            <Image src={SETUP_INTRO.photo} alt="Rafa Nunes gravando" fill sizes="448px" className="object-cover" />
          </div>
        )}
        <p className="text-xs font-semibold uppercase tracking-wide text-duo-off/70">{SETUP_INTRO.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold leading-tight">
          {SETUP_INTRO.title} <span className="italic text-duo-off">{SETUP_INTRO.accent}</span>
        </h2>
        <p className="mt-3 text-duo-off/80">{SETUP_INTRO.text}</p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {withPhoto.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col overflow-hidden rounded-2xl border border-duo/10 bg-duo-off shadow-soft transition hover:-translate-y-0.5"
          >
            <span className="relative block aspect-square border-b border-duo/10 bg-duo-off">
              <Image src={item.image!} alt={item.name} fill sizes="200px" className="object-contain px-3 pb-3 pt-10" />
              <StoreBadge store={item.store} className="absolute left-2 top-2" />
            </span>
            <span className="flex flex-1 flex-col p-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-duo/70">{item.category}</span>
              <span className="mt-0.5 flex-1 text-sm font-bold leading-snug text-duo">{item.name}</span>
              <span className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-duo px-3 py-2 text-xs font-semibold text-duo-off">
                <ShoppingBag className="h-3.5 w-3.5" /> Ver produto
              </span>
            </span>
          </a>
        ))}
      </div>

      {textOnly.length > 0 && (
        <div className="mt-3 space-y-2">
          {textOnly.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group flex items-center gap-3 rounded-2xl border border-duo/10 bg-duo-off px-4 py-3.5 shadow-soft transition hover:-translate-y-0.5"
            >
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold uppercase tracking-wide text-duo/70">{item.category}</span>
                <span className="block text-sm font-bold leading-snug text-duo">{item.name}</span>
              </span>
              <StoreBadge store={item.store} />
              <ArrowRight className="h-4 w-4 flex-none text-duo/70 transition group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-duo/70">{SETUP_INTRO.disclosure}</p>
    </div>
  );
}
