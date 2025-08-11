import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { GlowingGradientBorder } from '@/components/ui/glowing-gradient-border';

const HeroContent = () => (
     <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
     >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
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
);

export default HeroContent;