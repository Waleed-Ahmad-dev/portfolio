// ContactForm.tsx
'use client';

import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, ChevronDown } from "lucide-react";
import { useContactForm } from "./useContactForm";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const INPUT_FIELDS = [
     { name: "name", icon: User, placeholder: "Your full name" },
     { name: "email", icon: Mail, placeholder: "your.email@example.com" },
     { name: "phone", icon: Phone, placeholder: "+92 123 456 7890" }
] as const;

const PROJECT_TYPES = [
     { value: "web", label: "Web Development" },
     { value: "mobile", label: "Mobile App" },
     { value: "design", label: "UI/UX Design" },
     { value: "consulting", label: "Consulting" },
     { value: "other", label: "Other" }
];

export const ContactForm = () => {
     const { form, onSubmit } = useContactForm();
     const formRef = useRef<HTMLFormElement>(null);

     useGSAP(() => {
          if (formRef.current) {
               gsap.fromTo(formRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
               );
          }
     });

     return (
          <Form {...form}>
               <form 
                    ref={formRef}
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="space-y-6 relative z-10"
               >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {INPUT_FIELDS.map((field) => (
                              <FormField
                                   key={field.name}
                                   control={form.control}
                                   name={field.name}
                                   render={({ field: formField }) => (
                                        <FormItem className="form-field">
                                             <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                  {field.placeholder}
                                             </FormLabel>
                                             <FormControl>
                                                  <div className="relative">
                                                       <field.icon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                                       <Input 
                                                            className="pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 
                                                                      bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                                                                      focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                                                      transition-all duration-300 shadow-lg"
                                                            {...formField} 
                                                       />
                                                  </div>
                                             </FormControl>
                                             <FormMessage className="text-xs mt-1" />
                                        </FormItem>
                                   )}
                              />
                         ))}

                         <FormField
                              control={form.control}
                              name="projectType"
                              render={({ field }) => (
                                   <FormItem className="form-field">
                                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                             Project Type
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                             <FormControl>
                                                  <SelectTrigger className="rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm focus:ring-2 focus:ring-blue-200 py-3">
                                                       <SelectValue placeholder="Select project type" />
                                                  </SelectTrigger>
                                             </FormControl>
                                             <SelectContent className="rounded-xl border-2 border-gray-200 backdrop-blur-sm">
                                                  {PROJECT_TYPES.map((type) => (
                                                       <SelectItem key={type.value} value={type.value} className="cursor-pointer">
                                                            {type.label}
                                                       </SelectItem>
                                                  ))}
                                             </SelectContent>
                                        </Select>
                                        <FormMessage className="text-xs mt-1" />
                                   </FormItem>
                              )}
                         />
                    </div>

                    <FormField
                         control={form.control}
                         name="message"
                         render={({ field }) => (
                              <FormItem className="form-field">
                                   <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Your Message
                                   </FormLabel>
                                   <FormControl>
                                        <Textarea
                                             placeholder="Tell me about your project, goals, and timeline..."
                                             className="min-h-[150px] p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 
                                                       bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                                                       focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                                                       transition-all duration-300 shadow-lg resize-none"
                                             {...field}
                                        />
                                   </FormControl>
                                   <FormMessage className="text-xs mt-1" />
                              </FormItem>
                         )}
                    />

                    <motion.div 
                         className="form-field success-animation"
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                    >
                         <Button 
                              type="submit" 
                              className="w-full py-4 rounded-xl font-bold text-lg 
                                        bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                                        hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700
                                        transition-all duration-500 shadow-2xl hover:shadow-3xl
                                        relative overflow-hidden group"
                              disabled={form.formState.isSubmitting}
                         >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                              <span className="ml-2">
                                   {form.formState.isSubmitting ? "Sending..." : "Launch Project"}
                              </span>
                         </Button>
                    </motion.div>
               </form>
          </Form>
     );
};