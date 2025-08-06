"use client";
import { motion } from 'framer-motion';
import DecorativeBackground from './footer/DecorativeBackground';
import { containerVariants } from './footer/variants';
import BrandSection from './footer/BrandSection';
import NavigationSection from './footer/NavigationSection';
import PreferencesSection from './footer/PreferencesSection';
import CopyrightSection from './footer/CopyrightSection';


const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background/80 backdrop-blur-2xl py-14 relative overflow-hidden">
      <DecorativeBackground />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] xl:grid-cols-[2fr_1fr_1fr_1fr] gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <BrandSection />
          <NavigationSection />
          <PreferencesSection />
        </motion.div>

        <CopyrightSection />
      </div>
    </footer>
  );
};

export default Footer;