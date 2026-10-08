import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowRight, Briefcase, Send } from "lucide-react";
import { Star } from "@/components/ui/Star";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { TagMarquee } from "@/components/public/TagMarquee";
import { CouponCard } from "@/components/links/CouponCard";
import {
  BRAND_LINKS,
  COUPONS,
  CREATOR_PRODUCTS,
  LINKS_PROFILE,
  LINKS_SOCIALS,
  whatsappLink,
} from "@/lib/data/links";

export const metadata: Metadata = {
  title: "Rafa Nunes | UGC Creator",
  description: "Portfólio, cupons, mentoria, CRIA e tudo o que eu faço — num link só.",
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
  const [featured, ...products] = CREATOR_PRODUCTS;

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

        <h1 className="mt-6 whitespace-nowrap font-signature text-5xl leading-tight text-ink-900">
          {LINKS_PROFILE.name}
        </h1>
        <p className="mt-1 text-lg font-thin text-wine-700">{LINKS_PROFILE.role}</p>
        <p className="mt-4 text-lg leading-relaxed text-ink-800">{LINKS_PROFILE.bio}</p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {LINKS_PROFILE.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-ink-900/10 px-4 py-3 text-left">
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

      <TagMarquee tags={["UGC Creator", "Influenciadora", "Mentora de Creators", "CRIA"]} />

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
          <SectionHeading eyebrow="Para creators" title="Do zero à" accent="primeira parceria." />

          {featured && (
            // Cartão do CRIA nas cores da marca do curso (marinho, amarelo e creme).
            <a
              href={featured.href}
              {...linkProps(featured.href)}
              className="relative block overflow-hidden rounded-2xl bg-[#3c405b] p-7 text-center text-[#f3f0e0] shadow-soft transition hover:-translate-y-0.5"
            >
              <span className="absolute inset-x-0 top-0 h-1.5 bg-[#f2e05a]" />
              <span className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full border border-[#f3f0e0]/20" />
              <span className="pointer-events-none absolute -bottom-20 -right-16 h-44 w-44 rounded-full border border-[#f3f0e0]/20" />
              {featured.tag && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f2e05a]">{featured.tag}</p>
              )}
              {featured.logo ? (
                <Image
                  src={featured.logo}
                  alt={featured.title}
                  width={322}
                  height={146}
                  className="mx-auto mt-5 h-16 w-auto"
                />
              ) : (
                <h3 className="mt-3 text-4xl font-bold">{featured.title}</h3>
              )}
              {featured.subtitle && <p className="mt-2 text-lg text-[#f3f0e0]/90">{featured.subtitle}</p>}
              <p className="mt-4 leading-relaxed text-[#f3f0e0]/80">{featured.description}</p>
              {featured.details && (
                <p className="mt-5 rounded-xl border border-[#f2e05a]/70 px-4 py-3 text-sm font-semibold text-[#f2e05a]">
                  {featured.details.split(" · ").map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              )}
              <span className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#f2e05a] px-5 py-3.5 font-semibold text-[#3c405b]">
                {featured.cta ?? "Quero saber mais"} <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          )}

          <div className="mt-3 space-y-3">
            {products.map((product) =>
              product.cria ? (
                <a
                  key={product.title}
                  href={product.href}
                  {...linkProps(product.href)}
                  className="group block rounded-2xl bg-[#f3f0e0] p-6 text-[#3c405b] transition hover:-translate-y-0.5"
                >
                  {product.tag && (
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[#a8321f]">
                      {product.tag}
                    </span>
                  )}
                  <span className="mt-1 flex items-baseline justify-between gap-3">
                    <span className="text-xl font-bold">{product.title}</span>
                    {product.price && <span className="flex-none text-xl font-extrabold">{product.price}</span>}
                  </span>
                  <span className="mt-1 block text-[#3c405b]/80">{product.description}</span>
                  <span className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#3c405b] px-5 py-3 font-semibold text-[#f2e05a]">
                    {product.cta ?? "Quero saber mais"}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </a>
              ) : (
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
              ),
            )}
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
            <p className="mt-2 text-white/90">Me manda uma mensagem — quem responde sou eu.</p>
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

        <footer className="py-10 text-center text-sm text-ink-700/60">
          © {new Date().getFullYear()} {LINKS_PROFILE.name} · Goiânia-GO
        </footer>
      </div>
    </main>
  );
}
