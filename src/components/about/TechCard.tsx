"use client";
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export const TechCard = ({ 
     tech, 
     index 
}: { 
     tech: { 
          name: string; 
          color: string; 
          icon: React.ReactNode 
     }; 
     index: number;
}) => {
     return (
          <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 300
               }}
               whileHover={{ 
                    y: -8,
                    rotate: [0, -2, 0, 2, 0],
                    transition: { type: "spring", stiffness: 400 }
               }}
               className="h-full"
          >
               <Card className={`bg-gradient-to-br ${tech.color} h-full border-0 rounded-xl overflow-hidden relative group`}>
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-3 h-full">
                         <div className="text-3xl mb-1">
                              {tech.icon}
                         </div>
                         <h5 className="font-bold text-white text-center text-sm">{tech.name}</h5>
                         <motion.div 
                              className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              initial={{ opacity: 0 }}
                         >
                              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                                   <div className="w-2 h-2 rounded-full bg-[#08D9D6] animate-ping"></div>
                              </div>
                         </motion.div>
                    </CardContent>
               </Card>
          </motion.div>
     );
};