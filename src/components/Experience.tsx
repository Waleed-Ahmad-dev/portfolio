/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar } from "lucide-react";
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

  // Smooth out the progress for the vertical line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="work"
      className="py-32 px-6 md:px-12 relative bg-white dark:bg-black overflow-hidden"
      ref={containerRef}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          title="Career Log"
          subtitle="System upgrades and deployed experience."
        />

        <div className="relative mt-24 space-y-12">
          {/* === THE MINIMALIST TIMELINE === */}

          {/* 1. The Base Track (Subtle Zinc) */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

          {/* 2. The Active Progress Line (Solid Black/White) */}
          <motion.div
            className="absolute left-[19px] top-0 w-px bg-black dark:bg-white origin-top"
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="relative pl-16 md:pl-24 group"
    >
      {/* === TIMELINE NODE === */}
      <div className="absolute left-0 top-1.5 w-10 h-10 flex items-center justify-center z-20 bg-white dark:bg-black">
        {/* Minimalist Dot */}
        <div className="w-2.5 h-2.5 rounded-full border border-zinc-400 dark:border-zinc-600 bg-white dark:bg-black group-hover:scale-125 group-hover:bg-black dark:group-hover:bg-white group-hover:border-black dark:group-hover:border-white transition-all duration-300" />
      </div>

      {/* === CONTENT CONTAINER === */}
      {/* Subtle hover state: vertical strip appears on the left */}
      <div className="p-6 rounded-lg transition-all duration-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight">
              {exp.role}
            </h3>
            <div className="text-base text-zinc-500 dark:text-zinc-400 font-medium mt-1">
              {exp.company}
            </div>
          </div>

          {/* Date Badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider border border-zinc-200 dark:border-zinc-800 rounded px-2 py-1">
            <Calendar size={12} strokeWidth={1.5} />
            {exp.period}
          </div>
        </div>

        {/* Description List */}
        <ul className="space-y-3">
          {Array.isArray(exp.desc) ? (
            exp.desc.map((item: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed"
              >
                {/* Square Bullet */}
                <div className="mt-2 w-1 h-1 bg-zinc-300 dark:bg-zinc-700 shrink-0 rotate-45 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300" />
                <span>{item}</span>
              </li>
            ))
          ) : (
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {exp.desc}
            </p>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;