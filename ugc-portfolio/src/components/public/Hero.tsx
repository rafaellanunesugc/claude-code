import Image from "next/image";
import type { Translations } from "@/lib/i18n/translations";
import { Star } from "@/components/ui/Star";

export function Hero({ t }: { t: Translations["hero"] }) {
  return (
    <section id="topo" className="bg-cream pb-12 pt-12 md:pb-16 md:pt-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-olive-50 px-3 py-1 text-xs font-semibold text-olive-800">
              <span className="h-2 w-2 rounded-full bg-olive-500" />
              {t.availability}
            </span>

            <h1 className="mt-6 flex items-center gap-3 font-name text-6xl font-extrabold leading-none tracking-tight text-ink-900 md:mt-8 md:text-7xl lg:text-8xl">
              <Star className="h-8 w-8 flex-none text-brand-500 md:h-10 md:w-10 lg:h-12 lg:w-12" />
              Rafa Nunes
            </h1>
            <p className="mt-2 text-xl font-thin text-wine-700">{t.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-6">
              {t.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-ink-900">{stat.value}</p>
                  <p className="text-xs text-ink-700/70">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-700"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-ink-900/15 bg-white px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-ink-900/5"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white shadow-soft">
              <Image
                src="/images/fotos/foto-estudio-bege.jpg"
                alt="Rafa Nunes"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <Star className="pointer-events-none absolute -left-3 -top-3 h-8 w-8 text-brand-400 md:-left-5 md:-top-5 md:h-10 md:w-10" />
            <Star className="pointer-events-none absolute -bottom-2 -right-2 h-5 w-5 text-wine-400 md:h-6 md:w-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
