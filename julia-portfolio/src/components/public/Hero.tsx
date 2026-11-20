import Image from "next/image";
import type { Translations } from "@/lib/i18n/translations";
import { SITE_NAME } from "@/lib/site";

const [FIRST_NAME, ...REST] = SITE_NAME.split(" ");
const LAST_NAME = REST.join(" ");

export function Hero({ t }: { t: Translations["hero"] }) {
  return (
    <section id="topo" className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 md:grid-cols-12 md:px-10 md:pb-24 md:pt-16">
        {/* Foto em arco */}
        <div className="relative mx-auto w-full max-w-sm order-2 md:order-1 md:col-span-5 md:max-w-none">
          <div className="absolute -inset-3 rounded-t-full border border-wine-300" aria-hidden />
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full">
            <Image
              src="/images/foto-capa.jpg"
              alt={SITE_NAME}
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="order-1 md:order-2 md:col-span-7 md:pl-8">
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-olive-700">
            <span className="h-1.5 w-1.5 rounded-full bg-olive-500" />
            {t.availability}
          </p>

          <h1 className="mt-6 font-display text-7xl leading-[0.9] text-ink-900 sm:text-8xl lg:text-[9rem]">
            {FIRST_NAME}
            <span className="block italic text-wine-700">{LAST_NAME}</span>
          </h1>

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-ink-700">{t.tagline}</p>

          {t.stats.length > 0 && (
          <div className="mt-10 grid max-w-md grid-cols-2 border-y border-ink-900/15">
            {t.stats.map((stat, index) => (
              <div key={stat.label} className={index > 0 ? "border-l border-ink-900/15 py-4 pl-6" : "py-4"}>
                <p className="font-display text-3xl text-ink-900">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-700/70">{stat.label}</p>
              </div>
            ))}
          </div>
          )}

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="bg-ink-900 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-cream transition hover:bg-wine-700"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#portfolio"
              className="px-2 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-900 underline underline-offset-8 hover:text-wine-700"
            >
              {t.ctaSecondary} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
