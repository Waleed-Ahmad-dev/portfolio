import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if target is interactive (a, button, inputs, or has role button)
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.closest('a') || 
        target.closest('button');

      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isInteractive = 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.tagName === 'INPUT' || 
          target.tagName === 'TEXTAREA' ||
          target.closest('a') || 
          target.closest('button');
          
        if (isInteractive) {
            setIsHovering(false);
        }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      animate={{
        x: mousePosition.x - (isHovering ? 24 : 8),
        y: mousePosition.y - (isHovering ? 24 : 8),
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 50,
        mass: 0.1
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 360 : 0
        }}
        transition={{
          scale: { duration: 0.2 },
          rotate: { duration: 2, repeat: isHovering ? Infinity : 0, ease: "linear" }
        }}
        className="relative"
      >
        {isHovering ? (
          // Hover State: Mangekyou Sharingan
          <div className="w-12 h-12 relative">
             <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
                {/* Outer Ring */}
                <circle cx="50" cy="50" r="45" fill="rgba(150, 0, 0, 0.4)" stroke="#ff0000" strokeWidth="2" />
                <circle cx="50" cy="50" r="40" fill="#bb0000" />
                
                {/* Itachi Mangekyou Pattern */}
                <g>
                  <path 
                    d="M50 50 Q 80 50 90 20 Q 60 30 50 50"
                    fill="black"
                    transform="rotate(0 50 50)"
                  />
                  <path 
                    d="M50 50 Q 80 50 90 20 Q 60 30 50 50"
                    fill="black"
                    transform="rotate(120 50 50)"
                  />
                  <path 
                    d="M50 50 Q 80 50 90 20 Q 60 30 50 50"
                    fill="black"
                    transform="rotate(240 50 50)"
                  />
                  <circle cx="50" cy="50" r="6" fill="black" />
                </g>
             </svg>
          </div>
        ) : (
          // Default State: Small Red Dot / Shuriken Center
          <div className="w-4 h-4 bg-red-600 rounded-full border border-red-400 shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;