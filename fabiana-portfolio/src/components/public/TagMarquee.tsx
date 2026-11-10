export function TagMarquee({ tags }: { tags: string[] }) {
  const doubled = [...tags, ...tags];

  return (
    <div className="overflow-hidden border-y border-wine-800 bg-wine-600 py-3">
      <div className="marquee-track flex w-max items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white">
        {doubled.map((tag, index) => (
          <span key={`${tag}-${index}`} className="flex items-center gap-8">
            {tag}
            <span className="text-blush-200">•</span>
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
