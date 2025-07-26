'use client';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTheme } from 'next-themes';

const Hero = () => {
     const { theme } = useTheme();
     const isDark = theme === 'dark';

     return (
          <section 
               id="home" 
               className="min-h-screen flex flex-col justify-center pt-16 pb-20"
          >
               <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                         <div className="order-2 md:order-1">
                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.5 }}
                              >
                                   <p className="text-xl md:text-2xl font-medium mb-2 text-muted-foreground">
                                        Hello, I'm
                                   </p>
                                   <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                        Waleed Ahmad
                                   </h1>
                                   <h2 className="text-2xl md:text-3xl font-medium mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                                        Full-Stack Developer
                                   </h2>
                                   <p className="text-lg md:text-xl mb-8 max-w-xl">
                                        I build modern, responsive web applications with React, Next.js, 
                                        and the latest web technologies. Currently studying at O levels 
                                        and passionate about creating innovative solutions.
                                   </p>
                                   <div className="flex gap-4">
                                        <a 
                                             href="#projects" 
                                             className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
                                        >
                                             View Projects
                                        </a>
                                        <a 
                                             href="#contact" 
                                             className="px-6 py-3 rounded-lg border border-border font-medium hover:bg-muted transition-colors"
                                        >
                                             Contact Me
                                        </a>
                                   </div>
                              </motion.div>
                         </div>

                         <motion.div 
                              className="order-1 md:order-2 flex justify-center"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                         >
                              <div className="relative">
                                   <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-30 animate-pulse" />
                                   <div className="relative bg-muted rounded-2xl p-1 border border-border">
                                        <div className="bg-gradient-to-br from-background to-muted rounded-xl w-72 h-72 md:w-80 md:h-80 overflow-hidden flex items-center justify-center">
                                             <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64" />
                                        </div>
                                   </div>
                              </div>
                         </motion.div>
                    </div>

                    <motion.div
                         className="flex flex-col items-center justify-center mt-20"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.8, duration: 0.5 }}
                    >
                         <span className="mb-4 font-medium text-muted-foreground tracking-widest">
                              Scroll Down
                         </span>
                         <motion.div
                              animate={{ y: [0, 10, 0] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                         >
                              <ArrowDown className="w-8 h-8" />
                         </motion.div>
                    </motion.div>
               </div>
          </section>
     );
};

export default Hero;