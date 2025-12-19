import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import axios from 'axios';
import './Projects.css';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://backend-jade-six-27.vercel.app/api/github/repos');
        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repos:', error);
        // Fallback data se o backend não estiver disponível
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#563d7c',
      React: '#61dafb'
    };
    return colors[language] || '#8257e6';
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('projects.title')}
        </motion.h2>

        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-header">
                  <FaGithub className="project-icon" />
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {t('projects.viewCode')}
                  </a>
                </div>

                <h3 className="project-name">{repo.name}</h3>
                <p className="project-description">
                  {repo.description || 'No description available'}
                </p>

                {repo.topics && repo.topics.length > 0 && (
                  <div className="project-topics">
                    {repo.topics.slice(0, 3).map((topic, i) => (
                      <span key={i} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                )}

                <div className="project-footer">
                  {repo.language && (
                    <span className="project-language">
                      <span 
                        className="language-dot" 
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="project-stats">
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span className="project-stats">
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          className="view-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/Guiilhermendes?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {t('projects.viewAll')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
