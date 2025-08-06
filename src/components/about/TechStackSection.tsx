// components/about/TechStackSection.tsx
"use client";
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { TechCard } from './TechCard';
import { techStack } from './data';

export const TechStackSection = () => {
     return (
          <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.7, delay: 0.3 }}
               className="col-span-full"
          >
               <div className="flex items-center justify-between mb-6">
                    <motion.h4 
                         className="text-2xl font-bold text-white flex items-center gap-3"
                         whileHover={{ x: 5 }}
                    >
                         <motion.div
                              animate={{ rotate: [0, 15, 0, -15, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                         > 
                              <Cpu className="text-[#08D9D6]" />
                         </motion.div>
                         Technical Expertise
                    </motion.h4>
               </div>

               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {techStack.map((tech, index) => (
                         <TechCard key={index} tech={tech} index={index} />
                    ))}
               </div>
          </motion.div>
     );
};