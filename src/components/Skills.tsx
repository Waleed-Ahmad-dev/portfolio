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
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skillGroups as importedSkills } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// --- Fallback Data ---
// Ensures the grid looks good even if data is missing
const defaultSkills = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    icon: Layout,
    color: "cyan",
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
    color: "blue",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "Docker", "Supabase"],
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    icon: Wrench,
    color: "purple",
    skills: ["Git", "GitHub Actions", "AWS", "Vercel", "Figma", "Linux"],
  },
  {
    id: "mobile",
    title: "Mobile & Native",
    icon: Smartphone,
    color: "red", // Maps to Secondary
    skills: ["React Native", "Expo", "PWA", "Swift (Basic)"],
  },
];

const skillGroups = importedSkills || defaultSkills;

// --- Icon Mapping ---
// Handles cases where data might pass string IDs instead of components
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

// --- Color Configuration ---
// Aligning strictly with the "Electric Playfulness" theme
// Cyan = Primary, Red = Secondary, Purple = Bridge
const colorVariants: Record<
  string,
  {
    border: string;
    iconBg: string;
    iconColor: string;
    glow: string;
    pill: string;
  }
> = {
  cyan: {
    border: "group-hover:border-primary/50",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)]",
    pill: "hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_15px_var(--color-primary)]",
  },
  blue: {
    border: "group-hover:border-blue-500/50",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]",
    pill: "hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
  },
  purple: {
    border: "group-hover:border-purple-500/50",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]",
    pill: "hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]",
  },
  red: {
    border: "group-hover:border-secondary/50",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(var(--color-secondary),0.3)]",
    pill: "hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_15px_var(--color-secondary)]",
  },
  // Fallback for yellow/other
  yellow: {
    border: "group-hover:border-yellow-500/50",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-400",
    glow: "group-hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)]",
    pill: "hover:text-yellow-400 hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]",
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* --- Background Architecture --- */}
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />

      {/* Floating Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="The high-performance tools I use to architect digital reality."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-16">
          {skillGroups.map((group: any, index: number) => {
            // Determine styling based on color prop, default to cyan/primary
            const colorKey = group.color || "cyan";
            const theme = colorVariants[colorKey] || colorVariants.cyan;

            // Resolve Icon
            const Icon =
              group.icon && typeof group.icon !== "string"
                ? group.icon
                : IconMap[group.title.split(" ")[0]] || Code2;

            return (
              <motion.div
                key={group.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={cn(
                  "group relative p-8 rounded-3xl border border-white/5 bg-background/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1",
                  theme.border,
                  theme.glow
                )}
              >
                {/* --- Hover Gradient Overlay --- */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-linear-to-br from-white to-transparent",
                    colorKey === "red" ? "from-secondary" : "from-primary"
                  )}
                />

                {/* --- Card Header --- */}
                <div className="relative z-10 flex items-center gap-5 mb-8">
                  <div
                    className={cn(
                      "p-4 rounded-2xl border border-white/5 transition-colors duration-500 group-hover:scale-110",
                      theme.iconBg,
                      theme.iconColor
                    )}
                  >
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground font-mono tracking-tight group-hover:text-white transition-colors">
                      {group.title}
                    </h3>
                    {/* Animated Underline */}
                    <div className="h-0.5 w-12 bg-white/10 mt-2 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500",
                          theme.iconBg.replace("bg-", "bg-") // Hack to reuse color
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
                        "px-4 py-2 text-xs md:text-sm font-mono font-medium text-muted-foreground bg-white/5 border border-white/5 rounded-lg transition-all duration-300 cursor-default select-none",
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
                    "absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-tr-3xl pointer-events-none",
                    colorKey === "red" ? "to-secondary" : "to-primary"
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