import type { DealStage } from "@/lib/types";

export type Niche = "saude-bem-estar" | "beleza";

export const NICHE_LABELS: Record<Niche, string> = {
  "saude-bem-estar": "Saúde e Bem-estar",
  beleza: "Beleza",
};

export type PortfolioVideo = {
  id: string;
  title: string;
  niche: Niche;
  videoUrl: string;
  gradient: string;
};

// Vídeos de exemplo (placeholder) — trocar pelos vídeos reais depois.
const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const FEATURED_VIDEOS: PortfolioVideo[] = [
  {
    id: "destaque-1",
    title: "Vídeo de exemplo 1",
    niche: "beleza",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-400 via-brand-600 to-ink-900",
  },
  {
    id: "destaque-2",
    title: "Vídeo de exemplo 2",
    niche: "saude-bem-estar",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-800 via-brand-700 to-brand-400",
  },
  {
    id: "destaque-3",
    title: "Vídeo de exemplo 3",
    niche: "beleza",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-600 via-ink-800 to-ink-900",
  },
];

export const PORTFOLIO_VIDEOS: PortfolioVideo[] = [
  ...FEATURED_VIDEOS,
  {
    id: "video-4",
    title: "Rotina de skincare (exemplo)",
    niche: "beleza",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-300 via-brand-500 to-ink-800",
  },
  {
    id: "video-5",
    title: "Review de suplemento (exemplo)",
    niche: "saude-bem-estar",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-700 via-brand-600 to-brand-300",
  },
  {
    id: "video-6",
    title: "Get ready with me (exemplo)",
    niche: "beleza",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-500 via-ink-900 to-brand-700",
  },
  {
    id: "video-7",
    title: "Treino em casa (exemplo)",
    niche: "saude-bem-estar",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-900 via-brand-400 to-brand-600",
  },
];

export const BUDGET_RANGES = [
  "Até R$ 500",
  "R$ 500 – R$ 1.500",
  "R$ 1.500 – R$ 3.000",
  "R$ 3.000 – R$ 6.000",
  "Acima de R$ 6.000",
  "A combinar",
];

export const DEAL_STAGES: { key: DealStage; label: string }[] = [
  { key: "contato", label: "Contato feito" },
  { key: "conversando", label: "Conversando" },
  { key: "proposta", label: "Proposta enviada" },
  { key: "fechado", label: "Fechado" },
  { key: "entregue", label: "Entregue" },
];

export const HIRE_FORMATS = [
  {
    title: "Vídeo único para redes da marca",
    description:
      "Vídeo vertical estilo TikTok/Reels, gravado e editado por mim, entregue em MP4 pronto para postar.",
  },
  {
    title: "Pacote de vídeos (3 a 5 unidades)",
    description:
      "Ideal para testar variações de roteiro/ângulo com a mesma marca ou produto.",
  },
  {
    title: "UGC para anúncio (Ads)",
    description:
      "Conteúdo pensado para performance em mídia paga, com gancho forte nos primeiros segundos.",
  },
];

export const DELIVERY_INFO = {
  prazoPadrao: "5 a 7 dias úteis após o produto/briefing em mãos",
  prazoExpress: "48h úteis (sob consulta, com taxa adicional)",
  emiteNota: "Sim, emito nota fiscal como profissional autônoma (MEI).",
};

export const SOCIAL_PROOF_PLACEHOLDERS = [
  {
    type: "resultado" as const,
    label: "Print de resultado (exemplo)",
    caption: "Aqui entra um print de views/engajamento de uma campanha real.",
  },
  {
    type: "resultado" as const,
    label: "Print de resultado (exemplo)",
    caption: "Aqui entra um print de métricas de anúncio (Ads) real.",
  },
  {
    type: "depoimento" as const,
    label: "Depoimento (exemplo)",
    caption: "“Depoimento da marca sobre o resultado da parceria.” — Nome da Marca",
  },
];
