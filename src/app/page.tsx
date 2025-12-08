"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ContactForm from "@/components/ContactForm";

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
    <div className="relative w-full">
      {/* === HIGH-ENERGY SCROLL BAR === 
        A visual indicator of progress that embodies the 'Electric' theme.
        It transitions from Primary (Blue) to Secondary (Red).
      */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 z-50 origin-left bg-linear-to-r from-primary via-purple-500 to-secondary shadow-[0_0_15px_rgba(var(--primary),0.8)]"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Main Page Flow 
        Added consistent gap rhythm between sections for better UX 
      */}
      <div className="flex flex-col gap-24 md:gap-32 lg:gap-40 pb-20">
        <Hero />

        {/* Wrapper to constrain width on large screens if needed, 
            though individual components usually handle their own constraints. */}
        <div className="w-full flex flex-col gap-24 md:gap-32 lg:gap-40">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <ContactForm /> {/* <--- Added Component here */}
        </div>

        <Footer />
      </div>
    </div>
  );
}
