"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-inter selection:bg-cyan-900 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
