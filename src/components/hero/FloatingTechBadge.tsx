import { motion } from 'framer-motion';

type FloatingTechBadgeProps = {
     positionClasses: string;
     gradient: string;
     text: string;
     delay: number;
};

const FloatingTechBadge = ({ 
     positionClasses, 
     gradient, 
     text, 
     delay 
}: FloatingTechBadgeProps) => (
     <motion.div 
          className={`absolute ${positionClasses} bg-gradient-to-r ${gradient} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay, type: "spring" }}
     >
          {text}
     </motion.div>
);

export default FloatingTechBadge;