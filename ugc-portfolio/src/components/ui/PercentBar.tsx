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
        <span className="font-semibold text-ink-900">{value}%</span>
      </div>
      <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-ink-900/[0.06]">
        <div
          className={`h-full rounded-full ${colorClass}`}
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    </div>
  );
}
