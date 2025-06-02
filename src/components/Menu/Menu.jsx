import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBook, FiMail } from 'react-icons/fi';
import styles from './Menu.module.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    
    <div className={styles.menuContainer}>
      <button onClick={toggleMenu} className={styles.menuToggle}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <motion.div 
        className={styles.menu}
        initial={{ x: 100 }}
        animate={{ x: isOpen ? 100 : 200 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <nav>
          <ul>
            <li>
              <a href="#">
                <FiHome /> Home
              </a>
            </li>
            <li>
              <a href="#about">
                <FiUser /> About
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <FiCode /> Portfolio
              </a>
            </li>
            <li>
              <a href="#blog">
                <FiBook /> Blog
              </a>
            </li>
            <li>
              <a href="#footer">
                <FiMail /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};

export default Menu;