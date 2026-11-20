"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ContentCategory, PortfolioVideo } from "@/lib/data/placeholders";
import type { Translations } from "@/lib/i18n/translations";

const ALL = "todos";

export function Portfolio({
  t,
  videos,
}: {
  t: Translations["portfolio"];
  videos: PortfolioVideo[];
}) {
  const [category, setCategory] = useState<string>(ALL);
  const [niche, setNiche] = useState<string>(ALL);

  const categories = [
    { key: ALL, label: t.filters.todos },
    { key: "influenciadora" as ContentCategory, label: t.filters.influenciadora },
    { key: "ugc" as ContentCategory, label: t.filters.ugc },
  ];

  const videosInCategory = useMemo(
    () => (category === ALL ? videos : videos.filter((video) => video.category === category)),
    [videos, category]
  );

  const niches = useMemo(
    () => Array.from(new Set(videosInCategory.map((video) => video.niche))),
    [videosInCategory]
  );

  function handleCategoryChange(next: string) {
    setCategory(next);
    setNiche(ALL);
  }

  const filteredVideos = videosInCategory.filter((video) => niche === ALL || video.niche === niche);

  return (
    <section id="portfolio" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading number="03" eyebrow={t.eyebrow} title={t.title} subtitle={t.subtitle} />

          {/* Filtro 1: categoria */}
          <div className="flex gap-6 border-b border-ink-900/15">
            {categories.map((item) => (
              <button
                key={item.key}
                onClick={() => handleCategoryChange(item.key)}
                className={cn(
                  "-mb-px border-b-2 pb-3 text-xs font-semibold uppercase tracking-[0.2em] transition",
                  category === item.key
                    ? "border-wine-700 text-ink-900"
                    : "border-transparent text-ink-700/50 hover:text-ink-900"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro 2: nichos da categoria escolhida */}
        {category !== ALL && niches.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {[ALL, ...niches].map((item) => (
              <button
                key={item}
                onClick={() => setNiche(item)}
                className={cn(
                  "font-display italic transition",
                  niche === item ? "text-wine-700 underline underline-offset-4" : "text-ink-700 hover:text-ink-900"
                )}
              >
                {item === ALL ? t.filters.todos : t.nicheLabels[item] ?? item}
              </button>
            ))}
          </div>
        )}

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {filteredVideos.map((video) => (
            <VideoPlayer
              key={video.id}
              video={video}
              title={video.title ?? t.videoTitles[video.id] ?? video.id}
              formatLabel={video.format ?? t.nicheLabels[video.niche] ?? video.niche}
              categoryLabel={t.filters[video.category]}
              comingSoonLabel={t.comingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
