import { motion } from 'framer-motion';

const CopyrightSection = () => {
     const currentYear = new Date().getFullYear();

     return (
          <motion.div 
               className="border-t border-border/20 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-center"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               viewport={{ once: true }}
          >
               <p className="text-muted-foreground text-sm">
                    © {currentYear} Waleed Ahmad. All rights reserved.
               </p>
               <div className="mt-3 md:mt-0">
                    <p className="text-xs text-muted-foreground/60">
                         Crafted with passion and Next.js
                    </p>
               </div>
          </motion.div>
     );
};

export default CopyrightSection;