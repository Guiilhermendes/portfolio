import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">GM</h3>
            <p className="footer-description">
              Full Stack Developer
            </p>
          </div>

          <div className="footer-section">
            <h4>Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Social</h4>
            <div className="footer-social">
              <a href="https://github.com/Guiilhermendes" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/guilhermemnds/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Guilherme Mendes. {t('footer.rights')}.
          </p>
          <p>
            {t('footer.madeWith')} {t('footer.by')} Guilherme Mendes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
