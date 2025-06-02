import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (

    <footer id="footer" className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerContent}>
          <div className={styles.footerAbout}>
            <h3 className={styles.footerTitle}>Chandrima</h3>
            <p className={styles.footerText}>
              Blending design, data, and product thinking to create meaningful digital experiences.
            </p>
          </div>
          
          <div className={styles.footerLinks}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          
          <div className={styles.footerContact}>
            <h4 className={styles.contactTitle}>Get In Touch</h4>
            <a href="mailto:hello@chandrima.com" className={styles.contactEmail}>
              <FaEnvelope /> hello@chandrima.com
            </a>
            <div className={styles.socialLinks}>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Chandrima. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;