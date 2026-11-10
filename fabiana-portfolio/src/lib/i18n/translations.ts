export type Locale = "pt" | "en";

export const LOCALE_LABELS: Record<Locale, { flag: string; short: string }> = {
  pt: { flag: "🇧🇷", short: "PT" },
  en: { flag: "🇺🇸", short: "EN" },
};

type WorkFormat = { title: string; description: string };

export type Translations = {
  blackFridayBanner: {
    text: string;
    cta: string;
  };
  nav: {
    sobre: string;
    portfolio: string;
    trabalhar: string;
    feedbacks: string;
    contato: string;
    cta: string;
  };
  hero: {
    availability: string;
    tagline: string;
    stats: { value: string; label: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
    coverPlaceholder: string;
  };
  marquee: string[];
  statement: { line1: string; line2: string };
  brandLogos: { eyebrow: string; titleBold: string; titleItalic: string; subtitle: string };
  studio: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
    gear: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    commitment: string;
    chips: string[];
    stats: { value: string; label: string }[];
  };
  influencer: {
    eyebrow: string;
    title: string;
    subtitle: string;
    followersSuffix: string;
    profileTopicsTitle: string;
    topics: string[];
    metrics: {
      periodLabel: string;
      genderLabel: string;
      ageLabel: string;
      locationLabel: string;
      citiesLabel: string;
      instagram: {
        heading: string;
        stats: { label: string; value: string }[];
        topFormats: string;
        gender: { label: string; value: number }[];
        age: { label: string; value: number }[];
        location: { brazil: number; cities: string[] };
      };
      tiktok: {
        heading: string;
        stats: { label: string; value: string }[];
        gender: { label: string; value: number }[];
        age: { label: string; value: number }[];
      };
    };
  };
  ugc: {
    eyebrow: string;
    title: string;
    subtitle: string;
    formats: string[];
  };
  work: {
    eyebrow: string;
    titleSuffix: string;
    localNote: string;
    scrollHint: string;
    ctaLabel: string;
    formats: WorkFormat[];
    deliveryLabels: { prazoPadrao: string; prazoExpress: string; nota: string };
    delivery: { prazoPadrao: string; prazoExpress: string; emiteNota: string };
  };
  portfolio: {
    title: string;
    subtitle: string;
    filters: { todos: string; influenciadora: string; ugc: string };
    videoTitles: Record<string, string>;
  };
  photos: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  feedbacks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    resultLabel: string;
    testimonialLabel: string;
    verifiedLabel: string;
    items: { caption: string; footnote: string; image?: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  whyUgc: {
    eyebrow: string;
    title: string;
    paragraph: string;
    stats: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    whatsappMessage: string;
    submit: string;
  };
  footer: { rights: string };
  popup: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    whatsappMessage: string;
    submit: string;
  };
};

export const translations: Record<Locale, Translations> = {
  pt: {
    blackFridayBanner: {
      text: "✨ Vagas abertas para novas parcerias de conteúdo — fala comigo e garanta seu espaço na agenda.",
      cta: "Solicitar proposta",
    },
    nav: {
      sobre: "Sobre",
      portfolio: "Portfólio",
      trabalhar: "Trabalhar comigo",
      feedbacks: "Feedbacks",
      contato: "Contato",
      cta: "Solicitar proposta",
    },
    hero: {
      availability: "Disponível para novas campanhas",
      tagline: "vídeos que conectam e vendem",
      stats: [
        { value: "+0", label: "marcas atendidas" },
        { value: "0K", label: "seguidores" },
      ],
      ctaPrimary: "Solicitar proposta",
      ctaSecondary: "Ver portfólio",
      coverPlaceholder: "Foto de capa (em breve)",
    },
    marquee: [
      "UGC Creator",
      "Influenciadora",
      "Publicidade no Perfil",
      "Anúncios",
      "Conteúdo de Marca",
    ],
    statement: {
      line1: "UGC E CONTEÚDO DE MARCA",
      line2: "pensados pra vender de verdade.",
    },
    brandLogos: {
      eyebrow: "Marcas atendidas",
      titleBold: "Marcas, histórias",
      titleItalic: "sendo feitas juntas.",
      subtitle: "Marcas que já confiaram no meu trabalho.",
    },
    studio: {
      eyebrow: "Como eu trabalho",
      title: "Estúdio & Qualidade Técnica.",
      items: [
        {
          title: "Equipamento e captação profissional",
          description:
            "Iluminação, câmera e áudio cuidados em cada gravação, pra imagem e som saírem prontos pra rodar em anúncio.",
        },
        {
          title: "Estratégia de conteúdo",
          description:
            "Cada vídeo pensado com roteiro e objetivo claro, pra entregar resultado de verdade pra marca, não só aparecer bonito.",
        },
      ],
      gear: ["[Câmera/Celular]", "[Iluminação]", "[Microfone]", "[Estúdio/local de gravação]"],
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Muito além de uma creator.",
      paragraphs: [
        "Sou Fabiana Pizoni, criadora de conteúdo UGC e influenciadora. [Conte aqui sua idade, formação, cidade onde mora e um resumo rápido de quem você é.]",
        "[Conte sua trajetória: o que você fazia antes de criar conteúdo, o que te trouxe até aqui, e o que te diferencia das outras creators.]",
        "[Liste aqui resultados reais: marcas que já trabalhou, números de visualizações em destaque, campanhas de sucesso.]",
        "[Feche com como você pensa a criação de conteúdo: o que guia o seu trabalho pra além do vídeo bonito.]",
      ],
      commitment:
        "Meu compromisso: entregar conteúdo que faça sentido pra marca, pro público e pro resultado. Sempre.",
      chips: ["UGC Creator", "Influenciadora", "Criadora de Conteúdo"],
      stats: [
        { value: "[idade]", label: "Idade" },
        { value: "[Cidade-UF]", label: "Base" },
        { value: "[anos]", label: "De experiência" },
        { value: "0K", label: "Seguidores" },
      ],
    },
    influencer: {
      eyebrow: "Como influenciadora",
      title: "Converso de perto com o meu público, todos os dias.",
      subtitle:
        "[Explique por que a sua audiência confia no que você recomenda e como é essa relação com o seu público.]",
      followersSuffix: "seguidores",
      profileTopicsTitle: "O que você vai encontrar no meu perfil",
      topics: ["[Tema 1]", "[Tema 2]", "[Tema 3]", "[Tema 4]", "[Tema 5]"],
      metrics: {
        periodLabel: "Últimos 60 dias",
        genderLabel: "Gênero",
        ageLabel: "Faixa etária",
        locationLabel: "Localização",
        citiesLabel: "Principais cidades",
        instagram: {
          heading: "Instagram",
          stats: [
            { label: "Visualizações", value: "0" },
            { label: "Seguidores líquidos", value: "+0" },
            { label: "Interações", value: "0" },
            { label: "Visitas ao perfil", value: "0" },
            { label: "Seguidores totais", value: "0" },
          ],
          topFormats: "Os formatos que mais performam são Reels e Stories.",
          gender: [
            { label: "Mulheres", value: 0 },
            { label: "Homens", value: 0 },
          ],
          age: [
            { label: "18–24", value: 0 },
            { label: "25–34", value: 0 },
            { label: "35–44", value: 0 },
            { label: "45–54", value: 0 },
          ],
          location: {
            brazil: 0,
            cities: ["[Cidade]", "[Cidade]", "[Cidade]"],
          },
        },
        tiktok: {
          heading: "TikTok",
          stats: [
            { label: "Seguidores", value: "0" },
            { label: "Visualizações", value: "0" },
            { label: "Visitas ao perfil", value: "0" },
          ],
          gender: [
            { label: "Mulheres", value: 0 },
            { label: "Homens", value: 0 },
          ],
          age: [
            { label: "18–24", value: 0 },
            { label: "25–34", value: 0 },
            { label: "35–44", value: 0 },
          ],
        },
      },
    },
    ugc: {
      eyebrow: "Como UGC Creator",
      title: "Conteúdo feito pra vender, gravado com cara de gente real.",
      subtitle:
        "Gosto de explorar diferentes formatos e ângulos, desde tutoriais e demonstrações até storytelling, reviews e criativos para anúncios.",
      formats: [
        "Tutoriais e demonstrações",
        "Storytelling",
        "Reviews",
        "Conteúdos de rotina",
        "Criativos para anúncios",
      ],
    },
    work: {
      eyebrow: "Como podemos trabalhar juntas",
      titleSuffix: "formas de trabalhar comigo",
      localNote:
        "[Se fizer atendimento presencial, descreva aqui as cidades/região atendidas.]",
      scrollHint: "Arraste pro lado pra ver tudo · cada serviço abre no WhatsApp.",
      ctaLabel: "Solicitar orçamento",
      formats: [
        {
          title: "Publicidade no meu perfil",
          description:
            "Conteúdo publicado no meu perfil, no Instagram e no TikTok. Comunidade, engajamento real, presença diária, orgânico.",
        },
        {
          title: "UGC",
          description:
            "Vídeos no estilo depoimento real, gravados pra rodar como anúncio de performance ou publicação orgânica da marca.",
        },
        {
          title: "Stories",
          description:
            "Divulgação de produtos ou serviços nos stories, com audiência engajada.",
        },
        {
          title: "Videomaker",
          description:
            "Captação e edição de vídeos — do registro bruto à entrega final editada.",
        },
      ],
      deliveryLabels: {
        prazoPadrao: "Prazo padrão",
        prazoExpress: "Prazo expresso",
        nota: "Nota fiscal",
      },
      delivery: {
        prazoPadrao: "[defina seu prazo padrão de entrega]",
        prazoExpress: "[defina seu prazo expresso, se oferecer]",
        emiteNota: "[diga se emite nota fiscal como profissional autônoma/MEI]",
      },
    },
    portfolio: {
      title: "Portfólio",
      subtitle: "Clique num nicho pra filtrar · clique num vídeo pra assistir.",
      filters: { todos: "Todos", influenciadora: "Influenciadora", ugc: "UGC" },
      videoTitles: {
        "influencer-1": "Rotina de skincare (exemplo)",
        "influencer-2": "Get ready with me (exemplo)",
        "influencer-3": "Transição capilar (exemplo)",
        "influencer-4": "Treino e rotina saudável (exemplo)",
        "ugc-1": "Depoimento de produto (exemplo)",
        "ugc-2": "Unboxing pra anúncio (exemplo)",
        "ugc-3": "Review estilo review real (exemplo)",
        "ugc-4": "Storytelling de marca (exemplo)",
      },
    },
    photos: {
      eyebrow: "Fotos",
      title: "Bastidores e resultados em imagem",
      subtitle: "Fotos reais de gravações, produtos e entregas pras marcas que já trabalhei.",
    },
    feedbacks: {
      eyebrow: "Feedbacks",
      title: "O que estão falando do meu trabalho",
      subtitle: "Feedbacks e resultados verdadeiros de trabalhos que já entreguei.",
      resultLabel: "Print de resultado",
      testimonialLabel: "Depoimento",
      verifiedLabel: "Feedback real",
      items: [
        {
          caption: "[Cole aqui um depoimento real recebido de uma marca.]",
          footnote: "[Nome, cargo, empresa]",
        },
        {
          caption: "[Cole aqui outro depoimento real recebido de uma marca.]",
          footnote: "[Nome, cargo, empresa]",
        },
      ],
    },
    faq: {
      eyebrow: "Dúvidas frequentes",
      title: "Perguntas frequentes",
      items: [
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
          answer: "[Defina aqui o seu prazo de entrega padrão.]",
        },
      ],
    },
    whyUgc: {
      eyebrow: "Sobre o UGC",
      title: "Por que investir em UGC agora",
      paragraph:
        "User Generated Content (UGC) é conteúdo criado por pessoas reais — vídeos, fotos e reviews — no lugar de anúncios tradicionais. É autêntico, criativo e aumenta a confiança e o engajamento dos consumidores.",
      stats: [
        "Conteúdo autêntico que gera confiança",
        "Até 7x mais vendas que a publicidade tradicional",
        "Melhora o SEO da marca",
        "Terceirização eficiente de conteúdo — sem precisar de equipe interna",
      ],
    },
    contact: {
      title: "Vamos transformar a sua marca.",
      subtitle: "Me chama no WhatsApp e conta o que sua marca precisa.",
      whatsappMessage: "Olá, Fabiana! Gostaria de solicitar uma proposta para uma campanha.",
      submit: "Chamar no WhatsApp",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
    popup: {
      eyebrow: "Solicitar proposta",
      title: "Vamos criar conteúdo que",
      titleHighlight: "gera resultado?",
      subtitle: "Me chama no WhatsApp e conta rapidinho o que você precisa.",
      whatsappMessage: "Olá, Fabiana! Vim pelo seu site e gostaria de solicitar uma proposta.",
      submit: "Chamar no WhatsApp",
    },
  },
  en: {
    blackFridayBanner: {
      text: "✨ New partnership slots open — reach out and save your spot on the calendar.",
      cta: "Request a quote",
    },
    nav: {
      sobre: "About",
      portfolio: "Portfolio",
      trabalhar: "Work with me",
      feedbacks: "Feedbacks",
      contato: "Contact",
      cta: "Request a quote",
    },
    hero: {
      availability: "Available for new campaigns",
      tagline: "videos that connect and sell",
      stats: [
        { value: "+0", label: "brands served" },
        { value: "0K", label: "followers" },
      ],
      ctaPrimary: "Request a quote",
      ctaSecondary: "View portfolio",
      coverPlaceholder: "Cover photo (coming soon)",
    },
    marquee: [
      "UGC Creator",
      "Influencer",
      "Profile Advertising",
      "Ads",
      "Brand Content",
    ],
    statement: {
      line1: "UGC AND BRAND CONTENT",
      line2: "built to actually sell.",
    },
    brandLogos: {
      eyebrow: "Brands I've worked with",
      titleBold: "Brands, stories",
      titleItalic: "made together.",
      subtitle: "Brands that have already trusted my work.",
    },
    studio: {
      eyebrow: "How I work",
      title: "Studio & Technical Quality.",
      items: [
        {
          title: "Professional gear and capture",
          description:
            "Lighting, camera and audio handled carefully on every shoot, so image and sound come out ready to run as an ad.",
        },
        {
          title: "Content strategy",
          description:
            "Every video built with a clear script and goal, to deliver a real result for the brand — not just look good.",
        },
      ],
      gear: ["[Camera/Phone]", "[Lighting]", "[Microphone]", "[Studio/shooting space]"],
    },
    about: {
      eyebrow: "About me",
      title: "Much more than a creator.",
      paragraphs: [
        "I'm Fabiana Pizoni, a UGC creator and influencer. [Add your age, background, the city you live in, and a quick summary of who you are.]",
        "[Tell your story: what you did before creating content, what brought you here, and what sets you apart from other creators.]",
        "[List real results: brands you've worked with, standout view counts, successful campaigns.]",
        "[Close with how you approach content creation: what guides your work beyond just a pretty video.]",
      ],
      commitment:
        "My commitment: deliver content that makes sense for the brand, the audience, and the result. Always.",
      chips: ["UGC Creator", "Influencer", "Content Creator"],
      stats: [
        { value: "[age]", label: "Age" },
        { value: "[City, State]", label: "Based in" },
        { value: "[years]", label: "Of experience" },
        { value: "0K", label: "Followers" },
      ],
    },
    influencer: {
      eyebrow: "As an influencer",
      title: "I talk closely with my audience, every single day.",
      subtitle:
        "[Explain why your audience trusts what you recommend and what your relationship with them is like.]",
      followersSuffix: "followers",
      profileTopicsTitle: "What you'll find on my profile",
      topics: ["[Topic 1]", "[Topic 2]", "[Topic 3]", "[Topic 4]", "[Topic 5]"],
      metrics: {
        periodLabel: "Last 60 days",
        genderLabel: "Gender",
        ageLabel: "Age range",
        locationLabel: "Location",
        citiesLabel: "Top cities",
        instagram: {
          heading: "Instagram",
          stats: [
            { label: "Views", value: "0" },
            { label: "Net followers", value: "+0" },
            { label: "Interactions", value: "0" },
            { label: "Profile visits", value: "0" },
            { label: "Total followers", value: "0" },
          ],
          topFormats: "The best-performing formats are Reels and Stories.",
          gender: [
            { label: "Women", value: 0 },
            { label: "Men", value: 0 },
          ],
          age: [
            { label: "18–24", value: 0 },
            { label: "25–34", value: 0 },
            { label: "35–44", value: 0 },
            { label: "45–54", value: 0 },
          ],
          location: {
            brazil: 0,
            cities: ["[City]", "[City]", "[City]"],
          },
        },
        tiktok: {
          heading: "TikTok",
          stats: [
            { label: "Followers", value: "0" },
            { label: "Views", value: "0" },
            { label: "Profile visits", value: "0" },
          ],
          gender: [
            { label: "Women", value: 0 },
            { label: "Men", value: 0 },
          ],
          age: [
            { label: "18–24", value: 0 },
            { label: "25–34", value: 0 },
            { label: "35–44", value: 0 },
          ],
        },
      },
    },
    ugc: {
      eyebrow: "As a UGC Creator",
      title: "Content built to sell, shot to feel like a real person.",
      subtitle:
        "I enjoy exploring different formats and angles, from tutorials and demos to storytelling, reviews and ad creatives.",
      formats: [
        "Tutorials & demos",
        "Storytelling",
        "Reviews",
        "Routine content",
        "Ad creatives",
      ],
    },
    work: {
      eyebrow: "How we can work together",
      titleSuffix: "ways to work with me",
      localNote: "[If you offer in-person services, describe the cities/region covered here.]",
      scrollHint: "Scroll sideways to see it all · each service opens on WhatsApp.",
      ctaLabel: "Request a quote",
      formats: [
        {
          title: "Advertising on my profile",
          description:
            "Content published on my own profile, on Instagram and TikTok. Community, real engagement, daily presence, organic.",
        },
        {
          title: "UGC",
          description:
            "Real-testimonial style videos, shot to run as performance ads or as the brand's own organic post.",
        },
        {
          title: "Stories",
          description: "Product or service promotion on stories, with an engaged audience.",
        },
        {
          title: "Videomaker",
          description:
            "Filming and editing videos — from raw footage to the final edited delivery.",
        },
      ],
      deliveryLabels: {
        prazoPadrao: "Standard turnaround",
        prazoExpress: "Express turnaround",
        nota: "Invoice",
      },
      delivery: {
        prazoPadrao: "[set your standard turnaround time]",
        prazoExpress: "[set your express turnaround, if you offer one]",
        emiteNota: "[say whether you issue invoices]",
      },
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Click a niche to filter · click a video to watch.",
      filters: { todos: "All", influenciadora: "Influencer", ugc: "UGC" },
      videoTitles: {
        "influencer-1": "Skincare routine (example)",
        "influencer-2": "Get ready with me (example)",
        "influencer-3": "Hair transition (example)",
        "influencer-4": "Workout & healthy routine (example)",
        "ugc-1": "Product testimonial (example)",
        "ugc-2": "Unboxing for an ad (example)",
        "ugc-3": "Real-review style review (example)",
        "ugc-4": "Brand storytelling (example)",
      },
    },
    photos: {
      eyebrow: "Photos",
      title: "Behind the scenes and results in pictures",
      subtitle: "Real photos from shoots, products and deliveries for brands I've worked with.",
    },
    feedbacks: {
      eyebrow: "Feedbacks",
      title: "What people are saying about my work",
      subtitle: "Real feedback and results from work I've already delivered.",
      resultLabel: "Result screenshot",
      testimonialLabel: "Testimonial",
      verifiedLabel: "Real feedback",
      items: [
        {
          caption: "[Paste a real testimonial you've received from a brand here.]",
          footnote: "[Name, role, company]",
        },
        {
          caption: "[Paste another real testimonial you've received from a brand here.]",
          footnote: "[Name, role, company]",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "Frequently asked questions",
      items: [
        {
          question: "How can I use the content?",
          answer:
            "The content can be used on social media, paid traffic (ads), catalogs, websites, e-commerces, marketplaces...",
        },
        {
          question: "For how long?",
          answer:
            "Lifetime use for social media, and a few months for paid traffic use — to be agreed based on the campaign.",
        },
        {
          question: "Is there exclusivity?",
          answer:
            "To guarantee exclusivity in your niche, an extra conversation/investment is required.",
        },
        {
          question: "What's the turnaround time?",
          answer: "[Set your default turnaround time here.]",
        },
      ],
    },
    whyUgc: {
      eyebrow: "About UGC",
      title: "Why invest in UGC now",
      paragraph:
        "User Generated Content (UGC) is content created by real people — videos, photos and reviews — instead of traditional ads. It's authentic, creative, and increases consumer trust and engagement.",
      stats: [
        "Authentic content that builds trust",
        "Up to 7x more sales than traditional advertising",
        "Improves brand SEO",
        "Efficient content outsourcing — no need for an in-house team",
      ],
    },
    contact: {
      title: "Let's transform your brand.",
      subtitle: "Message me on WhatsApp and tell me what your brand needs.",
      whatsappMessage: "Hi, Fabiana! I'd like to request a proposal for a campaign.",
      submit: "Message on WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
    },
    popup: {
      eyebrow: "Request a quote",
      title: "Let's create content that",
      titleHighlight: "gets results?",
      subtitle: "Message me on WhatsApp and quickly tell me what you need.",
      whatsappMessage: "Hi, Fabiana! I found your site and would like to request a proposal.",
      submit: "Message on WhatsApp",
    },
  },
};
