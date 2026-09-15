import type { Locale, Translations } from "@/lib/i18n/translations";
import { LanguageSwitcher } from "@/components/public/LanguageSwitcher";

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
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#topo" className="text-lg font-bold tracking-tight text-ink-900">
          Rafa <span className="text-wine-700">Nunes</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-ink-700 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-600">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} onChange={onChangeLocale} />
          <a
            href="#contato"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 sm:inline-block"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
