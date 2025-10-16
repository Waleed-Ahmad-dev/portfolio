import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const BrandSection = () => (
     <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
     >
          {/* Enhanced Logo */}
          <div className="flex items-start gap-4 mb-8">
               <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
               >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-white/10">
                         <span className="font-bold text-white text-xl">W</span>
                    </div>
               </motion.div>

               <div className="flex-1">
                    <motion.h2 
                         className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 mb-2"
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.2 }}
                    >
                         Waleed Ahmad
                    </motion.h2>
                    <motion.p 
                         className="text-muted-foreground text-lg leading-relaxed max-w-md"
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.3 }}
                    >
                         Crafting exceptional digital experiences with cutting-edge technologies and innovative design.
                    </motion.p>
               </div>
          </div>

          {/* Enhanced Social Links */}
          <motion.div 
               className="flex gap-3"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4, staggerChildren: 0.1 }}
          >
               <MagneticButton>
                    <a
                         href="https://github.com/Waleed-Ahmad-dev"
                         className="flex items-center gap-2 px-4 py-3 bg-background/60 backdrop-blur-sm border border-border/40 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
                    >
                         <Github className="w-4 h-4" />
                         <span className="text-sm">GitHub</span>
                         <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
               </MagneticButton>

               <MagneticButton>
                    <a
                         href="https://www.linkedin.com/in/waleed-ahmed2009"
                         className="flex items-center gap-2 px-4 py-3 bg-background/60 backdrop-blur-sm border border-border/40 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
                    >
                         <Linkedin className="w-4 h-4" />
                         <span className="text-sm">LinkedIn</span>
                         <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
               </MagneticButton>

               <MagneticButton>
                    <a
                         href="mailto:itswaleedqurshi@gmail.com"
                         className="flex items-center gap-2 px-4 py-3 bg-background/60 backdrop-blur-sm border border-border/40 rounded-xl hover:border-blue-500/50 transition-all duration-300 group"
                    >
                         <Mail className="w-4 h-4" />
                         <span className="text-sm">Email</span>
                         <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
               </MagneticButton>
          </motion.div>
     </motion.div>
);

export default BrandSection;