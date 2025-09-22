import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { floatingVariants } from './floatingAnimation';
import FloatingTechBadge from './FloatingTechBadge';
import React from 'react';

const ProfileCard = () => (
     <motion.div 
          className="order-1 lg:order-2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          variants={floatingVariants}
     >
          <div className="relative">
               {/* Simplified background effects */}
               <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-purple-600/10 blur-xl animate-pulse" />
               <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-600/10 blur-xl animate-pulse" />

               <Card className="relative bg-background/80 backdrop-blur-sm border-0 overflow-hidden">
                    <CardContent className="p-0">
                         {/* Removed redundant gradient div - combined with parent */}
                         <div className="bg-gradient-to-br from-muted to-muted/70 via-blue-500/20 w-80 h-80 md:w-96 md:h-96 rounded-xl flex items-center justify-center overflow-hidden">
                              <img 
                                   src="/hero.webp" 
                                   alt="Hero Image"
                                   className="rounded-xl w-72 h-72 md:w-88 md:h-88 object-cover"
                                   // Preload hint and dimensions for layout stability
                                   loading="eager"
                                   width={288}
                                   height={288}
                              />
                         </div>
                         {/* Simplified decorative elements */}
                         <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-500/10 backdrop-blur-sm" />
                         <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-purple-500/10 backdrop-blur-sm" />
                    </CardContent>
               </Card>

               <FloatingTechBadge 
                    positionClasses="-bottom-6 -left-6"
                    gradient="from-blue-600 to-blue-800"
                    text="React"
                    delay={0.8}
               />
               <FloatingTechBadge 
                    positionClasses="-top-6 -right-6"
                    gradient="from-purple-600 to-purple-800"
                    text="Next.js"
                    delay={1}
               />
          </div>
     </motion.div>
);

export default React.memo(ProfileCard);