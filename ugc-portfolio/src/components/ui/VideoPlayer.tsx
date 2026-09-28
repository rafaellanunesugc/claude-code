"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { PortfolioVideo } from "@/lib/data/placeholders";

export function VideoPlayer({
  video,
  title,
  formatLabel,
  categoryLabel,
  className,
}: {
  video: PortfolioVideo;
  title: string;
  formatLabel: string;
  categoryLabel: string;
  className?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft",
        className
      )}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-ink-900">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-80",
            video.gradient
          )}
        />
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
              className="group relative block h-full w-full"
              aria-label={title}
            >
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                alt={title}
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/30">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition group-hover:scale-105">
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-ink-900">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )
        ) : (
          <video
            className="relative h-full w-full object-cover"
            controls
            preload="none"
            poster=""
            playsInline
          >
            <source src={video.videoUrl} type="video/mp4" />
          </video>
        )}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium capitalize text-white backdrop-blur-sm">
          {formatLabel}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-ink-900 backdrop-blur-sm">
          {categoryLabel}
        </span>
      </div>
      <div className="p-3">
        <p className="font-bold text-ink-900">{title}</p>
        <p className="text-sm capitalize text-ink-700/60">{formatLabel}</p>
      </div>
    </div>
  );
}
