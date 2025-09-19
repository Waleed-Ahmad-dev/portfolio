import { Button } from '@/components/ui/button';
import { ReactNode, memo } from 'react';

type SocialButtonProps = {
     href: string;
     icon: ReactNode;
     label: string;
};

const SocialButton = memo(({ href, icon, label }: SocialButtonProps) => (
     <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm border-border/40 hover:bg-primary/10 group"
     >
          <a
               href={href}
               target={href.startsWith('mailto:') ? '_self' : '_blank'}
               rel="noopener noreferrer"
          >
               <div className="transition-transform group-hover:scale-110">
                    {icon}
               </div>
               <span className="sr-only">{label}</span>
          </a>
     </Button>
));

SocialButton.displayName = 'SocialButton'; // Required for debugging in React DevTools
export default SocialButton;