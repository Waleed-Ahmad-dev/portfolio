'use client';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const timelineItems = [
  {
    date: "Jan 2025 – June 2025",
    title: "Backend Development Intern",
    description: "Worked at Firefly Tech Solutions, building scalable REST APIs with Node.js, Django, and Python. Improved backend efficiency and deployed responsive full-stack apps using Next.js and React.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "2025",
    title: "Google Generative AI Badge",
    description: "Earned badge by demonstrating skills in using Google's Generative AI tools and technologies.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    date: "December 2024",
    title: "O Levels",
    description: "Began O Levels at The City School. Currently pursuing with a focus on technical and analytical subjects.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    date: "2023 – 2024",
    title: "The Odin Project Certification",
    description: "Completed The Odin Project curriculum covering HTML, CSS, JavaScript, Git, Node.js, and React.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    date: "June 2023",
    title: "First Project",
    description: "Built my first personal portfolio website using HTML and CSS — a stepping stone into real-world web development.",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: "Future Goal",
    title: "Professional Full-Stack Developer",
    description: "Working towards mastering scalable full-stack development with AI/ML integrations and cloud-native apps.",
    icon: <Rocket className="w-5 h-5" />,
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            My Journey
          </motion.h2>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-30" />

          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  ease: "backOut",
                  delay: index * 0.15
                }}
                className={cn(
                  "relative flex items-center justify-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline dot with animation */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 border-4 border-background z-10 flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    initial={{ scale: 0.8, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 0.4,
                      type: "spring" 
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>

                {/* Card */}
                <div className={cn(
                  "w-full md:w-2/5 p-0.5 rounded-2xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 shadow-lg",
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                )}>
                  <Card className="rounded-2xl bg-background/80 backdrop-blur-sm border border-muted/50 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="mt-0.5 p-2 rounded-lg bg-blue-500/10 text-blue-500">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          {/* Title */}
                          <h3 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
                            {item.title}
                          </h3>
                          
                          {/* Date */}
                          <div className="flex items-center gap-2 mt-1.5 mb-3">
                            <div className="text-sm font-medium text-muted-foreground">
                              {item.date}
                            </div>
                            <div className="w-3 h-px bg-muted-foreground/30 rotate-12"></div>
                            <div className="text-blue-500">
                              {item.icon}
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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