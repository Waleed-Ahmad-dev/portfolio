import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
     { name: 'Home', href: '#home' },
     { name: 'About', href: '#about' },
     { name: 'Projects', href: '#projects' },
     { name: 'Timeline', href: '#timeline' },
     { name: 'Contact', href: '#contact' }
];

const NavigationSection = () => (
     <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
     >
          <h3 className="text-lg font-semibold mb-8 flex items-center">
               <span className="bg-gradient-to-r from-blue-500 to-purple-600 w-2 h-2 rounded-full mr-3" />
               Navigation
               <span className="h-px flex-1 bg-gradient-to-r from-border/40 to-transparent ml-4" />
          </h3>

          <ul className="space-y-3">
               {NAV_ITEMS.map(({ name, href }, index) => (
                    <motion.li
                         key={name}
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.1 * index }}
                         viewport={{ once: true }}
                    >
                         <Link 
                              href={href}
                              className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-background/60 hover:backdrop-blur-sm border border-transparent hover:border-border/20 transition-all duration-300"
                         >
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                   {name}
                              </span>
                              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                         </Link>
                    </motion.li>
               ))}
          </ul>
     </motion.div>
);

export default NavigationSection;