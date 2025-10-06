"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeScene } from './about/ThreeScene';
import { ProfileSection } from './about/ProfileSection';
import { ContentSection } from './about/ContentSection';
import { AnimatedTechSphere } from './about/AnimatedTechSphere';
import { TechStackSection } from './about/TechStackSection';
import { motion } from 'framer-motion';


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the Three.js scene
      gsap.to(".three-scene", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Staggered animations for content
      gsap.fromTo(".content-item", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".content-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen relative overflow-hidden bg-slate-950"
    >
      {/* Three.js Background */}
      <div className="three-scene">
        <ThreeScene />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="content-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="content-item">
            <ProfileSection />
          </div>
          <div className="content-item">
            <ContentSection />
          </div>
        </div>

        {/* Tech Sphere Showcase
        <div className="content-item mb-32">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Interactive Tech Universe
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Explore my technology stack in an immersive 3D experience. Hover over technologies to discover more.
            </motion.p>
          </div>
          <AnimatedTechSphere />
        </div> */}

        {/* Tech Stack Section */}
        <div className="content-item">
          <TechStackSection />
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default About;