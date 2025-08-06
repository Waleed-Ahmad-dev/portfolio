import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactFormSchema, ContactFormValues } from "./contactScheme";

export const useContactForm = () => {
     const form = useForm<ContactFormValues>({
          resolver: zodResolver(contactFormSchema),
          defaultValues: { name: "", email: "", phone: "", message: "" },
     });

     const onSubmit = async (values: ContactFormValues) => {
          try {
               const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
               });

               if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to send message');
               }

               toast.success('Message sent successfully!', {
                    description: "Thank you for reaching out. I'll get back to you soon.",
                    duration: 5000,
               });
               form.reset();
          } catch (error: any) {
               toast.error('Failed to send message', {
                    description: error.message || 'Please try again later.',
                    duration: 5000,
               });
          }
     };

     return { form, onSubmit };
};