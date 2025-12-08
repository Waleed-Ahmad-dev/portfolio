"use client";

import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { motion, useScroll, useSpring } from "framer-motion";


export default function Portfolio() {
  // Hook to track vertical scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // Smooth out the scroll animation using a spring physics simulation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative w-full min-h-screen">
      {/* === HIGH-ENERGY SCROLL BAR === 
          A visual indicator of progress that embodies the 'Royal Velocity' theme.
          It transitions from Royal Blue (Start) to Electric Yellow (Finish).
      */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 z-100 origin-left bg-linear-to-r from-primary via-blue-500 to-secondary shadow-[0_0_20px_var(--color-secondary)]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Main Page Flow 
          Maintained large vertical rhythm to allow the deep blue background 
          to act as negative space, drawing focus to the content.
      */}
      <div className="flex flex-col gap-24 md:gap-32 lg:gap-40 pb-20">
        <Hero />

        {/* Content Wrapper */}
        <div className="w-full flex flex-col gap-24 md:gap-32 lg:gap-40 relative z-10">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <ContactForm />
        </div>

        <Footer />
      </div>
    </div>
  );
}