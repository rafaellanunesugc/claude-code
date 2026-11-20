import { cn } from "@/lib/utils";

// Cabeçalho padrão das seções: número + rótulo em caixa alta + título serifado.
export function SectionHeading({
  number,
  eyebrow,
  title,
  subtitle,
  light = false,
  center = false,
  className,
}: {
  number?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && "text-center", className)}>
      <div
        className={cn(
          "flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em]",
          center && "justify-center",
          light ? "text-cream/70" : "text-wine-700"
        )}
      >
        {number && <span className="font-display text-sm normal-case italic tracking-normal">{number}</span>}
        {number && <span className="h-px w-8 bg-current opacity-50" />}
        <span>{eyebrow}</span>
      </div>
      <h2
        className={cn(
          "mt-4 font-display text-4xl leading-[1.05] md:text-5xl",
          light ? "text-cream" : "text-ink-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-xl leading-relaxed",
            center && "mx-auto",
            light ? "text-cream/70" : "text-ink-700"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
