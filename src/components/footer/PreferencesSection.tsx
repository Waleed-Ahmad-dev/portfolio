import { motion } from 'framer-motion';
import { itemVariants } from './variants';
import ThemeToggleCard from './ThemeToggleCard';
import ContactCard from './ContactCard';

const PreferencesSection = () => (
     <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-6 flex items-center">
               Preferences
               <span className="h-px flex-1 bg-border/40 ml-3" />
          </h3>

          <ThemeToggleCard />
          <ContactCard />
     </motion.div>
);

export default PreferencesSection;