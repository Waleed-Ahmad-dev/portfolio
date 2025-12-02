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
    <div className={`mb-16 relative ${className}`}>
      {/* Container for Animation Staggering */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Title Row */}
        <div className="flex items-center gap-3 mb-2">
          {/* Decorative Icon/Slash */}
          <motion.span
            variants={{
              hidden: { opacity: 0, x: -10, scale: 0.5 },
              visible: { opacity: 1, x: 0, scale: 1 },
            }}
            className="text-cyan-400 font-mono text-2xl md:text-3xl font-bold opacity-80"
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          >
            //
          </motion.span>

          {/* Main Title */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight font-mono"
          >
            {title}
          </motion.h2>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-slate-400 font-medium text-base md:text-lg max-w-2xl ml-8 md:ml-10 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Animated Gradient Divider */}
        <motion.div
          className="h-px w-full bg-linear-to-r from-cyan-500/50 via-blue-500/20 to-transparent mt-6"
          variants={{
            hidden: { width: 0, opacity: 0 },
            visible: {
              width: "100%",
              opacity: 1,
              transition: { duration: 0.8, ease: "circOut", delay: 0.2 },
            },
          }}
        >
          {/* Optional: Little glowing dot at the start of the line */}
          <div className="w-16 h-px bg-cyan-400/50 blur-[2px] absolute left-0 top-0" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionHeader;