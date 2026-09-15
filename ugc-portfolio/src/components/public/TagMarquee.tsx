import { MARQUEE_TAGS } from "@/lib/data/placeholders";

export function TagMarquee() {
  const tags = [...MARQUEE_TAGS, ...MARQUEE_TAGS];

  return (
    <div className="overflow-hidden border-y border-brand-700 bg-ink-900 py-3">
      <div className="marquee-track flex w-max items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white">
        {tags.map((tag, index) => (
          <span key={`${tag}-${index}`} className="flex items-center gap-8">
            {tag}
            <span className="text-brand-400">•</span>
          </span>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-scroll 22s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
