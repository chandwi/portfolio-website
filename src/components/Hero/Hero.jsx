import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDownload } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);

    // Animation loop
    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          y: (p.y + p.speed) % 100,
        }))
      );
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (

    
    <section className={styles.hero}>
       

      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <div className={styles.avatarContainer}>
            <img
              src="/src/assets/images/avatar.png"
              alt="Chandrima"
              className={styles.avatar}
            />
          </div>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span>Chandrima</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Building digital experiences with data & design
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={styles.heroButtons}
        >
          <a
            href="/resume.pdf"
            download
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            <FaDownload /> Download Resume
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            <FaGithub /> View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Optional: Render particles visually (needs CSS) */}
     
    </section>
  );
};

export default Hero;
