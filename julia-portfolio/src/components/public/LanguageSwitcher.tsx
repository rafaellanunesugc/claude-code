import { LOCALE_LABELS, type Locale } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
}) {
  const keys = Object.keys(LOCALE_LABELS) as Locale[];
  return (
    <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em]">
      {keys.map((key, index) => (
        <span key={key} className="flex items-center gap-2">
          {index > 0 && <span className="text-ink-700/30">/</span>}
          <button
            type="button"
            onClick={() => onChange(key)}
            aria-pressed={locale === key}
            className={cn(
              "transition",
              locale === key ? "text-ink-900 underline underline-offset-4" : "text-ink-700/50 hover:text-ink-900"
            )}
          >
            {LOCALE_LABELS[key].short}
          </button>
        </span>
      ))}
    </div>
  );
}
