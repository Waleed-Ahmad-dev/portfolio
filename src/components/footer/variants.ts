export const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
          opacity: 1,
          transition: {
               staggerChildren: 0.15,
               delayChildren: 0.2
          }
     }
};

export const itemVariants = {
     hidden: { 
          y: 40, 
          opacity: 0,
          scale: 0.95
     },
     visible: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: { 
               duration: 0.8, 
               ease: [0.25, 0.46, 0.45, 0.94] as const
          }
     }
};