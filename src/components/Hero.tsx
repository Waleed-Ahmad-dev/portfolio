"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  Terminal,
  Activity,
  Server,
  Layers,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import {
  personalInfo as importedInfo,
  heroData as importedHero,
} from "@/data/portfolio";
import { calculateAge } from "@/lib/utils";

const defaultInfo = {
  alias: "Shadow Scripter",
  get age() {
    return calculateAge("2009-08-21").toString();
  },
  role: "Full Stack Architect",
  socials: { github: "https://github.com/Waleed-Ahmad-dev" },
};
const defaultHero = {
  status: "OPERATIONAL // ACTIVE",
  heading: {
    start: "ARCHITECTING",
    highlight: "HIGH-SCALE",
    end: "BACKEND & DIGITAL SYSTEMS.",
  },
  subHeading: {
    text: "Lead Junior Backend Engineer owning production microservices, AI backend agents with LangGraph, and self-hosted infrastructure.",
  },
  buttons: { primary: "EXPLORE_SYSTEMS", secondary: "GITHUB_REPOS" },
};

const personalInfo = importedInfo || defaultInfo;
const heroData = importedHero || defaultHero;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState<"services" | "stack" | "metrics">(
    "services"
  );

  return (
    <section className="relative min-h-[92dvh] flex flex-col justify-center px-6 md:px-12 bg-background pt-28 pb-16 overflow-hidden border-b border-border">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.08] select-none">
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-foreground" />
        <div className="absolute top-24 left-0 right-0 h-px bg-foreground" />
        <div className="absolute bottom-12 left-0 right-0 h-px bg-foreground" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column - Kinetic Headlines & Metadata */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Metadata System Pill Header */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-2 items-center">
            <span className="badge-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {heroData.status}
            </span>
            <span className="badge-mono">LOC // PAKISTAN</span>
            <span className="badge-mono">AGE // {personalInfo.age} Y/O</span>
            <span className="badge-mono">ROLE // LEAD BACKEND ARCHITECT</span>
          </motion.div>

          {/* Headline - Non-slop kinetic typography */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-mono font-extrabold tracking-tighter text-foreground leading-[0.98]">
              ARCHITECTING <br />
              <span className="text-zinc-400 dark:text-zinc-500">
                DISTRIBUTED
              </span>{" "}
              SYSTEMS <br />
              <span className="text-foreground">&amp; AI AGENTS.</span>
            </h1>
          </motion.div>

          {/* Subheading Narrative */}
          <motion.div variants={itemVariants} className="mb-10 max-w-xl">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans border-l-2 border-foreground pl-4">
              I’m <strong className="text-foreground">{personalInfo.name}</strong> ({personalInfo.alias}). Junior Backend Developer at CSG architecting NestJS microservices with Prisma, RabbitMQ, PostgreSQL, &amp; LangGraph AI agents. Shipping real production backends at age {personalInfo.age}.
            </p>
          </motion.div>

          {/* Tactile Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 bg-foreground text-background px-6 font-mono text-xs font-bold uppercase tracking-wider rounded-sm hover-tactile"
            >
              <span>{heroData.buttons.primary}</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 border border-border bg-card px-6 font-mono text-xs font-semibold uppercase tracking-wider text-foreground rounded-sm hover-tactile"
            >
              <Github size={16} />
              <span>{heroData.buttons.secondary}</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Interactive System Architecture Console */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5"
        >
          <div className="rounded-sm border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 p-4 shadow-xl font-mono text-xs">
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-300 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-bold">
                <Terminal size={14} className="text-emerald-500" />
                <span>ARCHITECT_NODE_V16</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                <ShieldCheck size={12} className="text-emerald-500" />
                <span>VERIFIED // PROD</span>
              </div>
            </div>

            {/* Tab Selection */}
            <div className="grid grid-cols-3 gap-1 mb-4 p-1 bg-zinc-200 dark:bg-zinc-900 rounded-sm">
              <button
                onClick={() => setActiveTab("services")}
                className={`py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all ${
                  activeTab === "services"
                    ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-xs"
                    : "text-zinc-500 hover:text-black dark:hover:text-white"
                }`}
              >
                01 // SERVICES
              </button>
              <button
                onClick={() => setActiveTab("stack")}
                className={`py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all ${
                  activeTab === "stack"
                    ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-xs"
                    : "text-zinc-500 hover:text-black dark:hover:text-white"
                }`}
              >
                02 // STACK
              </button>
              <button
                onClick={() => setActiveTab("metrics")}
                className={`py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all ${
                  activeTab === "metrics"
                    ? "bg-white dark:bg-zinc-800 text-black dark:text-white shadow-xs"
                    : "text-zinc-500 hover:text-black dark:hover:text-white"
                }`}
              >
                03 // METRICS
              </button>
            </div>

            {/* Tab Content Display */}
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm p-4 min-h-[220px] flex flex-col justify-between">
              {activeTab === "services" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                    <span className="flex items-center gap-2">
                      <Server size={14} className="text-emerald-500" />
                      Core Microservices
                    </span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded">
                      NestJS + RabbitMQ
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                    <span className="flex items-center gap-2">
                      <Cpu size={14} className="text-emerald-500" />
                      AI Agent Backends
                    </span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded">
                      FastAPI + LangGraph
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-700 dark:text-zinc-300">
                    <span className="flex items-center gap-2">
                      <Layers size={14} className="text-emerald-500" />
                      DevOps Deployments
                    </span>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded">
                      Dokploy + Docker
                    </span>
                  </div>
                </div>
              )}

              {activeTab === "stack" && (
                <div className="space-y-2">
                  <div className="text-[11px] text-zinc-500 uppercase tracking-widest mb-2">
                    // CORE ENGINES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Next.js 16",
                      "NestJS",
                      "FastAPI",
                      "TypeScript",
                      "PostgreSQL",
                      "Prisma",
                      "Drizzle",
                      "RabbitMQ",
                      "Docker",
                      "LangGraph",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-[10px] bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xs text-zinc-800 dark:text-zinc-200 font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "metrics" && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-sm">
                    <div className="text-[10px] text-zinc-400 uppercase">
                      PROD DEPLOYMENTS
                    </div>
                    <div className="text-xl font-bold text-black dark:text-white mt-1">
                      15+
                    </div>
                  </div>
                  <div className="p-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-sm">
                    <div className="text-[10px] text-zinc-400 uppercase">
                      SYSTEM UPTIME
                    </div>
                    <div className="text-xl font-bold text-emerald-500 mt-1">
                      99.9%
                    </div>
                  </div>
                  <div className="p-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-sm">
                    <div className="text-[10px] text-zinc-400 uppercase">
                      TOTAL REPOS
                    </div>
                    <div className="text-xl font-bold text-black dark:text-white mt-1">
                      50+
                    </div>
                  </div>
                  <div className="p-2.5 bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 rounded-sm">
                    <div className="text-[10px] text-zinc-400 uppercase">
                      PRIMARY OS
                    </div>
                    <div className="text-xl font-bold text-black dark:text-white mt-1">
                      Arch Linux
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Activity size={12} className="text-emerald-500" />
                  LATENCY: &lt; 14ms
                </span>
                <span>STATUS: STABLE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;