'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import styles from './Contact.module.css';
import Snackbar from './Snackbar';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showSnackbar = (message, type = 'success') => {
    setSnackbar({
      isVisible: true,
      message,
      type
    });
  };

  const hideSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      isVisible: false
    }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); if (response.ok) {
        showSnackbar('Thank you for your message! I&apos;ll get back to you soon.', 'success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        showSnackbar(`Error: ${data.error || 'Failed to send message'}`, 'error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      showSnackbar('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'tanishqjoshi140@gmail.com',
      href: 'mailto:tanishqjoshi140@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9873304571',
      href: 'tel:+919873304571'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'India',
      href: '#'
    }
  ];
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Joshi-Tanishq',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/tanishq-joshi-87a8a322b/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://x.com/tanishqjoshi140',
      label: 'Twitter'
    }
  ];
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContainer}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className={styles.contactHeader}
        >
          <h2 className={styles.contactTitle}>
            <span className={styles.titleGradient}>
              Get In Touch
            </span>
          </h2>
          <div className={styles.gradientLine}></div>          <p className={styles.contactDescription}>
            Ready to start your next project? Let&apos;s discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className={styles.contactContent}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.contactInfo}
          >            <div>
              <h3 className={styles.infoTitle}>Let&apos;s Talk</h3>              <p className={styles.infoDescription}>
                I&apos;m always interested in new opportunities, challenging projects, and meaningful collaborations.
                Whether you&apos;re looking for a talented young developer, someone to build innovative AI-powered applications,
                or just want to chat about the latest technologies, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className={styles.contactDetails}>
              {contactInfo.map(({ icon: Icon, title, content, href }, index) => (
                <motion.a
                  key={title}
                  href={href}
                  className={styles.contactItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={styles.contactIcon}>
                    <Icon className="text-purple-400" size={24} />
                  </div>
                  <div className={styles.contactItemContent}>
                    <h4 className={styles.contactItemTitle}>{title}</h4>
                    <p className={styles.contactItemText}>
                      {content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className={styles.socialSection}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h4 className={styles.socialTitle}>Follow Me</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="text-gray-400 hover:text-purple-400 transition-colors" size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.contactForm}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="Your Name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.formInput}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder="Project Discussion"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={styles.formTextarea}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.loadingSpinner} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >          <p className={styles.footerText}>
            © 2025 Tanishq Joshi. Built with Next.js
          </p>
        </motion.div>
      </div>

      {/* Snackbar */}
      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        isVisible={snackbar.isVisible}
        onClose={hideSnackbar}
      />
    </section>
  );
};

export default Contact;
