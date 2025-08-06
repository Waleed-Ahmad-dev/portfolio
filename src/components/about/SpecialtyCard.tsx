"use client";
import { motion } from 'framer-motion';

export const SpecialtyCard = ({ 
     icon, 
     title, 
     description,
     index 
}: { 
     icon: React.ReactNode; 
     title: string; 
     description: string;
     index: number;
}) => {
     return (
          <motion.div 
               className="bg-[#0C1120] border border-[#1E2A40] rounded-xl p-3"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 + index * 0.1 }}
               whileHover={{ 
               y: -5,
               borderColor: '#08D9D6'
               }}
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
};