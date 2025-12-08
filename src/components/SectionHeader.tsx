"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Title Row */}
        <div className="flex items-center gap-5 mb-4">
          {/* Decorative Icon - Power Source */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -90 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="relative p-3 rounded-xl bg-[#0B1121] border border-primary/30 text-secondary overflow-hidden group shadow-[0_0_20px_-5px_rgba(var(--primary),0.3)]"
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <Sparkles size={24} className="relative z-10 fill-secondary/20" />

            {/* Tiny accent dot */}
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-4xl md:text-5xl font-black text-white tracking-tighter"
          >
            {title}
            {/* The 'Electric Dot' Accent */}
            <span className="text-secondary inline-block animate-pulse ml-1">
              .
            </span>
          </motion.h2>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col ml-[70px]"
          >
            <p className="text-blue-200/60 font-medium text-lg md:text-xl max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        )}

        {/* Animated Energy Beam Divider */}
        <div className="relative mt-8 ml-2 overflow-visible">
          {/* The Beam */}
          <motion.div
            className="h-[2px] w-full bg-linear-to-r from-primary via-blue-400 to-transparent origin-left"
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: {
                scaleX: 1,
                opacity: 1,
                transition: { duration: 1, ease: "circOut", delay: 0.2 },
              },
            }}
          />

          {/* The "Leading Spark" - Yellow Head of the line */}
          <motion.div
            className="absolute top-1/2 left-0 -translate-y-1/2 w-24 h-[3px] bg-secondary blur-[2px] rounded-full"
            variants={{
              hidden: { opacity: 0, x: -50, scaleX: 0 },
              visible: {
                opacity: 0.8,
                x: 0,
                scaleX: 1,
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionHeader;
