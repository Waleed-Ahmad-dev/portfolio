import { motion } from 'framer-motion';
import { itemVariants } from './variants';
import ThemeToggleCard from './ThemeToggleCard';
import ContactCard from './ContactSection';
import React from 'react';

// Memoize component to prevent unnecessary re-renders
const PreferencesSection = () => (
     <motion.div variants={itemVariants}>
          {/* Static header with minimal JSX */}
          <h3 className="text-lg font-semibold mb-6 flex items-center">
               Preferences
               <span className="h-px flex-1 bg-border/40 ml-3" />
          </h3>

          {/* Optimized child components */}
          <ThemeToggleCard />
          <ContactCard />
     </motion.div>
);

export default React.memo(PreferencesSection);