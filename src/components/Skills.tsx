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

// --- Fallback Data ---
const defaultSkills = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    icon: Layout,
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
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "Docker", "Supabase"],
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git", "GitHub Actions", "AWS", "Vercel", "Figma", "Linux"],
  },
  {
    id: "mobile",
    title: "Mobile & Native",
    icon: Smartphone,
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

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-12 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Technical Arsenal"
          subtitle="The high-performance tools I use to architect digital reality."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-24">
          {skillGroups.map((group: any, index: number) => {
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
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                className="group relative flex flex-col h-full p-8 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-black dark:hover:border-white transition-colors duration-300"
              >
                {/* --- Card Header --- */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-md text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-black dark:text-white tracking-tight">
                    {group.title}
                  </h3>
                </div>

                {/* --- Skills Grid --- */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 bg-transparent border border-zinc-200 dark:border-zinc-800 rounded hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-black dark:hover:text-white transition-colors duration-200 cursor-default select-none"
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
