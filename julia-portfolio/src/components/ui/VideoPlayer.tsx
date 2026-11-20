"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { PortfolioVideo } from "@/lib/data/placeholders";

export function VideoPlayer({
  video,
  title,
  formatLabel,
  categoryLabel,
  comingSoonLabel,
  className,
}: {
  video: PortfolioVideo;
  title: string;
  formatLabel: string;
  categoryLabel: string;
  comingSoonLabel: string;
  className?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <figure className={cn("group", className)}>
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink-900">
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", video.gradient)} />
        {video.youtubeId ? (
          isPlaying ? (
            <iframe
              className="relative h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="relative block h-full w-full"
              aria-label={title}
            >
              {/* Só a miniatura carrega antes do clique; o player do YouTube vem depois. */}
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/80 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-ink-900">
                  <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )
        ) : video.videoUrl ? (
          <video className="relative h-full w-full object-cover" controls preload="none" playsInline>
            <source src={video.videoUrl} type="video/mp4" />
          </video>
        ) : (
          // Vídeo real cadastrado, mas ainda sem link do YouTube.
          <div className="relative flex h-full w-full items-center justify-center">
            <span className="border border-white/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white">
              {comingSoonLabel}
            </span>
          </div>
        )}
        <span className="pointer-events-none absolute left-3 top-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/90">
          {categoryLabel}
        </span>
      </div>
      <figcaption className="mt-3">
        <p className="text-[10px] uppercase tracking-[0.25em] text-wine-700">{formatLabel}</p>
        <p className="mt-1 font-display text-lg leading-snug text-ink-900">{title}</p>
      </figcaption>
    </figure>
  );
}
