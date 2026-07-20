import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, 
  FaDocker, FaAws, FaPython, FaDatabase
} from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import { 
  SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, 
  SiRedis, SiGraphql, SiTailwindcss, SiStyledcomponents,
  SiNestjs, SiZod, SiFastify, SiApachespark, SiVite,
  SiVitest, SiPrisma, SiReactrouter, SiCssmodules,
  SiReacthookform, SiExpo, SiAxios, SiJest, SiMocha
} from 'react-icons/si';
import './Skills.css';

const SpringBootIcon = () => (
  <svg role="img" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942h-9.4496c-.8202 0-1.831.5836-2.2402 1.2942L.3068 10.7058c-.4094.7106-.4094 1.8732 0 2.5838l4.7256 8.1892c.4092.7106 1.4166 1.2942 2.2402 1.2942h9.4552c.8202 0 1.826-.5836 2.2402-1.2942l4.7256-8.1892c.4094-.7106.4094-1.873 0-2.5838zM10.976 5.7554a.975.975 0 0 1 1.949 0v5.8212a.9752.9752 0 0 1-1.949 0zm.9746 12.4296a6.6162 6.6162 0 0 1-6.6072-6.6092A6.6398 6.6398 0 0 1 8.0102 6.2716a.8658.8658 0 0 1 1.2136.1798.866.866 0 0 1-.178 1.2136 4.8764 4.8764 0 0 0-1.9812 3.926 4.878 4.878 0 0 0 4.8764 4.8764 4.878 4.878 0 0 0 4.8766-4.8764 4.9 4.9 0 0 0-1.9864-3.925.87.87 0 0 1-.1832-1.2136.87.87 0 0 1 1.2138-.1832 6.63 6.63 0 0 1 2.6866 5.3218 6.6162 6.6162 0 0 1-6.6072 6.6092z"/>
  </svg>
);

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'React Native', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'CSS Modules', icon: <SiCssmodules />, color: '#000000' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Styled Components', icon: <SiStyledcomponents />, color: '#DB7093' },
        { name: 'React Router', icon: <SiReactrouter />, color: '#CA4245' },
        { name: 'React Hook Form', icon: <SiReacthookform />, color: '#EC5990' },
        { name: 'Zod', icon: <SiZod />, color: '#3E67B1' },
        { name: 'Expo', icon: <SiExpo />, color: '#000020' }
      ]
    },
    {
      title: t('skills.backend'),
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Nest.js', icon: <SiNestjs />, color: '#E0234E' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'Spring Boot', icon: <SpringBootIcon />, color: '#6DB33F' },
        { name: 'Express', icon: <FaNodeJs />, color: '#000000' },
        { name: 'Fastify', icon: <SiFastify />, color: '#000000' },
        { name: 'Prisma', icon: <SiPrisma />, color: '#2D3748' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'NoSQL', icon: <FaDatabase />, color: '#4DB33D' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
        { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
        { name: 'Axios', icon: <SiAxios />, color: '#5A29E4' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'PySpark', icon: <SiApachespark />, color: '#E25A1C' },
        { name: 'SQL', icon: <FaDatabase />, color: '#4479A1' },
        { name: 'API REST', icon: <FaNodeJs />, color: '#009688' }
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
        { name: 'Vitest', icon: <SiVitest />, color: '#6E9F18' },
        { name: 'Jest', icon: <SiJest />, color: '#C21325' },
        { name: 'Mocha/Chai', icon: <SiMocha />, color: '#8D6748' }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('skills.title')}
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
