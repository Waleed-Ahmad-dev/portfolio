"use client";
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
     Code2, 
     Server, 
     Brain, 
     Sparkles, 
     ArrowRight,
     CloudLightning,
     Database
} from 'lucide-react';
import { useThreeJSScene } from '@/hooks/useThreeJSScene';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import { techStack } from './data';

export const ContentSection = () => {
     const sectionRef = useRef<HTMLDivElement>(null!);
     const threeContainerRef = useRef<HTMLDivElement>(null!);
     const titleRef = useRef<HTMLHeadingElement>(null!);
     const cardRef = useRef<HTMLDivElement>(null!);

     const { scrollYProgress } = useScroll({
          target: sectionRef,
          offset: ["start end", "end start"]
     });

     const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
     const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
     const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

     // Initialize Three.js scene
     useThreeJSScene(threeContainerRef);

     // Initialize GSAP animations
     useGSAPAnimations(titleRef, cardRef);

     return (
          <section 
               ref={sectionRef}
               className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
          >
               {/* Three.js Background Container */}
               <div 
                    ref={threeContainerRef}
                    className="absolute inset-0 z-0 opacity-20"
               />

               {/* Animated Gradient Orbs */}
               <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
               <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
               <div className="container relative z-10 mx-auto px-4 py-20">
                    <motion.div
                         style={{ opacity, y, scale }}
                         className="max-w-6xl mx-auto"
                    >
                         {/* Header Section */}
                         <div className="text-center mb-16">
                              <Badge variant="secondary" className="mb-6 px-4 py-2 border border-cyan-500/30 bg-cyan-500/10">
                                   <Sparkles className="w-4 h-4 mr-2 text-cyan-300" />
                                   Full-Stack Developer & AI Engineer
                              </Badge>
                              <motion.h1 
                                   ref={titleRef}
                                   className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                              >
                                   Engineering
                                   <span className="block mt-2 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                                        Digital Excellence
                                   </span>
                              </motion.h1>
                              <motion.p 
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.6 }}
                                   className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                              >
                                   Crafting high-performance, scalable solutions at the intersection of 
                                   modern web technologies and artificial intelligence
                              </motion.p>
                         </div>

                         {/* Main Content Grid */}
                         <div className="grid lg:grid-cols-2 gap-8 items-start">
                              {/* Left Column - Introduction Card */}
                              <motion.div
                                   ref={cardRef}
                                   className="space-y-6"
                              >
                                   <Card className="bg-slate-900/60 backdrop-blur-xl border-slate-700/50 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:border-cyan-500/30">
                                        <CardContent className="p-8">
                                             <div className="flex items-start space-x-4 mb-6">
                                                  <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                                                       <Code2 className="w-8 h-8 text-cyan-400" />
                                                  </div>
                                                  <div>
                                                       <h3 className="text-2xl font-bold text-white mb-2">
                                                            Waleed Ahmad
                                                       </h3>
                                                       <p className="text-cyan-300 font-medium">
                                                            Backend-Focused Full-Stack Developer
                                                       </p>
                                                  </div>
                                             </div>

                                             <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                                                  <p>
                                                       I specialize in architecting <span className="text-cyan-300 font-semibold">robust server-side solutions</span> and seamless frontend integrations that deliver exceptional user experiences. My approach combines technical excellence with clean, maintainable code.
                                                  </p>

                                                  <p>
                                                       With hands-on experience deploying full-stack applications to production, I bring a functional-first mindset to every project, ensuring scalability and performance from day one.
                                                  </p>
                                             </div>
                                        </CardContent>
                                   </Card>

                                   {/* Tech Stack Pill */}
                                   <Card className="bg-slate-900/60 backdrop-blur-xl border-slate-700/50">
                                        <CardContent className="p-6">
                                             <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                                                  <CloudLightning className="w-5 h-5 mr-2 text-cyan-400" />
                                                  Core Technologies
                                             </h4>
                                             <div className="flex flex-wrap gap-3">
                                                  {techStack.map((tech, index) => {
                                                       return (
                                                            <Badge 
                                                                 key={tech.name}
                                                                 variant="outline" 
                                                                 className={`px-4 py-2 border-none bg-gradient-to-r ${tech.color} text-white font-medium backdrop-blur-sm`}
                                                            >
                                                                 <div className="w-4 h-4 mr-2">{tech.icon}</div>
                                                                 {tech.name}
                                                            </Badge>
                                                       );
                                                  })}
                                             </div>
                                        </CardContent>
                                   </Card>
                              </motion.div>

                              {/* Right Column - Features & Specializations */}
                              <div className="space-y-6">
                                   <Card className="bg-slate-900/60 backdrop-blur-xl border-slate-700/50 group hover:border-purple-500/30 transition-all duration-500">
                                        <CardContent className="p-8">
                                             <div className="flex items-start space-x-4 mb-6">
                                                  <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 group-hover:bg-purple-500/15 transition-colors">
                                                       <Brain className="w-8 h-8 text-purple-400" />
                                                  </div>
                                                  <div>
                                                       <h3 className="text-2xl font-bold text-white mb-2">
                                                            AI & Machine Learning
                                                       </h3>
                                                       <p className="text-purple-300 font-medium">
                                                            Future-Forward Development
                                                       </p>
                                                  </div>
                                             </div>

                                             <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                                                  <p>
                                                       Currently expanding my expertise in <span className="text-purple-300 font-semibold">GoLang, Machine Learning, and AI integrations</span>. Exploring the future of generative AI to build intelligent, adaptive systems.
                                                  </p>

                                                  <p>
                                                       Bringing curiosity, precision, and a problem-solving mindset to optimize APIs, scale databases, and integrate cutting-edge AI capabilities.
                                                  </p>
                                             </div>
                                             <Button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 border-none text-white font-semibold group/btn">
                                                  Explore Projects
                                                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                             </Button>
                                        </CardContent>
                                   </Card>

                                   {/* Stats Card */}
                                   <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border-cyan-500/20">
                                        <CardContent className="p-6">
                                             <div className="grid grid-cols-2 gap-4 text-center">
                                                  <div>
                                                       <div className="text-2xl font-bold text-cyan-300">10+</div>
                                                       <div className="text-sm text-cyan-200/80">Projects Deployed</div>
                                                  </div>
                                                  <div>
                                                       <div className="text-2xl font-bold text-blue-300">100%</div>
                                                       <div className="text-sm text-blue-200/80">Production Ready</div>
                                                  </div>
                                             </div>
                                        </CardContent>
                                   </Card>
                              </div>
                         </div>

                         {/* CTA Section */}
                         <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 1.2 }}
                              className="text-center mt-16"
                         >
                              <Button 
                                   variant="outline" 
                                   className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 px-8 py-6 text-lg font-semibold group"
                              >
                                   Let's Build Something Amazing
                                   <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                         </motion.div>
                    </motion.div>
               </div>
          </section>
     );
};