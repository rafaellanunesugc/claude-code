import type { DealStage } from "@/lib/types";

export const DEAL_STAGES: { key: DealStage; label: string }[] = [
  { key: "contato", label: "Contato feito" },
  { key: "conversando", label: "Conversando" },
  { key: "proposta", label: "Proposta enviada" },
  { key: "fechado", label: "Fechado" },
  { key: "entregue", label: "Entregue" },
];

export type ContentCategory = "influenciadora" | "ugc";

export const CATEGORY_LABELS: Record<ContentCategory, string> = {
  influenciadora: "Influenciadora",
  ugc: "UGC",
};

export type PortfolioVideo = {
  id: string;
  title: string;
  category: ContentCategory;
  videoUrl: string;
  gradient: string;
};

// Vídeo de exemplo (placeholder) — trocar pelos vídeos reais depois.
const SAMPLE_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export const HERO_STATS = [
  { value: "+30", label: "marcas atendidas" },
  { value: "23,8K", label: "seguidores" },
];

export const AVAILABILITY_STATUS = "Disponível para novas campanhas";

export const MARQUEE_TAGS = [
  "UGC Creator",
  "Influenciadora",
  "Publicidade no Perfil",
  "Anúncios",
  "UGC Manager",
];

// Marcas atendidas — placeholders até ela enviar os logos reais.
export const BRAND_LOGOS = [
  "Marca 01",
  "Marca 02",
  "Marca 03",
  "Marca 04",
  "Marca 05",
  "Marca 06",
  "Marca 07",
  "Marca 08",
];

export const ABOUT_ME_PARAGRAPHS = [
  "Sou Rafa Nunes, tenho 25 anos, estou me formando em Marketing pela Universidade Católica de Brasília e moro em Goiânia.",
  "Antes de criar conteúdo, passei 5 anos no mercado corporativo, incluindo uma passagem pela Amcham Brasil, fui líder das áreas de eventos, onde saí como sênior da área comercial. Fui maquiadora por mais de 10 anos. Sempre fui a pessoa que enxerga estratégia em tudo: num evento bem planejado, numa campanha de marca, num vídeo que vende sem parecer que está vendendo. Foi esse olhar que me trouxe pra criação de conteúdo.",
  "Hoje transformei isso em profissão. Já criei conteúdo sobre produtos da Nivea com mais de 435 mil visualizações no orgânico, conteúdo educativo para a E-lens com 337 mil visualizações, conteúdo orgânico para a L'Oréal Paris com 243 mil visualizações, e um criativo de tráfego pago para a Peça Rara alcançando quase 92 mil contas. Atuo principalmente nos nichos de beleza e saúde e bem-estar.",
  "Não penso só no vídeo bonito. Penso em roteiro pensado pra conversão, edição alinhada com o algoritmo e estratégia de marca por trás de cada entrega. A faculdade me deu a base, os 5 anos de corporativo me deram visão comercial, e a prática me deu o repertório.",
  "Meu compromisso: entregar conteúdo que faça sentido pra marca, pro público e pro resultado. Sempre.",
];

export const SOCIAL_HANDLES = {
  instagram: "@rafaellanunesx",
  tiktok: "@rafaellanunesxx",
};

export const PROFILE_TOPICS = [
  "Cachos",
  "Transição capilar",
  "Maquiagem",
  "Skincare",
  "Vida saudável",
  "Emagrecimento",
  "Treinos",
  "Rotina",
  "Relacionamento",
  "UGC",
  "Criação de conteúdo",
];

export const CONTENT_FORMATS = [
  "Tutoriais e demonstrações",
  "Storytelling",
  "Reviews",
  "Conteúdos de rotina",
  "Criativos para anúncios",
];

export const LOCAL_SERVICE_CITIES = ["Goiânia-GO", "Jataí-GO"];

export const WORK_FORMATS = [
  {
    title: "Publicidade no meu perfil",
    description:
      "Conteúdo publicado no meu perfil, no Instagram (@rafaellanunesx) ou no TikTok (@rafaellanunesxx). Comunidade, engajamento real, presença diária, orgânico.",
  },
  {
    title: "UGC",
    description:
      "Vídeos no estilo depoimento real, gravados pra rodar como anúncio de performance ou publicação orgânica da marca. Roteiro próprio e variações por entrega.",
  },
  {
    title: "UGC Manager",
    description:
      "Gestão de campanhas de UGC para marcas: curadoria de creators, briefing, aprovação e entrega final.",
  },
  {
    title: "Estratégia & Consultoria UGC",
    description:
      "Consultoria de estratégia UGC pra creators: como iniciar no UGC, criação de portfólio, abordagem de marcas, profissionalização, equipamentos e como escalar.",
  },
  {
    title: "Stories",
    description:
      "Divulgação de produtos ou serviços nos stories, com audiência de até 1.000 visualizadores e comunidade engajada.",
  },
  {
    title: "Visitas presenciais",
    description:
      "Para empresas de Goiânia e Jataí: conhecer o espaço, os serviços e fazer visitas mensais de acompanhamento.",
  },
  {
    title: "Provador",
    description:
      "Prova de looks em lojas físicas ou virtuais de roupas, com conteúdo em vídeo do processo de escolha e resultado final.",
  },
  {
    title: "Videomaker",
    description:
      "Captação e edição de vídeos em eventos, consultórios, lojas e outros espaços — do registro bruto à entrega final editada.",
  },
  {
    title: "Calendário de Conteúdos",
    description:
      "Para creators e empresas: consultoria de criação de conteúdo para perfis em redes sociais, com acompanhamento, mentoria, comunicação e plano personalizado.",
  },
];

export const DELIVERY_INFO = {
  prazoPadrao: "5 a 7 dias úteis após o produto/briefing em mãos",
  prazoExpress: "48h úteis (sob consulta, com taxa adicional)",
  emiteNota: "Sim, emito nota fiscal como profissional autônoma (MEI).",
};

export const WHY_UGC = {
  headline: "Sobre o UGC",
  paragraph:
    "User Generated Content (UGC) é conteúdo criado por pessoas reais — vídeos, fotos e reviews — no lugar de anúncios tradicionais. É autêntico, criativo e aumenta a confiança e o engajamento dos consumidores.",
  stats: [
    "Conteúdo autêntico que gera confiança",
    "Até 7x mais vendas que a publicidade tradicional",
    "Melhora o SEO da marca",
    "Terceirização eficiente de conteúdo — sem precisar de equipe interna",
  ],
};

export const PORTFOLIO_VIDEOS: PortfolioVideo[] = [
  {
    id: "influencer-1",
    title: "Rotina de skincare (exemplo)",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-400 via-brand-600 to-ink-900",
  },
  {
    id: "influencer-2",
    title: "Get ready with me (exemplo)",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-800 via-brand-700 to-brand-400",
  },
  {
    id: "influencer-3",
    title: "Transição capilar (exemplo)",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-600 via-ink-800 to-ink-900",
  },
  {
    id: "influencer-4",
    title: "Treino e rotina saudável (exemplo)",
    category: "influenciadora",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-300 via-brand-500 to-ink-800",
  },
  {
    id: "ugc-1",
    title: "Depoimento de produto (exemplo)",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-700 via-brand-600 to-brand-300",
  },
  {
    id: "ugc-2",
    title: "Unboxing pra anúncio (exemplo)",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-500 via-ink-900 to-brand-700",
  },
  {
    id: "ugc-3",
    title: "Review estilo review real (exemplo)",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-ink-900 via-brand-400 to-brand-600",
  },
  {
    id: "ugc-4",
    title: "Storytelling de marca (exemplo)",
    category: "ugc",
    videoUrl: SAMPLE_VIDEO,
    gradient: "from-brand-700 via-ink-800 to-brand-300",
  },
];

export const FEATURED_VIDEOS = PORTFOLIO_VIDEOS.slice(0, 3);

export const FAQ_ITEMS = [
  {
    question: "Como posso usar o conteúdo?",
    answer:
      "Os conteúdos podem ser usados nas redes sociais, tráfego pago (ads), catálogos, sites, e-commerces, marketplaces...",
  },
  {
    question: "Por quanto tempo?",
    answer:
      "Uso vitalício para redes sociais, e um prazo de alguns meses para uso em tráfego pago — a combinar conforme a campanha.",
  },
  {
    question: "Tem exclusividade?",
    answer:
      "Para garantir exclusividade do seu nicho é necessário uma conversa/investimento extra.",
  },
  {
    question: "Qual o tempo de entrega?",
    answer:
      "Os conteúdos são entregues em até 7 dias após o produto chegar na minha casa.",
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

export const BUDGET_RANGES = [
  "Até R$ 500",
  "R$ 500 – R$ 1.500",
  "R$ 1.500 – R$ 3.000",
  "R$ 3.000 – R$ 6.000",
  "Acima de R$ 6.000",
  "A combinar",
];

export const FEEDBACK_PLACEHOLDERS = [
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
