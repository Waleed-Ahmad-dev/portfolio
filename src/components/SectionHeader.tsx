"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-xs bg-foreground" />
          <h2 className="font-mono text-2xl md:text-4xl font-extrabold text-foreground tracking-tighter uppercase">
            {title}
          </h2>
        </div>

        {subtitle && (
          <p className="text-muted-foreground text-xs md:text-sm font-mono border-l-2 border-zinc-300 dark:border-zinc-800 pl-4 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeader;