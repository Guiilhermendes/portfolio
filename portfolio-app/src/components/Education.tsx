import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import './Education.css';

interface Degree {
  title: string;
  institution: string;
  period: string;
  description: string;
  image?: string;
  diplomaUrl?: string;
}

const Education: React.FC = () => {
  const { t } = useTranslation();

  const degrees: Degree[] = [
    {
      title: 'Bacharelado em Ciências da Computação',
      institution: 'Universidade São Judas Tadeu',
      period: '2018 - 2021',
      description: 'Formação completa em Ciências da Computação, com foco em desenvolvimento de software, algoritmos, estruturas de dados, engenharia de software, banco de dados e fundamentos de computação.',
      image: 'https://diploma.usjt.br/?/203.203.e7e64459a075',
      diplomaUrl: 'https://diploma.usjt.br/?/203.203.e7e64459a075'
    },
    {
      title: 'Fundamentos do React',
      institution: 'Rocketseat',
      period: '2026',
      description: 'Certificação em fundamentos do React, abordando componentes, hooks, estado, props e desenvolvimento de interfaces modernas e reativas.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      diplomaUrl: 'https://app.rocketseat.com.br/certificates/22d18e89-1371-4994-933e-924af713a56c'
    },
    {
      title: 'Interfaces, Navegação e Armazenamento local',
      institution: 'Rocketseat',
      period: '2025',
      description: 'Certificação focada em React Native, explorando criação de interfaces mobile, navegação entre telas e persistência de dados local.',
      image: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg',
      diplomaUrl: 'https://app.rocketseat.com.br/certificates/31ee96af-7e05-4853-ab76-f37261ab9364'
    },
    {
      title: 'Fundamentos do Node.js',
      institution: 'Rocketseat',
      period: '2024',
      description: 'Certificação em fundamentos do Node.js, cobrindo APIs REST, streams, middlewares e desenvolvimento backend com JavaScript.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      diplomaUrl: 'https://app.rocketseat.com.br/certificates/9171e286-efe6-496e-a1ce-c2a814ca97bf'
    },
    {
      title: 'Fundamentos do React Native',
      institution: 'Rocketseat',
      period: '2025',
      description: 'Certificação em fundamentos de React Native, com foco em desenvolvimento mobile multiplataforma, componentes nativos e estilização.',
      image: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg',
      diplomaUrl: 'https://app.rocketseat.com.br/certificates/bf158e58-c510-4b3f-acee-87a6195ddfb4'
    },
    {
      title: 'Microsserviços Escaláveis',
      institution: 'Rocketseat',
      period: '2025',
      description: 'Certificação em arquitetura de microsserviços, abordando design patterns, comunicação entre serviços, escalabilidade e boas práticas.',
      image: 'https://cdn-icons-png.flaticon.com/512/9672/9672887.png',
      diplomaUrl: 'https://app.rocketseat.com.br/certificates/155b2787-88bb-4b48-b60d-de5c48633550'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('education.title')}
        </motion.h2>

        <div className="degrees-grid">
          {degrees.map((degree, index) => (
            <motion.div
              key={index}
              className="degree-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {degree.image && (
                <div className="degree-image-container">
                  {degree.diplomaUrl ? (
                    <a href={degree.diplomaUrl} target="_blank" rel="noopener noreferrer">
                      <img 
                        src={degree.image} 
                        alt={`Diploma - ${degree.title}`}
                        className="degree-image"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const placeholder = target.parentElement?.nextElementSibling as HTMLElement;
                          if (placeholder) placeholder.style.display = 'flex';
                        }}
                      />
                    </a>
                  ) : (
                    <img 
                      src={degree.image} 
                      alt={`Diploma - ${degree.title}`}
                      className="degree-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const placeholder = target.nextElementSibling as HTMLElement;
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                  )}
                  <div className="degree-image-placeholder" style={{ display: 'none' }}>
                    <FaUserGraduate size={80} />
                  </div>
                </div>
              )}
              
              <div className="degree-content">
                <div className="degree-header">
                  <FaUserGraduate className="degree-icon" />
                  <h3 className="degree-title">{degree.title}</h3>
                </div>
                
                <div className="degree-info">
                  <div className="info-item">
                    <FaUniversity className="info-icon" />
                    <span>{degree.institution}</span>
                  </div>
                  <div className="info-item">
                    <FaCalendarAlt className="info-icon" />
                    <span>{degree.period}</span>
                  </div>
                </div>
                
                <p className="degree-description">{degree.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
