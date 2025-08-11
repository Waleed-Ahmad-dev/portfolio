import { motion } from 'framer-motion';

const ScrollIndicator = () => (
     <motion.div
          className="flex flex-col items-center justify-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
     >
          <motion.div
               className="w-14 h-24 rounded-3xl border-2 border-muted-foreground/30 flex justify-center p-2"
               animate={{ 
                    y: [0, 10, 0],
                    borderColor: ["rgba(100,100,100,0.3)", "rgba(59,130,246,0.5)", "rgba(100,100,100,0.3)"]
               }}
               transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
               <motion.div
                    className="w-2 h-2 bg-blue-500 rounded-full mt-1"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
               />
          </motion.div>
          <span className="mt-3 text-sm font-medium text-muted-foreground tracking-wider">
               SCROLL TO EXPLORE
          </span>
     </motion.div>
);

export default ScrollIndicator;