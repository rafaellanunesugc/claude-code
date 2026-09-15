"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import {
  CATEGORY_LABELS,
  PORTFOLIO_VIDEOS,
  type ContentCategory,
} from "@/lib/data/placeholders";

const FILTERS: { key: ContentCategory | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "influenciadora", label: CATEGORY_LABELS.influenciadora },
  { key: "ugc", label: CATEGORY_LABELS.ugc },
];

export function Portfolio() {
  const [filter, setFilter] = useState<ContentCategory | "todos">("todos");

  const videos = PORTFOLIO_VIDEOS.filter(
    (video) => filter === "todos" || video.category === filter
  );

  return (
    <section id="portfolio" className="bg-cream py-16">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-2xl font-bold text-ink-900 md:text-3xl">
          Portfólio
        </h2>
        <p className="mt-2 max-w-2xl text-ink-700">
          Clique numa pasta pra filtrar · clique num vídeo pra assistir.
          (Vídeos de exemplo — em breve substituo pelos meus.)
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {FILTERS.map((item) => (
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
          {videos.map((video) => (
            <VideoPlayer key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
