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

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative w-full min-h-screen">
      {/* === SEO: HIDDEN PRIMARY HEADING === 
          This is crucial. It tells Google exactly what this page is about 
          without messing up your Hero section's visual design. 
      */}
      <h1 className="sr-only">
        Waleed Ahmad (Shadow Scripter) - Hire Full Stack Architect & Next.js Developer
      </h1>

      {/* === SCROLL PROGRESS BAR === */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 z-100 origin-left bg-linear-to-r from-primary via-blue-500 to-secondary shadow-[0_0_20px_var(--color-secondary)]"
        style={{ scaleX }}
      />

      <Navbar />

      <div className="flex flex-col gap-24 md:gap-32 lg:gap-40 pb-20">
        <Hero />

        <div className="w-full flex flex-col gap-24 md:gap-32 lg:gap-40 relative z-10">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <ContactForm />
        </div>

      </div>
      <Footer />
    </div>
  );
}