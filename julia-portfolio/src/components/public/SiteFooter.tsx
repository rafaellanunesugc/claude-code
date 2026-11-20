import type { Translations } from "@/lib/i18n/translations";
import { SITE_NAME } from "@/lib/site";

export function SiteFooter({ t }: { t: Translations["footer"] }) {
  return (
    <footer className="bg-ink-900 text-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-10">
        <p className="font-display text-4xl italic md:text-5xl">{SITE_NAME}</p>
        <p className="text-[11px] uppercase tracking-[0.2em] text-cream/50">
          © {new Date().getFullYear()} {SITE_NAME}. {t.rights}
        </p>
      </div>
    </footer>
  );
}
