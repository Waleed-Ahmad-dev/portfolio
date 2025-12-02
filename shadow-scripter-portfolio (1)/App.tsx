import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Smartphone, Menu, X, ChevronRight, Eye, Terminal } from 'lucide-react';
import BackgroundEffect from './components/BackgroundEffect';
import ShadowCloneChat from './components/ShadowCloneChat';
import CustomCursor from './components/CustomCursor';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCE, SOCIALS } from './constants';

const ItachiMangekyouLoader = () => (
  <motion.div 
    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 1.5, delay: 2.5, ease: "easeInOut" }}
    onAnimationComplete={() => document.body.style.overflowY = 'auto'}
  >
    {/* Itachi's Mangekyou SVG */}
    <div className="relative w-40 h-40">
      <motion.svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Sclera/Red Iris Background */}
        <circle cx="50" cy="50" r="45" fill="#990000" />
        
        {/* The Black Pattern (Itachi's Shuriken Shape) */}
        <motion.g 
          animate={{ rotate: 360 }} 
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ originX: "50px", originY: "50px" }}
        >
          <path 
            d="M50 50 L50 5 Q65 15 80 25 L50 50 L80 25 Q75 45 75 60 L50 50 L75 60 Q50 85 35 75 L50 50 L35 75 Q15 65 20 45 L50 50 L20 45 Q20 20 50 5 Z" 
            fill="black" 
            stroke="black"
            strokeWidth="1"
            // Simplifying the shape to resemble the 3-blade curved pinwheel
            // Actually, Itachi's is 3 intersecting curves. Let's use a simpler approximate path for clarity.
          />
           <path 
             d="M50 50 
                C 50 20, 80 20, 80 50
                C 80 80, 50 80, 50 50
                Z"
             fill="black"
             transform="rotate(0 50 50)"
           />
           {/* Itachi's is actually 3 distinct blades. Let's draw 3 distinct paths rotated. */}
           {[0, 120, 240].map((angle) => (
             <path
               key={angle}
               d="M50 50 Q 80 50 90 20 Q 60 30 50 50"
               fill="black"
               transform={`rotate(${angle} 50 50)`}
             />
           ))}
           <circle cx="50" cy="50" r="6" fill="black" />
        </motion.g>
      </motion.svg>
    </div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="mt-8 text-center"
    >
      <h2 className="font-cinzel text-2xl tracking-[0.5em] text-red-600 font-bold glitch-text" data-text="TSUKUYOMI">
        TSUKUYOMI
      </h2>
      <p className="font-mono text-xs text-red-900 mt-2 animate-pulse">
        Initializing Genjutsu Environment...
      </p>
    </motion.div>
  </motion.div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 font-cinzel ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-red-900/50 py-2 shadow-[0_4px_20px_rgba(136,0,0,0.1)]' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-red-600 flex items-center gap-2 group">
            <div className="relative">
               <Eye className="w-6 h-6 animate-pulse text-red-500" />
               <div className="absolute inset-0 bg-red-500 blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-white tracking-widest group-hover:text-red-500 transition-colors">SHADOW</span>
            <span className="text-red-700">SCRIPTER</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-red-500 transition-colors tracking-widest text-xs font-bold relative group uppercase"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white hover:text-red-500">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-neutral-950 border-b border-red-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-red-500 hover:bg-red-900/10 rounded-md font-cinzel"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Red Moon Background Effect */}
      <div className="absolute top-10 right-10 w-32 h-32 md:w-64 md:h-64 bg-red-700 rounded-full blur-[60px] opacity-20 animate-pulse-fast"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-900/10 to-transparent"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-red-900/20 border border-red-900/50 px-4 py-1 rounded-full text-red-500 font-mono text-xs tracking-[0.2em] flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            SYSTEM: ONLINE
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-9xl font-cinzel font-bold text-white mb-2 glitch-text tracking-tighter"
          data-text={PERSONAL_INFO.name.toUpperCase()}
        >
          {PERSONAL_INFO.name.toUpperCase()}
        </motion.h1>

        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="text-red-600 font-cinzel text-xl md:text-2xl tracking-[0.5em] mb-8"
        >
          {PERSONAL_INFO.alias}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 font-light mb-12 font-tech max-w-2xl mx-auto border-l-2 border-red-800 pl-6 text-left"
        >
          {PERSONAL_INFO.tagline} <br/>
          <span className="text-sm text-gray-600 mt-2 block">Specializing in Full-Stack Development & Scalable Systems</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center font-mono"
        >
          <a href="#projects" className="px-8 py-4 bg-red-800/80 text-white font-bold rounded-sm hover:bg-red-700 transition-all border border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] flex items-center gap-2 group">
            <Terminal className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            Explore Projects
          </a>
          <a href="#contact" className="px-8 py-4 bg-transparent border border-neutral-700 text-gray-300 rounded-sm hover:border-red-500 hover:text-red-500 transition-all flex items-center gap-2">
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div 
          className="mt-16 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {SOCIALS.map(s => (
             <a key={s.platform} href={s.url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-red-500 hover:scale-110 transition-all duration-300">
               {s.icon === 'Github' && <Github size={28} />}
               {s.icon === 'Linkedin' && <Linkedin size={28} />}
             </a>
          ))}
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-500 hover:text-red-500 hover:scale-110 transition-all duration-300">
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-20 text-center relative z-10">
    <div className="inline-block relative">
      <h2 className="text-4xl md:text-6xl font-cinzel font-bold text-white mb-2 z-10 relative">
        {title}
      </h2>
      <div className="absolute -top-6 -left-6 text-8xl text-red-900/10 font-cinzel font-bold whitespace-nowrap select-none blur-[2px]">
        {title}
      </div>
    </div>
    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-4"></div>
    {subtitle && <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">{subtitle}</p>}
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="The Ninja Way" subtitle="Bio & Origins" />
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative flex justify-center"
          >
            {/* Aesthetic Avatar placeholder - Sharingan Eye motif */}
            <div className="w-64 h-64 md:w-80 md:h-80 border border-red-900/50 rounded-full relative flex items-center justify-center bg-black shadow-[0_0_50px_rgba(100,0,0,0.2)]">
               <div className="absolute inset-2 border border-red-800/30 rounded-full border-dashed animate-spin-slow"></div>
               <div className="absolute inset-8 border border-red-700/20 rounded-full"></div>
               <div className="text-center">
                 <h1 className="text-6xl font-cinzel text-red-800 font-bold opacity-50">WA</h1>
                 <p className="text-xs text-red-500 font-mono mt-2 tracking-widest">LEVEL 16</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-3 font-tech text-gray-300 leading-relaxed text-lg space-y-6"
          >
            <div className="bg-neutral-900/50 p-6 border-l-4 border-red-700 rounded-r-lg">
              <p className="text-xl italic text-gray-100 mb-2">"People live their lives bound by what they accept as correct and true. That is how they define 'Reality'."</p>
            </div>
            
            <p className="text-gray-400">
              I go by <span className="text-red-500 font-bold">Shadow Scripter</span>. 
              My real name is <span className="text-white">Waleed Ahmad</span>.
            </p>
            <p>
              {PERSONAL_INFO.about}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8 font-mono text-sm">
               <div className="bg-black border border-red-900/30 p-4 rounded hover:border-red-600 transition-colors">
                  <span className="text-red-500 block mb-1">Current Status</span>
                  Full-Stack Intern
               </div>
               <div className="bg-black border border-red-900/30 p-4 rounded hover:border-red-600 transition-colors">
                  <span className="text-red-500 block mb-1">Focus</span>
                  Backend & Scalable Systems
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <SectionTitle title="Arsenal" subtitle="Jutsu & Techniques" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/80 border border-neutral-800 p-6 rounded-sm hover:border-red-700 transition-all group hover:-translate-y-2 hover:shadow-[0_5px_15px_rgba(200,0,0,0.1)]"
            >
              <div className="w-10 h-10 bg-red-900/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-900/40 transition-colors">
                {category.title.includes("Frontend") && <Smartphone className="w-5 h-5 text-red-500" />}
                {category.title.includes("Backend") && <Server className="w-5 h-5 text-red-500" />}
                {category.title.includes("DevOps") && <Database className="w-5 h-5 text-red-500" />}
                {category.title.includes("Languages") && <Code className="w-5 h-5 text-red-500" />}
              </div>
              
              <h3 className="text-xl font-bold text-gray-200 mb-4 font-cinzel border-b border-neutral-800 pb-2 group-hover:border-red-900">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map(skill => (
                  <li key={skill} className="text-gray-400 flex items-center gap-3 text-sm font-mono group-hover:text-white transition-colors">
                    <span className="w-1 h-1 bg-red-600 rotate-45"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 bg-neutral-900/20 border-y border-neutral-900">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="Chronicles" subtitle="Professional Journey" />
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-red-900 before:to-transparent">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon on the line */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-600 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                 <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-black border border-neutral-800 rounded shadow-sm hover:border-red-800 transition-colors">
                <div className="flex justify-between items-center mb-2">
                   <h3 className="font-bold text-white text-lg font-cinzel">{exp.role}</h3>
                   <span className="text-red-500 font-mono text-xs border border-red-900/30 px-2 py-1 rounded">{exp.period}</span>
                </div>
                <h4 className="text-gray-400 font-medium mb-3">{exp.company}</h4>
                <p className="text-gray-500 text-sm font-tech leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Genjutsu Works" subtitle="Selected Projects" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-950/50 backdrop-blur-sm border border-neutral-900 rounded overflow-hidden group hover:border-red-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(100,0,0,0.15)] flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-100 font-cinzel group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                     <span className="w-2 h-2 rounded-full bg-red-600/50 group-hover:bg-red-500 transition-colors"></span>
                     <span className="w-2 h-2 rounded-full bg-red-600/30 group-hover:bg-red-500/70 transition-colors"></span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] font-mono uppercase tracking-wider text-red-400/80 bg-red-950/30 border border-red-900/20 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-black/50 border-t border-neutral-900 flex justify-between items-center group-hover:bg-red-950/10 transition-colors">
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white flex items-center gap-1 text-xs uppercase font-bold tracking-wider transition-colors">
                      <Github size={14} /> Source
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-red-500 flex items-center gap-1 text-xs uppercase font-bold tracking-wider transition-colors">
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <SectionTitle title="Final Valley" subtitle="Initiate Contact" />
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-tech">
          "No matter how powerful you become, do not try to shoulder everything alone." <br/>
          <span className="text-sm text-gray-500 mt-2 block">- Itachi Uchiha</span>
        </p>
        
        <div className="flex justify-center">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 font-medium text-white transition-all duration-300 hover:w-56 hover:bg-red-900/20 border border-neutral-800 hover:border-red-600 px-8"
          >
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/10"></div>
            </div>
            <span className="mr-2"><Mail size={18}/></span>
            <span className="font-cinzel tracking-widest">Send Scroll</span>
          </a>
        </div>

        <div className="mt-20 border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs font-mono uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Waleed Ahmad. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Forged in the <span className="text-red-700">Shadows</span>
          </p>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500); // Increased slightly for the Mangekyou animation to finish
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen text-gray-200 selection:bg-red-900 selection:text-white">
      <CustomCursor />
      {loading ? (
        <ItachiMangekyouLoader />
      ) : (
        <>
          <BackgroundEffect />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <ExperienceTimeline />
            <Projects />
            <Contact />
          </main>
          <ShadowCloneChat />
        </>
      )}
    </div>
  );
}

export default App;