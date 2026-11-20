type IconName = "instagram" | "tiktok" | "whatsapp" | "linkedin" | "email";

export function SocialIcon({ name, className }: { name: IconName; className?: string }) {
  switch (name) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M14 3.5c.5 2 2 3.5 4.2 3.8V10c-1.5 0-2.9-.4-4.2-1.2v6.4a5.3 5.3 0 1 1-4.6-5.3v2.7a2.6 2.6 0 1 0 2 2.6V3.5H14z"
            fill="currentColor"
          />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path
            d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8.5 8.7c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .5.4.2.5.7 1.7.7 1.9s0 .3-.2.5c-.1.2-.2.3-.4.5-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.4.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9 1 .3.1.5.2.5.3.1.4.1.9-.2 1.4-.3.5-1.4 1.1-1.9 1.1-.5 0-1.9-.3-3.6-1.4a10.4 10.4 0 0 1-3.6-3.7c-.4-.6-1-1.6-1-2.6 0-1 .5-1.5.7-1.7z"
            fill="currentColor"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="7.5" cy="8" r="1.2" fill="currentColor" />
          <path d="M7.5 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M11.5 17v-3.5c0-1.2.8-2.2 2-2.2s2 1 2 2.2V17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M11.5 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}
