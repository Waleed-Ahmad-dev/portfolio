'use client';

import React, { memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ContactHeader } from './contact/ContactHeader';
import { ContactInfoCard } from './contact/ContactInfoCard';
import { ContactFormCard } from './contact/ContactFormCard';

/**
      * PERF: Use LazyMotion with domAnimation (lighter than domMax)
      * so only minimal features are loaded and only when needed.
      * Hoist all objects (variants/transition/viewport) to preserve
      * referential equality and keep renders under ~1ms.
*/
const VIEWPORT_ONCE = { once: true } as const;

const LEFT_VARIANTS = {
     hidden: { opacity: 0, x: -30 },
     show:   { opacity: 1, x: 0  }
} as const;

const RIGHT_VARIANTS = {
     hidden: { opacity: 0, x: 30 },
     show:   { opacity: 1, x: 0 }
} as const;

const TRANSITION_LEFT  = { duration: 0.7, delay: 0.1 } as const;
const TRANSITION_RIGHT = { duration: 0.7, delay: 0.2 } as const;

/**
      * PERF: Memoize leaf components so they don't re-render
      * when parents update unrelated state/props.
      * (Internal state like form inputs will still update normally.)
*/
const MemoContactHeader    = memo(ContactHeader);
const MemoContactInfoCard  = memo(ContactInfoCard);
const MemoContactFormCard  = memo(ContactFormCard);

const Contact = () => (
     <section
          id="contact"
          className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
     >
          <div className="container mx-auto px-4 max-w-7xl">
               <MemoContactHeader />

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {/* PERF: One LazyMotion provider for both animated blocks */}
                    <LazyMotion features={domAnimation}>
                         <m.div
                              initial="hidden"
                              whileInView="show"
                              variants={LEFT_VARIANTS}
                              viewport={VIEWPORT_ONCE}
                              transition={TRANSITION_LEFT}
                         >
                              <MemoContactInfoCard />
                         </m.div>

                         <m.div
                              initial="hidden"
                              whileInView="show"
                              variants={RIGHT_VARIANTS}
                              viewport={VIEWPORT_ONCE}
                              transition={TRANSITION_RIGHT}
                         >
                              <MemoContactFormCard />
                         </m.div>
                    </LazyMotion>
               </div>
          </div>
     </section>
);

/**
     * PERF: Memoize the exported component (no props) to avoid
     * re-renders from parent tree changes.
*/
export default memo(Contact);
