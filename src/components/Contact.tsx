'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from 'sonner';
import { Mail, Phone, User } from 'lucide-react';

const formSchema = z.object({
     name: z.string().min(2, {
          message: "Name must be at least 2 characters.",
     }),
     email: z.string().email({
          message: "Please enter a valid email address.",
     }),
     phone: z.string().min(10, {
          message: "Please enter a valid phone number.",
     }),
     message: z.string().min(10, {
          message: "Message must be at least 10 characters.",
     }),
});

const Contact = () => {
     const form = useForm<z.infer<typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues: {
               name: "",
               email: "",
               phone: "",
               message: "",
          },
     });

     function onSubmit(values: z.infer<typeof formSchema>) {
          // Here you would typically make an API request
          console.log(values);

          // Show success toast
          toast.success('Message sent successfully!', {
               description: "Thank you for reaching out. I'll get back to you soon.",
               duration: 5000,
          });

          // Reset form
          form.reset();
     }

     return (
          <section id="contact" className="py-20 bg-muted/50">
               <div className="container mx-auto px-4">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5 }}
                         className="text-center mb-16"
                    >
                         <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
                         <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                         <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5 }}
                              className="flex justify-center"
                         >
                              <div className="relative w-full max-w-md">
                                   <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30 animate-pulse" />
                                   <div className="relative bg-background border border-border rounded-3xl p-8">
                                        <div className="text-center mb-8">
                                             <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                  <Mail className="w-8 h-8 text-white" />
                                             </div>
                                             <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                                             <p className="text-muted-foreground">
                                                  Have a project in mind? Feel free to reach out!
                                             </p>
                                        </div>
                                        <div className="space-y-6">
                                             <div className="flex items-center gap-4">
                                                  <div className="bg-muted p-3 rounded-full">
                                                       <User className="w-5 h-5 text-primary" />
                                                  </div>
                                                  <div>
                                                       <h4 className="font-semibold">Name</h4>
                                                       <p className="text-muted-foreground">Waleed Ahmad</p>
                                                  </div>
                                             </div>

                                             <div className="flex items-center gap-4">
                                                  <div className="bg-muted p-3 rounded-full">
                                                       <Mail className="w-5 h-5 text-primary" />
                                                  </div>
                                                  <div>
                                                       <h4 className="font-semibold">Email</h4>
                                                       <p className="text-muted-foreground">itswaleedqurshi@gmai.com</p>
                                                  </div>
                                             </div>
                                             <div className="flex items-center gap-4">
                                                  <div className="bg-muted p-3 rounded-full">
                                                       <Phone className="w-5 h-5 text-primary" />
                                                  </div>
                                                  <div>
                                                       <h4 className="font-semibold">Phone</h4>
                                                       <p className="text-muted-foreground">+92 303 092 5333</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </motion.div>

                         <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                         >
                              <Form {...form}>
                                   <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <FormField
                                             control={form.control}
                                             name="name"
                                             render={({ field }) => (
                                                  <FormItem>
                                                       <FormLabel>Name</FormLabel>
                                                       <FormControl>
                                                            <div className="relative">
                                                                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                                 <Input 
                                                                      placeholder="Your name" 
                                                                      className="pl-10"
                                                                      {...field} 
                                                                 />
                                                            </div>
                                                       </FormControl>
                                                       <FormMessage />
                                                  </FormItem>
                                             )}
                                        />

                                        <FormField
                                             control={form.control}
                                             name="email"
                                             render={({ field }) => (
                                                  <FormItem>
                                                       <FormLabel>Email</FormLabel>
                                                       <FormControl>
                                                            <div className="relative">
                                                                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                                 <Input 
                                                                      placeholder="your.email@example.com" 
                                                                      className="pl-10"
                                                                      {...field} 
                                                                 />
                                                            </div>
                                                       </FormControl>
                                                       <FormMessage />
                                                  </FormItem>
                                             )}
                                        />

                                        <FormField
                                             control={form.control}
                                             name="phone"
                                             render={({ field }) => (
                                                  <FormItem>
                                                       <FormLabel>Phone</FormLabel>
                                                       <FormControl>
                                                            <div className="relative">
                                                                 <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                                                 <Input 
                                                                      placeholder="+92 123 456 7890" 
                                                                      className="pl-10"
                                                                      {...field} 
                                                                 />
                                                            </div>
                                                       </FormControl>
                                                       <FormMessage />
                                                  </FormItem>
                                             )}
                                        />

                                        <FormField
                                             control={form.control}
                                             name="message"
                                             render={({ field }) => (
                                                  <FormItem>
                                                       <FormLabel>Message</FormLabel>
                                                       <FormControl>
                                                            <Textarea
                                                                 placeholder="How can I help you?"
                                                                 className="min-h-[150px]"
                                                                 {...field}
                                                            />
                                                       </FormControl>
                                                       <FormMessage />
                                                  </FormItem>
                                             )}
                                        />

                                        <Button 
                                             type="submit" 
                                             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity"
                                        >
                                             Submit Message
                                        </Button>
                                   </form>
                              </Form>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
};

export default Contact;