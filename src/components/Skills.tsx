/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutTemplate, Database, Cpu, Code2, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "@/data/portfolio"; // Import the new array

// 1. Map String names to Actual Components
const iconMap: Record<string, React.ElementType> = {
  Layout: LayoutTemplate,
  Database: Database,
  Cpu: Cpu,
  Code: Code2,
  Tools: Wrench,
};

// 2. Define Color Themes (Tailwind classes cannot be constructed dynamically like `text-${color}-500` reliably)
const colorStyles: Record<string, any> = {
  cyan: {
    border: "border-t-cyan-500",
    icon: "text-cyan-500",
    pill: "hover:text-cyan-400 hover:border-cyan-500/50",
  },
  blue: {
    border: "border-t-blue-600",
    icon: "text-blue-600",
    pill: "hover:text-blue-400 hover:border-blue-600/50",
  },
  purple: {
    border: "border-t-purple-500",
    icon: "text-purple-500",
    pill: "hover:text-purple-400 hover:border-purple-500/50",
  },
  yellow: {
    border: "border-t-yellow-500",
    icon: "text-yellow-500",
    pill: "hover:text-yellow-400 hover:border-yellow-500/50",
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Technical Arsenal" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => {
            // Get the correct icon component
            const IconComponent = iconMap[group.icon] || Code2;
            // Get the correct color styles, fallback to cyan if not found
            const styles = colorStyles[group.color] || colorStyles.cyan;

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-slate-950 p-6 rounded-xl border border-slate-800 border-t-4 ${styles.border} flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className={styles.icon} size={24} />
                  <h3 className="text-lg font-bold font-mono text-slate-100">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 bg-slate-900 text-slate-400 text-sm rounded border border-slate-800 transition-colors cursor-default ${styles.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
