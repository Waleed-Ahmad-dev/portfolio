'use client';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface SectionHeaderProps {
     badgeText: string;
     title: React.ReactNode;
     description: string;
}

export const SectionHeader = ({ badgeText, title, description }: SectionHeaderProps) => (
     <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
     >
          <motion.div
               initial={{ scale: 0.8 }}
               whileInView={{ scale: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="inline-block mb-4"
          >
               <Badge variant="secondary" className="rounded-full py-1.5 px-4 border border-muted-foreground/30 bg-background/80 backdrop-blur-sm">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium">
                         {badgeText}
                    </span>
               </Badge>
          </motion.div>

          <motion.h2 
               className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
          >
               {title}
          </motion.h2>

          <motion.div
               initial={{ width: 0 }}
               whileInView={{ width: "140px" }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          />

          <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="mt-6 text-muted-foreground max-w-2xl mx-auto"
          >
               {description}
          </motion.p>
     </motion.div>
);