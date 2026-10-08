import { SOCIAL_LINKS, WHATSAPP_NUMBER } from "@/lib/data/placeholders";

// Conteúdo da página principal (o "link na bio"). O portfólio fica em /portfolio.
// Para trocar textos, links ou cupons, é só editar este arquivo.

// Abre o WhatsApp já com uma mensagem escrita. Usado nos produtos que ainda
// não têm página de venda própria — quando tiver, troque o `href` pelo link.
export function whatsappLink(message: string) {
  return `https://wa.me/55${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const LINKS_PROFILE = {
  name: "Rafa Nunes",
  role: "UGC Creator · Influenciadora · Mentora de Creators",
  bio: "Crio vídeos UGC e conteúdo de influência que fazem as marcas serem lembradas. E ensino quem tá começando a transformar conteúdo em parceria paga.",
  photo: "/images/foto-capa.jpg",
  stats: [
    { value: "+45", label: "marcas atendidas" },
    { value: "23,8K", label: "seguidores" },
  ],
  email: "rafaellanunes.contato@gmail.com",
};

// Seção "Sou marca"
export const BRAND_LINKS = [
  {
    title: "Ver meu portfólio",
    description: "Meus vídeos, as marcas que já confiaram em mim e como eu trabalho",
    href: "/portfolio",
    icon: "briefcase" as const,
    featured: true,
  },
  {
    title: "Solicitar orçamento",
    description: "Conte sua ideia de campanha e receba uma proposta sob medida",
    href: "/portfolio#contato",
    icon: "send" as const,
    featured: false,
  },
];

// Seção "Sou creator" — o primeiro item aparece em destaque.
export type ProductLink = {
  tag?: string;
  title: string;
  description: string;
  href: string;
  cta?: string;
  soon?: boolean;
  // Imagem do logo (em /public). Quando existir, aparece no lugar do título.
  logo?: string;
  subtitle?: string;
  details?: string;
  price?: string;
  // Produtos do CRIA usam as cores da marca do curso.
  cria?: boolean;
};

export const CREATOR_PRODUCTS: ProductLink[] = [
  {
    tag: "Curso ao vivo · Método CRIA",
    title: "CRIA LAB",
    logo: "/images/cria-logo.png",
    subtitle: "Da criação à profissionalização",
    description:
      "7 aulas ao vivo para transformar criação de conteúdo em posicionamento, oportunidade e profissão.",
    details: "Aulas ao vivo de 19/10 a 09/11 · segundas e quartas, 19h30",
    href: "https://criametodo.netlify.app",
    cta: "Quero minha vaga no CRIA LAB",
  },
  {
    tag: "Mentoria individual",
    title: "CRIA 1:1 com a Rafa",
    description: "30 dias · 4 encontros individuais · acompanhamento direto comigo",
    price: "R$ 998",
    href: whatsappLink("Oi, Rafa! Quero a mentoria CRIA 1:1."),
    cta: "Quero a mentoria com a Rafa",
    cria: true,
  },
  {
    tag: "Em breve",
    title: "Modelo de portfólio",
    description: "A estrutura que eu uso, pronta pra você preencher com seus vídeos",
    href: whatsappLink("Oi, Rafa! Quero entrar na lista de espera do modelo de portfólio."),
    soon: true,
  },
  {
    tag: "Em breve",
    title: "Diagnóstico de perfil",
    description: "Eu analiso seu perfil e te digo o que mudar antes de prospectar",
    href: whatsappLink("Oi, Rafa! Quero entrar na lista de espera do diagnóstico de perfil."),
    soon: true,
  },
];

// Cupons de desconto. Se a lista ficar vazia, a seção some da página.
// `discount` e `href` (link da loja) são opcionais.
export type Coupon = {
  brand: string;
  code: string;
  logo?: string;
  discount?: string;
  href?: string;
};

export const COUPONS: Coupon[] = [
  {
    brand: "Saint Germain",
    code: "a-rafaanunesg",
    logo: "/images/logos/saint-germain.png",
  },
  {
    brand: "Mafit",
    code: "RAFANUNES5",
  },
];

export const LINKS_SOCIALS = SOCIAL_LINKS;
