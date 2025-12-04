/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar,Activity } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experience as importedExperience } from "@/data/portfolio";

// --- Fallback Data (Safety Net) ---
const defaultExperience = [
  {
    role: "Full Stack Intern",
    company: "Tech Innovators Inc.",
    period: "2024 - Present",
    desc: [
      "Architecting scalable Next.js applications.",
      "Optimizing database queries for 40% faster load times.",
      "Leading the migration to TypeScript.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Creative Studio",
    period: "2023 - 2024",
    desc: [
      "Built interactive UI components with Framer Motion.",
      "Implemented pixel-perfect designs from Figma.",
      "Reduced bundle size by 25%.",
    ],
  },
];

const experience = importedExperience || defaultExperience;

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the progress for the "Circuit Line" fill
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="work"
      className="py-24 px-4 md:px-8 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background Decor - Circuit Board Vibe */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-0 w-px h-full bg-linear-to-b from-transparent via-primary/10 to-transparent dashed-line" />
        <div className="absolute right-[10%] top-0 w-px h-full bg-linear-to-b from-transparent via-secondary/10 to-transparent dashed-line" />
        {/* Glowing Orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          title="Career Log"
          subtitle="System upgrades and deployed experience."
        />

        <div className="relative mt-20 space-y-16">
          {/* === THE CIRCUIT LINE === */}
          {/* 1. The Base Track (Dimmed) */}
          <div className="absolute left-4 md:left-9 top-0 bottom-0 w-0.5 bg-white/5 rounded-full" />

          {/* 2. The Active Energy Beam (Animated) */}
          <motion.div
            className="absolute left-4 md:left-9 top-0 w-0.5 bg-linear-to-b from-primary via-purple-500 to-secondary rounded-full origin-top shadow-[0_0_15px_var(--color-primary)]"
            style={{ scaleY, height: "100%" }}
          />

          {/* === EXPERIENCE NODES === */}
          {experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Sub-Component for Individual Cards to manage own animations ---
const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
      className="relative pl-16 md:pl-24 group"
    >
      {/* === POWER CORE NODE (Timeline Dot) === */}
      <div className="absolute left-0 md:left-5 top-0 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center z-20">
        {/* Outer Ring */}
        <div className="absolute inset-0 bg-background rounded-full border-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500" />

        {/* Inner Core (Pulses on hover) */}
        <div className="relative w-3 h-3 bg-muted-foreground rounded-full group-hover:bg-primary group-hover:shadow-[0_0_10px_var(--color-primary)] transition-all duration-300 group-hover:scale-125">
          <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
        </div>
      </div>

      {/* === HOLOGRAPHIC CARD === */}
      <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:border-primary/30 group-hover:shadow-[0_0_30px_-10px_rgba(var(--primary),0.2)]">
        {/* Decorative Corner Accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-white/5 to-transparent -mr-8 -mt-8 rounded-bl-3xl transition-colors group-hover:from-primary/20" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors flex items-center gap-2">
              {exp.role}
              <Activity
                size={16}
                className="text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </h3>
            <p className="text-lg text-primary font-medium mt-1 font-mono tracking-tight">
              @{exp.company}
            </p>
          </div>

          {/* Date Badge */}
          <div className="self-start md:self-center flex items-center gap-2 text-xs font-mono font-bold text-muted-foreground bg-white/5 px-4 py-2 rounded-full border border-white/5 group-hover:border-primary/20 group-hover:text-foreground transition-colors">
            <Calendar size={12} className="text-secondary" />
            {exp.period}
          </div>
        </div>

        {/* Description List */}
        <ul className="space-y-4 relative z-10">
          {Array.isArray(exp.desc) ? (
            exp.desc.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-3 text-muted-foreground text-sm md:text-base leading-relaxed group/item hover:text-foreground transition-colors"
              >
                <div className="mt-1.5 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-secondary group-hover/item:shadow-[0_0_8px_var(--color-secondary)] transition-all duration-300" />
                </div>
                <span>{item}</span>
              </li>
            ))
          ) : (
            <p className="text-muted-foreground text-sm">{exp.desc}</p>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;