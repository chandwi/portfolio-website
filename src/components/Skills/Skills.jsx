import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
  {
    category: 'Design',
    items: [
      'UI/UX Design (Figma, Canva)',
      'Branding & Visual Identity',
      'Social Media Graphics',
      'Logo, Poster & Brochure Design'
    ],
    icon: '🎨'
  },
  {
    category: 'Data Analytics',
    items: [
      'Tools: Excel, Power BI, Tableau, MySQL',
      'Dashboarding, SQL Queries, EDA, Reporting',
      'Python for data cleaning & visualization (Pandas, Seaborn)'
    ],
    icon: '📊'
  },
  {
    category: 'Product Design',
    items: [
      'User research & problem scoping',
      'Wireframing & Prototyping',
      'Product storytelling & early MVP design',
      'Understanding product-market fit'
    ],
    icon: '🧠'
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={`container ${styles.skillsContainer}`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionTitle}
        >
          My Skills
        </motion.h2>
        
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={styles.skillCard}
            >
              <div className={styles.skillHeader}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <h3 className={styles.skillTitle}>{skill.category}</h3>
              </div>
              <ul className={styles.skillList}>
                {skill.items.map((item, i) => (
                  <li key={i} className={styles.skillItem}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;