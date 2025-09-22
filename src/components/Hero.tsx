'use client';

import React, { memo } from 'react';
import { useTheme } from 'next-themes';
import BackgroundEffects from './hero/BackgroundEffects';
import HeroContent from './hero/HeroContent';
import ProfileCard from './hero/ProfileCard';
import ScrollIndicator from './hero/ScrollIndicator';

/* ===== Hoisted static class strings (keeps referential equality) ===== */
const SECTION_CLS =
     'min-h-screen flex flex-col justify-center pt-16 pb-20 relative overflow-hidden';
const CONTAINER_CLS = 'container mx-auto px-4';
const GRID_CLS = 'grid grid-cols-1 lg:grid-cols-2 gap-16 items-center';

/* ===== Memoized leaves: prevent subtree re-renders on theme toggles ===== */
const MemoBackgroundEffects = memo(BackgroundEffects);
const MemoHeroContent = memo(HeroContent);
const MemoProfileCard = memo(ProfileCard);
const MemoScrollIndicator = memo(ScrollIndicator);

/**
     * PERF NOTES:
     * - Use `resolvedTheme ?? theme` to minimize hydration flicker and boolean flips
     *   (next-themes may report `theme` as "system" initially).
     * - Only `BackgroundEffects` receives the theme boolean; other children are memoized
     *   and won't re-render when the theme changes.
*/
const Hero = () => {
     const { theme, resolvedTheme } = useTheme();
     const isDark = (resolvedTheme ?? theme) === 'dark';

     return (
          <section id="home" className={SECTION_CLS}>
               <MemoBackgroundEffects isDark={isDark} />

               <div className={CONTAINER_CLS}>
                    <div className={GRID_CLS}>
                         <MemoHeroContent />
                         <MemoProfileCard />
                    </div>

                    <MemoScrollIndicator />
               </div>
          </section>
     );
};

/* Memoize to avoid re-renders from parent tree churn (no props) */
export default memo(Hero);
