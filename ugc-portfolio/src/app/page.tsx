import type { Metadata } from "next";
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

const BRAND_ICONS = { briefcase: Briefcase, send: Send };

function linkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

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
    <div className="mb-7 text-center">
      <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-brand-300" : "text-brand-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-2 text-3xl font-bold leading-tight ${dark ? "text-white" : "text-ink-900"}`}>
        {title}{" "}
        <span className={`font-display italic font-normal ${dark ? "text-white/70" : "text-wine-700"}`}>{accent}</span>
      </h2>
    </div>
  );
}

export default function LinksPage() {
  const linksContent = (
    <>
      <TagMarquee tags={["UGC Creator", "Influenciadora", "Mentora de Creators", "Mentoria individual"]} />

      {/* Sou marca */}
      <section id="marca" className="scroll-mt-4 bg-ink-900 py-14">
        <div className="mx-auto max-w-md px-4">
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
                    link.featured ? "bg-white text-ink-900" : "border border-white/15 text-white"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 flex-none items-center justify-center rounded-full ${
                      link.featured ? "bg-brand-50 text-brand-700" : "bg-white/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold">{link.title}</span>
                    <span className={`block ${link.featured ? "text-ink-700/80" : "text-white/70"}`}>
                      {link.description}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 flex-none transition group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>
          <p className="mt-5 text-center text-white/70">
            Ou escreva pra{" "}
            <a href={`mailto:${LINKS_PROFILE.email}`} className="font-semibold text-blush-300 hover:underline">
              {LINKS_PROFILE.email}
            </a>
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-md px-4">
        {/* Sou creator */}
        <section id="creator" className="scroll-mt-4 pt-14">
          <SectionHeading eyebrow="Para creators" title="Do zero à" accent="primeira parceria paga." />

          {/* Mentoria: o principal produto pra creators */}
          <div className="overflow-hidden rounded-3xl bg-ink-900 text-white shadow-soft">
            <div className="relative aspect-square">
              <Image src={MENTORIA.photo} alt="Rafa Nunes, mentora" fill sizes="448px" className="object-cover object-center" />
              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-900">
                {MENTORIA.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-sans text-5xl font-extrabold uppercase tracking-tight">{MENTORIA.title}</h3>
              <p className="mt-1 text-xl font-semibold text-blush-300">{MENTORIA.slogan}</p>
              <p className="mt-4 leading-relaxed text-white/85">{MENTORIA.pitch}</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {MENTORIA.proof.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/10 px-4 py-3">
                    <p className="text-3xl font-extrabold">{item.value}</p>
                    <p className="text-sm text-white/70">{item.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-300">Os 4 encontros</p>
              <ol className="mt-3 space-y-3">
                {MENTORIA.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-3">
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-600 text-sm font-extrabold">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{step.title}</span>
                      <span className="block text-sm text-white/70">{step.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 flex gap-2 text-sm text-white/85">
                <Check className="mt-0.5 h-4 w-4 flex-none text-brand-300" />
                {MENTORIA.bonus}
              </p>

              <div className="mt-6 rounded-2xl bg-white p-5 text-center text-ink-900">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-wine-600">Investimento</p>
                <p className="mt-1 text-4xl font-extrabold">{MENTORIA.price}</p>
                <p className="mt-1 text-sm text-ink-700/80">{MENTORIA.priceNote}</p>
                <a
                  href={MENTORIA.href}
                  {...linkProps(MENTORIA.href)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-4 font-bold text-white transition hover:bg-brand-700"
                >
                  {MENTORIA.cta} <ArrowRight className="h-5 w-5" />
                </a>
                <p className="mt-2 text-xs text-ink-700/70">Você fala direto comigo no WhatsApp.</p>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-3">
            {CREATOR_PRODUCTS.map((product) => (
              <a
                key={product.title}
                href={product.href}
                {...linkProps(product.href)}
                className="group flex items-center gap-4 rounded-2xl border border-ink-900/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-wine-300"
              >
                <span className="min-w-0 flex-1">
                  {product.tag && (
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                        product.soon ? "bg-olive-50 text-olive-800" : "bg-wine-50 text-wine-700"
                      }`}
                    >
                      {product.tag}
                    </span>
                  )}
                  <span className="mt-1.5 block text-lg font-semibold">{product.title}</span>
                  <span className="block text-ink-700/80">{product.description}</span>
                  {product.soon && (
                    <span className="mt-1 block text-sm font-semibold text-brand-700">Entrar na lista de espera</span>
                  )}
                </span>
                <ArrowRight className="h-5 w-5 flex-none text-wine-500 transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </section>

        {/* Cupons */}
        {COUPONS.length > 0 && (
          <section id="cupons" className="scroll-mt-4 pt-14">
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
          <div className="flex justify-center gap-3">
            {LINKS_SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...linkProps(social.href)}
                aria-label={social.label}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-900 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-700"
              >
                <SocialIcon name={social.icon} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </section>

        {/* WhatsApp */}
        <section className="pt-14">
          <div className="rounded-2xl bg-wine-600 px-6 py-9 text-center text-white">
            <h2 className="text-2xl font-bold">
              Ficou com <span className="font-display italic font-normal text-blush-200">alguma dúvida?</span>
            </h2>
            <p className="mt-2 text-white/90">Me manda uma mensagem, quem responde sou eu.</p>
            <a
              href={whatsappLink("Oi, Rafa! Vim pelo seu link da bio e fiquei com uma dúvida.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-wine-700"
            >
              <SocialIcon name="whatsapp" className="h-5 w-5" /> Falar comigo no WhatsApp
            </a>
          </div>
        </section>

      </div>
    </>
  );

  return (
    <main className="min-h-screen bg-white text-ink-900">
      {/* Topo */}
      <section className="mx-auto max-w-md px-4 pb-10 pt-12 text-center">
        <div className="relative mx-auto h-44 w-44">
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-soft ring-2 ring-wine-300">
            <Image src={LINKS_PROFILE.photo} alt={LINKS_PROFILE.name} fill sizes="176px" className="object-cover" priority />
          </div>
          <Star className="absolute -left-2 top-2 h-7 w-7 text-brand-400" />
          <Star className="absolute -right-1 bottom-4 h-5 w-5 text-wine-400" />
        </div>

        <h1 className="mt-6 whitespace-nowrap font-name text-5xl font-extrabold leading-none tracking-tight text-ink-900">
          {LINKS_PROFILE.name}
        </h1>
        <p className="mt-1 text-lg font-thin text-wine-700">{LINKS_PROFILE.role}</p>
        <p className="mt-4 text-lg leading-relaxed text-ink-800">{LINKS_PROFILE.bio}</p>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {LINKS_PROFILE.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-ink-900/10 px-3 py-3 text-left">
              <p className="text-xl font-extrabold text-wine-700">{stat.value}</p>
              <p className="text-xs uppercase tracking-wide text-ink-700/60">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href="#creator"
            className="flex items-center justify-center gap-1.5 rounded-full bg-brand-600 px-4 py-3.5 font-semibold text-white transition hover:bg-brand-700"
          >
            Sou creator <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#marca"
            className="flex items-center justify-center gap-1.5 rounded-full bg-ink-900 px-4 py-3.5 font-semibold text-white transition hover:bg-ink-800"
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

      <div className="mx-auto max-w-md px-4">
        <footer className="py-10 text-center text-sm text-ink-700/60">
          © {new Date().getFullYear()} {LINKS_PROFILE.name} · Goiânia-GO
        </footer>
      </div>
    </main>
  );
}

const STORE_BADGE: Record<string, string> = {
  "Mercado Livre": "bg-[#ffe600] text-[#2d3277]",
  Amazon: "bg-[#232f3e] text-white",
  Shopee: "bg-[#ee4d2d] text-white",
  Magalu: "bg-[#0086ff] text-white",
  "TikTok Shop": "bg-black text-white",
};

function StoreBadge({ store, className = "" }: { store: string; className?: string }) {
  return (
    <span
      className={`flex-none rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide ${
        STORE_BADGE[store] ?? "bg-ink-900 text-white"
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
    <div className="mx-auto max-w-md px-4">
      <div className="overflow-hidden rounded-3xl bg-ink-900 text-center text-white">
        {SETUP_INTRO.photo && (
          <div className="relative aspect-square">
            <Image src={SETUP_INTRO.photo} alt="Rafa Nunes gravando" fill sizes="448px" className="object-cover" />
          </div>
        )}
        <div className="px-6 py-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-300">{SETUP_INTRO.eyebrow}</p>
          <h2 className="mt-2 text-4xl font-extrabold leading-tight">
            {SETUP_INTRO.title} <span className="block text-blush-300">{SETUP_INTRO.accent}</span>
          </h2>
          <p className="mt-3 text-white/80">{SETUP_INTRO.text}</p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {withPhoto.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white transition hover:-translate-y-0.5 hover:border-wine-300"
          >
            <span className="relative block aspect-square border-b border-ink-900/10 bg-white">
              <Image src={item.image!} alt={item.name} fill sizes="200px" className="object-contain px-3 pb-3 pt-10" />
              <StoreBadge store={item.store} className="absolute left-2 top-2" />
            </span>
            <span className="flex flex-1 flex-col p-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-wine-600">{item.category}</span>
              <span className="mt-0.5 flex-1 font-bold leading-snug text-ink-900">{item.name}</span>
              <span className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-ink-900 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-white">
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
              className="group flex items-center gap-3 rounded-2xl border border-ink-900/10 bg-white px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-wine-300"
            >
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-wine-600">{item.category}</span>
                <span className="block font-bold leading-snug text-ink-900">{item.name}</span>
              </span>
              <StoreBadge store={item.store} />
              <ArrowRight className="h-4 w-4 flex-none text-ink-700 transition group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-ink-700/70">{SETUP_INTRO.disclosure}</p>
    </div>
  );
}
