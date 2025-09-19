import { User, Mail, Phone } from "lucide-react";

// Memoize static data to prevent re-renders and object recreation
export const contactItems = Object.freeze([
     { 
          icon: Object.freeze(<User className="w-5 h-5" />), 
          title: "Name", 
          content: "Waleed Ahmad" 
     },
     { 
          icon: Object.freeze(<Mail className="w-5 h-5" />), 
          title: "Email", 
          content: "itswaleedqurshi@gmail.com" 
     },
     { 
          icon: Object.freeze(<Phone className="w-5 h-5" />), 
          title: "Phone", 
          content: "+92 303 092 5333" 
     }
]);

// Freeze nested object to prevent mutations and signal React's reconciliation to skip
export const contactTip = Object.freeze({
     title: "Quick Tip",
     content: "Please include details about your project timeline and budget for faster response. I typically reply within 24 hours."
});