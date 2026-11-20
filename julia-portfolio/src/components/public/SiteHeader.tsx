import type { Locale, Translations } from "@/lib/i18n/translations";
import { LanguageSwitcher } from "@/components/public/LanguageSwitcher";
import { SITE_NAME } from "@/lib/site";

export function SiteHeader({
  t,
  locale,
  onChangeLocale,
}: {
  t: Translations["nav"];
  locale: Locale;
  onChangeLocale: (locale: Locale) => void;
}) {
  const links = [
    { href: "#sobre", label: t.sobre },
    { href: "#portfolio", label: t.portfolio },
    { href: "#trabalhar-comigo", label: t.trabalhar },
    { href: "#feedbacks", label: t.feedbacks },
    { href: "#contato", label: t.contato },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-10">
        <a href="#topo" className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-900">
          {SITE_NAME}
        </a>
        <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-ink-700 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-wine-700">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <LanguageSwitcher locale={locale} onChange={onChangeLocale} />
          <a
            href="#contato"
            className="hidden border border-ink-900 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-900 transition hover:bg-ink-900 hover:text-cream sm:inline-block"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
