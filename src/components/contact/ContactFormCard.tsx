// ContactFormCard.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const ContactFormCard = () => {
     const cardRef = useRef<HTMLDivElement>(null);

     useGSAP(() => {
          if (cardRef.current) {
               gsap.fromTo(cardRef.current,
                    { x: 50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
               );
          }
     });

     return (
          <div ref={cardRef}>
               <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5" />

                    <CardHeader className="relative z-10 p-8 border-b border-gray-200/50 dark:border-gray-700/50">
                         <CardTitle className="text-2xl flex items-center gap-3">
                              <Rocket className="w-8 h-8 text-purple-600" />
                              <span>Start Your Project</span>
                         </CardTitle>
                         <p className="text-muted-foreground mt-2">
                              Fill out the form below and I'll get back to you within 24 hours
                         </p>
                    </CardHeader>

                    <CardContent className="relative z-10 p-8">
                         <ContactForm />
                    </CardContent>
               </Card>
          </div>
     );
};