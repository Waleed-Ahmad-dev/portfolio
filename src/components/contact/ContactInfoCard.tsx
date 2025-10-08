// ContactInfoCard.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Clock, Award } from "lucide-react";
import { ContactInfoItem } from "./ContactInfoItem";
import { contactItems, contactTip } from "./contactInfo";
import { memo, useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const stats = [
     { icon: Clock, value: "24h", label: "Avg Response" },
     { icon: Award, value: "50+", label: "Projects" },
     { icon: MapPin, value: "Remote", label: "Worldwide" }
];

export const ContactInfoCard = memo(function ContactInfoCard() {
     const cardRef = useRef<HTMLDivElement>(null);

     useGSAP(() => {
          if (cardRef.current) {
               gsap.fromTo(cardRef.current,
                    { x: -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
               );
          }
     });

     const contactItemsList = useMemo(() => 
          contactItems.map((item, index) => (
               <ContactInfoItem 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                    index={index}
               />
          )), 
     []);

     const statsSection = useMemo(() => (
          <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8 }}
               className="grid grid-cols-3 gap-4 mt-8"
          >
               {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                         <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                         <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
                         <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
               ))}
          </motion.div>
     ), []);

     const tipSection = useMemo(() => (
          <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 1 }}
               className="mt-8"
          >
               <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-900/50 backdrop-blur-sm">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
                         <MessageSquare className="w-5 h-5 text-blue-600" />
                         {contactTip.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                         {contactTip.content}
                    </p>
               </div>
          </motion.div>
     ), []);

     return (
          <div ref={cardRef}>
               <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

                    <CardHeader className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                         <CardTitle className="flex items-center gap-3 text-2xl">
                              <Mail className="w-8 h-8" />
                              <span>Get In Touch</span>
                         </CardTitle>
                         <p className="text-blue-100 mt-2">
                              Let's discuss how we can turn your ideas into reality
                         </p>
                    </CardHeader>
                    <CardContent className="relative z-10 p-8">
                         <div className="space-y-6">
                              {contactItemsList}
                         </div>
                         {statsSection}
                         {tipSection}
                    </CardContent>
               </Card>
          </div>
     );
});