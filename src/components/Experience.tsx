"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/portfolio";

const Experience = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <SectionHeader
        title="Experience"
        subtitle="My professional journey so far."
      />

      <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-slate-950" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
              <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
              <span className="text-cyan-400 font-mono text-sm">
                @ {exp.company}
              </span>
            </div>

            <span className="inline-block px-2 py-1 bg-slate-900 border border-slate-800 text-xs text-slate-500 rounded mb-4 font-mono">
              {exp.period}
            </span>

            <p className="text-slate-400 max-w-2xl">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
