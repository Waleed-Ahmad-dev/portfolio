// components/about/ProfileCard.tsx
"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Cpu } from 'lucide-react';
import Image from 'next/image';
import { SpecialtyCard } from './SpecialtyCard';

export const ProfileCard = () => {
     return (
          <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.7, delay: 0.2 }}
               className="flex justify-center"
          >
               <div className="relative">
                    <motion.div 
                         className="absolute -inset-4 bg-gradient-to-r from-[#FF2E63] to-[#08D9D6] rounded-[2.5rem] blur-xl opacity-60"
                         animate={{ 
                              rotate: [0, 3, 0, -3, 0],
                         }}
                         transition={{ 
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut"
                         }}
                    />

                    <Card className="relative bg-gradient-to-br from-[#121B2B] to-[#0A0E17] border border-[#1E2A40] rounded-3xl overflow-hidden w-full max-w-md">
                         <CardHeader className="p-0">
                              <div className="relative w-full h-72">
                                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0E17]/80 z-10" />
                                   <Image
                                        src="/profile.svg"
                                        alt="Waleed Ahmad"
                                        fill
                                        className="object-cover"
                                   />
                              </div>
                         </CardHeader>
                         <CardContent className="p-6">
                              <div className="flex items-start justify-between">
                                   <div>
                                        <h3 className="text-2xl font-bold text-white">Waleed Ahmad</h3>
                                        <p className="text-[#08D9D6] font-medium">Full Stack Developer</p>
                                   </div>
                                   <motion.div
                                        className="bg-[#0C1120] border border-[#1E2A40] rounded-lg px-3 py-1.5 flex items-center gap-2"
                                        whileHover={{ scale: 1.05 }}
                                   >
                                        <Cpu className="w-5 h-5 text-[#08D9D6]" />
                                        <span className="text-sm font-medium text-white">Available</span>
                                   </motion.div>
                              </div>

                              {/* <div className="mt-6 grid grid-cols-2 gap-4">
                                   {specialties.map((item, index) => (
                                        <SpecialtyCard
                                             key={index}
                                             index={index}
                                             icon={item.icon}
                                             title={item.title}
                                             description={item.description}
                                        />
                                   ))}
                              </div> */}
                         </CardContent>
                    </Card>
               </div>
          </motion.div>
     );
};