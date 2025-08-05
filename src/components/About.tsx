"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Cpu, Sparkles, Code, Server, Layout, Database } from 'lucide-react';
import Image from 'next/image';
import { SiCss3, SiDjango, SiFlask, SiGit, SiGithub, SiGo, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRemix, SiTailwindcss, SiTypescript } from 'react-icons/si';


const techStack = [
     { name: 'HTML5', color: 'from-[#4A1A0A] to-[#6B2610]', icon: <SiHtml5 className="text-white text-xl" /> },
     { name: 'CSS3', color: 'from-[#1A3A5A] to-[#2A5A8A]', icon: <SiCss3 className="text-white text-xl" /> },
     { name: 'JavaScript', color: 'from-[#3A3A00] to-[#5A5A00]', icon: <SiJavascript className="text-[#F7DF1E] text-xl" /> },
     { name: 'TypeScript', color: 'from-[#1A3A5A] to-[#2A5A8A]', icon: <SiTypescript className="text-white text-xl" /> },
     { name: 'React', color: 'from-[#113355] to-[#224466]', icon: <SiReact className="text-[#61DAFB] text-xl" /> },
     { name: 'Next.js', color: 'from-[#111111] to-[#222222]', icon: <SiNextdotjs className="text-white text-xl" /> },
     { name: 'Remix.js', color: 'from-[#113355] to-[#224466]', icon: <SiRemix className="text-white text-xl" /> },
     { name: 'Node.js', color: 'from-[#2A4A2A] to-[#3A5A3A]', icon: <SiNodedotjs className="text-[#8CC84B] text-xl" /> },
     { name: 'Python', color: 'from-[#1A3A5A] to-[#2A5A8A]', icon: <SiPython className="text-[#FFD43B] text-xl" /> },
     { name: 'Django', color: 'from-[#092E20] to-[#0A3A2A]', icon: <SiDjango className="text-white text-xl" /> },
     { name: 'Flask', color: 'from-[#111111] to-[#222222]', icon: <SiFlask className="text-white text-xl" /> },
     { name: 'Tailwind CSS', color: 'from-[#113355] to-[#224466]', icon: <SiTailwindcss className="text-white text-xl" /> },
     { name: 'MySQL', color: 'from-[#003A5A] to-[#114A6A]', icon: <SiMysql className="text-white text-xl" /> },
     { name: 'PostgreSQL', color: 'from-[#113355] to-[#224466]', icon: <SiPostgresql className="text-white text-xl" /> },
     { name: 'MongoDB', color: 'from-[#2A4A2A] to-[#3A5A3A]', icon: <SiMongodb className="text-white text-xl" /> },
     { name: 'GoLang', color: 'from-[#113355] to-[#224466]', icon: <SiGo className="text-white text-xl" /> },
     { name: 'Git', color: 'from-[#4A1A0A] to-[#6B2610]', icon: <SiGit className="text-white text-xl" /> },
     { name: 'GitHub', color: 'from-[#111111] to-[#3A2A5A]', icon: <SiGithub className="text-white text-xl" /> }
];

const specialties = [
     {
          icon: <Code className="w-6 h-6 text-[#08D9D6]" />,
          title: "Clean Code",
          description: "Maintainable, efficient solutions following best practices"
     },
     {
          icon: <Layout className="w-6 h-6 text-[#08D9D6]" />,
          title: "UI/UX Design",
          description: "User-centric interfaces with intuitive interactions"
     },
     {
          icon: <Server className="w-6 h-6 text-[#08D9D6]" />,
          title: "Backend Systems",
          description: "Scalable server architecture and API design"
     },
     {
          icon: <Database className="w-6 h-6 text-[#08D9D6]" />,
          title: "Database Design",
          description: "Optimized data models and query performance"
     }
];

const About = () => {
     return (
          <section id="about" className="py-24 bg-gradient-to-br from-[#0A0E17] via-[#0C1120] to-[#0A0E17] relative overflow-hidden">
               {/* Decorative elements */}
               <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#FF2E63]/10 blur-3xl -z-10 animate-pulse" />
               <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#08D9D6]/10 blur-3xl -z-10 animate-pulse" />

               {/* Floating particles */}
               {[...Array(12)].map((_, i) => (
                    <motion.div
                         key={i}
                         className="absolute rounded-full bg-gradient-to-r from-[#FF2E63] to-[#08D9D6]"
                         style={{
                              width: Math.random() * 8 + 2 + 'px',
                              height: Math.random() * 8 + 2 + 'px',
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                         }}
                         animate={{
                              y: [0, -20, 0],
                              x: [0, Math.random() * 20 - 10, 0],
                              opacity: [0.7, 1, 0.7],
                         }}
                         transition={{
                              duration: 3 + Math.random() * 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: Math.random() * 2
                         }}
                    />
               ))}
               <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                         className="text-center mb-16"
                    >
                         <motion.div 
                              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#0C1120] border border-[#1E2A40]"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                         >
                              <Sparkles className="w-4 h-4 text-[#08D9D6]" />
                              <span className="text-sm font-medium text-[#EAEAEA]">About Me</span>
                         </motion.div>
                         <motion.h2 
                              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF2E63] to-[#08D9D6]"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                   delay: 0.3,
                                   type: "spring", 
                                   stiffness: 400, 
                                   damping: 10 
                              }}
                              whileHover={{ 
                                   scale: 1.03,
                                   textShadow: "0 0 15px rgba(255, 46, 99, 0.5)"
                              }}
                         >
                              Crafting Digital Excellence
                         </motion.h2>

                         <motion.p 
                              className="text-lg text-[#A0AEC0] max-w-2xl mx-auto"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                         >
                              Building immersive digital experiences through innovative design and robust engineering
                         </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                         {/* Profile card with floating effect */}
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

                                             <div className="mt-6 grid grid-cols-2 gap-4">
                                                  {specialties.map((item, index) => (
                                                       <motion.div 
                                                            key={index}
                                                            className="bg-[#0C1120] border border-[#1E2A40] rounded-xl p-3"
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.5 + index * 0.1 }}
                                                            whileHover={{ 
                                                                 y: -5,
                                                                 borderColor: '#08D9D6'
                                                            }}
                                                       >
                                                            <div className="flex items-start gap-3">
                                                                 <div className="mt-0.5">{item.icon}</div>
                                                                 <div>
                                                                      <h4 className="font-bold text-white">{item.title}</h4>
                                                                      <p className="text-sm text-[#A0AEC0] mt-1">{item.description}</p>
                                                                 </div>
                                                            </div>
                                                       </motion.div>
                                                  ))}
                                             </div>
                                        </CardContent>
                                   </Card>
                              </div>
                         </motion.div>

                         {/* Content section */}
                         <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.7, delay: 0.3 }}
                         >
                              <motion.h3 
                                   className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E63] to-[#08D9D6]"
                                   initial={{ opacity: 0, y: 10 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.4 }}
                              >
                                   Engineering Digital Solutions
                              </motion.h3>

                              <motion.div 
                                   className="space-y-6 mb-10 text-[#EAEAEA]"
                                   initial={{ opacity: 0 }}
                                   animate={{ opacity: 1 }}
                                   transition={{ delay: 0.5 }}
                              >
                                   <motion.p 
                                        className="text-lg leading-relaxed"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                   >
                                        I'm <span className="font-bold text-white">Waleed Ahmad</span> a passionate backend-focused full-stack developer dedicated to building performant, scalable digital systems. I specialize in architecting robust server-side solutions and seamless frontend integrations that deliver excellent user experiences.
                                   </motion.p>
                                   <motion.p 
                                        className="text-lg leading-relaxed"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                   >
                                        With hands-on experience deploying full-stack applications to production and a strong command over modern web technologies like <span className="text-[#61DAFB] font-medium">Node.js, Express, Next.js,</span> and <span className="text-[#8CC84B] font-medium">Django</span>, I bring a functional-first approach to clean, maintainable code. My journey includes impactful contributions during my internship, and I'm continually expanding my skillset by learning <span className="text-[#8CC84B] font-medium">GoLang, Machine Learning,</span> and <span className="text-[#8CC84B] font-medium">AI integrations</span>.
                                   </motion.p>
                                   <motion.p 
                                        className="text-lg leading-relaxed"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 }}
                                   >
                                        Whether it's optimizing APIs, scaling databases, or exploring the future of generative AI, I bring curiosity, precision, and a problem-solving mindset to every project.                                   </motion.p>
                              </motion.div>

                              <motion.div
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 0.9 }}
                              >
                                   <div className="flex items-center justify-between mb-6">
                                        <motion.h4 
                                             className="text-2xl font-bold text-white flex items-center gap-3"
                                             whileHover={{ x: 5 }}
                                        >
                                             <motion.div
                                                  animate={{ rotate: [0, 15, 0, -15, 0] }}
                                                  transition={{ duration: 2, repeat: Infinity }}
                                             > 
                                                  <Cpu className="text-[#08D9D6]" />
                                             </motion.div>
                                             Technical Expertise
                                        </motion.h4>
                                   </div>

                                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {techStack.map((tech, index) => (
                                             <motion.div
                                                  key={index}
                                                  initial={{ opacity: 0, scale: 0.8 }}
                                                  animate={{ opacity: 1, scale: 1 }}
                                                  transition={{ delay: 1.0 + index * 0.1 }}
                                                  whileHover={{ 
                                                       y: -8,
                                                       rotate: [0, -2, 0, 2, 0],
                                                       transition: { type: "spring", stiffness: 400 }
                                                  }}
                                             >
                                                  <Card className={`bg-gradient-to-br ${tech.color} h-full border-0 rounded-xl overflow-hidden relative group`}>
                                                       <CardContent className="p-4 flex flex-col items-center justify-center gap-3 h-full">
                                                            <div className="text-3xl mb-1">
                                                                 {tech.icon}
                                                            </div>
                                                            <h5 className="font-bold text-white text-center">{tech.name}</h5>
                                                            <motion.div 
                                                                 className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                                                 initial={{ opacity: 0 }}
                                                            >
                                                                 <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                                                                      <div className="w-2 h-2 rounded-full bg-[#08D9D6] animate-ping"></div>
                                                                 </div>
                                                            </motion.div>
                                                       </CardContent>
                                                  </Card>
                                             </motion.div>
                                        ))}
                                   </div>
                              </motion.div>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
};

export default About;