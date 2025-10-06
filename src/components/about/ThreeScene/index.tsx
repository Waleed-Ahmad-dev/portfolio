"use client";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { FloatingOrbit } from './FloatingOrbit';
import { AnimatedParticles } from './AnimatedParticles';
import { SceneLighting } from './SceneLighting';

export const ThreeScene = () => {
     return (
          <div className="absolute inset-0 -z-10">
               <Canvas
                    camera={{ 
                         position: [0, 0, 5],
                         fov: 50 
                    }}
                    gl={{ 
                         alpha: true,
                         antialias: true 
                    }}
               >
                    <Suspense fallback={null}>
                         <SceneLighting />
                         <FloatingOrbit />
                         <AnimatedParticles />
                    </Suspense>
               </Canvas>

               {/* Animated gradient overlay */}
               <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-purple-950/40 to-cyan-950/60" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/90" />
          </div>
     );
};