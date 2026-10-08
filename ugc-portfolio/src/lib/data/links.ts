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
};

export const CREATOR_PRODUCTS: ProductLink[] = [
  {
    tag: "Curso ao vivo",
    title: "CRIA",
    description:
      "Encontros ao vivo comigo pra você montar seu perfil, gravar seus primeiros vídeos e chegar nas marcas com segurança.",
    href: whatsappLink("Oi, Rafa! Quero saber mais sobre o CRIA, o curso ao vivo."),
    cta: "Quero entrar no CRIA",
  },
  {
    tag: "Mentoria 1:1 · Vagas limitadas",
    title: "Mentoria individual",
    description: "Um plano feito pro seu perfil, olhando junto cada passo",
    href: whatsappLink("Oi, Rafa! Quero saber mais sobre a mentoria individual."),
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
// TROCAR pelos cupons reais (marca, desconto, código e link da loja).
export const COUPONS = [
  {
    brand: "Nome da marca",
    discount: "10% OFF",
    code: "RAFA10",
    href: "#",
  },
  {
    brand: "Nome da marca",
    discount: "15% OFF",
    code: "RAFA15",
    href: "#",
  },
];

export const LINKS_SOCIALS = SOCIAL_LINKS;
