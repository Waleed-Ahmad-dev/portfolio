"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "@/data/portfolio";
import { cn } from "@/lib/utils"; // Assuming standard Shadcn utility, or use clsx

// Color Configuration for dynamic styling
const colorVariants: Record<
  string,
  { glow: string; border: string; text: string; bg: string }
> = {
  cyan: {
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]",
    border: "group-hover:border-cyan-500/50",
    text: "text-cyan-400",
    bg: "bg-cyan-950/30",
  },
  blue: {
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.3)]",
    border: "group-hover:border-blue-500/50",
    text: "text-blue-400",
    bg: "bg-blue-950/30",
  },
  purple: {
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]",
    border: "group-hover:border-purple-500/50",
    text: "text-purple-400",
    bg: "bg-purple-950/30",
  },
  yellow: {
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)]",
    border: "group-hover:border-yellow-500/50",
    text: "text-yellow-400",
    bg: "bg-yellow-950/30",
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-slate-950 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="The tools and technologies I use to architect digital solutions."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {skillGroups.map((group, index) => {
            const theme = colorVariants[group.color] || colorVariants.cyan;

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={cn(
                  "group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all duration-300",
                  theme.border,
                  theme.glow
                )}
              >
                {/* --- Card Header --- */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={cn(
                      "p-3 rounded-xl border border-white/5 transition-colors duration-300",
                      theme.bg,
                      theme.text
                    )}
                  >
                    {/* Render the Icon directly from data (It is a ReactNode now) */}
                    <group.icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-100 font-mono tracking-tight">
                      {group.title}
                    </h3>
                    <div className="h-0.5 w-12 bg-slate-800 mt-2 rounded-full overflow-hidden">
                      <div
                        className={cn(
                          "h-full w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500",
                          theme.text.replace("text", "bg")
                        )}
                      />
                    </div>
                  </div>
                </div>

                {/* --- Tech Divider --- */}
                <div className="w-full h-px bg-slate-800/50 mb-6" />

                {/* --- Skills Grid --- */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono font-medium text-slate-400 bg-slate-950 border border-slate-800 rounded-md hover:text-slate-200 hover:border-slate-600 transition-colors cursor-crosshair"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Corner Accent */}
                <div
                  className={cn(
                    "absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-transparent to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-tr-2xl",
                    theme.text.replace("text-", "to-")
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
