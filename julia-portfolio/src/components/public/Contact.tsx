import Image from "next/image";
import { SITE_NAME } from "@/lib/site";
import { SOCIAL_LINKS } from "@/lib/data/placeholders";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { whatsappLink } from "@/lib/utils";
import type { Translations } from "@/lib/i18n/translations";

export function Contact({ t }: { t: Translations["contact"] }) {
  return (
    <section id="contato" className="bg-wine-700 text-cream">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-12 md:items-center md:px-10 md:py-28">
        <div className="md:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.28em] text-cream/70">{SITE_NAME}</p>
          <h2 className="mt-4 font-display text-5xl leading-[1.02] md:text-7xl">{t.title}</h2>
          <p className="mt-6 max-w-md leading-relaxed text-cream/80">{t.subtitle}</p>

          <a
            href={whatsappLink(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-cream px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-900 transition hover:bg-white"
          >
            <SocialIcon name="whatsapp" className="h-4 w-4" />
            {t.submit}
          </a>

          <ul className="mt-12 max-w-md border-t border-cream/25">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label} className="border-b border-cream/25">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-4 text-sm transition hover:text-white"
                >
                  <SocialIcon name={link.icon} className="h-4 w-4 flex-none" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-cream/70">{link.label}</span>
                  <span className="ml-auto">{link.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-xs md:col-span-4 md:col-start-9 md:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-full">
            <Image src="/images/about.jpg" alt={SITE_NAME} fill sizes="(max-width: 768px) 80vw, 30vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
