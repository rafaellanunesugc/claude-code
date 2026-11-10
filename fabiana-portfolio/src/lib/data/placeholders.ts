export type ContentCategory = "influenciadora" | "ugc";

export type PortfolioVideo = {
  id: string;
  category: ContentCategory;
  niche: string;
  videoUrl?: string;
  youtubeId?: string;
  gradient: string;
  title?: string;
  format?: string;
};

// Vídeo de exemplo (placeholder) — some sozinho quando REAL_PORTFOLIO_VIDEOS
// tiver pelo menos um item (ver fetch-portfolio-videos.ts).
const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

// Logos das marcas atendidas — começa vazio de propósito (a seção só aparece
// quando tiver pelo menos uma logo, ver BrandLogos.tsx). Adicione aqui
// conforme a Fabiana for mandando as artes.
export const BRAND_LOGOS: { name: string; src: string }[] = [];

export const SOCIAL_HANDLES = {
  instagram: "@fabianapizoni",
  tiktok: "@fabianapizoni",
};

export const PORTFOLIO_VIDEOS: PortfolioVideo[] = [
  {
    id: "influencer-1",
    category: "influenciadora",
    niche: "Rotina",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-400 via-brand-600 to-ink-900",
    format: "rotina",
  },
  {
    id: "influencer-2",
    category: "influenciadora",
    niche: "Beleza",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-800 via-brand-700 to-brand-400",
    format: "grwm",
  },
  {
    id: "influencer-3",
    category: "influenciadora",
    niche: "Depoimentos",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-600 via-ink-800 to-ink-900",
    format: "storytelling",
  },
  {
    id: "influencer-4",
    category: "influenciadora",
    niche: "Beleza",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-300 via-brand-500 to-ink-800",
    format: "dica",
  },
  {
    id: "ugc-1",
    category: "ugc",
    niche: "Depoimentos",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-700 via-brand-600 to-brand-300",
    format: "depoimento",
  },
  {
    id: "ugc-2",
    category: "ugc",
    niche: "Tecnologia",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-500 via-ink-900 to-brand-700",
    format: "unboxing",
  },
  {
    id: "ugc-3",
    category: "ugc",
    niche: "Depoimentos",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-900 via-brand-400 to-brand-600",
    format: "review",
  },
  {
    id: "ugc-4",
    category: "ugc",
    niche: "Depoimentos",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-700 via-ink-800 to-brand-300",
    format: "storytelling",
  },
];

// Vídeos reais da Fabiana, hospedados como "não listados" no YouTube.
// Enquanto estiver vazio, o portfólio mostra os vídeos de exemplo acima.
// Adicione um item aqui pra cada vídeo novo (ver fetch-portfolio-videos.ts).
export const REAL_PORTFOLIO_VIDEOS: PortfolioVideo[] = [];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: SOCIAL_HANDLES.instagram,
    href: "https://www.instagram.com/fabianapizoni/",
    icon: "instagram" as const,
  },
  {
    label: "TikTok",
    handle: SOCIAL_HANDLES.tiktok,
    href: "https://www.tiktok.com/@fabianapizoni",
    icon: "tiktok" as const,
  },
  {
    label: "WhatsApp",
    handle: "(00) 00000-0000",
    href: "https://wa.me/5500000000000",
    icon: "whatsapp" as const,
  },
  {
    label: "Email",
    handle: "contato@fabianapizoni.com",
    href: "mailto:contato@fabianapizoni.com",
    icon: "email" as const,
  },
];

// TODO: trocar pelo WhatsApp real da Fabiana (DDI + DDD + número, só números).
export const WHATSAPP_NUMBER = "5500000000000";

export const FEEDBACK_TYPES: ("resultado" | "depoimento")[] = ["depoimento", "depoimento"];

export type PortfolioPhoto = { src: string; alt: string };

// Fotos reais de bastidores e entregas — começa vazio de propósito (a seção
// só aparece quando tiver pelo menos uma foto, ver Photos.tsx).
export const PORTFOLIO_PHOTOS: PortfolioPhoto[] = [];
