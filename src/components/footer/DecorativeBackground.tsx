'use client';

import { motion } from 'framer-motion';

const DecorativeBackground = () => (
     <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated gradient orbs */}
          <motion.div
               className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 blur-3xl"
               animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
               }}
               transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
               }}
          />

          <motion.div
               className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/5 to-rose-500/10 blur-3xl"
               animate={{
                    x: [0, -20, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1],
               }}
               transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
               }}
          />

          {/* Grid pattern */}
          <div 
               className="absolute inset-0 opacity-[0.02]"
               style={{
                    backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
               }}
          />
     </div>
);

export default DecorativeBackground;