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
  const { scrollYProgress } = useScroll();

  // Smoother spring physics for a "silky" feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative w-full min-h-screen">
      {/* === SEO: HIDDEN PRIMARY HEADING === 
          Crucial for business logic/SEO. Preserved. 
      */}
      <h1 className="sr-only">
        Waleed Ahmad (Shadow Scripter) - Hire Full Stack Architect & Next.js
        Developer
      </h1>

      {/* === SCROLL PROGRESS BAR === 
          Refactored: Strict Monochrome.
          Removed gradients and glows. Now a razor-thin, matte indicator.
      */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-100 origin-left bg-black dark:bg-white"
        style={{ scaleX }}
      />

      <Navbar />

      {/* Main Content Layout 
          Increased whitespace (gap) to maximize breathing room.
      */}
      <div className="flex flex-col w-full pb-20">
        <Hero />

        {/* Content Flow Container 
            Centered with strict max-width for readability.
        */}
        <div className="flex flex-col gap-32 md:gap-48 relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 mt-24 md:mt-32">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <ContactForm />
        </div>

        <div className="mt-32 md:mt-48">
          <Footer />
        </div>
      </div>
    </div>
  );
}