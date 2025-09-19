import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";

interface ContactInfoItemProps {
     icon: React.ReactNode;
     title: string;
     content: string;
     index: number;
}

// Static animation configuration to avoid object recreation on each render
const initial = { opacity: 0, y: 20 };
const animate = { opacity: 1, y: 0 };

export const ContactInfoItem = ({ icon, title, content, index }: ContactInfoItemProps) => (
     <motion.div
          initial={initial}
          animate={animate}
          transition={{ delay: 0.2 + index * 0.1 }} // Staggered animation based on index
          className="flex items-start gap-5"
     >
          {/* Icon container with fixed styles */}
          <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full flex items-center justify-center mt-1">
               {icon}
          </div>

          {/* Content section */}
          <div>
               <Label className="text-muted-foreground text-sm uppercase tracking-wider">
                    {title}
               </Label>
               <p className="text-lg font-medium">{content}</p>
          </div>
     </motion.div>
);