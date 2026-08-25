"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

export default function ContactForm() {
  const formCode = process.env.NEXT_PUBLIC_FORM;

  if (!formCode) {
    return (
      <div className="p-6 rounded-sm border border-zinc-300 dark:border-zinc-800 bg-card text-muted-foreground font-mono text-xs text-center">
        <AlertCircle className="inline-block w-4 h-4 mr-2 mb-0.5" />
        SYSTEM NOTICE: NEXT_PUBLIC_FORM ENDPOINT ID MISSING.
      </div>
    );
  }

  const [state, handleSubmit] = useForm(formCode);

  return (
    <section
      className="relative w-full py-20 bg-background border-b border-border"
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
              transition={{ duration: 0.3 }}
              className="w-full py-16 flex flex-col items-center justify-center text-center border border-zinc-300 dark:border-zinc-800 rounded-sm bg-card"
            >
              <div className="w-12 h-12 rounded-xs bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-500/30">
                <CheckCircle2 className="w-6 h-6" strokeWidth={2} />
              </div>
              <h3 className="font-mono text-xl font-bold text-foreground mb-2 tracking-tight uppercase">
                DISPATCH_SUCCESSFUL
              </h3>
              <p className="text-muted-foreground text-xs font-mono max-w-xs mx-auto leading-relaxed">
                Transmission received. I will inspect the log and respond via email.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full bg-card border border-zinc-300 dark:border-zinc-800 rounded-sm p-6 md:p-8 shadow-sm"
            >
              {/* Header */}
              <div className="mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block mr-1.5" />
                    DIRECT_CHANNEL
                  </span>
                </div>
                <h2 className="font-mono text-2xl md:text-3xl font-extrabold text-foreground tracking-tighter flex items-center gap-2">
                  <Terminal size={22} className="text-zinc-500" />
                  INITIATE_CONTACT
                </h2>
                <p className="text-muted-foreground text-xs font-mono mt-1">
                  Transmit project details or engineering queries.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-2"
                  >
                    RETURN_EMAIL_ADDRESS
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      required
                      maxLength={254}
                      className="w-full pl-3 pr-9 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xs focus:border-foreground outline-none transition-colors text-foreground placeholder:text-zinc-500 font-mono text-xs"
                    />
                    <Mail size={16} className="absolute right-3 top-3.5 text-zinc-400 pointer-events-none" />
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-emerald-500 text-xs mt-1 font-mono"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-foreground mb-2"
                  >
                    TRANSMISSION_PAYLOAD
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Describe system architecture requirements or scope..."
                      required
                      maxLength={5000}
                      className="w-full pl-3 pr-9 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xs focus:border-foreground outline-none transition-colors resize-none text-foreground placeholder:text-zinc-500 font-mono text-xs leading-relaxed"
                    />
                    <MessageSquare size={16} className="absolute right-3 top-3.5 text-zinc-400 pointer-events-none" />
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-emerald-500 text-xs mt-1 font-mono"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-foreground text-background font-mono font-bold text-xs uppercase tracking-widest py-3.5 rounded-xs hover-tactile disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {state.submitting ? (
                      <span className="animate-pulse">TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>DISPATCH_MESSAGE</span>
                        <ArrowUpRight size={16} />
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
