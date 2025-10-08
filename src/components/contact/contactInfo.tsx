import { User, Mail, Phone, MapPin } from "lucide-react";

export const contactItems = Object.freeze([
     { 
          icon: Object.freeze(<User className="w-6 h-6" />), 
          title: "Full Name", 
          content: "Waleed Ahmad" 
     },
     { 
          icon: Object.freeze(<Mail className="w-6 h-6" />), 
          title: "Email Address", 
          content: "itswaleedqurshi@gmail.com" 
     },
     { 
          icon: Object.freeze(<Phone className="w-6 h-6" />), 
          title: "Phone Number", 
          content: "+92 303 092 5333" 
     },
     { 
          icon: Object.freeze(<MapPin className="w-6 h-6" />), 
          title: "Location", 
          content: "Available Worldwide • Remote First" 
     }
]);

export const contactTip = Object.freeze({
     title: "Pro Tip",
     content: "Include your project timeline, budget range, and specific requirements for a more accurate and faster response. I'm currently accepting new projects for Q1 2024."
});