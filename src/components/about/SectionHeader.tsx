"use client";
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const SectionHeader = () => {
     return (
          <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
               className="text-center mb-16"
          >
               {/* Reduced motion complexity for badge element */}
               <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#0C1120] border border-[#1E2A40]">
                    <Sparkles className="w-4 h-4 text-[#08D9D6]" />
                    <span className="text-sm font-medium text-[#EAEAEA]">About Me</span>
               </div>

               {/* Optimized motion with simpler properties */}
               <motion.h2 
                    className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF2E63] to-[#08D9D6]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                         delay: 0.1,
                         duration: 0.5
                    }}
               >
                    Crafting Digital Excellence
               </motion.h2>

               {/* Removed motion from paragraph for performance */}
               <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
                    Building immersive digital experiences through innovative design and robust engineering
               </p>
          </motion.div>
     );
};