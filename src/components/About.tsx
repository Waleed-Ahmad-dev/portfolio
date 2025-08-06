"use client";

import { ContentSection } from "./about/ContentSection";
import { FloatingParticles } from "./about/FloatingParticles";
import { ProfileCard } from "./about/ProfileCard";
import { SectionHeader } from "./about/SectionHeader";
import { TechStackSection } from "./about/TechStackSection";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-[#0A0E17] via-[#0C1120] to-[#0A0E17] relative overflow-hidden">
      <FloatingParticles />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <SectionHeader />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <ProfileCard />
          <ContentSection />
        </div>

        <TechStackSection />
      </div>
    </section>
  );
};

export default About