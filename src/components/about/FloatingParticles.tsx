"use client";
import { motion } from 'framer-motion';

export const FloatingParticles = () => {
     return (
          <>
               {/* Decorative elements */}
               <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#FF2E63]/10 blur-3xl -z-10 animate-pulse" />
               <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#08D9D6]/10 blur-3xl -z-10 animate-pulse" />

               {/* Floating particles */}
               {[...Array(12)].map((_, i) => (
                    <motion.div
                         key={i}
                         className="absolute rounded-full bg-gradient-to-r from-[#FF2E63] to-[#08D9D6]"
                         style={{
                              width: Math.random() * 8 + 2 + 'px',
                              height: Math.random() * 8 + 2 + 'px',
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                         }}
                         animate={{
                              y: [0, -20, 0],
                              x: [0, Math.random() * 20 - 10, 0],
                              opacity: [0.7, 1, 0.7],
                         }}
                         transition={{
                              duration: 3 + Math.random() * 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 2
                         }}
                    />
               ))}
          </>
     );
};