import { m } from 'framer-motion';

const currentYear = new Date().getFullYear(); // Moved outside component to avoid recalculation on each render

const CopyrightSection = () => (
     <m.div 
          className="border-t border-border/20 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
     >
          <p className="text-muted-foreground text-sm">
               © {currentYear} Waleed Ahmad. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-3 md:mt-0">
               Crafted with passion and Next.js
          </p>
     </m.div>
);

export default CopyrightSection;