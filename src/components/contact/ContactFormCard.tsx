import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const ContactFormCard = () => (
     <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 h-full">
          <CardHeader className="p-8 border-b">
               <CardTitle className="text-2xl flex items-center gap-3">
                    <Send className="w-6 h-6 text-blue-600" />
                    <span>Send a Message</span>
               </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
               <ContactForm />
          </CardContent>
     </Card>
);