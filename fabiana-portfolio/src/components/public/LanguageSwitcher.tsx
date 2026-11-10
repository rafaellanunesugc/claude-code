import { LOCALE_LABELS, type Locale } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-ink-900/10 bg-white p-1">
      {(Object.keys(LOCALE_LABELS) as Locale[]).map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          aria-pressed={locale === key}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition",
            locale === key
              ? "bg-wine-600 text-white"
              : "text-ink-700 hover:bg-ink-900/5"
          )}
        >
          <span aria-hidden>{LOCALE_LABELS[key].flag}</span>
          {LOCALE_LABELS[key].short}
        </button>
      ))}
    </div>
  );
}
