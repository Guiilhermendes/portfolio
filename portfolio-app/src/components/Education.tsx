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
      title: t('education.degrees.computerScience.title'),
      institution: 'Universidade São Judas Tadeu',
      period: '2018 - 2021',
      description: t('education.degrees.computerScience.description'),
      image: 'https://cdn.simpleicons.org/gnubash/4EAA25',
      diplomaUrl: 'https://diploma.usjt.br/?/203.203.e7e64459a075'
    },
    {
      title: t('education.degrees.nodeFoundations.title'),
      institution: 'Rocketseat',
      period: '2024',
      description: t('education.degrees.nodeFoundations.description'),
      image: 'https://cdn.simpleicons.org/nodedotjs/339933',
      diplomaUrl: 'https://app.rocketseat.com.br/certificates/9171e286-efe6-496e-a1ce-c2a814ca97bf'
    },
    {
      title: t('education.degrees.reactFoundations.title'),
      institution: 'Rocketseat',
      period: '2026',
      description: t('education.degrees.reactFoundations.description'),
      image: 'https://cdn.simpleicons.org/react/61DAFB',
      diplomaUrl: 'https://app.rocketseat.com.br/certificates/22d18e89-1371-4994-933e-924af713a56c'
    },
    {
      title: t('education.degrees.reactNativeFoundations.title'),
      institution: 'Rocketseat',
      period: '2025',
      description: t('education.degrees.reactNativeFoundations.description'),
      image: 'https://cdn.simpleicons.org/react/61DAFB',
      diplomaUrl: 'https://app.rocketseat.com.br/certificates/bf158e58-c510-4b3f-acee-87a6195ddfb4'
    },
    {
      title: t('education.degrees.microservices.title'),
      institution: 'Rocketseat',
      period: '2025',
      description: t('education.degrees.microservices.description'),
      image: 'https://cdn.simpleicons.org/kubernetes/326CE5',
      diplomaUrl: 'https://app.rocketseat.com.br/certificates/155b2787-88bb-4b48-b60d-de5c48633550'
    },
    {
      title: t('education.degrees.reactNativeAdvanced.title'),
      institution: 'Rocketseat',
      period: '2025',
      description: t('education.degrees.reactNativeAdvanced.description'),
      image: 'https://cdn.simpleicons.org/react/61DAFB',
      diplomaUrl: 'https://app.rocketseat.com.br/certificates/31ee96af-7e05-4853-ab76-f37261ab9364'
    },
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
                <a 
                  href={degree.diplomaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="degree-image-container"
                >
                  <img 
                    src={degree.image} 
                    alt={`Diploma - ${degree.title}`}
                    className="degree-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </a>
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
