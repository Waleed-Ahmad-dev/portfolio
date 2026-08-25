import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ScrollProgress from "@/components/ScrollProgress";

export default function Portfolio() {
  return (
    <div className="relative w-full min-h-screen">
      {/* SEO: HIDDEN PRIMARY HEADING */}
      <h1 className="sr-only">
        Waleed Ahmad (Shadow Scripter) - Hire Full Stack Architect & Next.js
        Developer
      </h1>

      <ScrollProgress />

      <Navbar />

      <div className="flex flex-col w-full pb-20">
        <Hero />

        <div className="flex flex-col gap-32 md:gap-48 relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 mt-24 md:mt-32">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <ContactForm />
        </div>

        <div className="mt-32 md:mt-48">
          <Footer />
        </div>
      </div>
    </div>
  );
}