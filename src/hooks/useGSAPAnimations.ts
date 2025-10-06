import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = (
     titleRef: React.RefObject<HTMLElement>,
     cardRef: React.RefObject<HTMLElement>
) => {
     useEffect(() => {
          // Title animation
          if (titleRef.current) {
               gsap.fromTo(titleRef.current,
                    {
                         opacity: 0,
                         y: 100,
                         scale: 0.8
                    },
                    {
                         opacity: 1,
                         y: 0,
                         scale: 1,
                         duration: 1.5,
                         ease: "power3.out",
                         scrollTrigger: {
                              trigger: titleRef.current,
                              start: "top 80%",
                              end: "bottom 20%",
                              toggleActions: "play none none reverse"
                         }
                    }
               );
          }

          // Card stagger animation
          if (cardRef.current) {
               const cards = cardRef.current.querySelectorAll('.card-element');
               gsap.fromTo(cards,
                    {
                         opacity: 0,
                         y: 50,
                         rotationY: 10
                    },
                    {
                         opacity: 1,
                         y: 0,
                         rotationY: 0,
                         duration: 1,
                         stagger: 0.2,
                         ease: "back.out(1.7)",
                         scrollTrigger: {
                              trigger: cardRef.current,
                              start: "top 75%",
                              toggleActions: "play none none reverse"
                         }
                    }
               );
          }

          // Floating animation for badges
          gsap.to('.tech-badge', {
               y: 10,
               duration: 2,
               repeat: -1,
               yoyo: true,
               ease: "sine.inOut",
               stagger: 0.2
          });

     }, [titleRef, cardRef]);
};