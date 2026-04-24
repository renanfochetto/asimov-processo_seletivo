/**
 * Arquivo Central de Constantes e Textos (i18n-ready)
 * 
 * Este arquivo centraliza todas as strings estáticas, configurações de links,
 * e metadados de acessibilidade (ARIA) do projeto. A organização facilita
 * a manutenção, consistência visual e futuras traduções.
 */
export const STRINGS = {
  common: {
    bookConsultation: 'Book a consultation',
    requestQuote: 'Request a quote',
    learnMore: 'Learn more',
    getFreeProposal: 'Get your free proposal',
    contactUs: 'Contact us',
  },
  navbar: {
    links: [
      { label: 'About us', href: '#' },
      { label: 'Services', href: '#services' },
      { label: 'Use Cases', href: '#cases' },
      { label: 'Pricing', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    aria: {
      logo: 'Positivus — página inicial',
      nav: 'Navegação principal',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      mobileNav: 'Menu de navegação mobile',
    },
  },
  hero: {
    heading: 'Navigating the digital landscape for success',
    description: 'Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.',
    aria: {
      partners: 'Empresas parceiras',
    },
  },
  services: {
    heading: 'Services',
    description: 'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:',
    aria: {
      learnMoreAbout: 'Saiba mais sobre',
    },
    list: [
      {
        title: 'Search engine\noptimization',
        illustration: '/assets/images/service-seo.svg',
        background: 'light',
      },
      {
        title: 'Pay-per-click\nadvertising',
        illustration: '/assets/images/service-ppc.svg',
        background: 'green',
        badgeBg: '#FFFFFF',
        badgeText: '#191A23',
      },
      {
        title: 'Social Media\nMarketing',
        illustration: '/assets/images/service-social.svg',
        background: 'dark',
        badgeBg: '#FFFFFF',
        badgeText: '#191A23',
      },
      {
        title: 'Email\nMarketing',
        illustration: '/assets/images/service-email.svg',
        background: 'light',
      },
      {
        title: 'Content\nCreation',
        illustration: '/assets/images/service-content.svg',
        background: 'green',
        badgeBg: '#FFFFFF',
        badgeText: '#191A23',
      },
      {
        title: 'Analytics and\nTracking',
        illustration: '/assets/images/service-analytics.svg',
        background: 'dark',
      },
    ] as const,
  },
  ctaBanner: {
    heading: "Let's make things happen",
    description: 'Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.',
  },
  caseStudies: {
    heading: 'Case Studies',
    description: 'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies',
    items: [
      {
        label: 'Restaurante local',
        text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
      },
      {
        label: 'Empresa de software B2B',
        text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
      },
      {
        label: 'Rede varejista nacional',
        text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
      },
    ],
    aria: {
      learnMoreAbout: 'Saiba mais sobre o caso:',
    },
  },
  accessibility: {
    skipToContent: 'Ir para o conteúdo principal',
  },
  site: {
    title: 'Positivus | Processo Seletivo Asimov',
    description: 'Nossa agência de marketing digital ajuda empresas a crescerem e terem sucesso online.',
  },
} as const
