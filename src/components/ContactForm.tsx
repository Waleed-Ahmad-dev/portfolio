/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function ContactForm() {
  if (!process.env.NEXT_PUBLIC_FORM) {
    return (
      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-center font-mono text-sm">
        <AlertCircle className="inline-block w-4 h-4 mr-2" />
        Error: NEXT_PUBLIC_FORM ID not found in environment variables.
      </div>
    );
  }

  const formCode: string = process.env.NEXT_PUBLIC_FORM;
  const [state, handleSubmit] = useForm(formCode);

  return (
    <section className="relative w-full py-10" id="contact">
      <div className="max-w-md mx-auto relative z-10">
        {/* Decorative ambient glow behind the form */}
        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />

        <AnimatePresence mode="wait">
          {state.succeeded ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-panel p-8 rounded-3xl text-center border border-secondary/20 shadow-[0_0_40px_-10px_var(--color-secondary)] flex flex-col items-center justify-center gap-4 bg-background/60 backdrop-blur-xl"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-2 ring-1 ring-secondary/30">
                <CheckCircle2 className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Transmission Received!
                </h3>
                <p className="text-blue-200/80 text-sm leading-relaxed">
                  Your message has been successfully logged in the system.{" "}
                  <br />I will establish a connection shortly.
                </p>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-linear-to-r from-primary via-secondary to-primary rounded-full mt-4 w-full opacity-50"
              />
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 bg-background/40 backdrop-blur-md shadow-2xl relative overflow-hidden group"
            >
              {/* Header */}
              <div className="mb-8 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  OPEN FOR WORK
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Initialize <span className="text-secondary">Uplink</span>
                </h2>
                <p className="text-blue-200/60 text-sm mt-2">
                  Send a secure message to my terminal.
                </p>
              </div>

              <div className="space-y-6 relative z-10">
                {/* Email Field */}
                <div className="group/input relative">
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <div className="absolute left-4 top-3.5 text-blue-300/50 group-focus-within/input:text-primary transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="protocol@example.com"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:bg-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-blue-100 placeholder:text-blue-200/30"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1"
                  />
                </div>

                {/* Message Field */}
                <div className="group/input relative">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <div className="absolute left-4 top-3.5 text-blue-300/50 group-focus-within/input:text-primary transition-colors">
                    <MessageSquare size={18} />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Enter mission details..."
                    required
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:bg-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none text-blue-100 placeholder:text-blue-200/30"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1 ml-1 flex items-center gap-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full relative overflow-hidden group/btn bg-secondary hover:bg-yellow-400 text-black font-bold py-3.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(var(--secondary),0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {state.submitting ? (
                      <>
                        <Sparkles className="animate-spin w-4 h-4" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Launch Message
                        <Send
                          size={16}
                          className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </span>

                  {/* Button Glare Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent z-0" />
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}