import { whatsappLink } from "@/lib/data/links";

// Conteúdo da landing page da mentoria (/mentoria).
// Preço, encontros e slogan vêm de MENTORIA em links.ts, pra ficar igual ao link da bio.
// Para trocar qualquer texto desta página, é só editar aqui.

export const MENTORIA_LP = {
  heroTitle: "Mentoria 1:1",
  heroAccent: "com a Rafa Nunes",
  heroText:
    "Você já cria conteúdo. Agora é hora de transformar isso em parceria paga. Em 30 dias, eu te acompanho de perto pra montar perfil, portfólio e abordagem até você estar pronta pra fechar com marcas.",

  // "Isso é pra você se..."
  forYou: [
    "Você grava conteúdo, mas ainda não sabe como cobrar por isso.",
    "Quer começar no UGC e não sabe por onde começar.",
    "Já mandou mensagem pra marca e ficou no vácuo.",
    "Não tem portfólio, ou tem e sente que ele não vende você.",
    "Tem vergonha de se posicionar como profissional.",
    "Cansou de curso genérico e quer alguém olhando o SEU perfil.",
  ],

  // O que muda depois da mentoria
  outcomes: [
    { title: "Perfil profissional", text: "Bio, destaques e direção clara: a marca entende quem você é em segundos." },
    { title: "Portfólio pronto", text: "Um portfólio com cara de profissional, pronto pra mandar." },
    { title: "Conteúdo que vende", text: "Vídeos com gancho, roteiro e estética de parceria paga." },
    { title: "Lista de marcas + abordagem", text: "Saber quem procurar, o que mandar e quanto cobrar." },
  ],

  // Por que 1:1
  whyOneToOne: [
    { title: "Só você e eu", text: "Os encontros são individuais. Nada de turma, nada de aula gravada." },
    { title: "Pensado pro seu nicho", text: "Beleza, saúde, lifestyle, maternidade... a estratégia é montada pro seu perfil." },
    { title: "Acompanhamento real", text: "Entre um encontro e outro, eu vejo o que você produz e ajusto com você." },
  ],

  about: {
    photo: "/images/about.jpg",
    title: "Prazer, eu sou a Rafa",
    paragraphs: [
      "Sou UGC Creator e influenciadora em Goiânia, com mais de 60 marcas atendidas nos nichos de beleza, saúde e bem-estar.",
      "Antes disso (e até hoje) trabalho com eventos e marketing no corporativo. Por isso eu sei o que a marca procura do outro lado: profissionalismo, clareza e entrega.",
      "Na mentoria eu te passo exatamente o que eu faço no dia a dia, do roteiro à proposta, pra você não perder tempo tentando adivinhar.",
    ],
  },

  includes: [
    "4 encontros individuais ao vivo, comigo",
    "Análise completa do seu perfil",
    "Estrutura de portfólio profissional",
    "Roteiros e direção de conteúdo",
    "Modelo de mensagem pra abordar marcas",
    "Acompanhamento pelo WhatsApp por 30 dias",
  ],

  faq: [
    {
      question: "Preciso ter muitos seguidores?",
      answer:
        "Não. No UGC a marca paga pelo vídeo, não pelo seu número de seguidores. Dá pra começar com o perfil pequeno.",
    },
    {
      question: "Nunca fiz nenhum trabalho pago. A mentoria serve pra mim?",
      answer:
        "Serve, e foi pensada exatamente pra isso. A gente começa do seu momento atual, mesmo que seja do zero.",
    },
    {
      question: "Como funcionam os encontros?",
      answer:
        "São 4 encontros online e individuais, ao longo de 30 dias. Os horários são combinados comigo, de acordo com a sua rotina.",
    },
    {
      question: "Preciso ter equipamento profissional?",
      answer: "Não. Dá pra fazer conteúdo de qualidade só com o celular, e eu te mostro como.",
    },
    {
      question: "Vou ter garantia de fechar com marcas?",
      answer:
        "Ninguém pode garantir isso com honestidade. O que eu garanto é que você vai sair com perfil, portfólio e abordagem prontos, e sabendo exatamente o que fazer.",
    },
    {
      question: "Como faço pra garantir minha vaga?",
      answer:
        "É só clicar no botão e me chamar no WhatsApp. Eu te explico tudo e a gente combina a data de início.",
    },
  ],

  finalTitle: "Seu conteúdo pode",
  finalAccent: "virar profissão.",
  finalText: "As vagas são limitadas porque eu acompanho cada aluna de perto.",
  doubtHref: whatsappLink("Oi, Rafa! Vi a página da mentoria e fiquei com uma dúvida."),
};
