'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [filter, setFilter] = useState('all'); const projects = [    {
      id: 1,
      title: 'AI-Powered Web Platform',
      description: 'A comprehensive full-stack application with AI integration, user management, and advanced analytics. Features modern UI/UX, scalable cloud architecture, and real-time data processing.',
      tech: ['Next.js', 'OpenAI API', 'NextAuth.js', 'Firestore', 'AWS', 'TypeScript'],
      category: 'fullstack',
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: 'https://github.com/Joshi-Tanishq',
      featured: true
    },
    {
      id: 2,
      title: 'Bhumi NGO Platform',
      description: 'Developed the main platform for Bhumi NGO, one of India&apos;s largest volunteer-driven organizations. Features volunteer management, event coordination, and impact tracking with responsive design.',
      tech: ['Next.js', 'React', 'TypeScript', 'Firebase', 'CSS3'],
      category: 'fullstack',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://www.bhumi.ngo/',
      githubUrl: null, // NDA restricted
      featured: true
    },
    {
      id: 3,
      title: 'EcoFest Platform',
      description: 'Built the digital platform for Bhumi&apos;s EcoFest initiative, promoting environmental awareness. Features event management, participant registration, and real-time updates with engaging animations.',
      tech: ['Next.js', 'TypeScript', 'CSS3', 'Firebase', 'Web APIs'],
      category: 'frontend',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://ecofest.bhumi.ngo/',
      githubUrl: null, // NDA restricted
      featured: true
    },
    {
      id: 4,
      title: 'OLMS Alumni Network',
      description: 'Created a comprehensive alumni management system with networking features, event management, and communication tools. Built with modern web technologies and responsive design.',
      tech: ['Next.js', 'React', 'TypeScript', 'Database Integration', 'CSS3'],
      category: 'fullstack',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://olmsalumni.org/',
      githubUrl: null, // NDA restricted
      featured: false
    },
    {
      id: 5,
      title: 'Zoro Gaming Platform',
      description: 'Developed a gaming platform with interactive features, user profiles, and game integration. Features modern UI design, responsive layout, and smooth user experience.',
      tech: ['React', 'JavaScript', 'CSS3', 'Web APIs', 'Netlify'],
      category: 'frontend',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://zorogaming.netlify.app/',
      githubUrl: null, // Private project
      featured: false
    },    {
      id: 6,
      title: 'Document Management System',
      description: 'Built a comprehensive proposal management system with document generation, tracking, and collaboration features. Streamlines workflow processes with automated document handling.',
      tech: ['Next.js', 'TypeScript', 'Firestore', 'PDF Generation', 'NextAuth.js'],
      category: 'fullstack',
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: 'https://github.com/Joshi-Tanishq',
      featured: false
    },{
      id: 7,
      title: 'NGOverse Platform',
      description: 'Developed NGOverse, a comprehensive platform connecting NGOs and volunteers. Features organization profiles, project management, and community building tools with modern design.',      tech: ['Next.js', 'TypeScript', 'Firestore', 'NextAuth.js', 'CSS3'],
      category: 'fullstack',
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: 'https://github.com/Joshi-Tanishq',
      featured: true
    },
    {
      id: 8,
      title: 'Personal Portfolio',
      description: 'My personal portfolio website showcasing my skills, projects, and experience. Built with modern web technologies featuring responsive design, smooth animations, and interactive elements.',
      tech: ['Next.js', 'React', 'CSS3', 'Framer Motion', 'Lucide Icons'],
      category: 'frontend',
      image: '/api/placeholder/600/400',
      liveUrl: 'https://tanishqjoshi-portfolio.netlify.app/',
      githubUrl: null, // Current project
      featured: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContainer}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.projectsHeader}
        >
          <h2 className={styles.projectsTitle}>
            <span className={styles.titleGradient}>
              Featured Projects
            </span>
          </h2>
          <div className={styles.gradientLine}></div>          <p className={styles.projectsDescription}>
            Showcasing some of my best work and the innovative solutions I&apos;ve built
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className={styles.filterTabs}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.tabsContainer}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`${styles.filterButton} ${filter === category.id ? styles.filterActive : styles.filterInactive
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${project.featured ? styles.featuredCard : ''
                }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className={styles.projectImage}>
                <div className={styles.imageGradient}></div>
                <div className={styles.imagePlaceholder}>
                  <Code className="text-purple-400 opacity-50" size={80} />
                </div>
                {/* Hover Overlay */}
                <div className={styles.hoverOverlay}>
                  <div className={styles.overlayButtons}>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.overlayButton} ${styles.primaryOverlayButton}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="text-white" size={20} />
                    </motion.a>
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.overlayButton} ${styles.secondaryOverlayButton}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="text-white" size={20} />
                      </motion.a>
                    )}
                    {!project.githubUrl && (
                      <div className={`${styles.overlayButton} ${styles.disabledOverlayButton}`}>
                        <span className="text-white text-xs">NDA</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>              {/* Project Content */}
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3 className={styles.projectTitle}>
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className={styles.featuredBadge}>
                      Featured
                    </span>
                  )}
                </div>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.techTags}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={styles.techTag}
                    >
                      {tech}
                    </span>
                  ))}
                </div>                <div className={styles.projectLinks}>
                  <div className={styles.linksContainer}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <Eye size={16} className={styles.linkIcon} />
                      Live Demo
                    </a>
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLinkSecondary}
                      >
                        <Github size={16} className={styles.linkIcon} />
                        Code
                      </a>
                    ) : (
                      <span className={styles.projectLinkDisabled}>
                        <Github size={16} className={styles.linkIcon} />
                        NDA Protected
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className={styles.ctaText}>
            Want to see more of my work or discuss a project?
          </p>
          <motion.a
            href="#contact"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}          >
            Let&apos;s Work Together
            <ExternalLink size={20} className={styles.ctaIcon} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
