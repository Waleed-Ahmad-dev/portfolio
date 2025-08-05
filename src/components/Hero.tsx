'use client';
import { motion } from 'framer-motion';
import { ArrowDown, Mouse } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GlowingGradientBorder } from '@/components/ui/glowing-gradient-border';

const Hero = () => {
     const { theme } = useTheme();
     const isDark = theme === 'dark';

     // Floating animation for profile card
     const floatingVariants = {
          animate: {
               y: [0, -15, 0],
               transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut" as const
               }
          }
     };

     return (
          <section 
               id="home" 
               className="min-h-screen flex flex-col justify-center pt-16 pb-20 relative overflow-hidden"
          >
               {/* Decorative background elements */}
               <div className="absolute inset-0 -z-10">
                    <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-purple-500/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-[20%] right-[15%] w-72 h-72 bg-blue-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slower" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />
               </div>

               <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                         <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="order-2 lg:order-1"
                         >
                              <motion.div
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   transition={{ delay: 0.3 }}
                              >
                                   <p className="text-lg md:text-xl font-medium mb-3 text-muted-foreground tracking-wider">
                                        HELLO, I&apos;M
                                   </p>
                                   <motion.h1 
                                        className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                   >
                                        Waleed <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Ahmad</span>
                                   </motion.h1>

                                   <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="mb-8"
                                   >
                                        <div className="flex items-center gap-3 mb-6">
                                             <div className="h-[2px] w-10 bg-gradient-to-r from-blue-500 to-purple-600" />
                                             <h2 className="text-2xl md:text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                                                  Full-Stack Developer
                                             </h2>
                                        </div>

                                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                                             Crafting modern, responsive web applications with cutting-edge technologies. 
                                             Currently studying at O levels while transforming ideas into digital experiences.
                                        </p>
                                   </motion.div>
                                   <motion.div 
                                        className="flex flex-wrap gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                   >
                                        <GlowingGradientBorder>
                                             <Button 
                                                  size="lg"
                                                  className="text-base font-medium px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
                                                  asChild
                                             >
                                                  <a href="#projects">View Projects</a>
                                             </Button>
                                        </GlowingGradientBorder>
                                        <Button 
                                             variant="outline"
                                             size="lg"
                                             className="text-base font-medium px-8 py-6 border-2 border-muted-foreground/30 hover:border-blue-500/50 transition-colors"
                                             asChild
                                        >
                                             <a href="#contact">Contact Me</a>
                                        </Button>
                                   </motion.div>
                              </motion.div>
                         </motion.div>

                         <motion.div 
                              className="order-1 lg:order-2 flex justify-center relative"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                              variants={floatingVariants}
                         >
                              <div className="relative">
                                   {/* Floating decorative elements */}
                                   <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-purple-600/10 blur-xl animate-pulse" />
                                   <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-blue-600/10 blur-xl animate-pulse" />

                                   {/* Profile card with gradient border */}
                                   <Card className="relative bg-background/80 backdrop-blur-sm border-0 overflow-hidden">
                                        <CardContent className="p-0">
                                             <div className="relative">
                                                  {/* Gradient border effect */}
                                                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/20 to-purple-600/20 rounded-xl" />

                                                  {/* Profile image placeholder */}
                                                  <div className="bg-gradient-to-br from-muted to-muted/70 w-80 h-80 md:w-96 md:h-96 rounded-xl flex items-center justify-center overflow-hidden">
                                                       <div className="bg-muted border-2 border-dashed border-muted-foreground/20 rounded-xl w-72 h-72 md:w-88 md:h-88" />
                                                  </div>

                                                  {/* Animated dots decoration */}
                                                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-500/10 backdrop-blur-sm" />
                                                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-purple-500/10 backdrop-blur-sm" />
                                             </div>
                                        </CardContent>
                                   </Card>
                                   {/* Tech badges floating around */}
                                   <motion.div 
                                        className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.8, type: "spring" }}
                                   >
                                        React
                                   </motion.div>
                                   <motion.div 
                                        className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1, type: "spring" }}
                                   >
                                        Next.js
                                   </motion.div>
                              </div>
                         </motion.div>
                    </div>

                    {/* Enhanced scroll indicator */}
                    <motion.div
                         className="flex flex-col items-center justify-center mt-24"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 1.2, duration: 0.5 }}
                    >
                         <motion.div
                              className="w-14 h-24 rounded-3xl border-2 border-muted-foreground/30 flex justify-center p-2"
                              animate={{ 
                                   y: [0, 10, 0],
                                   borderColor: ["rgba(100,100,100,0.3)", "rgba(59,130,246,0.5)", "rgba(100,100,100,0.3)"]
                              }}
                              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                         >
                              <motion.div
                                   className="w-2 h-2 bg-blue-500 rounded-full mt-1"
                                   animate={{ y: [0, 8, 0] }}
                                   transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                              />
                         </motion.div>
                         <span className="mt-3 text-sm font-medium text-muted-foreground tracking-wider">
                              SCROLL TO EXPLORE
                         </span>
                    </motion.div>
               </div>
          </section>
     );
};

export default Hero;