// ContactSection.tsx
import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';
import MagneticButton from './MagneticButton';

const ContactSection = () => (
     <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
     >
          <h3 className="text-lg font-semibold mb-8 flex items-center">
               <span className="bg-gradient-to-r from-amber-400 to-rose-500 w-2 h-2 rounded-full mr-3" />
               Let's Connect
               <span className="h-px flex-1 bg-gradient-to-r from-border/40 to-transparent ml-4" />
          </h3>

          <div className="space-y-6">
               {/* Contact Card */}
               <motion.div
                    className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-xl border border-border/20 rounded-2xl p-6 shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
               >
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                         <Mail className="w-4 h-4 text-blue-500" />
                         Ready to collaborate?
                    </h4>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                         Have an exciting project in mind? Let's discuss how we can bring your vision to life with cutting-edge solutions.
                    </p>

                    <MagneticButton strength={0.2}>
                         <a
                              href="mailto:itswaleedqurshi@gmail.com"
                              className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 px-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-[1.02]"
                         >
                              Start Conversation
                         </a>
                    </MagneticButton>
               </motion.div>

               {/* Meeting Scheduler */}
               <motion.div
                    className="bg-gradient-to-br from-background/60 to-background/20 backdrop-blur-xl border border-border/20 rounded-2xl p-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
               >
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                         <Calendar className="w-4 h-4 text-purple-500" />
                         Schedule a call
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                         Prefer a video call? Book a time that works for you.
                    </p>

                    <MagneticButton strength={0.15}>
                         <a
                              href="#scheduling"
                              className="block w-full border border-border/40 bg-background/40 backdrop-blur-sm text-foreground text-center py-3 px-6 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                         >
                              Book Meeting
                         </a>
                    </MagneticButton>
               </motion.div>
          </div>
     </motion.div>
);

export default ContactSection;