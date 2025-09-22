'use client';

import React, { memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

/* =========================
  Hoisted class strings
  ========================= */
const SECTION_CLS =
  'py-24 bg-gradient-to-b from-background to-muted/20';
const CONTAINER_CLS =
  'container mx-auto px-4 max-w-6xl';
const TITLE_WRAP_CLS = 'text-center mb-20';
const TITLE_H2_CLS =
  'text-4xl md:text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500';
const TITLE_BAR_CLS =
  'w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full';
const DECOR_A_CLS =
  'absolute -top-10 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10';
const DECOR_B_CLS =
  'absolute -bottom-10 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10';
const AXIS_CLS =
  'absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30';
const LIST_WRAP_CLS = 'space-y-16';
const ROW_BASE_CLS = 'relative flex items-center justify-center';
const ROW_EVEN_EXTRA = ' md:flex-row-reverse';
const DOT_CLS =
  'absolute left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-background z-10 flex items-center justify-center text-white shadow-lg';
const CARD_GRAD_BASE =
  'w-full md:w-2/5 p-0.5 rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 shadow-lg';
const CARD_GRAD_EVEN = ' md:mr-auto';
const CARD_GRAD_ODD  = ' md:ml-auto';
const CARD_CLS =
  'rounded-2xl bg-background/80 backdrop-blur-sm border border-muted/50 overflow-hidden';
const CARD_CONTENT_CLS = 'p-6';
const ICON_BOX_CLS = 'mt-0.5 p-2 rounded-lg bg-blue-500/10 text-blue-500';
const ITEM_TITLE_CLS =
  'text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent';
const DATE_ROW_CLS = 'flex items-center gap-2 mt-1.5 mb-3';
const DATE_DIVIDER_CLS = 'w-3 h-px bg-muted-foreground/30 rotate-12';
const DATE_ICON_CLS = 'text-blue-500';
const DESC_CLS = 'text-muted-foreground';
const ICON_CLS = 'w-5 h-5';

/* =========================
  Framer: hoisted configs
  ========================= */
const VIEWPORT_HEADER = { once: true, margin: '-100px' } as const;
const VIEWPORT_ITEM   = { once: true, margin: '-50px' } as const;
const HEADER_INITIAL  = { opacity: 0, y: 20 } as const;
const HEADER_WHILE    = { opacity: 1, y: 0 } as const;
const H2_INITIAL      = { opacity: 0, y: 10 } as const;
const H2_ANIMATE      = { opacity: 1, y: 0 } as const;
const H2_TRANSITION   = { delay: 0.1 } as const;
const BAR_INITIAL     = { width: 0 } as const;
const BAR_WHILE       = { width: '8rem' } as const;
const BAR_TRANSITION  = { duration: 0.8, delay: 0.3 } as const;

const ITEM_INITIAL    = { opacity: 0, y: 40 } as const;
const ITEM_WHILE      = { opacity: 1, y: 0 } as const;
const ITEM_BASE_TRANS = { duration: 0.6, ease: 'backOut' } as const;

const DOT_HOVER       = { scale: 1.15 } as const;
const DOT_HOVER_TRANS = { type: 'spring', stiffness: 400, damping: 10 } as const;

const DOT_ICON_INITIAL = { scale: 0.8, rotate: -15 } as const;
const DOT_ICON_ANIM    = { scale: 1, rotate: 0 } as const;

/* =========================
  Data (icons as components)
  ========================= */
type Item = {
  date: string;
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const timelineItems: Item[] = [
  {
    date: 'Jan 2025 – June 2025',
    title: 'Backend Development Intern',
    description:
      'Worked at Firefly Tech Solutions, building scalable REST APIs with Node.js, Django, and Python. Improved backend efficiency and deployed responsive full-stack apps using Next.js and React.',
    Icon: Briefcase,
  },
  {
    date: '2025',
    title: 'Google Generative AI Badge',
    description:
      "Earned badge by demonstrating skills in using Google's Generative AI tools and technologies.",
    Icon: Award,
  },
  {
    date: 'December 2024',
    title: 'O Levels',
    description:
      'Began O Levels at The City School. Currently pursuing with a focus on technical and analytical subjects.',
    Icon: GraduationCap,
  },
  {
    date: '2023 – 2024',
    title: 'The Odin Project Certification',
    description:
      'Completed The Odin Project curriculum covering HTML, CSS, JavaScript, Git, Node.js, and React.',
    Icon: Award,
  },
  {
    date: 'June 2023',
    title: 'First Project',
    description:
      'Built my first personal portfolio website using HTML and CSS — a stepping stone into real-world web development.',
    Icon: Briefcase,
  },
  {
    date: 'Future Goal',
    title: 'Professional Full-Stack Developer',
    description:
      'Working towards mastering scalable full-stack development with AI/ML integrations and cloud-native apps.',
    Icon: Rocket,
  },
] as const;

/* ============================================================
  Precompute the animated timeline nodes once (static content)
  ============================================================ 
*/
const TIMELINE_NODES = timelineItems.map((item, index) => {
  const { Icon } = item;
  const rowCls = index % 2 === 0 ? ROW_BASE_CLS + ROW_EVEN_EXTRA : ROW_BASE_CLS;
  const gradCls =
    CARD_GRAD_BASE + (index % 2 === 0 ? CARD_GRAD_EVEN : CARD_GRAD_ODD);
  const itemTransition = { ...ITEM_BASE_TRANS, delay: index * 0.15 } as const;
  const dotIconTransition = { type: 'spring', delay: index * 0.1 + 0.4 } as const;

  // NOTE: Two distinct <Icon /> instances (dot + date row) to match original UI.
  return (
    <m.div
      key={`${item.date}-${item.title}-${index}`}
      initial={ITEM_INITIAL}
      whileInView={ITEM_WHILE}
      viewport={VIEWPORT_ITEM}
      transition={itemTransition}
      className={rowCls}
    >
      {/* Timeline dot */}
      <m.div
        className={DOT_CLS}
        whileHover={DOT_HOVER}
        transition={DOT_HOVER_TRANS}
      >
        <m.div
          initial={DOT_ICON_INITIAL}
          animate={DOT_ICON_ANIM}
          transition={dotIconTransition}
        >
          <Icon className={ICON_CLS} aria-hidden />
        </m.div>
      </m.div>

      {/* Card */}
      <div className={gradCls}>
        <Card className={CARD_CLS}>
          <CardContent className={CARD_CONTENT_CLS}>
            <div className="flex items-start gap-4">
              <div className={ICON_BOX_CLS}>
                <Icon className={ICON_CLS} aria-hidden />
              </div>

              <div className="flex-1">
                <h3 className={ITEM_TITLE_CLS}>{item.title}</h3>

                <div className={DATE_ROW_CLS}>
                  <div className="text-sm font-medium text-muted-foreground">
                    {item.date}
                  </div>
                  <div className={DATE_DIVIDER_CLS} />
                  <div className={DATE_ICON_CLS}>
                    <Icon className={ICON_CLS} aria-hidden />
                  </div>
                </div>

                <p className={DESC_CLS}>{item.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </m.div>
  );
});

/* =========================
    Component
    =========================
    - Single LazyMotion provider (domAnimation) for minimal runtime.
    - No per-render allocations; nodes are precomputed.
    - Memoized export to avoid parent-driven re-renders.
*/
const Timeline = () => {
  return (
    <section id="timeline" className={SECTION_CLS}>
      <div className={CONTAINER_CLS}>
        <LazyMotion features={domAnimation}>
          {/* Header */}
          <m.div
            initial={HEADER_INITIAL}
            whileInView={HEADER_WHILE}
            viewport={VIEWPORT_HEADER}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={TITLE_WRAP_CLS}
          >
            <m.h2
              className={TITLE_H2_CLS}
              initial={H2_INITIAL}
              animate={H2_ANIMATE}
              transition={H2_TRANSITION}
            >
              My Journey
            </m.h2>

            <m.div
              className={TITLE_BAR_CLS}
              initial={BAR_INITIAL}
              whileInView={BAR_WHILE}
              viewport={{ once: true }}
              transition={BAR_TRANSITION}
            />
          </m.div>

          {/* Body */}
          <div className="relative">
            <div className={DECOR_A_CLS} />
            <div className={DECOR_B_CLS} />
            <div className={AXIS_CLS} />
            <div className={LIST_WRAP_CLS}>{TIMELINE_NODES}</div>
          </div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default memo(Timeline);
