'use client';

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { IconInput } from "@/components/ui/IconInput";
import { User, Mail, Phone } from "lucide-react";
import { useContactForm } from "./useContactForm";

export const ContactForm = () => {
     const { form, onSubmit } = useContactForm();
     
     const inputFields = [
          { name: "name", icon: <User className="w-4 h-4" />, placeholder: "Your full name" },
          { name: "email", icon: <Mail className="w-4 h-4" />, placeholder: "your.email@example.com" },
          { name: "phone", icon: <Phone className="w-4 h-4" />, placeholder: "+92 123 456 7890" }
     ];

     return (
          <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                    {inputFields.map((field) => (
                         <FormField
                              key={field.name}
                              control={form.control}
                              name={field.name as keyof typeof form.formState.defaultValues}
                              render={({ field: formField }) => (
                                   <FormItem>
                                        <FormControl>
                                             <IconInput 
                                                  icon={field.icon} 
                                                  // placeholder={field.placeholder}
                                                  // className="border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-0"
                                                  {...formField} 
                                             />
                                        </FormControl>
                                        <FormMessage className="ml-1 text-xs" />
                                   </FormItem>
                              )}
                         />
                    ))}

                    <FormField
                         control={form.control}
                         name="message"
                         render={({ field }) => (
                              <FormItem>
                                   <FormControl>
                                        <Textarea
                                             placeholder="Tell me about your project, goals, and timeline..."
                                             className="min-h-[180px] p-6 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-0"
                                             {...field}
                                        />
                                   </FormControl>
                                   <FormMessage className="ml-1 text-xs" />
                              </FormItem>
                         )}
                    />

                    <motion.div
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                    >
                         <Button 
                              type="submit" 
                              className="w-full py-6 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                              disabled={form.formState.isSubmitting}
                         >
                              Send Message
                              <Send className="ml-2 h-5 w-5" />
                         </Button>
                    </motion.div>
               </form>
          </Form>
     );
};