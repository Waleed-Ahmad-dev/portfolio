"use client";
import { useEffect, useRef } from 'react';
import { techStack } from './data';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export const AnimatedTechSphere = () => {
     const sphereRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          if (!sphereRef.current) return;

          const sphere = sphereRef.current;
          const items = sphere.querySelectorAll('.tech-item');

          // GSAP animation for the sphere
          const tl = gsap.timeline({ 
               repeat: -1,
               yoyo: true 
          });

          tl.to(sphere, {
               rotationY: 360,
               rotationX: 15,
               duration: 40,
               ease: "none"
          });

          // Hover animations for individual items
          items.forEach((item, index) => {
               const angle = (index / items.length) * Math.PI * 2;
               const x = Math.cos(angle) * 200;
               const y = Math.sin(angle) * 200;
               const z = Math.sin(angle * 2) * 100;

               gsap.set(item, {
                    x,
                    y,
                    z,
                    rotationX: -y * 0.1,
                    rotationY: x * 0.1,
               });

               item.addEventListener('mouseenter', () => {
                    gsap.to(item, {
                         scale: 1.2,
                         z: z + 50,
                         duration: 0.3,
                         ease: "back.out(1.7)"
                    });
               });

               item.addEventListener('mouseleave', () => {
                    gsap.to(item, {
                         scale: 1,
                         z: z,
                         duration: 0.3,
                         ease: "power2.out"
                    });
               });
          });

          return () => {
               tl.kill();
          };
     }, []);

     return (
          <div className="relative h-96 w-96 mx-auto perspective-1000">
               <div
                    ref={sphereRef}
                    className="relative w-full h-full transform-style-3d"
               >
                    {techStack.map((tech, index) => (
                         <motion.div
                              key={tech.name}
                              className="tech-item absolute top-1/2 left-1/2 cursor-pointer transform-gpu"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                   delay: index * 0.1,
                                   duration: 0.6,
                                   type: "spring",
                                   stiffness: 100
                              }}
                         >
                              <Card className={`w-16 h-16 bg-gradient-to-br ${tech.color} border-0 shadow-2xl backdrop-blur-sm bg-opacity-90 hover:shadow-cyan-500/20 transition-all duration-300`}>
                                   <CardContent className="p-3 flex items-center justify-center h-full">
                                        <div className="text-2xl transform-gpu hover:scale-110 transition-transform duration-300">
                                             {tech.icon}
                                        </div>
                                   </CardContent>
                              </Card>
                         </motion.div>
                    ))}
               </div>

               {/* Glow effects */}
               <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
               <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
     );
};