'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
     const mountRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          if (!mountRef.current) return;

          // Scene setup
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer({ 
               alpha: true, 
               antialias: true 
          });

          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setClearColor(0x000000, 0);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

          mountRef.current.appendChild(renderer.domElement);

          // Floating geometry
          const geometries = [
               new THREE.IcosahedronGeometry(1, 0),
               new THREE.OctahedronGeometry(1.2, 0),
               new THREE.TetrahedronGeometry(0.8, 0)
          ];

          const material = new THREE.MeshPhysicalMaterial({
               color: 0x3b82f6,
               transmission: 0.95,
               opacity: 0.1,
               transparent: true,
               roughness: 0.1,
               metalness: 0,
               ior: 1.5,
               thickness: 0.5,
               specularColor: 0xffffff,
               envMapIntensity: 1,
               clearcoat: 1,
               clearcoatRoughness: 0.1
          });

          const objects: THREE.Mesh[] = [];

          // Create floating objects
          geometries.forEach((geometry, index) => {
               const mesh = new THREE.Mesh(geometry, material);
               mesh.position.x = (Math.random() - 0.5) * 10;
               mesh.position.y = (Math.random() - 0.5) * 10;
               mesh.position.z = (Math.random() - 0.5) * 5;
               mesh.rotation.x = Math.random() * Math.PI;
               mesh.rotation.y = Math.random() * Math.PI;
               scene.add(mesh);
               objects.push(mesh);
          });

          // Ambient light
          const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
          scene.add(ambientLight);

          // Directional light
          const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
          directionalLight.position.set(5, 5, 5);
          scene.add(directionalLight);

          camera.position.z = 8;

          // Animation
          const animate = () => {
               requestAnimationFrame(animate);

               objects.forEach((obj, index) => {
               obj.rotation.x += 0.002 * (index + 1);
               obj.rotation.y += 0.003 * (index + 1);
               
               // Floating animation
               obj.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
               });

               renderer.render(scene, camera);
          };

          animate();

          // Handle resize
          const handleResize = () => {
               camera.aspect = window.innerWidth / window.innerHeight;
               camera.updateProjectionMatrix();
               renderer.setSize(window.innerWidth, window.innerHeight);
          };

          window.addEventListener('resize', handleResize);

          // Cleanup
          return () => {
               window.removeEventListener('resize', handleResize);
               if (mountRef.current) {
                    mountRef.current.removeChild(renderer.domElement);
               }
               renderer.dispose();
          };
     }, []);

     return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />;
};

export default ThreeScene;