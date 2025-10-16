// Footer.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';

// Dynamic imports for performance
const ThreeScene = dynamic(() => import('./footer/ThreeScene'), { ssr: false });
const MagneticButton = dynamic(() => import('./footer/MagneticButton'), { ssr: false });

// Components
const BrandSection = dynamic(() => import('./footer/BrandSection'));
const NavigationSection = dynamic(() => import('./footer/NavigationSection'));
const ContactSection = dynamic(() => import('./footer/ContactSection'));
const DecorativeBackground = dynamic(() => import('./footer/DecorativeBackground'));

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate footer entrance
      gsap.fromTo(containerRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom-=100",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stagger animation for child elements
      gsap.fromTo(".footer-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom-=150",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative w-full border-t border-border/20 bg-gradient-to-b from-background/80 to-background/95 backdrop-blur-3xl py-20 overflow-hidden"
    >
      {/* 3D Background Element */}
      <div className="absolute inset-0 pointer-events-none">
        <ThreeScene />
      </div>

      {/* Decorative Background */}
      <DecorativeBackground />

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
        <LazyMotion features={domAnimation}>
          <m.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Brand Section - Takes more space */}
            <div className="lg:col-span-5 footer-item">
              <BrandSection />
            </div>

            {/* Navigation */}
            <div className="lg:col-span-3 footer-item">
              <NavigationSection />
            </div>

            {/* Contact CTA */}
            <div className="lg:col-span-4 footer-item">
              <ContactSection />
            </div>
          </m.div>
        </LazyMotion>

        {/* Copyright */}
        <div className="border-t border-border/10 mt-16 pt-8 footer-item">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground/80">
              © {new Date().getFullYear()} Waleed Ahmad. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="text-xs text-muted-foreground/60 flex items-center gap-2">
                <div className="w-1 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                Crafted with passion and Next.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;