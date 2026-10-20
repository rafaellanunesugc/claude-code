"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Star } from "@/components/ui/Star";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import type { ContentCategory, PortfolioVideo } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";

const ALL_CATEGORIES = "todos";
const ALL_NICHES = "todos";

export function Portfolio({
  t,
  videos,
}: {
  t: Translations["portfolio"];
  videos: PortfolioVideo[];
}) {
  const [category, setCategory] = useState<string>(ALL_CATEGORIES);
  const [niche, setNiche] = useState<string>(ALL_NICHES);

  const categories = [
    { key: ALL_CATEGORIES, label: t.filters.todos },
    { key: "influenciadora" as ContentCategory, label: t.filters.influenciadora },
    { key: "ugc" as ContentCategory, label: t.filters.ugc },
  ];

  const videosInCategory = useMemo(
    () =>
      category === ALL_CATEGORIES
        ? videos
        : videos.filter((video) => video.category === category),
    [videos, category]
  );

  const niches = useMemo(() => {
    const seen = new Set<string>();
    const ordered: string[] = [];
    for (const video of videosInCategory) {
      if (!seen.has(video.niche)) {
        seen.add(video.niche);
        ordered.push(video.niche);
      }
    }
    return ordered;
  }, [videosInCategory]);

  function handleCategoryChange(next: string) {
    setCategory(next);
    setNiche(ALL_NICHES);
  }

  const filteredVideos = videosInCategory.filter(
    (video) => niche === ALL_NICHES || video.niche === niche
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
          {categories.map((item) => (
            <button
              key={item.key}
              onClick={() => handleCategoryChange(item.key)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                category === item.key
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-ink-900/15 bg-white text-ink-900 hover:bg-ink-900/5"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {category !== ALL_CATEGORIES && niches.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 border-t border-ink-900/10 pt-3">
            <button
              onClick={() => setNiche(ALL_NICHES)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                niche === ALL_NICHES
                  ? "border-wine-600 bg-wine-600 text-white"
                  : "border-ink-900/15 bg-white text-ink-700 hover:bg-ink-900/5"
              )}
            >
              {t.filters.todos}
            </button>
            {niches.map((item) => (
              <button
                key={item}
                onClick={() => setNiche(item)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                  niche === item
                    ? "border-wine-600 bg-wine-600 text-white"
                    : "border-ink-900/15 bg-white text-ink-700 hover:bg-ink-900/5"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        )}

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
