import { cn } from "@/lib/utils";
import type { PortfolioVideo } from "@/lib/data/placeholders";

export function VideoPlayer({
  video,
  title,
  formatLabel,
  className,
}: {
  video: PortfolioVideo;
  title: string;
  formatLabel: string;
  className?: string;
}) {
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
        <video
          className="relative h-full w-full object-cover"
          controls
          preload="none"
          poster=""
          playsInline
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium capitalize text-white backdrop-blur-sm">
          {formatLabel}
        </span>
      </div>
      <div className="p-3">
        <p className="font-bold text-ink-900">{title}</p>
        <p className="text-sm capitalize text-ink-700/60">{formatLabel}</p>
      </div>
    </div>
  );
}
