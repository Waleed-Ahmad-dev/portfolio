import { memo } from 'react';
import { motion } from 'framer-motion';

type FloatingTechBadgeProps = {
     positionClasses: string;
     gradient: string;
     text: string;
     delay: number;
};

// Pre-defined motion configuration to avoid object recreation on each render
const motionConfig = {
     initial: { scale: 0 },
     animate: { scale: 1 },
     transition: { type: "spring" as const }
};

const FloatingTechBadge = ({
     positionClasses,
     gradient,
     text,
     delay
}: FloatingTechBadgeProps) => (
     <motion.div
          className={`absolute ${positionClasses} bg-gradient-to-r ${gradient} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
          {...motionConfig}
          transition={{ ...motionConfig.transition, delay }} // Combine with dynamic delay
     >
          {text}
     </motion.div>
);

export default memo(FloatingTechBadge);