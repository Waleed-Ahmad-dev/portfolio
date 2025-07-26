// components/Timeline.tsx
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timelineItems = [
     {
          date: "March 2024",
          title: "Certification",
          description: "Completed The Odin Project",
          icon: <Award className="w-6 h-6" />,
     },
     {
          date: "January 2024",
          title: "Started Learning",
          description: "Began learning web development with HTML, CSS, and JavaScript",
          icon: <GraduationCap className="w-6 h-6" />,
     },
     {
          date: "June 2023",
          title: "First Project",
          description: "Created my first portfolio website using HTML and CSS",
          icon: <Briefcase className="w-6 h-6" />,
     },
     {
          date: "September 2022",
          title: "O Levels",
          description: "Started O Levels at The City School",
          icon: <GraduationCap className="w-6 h-6" />,
     },
     {
          date: "Future Goal",
          title: "Full-Stack Developer",
          description: "Aspiring to become a professional full-stack developer",
          icon: <Briefcase className="w-6 h-6" />,
     },
];

const Timeline = () => {
     return (
          <section id="timeline" className="py-20">
               <div className="container mx-auto px-4">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5 }}
                         className="text-center mb-16"
                    >
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">Timeline</h2>
                         <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                         {/* Timeline line */}
                         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600"></div>

                         <div className="space-y-12">
                              {timelineItems.map((item, index) => (
                                   <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className={`relative flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                                   >
                                        {/* Timeline dot */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-background z-10 flex items-center justify-center text-white">
                                             {item.icon}
                                        </div>
                                        {/* Content */}
                                        <div className={`w-5/12 p-6 rounded-xl border border-border bg-background shadow-sm ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                                             <div className="text-sm font-medium text-primary mb-1">{item.date}</div>
                                             <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                             <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Timeline;