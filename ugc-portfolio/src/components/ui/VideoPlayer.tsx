import { cn } from "@/lib/utils";
import type { PortfolioVideo } from "@/lib/data/placeholders";

export function VideoPlayer({
  video,
  title,
  categoryLabel,
  className,
}: {
  video: PortfolioVideo;
  title: string;
  categoryLabel: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-ink-900 shadow-soft",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-80",
          video.gradient
        )}
      />
      <video
        className="relative h-full w-full object-cover"
        controls
        preload="none"
        poster=""
        playsInline
      >
        <source src={video.videoUrl} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
        <span className="rounded-full bg-black/40 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {categoryLabel}
        </span>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <p className="text-sm font-medium text-white">{title}</p>
      </div>
    </div>
  );
}
