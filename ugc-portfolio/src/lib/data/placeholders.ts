import type { DealStage } from "@/lib/types";

export const DEAL_STAGES: { key: DealStage; label: string }[] = [
  { key: "contato", label: "Contato feito" },
  { key: "conversando", label: "Conversando" },
  { key: "proposta", label: "Proposta enviada" },
  { key: "fechado", label: "Fechado" },
  { key: "entregue", label: "Entregue" },
];

export type ContentCategory = "influenciadora" | "ugc";

export type PortfolioVideo = {
  id: string;
  category: ContentCategory;
  videoUrl: string;
  gradient: string;
};

// Vídeo de exemplo (placeholder) — trocar pelos vídeos reais depois.
const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const BRAND_LOGOS = [
  { name: "Dove", src: "/images/logos/dove.png" },
  { name: "Pantene", src: "/images/logos/pantene.png" },
  { name: "Eudora", src: "/images/logos/eudora.png" },
  { name: "Herbéra", src: "/images/logos/herbera.webp" },
  { name: "E-lens", src: "/images/logos/e-lens.png" },
  { name: "Peça Rara", src: "/images/logos/peca-rara.png" },
  { name: "Óticas Prevent", src: "/images/logos/oticas-prevent.jpg" },
  { name: "Saint Germain", src: "/images/logos/saint-germain.png" },
  { name: "Make More", src: "/images/logos/make-more.jpg" },
  { name: "VT Cosmetics", src: "/images/logos/vt-cosmetics.jpg" },
];

export const SOCIAL_HANDLES = {
  instagram: "@rafaellanunesx",
  tiktok: "@rafaellanunesxx",
};

export const PORTFOLIO_VIDEOS: PortfolioVideo[] = [
  {
    id: "influencer-1",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-400 via-brand-600 to-ink-900",
  },
  {
    id: "influencer-2",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-800 via-brand-700 to-brand-400",
  },
  {
    id: "influencer-3",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-600 via-ink-800 to-ink-900",
  },
  {
    id: "influencer-4",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-300 via-brand-500 to-ink-800",
  },
  {
    id: "ugc-1",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-700 via-brand-600 to-brand-300",
  },
  {
    id: "ugc-2",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-500 via-ink-900 to-brand-700",
  },
  {
    id: "ugc-3",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-900 via-brand-400 to-brand-600",
  },
  {
    id: "ugc-4",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-700 via-ink-800 to-brand-300",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: SOCIAL_HANDLES.instagram,
    href: "https://www.instagram.com/rafaellanunesx/",
    icon: "instagram" as const,
  },
  {
    label: "TikTok",
    handle: SOCIAL_HANDLES.tiktok,
    href: "https://www.tiktok.com/@rafaellanunesxx",
    icon: "tiktok" as const,
  },
  {
    label: "WhatsApp",
    handle: "(62) 99342-2036",
    href: "https://wa.me/62993422036",
    icon: "whatsapp" as const,
  },
  {
    label: "LinkedIn",
    handle: "rafaellanuness",
    href: "https://www.linkedin.com/in/rafaellanuness/",
    icon: "linkedin" as const,
  },
  {
    label: "Email",
    handle: "rafaellanunes.contato@gmail.com",
    href: "mailto:rafaellanunes.contato@gmail.com",
    icon: "email" as const,
  },
];

export const WHATSAPP_NUMBER = "62993422036";

export const BUDGET_RANGES = [
  "Até R$ 500",
  "R$ 500 – R$ 1.500",
  "R$ 1.500 – R$ 3.000",
  "R$ 3.000 – R$ 6.000",
  "Acima de R$ 6.000",
  "A combinar",
];

export const FEEDBACK_TYPES = ["resultado", "depoimento", "depoimento"] as const;
