import React from 'react';
import { motion } from 'framer-motion';

// Component for a styled button with hover effects
const AnimatedButton = ({ children, className, ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 8px 20px var(--color-accent-shadow)" }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-3 rounded-full text-lg font-medium tracking-wide transition-all duration-300 ease-in-out
                bg-[var(--color-accent)] text-[var(--color-text-light)] hover:bg-[var(--color-secondary-blue)] dark:bg-[var(--color-accent-light)] dark:text-[var(--color-dark-blue)] dark:hover:bg-[var(--color-mid-blue)]
                ${className}`}
    {...props}
  >
    {children}
  </motion.button>
);

export default AnimatedButton;
