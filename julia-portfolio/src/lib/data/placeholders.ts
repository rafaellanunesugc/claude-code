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
// conforme a Júlia for mandando as artes (arquivos em public/images/logos/).
export const BRAND_LOGOS: { name: string; src: string }[] = [];

export const SOCIAL_HANDLES = {
  instagram: "@juliailidiard",
  // TODO: a Júlia ainda não mandou o TikTok.
  tiktok: "[@tiktok]",
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

// Vídeos reais da Júlia. Devem ser hospedados como "não listados" no YouTube:
// basta colar o ID do vídeo em `youtubeId` (o trecho depois de "v=" ou de
// "shorts/" no link). Enquanto o youtubeId estiver vazio, o card aparece com
// o selo "Vídeo em breve". Os títulos (PT/EN) ficam em translations.ts →
// portfolio.videoTitles, usando o mesmo `id`.
// Se esta lista ficar vazia, o portfólio volta a mostrar os vídeos de exemplo.
//
// Arquivos originais: pasta "Vídeos para portfólio" no Google Drive.
// TODO: o vídeo da Cotih ainda não está na pasta do Drive.
export const REAL_PORTFOLIO_VIDEOS: PortfolioVideo[] = [
  {
    id: "mantecorp-epidrat",
    category: "ugc",
    niche: "Skincare",
    youtubeId: "",
    gradient: "from-brand-300 via-wine-400 to-ink-800",
    format: "Mantecorp",
  },
  {
    id: "sephora-camuflador",
    category: "ugc",
    niche: "Maquiagem",
    youtubeId: "",
    gradient: "from-wine-300 via-brand-500 to-ink-900",
    format: "Sephora",
  },
  {
    id: "nars-base",
    category: "ugc",
    niche: "Maquiagem",
    youtubeId: "",
    gradient: "from-ink-800 via-wine-500 to-brand-300",
    format: "NARS",
  },
  {
    id: "constance-salto",
    category: "ugc",
    niche: "Moda",
    youtubeId: "",
    gradient: "from-brand-500 via-ink-800 to-wine-300",
    format: "Constance",
  },
  {
    id: "cotih-blusa",
    category: "ugc",
    niche: "Moda",
    youtubeId: "",
    gradient: "from-wine-400 via-brand-300 to-ink-800",
    format: "Cotih",
  },
  {
    id: "prove-saudavel-bolo",
    category: "ugc",
    niche: "Alimentação",
    youtubeId: "",
    gradient: "from-olive-300 via-brand-500 to-ink-900",
    format: "Prove Saudável",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: SOCIAL_HANDLES.instagram,
    href: "https://www.instagram.com/juliailidiard/",
    icon: "instagram" as const,
  },
  // TODO: adicionar TikTok (e outras redes) quando a Júlia mandar os links.
  {
    label: "WhatsApp",
    handle: "(62) 99118-6518",
    href: "https://wa.me/5562991186518",
    icon: "whatsapp" as const,
  },
  {
    label: "Email",
    handle: "juliailidia.contato@gmail.com",
    href: "mailto:juliailidia.contato@gmail.com",
    icon: "email" as const,
  },
];

// WhatsApp da Júlia (DDI + DDD + número, só números).
export const WHATSAPP_NUMBER = "5562991186518";

export const FEEDBACK_TYPES: ("resultado" | "depoimento")[] = ["depoimento", "depoimento"];

export type PortfolioPhoto = { src: string; alt: string };

// Fotos reais de bastidores e entregas — começa vazio de propósito (a seção
// só aparece quando tiver pelo menos uma foto, ver Photos.tsx).
export const PORTFOLIO_PHOTOS: PortfolioPhoto[] = [];
