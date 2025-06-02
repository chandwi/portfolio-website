import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Portfolio.module.css';
import { useRef, useEffect } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Branding',
    category: 'design',
    description: 'Complete visual identity for fashion startup',
    tags: ['Logo', 'Brand Guidelines', 'Packaging'],
    image: '/images/ecommerce-branding.jpg',
    slug: 'ecommerce-branding'
  },
  {
    id: 2,
    title: 'Health Analytics Dashboard',
    category: 'data',
    description: 'Interactive dashboard for patient metrics',
    tags: ['Power BI', 'SQL', 'Data Visualization'],
    image: '/images/health-dashboard.jpg',
    slug: 'health-dashboard'
  },
  {
    id: 3,
    title: 'Mobile App Redesign',
    category: 'design',
    description: 'UI/UX overhaul for fitness application',
    tags: ['Figma', 'User Testing', 'Prototyping'],
    image: '/images/app-redesign.jpg',
    slug: 'app-redesign'
  },
  {
    id: 4,
    title: 'Sales Analysis Dashboard',
    category: 'data',
    description: 'Interactive dashboard for Retail Store Sales',
    tags: ['Python', 'Power BI', 'EDA', 'Time-Series Analysis'],
    image: 'src/assets/Superstore Sales Dashboard_page-0001.jpg',
    slug: 'customer-segmentation',
    // Additional data for the modal
    metrics: {
      revenue: '$2.25M',
      transactions: '9,789',
      conversion: '3.96%',
      customers: '23,012'
    },
    tools: ['Power BI', 'SQL', 'Python', 'Data Modeling'],
    summary: 'Interactive sales dashboard tracking $2.25M in revenue across 9,789 transactions. The dashboard provides insights into customer behavior, sales trends, and product performance with a 3.96% conversion rate.'
  },
  {
    id: 5,
    title: 'Product MVP Design',
    category: 'product',
    description: 'Early-stage prototype for education platform',
    tags: ['Wireframing', 'User Flows', 'MVP'],
    image: '/images/product-mvp.jpg',
    slug: 'product-mvp'
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    category: 'design',
    description: 'Visual content for 3-month marketing push',
    tags: ['Canva', 'Content Strategy', 'Branding'],
    image: '/images/social-campaign.jpg',
    slug: 'social-media-campaign'
  }
];

const SalesDashboardModal = ({ project, onClose }) => {
  return (
    <div className={styles.modalOverlay}  onClick={onClose} >
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        className={styles.projectModal}
        onClick={e => e.stopPropagation()} 
      >
        {/* Left Content Section */}
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2>{project.title}</h2>
            <button className={styles.closeBtn} onClick={onClose}>&times;</button>
          </div>
          
          {/* Summary Section */}
          <div className={styles.section}>
            <h3>Summary</h3>
            <p>{project.summary}</p>
          </div>
          
          {/* Tools Used Section */}
          <div className={styles.section}>
            <h3>Tools Used</h3>
            <div className={styles.toolsContainer}>
              {project.tools.map((tool, index) => (
                <span key={index} className={styles.toolTag}>{tool}</span>
              ))}
            </div>
          </div>
          
          {/* Key Metrics Section */}
          <div className={styles.section}>
            <h3>Key Metrics</h3>
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Total Revenue</p>
                <p className={styles.metricValue}>{project.metrics.revenue}</p>
              </div>
              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Transactions</p>
                <p className={styles.metricValue}>{project.metrics.transactions}</p>
              </div>
              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Conversion Rate</p>
                <p className={styles.metricValue}>{project.metrics.conversion}</p>
              </div>
              <div className={styles.metricCard}>
                <p className={styles.metricLabel}>Customers</p>
                <p className={styles.metricValue}>{project.metrics.customers}</p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <a href="#" className={`${styles.actionBtn} ${styles.notebookBtn}`}>
              View Notebook
            </a>
            <a href="#" className={`${styles.actionBtn} ${styles.reportBtn}`}>
              View Report (PDF)
            </a>
            <a href="#" className={`${styles.actionBtn} ${styles.datasetBtn}`}>
              View Dataset
            </a>
          </div>
        </div>
        
        {/* Right Screenshot Section */}
        <div className={styles.screenshotSection}>
          <div className={styles.screenshotPlaceholder}>
            <img src={project.image} alt="Dashboard Screenshot" className={styles.screenshotImage} />
          </div>
          <div className={styles.screenshotPlaceholder}>
            <p>Data Model Diagram</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const organizeProjectsByCategory = () => {
  return {
    all: projectsData,
    design: projectsData.filter(p => p.category === 'design'),
    data: projectsData.filter(p => p.category === 'data'),
    product: projectsData.filter(p => p.category === 'product')
  };
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = organizeProjectsByCategory();

  const handleProjectClick = (project) => {
    if (project.id === 4) { // Sales Dashboard project
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Close modal when clicking outside the modal content
  // Only attach listener when modal is open
  // Use a ref to detect outside clicks

  const modalRef = useRef(null);

  useEffect(() => {
    if (!selectedProject) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedProject]);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={`container ${styles.portfolioContainer}`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionTitle}
        >
          My Portfolio
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.sectionSubtitle}
        >
          Browse through my work across different domains
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.filterButtons}
        >
          {['all', 'design', 'data', 'product'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`${styles.filterButton} ${
                activeCategory === category ? styles.active : ''
              }`}
            >
              {category === 'all' ? 'All' :
               category === 'design' ? 'Design' :
               category === 'data' ? 'Data Analytics' :
               'Product Design'}
            </button>
          ))}
        </motion.div>

        <div className={styles.projectsGrid}>
          {projects[activeCategory].map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.projectCard}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => handleProjectClick(project)} 
                className={styles.projectLink}
              >
                View Project →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Sales Dashboard */}
{selectedProject && selectedProject.id === 4 && (
  <SalesDashboardModal project={selectedProject} onClose={closeModal} />
)}
    </section>
  );
};



export default Portfolio;