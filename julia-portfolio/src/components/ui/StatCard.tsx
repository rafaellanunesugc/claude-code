import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  hint,
  className,
}: {
  label: string;
  value: string | number;
  hint?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-ink-900/10 bg-white p-5 shadow-soft",
        className
      )}
    >
      <p className="text-sm text-ink-700/70">{label}</p>
      <p className="mt-1 text-3xl font-bold text-ink-900">{value}</p>
      {hint && <p className="mt-1 text-xs text-ink-700/60">{hint}</p>}
    </div>
  );
}
