"use client";
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Cpu, MapPin, Calendar, Award } from 'lucide-react';

export const ProfileSection = () => {
     return (
          <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="relative"
          >
               {/* Animated background gradient */}
               <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl animate-pulse" />

               <Card className="relative bg-slate-900/80 backdrop-blur-xl border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
                    <CardContent className="p-8">
                         {/* Profile Header */}
                         <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
                              <motion.div
                                   whileHover={{ scale: 1.05, rotate: 2 }}
                                   transition={{ type: "spring", stiffness: 300 }}
                              >
                                   <Avatar className="w-24 h-24 border-4 border-cyan-500/20 shadow-2xl">
                                        <AvatarImage src="" alt="Waleed Ahmad" />
                                        <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-purple-600 text-white text-2xl">
                                             WA
                                        </AvatarFallback>
                                   </Avatar>
                              </motion.div>

                              <div className="flex-1 text-center lg:text-left">
                                   <motion.h1 
                                        className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                   >
                                        Waleed Ahmad
                                   </motion.h1>
                                   <motion.p 
                                        className="text-xl text-cyan-300 font-light mb-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                   >
                                        Full Stack Developer
                                   </motion.p>

                                   <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                        <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                                             <Cpu className="w-3 h-3 mr-1" />
                                             Available
                                        </Badge>
                                        <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                                             <MapPin className="w-3 h-3 mr-1" />
                                             Remote
                                        </Badge>
                                   </div>
                              </div>
                         </div>

                         {/* Stats Grid */}
                         <motion.div 
                              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                         >
                              {[
                                   { icon: Calendar, label: "Experience", value: "2+ Years" },
                                   { icon: Award, label: "Projects", value: "50+" },
                                   { icon: Cpu, label: "Technologies", value: "18+" },
                                   { icon: MapPin, label: "Location", value: "Global" }
                              ].map((stat, index) => (
                                   <motion.div
                                        key={stat.label}
                                        className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/30"
                                        whileHover={{ 
                                             scale: 1.05, 
                                             backgroundColor: "rgba(30, 41, 59, 0.8)",
                                             borderColor: "rgba(6, 182, 212, 0.3)"
                                        }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                   >
                                        <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                                        <div className="text-cyan-300 font-bold text-lg">{stat.value}</div>
                                        <div className="text-slate-400 text-sm">{stat.label}</div>
                                   </motion.div>
                              ))}
                         </motion.div>
                    </CardContent>
               </Card>
          </motion.div>
     );
};