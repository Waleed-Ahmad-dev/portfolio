import { motion } from "framer-motion";

export const ContactHeader = () => (
     <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
     >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
               Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Have a project in mind or want to discuss opportunities? Reach out and let's create something amazing together.
          </p>
     </motion.div>
);