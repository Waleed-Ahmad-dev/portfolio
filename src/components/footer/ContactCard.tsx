import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ContactCard = () => (
     <div className="mt-8 bg-gradient-to-br from-blue-500/5 to-purple-600/10 border border-border/40 rounded-xl p-5 backdrop-blur-sm">
          <h4 className="font-medium mb-3">Get in touch</h4>
          <p className="text-sm text-muted-foreground mb-4">
               Have a project in mind? Let's collaborate.
          </p>
          <Button 
               asChild
               className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-purple-600/30 transition-all"
          >
               <Link href="#contact">
                    Contact Me
               </Link>
          </Button>
     </div>
);

export default ContactCard;