'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export const ContactHeader = () => {
     const headerRef = useRef<HTMLDivElement>(null);
     const textRef = useRef<HTMLHeadingElement>(null);

     useGSAP(() => {
          if (headerRef.current && textRef.current) {
               const tl = gsap.timeline();
               
               tl.fromTo(headerRef.current, 
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
               );
               
               tl.fromTo(textRef.current, 
                    { backgroundPosition: "0% 50%" },
                    { backgroundPosition: "100% 50%", duration: 3, ease: "sine.inOut" },
                    "-=0.5"
               );

               // Floating animation
               gsap.to(headerRef.current, {
                    y: -10,
                    duration: 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
               });
          }
     });

     return (
          <div ref={headerRef} className="text-center mb-20 relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-50" />

               <h2 
                    ref={textRef}
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-size-200 bg-pos-0 animate-gradient mb-6 relative z-10"
               >
                    Let's Create Magic
               </h2>

               <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed relative z-10">
                    Ready to bring your vision to life? Let's collaborate and build something extraordinary together. 
                    Your next big project starts with a simple hello.
               </p>

               <style jsx>{`
                    .animate-gradient {
                         background-size: 200% 200%;
                         animation: gradientShift 6s ease infinite;
                    }
                    
                    @keyframes gradientShift {
                         0%, 100% { background-position: 0% 50%; }
                         50% { background-position: 100% 50%; }
                    }
               `}</style>
          </div>
     );
};