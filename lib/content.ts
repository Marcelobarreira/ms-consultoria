// lib/content.ts

export const siteConfig = {
  name: 'MS Consultoria',
  description: 'Soluções em Higiene e Limpeza para Serviços de Saúde',
  url: 'https://msconsultoria.com.br',
  whatsapp: '5511999999999', // TODO: Replace with actual number
  email: 'contato@msconsultoria.com.br',
  phone: '(11) 99999-9999',
}

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' },
]

export const heroContent = {
  headline: 'Soluções em Higiene e Limpeza para Serviços de Saúde',
  subheadline: 'Consultoria especializada para melhorar a qualidade e os resultados dos serviços de limpeza e conservação.',
  cta: 'Fale Conosco pelo WhatsApp',
}

export const aboutContent = {
  quemSomos: 'Nós da MS Consultoria oferecemos soluções para melhorar a qualidade e os resultados dos serviços de limpeza e conservação. Nosso trabalho baseia-se na análise de especialistas acerca das necessidades em higiene de uma empresa avaliando estrutura e processos com a finalidade de apresentar as melhores soluções em serviços de higiene.',
  missao: 'Oferecer constantemente aos nossos clientes as melhores soluções em serviços de higiene de forma única e personalizada a cada negócio.',
  visao: 'Ser referência nacional em consultoria de qualidade em serviços de higiene e conservação.',
}

export const services = [
  {
    id: 'diagnostico',
    title: 'Diagnóstico Situacional',
    shortDescription: 'Análise completa de estrutura, materiais, equipamentos e dimensionamento de pessoal.',
    fullDescription: 'Realizamos análise de estrutura envolvendo materiais, equipamentos, tecnologia e dimensionamento de pessoal com a finalidade de apresentar ao cliente um projeto completo de melhoria e qualificação do serviço.',
    icon: 'clipboard-check',
  },
  {
    id: 'documentos',
    title: 'Elaboração de Documentos',
    shortDescription: 'Manuais técnicos, POPs, protocolos e documentos para ANVISA.',
    fullDescription: 'Elaboração de documentos para o adequado funcionamento do serviço de higienização. Estes envolvem desde manuais técnico-operacionais, protocolos, registros, procedimentos operacionais padrão, manuais de normas e rotinas. Além destes, elaboramos documentos necessários ao funcionamento dos serviços de higienização para atender as normatizações da ANVISA.',
    icon: 'document-text',
  },
  {
    id: 'certificacao',
    title: 'Acreditação e Certificação',
    shortDescription: 'Consultoria para certificações IQG, IBES e outras.',
    fullDescription: 'Consultoria e acompanhamento de processos de certificação de qualidade em serviços de higienização e hotelaria de serviços de saúde tendo expertise em certificações como: Instituto Qualisa de Gestão (IQG); Instituto Brasileiro de Excelência em Saúde (IBES), dentre outros.',
    icon: 'badge-check',
  },
  {
    id: 'dimensionamento',
    title: 'Dimensionamento',
    shortDescription: 'Dimensionamento de materiais, equipamentos e pessoal.',
    fullDescription: 'Consultoria, acompanhamento e/ou elaboração de dimensionamento de materiais, saneantes, equipamentos e pessoal para implantação de novos serviços e/ou elaboração de novas propostas comerciais para serviços de limpeza e conservação.',
    icon: 'calculator',
  },
  {
    id: 'treinamentos',
    title: 'Treinamentos Personalizados',
    shortDescription: 'Capacitação de equipes operacionais e gestores.',
    fullDescription: 'Trazemos as melhores práticas e técnicas em limpeza e conservação através de metodologias inovadoras que aplicamos desde a gestão do serviço à toda equipe operacional gerando valor ao serviço de higiene.',
    icon: 'academic-cap',
  },
  {
    id: 'implantacao',
    title: 'Implantação de Equipes',
    shortDescription: 'Desenvolvimento e implantação de equipes de limpeza hospitalar.',
    fullDescription: 'Implantação e desenvolvimento de equipes de limpeza hospitalar, além de otimizar recursos, reduzir custos e elevar a qualidade da estrutura, dos processos e trazendo os melhores resultados para nossos clientes.',
    icon: 'user-group',
  },
]

export const team = [
  {
    name: 'Nome do Profissional 1',
    role: 'Consultora',
    credentials: [
      'Especialização em Saúde Pública com Ênfase em Gestão em Serviços Públicos',
      'Experiência em Controle de Infecção de Serviços de Saúde',
      'Consultora em limpeza e desinfecção de superfícies',
    ],
    image: '/images/image-00.png',
  },
  {
    name: 'Nome do Profissional 2',
    role: 'Consultor',
    credentials: [
      'Saneamento e controle de perdas no sistema de abastecimento de água',
      'Estrutura de serviços de saúde',
      'Segurança do trabalho',
    ],
    image: '/images/image-01.png',
  },
]

export const diferenciais = [
  {
    title: 'Especialização',
    description: 'Equipe com expertise em higienização hospitalar e controle de infecção.',
  },
  {
    title: 'Personalização',
    description: 'Soluções únicas adaptadas às necessidades específicas de cada cliente.',
  },
  {
    title: 'Certificações',
    description: 'Experiência comprovada em processos de acreditação IQG e IBES.',
  },
  {
    title: 'Resultados',
    description: 'Foco em otimização de recursos, redução de custos e elevação da qualidade.',
  },
]
