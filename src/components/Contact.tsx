'use client';

import { motion } from "framer-motion";
import { ContactHeader } from "./contact/ContactHeader";
import { ContactInfoCard } from "./contact/ContactInfoCard";
import { ContactFormCard } from "./contact/ContactFormCard";


const Contact = () => (
     <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4 max-w-7xl">
               <ContactHeader />

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    <motion.div
                         initial={{ opacity: 0, x: -30 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.7, delay: 0.1 }}
                    >
                         <ContactInfoCard />
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, x: 30 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.7, delay: 0.2 }}
                    >
                         <ContactFormCard />
                    </motion.div>
               </div>
          </div>
     </section>
);

export default Contact