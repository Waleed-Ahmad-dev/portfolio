"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className }: SectionHeaderProps) => {
  return (
    <div className={`mb-24 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <div className="flex flex-col gap-6">
          {/* Minimalist Accent Line */}
          <motion.div
            variants={{
              hidden: { width: 0, opacity: 0 },
              visible: {
                width: "60px",
                opacity: 1,
                transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] },
              },
            }}
            className="h-1 bg-black dark:bg-white"
          />

          {/* Main Title */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="text-5xl md:text-7xl font-bold text-black dark:text-white tracking-tighter"
          >
            {title}
            <span className="text-zinc-300 dark:text-zinc-700 ml-1">.</span>
          </motion.h2>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light border-l border-zinc-200 dark:border-zinc-800 pl-6"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionHeader;