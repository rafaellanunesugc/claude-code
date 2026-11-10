import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/data/placeholders";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { whatsappLink } from "@/lib/utils";
import type { Translations } from "@/lib/i18n/translations";

export function ContactForm({ t }: { t: Translations["contact"] }) {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">{t.title}</h2>
          <p className="mt-2 text-ink-700">{t.subtitle}</p>

          <div className="relative mt-6 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl">
            <Image
              src="/images/about.jpg"
              alt="Fabiana Pizoni"
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <a
            href={whatsappLink(t.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-700"
          >
            <SocialIcon name="whatsapp" className="h-5 w-5" />
            {t.submit}
          </a>

          <div className="mt-6 space-y-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-ink-900/10 bg-white px-4 py-2.5 text-sm text-ink-900 shadow-sm transition hover:border-brand-400 hover:text-brand-700"
              >
                <SocialIcon name={link.icon} className="h-5 w-5 flex-none" />
                <span className="font-medium">{link.label}</span>
                <span className="ml-auto text-ink-700/60">{link.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
