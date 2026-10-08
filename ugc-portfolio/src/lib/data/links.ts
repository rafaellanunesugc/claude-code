import { SOCIAL_LINKS, WHATSAPP_NUMBER } from "@/lib/data/placeholders";

// Conteúdo da página /links (o "link na bio").
// Para trocar textos, links ou cupons, é só editar este arquivo.

// Abre o WhatsApp já com uma mensagem escrita. Usado nos produtos que ainda
// não têm página de venda própria — quando tiver, troque o `href` pelo link.
export function whatsappLink(message: string) {
  return `https://wa.me/55${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const LINKS_PROFILE = {
  name: "Rafa Nunes",
  role: "Creator UGC · Saúde, bem-estar & beleza",
  bio: "Que bom te ver por aqui! Eu crio conteúdo que conecta e vende para marcas de saúde, bem-estar e beleza — e ajudo quem tá começando a fazer o mesmo. Aqui embaixo tá tudo: portfólio, cupons, mentoria e o CRIA.",
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
    title: "Hey marca, acesse meu portfólio",
    description: "Vídeos, cases, formatos e como fechar uma parceria comigo",
    href: "/",
    icon: "briefcase" as const,
    featured: true,
  },
  {
    title: "Pedir um orçamento",
    description: "Me conta sobre a campanha e eu te respondo rapidinho",
    href: "/#contato",
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
};

export const CREATOR_PRODUCTS: ProductLink[] = [
  {
    tag: "Curso ao vivo",
    title: "CRIA",
    description:
      "Aulas ao vivo pra você sair do zero e começar a fechar com marcas como creator UGC — com o passo a passo que eu uso.",
    href: whatsappLink("Oi, Rafa! Quero saber mais sobre o CRIA, o curso ao vivo."),
    cta: "Quero participar",
  },
  {
    tag: "Mentoria 1:1 · Vagas limitadas",
    title: "Mentoria individual",
    description: "Acompanhamento comigo, no seu ritmo e no seu perfil",
    href: whatsappLink("Oi, Rafa! Quero saber mais sobre a mentoria individual."),
  },
  {
    tag: "Em breve",
    title: "Modelo de portfólio",
    description: "O modelo pronto pra você montar o seu e mandar pras marcas",
    href: whatsappLink("Oi, Rafa! Quero entrar na lista de espera do modelo de portfólio."),
    soon: true,
  },
  {
    tag: "Em breve",
    title: "Diagnóstico de perfil",
    description: "Uma análise do seu perfil com o que ajustar pra atrair marcas",
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
