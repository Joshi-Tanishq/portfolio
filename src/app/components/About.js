'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Users, Trophy, Lightbulb } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });  const stats = [
    { icon: Code, value: '1.5+', label: 'Years Experience' },
    { icon: Users, value: '25+', label: 'Projects Completed' },
    { icon: Trophy, value: 'Young', label: 'Tech Achiever' },
    { icon: Lightbulb, value: 'AI/Cloud', label: 'Specialist' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.aboutHeader}
        >
          <h2 className={styles.aboutTitle}>
            <span className={styles.titleGradient}>
              About Me
            </span>
          </h2>
          <div className={styles.gradientLine}></div>
        </motion.div>

        <div className={styles.aboutContent}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.profileSection}
          >
            <div className={styles.profileContainer}>
              <div className={styles.profileOuter}>
                <div className={styles.profileInner}>
                  <div className={styles.profileContent}>
                    <span className={styles.profileInitials}>
                      TJ
                    </span>
                  </div>
                </div>
              </div>
              {/* Floating elements around the profile */}              <motion.div
                className={`${styles.floatingIcon} ${styles.floatingIconPurple}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Code size={24} />
              </motion.div>
              <motion.div
                className={`${styles.floatingIcon} ${styles.floatingIconPink}`}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Lightbulb size={20} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.textSection}
          >            <h3 className={styles.textTitle}>
              Full Stack Developer & Young Tech Achiever
            </h3>            <p className={styles.textParagraph}>
              I&apos;m Tanishq Joshi, a dedicated Full Stack Web Developer with a passion for innovative technology solutions. 
              With 1.5 years of focused experience, I specialize in building cutting-edge applications with AI integration, 
              automation solutions, and modern cloud technologies.
            </p><p className={styles.textParagraph}>
              My expertise spans frontend technologies like Next.js and React, along with cloud platforms including AWS and Azure. 
              I&apos;m passionate about integrating AI capabilities using OpenAI, working with NoSQL databases like Firestore, 
              and creating automation solutions using Python and Selenium.
            </p>            <p className={styles.textParagraph}>
              As a young professional, I focus on creating cutting-edge solutions that leverage the latest technologies, 
              including web scraping automation, AI integration, and scalable cloud architectures to solve real-world problems.
            </p>

            <motion.div
              className={styles.skillTags}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {['Innovation', 'AI Integration', 'Cloud Solutions', 'Fast Learning'].map((skill, index) => (
                <span
                  key={skill}
                  className={styles.skillTag}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className={styles.statsGrid}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map(({ icon: Icon, value, label }, index) => (            
            <motion.div
              key={label}
              className={styles.statCard}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <div className={styles.statIconContainer}>
                <Icon size={28} />
              </div>
              <div className={styles.statValue}>{value}</div>
              <div className={styles.statLabel}>{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
