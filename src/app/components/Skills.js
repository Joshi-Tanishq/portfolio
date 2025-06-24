'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [activeCategory, setActiveCategory] = useState('frontend');
  const skillCategories = {
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'Next.js', level: 90, color: 'linear-gradient(to right, #60a5fa, #2563eb)' },
        { name: 'React.js', level: 85, color: 'linear-gradient(to right, #06b6d4, #0891b2)' },
        { name: 'TypeScript', level: 80, color: 'linear-gradient(to right, #3b82f6, #1d4ed8)' },
        { name: 'JavaScript', level: 85, color: 'linear-gradient(to right, #fbbf24, #d97706)' },
        { name: 'CSS3', level: 80, color: 'linear-gradient(to right, #14b8a6, #0d9488)' },
        { name: 'HTML', level: 90, color: 'linear-gradient(to right, #fb923c, #ea580c)' },
      ]
    },    backend: {
      title: 'Backend & Database',
      skills: [
        { name: 'Next.js API', level: 85, color: 'linear-gradient(to right, #4ade80, #16a34a)' },
        { name: 'NextAuth.js', level: 80, color: 'linear-gradient(to right, #9ca3af, #4b5563)' },
        { name: 'Firestore', level: 80, color: 'linear-gradient(to right, #fbbf24, #d97706)' },
        { name: 'DynamoDB', level: 70, color: 'linear-gradient(to right, #fb923c, #ea580c)' },
        { name: 'NoSQL', level: 75, color: 'linear-gradient(to right, #22c55e, #15803d)' },
        { name: 'REST APIs', level: 80, color: 'linear-gradient(to right, #a855f7, #7c3aed)' },
      ]
    },    cloud: {
      title: 'Cloud & AI',
      skills: [
        { name: 'AWS', level: 75, color: 'linear-gradient(to right, #fb923c, #ea580c)' },
        { name: 'Azure', level: 70, color: 'linear-gradient(to right, #60a5fa, #2563eb)' },
        { name: 'OpenAI API', level: 80, color: 'linear-gradient(to right, #22c55e, #15803d)' },
        { name: 'Vercel', level: 85, color: 'linear-gradient(to right, #000000, #374151)' },
        { name: 'Git/GitHub', level: 85, color: 'linear-gradient(to right, #9ca3af, #4b5563)' },
        { name: 'VS Code', level: 90, color: 'linear-gradient(to right, #3b82f6, #1d4ed8)' },
      ]
    },
    automation: {
      title: 'Automation & Python',
      skills: [
        { name: 'Python', level: 85, color: 'linear-gradient(to right, #3b82f6, #1d4ed8)' },
        { name: 'Selenium', level: 80, color: 'linear-gradient(to right, #22c55e, #15803d)' },
        { name: 'Web Scraping', level: 85, color: 'linear-gradient(to right, #a855f7, #7c3aed)' },
        { name: 'Automation', level: 80, color: 'linear-gradient(to right, #fb923c, #ea580c)' },
        { name: 'Data Analysis', level: 75, color: 'linear-gradient(to right, #06b6d4, #0891b2)' },
        { name: 'API Integration', level: 85, color: 'linear-gradient(to right, #fbbf24, #d97706)' },
      ]
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsContainer}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.skillsHeader}
        >
          <h2 className={styles.skillsTitle}>
            <span className={styles.titleGradient}>
              Skills & Expertise
            </span>
          </h2>
          <div className={styles.gradientLine}></div>
          <p className={styles.skillsDescription}>
            Leveraging cutting-edge technologies to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className={styles.categoryTabs}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.tabsContainer}>
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`${styles.tabButton} ${
                  activeCategory === key ? styles.tabActive : styles.tabInactive
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className={styles.skillsGrid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={styles.skillHeader}>
                <h3 className={styles.skillName}>{skill.name}</h3>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              
              <div className={styles.progressContainer}>
                <motion.div
                  className={styles.progressBar}
                  style={{ background: skill.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className={styles.progressShine}
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ 
                      duration: 2, 
                      delay: 1.5 + index * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>          ))}
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          className={styles.techStackSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className={styles.techStackTitle}>Tech Stack I Work With</h3>
          <div className={styles.techStackGrid}>            {[
              'React', 'Next.js', 'TypeScript', 'NextAuth.js', 'NoSQL', 
              'DynamoDB', 'AWS', 'Azure', 'OpenAI API', 'Firebase',
              'Git', 'Vercel', 'REST APIs', 'JavaScript', 'CSS3'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className={styles.techTag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
