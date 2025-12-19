import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact'
      },
      hero: {
        greeting: "Hi, I'm",
        title: 'Full Stack Developer',
        subtitle: 'Transforming ideas into digital solutions with 6+ years of experience',
        cta: 'View Projects',
        contact: 'Get in Touch'
      },
      about: {
        title: 'About Me',
        description: "I'm a full stack developer based in São Paulo, Brazil, with 6 years of experience in creating innovative solutions. My greatest passion is technology and the possibilities it opens to the world around us, especially the way I can use it to transform people's lives.",
        yearsExperience: 'Years Experience',
        projectsCompleted: 'Projects Completed',
        technologiesMastered: 'Technologies Mastered'
      },
      skills: {
        title: 'Skills & Technologies',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools & Others'
      },
      projects: {
        title: 'Featured Projects',
        viewAll: 'View All Projects',
        viewCode: 'View Code',
        liveDemo: 'Live Demo'
      },
      experience: {
        title: 'Professional Experience',
        experiences: [
          {
            company: 'Mobicity',
            role: 'Full Stack Developer',
            period: 'Jan 2022 - Nov 2025',
            description: 'Full-stack developer with experience building scalable web and mobile applications using Node.js, React, RESTful APIs, and AWS. Improved system performance through query optimization and efficient data processing, while collaborating with cross-functional teams to deliver high-quality features ahead of schedule.',
            technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Redis']
          },
          {
            company: 'Management Solutions',
            role: 'Technology Consultant',
            period: 'Apr 2021 - Apr 2022',
            description: 'Data and backend-focused developer with experience in banking projects, working with decision engines, data pipelines, and cloud platforms. Strong background in ETL optimization, policy parameterization, and aligning technical solutions with business requirements while supporting team enablement through documentation and training.',
            technologies: ['React', 'Node.js', 'JavaScript', 'MySQL', 'AWS']
          },
          {
            company: 'Self Employed',
            role: 'Self Employed',
            period: 'Oct 2020 - Mar 2021',
            description: 'Entrepreneur and digital specialist with experience founding and managing a digital agency focused on traffic management, e-commerce optimization, and web development. Proven track record of delivering high-ROI paid media campaigns and creating customized digital solutions that boost conversion rates and brand visibility.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Facebook ADS']
          },
          {
            company: 'Permute',
            role: 'Technical Support Intern',
            period: 'Apr 2019 - Sep 2020',
            description: 'Backend developer with experience building and maintaining ASP.NET Core systems, integrating server-side solutions with front-end technologies such as HTML, JavaScript, jQuery, and Bootstrap.',
            technologies: ['ASP.Net Core', 'JQuery', 'Bootstrap', 'JavaScript', 'Model-View-Controller (MVC)']
          }
        ]
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "Let's work together on your next project",
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
      },
      footer: {
        rights: 'All rights reserved',
        madeWith: 'Made',
        by: 'by'
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        experience: 'Experiência',
        contact: 'Contato'
      },
      hero: {
        greeting: 'Olá, eu sou',
        title: 'Desenvolvedor Full Stack',
        subtitle: 'Transformando ideias em soluções digitais com mais de 6 anos de experiência',
        cta: 'Ver Projetos',
        contact: 'Entre em Contato'
      },
      about: {
        title: 'Sobre Mim',
        description: 'Sou um desenvolvedor full stack baseado em São Paulo, Brasil, com 6 anos de experiência na criação de soluções inovadoras. Minha maior paixão é a tecnologia e as possibilidades que ela abre para o mundo ao nosso redor, especialmente a forma como posso usá-la para transformar a vida das pessoas.',
        yearsExperience: 'Anos de Experiência',
        projectsCompleted: 'Projetos Concluídos',
        technologiesMastered: 'Tecnologias Dominadas'
      },
      skills: {
        title: 'Habilidades & Tecnologias',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Ferramentas & Outros'
      },
      projects: {
        title: 'Projetos em Destaque',
        viewAll: 'Ver Todos os Projetos',
        viewCode: 'Ver Código',
        liveDemo: 'Demo Ao Vivo'
      },
      experience: {
        title: 'Experiência Profissional',
        experiences: [
          {
            company: 'Mobicity',
            role: 'Desenvolvedor Full Stack',
            period: 'Jan 2022 - Nov 2025',
            description: 'Desenvolvedor full-stack com experiência na criação de aplicações web e mobile escaláveis utilizando Node.js, React, APIs REST e serviços AWS. Focado em otimização de desempenho, eficiência no processamento de dados e colaboração com equipes multidisciplinares para entregar soluções de alta qualidade dentro do prazo.',
            technologies: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Redis']
          },
          {
            company: 'Management Solutions',
            role: 'Consultor de Tecnologia',
            period: 'Abr 2021 - Abr 2022',
            description: 'Desenvolvedor com foco em dados e backend, com experiência em projetos bancários, atuando em motores de decisão, pipelines de dados e plataformas em nuvem. Especialista em otimização de ETL, parametrização de regras e alinhamento entre requisitos de negócio e entrega técnica, além de apoio ao time por meio de documentação e treinamentos.',
            technologies: ['Python', 'PySpark', 'JavaScript', 'Azure', 'FICO']
          },
          {
            company: 'Autônomo',
            role: 'Autônomo',
            period: 'Out 2020 - Mar 2021',
            description: 'Empreendedor e especialista digital com experiência na fundação e gestão de uma agência digital, atuando com gestão de tráfego, otimização de e-commerce e desenvolvimento web. Histórico comprovado na execução de campanhas de mídia paga com alto ROI e na entrega de soluções personalizadas que aumentam conversão e visibilidade de marca.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Facebook ADS']
          },
          {
            company: 'Permute',
            role: 'Suporte Técnico',
            period: 'Abr 2019 - Set 2020',
            description: 'Desenvolvedor backend com experiência no desenvolvimento e manutenção de sistemas em ASP.NET Core, integrando soluções de servidor com tecnologias de front-end como HTML, JavaScript, jQuery e Bootstrap.',
            technologies: ['ASP.Net Core', 'JQuery', 'Bootstrap', 'JavaScript', 'Model-View-Controller (MVC)']
          }
        ]
      },
      contact: {
        title: 'Entre em Contato',
        subtitle: 'Vamos trabalhar juntos no seu próximo projeto',
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        success: 'Mensagem enviada com sucesso!',
        error: 'Erro ao enviar mensagem. Por favor, tente novamente.'
      },
      footer: {
        rights: 'Todos os direitos reservados',
        madeWith: 'Feito com',
        by: 'por'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
