"use client";
import { motion } from 'framer-motion';
import { useMemo } from 'react';

export const FloatingParticles = () => {
     // Precompute particles data to avoid re-generating on every render
     const particles = useMemo(() => 
          Array.from({ length: 12 }, () => {
               const size = Math.random() * 8 + 2;
               const duration = 3 + Math.random() * 4;
               const xRange = Math.random() * 20 - 10;

               return {
                    size,
                    top: Math.random() * 100,
                    left: Math.random() * 100,
                    xRange,
                    duration,
                    delay: Math.random() * 2
               };
          }),
     []);

     return (
          <>
               {/* Static decorative elements - no animation components */}
               <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#FF2E63]/10 blur-3xl -z-10 animate-pulse" />
               <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#08D9D6]/10 blur-3xl -z-10 animate-pulse" />

               {/* Optimized particles with precomputed values */}
               {particles.map((particle, i) => (
                    <motion.div
                         key={i}
                         className="absolute rounded-full bg-gradient-to-r from-[#FF2E63] to-[#08D9D6]"
                         style={{
                              width: particle.size,
                              height: particle.size,
                              top: `${particle.top}%`,
                              left: `${particle.left}%`,
                         }}
                         initial={false}
                         animate={{
                              y: [0, -20, 0],
                              x: [0, particle.xRange, 0],
                              opacity: [0.7, 1, 0.7],
                         }}
                         transition={{
                              duration: particle.duration,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: particle.delay
                         }}
                    />
               ))}
          </>
     );
};