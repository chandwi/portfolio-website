import { motion } from 'framer-motion';
import styles from './Blog.module.css';

const blogPosts = [
  {
    id: 1,
    title: 'What K-Dramas Teach About User Engagement',
    excerpt: 'Exploring narrative techniques that create addictive user experiences',
    category: 'Storytelling',
    date: 'May 15, 2023'
  },
  {
    id: 2,
    title: 'From Python Bugs to Breakthroughs',
    excerpt: 'My journey learning data analysis through trial and error',
    category: 'Learning',
    date: 'April 2, 2023'
  },
  {
    id: 3,
    title: 'Designing for Attention',
    excerpt: 'How visual hierarchy impacts user behavior in digital products',
    category: 'Design',
    date: 'March 10, 2023'
  }
];

const Blog = () => {
  return (
    <section id="blog" className={styles.blog}>
      <div className={`container ${styles.blogContainer}`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionTitle}
        >
          Thoughts & Writings
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.sectionSubtitle}
        >
          "I think better when I write." — Reflections on design, data, and everything in between
        </motion.p>
        
        <div className={styles.postsGrid}>
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={styles.postCard}
            >
              <div className={styles.postHeader}>
                <span className={styles.postCategory}>{post.category}</span>
                <span className={styles.postDate}>{post.date}</span>
              </div>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <a href="#" className={styles.readMore}>Read more →</a>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.ctaContainer}
        >
          <a href="#" className={`btn btn-primary ${styles.ctaButton}`}>
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;