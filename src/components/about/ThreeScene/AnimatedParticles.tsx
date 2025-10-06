"use client";
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points } from 'three';

const PARTICLE_COUNT = 150;

export const AnimatedParticles = () => {
     const pointsRef = useRef<Points>(null);

     const particles = useMemo(() => {
          const positions = new Float32Array(PARTICLE_COUNT * 3);
          const colors = new Float32Array(PARTICLE_COUNT * 3);

          for (let i = 0; i < PARTICLE_COUNT; i++) {
               const i3 = i * 3;
               const radius = 3 + Math.random() * 2;
               const theta = Math.random() * Math.PI * 2;
               const phi = Math.acos(2 * Math.random() - 1);

               positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
               positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
               positions[i3 + 2] = radius * Math.cos(phi);

               // Purple to cyan gradient
               colors[i3] = 0.4 + Math.random() * 0.3;     // R
               colors[i3 + 1] = 0.6 + Math.random() * 0.4; // G
               colors[i3 + 2] = 0.8 + Math.random() * 0.2; // B
          }

          return { positions, colors };
     }, []);

     useFrame((state) => {
          if (pointsRef.current) {
               pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
               pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
          }
     });

     return (
          <points ref={pointsRef}>
               <bufferGeometry>
                    <bufferAttribute
                         attach="attributes-position"
                         args={[particles.positions, 3]}
                    />
                    <bufferAttribute
                         attach="attributes-color"
                         args={[particles.colors, 3]}
                    />
               </bufferGeometry>
               <pointsMaterial
                    size={0.03}
                    vertexColors
                    transparent
                    opacity={0.8}
                    sizeAttenuation
               />
          </points>
     );
};