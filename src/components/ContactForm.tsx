"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Check,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactForm() {
  const formCode: string = process.env.NEXT_PUBLIC_FORM || "";
  const [state, handleSubmit] = useForm(formCode);

  if (!process.env.NEXT_PUBLIC_FORM) {
    return (
      <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono text-xs text-center">
        <AlertCircle className="inline-block w-4 h-4 mr-2 mb-0.5" />
        System Error: NEXT_PUBLIC_FORM ID missing.
      </div>
    );
  }

  return (
    <section
      className="relative w-full py-24 bg-white dark:bg-black"
      id="contact"
    >
      <div className="max-w-xl mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          {state.succeeded ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full py-16 flex flex-col items-center justify-center text-center border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50"
            >
              <div className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center mb-6">
                <Check className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2 tracking-tight">
                Message Sent
              </h3>
              <p className="text-zinc-500 max-w-xs mx-auto leading-relaxed">
                Thank you for reaching out. I will review your inquiry and
                respond shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="w-full"
            >
              {/* Header */}
              <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] font-mono tracking-widest uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Status: Available
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tighter mb-4">
                  Let&apos;s Talk.
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                  Have a project in mind? Send a direct message.
                </p>
              </div>

              <div className="space-y-8">
                {/* Email Field */}
                <div className="group relative">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-black dark:text-white mb-2 ml-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      required
                      maxLength={254}
                      className="w-full pl-4 pr-4 py-4 bg-transparent border-b border-zinc-200 dark:border-zinc-800 focus:border-black dark:focus:border-white outline-none transition-colors duration-300 text-black dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium"
                    />
                    <div className="absolute right-0 top-4 text-zinc-300 dark:text-zinc-700 pointer-events-none">
                      <Mail size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-black dark:text-white text-xs mt-2 font-mono flex items-center gap-1 underline decoration-zinc-400"
                  />
                </div>

                {/* Message Field */}
                <div className="group relative">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-black dark:text-white mb-2 ml-1"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your project..."
                      required
                      maxLength={5000}
                      className="w-full pl-4 pr-4 py-4 bg-transparent border-b border-zinc-200 dark:border-zinc-800 focus:border-black dark:focus:border-white outline-none transition-colors duration-300 resize-none text-black dark:text-white placeholder:text-zinc-300 dark:placeholder:text-zinc-700 font-medium leading-relaxed"
                    />
                    <div className="absolute right-0 top-4 text-zinc-300 dark:text-zinc-700 pointer-events-none">
                      <MessageSquare size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-black dark:text-white text-xs mt-2 font-mono flex items-center gap-1 underline decoration-zinc-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full group bg-black dark:bg-white text-white dark:text-black font-semibold text-lg py-5 rounded-lg transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {state.submitting ? (
                      <span className="text-sm font-mono animate-pulse">
                        PROCESSING...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
