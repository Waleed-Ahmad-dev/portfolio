'use client';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
     Form, 
     FormControl, 
     FormField, 
     FormItem, 
     FormLabel, 
     FormMessage 
} from '@/components/ui/form';
import { toast } from 'sonner';
import { Mail, Phone, User, MessageSquare, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const formSchema = z.object({
     name: z.string().min(2, { message: "Name must be at least 2 characters." }),
     email: z.string().email({ message: "Please enter a valid email address." }),
     phone: z.string().min(10, { message: "Please enter a valid phone number." }),
     message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
     const form = useForm<z.infer<typeof formSchema>>({
          resolver: zodResolver(formSchema),
          defaultValues: { name: "", email: "", phone: "", message: "" },
     });

     function onSubmit(values: z.infer<typeof formSchema>) {
          console.log(values);
          toast.success('Message sent successfully!', {
               description: "Thank you for reaching out. I'll get back to you soon.",
               duration: 5000,
          });
          form.reset();
     }

     const contactItems = [
          { icon: <User className="w-5 h-5" />, title: "Name", content: "Waleed Ahmad" },
          { icon: <Mail className="w-5 h-5" />, title: "Email", content: "itswaleedqurshi@gmail.com" },
          { icon: <Phone className="w-5 h-5" />, title: "Phone", content: "+92 303 092 5333" }
     ];

     return (
          <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
               <div className="container mx-auto px-4 max-w-7xl">
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                         {/* Contact Information */}
                         <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.7, delay: 0.1 }}
                         >
                              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 h-full">
                                   <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                                        <CardTitle className="flex items-center gap-3 text-2xl">
                                             <Mail className="w-8 h-8" />
                                             <span>Contact Information</span>
                                        </CardTitle>
                                   </CardHeader>
                                   <CardContent className="p-8">
                                        <div className="space-y-8">
                                             {contactItems.map((item, index) => (
                                                  <motion.div 
                                                       key={index}
                                                       initial={{ opacity: 0, y: 20 }}
                                                       animate={{ opacity: 1, y: 0 }}
                                                       transition={{ delay: 0.2 + index * 0.1 }}
                                                       className="flex items-start gap-5"
                                                  >
                                                       <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full flex items-center justify-center mt-1">
                                                            {item.icon}
                                                       </div>
                                                       <div>
                                                            <Label className="text-muted-foreground text-sm uppercase tracking-wider">{item.title}</Label>
                                                            <p className="text-lg font-medium">{item.content}</p>
                                                       </div>
                                                  </motion.div>
                                             ))}
                                        </div>

                                        <motion.div 
                                             initial={{ opacity: 0 }}
                                             animate={{ opacity: 1 }}
                                             transition={{ delay: 0.5 }}
                                             className="mt-16"
                                        >
                                             <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-200/50 dark:border-blue-900/50">
                                                  <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
                                                       <MessageSquare className="w-5 h-5 text-blue-600" />
                                                       Quick Tip
                                                  </h3>
                                                  <p className="text-muted-foreground">
                                                       Please include details about your project timeline and budget for faster response. I typically reply within 24 hours.
                                                  </p>
                                             </div>
                                        </motion.div>
                                   </CardContent>
                              </Card>
                         </motion.div>

                         {/* Contact Form */}
                         <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.7, delay: 0.2 }}
                         >
                              <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 h-full">
                                   <CardHeader className="p-8 border-b">
                                        <CardTitle className="text-2xl flex items-center gap-3">
                                             <Send className="w-6 h-6 text-blue-600" />
                                             <span>Send a Message</span>
                                        </CardTitle>
                                   </CardHeader>
                                   <CardContent className="p-8">
                                        <Form {...form}>
                                             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
                                                  {[
                                                       { name: "name", icon: <User className="w-4 h-4" />, placeholder: "Your full name" },
                                                       { name: "email", icon: <Mail className="w-4 h-4" />, placeholder: "your.email@example.com" },
                                                       { name: "phone", icon: <Phone className="w-4 h-4" />, placeholder: "+92 123 456 7890" }
                                                  ].map((field, index) => (
                                                       <FormField
                                                            key={field.name}
                                                            control={form.control}
                                                            name={field.name as keyof z.infer<typeof formSchema>}
                                                            render={({ field: formField }) => (
                                                                 <FormItem>
                                                                      <div className="relative">
                                                                           <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                                                                                {field.icon}
                                                                           </div>
                                                                           <FormControl>
                                                                                <Input 
                                                                                     placeholder={field.placeholder}
                                                                                     className="pl-10 py-6 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-0"
                                                                                     {...formField} 
                                                                                />
                                                                           </FormControl>
                                                                      </div>
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
                                                       >
                                                            Send Message
                                                            <Send className="ml-2 h-5 w-5" />
                                                       </Button>
                                                  </motion.div>
                                             </form>
                                        </Form>
                                   </CardContent>
                              </Card>
                         </motion.div>
                    </div>
               </div>
          </section>
     );
};

export default Contact;