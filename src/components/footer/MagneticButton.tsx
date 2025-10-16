'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
     children: React.ReactNode;
     strength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
     children, 
     strength = 0.3 
}) => {
     const buttonRef = useRef<HTMLDivElement>(null);

     const handleMouseMove = (e: React.MouseEvent) => {
          if (!buttonRef.current) return;

          const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
          const x = (e.clientX - left - width / 2) * strength;
          const y = (e.clientY - top - height / 2) * strength;

          gsap.to(buttonRef.current, {
               x,
               y,
               duration: 0.8,
               ease: "power2.out"
          });
     };

     const handleMouseLeave = () => {
          if (!buttonRef.current) return;

          gsap.to(buttonRef.current, {
               x: 0,
               y: 0,
               duration: 0.8,
               ease: "elastic.out(1.2, 0.4)"
          });
     };

     return (
          <div
               ref={buttonRef}
               onMouseMove={handleMouseMove}
               onMouseLeave={handleMouseLeave}
               className="inline-block"
          >
               {children}
          </div>
     );
};

export default MagneticButton;