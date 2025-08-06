import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";

interface ContactInfoItemProps {
     icon: React.ReactNode;
     title: string;
     content: string;
     index: number;
}

export const ContactInfoItem = ({ icon, title, content, index }: ContactInfoItemProps) => (
     <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="flex items-start gap-5"
     >
          <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full flex items-center justify-center mt-1">
               {icon}
          </div>
          <div>
               <Label className="text-muted-foreground text-sm uppercase tracking-wider">{title}</Label>
               <p className="text-lg font-medium">{content}</p>
          </div>
     </motion.div>
);