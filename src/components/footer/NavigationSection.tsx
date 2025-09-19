import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { memo } from 'react';
import { itemVariants } from './variants';

// Pre-compute navigation items with lowercase hrefs
const NAV_ITEMS = ['Home', 'About', 'Projects', 'Timeline', 'Contact'].map(item => ({
     name: item,
     href: `#${item.toLowerCase()}`
}));

const NavigationSection = () => (
     <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-6 flex items-center">
               Navigation
               <span className="h-px flex-1 bg-border/40 ml-3" />
          </h3>
          <ul className="space-y-3">
               {NAV_ITEMS.map(({ name, href }) => (
                    <motion.li 
                         key={name}
                         whileHover={{ x: 5 }}
                         transition={{ type: "spring", stiffness: 400 }}
                    >
                         <Link 
                              href={href}
                              className="text-muted-foreground hover:text-foreground flex items-center transition-colors duration-300 group"
                         >
                              <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0" />
                              {name}
                         </Link>
                    </motion.li>
               ))}
          </ul>
     </motion.div>
);

export default memo(NavigationSection);  // Prevent unnecessary re-renders