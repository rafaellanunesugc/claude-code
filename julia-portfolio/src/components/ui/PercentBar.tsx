export function PercentBar({
  label,
  value,
  colorClass,
}: {
  label: string;
  value: number;
  colorClass: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between text-xs text-ink-700">
        <span>{label}</span>
        <span className="font-display text-sm text-ink-900">{value}%</span>
      </div>
      <div className="mt-1.5 h-px w-full bg-ink-900/15">
        <div className={`h-[3px] -translate-y-px ${colorClass}`} style={{ width: `${Math.min(value, 100)}%` }} />
      </div>
    </div>
  );
}
