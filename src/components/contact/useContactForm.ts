// useContactForm.ts
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { contactFormSchema, ContactFormValues } from "./contactScheme";

export const useContactForm = () => {
     const form = useForm<ContactFormValues>({
          resolver: zodResolver(contactFormSchema),
          defaultValues: { 
               name: "", 
               email: "", 
               phone: "", 
               message: "",
               projectType: "web"
          },
     });

     useGSAP(() => {
          gsap.fromTo(".form-field", 
               { y: 30, opacity: 0 },
               { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
          );
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
          
               // Animation on success
               gsap.to(".success-animation", {
                    scale: 1.1,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1
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