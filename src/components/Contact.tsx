// Contact.tsx
'use client';

import React, { memo } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ContactHeader } from './contact/ContactHeader';
import { ContactInfoCard } from './contact/ContactInfoCard';
import { ContactFormCard } from './contact/ContactFormCard';
import { ThreeBackground } from './contact/ThreeBackground';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const VIEWPORT_ONCE = { once: true } as const;

const CONTAINER_VARIANTS = {
     hidden: { opacity: 0 },
     show: {
          opacity: 1,
          transition: {
               staggerChildren: 0.2
          }
     }
} as const;

const ITEM_VARIANTS = {
     hidden: { opacity: 0, y: 30 },
     show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] } }
} as const;

const MemoContactHeader = memo(ContactHeader);
const MemoContactInfoCard = memo(ContactInfoCard);
const MemoContactFormCard = memo(ContactFormCard);

const Contact = () => {
     useGSAP(() => {
          // Global page entrance animation
          gsap.fromTo(".contact-section",
               { opacity: 0 },
               { opacity: 1, duration: 1.5, ease: "power2.inOut" }
          );
     });

     return (
          <section
               id="contact"
               className="contact-section py-32 relative overflow-hidden min-h-screen"
          >
               <ThreeBackground />

               <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <MemoContactHeader />

                    <LazyMotion features={domAnimation}>
                         <m.div
                              variants={CONTAINER_VARIANTS}
                              initial="hidden"
                              whileInView="show"
                              viewport={VIEWPORT_ONCE}
                              className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto"
                         >
                              <m.div variants={ITEM_VARIANTS}>
                                   <MemoContactInfoCard />
                              </m.div>

                              <m.div variants={ITEM_VARIANTS}>
                                   <MemoContactFormCard />
                              </m.div>
                         </m.div>
                    </LazyMotion>

                    {/* Floating elements */}
                    <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-float" />
                    <div className="absolute top-1/3 right-20 w-6 h-6 bg-purple-400 rounded-full opacity-30 animate-float" />
                    <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-indigo-400 rounded-full opacity-40 animate-float" />
               </div>

               <style jsx>{`
                    .animate-float {
                         animation: float 6s ease-in-out infinite;
                    }
                    
                    @keyframes float {
                         0%, 100% { transform: translateY(0px) rotate(0deg); }
                         50% { transform: translateY(-20px) rotate(180deg); }
                    }
               `}</style>
          </section>
     );
};

export default memo(Contact);