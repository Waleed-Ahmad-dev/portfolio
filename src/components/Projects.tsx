'use client';

import React, { memo } from 'react';
import { projects } from './projects/data';
import { BackgroundDecorations } from './projects/Decorations';
import { ProjectCard } from './projects/ProjectCard';
import { SectionHeader } from './projects/SectionHeader';

/* ========= Hoisted class strings (referentially stable) ========= */
const SECTION_CLS = 'relative py-24 overflow-hidden';
const WRAP_CLS = 'container mx-auto px-4 relative z-10';
const GRID_CLS = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

/* ========= Memoized leaves: avoid re-renders from parent churn ========= */
const MemoBackgroundDecorations = memo(BackgroundDecorations);
const MemoSectionHeader = memo(SectionHeader);
const MemoProjectCard = memo(ProjectCard);

/* ========= Hoisted JSX fragments: no per-render element creation ========= */
const TITLE_NODE = (
     <>
          Featured{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
               Projects
          </span>
     </>
);

/* ========= Precompute cards once (projects is a static import) =========
     NOTE: We prefer a stable unique key if available to maximize reuse. */
const PROJECT_CARDS = projects.map((project, index) => (
     <MemoProjectCard
          key={(project as any).id ?? (project as any).slug ?? index}
          project={project}
          index={index}
     />
));

/** 
     * PERF NOTES:
     * - Component is memoized; with no props/state it will render once.
     * - No inline objects/arrays/functions in render path.
     * - Exact UI/markup/responsiveness preserved.
*/
const Projects = () => (
     <section id="projects" className={SECTION_CLS}>
          <MemoBackgroundDecorations />

          <div className={WRAP_CLS}>
               <MemoSectionHeader
                    badgeText="My Work"
                    title={TITLE_NODE}
                    description="A curated selection of my latest work showcasing modern design principles, clean code, and user-focused experiences."
               />

               <div className={GRID_CLS}>{PROJECT_CARDS}</div>
          </div>
     </section>
);

export default memo(Projects);