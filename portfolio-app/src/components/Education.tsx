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
