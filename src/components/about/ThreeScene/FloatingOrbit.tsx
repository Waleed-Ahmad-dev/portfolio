"use client";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const FloatingOrbit = () => {
     const meshRef = useRef<Mesh>(null);

     useFrame((state) => {
          if (meshRef.current) {
               meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
               meshRef.current.rotation.y += 0.005;
               meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
          }
     });

     return (
          <mesh ref={meshRef} position={[0, 0, -2]}>
               <torusGeometry args={[1.8, 0.02, 16, 100]} />
               <meshPhysicalMaterial 
                    color="#6366f1"
                    emissive="#6366f1"
                    emissiveIntensity={0.4}
                    metalness={0.8}
                    roughness={0.2}
                    transparent
                    opacity={0.8}
               />
          </mesh>
     );
};