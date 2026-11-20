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
    { value: "+60", label: "marcas atendidas" },
    { value: "25K", label: "seguidores" },
    { value: "+15", label: "alunas" },
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
    description: "Me chama no WhatsApp com a sua ideia de campanha e receba uma proposta sob medida",
    href: whatsappLink("Olá, Rafa! Sou de uma marca e gostaria de solicitar um orçamento para uma campanha."),
    icon: "send" as const,
    featured: false,
  },
];

// Seção "Sou creator": a mentoria em destaque, seguida dos outros produtos.
export const MENTORIA = {
  tag: "Mentoria individual · vagas limitadas",
  title: "Mentoria",
  slogan: "Transformando conteúdo em profissão.",
  photo: "/images/portrait-2.jpg",
  pitch:
    "30 dias comigo, só você e eu. Nada de aula genérica: tudo pensado pro seu perfil, o seu nicho e o seu momento, até você fechar com marcas.",
  proof: [
    { value: "+15", label: "alunas mentoradas" },
    { value: "+60", label: "marcas que eu já atendi" },
  ],
  steps: [
    { title: "Posicionamento e perfil", text: "Bio e direção pra marca entender quem você é logo de cara." },
    { title: "Conteúdo", text: "Vídeos que conectam e têm cara de parceria paga." },
    { title: "Portfólio", text: "Um portfólio profissional pra mandar pras marcas." },
    { title: "Abordagem", text: "Como achar as marcas certas e ser aprovada." },
  ],
  bonus: "Entre um encontro e outro, eu acompanho o que você produz e ajusto tudo na prática.",
  price: "R$ 998",
  priceNote: "4 encontros individuais + acompanhamento por 30 dias",
  href: whatsappLink("Oi, Rafa! Quero garantir minha vaga na mentoria."),
  cta: "Quero minha vaga na mentoria",
};

export type ProductLink = {
  tag?: string;
  title: string;
  description: string;
  href: string;
  soon?: boolean;
};

export const CREATOR_PRODUCTS: ProductLink[] = [
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

// Aba "Meu setup": os equipamentos que eu uso, com os meus links de afiliada.
// Para cada produto:
//   - `store`: loja do link ("Mercado Livre", "Amazon", "Shopee" ou outra)
//   - `href`: o seu link de afiliada. Sem `href`, o cartão mostra "Link em breve".
//   - `image`: foto do produto. Coloque o arquivo em public/images/setup/ e
//     escreva o caminho, ex.: "/images/setup/celular.jpg". Sem foto, aparece um ícone.
export type SetupProduct = {
  category: string;
  name: string;
  store?: string;
  href?: string;
  image?: string;
};

export const SETUP = {
  photo: "/images/about.jpg",
  eyebrow: "Indicações",
  title: "Meu setup",
  accent: "de gravação.",
  text: "Os equipamentos que eu uso de verdade pra gravar meus vídeos.",
  // Aviso de afiliada: obrigatório por transparência (CONAR).
  disclaimer: "Alguns links são de afiliada: se você comprar por eles, eu ganho uma pequena comissão e você não paga nada a mais.",
};

// EXEMPLOS: troque pelos seus produtos e links reais.
export const SETUP_PRODUCTS: SetupProduct[] = [
  { category: "Celular", name: "Meu celular" },
  { category: "Iluminação", name: "Ring light" },
  { category: "Áudio", name: "Microfone de lapela" },
  { category: "Suporte", name: "Tripé de celular" },
];

export const LINKS_SOCIALS = SOCIAL_LINKS;
