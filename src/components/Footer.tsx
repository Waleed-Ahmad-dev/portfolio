'use client';

import React, { memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import DecorativeBackground from './footer/DecorativeBackground';
import { containerVariants } from './footer/variants';
import BrandSection from './footer/BrandSection';
import NavigationSection from './footer/NavigationSection';
import PreferencesSection from './footer/PreferencesSection';
import CopyrightSection from './footer/CopyrightSection';

/** ===== Perf constants (hoisted to avoid per-render allocations) ===== */
const FOOTER_CLS =
  'w-full border-t border-border/40 bg-background/80 backdrop-blur-2xl py-14 relative overflow-hidden';
const CONTAINER_CLS = 'container mx-auto px-4 relative';
const GRID_CLS =
  'grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] xl:grid-cols-[2fr_1fr_1fr_1fr] gap-10';

const VIEWPORT_ONCE_MARGIN = { once: true, margin: '-100px' } as const;

/** ===== Memoized leaf components (no props => stable, no re-renders) ===== */
const MemoDecorativeBackground = memo(DecorativeBackground);
const MemoBrandSection = memo(BrandSection);
const MemoNavigationSection = memo(NavigationSection);
const MemoPreferencesSection = memo(PreferencesSection);
const MemoCopyrightSection = memo(CopyrightSection);

/**
  * PERF NOTES:
  * - LazyMotion(domAnimation) trims Framer features and defers loading until needed.
  * - Hoisted objects/strings keep referential equality (faster diffing).
  * - Footer and children are memoized; internal state (e.g., forms) still updates normally.
*/
const Footer = () => {
  return (
    <footer className={FOOTER_CLS}>
      <MemoDecorativeBackground />

      <div className={CONTAINER_CLS}>
        <LazyMotion features={domAnimation}>
          <m.div
            className={GRID_CLS}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE_MARGIN}
          >
            <MemoBrandSection />
            <MemoNavigationSection />
            <MemoPreferencesSection />
          </m.div>
        </LazyMotion>

        <MemoCopyrightSection />
      </div>
    </footer>
  );
};

/** Memoize to avoid re-renders if a parent re-renders for unrelated reasons. */
export default memo(Footer);
