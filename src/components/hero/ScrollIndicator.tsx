import { motion } from 'framer-motion';

// Pre-defined animation configurations (prevents object recreation on each render)
const containerAnimation = {
     initial: { opacity: 0, y: 20 },
     animate: { opacity: 1, y: 0 },
     transition: { delay: 1.2, duration: 0.5 }
} as const;
// Separate animate and transition to avoid making arrays readonly while keeping literal types where needed
const scrollBarAnimate = {
     y: [0, 10, 0],
     borderColor: [
          "rgba(100,100,100,0.3)", 
          "rgba(59,130,246,0.5)", 
          "rgba(100,100,100,0.3)"
     ]
};
const scrollBarTransition = { 
     repeat: Infinity, 
     duration: 2, 
     ease: "easeInOut" 
} as const;
const scrollBarAnimation = {
     animate: scrollBarAnimate,
     transition: scrollBarTransition
};
const dotAnimate = { y: [0, 8, 0] };
const dotTransition = { repeat: Infinity, duration: 1.5, ease: "easeInOut" } as const;
const dotAnimation = {
     animate: dotAnimate,
     transition: dotTransition
};
const ScrollIndicator = () => (
     <motion.div
          className="flex flex-col items-center justify-center mt-24"
          {...containerAnimation} // Spread pre-defined props
     >
          <motion.div
               className="w-14 h-24 rounded-3xl border-2 border-muted-foreground/30 flex justify-center p-2"
               {...scrollBarAnimation} // Spread pre-defined props
          >
               <motion.div
                    className="w-2 h-2 bg-blue-500 rounded-full mt-1"
                    {...dotAnimation} // Spread pre-defined props
               />
          </motion.div>
          {/* Static text element - doesn't need motion */}
          SCROLL TO EXPLORE
     </motion.div>
);
export default ScrollIndicator;