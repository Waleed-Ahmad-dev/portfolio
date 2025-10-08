'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function FloatingParticles() {
     const pointsRef = useRef<THREE.Points>(null);
     const sphere = useMemo(() => {
          const positions = new Float32Array(1500 * 3);
          for (let i = 0; i < 1500; i++) {
               const theta = Math.random() * Math.PI * 2;
               const phi = Math.acos(2 * Math.random() - 1);
               const radius = 5 + Math.random() * 2;

               positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
               positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
               positions[i * 3 + 2] = radius * Math.cos(phi);
          }
          return new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(positions, 3));
     }, []);

     useFrame((state) => {
          if (pointsRef.current) {
               pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
               pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
               pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
          }
     });

     return (
          <Points ref={pointsRef} positions={sphere.attributes.position.array as Float32Array} stride={3}>
               <PointMaterial
                    transparent
                    color="#3B82F6"
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    />
          </Points>
     );
}

function FloatingShapes() {
     const groupRef = useRef<THREE.Group>(null);

     useFrame((state) => {
          if (groupRef.current) {
               groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
               groupRef.current.children.forEach((child, index) => {
                    child.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2;
               });
          }
     });

     return (
          <group ref={groupRef}>
               <mesh position={[2, 0, -1]}>
                    <icosahedronGeometry args={[0.3, 0]} />
                    <meshStandardMaterial color="#8B5CF6" transparent opacity={0.6} />
               </mesh>
               <mesh position={[-2, 1, -2]}>
                    <torusGeometry args={[0.4, 0.1, 16, 32]} />
                    <meshStandardMaterial color="#06B6D4" transparent opacity={0.6} />
               </mesh>
               <mesh position={[1, -1, -3]}>
                    <octahedronGeometry args={[0.25, 0]} />
                    <meshStandardMaterial color="#10B981" transparent opacity={0.6} />
               </mesh>
          </group>
     );
}

export function ThreeBackground() {
     useGSAP(() => {
          gsap.to('.three-container', {
               opacity: 1,
               duration: 2,
               ease: "power2.inOut"
          });
     });

     return (
          <div className="three-container opacity-0 absolute inset-0 -z-10">
               <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <FloatingParticles />
                    <FloatingShapes />
               </Canvas>
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-gray-900/50 dark:via-gray-900/80 dark:to-gray-900/50" />
          </div>
     );
}