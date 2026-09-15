export type Locale = "pt" | "en";

export const LOCALE_LABELS: Record<Locale, { flag: string; short: string }> = {
  pt: { flag: "🇧🇷", short: "PT" },
  en: { flag: "🇺🇸", short: "EN" },
};

type WorkFormat = { title: string; description: string };

export type Translations = {
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
  brandLogos: { eyebrow: string; title: string; subtitle: string };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    chips: string[];
  };
  influencer: {
    eyebrow: string;
    title: string;
    subtitle: string;
    followersSuffix: string;
    profileTopicsTitle: string;
    topics: string[];
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
  feedbacks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    resultLabel: string;
    testimonialLabel: string;
    items: { caption: string; footnote: string }[];
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
    fields: {
      name: string;
      brand: string;
      email: string;
      whatsapp: string;
      budget: string;
      budgetPlaceholder: string;
      message: string;
      messagePlaceholder: string;
    };
    submit: string;
    submitting: string;
    successMessage: string;
    validationError: string;
    submitError: string;
  };
  footer: { rights: string; admin: string };
};

export const translations: Record<Locale, Translations> = {
  pt: {
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
        { value: "+30", label: "marcas atendidas" },
        { value: "23,8K", label: "seguidores" },
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
      "UGC Manager",
    ],
    brandLogos: {
      eyebrow: "Marcas atendidas",
      title: "Marcas que já confiaram",
      subtitle:
        "Logos de exemplo — em breve com os logos reais das marcas parceiras.",
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Muito além de uma creator.",
      paragraphs: [
        "Sou Rafa Nunes, tenho 25 anos, estou me formando em Marketing pela Universidade Católica de Brasília e moro em Goiânia.",
        "Antes de criar conteúdo, passei 5 anos no mercado corporativo, incluindo uma passagem pela Amcham Brasil, fui líder das áreas de eventos, onde saí como sênior da área comercial. Fui maquiadora por mais de 10 anos. Sempre fui a pessoa que enxerga estratégia em tudo: num evento bem planejado, numa campanha de marca, num vídeo que vende sem parecer que está vendendo. Foi esse olhar que me trouxe pra criação de conteúdo.",
        "Hoje transformei isso em profissão. Já criei conteúdo sobre produtos da Nivea com mais de 435 mil visualizações no orgânico, conteúdo educativo para a E-lens com 337 mil visualizações, conteúdo orgânico para a L'Oréal Paris com 243 mil visualizações, e um criativo de tráfego pago para a Peça Rara alcançando quase 92 mil contas. Atuo principalmente nos nichos de beleza e saúde e bem-estar.",
        "Não penso só no vídeo bonito. Penso em roteiro pensado pra conversão, edição alinhada com o algoritmo e estratégia de marca por trás de cada entrega. A faculdade me deu a base, os 5 anos de corporativo me deram visão comercial, e a prática me deu o repertório.",
        "Meu compromisso: entregar conteúdo que faça sentido pra marca, pro público e pro resultado. Sempre.",
      ],
      chips: ["Videomaker", "UGC Creator", "Influenciadora"],
    },
    influencer: {
      eyebrow: "Como influenciadora",
      title: "Converso de perto com o público feminino, todos os dias.",
      subtitle:
        "Minha audiência confia no que eu recomendo porque a relação é próxima e diária — não é publicidade genérica, é conversa de verdade sobre beleza, saúde e rotina.",
      followersSuffix: "seguidores",
      profileTopicsTitle: "O que você vai encontrar no meu perfil",
      topics: [
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
      ],
    },
    ugc: {
      eyebrow: "Como UGC Creator",
      title: "Conteúdo feito pra vender, gravado com cara de gente real.",
      subtitle:
        "Gosto de explorar diferentes formatos e ângulos, desde tutoriais e demonstrações até storytelling, reviews, conteúdos de rotina e criativos para anúncios.",
      formats: [
        "Tutoriais e demonstrações",
        "Storytelling",
        "Reviews",
        "Conteúdos de rotina",
        "Criativos para anúncios",
      ],
    },
    work: {
      eyebrow: "Como podemos trabalhar juntos",
      titleSuffix: "formas de trabalhar comigo",
      localNote:
        "Atendimento presencial em Goiânia-GO e Jataí-GO — datas a combinar conforme disponibilidade na região.",
      scrollHint: "Arraste pro lado pra ver tudo · cada serviço abre no WhatsApp.",
      ctaLabel: "Solicitar orçamento",
      formats: [
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
      ],
      deliveryLabels: {
        prazoPadrao: "Prazo padrão",
        prazoExpress: "Prazo expresso",
        nota: "Nota fiscal",
      },
      delivery: {
        prazoPadrao: "5 a 7 dias úteis após o produto/briefing em mãos",
        prazoExpress: "48h úteis (sob consulta, com taxa adicional)",
        emiteNota: "Sim, emito nota fiscal como profissional autônoma (MEI).",
      },
    },
    portfolio: {
      title: "Portfólio",
      subtitle:
        "Clique numa pasta pra filtrar · clique num vídeo pra assistir. (Vídeos de exemplo — em breve substituo pelos meus.)",
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
    feedbacks: {
      eyebrow: "Feedbacks",
      title: "O que estão falando do meu trabalho",
      subtitle:
        "Espaço reservado para prints de resultado e depoimentos de marcas. (Placeholders — em breve com casos reais.)",
      resultLabel: "Print de resultado",
      testimonialLabel: "Depoimento",
      items: [
        {
          caption: "Aqui entra um print de views/engajamento de uma campanha real.",
          footnote: "Print de resultado (exemplo)",
        },
        {
          caption: "Aqui entra um print de métricas de anúncio (Ads) real.",
          footnote: "Print de resultado (exemplo)",
        },
        {
          caption:
            "“Depoimento da marca sobre o resultado da parceria.” — Nome da Marca",
          footnote: "Depoimento (exemplo)",
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
          answer:
            "Os conteúdos são entregues em até 7 dias após o produto chegar na minha casa.",
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
      subtitle: "Conta o que sua marca precisa — eu volto com uma proposta.",
      fields: {
        name: "Seu nome",
        brand: "Marca",
        email: "Email",
        whatsapp: "WhatsApp",
        budget: "Faixa de orçamento",
        budgetPlaceholder: "Selecione uma faixa",
        message: "Mensagem",
        messagePlaceholder:
          "Conte um pouco sobre a campanha, produto e prazo desejado.",
      },
      submit: "Enviar mensagem",
      submitting: "Enviando...",
      successMessage: "Recebi sua mensagem! Retorno em breve.",
      validationError: "Preencha ao menos nome, email e mensagem.",
      submitError: "Não foi possível enviar agora. Tente novamente em instantes.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      admin: "Área administrativa",
    },
  },
  en: {
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
        { value: "+30", label: "brands served" },
        { value: "23.8K", label: "followers" },
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
      "UGC Manager",
    ],
    brandLogos: {
      eyebrow: "Brands I've worked with",
      title: "Brands that already trusted me",
      subtitle: "Sample logos — real partner brand logos coming soon.",
    },
    about: {
      eyebrow: "About me",
      title: "Much more than a creator.",
      paragraphs: [
        "I'm Rafa Nunes, I'm 25 years old, finishing my Marketing degree at Universidade Católica de Brasília, and I live in Goiânia, Brazil.",
        "Before creating content, I spent 5 years in the corporate world, including a stint at Amcham Brasil, where I led events teams and left as a senior commercial professional. I was also a makeup artist for over 10 years. I've always been the person who sees strategy in everything — in a well-planned event, in a brand campaign, in a video that sells without looking like it's selling. That perspective is what brought me into content creation.",
        "Today I've turned that into a career. I've created content for Nivea with over 435,000 organic views, educational content for E-lens with 337,000 views, organic content for L'Oréal Paris with 243,000 views, and a paid traffic creative for Peça Rara that reached almost 92,000 accounts. I mainly work in the beauty and health & wellness niches.",
        "I don't just think about a pretty video. I think about a script built for conversion, editing aligned with the algorithm, and brand strategy behind every delivery. College gave me the foundation, 5 years in corporate gave me business vision, and practice gave me the repertoire.",
        "My commitment: deliver content that makes sense for the brand, the audience, and the result. Always.",
      ],
      chips: ["Videomaker", "UGC Creator", "Influencer"],
    },
    influencer: {
      eyebrow: "As an influencer",
      title: "I talk closely with a female audience, every single day.",
      subtitle:
        "My audience trusts what I recommend because the relationship is close and daily — it's not generic advertising, it's a real conversation about beauty, health and routine.",
      followersSuffix: "followers",
      profileTopicsTitle: "What you'll find on my profile",
      topics: [
        "Curly hair",
        "Hair transition",
        "Makeup",
        "Skincare",
        "Healthy living",
        "Weight loss",
        "Workouts",
        "Daily routine",
        "Relationships",
        "UGC",
        "Content creation",
      ],
    },
    ugc: {
      eyebrow: "As a UGC Creator",
      title: "Content built to sell, shot to feel like a real person.",
      subtitle:
        "I enjoy exploring different formats and angles, from tutorials and demos to storytelling, reviews, routine content, and ad creatives.",
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
      localNote:
        "In-person services available in Goiânia-GO and Jataí-GO, Brazil — dates to be arranged based on availability in the region.",
      scrollHint: "Scroll sideways to see it all · each service opens on WhatsApp.",
      ctaLabel: "Request a quote",
      formats: [
        {
          title: "Advertising on my profile",
          description:
            "Content published on my own profile, on Instagram (@rafaellanunesx) or TikTok (@rafaellanunesxx). Community, real engagement, daily presence, organic.",
        },
        {
          title: "UGC",
          description:
            "Real-testimonial style videos, shot to run as performance ads or as the brand's own organic post. Original script and variations per delivery.",
        },
        {
          title: "UGC Manager",
          description:
            "UGC campaign management for brands: creator curation, briefing, approval and final delivery.",
        },
        {
          title: "UGC Strategy & Consulting",
          description:
            "Strategy consulting for creators: how to start in UGC, building a portfolio, approaching brands, professionalizing, equipment, and how to scale.",
        },
        {
          title: "Stories",
          description:
            "Product or service promotion on stories, with an audience of up to 1,000 viewers and an engaged community.",
        },
        {
          title: "In-person visits",
          description:
            "For companies in Goiânia and Jataí: getting to know the space, the services, and doing monthly follow-up visits.",
        },
        {
          title: "Fitting room",
          description:
            "Trying on looks at physical or online clothing stores, with video content of the selection process and final result.",
        },
        {
          title: "Videomaker",
          description:
            "Filming and editing videos at events, clinics, stores and other venues — from raw footage to the final edited delivery.",
        },
        {
          title: "Content Calendar",
          description:
            "For creators and companies: content creation consulting for social media profiles, with follow-up, mentoring, communication and a personalized plan.",
        },
      ],
      deliveryLabels: {
        prazoPadrao: "Standard turnaround",
        prazoExpress: "Express turnaround",
        nota: "Invoice",
      },
      delivery: {
        prazoPadrao: "5 to 7 business days after receiving the product/briefing",
        prazoExpress: "48 business hours (on request, with an extra fee)",
        emiteNota: "Yes, I issue invoices as a registered self-employed professional (MEI).",
      },
    },
    portfolio: {
      title: "Portfolio",
      subtitle:
        "Click a folder to filter · click a video to watch. (Sample videos — mine coming soon.)",
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
    feedbacks: {
      eyebrow: "Feedbacks",
      title: "What people are saying about my work",
      subtitle:
        "Space reserved for result screenshots and brand testimonials. (Placeholders — real cases coming soon.)",
      resultLabel: "Result screenshot",
      testimonialLabel: "Testimonial",
      items: [
        {
          caption: "A views/engagement screenshot from a real campaign goes here.",
          footnote: "Result screenshot (example)",
        },
        {
          caption: "A real ad (Ads) metrics screenshot goes here.",
          footnote: "Result screenshot (example)",
        },
        {
          caption:
            "“The brand's testimonial about the partnership's result.” — Brand Name",
          footnote: "Testimonial (example)",
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
          answer:
            "Content is delivered within 7 days after the product arrives at my home.",
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
      subtitle: "Tell me what your brand needs — I'll get back with a proposal.",
      fields: {
        name: "Your name",
        brand: "Brand",
        email: "Email",
        whatsapp: "WhatsApp",
        budget: "Budget range",
        budgetPlaceholder: "Select a range",
        message: "Message",
        messagePlaceholder:
          "Tell me a bit about the campaign, product and desired timeline.",
      },
      submit: "Send message",
      submitting: "Sending...",
      successMessage: "Got your message! I'll get back to you soon.",
      validationError: "Please fill in at least name, email and message.",
      submitError: "Couldn't send right now. Please try again shortly.",
    },
    footer: {
      rights: "All rights reserved.",
      admin: "Admin area",
    },
  },
};
