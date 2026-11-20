export function TagMarquee({ tags }: { tags: string[] }) {
  const doubled = [...tags, ...tags];

  return (
    <div className="overflow-hidden border-y border-ink-900/10 bg-white py-5">
      <div className="marquee-track flex w-max items-center gap-10 font-display text-2xl italic text-ink-900 md:text-3xl">
        {doubled.map((tag, index) => (
          <span key={`${tag}-${index}`} className="flex items-center gap-10">
            {tag}
            <span className="h-px w-10 bg-wine-400" aria-hidden />
          </span>
        ))}
      </div>

      <style>{`
        .marquee-track { animation: marquee-scroll 40s linear infinite; }
        @keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
      `}</style>
    </div>
  );
}
