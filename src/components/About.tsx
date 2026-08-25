/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Code2, Layers, Cpu, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import {
  aboutText as importedText,
  aboutStats as importedStats,
} from "@/data/portfolio";
import { calculateAge } from "@/lib/utils";

const defaultText = {
  p1: {
    main: "I am",
    get age() {
      return `${calculateAge("2009-08-21")} years old`;
    },
    highlight: "Backend Architecture & Distributed Systems",
    end: "engineer.",
  },
  p3: "Engineering real-world backend microservices, high-concurrency DB queries, and AI router backends for production environments.",
};

const defaultStats = {
  stackStatus: "OPERATIONAL // ONLINE",
  experienceYears: "2+",
  projectsCompleted: "50+",
  stackSub: "NestJS / Prisma / FastAPI / PostgreSQL / Docker",
};

const aboutText = importedText || defaultText;
const aboutStats = importedStats || defaultStats;

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 bg-background border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="SYSTEM_ANALYSIS"
          subtitle="Engineering background & architectural principles."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-stretch mt-16">
          {/* Left Column: Industrial Terminal */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full rounded-sm border border-zinc-300 dark:border-zinc-800 bg-card p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
                    <Terminal size={14} className="text-emerald-500" />
                    <span>BIO_LOG // V16.0</span>
                  </div>
                  <span className="badge-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                    ID // SHADOW_SCRIPTER
                  </span>
                </div>

                <div className="space-y-6 font-sans text-sm text-muted-foreground leading-relaxed">
                  <p>
                    I got serious about full-stack engineering at{" "}
                    <strong className="text-foreground font-mono">age 14</strong> through{" "}
                    <span className="text-foreground font-semibold">The Odin Project</span>. Now at{" "}
                    <strong className="text-foreground font-mono">{calculateAge("2009-08-21")} years old</strong>, I work as a{" "}
                    <span className="text-foreground font-semibold">Junior Backend Developer</span> at CSG, lead engineering microservices across core domains while handling O-Levels in school hours.
                  </p>

                  <p>
                    My primary focus is{" "}
                    <span className="inline-flex items-center gap-1 font-mono font-bold text-foreground bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-xs">
                      <Database size={13} className="text-emerald-500" /> BACKEND ARCHITECTURE
                    </span>{" "}
                    — designing NestJS microservices, Prisma schemas, RabbitMQ event buses, and orchestrating Python/FastAPI AI agent pipelines with LangGraph.
                  </p>

                  <div className="border-l-2 border-foreground pl-4 py-1 text-foreground font-mono text-xs italic bg-zinc-50 dark:bg-zinc-900/50">
                    &quot;{aboutText.p3}&quot;
                  </div>
                </div>
              </div>

              {/* Status Verification */}
              <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 size={14} /> PRODUCTION VERIFIED
                </span>
                <span>PAKISTAN // REMOTE &amp; HYBRID</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Architectural Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-card border border-zinc-300 dark:border-zinc-800 p-6 rounded-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <Code2 size={20} className="text-zinc-500" />
                <span className="badge-mono">PROD_EXP</span>
              </div>
              <div className="mt-6">
                <div className="text-4xl font-mono font-bold text-foreground tracking-tight">
                  {aboutStats.experienceYears}
                </div>
                <div className="text-xs font-mono text-muted-foreground uppercase mt-1">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="bg-card border border-zinc-300 dark:border-zinc-800 p-6 rounded-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <Layers size={20} className="text-zinc-500" />
                <span className="badge-mono">SHIPPED</span>
              </div>
              <div className="mt-6">
                <div className="text-4xl font-mono font-bold text-foreground tracking-tight">
                  {aboutStats.projectsCompleted}
                </div>
                <div className="text-xs font-mono text-muted-foreground uppercase mt-1">
                  Total Repos &amp; Apps
                </div>
              </div>
            </div>

            <div className="col-span-2 bg-card border border-zinc-300 dark:border-zinc-800 p-6 rounded-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-foreground text-background rounded-xs">
                  <Cpu size={24} />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm text-foreground uppercase tracking-wider">
                    FULL-STACK &amp; BACKEND ARCHITECT
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground mt-2 leading-relaxed">
                    {aboutStats.stackSub}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;