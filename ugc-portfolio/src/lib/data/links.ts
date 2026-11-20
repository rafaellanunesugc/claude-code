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
  photo: "/images/about.jpg",
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

export const LINKS_SOCIALS = SOCIAL_LINKS;

// Aba "Meu setup": equipamentos com link de afiliada.
// Para adicionar um item: coloque a foto em public/images/setup/ e preencha
// categoria, nome, loja e o seu link de afiliada. Com a lista vazia, a aba some.
export type SetupStore = "Mercado Livre" | "Amazon" | "Shopee" | "Magalu" | "TikTok Shop" | "Outra loja";

export type SetupItem = {
  category: string;
  name: string;
  store: SetupStore;
  href: string;
  // Foto do produto em public/images/setup/. Sem foto, o item aparece só com o texto.
  image?: string;
};

export const SETUP_INTRO: {
  photo?: string;
  eyebrow: string;
  title: string;
  accent: string;
  text: string;
  disclosure: string;
} = {
  // Foto opcional do topo da aba (ex.: você com a câmera). Sem foto, o cartão fica só com o texto.
  photo: undefined,
  eyebrow: "Indicações",
  title: "O que eu uso",
  accent: "pra gravar.",
  text: "Os equipamentos da minha rotina de criação. E lembra: você pode começar com o que já tem!",
  disclosure:
    "Links de afiliada: comprando por eles, você paga o mesmo preço e ainda me ajuda a continuar criando conteúdo.",
};

export const SETUP_ITEMS: SetupItem[] = [
  { category: "Celular", name: "iPhone 17 Pro Max", store: "Mercado Livre", href: "https://meli.la/11ST6KG", image: "/images/setup/iphone-17-pro-max.jpg" },
  { category: "Microfone", name: "Hollyland Lark A1", store: "Mercado Livre", href: "https://meli.la/2hMvGEC", image: "/images/setup/hollyland-lark-a1.jpg" },
  {
    category: "Iluminação",
    name: "Ring Light LED Braço Duplo 45W + Tripé + Bolsa",
    store: "Mercado Livre",
    href: "https://meli.la/2mVWp7Z",
    image: "/images/setup/ring-light-braco-duplo.jpg",
  },
  { category: "Acessório", name: "Tela Magnética", store: "Mercado Livre", href: "https://meli.la/1u75Lyu" },
  {
    category: "Iluminação",
    name: "Lanterna VEDO",
    store: "TikTok Shop",
    href: "https://shop.tiktok.com/br/pdp/1737082375400490939?_t=ZS-99yRzLJfFiS",
    image: "/images/setup/lanterna-vedo.jpg",
  },
  { category: "Tripé", name: "Tripé Magnético TT88", store: "Shopee", href: "https://s.shopee.com.br/AAHO8RVdxN", image: "/images/setup/tripe-magnetico-tt88.jpg" },
  { category: "Iluminação", name: "Luz de Preenchimento RGB Tomate", store: "Shopee", href: "https://s.shopee.com.br/4fwRaDg4am" },
  {
    category: "Iluminação",
    name: "Bastão de Luz Ulanzi UA20",
    store: "Shopee",
    href: "https://s.shopee.com.br/9Kjl3C1asN",
    image: "/images/setup/bastao-luz-ulanzi-ua20.jpg",
  },
  { category: "Iluminação", name: "Rebatedor Fotográfico", store: "Shopee", href: "https://s.shopee.com.br/5VVYZUjV5t" },
  { category: "Suporte", name: "Suporte de Celular com Ventosa", store: "Shopee", href: "https://s.shopee.com.br/1qcGCpmVG9" },
  { category: "Bateria", name: "Power Bank", store: "Shopee", href: "https://s.shopee.com.br/7AdmYiv7BE" },
];
