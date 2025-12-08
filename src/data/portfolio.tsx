import { Layout, Database, Cpu, Code, LucideIcon } from "lucide-react";

// --- TYPES (Architectural Improvement for Type Safety) ---
export interface Socials {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface PersonalInfo {
  name: string;
  alias: string;
  role: string;
  age: number;
  location: string;
  tagline: string;
  bio: string;
  email: string;
  socials: Socials;
}

export interface HeroData {
  status: string;
  heading: {
    start: string;
    highlight: string;
    end: string;
  };
  subHeading: {
    text: string;
  };
  buttons: {
    primary: string;
    secondary: string;
  };
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: LucideIcon;
  color: "yellow" | "blue"; // STRICT: Blue/Yellow Theme Only
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  desc: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  status: string;
  tech: string[] | string;
  desc: string;
  link: string;
  github: string | null;
  name?: string; // For playground items
  type?: string; // For playground items
}

export interface NavLink {
  id: string;
  label: string;
  link: string;
}

// --- PERSONAL INFO ---
export const personalInfo: PersonalInfo = {
  name: "Waleed Ahmad",
  alias: "Shadow Scripter",
  role: "Full-Stack Architect",
  age: 16,
  location: "Pakistan",
  tagline: "Architecting scalable digital realms from the shadows.",
  bio: "I’m a 16-year-old full-stack developer engineering production-scale applications. I manage end-to-end architecture, backend services, and modern front-end frameworks. O-Levels student during school hours — lead engineer on real enterprise projects after hours.",
  email: "itswaleedqureshi@gmail.com",
  socials: {
    github: "https://github.com/Waleed-Ahmad-dev",
    linkedin: "https://linkedin.com/in/waleed-ahmed2009",
    instagram: "https://instagram.com/shadow.scripter",
  },
};

// --- HERO SECTION DATA ---
export const heroData: HeroData = {
  status: "System Online",
  heading: {
    start: "Code in the",
    highlight: "Shadows.",
    end: "Brilliance on the Screen.",
  },
  subHeading: {
    text: "I manage end-to-end architecture, backend services, and modern front-end frameworks. Building enterprise-grade systems while balancing O-Levels.",
  },
  buttons: {
    primary: "View Projects",
    secondary: "GitHub",
  },
};

// --- SKILL GROUPS ---
// UPDATED: Remapped strict color palette (Blue & Yellow)
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend & Mobile",
    icon: Layout,
    color: "yellow", // Highlight/Vibrant
    skills: [
      "Next.js 16",
      "React",
      "React Native (Expo)",
      "TypeScript",
      "Tailwind CSS",
      "Three.js / Framer",
      "Vite",
    ],
  },
  {
    id: "backend",
    title: "Backend Architecture",
    icon: Database,
    color: "blue", // Deep/Structure
    skills: [
      "Node.js / Express",
      "NestJS",
      "PostgreSQL / Prisma",
      "MongoDB",
      "Redis",
      "Python (FastAPI)",
      "Socket.io",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: Cpu,
    color: "blue", // Deep/Structure
    skills: [
      "Docker",
      "Linux (Arch/Ubuntu)",
      "AWS / Google Cloud",
      "GitHub Actions",
      "Nginx",
      "Vercel",
    ],
  },
  {
    id: "languages",
    title: "Core Languages",
    icon: Code,
    color: "yellow", // Accent/Core
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "SQL",
      "Bash / PowerShell",
      "Go (Learning)",
    ],
  },
];

// --- EXPERIENCE TIMELINE ---
export const experience: ExperienceItem[] = [
  {
    company: "Premier Choice International",
    role: "Full Stack Intern (Lead)",
    period: "Oct 2025 – Present",
    desc: [
      "Spearheading the architecture of a proprietary Real Estate CMS using Node.js, React, and PostgreSQL.",
      "Developed 'Sign App', an internal microservice automating email signatures for the workforce.",
      "Implementing Role-Based Access Control (RBAC) and complex data modeling for asset inventory.",
    ],
  },
  {
    company: "Firefly Tech Solutions",
    role: "Software Development Intern",
    period: "Jan 2025 – June 2025",
    desc: [
      "Optimized legacy codebases, reducing load times and improving maintainability.",
      "Collaborated on debugging critical web application features ensuring 99% uptime.",
      "Bridged the gap between design and functionality using modern frontend practices.",
    ],
  },
  {
    company: "Freelance / Community",
    role: "Technical Instructor",
    period: "2024 – Present",
    desc: [
      "Delivered professional hands-on training for the MERN Stack (MongoDB, Express, React, Node).",
      "Mentored peers in debugging complex React state logic and API integration.",
      "Provided crash courses on Version Control (Git) and Deployment workflows.",
    ],
  },
  {
    company: "The Odin Project",
    role: "Open Source Scholar",
    period: "Jan 2024 – Dec 2024",
    desc: [
      "Completed a rigorous, self-paced Full Stack curriculum at age 14.",
      "Mastered the foundations of the web (HTML, CSS, JS) through building 15+ projects.",
      "Cultivated the discipline to code daily while balancing full-time academic studies.",
    ],
  },
];

// --- FEATURED PROJECTS ---
export const featuredProjects: ProjectItem[] = [
  {
    title: "Premier Choice CMS",
    category: "Enterprise Architecture",
    status: "In Production",
    tech: ["Node.js", "React", "PostgreSQL", "Docker"],
    desc: "A monolithic content management system engineered for real estate asset management. Handles complex inventory logic, sales data, and automated workflows.",
    link: "https://cms.premierchoiceint.online",
    github: null,
  },
  {
    title: "PCI Sign App",
    category: "Microservice",
    status: "Live",
    tech: ["JavaScript", "HTML", "DOM Manipulation"],
    desc: "An internal tool developed for Premier Choice International to automate the generation of standardized corporate email signatures.",
    link: "https://sign.pcirealestate.site/",
    github: "https://github.com/Waleed-Ahmad-dev/Sign-app",
  },
  {
    title: "Quranic Transformation",
    category: "EdTech / LMS",
    status: "Beta",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    desc: "A spiritual Learning Management System (LMS) designed to transform religious education. Features user progress tracking and multimedia content delivery.",
    link: "https://quranic-transformation.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Quranic-Transformation",
  },
  {
    title: "AI Attorney Backend",
    category: "API Service",
    status: "Live",
    tech: ["Node.js", "Express", "AI Integration"],
    desc: "The secure backbone for a mobile legal assistant. Built RESTful APIs to handle legal queries, context management, and user authentication.",
    link: "https://www.aiattorney.com.pk/",
    github: null,
  },
  {
    title: "Writer's Haven",
    category: "Productivity",
    status: "Development",
    tech: ["Next.js", "Tailwind", "Local Storage"],
    desc: "A minimalist digital sanctuary for authors. Features distraction-free writing modes, custom themes, and local-first data persistence.",
    link: "https://notes-app-six-green.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/notes_app",
  },
];

// --- PLAYGROUND / EXPERIMENTS ---
export const playground: ProjectItem[] = [
  {
    title: "Xora", // Normalized key to 'title' for consistency, or keep 'name' if UI splits logic
    name: "Xora",
    category: "SaaS Landing",
    status: "Demo",
    tech: "React / Tailwind",
    link: "https://xora-shadow-scripter.netlify.app/",
    github: "https://github.com/Waleed-Ahmad-dev/Xora",
    desc: "Modern SaaS UI with complex gradients.",
  },
  {
    title: "Yoom",
    name: "Yoom",
    category: "Video App",
    status: "Demo",
    tech: "Next.js / Stream",
    link: "https://yoom-eight-eta.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Yoom",
    desc: "Zoom clone with real-time streaming.",
  },
  {
    title: "Shadow Cart",
    name: "Shadow Cart",
    category: "E-Commerce",
    status: "Demo",
    tech: "Redux / React",
    link: "https://shadow-store-ten.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Shadow_Cart",
    desc: "State-managed shopping cart logic.",
  },
  {
    title: "Memory Game",
    name: "Memory Game",
    category: "Game Logic",
    status: "Demo",
    tech: "React Hooks",
    link: "https://memory-game-react-fawn.vercel.app/",
    github: "https://github.com/Waleed-Ahmad-dev/MemoryGame_React",
    desc: "Card flipping memory mechanics.",
  },
  {
    title: "React To-Do",
    name: "React To-Do",
    category: "Productivity",
    status: "Demo",
    tech: "React",
    link: "https://to-do-list-react-sandy.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/to-do-list-react",
    desc: "Task management with persistence.",
  },
  {
    title: "The Library",
    name: "The Library",
    category: "Data Structures",
    status: "Demo",
    tech: "Vanilla JS",
    link: "https://waleed-ahmad-dev.github.io/Library/",
    github: "https://github.com/Waleed-Ahmad-dev/Library",
    desc: "Object Constructor patterns.",
  },
  {
    title: "Drawing App",
    name: "Drawing App",
    category: "Canvas API",
    status: "Demo",
    tech: "HTML5 Canvas",
    link: "https://waleed-ahmad-dev.github.io/drawing-app/",
    github: "https://github.com/Waleed-Ahmad-dev/drawing-app",
    desc: "Digital sketchpad with controls.",
  },
  {
    title: "Whack-a-Mole",
    name: "Whack-a-Mole",
    category: "Browser Game",
    status: "Demo",
    tech: "DOM Ops",
    link: "https://waleed-ahmad-dev.github.io/Whack-a-Mole/",
    github: "https://github.com/Waleed-Ahmad-dev/Whack-a-Mole",
    desc: "Event-driven arcade logic.",
  },
  {
    title: "Tic-Tac-Toe",
    name: "Tic-Tac-Toe",
    category: "Game AI",
    status: "Demo",
    tech: "Minimax Algo",
    link: "https://waleed-ahmad-dev.github.io/Tic-Tac-Toe/",
    github: "https://github.com/Waleed-Ahmad-dev/Tic-Tac-Toe",
    desc: "Unbeatable algorithmic opponent.",
  },
  {
    title: "Weather App",
    name: "Weather App",
    category: "API Integration",
    status: "Demo",
    tech: "Fetch API",
    link: "https://waleed-ahmad-dev.github.io/Weather-App/",
    github: "https://github.com/Waleed-Ahmad-dev/Weather-App",
    desc: "Real-time async data fetching.",
  },
];

// --- STATS & NARRATIVE ---
const totalProjects = featuredProjects.length + playground.length;

export const aboutStats = {
  experienceYears: "2+",
  projectsCompleted: `${totalProjects}+`,
  stackStatus: "Full Stack Capable",
  stackSub: "From DB Design to UI Animations",
};

export const aboutText = {
  p1: {
    main: "I got serious about coding at",
    age: "14",
    highlight: "The Odin Project",
    end: "while juggling school. Now at 16, I’m not just learning — I’m shipping real products that people actually use.",
  },
  p2: "I’m an O-Levels student and a Lead Developer intern, with a soft spot for backend work: fast APIs, clean architecture, and databases that don’t fall apart. Still, I can jump to the frontend anytime and build something that feels smooth and modern.",
  p3: "From a custom CMS for a big real-estate client to a full LMS, I love building software that solves real problems and makes life easier. The goal is simple: create things that work, ship them fast, and keep leveling up.",
};

// --- NAVIGATION ---
export const navbarData: { logoText: string; links: NavLink[] } = {
  logoText: "Shadow_Scripter",
  links: [
    { id: "about", label: "_about", link: "#about" },
    { id: "work", label: "_work", link: "#work" },
    { id: "skills", label: "_stack", link: "#skills" },
    { id: "projects", label: "_deployments", link: "#projects" },
    { id: "contact", label: "_contact", link: "#contact" }, // ADDED: New Contact Field
  ],
};