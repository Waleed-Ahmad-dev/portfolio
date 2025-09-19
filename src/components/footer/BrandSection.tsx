import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from './variants';
import SocialButton from './SocialButton';
import { Github, Linkedin, Mail } from 'lucide-react';

const BrandSection = () => (
     <motion.div 
          className="md:col-span-2 xl:col-span-1"
          variants={itemVariants}
     >
          <div className="flex items-start gap-4 mb-6">
               {/* Simplified logo animation with reduced spring stiffness */}
               <motion.div 
                    className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }} // Reduced stiffness for better perf
               >
                    <span className="font-bold text-white text-lg">W</span>
               </motion.div>
               <div>
                    {/* Removed motion from heading - micro-interaction not worth performance cost */}
                    <h2 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                         Waleed Ahmad
                    </h2>
                    <p className="text-muted-foreground mt-2 max-w-md">
                         Crafting elegant digital experiences with modern web technologies.
                    </p>
               </div>
          </div>

          {/* Social buttons container - kept for staggered animation */}
          <motion.div 
               className="flex gap-3 mt-8"
               variants={containerVariants}
          >
               <SocialButton 
                    href="https://github.com/Waleed-Ahmad-dev" 
                    icon={<Github className="w-4 h-4" />}
                    label="GitHub"
               />
               <SocialButton 
                    href="https://www.linkedin.com/in/waleed-ahmed2009" 
                    icon={<Linkedin className="w-4 h-4" />}
                    label="LinkedIn"
               />
               <SocialButton 
                    href="mailto:itswaleedqurshi@gmail.com" 
                    icon={<Mail className="w-4 h-4" />}
                    label="Email"
               />
          </motion.div>
     </motion.div>
);

export default BrandSection;