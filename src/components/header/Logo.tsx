'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Logo = () => (
     <Link 
          href="/" 
          className="flex items-center gap-2"
          aria-label="Home"
     >
          {/* Static container without motion props - reduces animation overhead */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
               {/* Only using motion for minimal interactive element */}
               <motion.span 
                    className="font-bold text-white text-lg"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.3 }}
               >
                    W
               </motion.span>
          </div>
          {/* Static text element - removes animation overhead */}
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 hidden sm:block">
               Waleed Ahmad
          </span>
     </Link>
);