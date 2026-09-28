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
  videoUrl?: string;
  youtubeId?: string;
  gradient: string;
  title?: string;
  format?: string;
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
    format: "rotina",
  },
  {
    id: "influencer-2",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-800 via-brand-700 to-brand-400",
    format: "grwm",
  },
  {
    id: "influencer-3",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-600 via-ink-800 to-ink-900",
    format: "storytelling",
  },
  {
    id: "influencer-4",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-300 via-brand-500 to-ink-800",
    format: "dica",
  },
  {
    id: "ugc-1",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-700 via-brand-600 to-brand-300",
    format: "depoimento",
  },
  {
    id: "ugc-2",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-500 via-ink-900 to-brand-700",
    format: "unboxing",
  },
  {
    id: "ugc-3",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-900 via-brand-400 to-brand-600",
    format: "review",
  },
  {
    id: "ugc-4",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-700 via-ink-800 to-brand-300",
    format: "storytelling",
  },
];

// Vídeos reais, hospedados como "não listados" no YouTube — mais fácil de
// subir do que o Supabase Storage e sem limite de tamanho nem risco de
// pausa do plano gratuito. Adicione um item aqui pra cada vídeo novo.
export const REAL_PORTFOLIO_VIDEOS: PortfolioVideo[] = [
  {
    id: "ugc-oleo-ox",
    category: "ugc",
    youtubeId: "QO_IrDJNWIc",
    gradient: "from-brand-500 via-ink-900 to-brand-700",
    title: "Óleo OX",
    format: "dica",
  },
  {
    id: "ugc-dove",
    category: "ugc",
    youtubeId: "jzVlIs5gl4M",
    gradient: "from-ink-900 via-brand-400 to-brand-600",
    title: "Dove",
    format: "problema x solução",
  },
  {
    id: "ugc-e-lens",
    category: "ugc",
    youtubeId: "7ebhVxDstu4",
    gradient: "from-brand-700 via-ink-800 to-brand-300",
    title: "E-lens",
    format: "educativo",
  },
  {
    id: "ugc-widicare",
    category: "ugc",
    youtubeId: "tpovLG0KB1U",
    gradient: "from-brand-400 via-brand-600 to-ink-900",
    title: "Cabelo – Widicare",
    format: "dica",
  },
  {
    id: "influenciadora-comunidade-rotina",
    category: "influenciadora",
    youtubeId: "9qgqDoR4Dew",
    gradient: "from-ink-800 via-brand-700 to-brand-400",
    title: "Comunidade",
    format: "rotina",
  },
  {
    id: "influenciadora-transicao-capilar",
    category: "influenciadora",
    youtubeId: "FsamZz7TSK0",
    gradient: "from-brand-600 via-ink-800 to-ink-900",
    title: "Comunidade",
    format: "transição capilar",
  },
  {
    id: "influenciadora-creator-economy",
    category: "influenciadora",
    youtubeId: "EiGIb8sMW94",
    gradient: "from-brand-300 via-brand-500 to-ink-800",
    title: "Creator Economy",
    format: "educativo sobre organização",
  },
  {
    id: "ugc-mdc-store",
    category: "ugc",
    youtubeId: "es3NwubhE_A",
    gradient: "from-ink-700 via-brand-600 to-brand-300",
    title: "Loja de celular MDC Store",
    format: "anúncio",
  },
  {
    id: "ugc-aluguel-jogos",
    category: "ugc",
    youtubeId: "moyxIQek3qM",
    gradient: "from-brand-500 via-ink-900 to-brand-700",
    title: "Experiência – Aluguel de jogos",
    format: "anúncio",
  },
  {
    id: "influenciadora-nasa",
    category: "influenciadora",
    youtubeId: "Lw0Do1RIRWc",
    gradient: "from-ink-800 via-brand-700 to-brand-400",
    title: "Nasa",
    format: "experiência",
  },
  {
    id: "influenciadora-entrelace-cabelo",
    category: "influenciadora",
    youtubeId: "DPuIott6ems",
    gradient: "from-brand-600 via-ink-800 to-ink-900",
    title: "Entrelace no Cabelo",
    format: "experiência",
  },
  {
    id: "influenciadora-vlog-corrida",
    category: "influenciadora",
    youtubeId: "ry564Zz93Nk",
    gradient: "from-brand-300 via-brand-500 to-ink-800",
    title: "Comunidade",
    format: "vlog corrida",
  },
  {
    id: "ugc-cabelo-storytelling",
    category: "ugc",
    youtubeId: "82eh9GVkuOA",
    gradient: "from-ink-700 via-brand-600 to-brand-300",
    title: "Storytelling",
    format: "cabelo",
  },
  {
    id: "influenciadora-casa-jardinagem",
    category: "influenciadora",
    youtubeId: "7C3w2l48Juk",
    gradient: "from-brand-500 via-ink-900 to-brand-700",
    title: "DIY",
    format: "casa e jardinagem",
  },
  {
    id: "influenciadora-corte-cabelo",
    category: "influenciadora",
    youtubeId: "LQi8DaLHtX4",
    gradient: "from-ink-900 via-brand-400 to-brand-600",
    title: "Corte de Cabelo – Storytelling",
    format: "vlog experiência",
  },
  {
    id: "influenciadora-emagrecimento",
    category: "influenciadora",
    youtubeId: "pyr8yv1Abjc",
    gradient: "from-brand-700 via-ink-800 to-brand-300",
    title: "Processo de Emagrecimento",
    format: "storytelling",
  },
  {
    id: "influenciadora-extensao-cilios",
    category: "influenciadora",
    youtubeId: "BbYKtRyg6kw",
    gradient: "from-brand-400 via-brand-600 to-ink-900",
    title: "Extensão de Cílios",
    format: "trend",
  },
  {
    id: "influenciadora-finalizacao-cabelo",
    category: "influenciadora",
    youtubeId: "8DMODfhEE-E",
    gradient: "from-ink-800 via-brand-700 to-brand-400",
    title: "Transição Capilar",
    format: "finalização de cabelo",
  },
  {
    id: "ugc-depoimento-conteudo-site",
    category: "ugc",
    youtubeId: "B0O9cQ0AESY",
    gradient: "from-ink-900 via-brand-400 to-brand-600",
    title: "Experiência com o produto – Conteúdo para site",
    format: "depoimento",
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
