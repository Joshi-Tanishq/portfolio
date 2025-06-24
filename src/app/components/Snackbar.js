'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { useEffect } from 'react';
import styles from './Snackbar.module.css';

const Snackbar = ({ message, type = 'success', isVisible, onClose, duration = 5000 }) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} className={styles.successIcon} />;
      case 'error':
        return <XCircle size={20} className={styles.errorIcon} />;
      default:
        return <CheckCircle size={20} className={styles.successIcon} />;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`${styles.snackbar} ${styles[type]}`}
        >
          <div className={styles.content}>
            {getIcon()}
            <span className={styles.message}>{message}</span>
          </div>
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Snackbar;
