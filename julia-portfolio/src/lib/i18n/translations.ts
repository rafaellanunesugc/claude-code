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
    whatsappIntro: string;
    formats: WorkFormat[];
    deliveryLabels: { prazoPadrao: string; prazoExpress: string; nota: string };
    delivery: { prazoPadrao: string; prazoExpress: string; emiteNota: string };
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filters: { todos: string; influenciadora: string; ugc: string };
    comingSoon: string;
    nicheLabels: Record<string, string>;
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

// Textos do site da Júlia Ilidia (PT e EN).
// Trechos entre [colchetes] ainda são placeholder: a Júlia precisa mandar a informação.
export const translations: Record<Locale, Translations> = {
  pt: {
    blackFridayBanner: {
      // TODO: confirmar com a Júlia se quer algum aviso/oferta aqui.
      text: "✨ Agenda aberta para novas parcerias de conteúdo — fala comigo e garanta seu espaço.",
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
      // A Júlia ainda não tem certeza dessa frase — revisar.
      tagline: "naturalidade com estratégia",
      stats: [
        { value: "[+0]", label: "marcas atendidas" },
        { value: "[0K]", label: "seguidores" },
      ],
      ctaPrimary: "Solicitar proposta",
      ctaSecondary: "Ver portfólio",
      coverPlaceholder: "Foto de capa (em breve)",
    },
    marquee: [
      "UGC Creator",
      "Influenciadora",
      "Beleza",
      "Skincare",
      "Maquiagem",
      "Moda",
      "Casa & Decoração",
      "Alimentação",
      "Roteiro & Hook",
      "Edição",
    ],
    // A Júlia ainda não tem certeza dessa frase — revisar.
    statement: {
      line1: "A melhor propaganda",
      line2: "é aquela que ninguém percebe que é.",
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
          title: "Equipamento profissional",
          description:
            "Gravo no meu estúdio montado em casa, com iPhone 17 Pro Max, três iluminações profissionais e microfone sem fio, para a imagem e o som saírem prontos para rodar no orgânico ou em anúncio.",
        },
        {
          title: "Roteiro, hook e edição",
          description:
            "Cada vídeo começa com roteiro e um gancho pensado para prender a atenção nos primeiros segundos. A edição também é minha, no CapCut Pro: você recebe o conteúdo pronto para publicar.",
        },
      ],
      gear: [
        "iPhone 17 Pro Max",
        "3 iluminações profissionais",
        "Microfone Hollyland Lark M2",
        "Tripé Ulanzi",
        "Edição no CapCut Pro",
        "Estúdio em casa",
      ],
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Muito além de uma creator.",
      paragraphs: [
        "Sou **Júlia Ilidia**, tenho 27 anos e moro em **Goiânia (GO)**. Sou formada em **Direito** e em **Gestão Comercial** — e levo esse olhar de negócio para cada conteúdo que crio.",
        "Sou **comunicativa, autêntica e espontânea**, e é isso que aparece nos meus vídeos. Meu diferencial está no jeito natural de falar, na **estética caprichada** e no meu **olhar criterioso**: cuido de cada detalhe, do roteiro à edição.",
        "Crio conteúdo para marcas de **beleza, skincare, maquiagem, moda, casa, decoração e alimentação**, em formatos pensados para funcionar tanto no orgânico quanto em anúncios.",
        "[Conte aqui alguma curiosidade ou parte da sua história que você quer que as marcas saibam.]",
      ],
      commitment:
        "Eu escuto a sua marca, cuido de cada detalhe e falo do seu produto com verdade, como uma amiga que indica, mas com olhar de estratégia.",
      chips: ["UGC Creator", "Influenciadora", "Roteiro & Edição"],
      stats: [
        { value: "27 anos", label: "Idade" },
        { value: "Goiânia - GO", label: "Base" },
        { value: "2026", label: "Criando conteúdo desde" },
        { value: "[0K]", label: "Seguidores" },
      ],
    },
    influencer: {
      eyebrow: "Como influenciadora",
      title: "Converso de perto com o meu público, todos os dias.",
      subtitle:
        "[Explique por que a sua audiência confia no que você recomenda e como é essa relação com o seu público.]",
      followersSuffix: "seguidores",
      profileTopicsTitle: "O que você vai encontrar no meu perfil",
      topics: ["Beleza", "Skincare", "Maquiagem", "Moda", "Casa & Decoração", "Alimentação"],
      metrics: {
        periodLabel: "Últimos 30 dias",
        genderLabel: "Gênero",
        ageLabel: "Faixa etária",
        locationLabel: "Localização",
        citiesLabel: "Principais cidades",
        instagram: {
          heading: "Instagram",
          stats: [
            { label: "Visualizações", value: "[0]" },
            { label: "Seguidores líquidos", value: "[+0]" },
            { label: "Interações", value: "[0]" },
            { label: "Visitas ao perfil", value: "[0]" },
            { label: "Seguidores totais", value: "[0]" },
          ],
          topFormats: "[Quais formatos mais performam no seu perfil? Ex.: Reels e Stories.]",
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
            { label: "Seguidores", value: "[0]" },
            { label: "Visualizações", value: "[0]" },
            { label: "Visitas ao perfil", value: "[0]" },
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
      title: "Conteúdo que vende, com cara de indicação de amiga.",
      subtitle:
        "Do roteiro à edição, crio vídeos naturais e estratégicos, em diferentes formatos e ângulos, para a sua marca usar no orgânico e em anúncios.",
      // TODO: confirmar com a Júlia quais formatos ela produz (pergunta 32).
      formats: [
        "Tutoriais e demonstrações",
        "Reviews",
        "Rotina",
        "Storytelling",
        "Criativos para anúncios",
      ],
    },
    work: {
      eyebrow: "Como podemos trabalhar juntas",
      titleSuffix: "formas de trabalhar comigo",
      localNote: "",
      scrollHint: "Arraste pro lado pra ver tudo · cada serviço abre no WhatsApp.",
      ctaLabel: "Solicitar orçamento",
      whatsappIntro: "Olá, Júlia! Vim pelo seu site e quero saber mais sobre:",
      formats: [
        {
          title: "Vídeo UGC",
          description:
            "Vídeo com roteiro, hook e edição, gravado com cara de indicação real, para a sua marca postar ou rodar como anúncio.",
        },
        {
          title: "Pacote de vídeos UGC",
          description:
            "Vários vídeos com ângulos e ganchos diferentes, para testar criativos e descobrir o que mais converte.",
        },
        {
          title: "Publicidade no meu perfil",
          description:
            "Conteúdo publicado no meu Instagram, falando do seu produto para a minha comunidade.",
        },
        {
          title: "Stories",
          description:
            "Divulgação do seu produto ou serviço nos meus stories, de um jeito leve e natural.",
        },
        {
          title: "Combo UGC + publi",
          description:
            "Vídeo UGC para a sua marca usar + publicação no meu perfil. Alcance e conteúdo no mesmo pacote.",
        },
        {
          title: "Fotos de produto",
          description:
            "Fotos do produto em uso, no meu estúdio, para redes sociais, site e e-commerce.",
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
        emiteNota: "[diga se emite nota fiscal como MEI]",
      },
    },
    portfolio: {
      eyebrow: "Trabalhos selecionados",
      title: "Portfólio",
      subtitle: "Escolha uma categoria e um nicho pra filtrar · clique num vídeo pra assistir.",
      filters: { todos: "Todos", influenciadora: "Influenciadora", ugc: "UGC" },
      comingSoon: "Vídeo em breve",
      nicheLabels: {},
      videoTitles: {
        "mantecorp-epidrat": "Rotina com a linha Epidrat",
        "sephora-camuflador": "Camuflador de olheiras Best Skin Ever",
        "nars-base": "Base Light Reflecting",
        "constance-salto": "Salto Constance",
        "cotih-blusa": "Blusa Zoli",
        "prove-saudavel-bolo": "Bolo de ninho com morango zero açúcar",
        // Vídeos de exemplo (só aparecem se não houver vídeos reais).
        "influencer-1": "Rotina de skincare (exemplo)",
        "influencer-2": "Get ready with me (exemplo)",
        "influencer-3": "Storytelling (exemplo)",
        "influencer-4": "Dica de beleza (exemplo)",
        "ugc-1": "Depoimento de produto (exemplo)",
        "ugc-2": "Unboxing pra anúncio (exemplo)",
        "ugc-3": "Review (exemplo)",
        "ugc-4": "Storytelling de marca (exemplo)",
      },
    },
    photos: {
      eyebrow: "Fotos",
      title: "Bastidores e entregas em imagem",
      subtitle: "Fotos reais de gravações, produtos e entregas.",
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
          question: "Você faz o roteiro?",
          answer:
            "Sim! Eu crio o roteiro e o hook (o gancho dos primeiros segundos) de cada vídeo, e também faço a edição. Você recebe o conteúdo pronto.",
        },
        {
          question: "Como posso usar o conteúdo?",
          answer:
            "Os conteúdos podem ser usados nas redes sociais, em tráfego pago (ads), sites, e-commerces e marketplaces — conforme o combinado na proposta.",
        },
        {
          question: "Por quanto tempo?",
          answer: "[Defina aqui o prazo de uso de imagem para redes sociais e para anúncios.]",
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
        "Formato nativo das redes, que não parece anúncio",
        "Vários criativos para testar e escalar o que converte",
        "Terceirização eficiente de conteúdo — sem precisar de equipe interna",
      ],
    },
    contact: {
      title: "Vamos criar juntas?",
      subtitle:
        "Me chama no WhatsApp: a mensagem já vai pronta, é só completar com os dados da sua marca.",
      whatsappMessage:
        "Olá, Júlia! Vim pelo seu site e quero solicitar uma proposta.\n\nMarca: \nProduto: \nTipo de conteúdo (UGC, publi, stories...): \nPrazo: ",
      submit: "Chamar no WhatsApp",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
    popup: {
      eyebrow: "Solicitar proposta",
      title: "Vamos criar conteúdo que",
      titleHighlight: "gera resultado?",
      subtitle: "Me chama no WhatsApp e conta rapidinho o que a sua marca precisa.",
      whatsappMessage:
        "Olá, Júlia! Vim pelo seu site e quero solicitar uma proposta.\n\nMarca: \nProduto: \nTipo de conteúdo (UGC, publi, stories...): \nPrazo: ",
      submit: "Chamar no WhatsApp",
    },
  },
  en: {
    blackFridayBanner: {
      text: "✨ Now booking new content partnerships — reach out and save your spot.",
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
      tagline: "natural content, strategic results",
      stats: [
        { value: "[+0]", label: "brands served" },
        { value: "[0K]", label: "followers" },
      ],
      ctaPrimary: "Request a quote",
      ctaSecondary: "View portfolio",
      coverPlaceholder: "Cover photo (coming soon)",
    },
    marquee: [
      "UGC Creator",
      "Influencer",
      "Beauty",
      "Skincare",
      "Makeup",
      "Fashion",
      "Home & Decor",
      "Food",
      "Scripts & Hooks",
      "Editing",
    ],
    statement: {
      line1: "The best advertising",
      line2: "is the kind no one notices.",
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
          title: "Professional gear",
          description:
            "I shoot in my home studio with an iPhone 17 Pro Max, three professional lights and a wireless mic, so image and sound are ready for organic posts or ads.",
        },
        {
          title: "Script, hook and editing",
          description:
            "Every video starts with a script and a hook designed to grab attention in the first seconds. I also edit everything in CapCut Pro: you get content ready to post.",
        },
      ],
      gear: [
        "iPhone 17 Pro Max",
        "3 professional lights",
        "Hollyland Lark M2 mic",
        "Ulanzi tripod",
        "Edited in CapCut Pro",
        "Home studio",
      ],
    },
    about: {
      eyebrow: "About me",
      title: "Much more than a creator.",
      paragraphs: [
        "I'm **Júlia Ilidia**, I'm 27 and I live in **Goiânia, Brazil**. I have degrees in **Law** and **Sales Management** — and I bring that business mindset to every piece of content I create.",
        "I'm **outgoing, authentic and spontaneous**, and that's what shows in my videos. What sets me apart is my natural way of speaking, a **polished aesthetic** and my **attention to detail**: I take care of everything, from script to edit.",
        "I create content for **beauty, skincare, makeup, fashion, home, decor and food** brands, in formats designed to work both organically and in ads.",
        "[Share a fun fact or part of your story you'd like brands to know.]",
      ],
      commitment:
        "I listen to your brand, take care of every detail and talk about your product honestly — like a friend's recommendation, but with a strategic eye.",
      chips: ["UGC Creator", "Influencer", "Scripts & Editing"],
      stats: [
        { value: "27", label: "Age" },
        { value: "Goiânia, Brazil", label: "Based in" },
        { value: "2026", label: "Creating content since" },
        { value: "[0K]", label: "Followers" },
      ],
    },
    influencer: {
      eyebrow: "As an influencer",
      title: "I talk closely with my audience, every day.",
      subtitle:
        "[Explain why your audience trusts your recommendations and what your relationship with them is like.]",
      followersSuffix: "followers",
      profileTopicsTitle: "What you'll find on my profile",
      topics: ["Beauty", "Skincare", "Makeup", "Fashion", "Home & Decor", "Food"],
      metrics: {
        periodLabel: "Last 30 days",
        genderLabel: "Gender",
        ageLabel: "Age range",
        locationLabel: "Location",
        citiesLabel: "Top cities",
        instagram: {
          heading: "Instagram",
          stats: [
            { label: "Views", value: "[0]" },
            { label: "Net followers", value: "[+0]" },
            { label: "Interactions", value: "[0]" },
            { label: "Profile visits", value: "[0]" },
            { label: "Total followers", value: "[0]" },
          ],
          topFormats: "[Which formats perform best on your profile? E.g. Reels and Stories.]",
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
            { label: "Followers", value: "[0]" },
            { label: "Views", value: "[0]" },
            { label: "Profile visits", value: "[0]" },
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
      title: "Content that sells, like a friend's recommendation.",
      subtitle:
        "From script to edit, I create natural, strategic videos in different formats and angles for your brand to use organically and in ads.",
      formats: [
        "Tutorials and demos",
        "Reviews",
        "Routines",
        "Storytelling",
        "Ad creatives",
      ],
    },
    work: {
      eyebrow: "How we can work together",
      titleSuffix: "ways to work with me",
      localNote: "",
      scrollHint: "Swipe to see everything · each service opens WhatsApp.",
      ctaLabel: "Request a quote",
      whatsappIntro: "Hi Júlia! I found your website and I'd like to know more about:",
      formats: [
        {
          title: "UGC video",
          description:
            "A scripted and edited video with a real-recommendation feel, for your brand to post or run as an ad.",
        },
        {
          title: "UGC video bundle",
          description:
            "Several videos with different angles and hooks, so you can test creatives and find what converts best.",
        },
        {
          title: "Sponsored post on my profile",
          description:
            "Content published on my Instagram, introducing your product to my community.",
        },
        {
          title: "Stories",
          description:
            "Your product or service featured on my stories, in a light and natural way.",
        },
        {
          title: "UGC + sponsored post combo",
          description:
            "A UGC video for your brand to use + a post on my profile. Reach and content in one package.",
        },
        {
          title: "Product photos",
          description:
            "Photos of your product in use, shot in my studio, for social media, website and e-commerce.",
        },
      ],
      deliveryLabels: {
        prazoPadrao: "Standard turnaround",
        prazoExpress: "Express turnaround",
        nota: "Invoice",
      },
      delivery: {
        prazoPadrao: "[set your standard turnaround]",
        prazoExpress: "[set your express turnaround, if offered]",
        emiteNota: "[say whether you issue invoices]",
      },
    },
    portfolio: {
      eyebrow: "Selected work",
      title: "Portfolio",
      subtitle: "Pick a category and a niche to filter · click a video to watch.",
      filters: { todos: "All", influenciadora: "Influencer", ugc: "UGC" },
      comingSoon: "Video coming soon",
      nicheLabels: {
        Skincare: "Skincare",
        Maquiagem: "Makeup",
        Moda: "Fashion",
        Alimentação: "Food",
        Rotina: "Routine",
        Beleza: "Beauty",
        Depoimentos: "Testimonials",
        Tecnologia: "Tech",
      },
      videoTitles: {
        "mantecorp-epidrat": "Routine with the Epidrat line",
        "sephora-camuflador": "Best Skin Ever concealer",
        "nars-base": "Light Reflecting foundation",
        "constance-salto": "Constance heels",
        "cotih-blusa": "Zoli blouse",
        "prove-saudavel-bolo": "Sugar-free strawberry & milk cake",
        "influencer-1": "Skincare routine (sample)",
        "influencer-2": "Get ready with me (sample)",
        "influencer-3": "Storytelling (sample)",
        "influencer-4": "Beauty tip (sample)",
        "ugc-1": "Product testimonial (sample)",
        "ugc-2": "Unboxing for ads (sample)",
        "ugc-3": "Review (sample)",
        "ugc-4": "Brand storytelling (sample)",
      },
    },
    photos: {
      eyebrow: "Photos",
      title: "Behind the scenes and deliveries",
      subtitle: "Real photos from shoots, products and deliveries.",
    },
    feedbacks: {
      eyebrow: "Feedbacks",
      title: "What people say about my work",
      subtitle: "Real feedback and results from work I've delivered.",
      resultLabel: "Result screenshot",
      testimonialLabel: "Testimonial",
      verifiedLabel: "Real feedback",
      items: [
        {
          caption: "[Paste a real testimonial from a brand here.]",
          footnote: "[Name, role, company]",
        },
        {
          caption: "[Paste another real testimonial from a brand here.]",
          footnote: "[Name, role, company]",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "Do you write the script?",
          answer:
            "Yes! I write the script and the hook (the first few seconds) for every video, and I edit it too. You get content ready to use.",
        },
        {
          question: "How can I use the content?",
          answer:
            "Content can be used on social media, paid ads, websites, e-commerce and marketplaces — as agreed in the proposal.",
        },
        {
          question: "For how long?",
          answer: "[Set the usage period for social media and for ads.]",
        },
        {
          question: "What's the turnaround?",
          answer: "[Set your standard turnaround here.]",
        },
      ],
    },
    whyUgc: {
      eyebrow: "About UGC",
      title: "Why invest in UGC now",
      paragraph:
        "User Generated Content (UGC) is content created by real people — videos, photos and reviews — instead of traditional ads. It's authentic, creative and builds consumer trust and engagement.",
      stats: [
        "Authentic content that builds trust",
        "Native to social media — it doesn't look like an ad",
        "Multiple creatives to test and scale what converts",
        "Efficient content outsourcing — no in-house team needed",
      ],
    },
    contact: {
      title: "Shall we create together?",
      subtitle:
        "Message me on WhatsApp: the message is ready, just fill in your brand's details.",
      whatsappMessage:
        "Hi Júlia! I found your website and I'd like to request a quote.\n\nBrand: \nProduct: \nContent type (UGC, sponsored post, stories...): \nDeadline: ",
      submit: "Message me on WhatsApp",
    },
    footer: {
      rights: "All rights reserved.",
    },
    popup: {
      eyebrow: "Request a quote",
      title: "Let's create content that",
      titleHighlight: "drives results?",
      subtitle: "Message me on WhatsApp and tell me what your brand needs.",
      whatsappMessage:
        "Hi Júlia! I found your website and I'd like to request a quote.\n\nBrand: \nProduct: \nContent type (UGC, sponsored post, stories...): \nDeadline: ",
      submit: "Message me on WhatsApp",
    },
  },
};
