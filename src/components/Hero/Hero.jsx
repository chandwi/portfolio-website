import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDownload } from 'react-icons/fa';
import styles from './Hero.module.css';

const cloudsData = [
  { src: '/cloud1.svg', top: '10%', size: 400, opacity: 0.2, speed: 0.03, left: '0%' },
  { src: '/cloud4.svg', top: '3%', size: 280, opacity: 0.3, speed: 0.01, left: '100%' },
  { src: '/cloud2.svg', top: '30%', size: 500, opacity: 0.1, speed: 0.003, right: '60%' },
  { src: '/cloud3.svg', top: '60%', size: 650, opacity: 0.2, speed: 0.015, left: '0%' },
  { src: '/cloud5.svg', top: '90%', size: 500, opacity: 0.8, speed: 0.025, left: '0%' },
  { src: '/cloud6.svg', top: '90%', size: 300, opacity: 0.7, speed: 0.025, left: '0%' },
];

const Hero = () => {
  const [cloudOffsets, setCloudOffsets] = useState(cloudsData.map(() => 0));
  const [mouseX, setMouseX] = useState(0);

  // Animate clouds horizontally and respond to mouse movement
  useEffect(() => {
    let animationFrame;
    let lastTimestamp = performance.now();

    const animate = (timestamp) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      setCloudOffsets((prev) =>
        prev.map((offset, i) => {
          // Move clouds, add mouseX effect
          const baseMove = cloudsData[i].speed * delta * 0.05;
          const mouseMove = (mouseX - 0.5) * 30 * cloudsData[i].speed;
          return (offset + baseMove + mouseMove) % window.innerWidth;
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX]);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX / window.innerWidth);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Clouds */}
      <div className={styles.cloudsContainer}>
        {cloudsData.map((cloud, i) => (
          <img
            key={i}
            src={cloud.src}
            alt="cloud"
            style={{
              position: 'absolute',
              left: `${cloudOffsets[i]}px`,
              top: cloud.top,
              width: cloud.size,
              opacity: cloud.opacity,
              pointerEvents: 'none',
              transition: 'opacity 0.3s',
              zIndex: 1,
            }}
            className={styles.cloud}
          />
        ))}
      </div>
       

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
