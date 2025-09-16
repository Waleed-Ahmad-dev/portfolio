"use client";
import { motion } from 'framer-motion';
import { memo } from 'react';

// Static animation configurations outside component to prevent recreation on each render
const initial = { opacity: 0, y: 20 };
const animate = { opacity: 1, y: 0 };
const whileHover = { y: -5, borderColor: '#08D9D6' };

export const SpecialtyCard = memo(function SpecialtyCard({ 
     icon, 
     title, 
     description,
     index 
}: { 
     icon: React.ReactNode; 
     title: string; 
     description: string;
     index: number;
}) {
     // Precompute transition delay
     const transition = { delay: 0.5 + index * 0.1 };

     return (
          <motion.div 
               className="bg-[#0C1120] border border-[#1E2A40] rounded-xl p-3"
               initial={initial}
               animate={animate}
               transition={transition}
               whileHover={whileHover}
          >
               <div className="flex items-start gap-3">
                    <div className="mt-0.5">{icon}</div>
                    <div>
                         <h4 className="font-bold text-white">{title}</h4>
                         <p className="text-sm text-[#A0AEC0] mt-1">{description}</p>
                    </div>
               </div>
          </motion.div>
     );
});