'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Logo = () => (
     <Link 
          href="/" 
          className="flex items-center gap-2 group"
          aria-label="Home"
     >
          <motion.div 
               initial={{ scale: 0.8 }}
               animate={{ scale: 1 }}
               transition={{ type: 'spring', stiffness: 300 }}
               className="bg-gradient-to-br from-blue-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/20 transition-shadow"
          >
               <motion.span 
                    className="font-bold text-white text-lg"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.3 }}
               >
                    W
               </motion.span>
          </motion.div>
          <motion.span 
               className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 hidden sm:block"
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.1 }}
          >
               Waleed Ahmad
          </motion.span>
     </Link>
);