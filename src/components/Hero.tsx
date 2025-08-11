'use client';
import { useTheme } from 'next-themes';
import BackgroundEffects from './hero/BackgroundEffects';
import HeroContent from './hero/HeroContent';
import ProfileCard from './hero/ProfileCard';
import ScrollIndicator from './hero/ScrollIndicator';


const Hero = () => {
     const { theme } = useTheme();
     const isDark = theme === 'dark';

     return (
          <section 
               id="home" 
               className="min-h-screen flex flex-col justify-center pt-16 pb-20 relative overflow-hidden"
          >
               <BackgroundEffects isDark={isDark} />

               <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                         <HeroContent />
                         <ProfileCard />
                    </div>

                    <ScrollIndicator />
               </div>
          </section>
     );
};

export default Hero;