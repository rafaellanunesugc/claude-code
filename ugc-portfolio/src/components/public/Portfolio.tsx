"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Star } from "@/components/ui/Star";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import type { PortfolioVideo } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";

const ALL_NICHES = "todos";

export function Portfolio({
  t,
  videos,
}: {
  t: Translations["portfolio"];
  videos: PortfolioVideo[];
}) {
  const niches = useMemo(() => {
    const seen = new Set<string>();
    const ordered: string[] = [];
    for (const video of videos) {
      if (!seen.has(video.niche)) {
        seen.add(video.niche);
        ordered.push(video.niche);
      }
    }
    return ordered;
  }, [videos]);

  const [filter, setFilter] = useState<string>(ALL_NICHES);

  const filters = [
    { key: ALL_NICHES, label: t.filters.todos },
    ...niches.map((niche) => ({ key: niche, label: niche })),
  ];

  const filteredVideos = videos.filter(
    (video) => filter === ALL_NICHES || video.niche === filter
  );

  return (
    <section id="portfolio" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-ink-900 md:text-3xl">
          <Star className="h-5 w-5 flex-none text-brand-500 md:h-6 md:w-6" />
          {t.title}
        </h2>
        <p className="mt-2 max-w-2xl text-ink-700">{t.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                filter === item.key
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-ink-900/15 bg-white text-ink-900 hover:bg-ink-900/5"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {filteredVideos.map((video) => (
            <VideoPlayer
              key={video.id}
              video={video}
              title={video.title ?? t.videoTitles[video.id] ?? video.id}
              formatLabel={video.format ?? video.niche}
              categoryLabel={t.filters[video.category]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
