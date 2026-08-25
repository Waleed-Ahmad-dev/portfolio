"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { experience as importedExperience, ExperienceItem } from "@/data/portfolio";

const defaultExperience: ExperienceItem[] = [
  {
    role: "Junior Backend Developer",
    company: "CSG",
    period: "Sept 2026 – Present",
    desc: [
      "Architecting NestJS microservices across Core, Operations, Compliance, & Platform domains with Prisma, PostgreSQL, and RabbitMQ.",
      "Owning Python/FastAPI AI agent backends orchestrated with LangGraph and LLM routers.",
      "Managing self-hosted Docker deployments via Dokploy across Dev, QA, UAT, and Production pipelines.",
    ],
  },
  {
    role: "Full Stack Intern (Lead)",
    company: "Premier Choice International",
    period: "Oct 2025 – June 2026",
    desc: [
      "Spearheading the architecture of a proprietary Real Estate CMS using Node.js, React, and PostgreSQL.",
      "Developed 'Sign App', an internal microservice automating email signatures for workforce.",
    ],
  },
];

const experience = importedExperience || defaultExperience;

const Experience = () => {
  return (
    <section
      id="work"
      className="py-24 px-6 md:px-12 bg-background border-b border-border"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="CAREER_TIMELINE"
          subtitle="Enterprise deployments & software engineering history."
        />

        <div className="relative mt-16 space-y-8">
          {/* Vertical Architectural Line */}
          <div className="absolute left-[15px] md:left-[19px] top-2 bottom-2 w-px bg-zinc-300 dark:bg-zinc-800" />

          {experience.map((exp: ExperienceItem, index: number) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-0 top-1.5 w-[31px] md:w-[39px] flex justify-center z-10">
                <div className="w-3 h-3 rounded-xs border-2 border-zinc-400 dark:border-zinc-600 bg-background group-hover:bg-foreground group-hover:border-foreground transition-colors duration-200" />
              </div>

              {/* Experience Card */}
              <div className="p-6 bg-card border border-zinc-300 dark:border-zinc-800 rounded-sm hover-tactile">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-200 dark:border-zinc-800/80 mb-4">
                  <div>
                    <h3 className="font-mono text-lg md:text-xl font-bold text-foreground tracking-tight flex items-center gap-2">
                      <Briefcase size={16} className="text-zinc-500" />
                      {exp.role}
                    </h3>
                    <div className="font-mono text-xs text-zinc-500 font-semibold mt-1 uppercase tracking-wider">
                      {exp.company}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 badge-mono self-start sm:self-auto">
                    <Calendar size={11} />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {Array.isArray(exp.desc) ? (
                    exp.desc.map((item: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed font-sans"
                      >
                        <ChevronRight
                          size={14}
                          className="mt-0.5 shrink-0 text-zinc-400 group-hover:text-foreground transition-colors"
                        />
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {exp.desc}
                    </p>
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;