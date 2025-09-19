import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { ContactInfoItem } from "./ContactInfoItem";
import { contactItems, contactTip } from "./contactInfo";
import { memo, useMemo } from "react";

// Memoize component to prevent unnecessary re-renders
export const ContactInfoCard = memo(function ContactInfoCard() {
     // Precompute static content with useMemo
     const contactItemsList = useMemo(() => 
          contactItems.map((item, index) => (
               <ContactInfoItem 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                    index={index}
               />
          )), []);

     const tipSection = useMemo(() => (
          <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-16"
          >
               <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-200/50 dark:border-blue-900/50">
                    <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
                         <MessageSquare className="w-5 h-5 text-blue-600" />
                         {contactTip.title}
                    </h3>
                    <p className="text-muted-foreground">
                         {contactTip.content}
                    </p>
               </div>
          </motion.div>
     ), []);

     return (
          <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 h-full">
               <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                         <Mail className="w-8 h-8" />
                         <span>Contact Information</span>
                    </CardTitle>
               </CardHeader>
               <CardContent className="p-8">
                    <div className="space-y-8">
                         {contactItemsList}
                    </div>
                    {tipSection}
               </CardContent>
          </Card>
     );
});