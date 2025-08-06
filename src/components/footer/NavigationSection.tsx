import { motion } from 'framer-motion';
import { itemVariants } from './variants';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = ['Home', 'About', 'Projects', 'Timeline', 'Contact'];

const NavigationSection = () => (
     <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-6 flex items-center">
               Navigation
               <span className="h-px flex-1 bg-border/40 ml-3" />
          </h3>
          <ul className="space-y-3">
               {NAV_ITEMS.map((item) => (
                    <motion.li 
                         key={item}
                         whileHover={{ x: 5 }}
                         transition={{ type: "spring", stiffness: 400 }}
                    >
                         <Link 
                              href={`#${item.toLowerCase()}`} 
                              className="text-muted-foreground hover:text-foreground flex items-center transition-all duration-300 group"
                         >
                              <ArrowUpRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                              {item}
                         </Link>
                    </motion.li>
               ))}
          </ul>
     </motion.div>
);

export default NavigationSection;