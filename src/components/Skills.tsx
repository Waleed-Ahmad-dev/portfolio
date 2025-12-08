/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Wrench,
  Cpu,
  Globe,
  Server,
  Smartphone,
  Zap,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skillGroups as importedSkills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// --- Fallback Data ---
// Updated colors to match the strictly enforced "blue" and "yellow" theme keys
const defaultSkills = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    icon: Layout,
    color: "blue", // Primary
    skills: [
      "Next.js 16",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Three.js",
    ],
  },
  {
    id: "backend",
    title: "Backend Systems",
    icon: Server,
    color: "blue", // Primary
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "Docker", "Supabase"],
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    icon: Wrench,
    color: "yellow", // Secondary (Accent)
    skills: ["Git", "GitHub Actions", "AWS", "Vercel", "Figma", "Linux"],
  },
  {
    id: "mobile",
    title: "Mobile & Native",
    icon: Smartphone,
    color: "yellow", // Secondary (Accent)
    skills: ["React Native", "Expo", "PWA", "Swift (Basic)"],
  },
];

const skillGroups = importedSkills || defaultSkills;

// --- Icon Mapping ---
const IconMap: any = {
  Layout,
  Code2,
  Database,
  Server,
  Wrench,
  Cpu,
  Globe,
  Smartphone,
};

// --- Strict Color Configuration ---
// Remaps ANY incoming color string to the strict Blue/Yellow palette.
// Blue/Cyan/Default -> Primary (Royal Blue)
// Red/Purple/Yellow -> Secondary (Electric Yellow)
const colorVariants: Record<
  string,
  {
    border: string;
    iconBg: string;
    iconColor: string;
    glow: string;
    pill: string;
    gradient: string;
  }
> = {
  // === PRIMARY THEME (BLUE) ===
  blue: {
    border: "group-hover:border-primary/50",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    glow: "group-hover:shadow-[0_0_40px_-10px_var(--color-primary)]",
    pill: "hover:text-white hover:border-primary/50 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(var(--primary),0.4)]",
    gradient: "from-primary",
  },
  cyan: {
    border: "group-hover:border-primary/50",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    glow: "group-hover:shadow-[0_0_40px_-10px_var(--color-primary)]",
    pill: "hover:text-white hover:border-primary/50 hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(var(--primary),0.4)]",
    gradient: "from-primary",
  },

  // === SECONDARY THEME (YELLOW) ===
  yellow: {
    border: "group-hover:border-secondary/50",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    glow: "group-hover:shadow-[0_0_40px_-10px_var(--color-secondary)]",
    pill: "hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(var(--secondary),0.4)]",
    gradient: "from-secondary",
  },
  purple: {
    border: "group-hover:border-secondary/50",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    glow: "group-hover:shadow-[0_0_40px_-10px_var(--color-secondary)]",
    pill: "hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(var(--secondary),0.4)]",
    gradient: "from-secondary",
  },
  red: {
    border: "group-hover:border-secondary/50",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    glow: "group-hover:shadow-[0_0_40px_-10px_var(--color-secondary)]",
    pill: "hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_15px_rgba(var(--secondary),0.4)]",
    gradient: "from-secondary",
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-4 md:px-8 overflow-hidden"
    >
      {/* --- Background Architecture --- */}
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      {/* Floating Orbs (Blue & Yellow) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="The high-performance tools I use to architect digital reality."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-20">
          {skillGroups.map((group: any, index: number) => {
            // Determine styling based on color prop, mapped strictly to Blue/Yellow themes
            const colorKey = group.color || "blue";
            const theme = colorVariants[colorKey] || colorVariants.blue;

            // Resolve Icon
            const Icon =
              group.icon && typeof group.icon !== "string"
                ? group.icon
                : IconMap[group.title.split(" ")[0]] || Code2;

            return (
              <motion.div
                key={group.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={cn(
                  "group relative p-8 rounded-3xl border border-white/5 bg-[#0B1121]/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2",
                  theme.border,
                  theme.glow
                )}
              >
                {/* --- Hover Gradient Overlay --- */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br to-transparent",
                    theme.gradient,
                    "from-white" // Mixes with the specific color gradient
                  )}
                />

                {/* --- Card Header --- */}
                <div className="relative z-10 flex items-center gap-6 mb-8">
                  <div
                    className={cn(
                      "p-4 rounded-2xl border border-white/5 transition-all duration-500 group-hover:scale-110 shadow-inner",
                      theme.iconBg,
                      theme.iconColor
                    )}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white font-mono tracking-tight group-hover:text-blue-100 transition-colors flex items-center gap-2">
                      {group.title}
                      {colorKey === "yellow" ||
                      colorKey === "red" ||
                      colorKey === "purple" ? (
                        <Zap
                          size={16}
                          className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 fill-secondary"
                        />
                      ) : null}
                    </h3>
                    {/* Animated Underline */}
                    <div className="h-0.5 w-12 bg-white/10 mt-3 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500",
                          theme.iconBg.replace("bg-", "bg-") // Uses the background color class as the fill
                        )}
                        style={{ backgroundColor: "currentColor" }}
                      />
                    </div>
                  </div>
                </div>

                {/* --- Skills Grid (The "Energy Cells") --- */}
                <div className="relative z-10 flex flex-wrap gap-3">
                  {group.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-4 py-2 text-xs md:text-sm font-mono font-medium text-blue-200/60 bg-white/5 border border-white/5 rounded-lg transition-all duration-300 cursor-default select-none",
                        theme.pill
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* --- Decorative Corner Accent --- */}
                <div
                  className={cn(
                    "absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-tr-3xl pointer-events-none",
                    theme.gradient
                  )}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;