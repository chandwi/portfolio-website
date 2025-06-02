import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              Hey there! I'm Chandrima — a curious mind blending design, data, and product thinking. 
              I thrive at the intersection of creativity and strategy, always eager to turn ideas into 
              impact through thoughtful user experiences and smart analytics.
            </p>
            <div className={styles.hobbies}>
              <h3 className={styles.hobbiesTitle}>When I'm not working, you can find me:</h3>
              <ul className={styles.hobbiesList}>
                <li>📚 Reading about personal growth and productivity hacks</li>
                <li>🎧 Analyzing K-Dramas and what they teach about storytelling</li>
                <li>✏️ Experimenting with new design techniques</li>
                <li>🧠 Writing about my learning journeys</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;