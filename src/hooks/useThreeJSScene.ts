import { useEffect } from 'react';
import * as THREE from 'three';

export const useThreeJSScene = (containerRef: React.RefObject<HTMLDivElement>) => {
     useEffect(() => {
          if (!containerRef.current) return;

          // Scene setup
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

          renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
          renderer.setClearColor(0x000000, 0);
          containerRef.current.appendChild(renderer.domElement);

          // Create floating geometric elements
          const geometries = [
               new THREE.TorusGeometry(2, 0.5, 16, 100),
               new THREE.OctahedronGeometry(1.5, 0),
               new THREE.IcosahedronGeometry(1.8, 0)
          ];

          const materials = [
               new THREE.MeshBasicMaterial({ 
                    color: 0x00ffff, 
                    wireframe: true,
                    transparent: true,
                    opacity: 0.3
               }),
               new THREE.MeshBasicMaterial({ 
                    color: 0xff00ff, 
                    wireframe: true,
                    transparent: true,
                    opacity: 0.2
               }),
               new THREE.MeshBasicMaterial({ 
                    color: 0x00ff88, 
                    wireframe: true,
                    transparent: true,
                    opacity: 0.25
               })
          ];

          const meshes: THREE.Mesh[] = [];

          geometries.forEach((geometry, index) => {
               const mesh = new THREE.Mesh(geometry, materials[index]);
               mesh.position.x = (Math.random() - 0.5) * 10;
               mesh.position.y = (Math.random() - 0.5) * 10;
               mesh.position.z = (Math.random() - 0.5) * 10;
               scene.add(mesh);
               meshes.push(mesh);
          });

          camera.position.z = 8;

          // Animation
          const animate = () => {
               requestAnimationFrame(animate);

               meshes.forEach((mesh, index) => {
                    mesh.rotation.x += 0.005 * (index + 1);
                    mesh.rotation.y += 0.008 * (index + 1);

                    // Floating animation
                    mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.005;
               });

               renderer.render(scene, camera);
          };

          animate();

          // Handle resize
          const handleResize = () => {
               if (!containerRef.current) return;
               camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
               camera.updateProjectionMatrix();
               renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
          };

          window.addEventListener('resize', handleResize);

          return () => {
               window.removeEventListener('resize', handleResize);
               containerRef.current?.removeChild(renderer.domElement);
               geometries.forEach(geometry => geometry.dispose());
               materials.forEach(material => material.dispose());
          };
     }, [containerRef]);
};