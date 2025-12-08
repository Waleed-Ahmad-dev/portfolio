/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Briefcase, Zap } from "lucide-react";
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

  // Smooth out the progress for the "Power Rail" fill
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
      {/* Background Decor - Circuit Board Vibe (Blue/Yellow Theme) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Circuit Line */}
        <div className="absolute left-[8%] top-0 w-px h-full bg-linear-to-b from-transparent via-primary/10 to-transparent" />
        {/* Right Circuit Line */}
        <div className="absolute right-[8%] top-0 w-px h-full bg-linear-to-b from-transparent via-secondary/5 to-transparent" />

        {/* Glowing Orb - Deep Blue */}
        <div className="absolute top-1/3 left-0 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          title="Career Log"
          subtitle="System upgrades and deployed experience."
        />

        <div className="relative mt-24 space-y-16">
          {/* === THE POWER RAIL (Timeline) === */}

          {/* 1. The Base Track (Dimmed Blue) */}
          <div className="absolute left-4 md:left-9 top-0 bottom-0 w-0.5 bg-white/5 rounded-full" />

          {/* 2. The Active Energy Beam (Blue -> Yellow Gradient) */}
          <motion.div
            className="absolute left-4 md:left-9 top-0 w-0.5 bg-linear-to-b from-primary via-blue-400 to-secondary rounded-full origin-top shadow-[0_0_20px_var(--color-primary)]"
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

// --- Sub-Component for Individual Cards ---
const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
      className="relative pl-16 md:pl-28 group"
    >
      {/* === JUNCTION POINT (Timeline Dot) === */}
      <div className="absolute left-0 md:left-5 top-0 w-8 h-8 md:w-9 md:h-9 flex items-center justify-center z-20">
        {/* Outer Ring - Turns Yellow on Hover */}
        <div className="absolute inset-0 bg-[#0B1121] rounded-full border-2 border-white/10 group-hover:border-secondary/80 transition-colors duration-500" />

        {/* Inner Core - Pulses Yellow on hover */}
        <div className="relative w-2.5 h-2.5 bg-blue-400/50 rounded-full group-hover:bg-secondary group-hover:shadow-[0_0_15px_var(--color-secondary)] transition-all duration-300 group-hover:scale-150">
          <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-0 group-hover:opacity-100" />
        </div>
      </div>

      {/* === HOLOGRAPHIC CARD === */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl relative overflow-hidden transition-all duration-500 hover:scale-[1.01] border-white/5 hover:border-secondary/40 group-hover:shadow-[0_0_30px_-10px_rgba(var(--secondary),0.15)] bg-[#0B1121]/60">
        {/* Decorative Corner Gradient (Blue -> Yellow) */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-white/5 to-transparent -mr-10 -mt-10 rounded-bl-[40px] transition-colors group-hover:from-secondary/10" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-secondary transition-colors flex items-center gap-3">
              {exp.role}
              <Zap
                size={18}
                className="text-secondary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 fill-secondary"
              />
            </h3>
            <div className="flex items-center gap-2 mt-2">
              <Briefcase size={14} className="text-primary" />
              <p className="text-lg text-blue-200 font-mono tracking-tight">
                {exp.company}
              </p>
            </div>
          </div>

          {/* Date Badge */}
          <div className="self-start md:self-center flex items-center gap-2 text-xs font-mono font-bold text-blue-200/70 bg-primary/10 px-4 py-2 rounded-xl border border-primary/20 group-hover:border-secondary/30 group-hover:text-secondary transition-colors shadow-inner shadow-primary/5">
            <Calendar size={12} />
            {exp.period}
          </div>
        </div>

        {/* Description List */}
        <ul className="space-y-4 relative z-10">
          {Array.isArray(exp.desc) ? (
            exp.desc.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-4 text-blue-100/70 text-sm md:text-base leading-relaxed group/item hover:text-white transition-colors"
              >
                {/* Custom Bullet Point */}
                <div className="mt-2 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-sm bg-primary/40 group-hover/item:bg-secondary group-hover/item:shadow-[0_0_8px_var(--color-secondary)] transition-all duration-300 rotate-45" />
                </div>
                <span>{item}</span>
              </li>
            ))
          ) : (
            <p className="text-blue-100/70 text-sm">{exp.desc}</p>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
