export const floatingVariants = {
     animate: {
          y: [0, -15, 0],
          transition: {
               duration: 4,
               repeat: Infinity,
               ease: "easeInOut" as const
          }
     }
};