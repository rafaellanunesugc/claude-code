import type { Translations } from "@/lib/i18n/translations";

export function SiteFooter({ t }: { t: Translations["footer"] }) {
  return (
    <footer className="border-t border-ink-900/10 py-8">
      <div className="mx-auto max-w-6xl px-5 text-center text-sm text-ink-700/70">
        <p>
          © {new Date().getFullYear()} Fabiana Pizoni. {t.rights}
        </p>
      </div>
    </footer>
  );
}
