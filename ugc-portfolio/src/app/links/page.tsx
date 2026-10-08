import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowRight, Briefcase, Send } from "lucide-react";
import { Star } from "@/components/ui/Star";
import { SocialIcon } from "@/components/ui/SocialIcon";
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
  title: "Rafa Nunes | Links",
  description: "Portfólio, cupons, mentoria, CRIA e tudo o que eu faço — num link só.",
};

const BRAND_ICONS = { briefcase: Briefcase, send: Send };

function isExternal(href: string) {
  return href.startsWith("http");
}

function linkProps(href: string) {
  return isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wine-600">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-ink-900">{title}</h2>
    </div>
  );
}

export default function LinksPage() {
  const [featured, ...products] = CREATOR_PRODUCTS;

  return (
    <main className="min-h-screen bg-blush-50 text-ink-900">
      <div className="mx-auto max-w-md px-4 pb-10 pt-12">
        {/* Topo */}
        <section className="text-center">
          <div className="relative mx-auto h-48 w-48 rounded-full bg-gradient-to-br from-brand-500 via-blush-400 to-wine-500 p-[5px] shadow-soft">
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white">
              <Image
                src={LINKS_PROFILE.photo}
                alt={LINKS_PROFILE.name}
                fill
                sizes="192px"
                className="object-cover"
                priority
              />
            </div>
            <Star className="absolute -right-1 top-3 h-7 w-7 text-wine-400" />
          </div>

          <h1 className="mt-6 font-signature text-5xl leading-tight text-ink-900">
            {LINKS_PROFILE.name}
          </h1>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            {LINKS_PROFILE.role}
          </p>
          <p className="mx-auto mt-4 text-lg leading-relaxed text-ink-800">{LINKS_PROFILE.bio}</p>

          <div className="mt-5 flex justify-center gap-10">
            {LINKS_PROFILE.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-wine-700">{stat.value}</p>
                <p className="text-sm text-ink-700/80">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <a
              href="#creator"
              className="flex items-center justify-center gap-1.5 rounded-2xl bg-brand-600 px-4 py-4 font-semibold text-white shadow-soft transition hover:bg-brand-700"
            >
              Sou creator <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#marca"
              className="flex items-center justify-center gap-1.5 rounded-2xl bg-ink-900 px-4 py-4 font-semibold text-white shadow-soft transition hover:bg-ink-800"
            >
              Sou marca <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Sou marca */}
        <section id="marca" className="scroll-mt-6 pt-16">
          <SectionHeading eyebrow="Para marcas" title="Vamos fazer uma parceria?" />
          <div className="space-y-3">
            {BRAND_LINKS.map((link) => {
              const Icon = BRAND_ICONS[link.icon];
              return (
                <a
                  key={link.title}
                  href={link.href}
                  {...linkProps(link.href)}
                  className={`group flex items-center gap-4 rounded-3xl p-5 shadow-soft transition hover:-translate-y-0.5 ${
                    link.featured ? "bg-ink-900 text-white" : "bg-white text-ink-900"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl ${
                      link.featured ? "bg-white/10" : "bg-brand-50 text-brand-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold">{link.title}</span>
                    <span className={`block ${link.featured ? "text-white/70" : "text-ink-700/80"}`}>
                      {link.description}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 flex-none transition group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>
          <p className="mt-4 text-center text-ink-700/80">
            Prefere e-mail?{" "}
            <a href={`mailto:${LINKS_PROFILE.email}`} className="font-semibold text-wine-700 underline-offset-2 hover:underline">
              {LINKS_PROFILE.email}
            </a>
          </p>
        </section>

        {/* Sou creator */}
        <section id="creator" className="scroll-mt-6 pt-16">
          <SectionHeading eyebrow="Para creators" title="Pra quem quer viver de UGC" />

          {featured && (
            <a
              href={featured.href}
              {...linkProps(featured.href)}
              className="block rounded-3xl bg-gradient-to-br from-brand-600 to-ink-900 p-7 text-white shadow-soft transition hover:-translate-y-0.5"
            >
              {featured.tag && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blush-300">{featured.tag}</p>
              )}
              <h3 className="mt-3 flex items-center gap-2 text-4xl font-bold">
                {featured.title}
                <Star className="h-6 w-6 text-blush-300" />
              </h3>
              <p className="mt-3 leading-relaxed text-white/85">{featured.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-brand-800">
                {featured.cta ?? "Quero saber mais"} <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          )}

          <div className="mt-3 space-y-3">
            {products.map((product, i) => (
              <a
                key={product.title}
                href={product.href}
                {...linkProps(product.href)}
                className={`group flex items-center gap-4 rounded-3xl border-l-4 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 ${
                  i % 2 === 0 ? "border-wine-400" : "border-brand-500"
                }`}
              >
                <span className="min-w-0 flex-1">
                  {product.tag && (
                    <span
                      className={`block text-xs font-semibold uppercase tracking-[0.14em] ${
                        product.soon ? "text-ink-700/60" : "text-wine-600"
                      }`}
                    >
                      {product.tag}
                    </span>
                  )}
                  <span className="mt-0.5 block text-lg font-semibold">{product.title}</span>
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
          <section id="cupons" className="scroll-mt-6 pt-16">
            <SectionHeading eyebrow="Pra você economizar" title="Meus cupons" />
            <div className="space-y-3">
              {COUPONS.map((coupon) => (
                <CouponCard key={coupon.code} {...coupon} />
              ))}
            </div>
            <p className="mt-3 text-center text-sm text-ink-700/70">Toque no código pra copiar</p>
          </section>
        )}

        {/* Redes */}
        <section className="pt-16">
          <SectionHeading eyebrow="De graça, pra você acompanhar" title="Minhas redes" />
          <div className="flex justify-center gap-3">
            {LINKS_SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...linkProps(social.href)}
                aria-label={social.label}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink-900 shadow-soft transition hover:-translate-y-0.5 hover:text-brand-700"
              >
                <SocialIcon name={social.icon} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </section>

        {/* WhatsApp */}
        <section className="pt-16">
          <div className="rounded-3xl bg-gradient-to-br from-wine-500 to-wine-700 px-6 py-9 text-center text-white shadow-soft">
            <h2 className="text-2xl font-bold">Ainda não sabe por onde começar?</h2>
            <p className="mt-2 text-white/90">Me chama no WhatsApp e conta onde você tá — eu te indico o melhor caminho.</p>
            <a
              href={whatsappLink("Oi, Rafa! Vim pelo seu link da bio e queria uma orientação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-wine-700"
            >
              Conversar no WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <footer className="pt-10 text-center text-sm text-ink-700/60">
          © {new Date().getFullYear()} {LINKS_PROFILE.name} · Todos os direitos reservados
        </footer>
      </div>
    </main>
  );
}
