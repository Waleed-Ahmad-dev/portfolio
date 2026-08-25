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
  LucideIcon,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { skillGroups as importedSkills, SkillGroup } from "@/data/portfolio";

const defaultSkills: SkillGroup[] = [
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
    skills: ["Node.js", "NestJS", "Prisma", "Drizzle", "PostgreSQL", "Redis", "GraphQL", "Docker"],
  },
  {
    id: "tools",
    title: "DevOps & Cloud",
    icon: Cpu,
    skills: ["Git", "GitHub Actions", "AWS", "Vercel", "Dokploy", "Linux (Arch)"],
  },
  {
    id: "languages",
    title: "Core Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "Go", "SQL", "Bash"],
  },
];

const skillGroups = importedSkills || defaultSkills;

const IconMap: Record<string, LucideIcon> = {
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
      className="relative py-24 px-6 md:px-12 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="ENGINEERING_STACK"
          subtitle="Core technologies, frameworks, and architectural tools."
        />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {skillGroups.map((group: SkillGroup, index: number) => {
            const Icon: LucideIcon =
              group.icon && typeof group.icon !== "string"
                ? group.icon
                : IconMap[group.title.split(" ")[0]] || Code2;

            return (
              <motion.div
                key={group.id || group.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                className="group relative flex flex-col h-full p-6 bg-card border border-zinc-300 dark:border-zinc-800 rounded-sm hover-tactile"
              >
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 dark:border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-foreground text-background rounded-xs">
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    <h3 className="font-mono text-base font-bold text-foreground uppercase tracking-wider">
                      {group.title}
                    </h3>
                  </div>

                  <span className="badge-mono">0{index + 1}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono text-foreground bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xs hover:border-foreground transition-colors cursor-default select-none"
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
