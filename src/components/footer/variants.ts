export const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
          opacity: 1,
          transition: {
               staggerChildren: 0.1
          }
     }
};

export const itemVariants = {
     hidden: { y: 20, opacity: 0 },
     visible: {
          y: 0,
          opacity: 1,
          transition: { 
               duration: 0.5, 
               ease: [0.16, 1, 0.3, 1] as const
          }
     }
};