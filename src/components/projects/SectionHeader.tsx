'use client';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface SectionHeaderProps {
     badgeText: string;
     title: React.ReactNode;
     description: string;
}

export const SectionHeader = ({ badgeText, title, description }: SectionHeaderProps) => {
     return (
          <div className="text-center mb-20">
               {/* Badge with scale animation */}
               <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-4"
               >
                    <Badge 
                         variant="secondary" 
                         className="rounded-full py-1.5 px-4 border border-muted-foreground/30 bg-background/80 backdrop-blur-sm"
                    >
                         <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
                              {badgeText}
                         </span>
                    </Badge>
               </motion.div>
               {/* Title with fade and slide animation */}
               <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
               >
                    {title}
               </motion.h2>
               {/* Animated divider */}
               <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "140px" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
               />
               {/* Description with fade animation */}
               <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mt-6 text-muted-foreground max-w-2xl mx-auto"
               >
                    {description}
               </motion.p>
          </div>
     );
};