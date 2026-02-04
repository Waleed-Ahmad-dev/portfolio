import { Layout, Database, Cpu, Code, LucideIcon } from "lucide-react";

// --- TYPES ---
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
  link: string | null;
  github: string | null;
  name?: string;
  type?: string; 
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
  tagline: "Engineering scalable digital architectures.",
  bio: "I’m a 16-year-old full-stack developer engineering production-scale applications. I manage end-to-end architecture, backend services, and modern front-end frameworks. O-Levels student during school hours — lead engineer on real enterprise projects after hours.",
  email: "itswaleedqureshi@gmail.com",
  socials: {
    github: "https://github.com/Waleed-Ahmad-dev",
    linkedin: "https://linkedin.com/in/waleed-ahmed2009",
    instagram: "https://instagram.com/waleed.ahmad.dev",
  },
};

// --- HERO SECTION DATA ---
export const heroData: HeroData = {
  status: "Available for Hire",
  heading: {
    start: "Building",
    highlight: "Digital Reality",
    end: "for the web.",
  },
  subHeading: {
    text: "focusing on performance, scalability, and electric user experiences.",
  },
  buttons: {
    primary: "View Projects",
    secondary: "GitHub",
  },
};

// --- SKILL GROUPS ---
export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend & Mobile",
    icon: Layout,
    skills: ["Next.js 16", "React", "React Native (Expo)", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
  },
  {
    id: "backend",
    title: "Backend Architecture",
    icon: Database,
    skills: ["Node.js", "NestJS", "Go", "PostgreSQL", "Prisma", "MongoDB", "Redis", "FastAPI"],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: Cpu,
    skills: ["Docker", "Linux (Arch)", "KDE Plasma", "AWS", "GitHub Actions", "Nginx", "Vercel"],
  },
  {
    id: "languages",
    title: "Core Languages",
    icon: Code,
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Go", "SQL", "Bash"],
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
    ],
  },
  {
    company: "Freelance / Community",
    role: "Technical Instructor",
    period: "2024 – Present",
    desc: [
      "Delivered professional hands-on training for the MERN Stack.",
      "Mentored peers in debugging complex React state logic and API integration.",
    ],
  },
  {
    company: "The Odin Project",
    role: "Open Source Scholar",
    period: "Jan 2024 – Dec 2024",
    desc: [
      "Completed a rigorous, self-paced Full Stack curriculum at age 14.",
      "Mastered foundations through building 15+ projects.",
    ],
  },
];

// --- FEATURED PROJECTS ---
// (These are your high-impact enterprise/complex projects)
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
    title: "entrpryz_construction_boq",
    category: "Management",
    status: "Completed",
    tech: ["Odoo", "Python"],
    link: "",
    github: "https://github.com/Waleed-Ahmad-dev/entrpryz_construction_boq",
    desc: "Odoo module to manage Bill of Quantities for construction.",
  },
  {
    title: "SaleMate",
    category: "Retail Tech",
    status: "In Development",
    tech: ["Node.js", "TypeScript", "Prisma", "React Native"],
    desc: "A production-scale sales management app featuring real-time inventory and cross-platform sync.",
    link: null,
    github: null,
  },
    {
    title: "Writer's Haven",
    category: "Productivity",
    status: "Development",
    tech: ["Next.js", "Prisma", "Tailwind"],
    link: "https://notes.shadowscripter.online",
    github: "https://github.com/Waleed-Ahmad-dev/notes_app",
    desc: "A minimalist digital sanctuary for authors with distraction-free writing.",
  },
  {
    title: "Yoom",
    category: "Web App",
    status: "In Progress",
    tech: ["Next.js", "React", "Tailwind"],
    link: "https://yoom-eight-eta.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Yoom",
    desc: "A web application featuring various UI components and video utilities.",
  },
  {
    title: "Open-Source-Gems",
    category: "Directory",
    status: "Active",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://waleed-ahmad-dev.github.io/Open-Source-Gems-The-Underrated-Alternatives/",
    github: "https://github.com/Waleed-Ahmad-dev/Open-Source-Gems-The-Underrated-Alternatives",
    desc: "Curated repository of underrated open-source software.",
  },
  {
    title: "Podcast API",
    category: "Backend API",
    status: "Completed",
    tech: ["NestJS", "TypeScript", "Node.js"],
    desc: "A robust backend engineering project demonstrating mastery of NestJS and RESTful architecture.",
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/podcast-api",
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
    title: "portfolio",
    category: "Web App",
    status: "Completed",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    link: "https://www.shadowscripter.online/",
    github: "https://github.com/Waleed-Ahmad-dev/portfolio",
    desc: "Personal portfolio website built with modern web technologies.",
  },
  {
    title: "Speech to Text API",
    category: "AI Service",
    status: "Completed",
    tech: ["Node.js", "Python", "Whisper AI"],
    desc: "Privacy-first speech-to-text API powered by Whisper and FFmpeg for accurate transcription.",
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/speech_to_text",
  },
  {
    title: "AI Attorney Backend",
    category: "API Service",
    status: "Live",
    tech: ["Node.js", "Express", "AI Integration"],
    desc: "The secure backbone for a mobile legal assistant. Built RESTful APIs to handle legal queries and user authentication.",
    link: "https://www.aiattorney.com.pk/",
    github: null,
  },
  {
    title: "Chess App",
    category: "Game App",
    status: "Active",
    tech: ["Go (Golang)"],
    desc: "A high-performance, dual-interface Chess application engineered in Go with CLI and REST modes.",
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Chess-app",
  },
  {
    title: "PCI Sign App",
    category: "Microservice",
    status: "Live",
    tech: ["JavaScript", "HTML", "DOM Manipulation"],
    desc: "An internal tool developed for Premier Choice International to automate the generation of standardized corporate email signatures.",
    link: "https://sign.shadowscripter.online",
    github: "https://github.com/Waleed-Ahmad-dev/Sign-app",
  },
];

// --- PLAYGROUND / ALL OTHER PROJECTS ---
// (Every single project from your JSON list, mapped to the ProjectItem type)
export const playground: ProjectItem[] = [
  {
    title: "Xora",
    name: "Xora",
    category: "Web App",
    type: "SaaS Landing",
    status: "Maintained",
    tech: ["React", "Vite", "Tailwind CSS"],
    link: "https://xora-six-xi.vercel.app/",
    github: "https://github.com/Waleed-Ahmad-dev/Xora",
    desc: "Modern SaaS UI with complex animations and gradients.",
  },
  {
    title: "Shadow Cart",
    name: "Shadow Cart",
    category: "Web App",
    type: "E-Commerce",
    status: "In Progress",
    tech: ["React", "Vite", "JavaScript"],
    link: "https://shadow-store-ten.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Shadow_Cart",
    desc: "Minimal React setup featuring state-managed shopping cart logic.",
  },
  {
    title: "Apple-clone",
    name: "Apple Clone",
    category: "Web App",
    type: "UI Clone",
    status: "Completed",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://waleed-ahmad-dev.github.io/Apple-clone/",
    github: "https://github.com/Waleed-Ahmad-dev/Apple-clone",
    desc: "A clone of the official Apple website, replicating its design and functionality.",
  },
  {
    title: "Auth_API",
    name: "Auth API",
    category: "API",
    type: "Backend",
    status: "Completed",
    tech: ["Node.js", "Express", "Prisma", "MySQL", "JWT"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Auth_API",
    desc: "Advanced authentication API with JWT and Prisma ORM.",
  },
  {
    title: "Auth_GoLang",
    name: "Auth Go",
    category: "Authentication",
    type: "Service",
    status: "In Progress",
    tech: ["GoLang"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Auth_GoLang",
    desc: "A GoLang-based authentication module.",
  },
  {
    title: "Battleship",
    name: "Battleship",
    category: "Game",
    type: "Logic",
    status: "Completed",
    tech: ["JavaScript", "Webpack", "Jest"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Battleship",
    desc: "Battleship game implemented with testing support from Jest.",
  },
  {
    title: "Binary-Search-Trees",
    name: "BST Implementation",
    category: "Algorithm",
    type: "Data Structure",
    status: "Completed",
    tech: ["JavaScript"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Binary-Search-Trees",
    desc: "JS implementation of BST with insertion, deletion, and searching.",
  },
  {
    title: "Calculator",
    name: "Web Calculator",
    category: "Web App",
    type: "Utility",
    status: "Completed",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://waleed-ahmad-dev.github.io/Calculator/",
    github: "https://github.com/Waleed-Ahmad-dev/Calculator",
    desc: "Simple web-based calculator with standard arithmetic operations.",
  },
  {
    title: "Calculator-Python",
    name: "Python Calculator",
    category: "Desktop App",
    type: "Python",
    status: "Completed",
    tech: ["Python"],
    link: "https://calculator-python.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Calculator-Python",
    desc: "A simple calculator application built using Python.",
  },
  {
    title: "chat-application-react",
    name: "React Chat",
    category: "Web App",
    type: "Real-time",
    status: "In Progress",
    tech: ["React"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/chat-application-react",
    desc: "React-based chat application for real-time communication.",
  },
  {
    title: "Clock",
    name: "Digital Clock",
    category: "Web App",
    type: "Utility",
    status: "Completed",
    tech: ["JavaScript", "HTML"],
    link: "https://shadow-scripter.github.io/Clock/",
    github: "https://github.com/Waleed-Ahmad-dev/Clock",
    desc: "Real-time digital clock display.",
  },
  {
    title: "Clock-Python",
    name: "Python Clock",
    category: "Utility",
    type: "Python",
    status: "Completed",
    tech: ["Python"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Clock-Python",
    desc: "A Python-based clock implementation.",
  },
  {
    title: "Count-Program",
    name: "Counter Program",
    category: "Web App",
    type: "Basic",
    status: "Completed",
    tech: ["HTML", "CSS", "JavaScript"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Count-Program",
    desc: "Simple counter with increase, decrease, and reset logic.",
  },
  {
    title: "counter-program-react-",
    name: "React Counter",
    category: "Web App",
    type: "React",
    status: "In Progress",
    tech: ["React", "Vite"],
    link: "https://counter-program-react.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/counter-program-react-",
    desc: "Counter app built using React and Vite.",
  },
  {
    title: "CV-Application",
    name: "CV Maker",
    category: "Web App",
    type: "Utility",
    status: "Maintained",
    tech: ["React", "Vite"],
    link: "https://cv-application-lovat.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/CV-Application",
    desc: "React application for generating minimal CVs.",
  },
  {
    title: "Daily-flow",
    name: "Daily Flow",
    category: "Web App",
    type: "Next.js",
    status: "In Progress",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    link: "",
    github: "https://github.com/Waleed-Ahmad-dev/Daily-flow",
    desc: "Productivity application bootstrapped with create-next-app.",
  },
  {
    title: "Data_Reports",
    name: "Data Reports",
    category: "Web App",
    type: "Data Analysis",
    status: "Completed",
    tech: ["Flask", "Pandas"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Data_Reports",
    desc: "Generate data reports from CSV files using Pandas.",
  },
  {
    title: "digital-clock-react",
    name: "React Digital Clock",
    category: "Web App",
    type: "React",
    status: "In Progress",
    tech: ["React", "Vite"],
    link: "https://digital-clock-react-ochre.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/digital-clock-react",
    desc: "Minimal digital clock setup with HMR.",
  },
  {
    title: "drawing-app",
    name: "Drawing App",
    category: "Web App",
    type: "Canvas API",
    status: "In Progress",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://waleed-ahmad-dev.github.io/drawing-app/",
    github: "https://github.com/Waleed-Ahmad-dev/drawing-app",
    desc: "Web application for creating and editing drawings.",
  },
  {
    title: "Entrpryz-Website",
    name: "Entrpryz Site",
    category: "Web App",
    type: "Company Site",
    status: "In Progress",
    tech: ["React", "Vite", "Tailwind"],
    link: "https://www.entrpryz.com",
    github: null,
    desc: "Official website template for Entrpryz.",
  },
  {
    title: "Etch-a-sketch",
    name: "Etch-a-Sketch",
    category: "Web App",
    type: "Game",
    status: "Completed",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://waleed-ahmad-dev.github.io/Etch-a-sketch/",
    github: "https://github.com/Waleed-Ahmad-dev/Etch-a-sketch",
    desc: "Grid drawing application built with vanilla JS.",
  },
  {
    title: "Form",
    name: "Basic Form",
    category: "Web App",
    type: "Component",
    status: "In Progress",
    tech: [],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Form",
    desc: "Basic form application project.",
  },
  {
    title: "Form-Checkbox",
    name: "Form Checkbox",
    category: "Web Component",
    type: "Library",
    status: "Completed",
    tech: ["JavaScript", "jspdf"],
    link: "https://shadow-scripter.github.io/Form-Checkbox/",
    github: "https://waleed-ahmad-dev.github.io/Form-Checkbox/",
    desc: "JS library for customizable checkboxes with PDF generation.",
  },
  {
    title: "Grid_landlinePage",
    name: "Grid Landline",
    category: "Web App",
    type: "CSS Layout",
    status: "In Progress",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://waleed-ahmad-dev.github.io/Grid_landlinePage/",
    github: "https://github.com/Waleed-Ahmad-dev/Grid_landlinePage",
    desc: "Grid-based landline page layout implementation.",
  },
  {
    title: "HashMap",
    name: "HashMap JS",
    category: "Data Structure",
    type: "Implementation",
    status: "Completed",
    tech: ["JavaScript"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/HashMap",
    desc: "Custom hash map implementation with set, get, and remove methods.",
  },
  {
    title: "homepage-project",
    name: "Practice Homepage",
    category: "Web App",
    type: "Portfolio",
    status: "In Progress",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://waleed-ahmad-dev.github.io/homepage-project/",
    github: "https://github.com/Waleed-Ahmad-dev/homepage-project",
    desc: "A personal practice homepage project.",
  },
  {
    title: "Knights-Travails",
    name: "Knight's Travails",
    category: "Algorithm",
    type: "Shortest Path",
    status: "Completed",
    tech: ["JavaScript"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Knights-Travails",
    desc: "Finding the shortest path for a knight on a chessboard.",
  },
  {
    title: "Library",
    name: "The Library",
    category: "Web App",
    type: "Practice",
    status: "Completed",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://waleed-ahmad-dev.github.io/Library/",
    github: "https://github.com/Waleed-Ahmad-dev/Library",
    desc: "Library management project for object constructor practice.",
  },
  {
    title: "Linked-Lists",
    name: "Linked List JS",
    category: "Data Structure",
    type: "Implementation",
    status: "Completed",
    tech: ["JavaScript"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Linked-Lists",
    desc: "Singly linked list implementation in vanilla JS.",
  },
  {
    title: "Memory-Game",
    name: "Vanilla Memory Game",
    category: "Web App",
    type: "Game",
    status: "Completed",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://waleed-ahmad-dev.github.io/Memory-Game/",
    github: "https://github.com/Waleed-Ahmad-dev/Memory-Game",
    desc: "Classic card flipping memory game with emojis.",
  },
  {
    title: "MemoryGame_React",
    name: "React Memory Game",
    category: "Web App",
    type: "React",
    status: "In Progress",
    tech: ["React", "Vite", "JavaScript"],
    link: "https://memory-game-react-fawn.vercel.app/",
    github: "https://github.com/Waleed-Ahmad-dev/MemoryGame_React",
    desc: "React-based memory game with Vite and ESLint.",
  },
  {
    title: "message-board",
    name: "Message Board",
    category: "Web App",
    type: "Fullstack",
    status: "In Progress",
    tech: ["Express", "EJS", "Node.js"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/message-board",
    desc: "Simple message board built with Express and EJS templates.",
  },
  {
    title: "ML-Practise",
    name: "ML Practice",
    category: "Machine Learning",
    type: "Python",
    status: "In Progress",
    tech: ["Python", "TensorFlow", "Keras"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/ML-Practise",
    desc: "Repository for practicing ML concepts and algorithms.",
  },
  {
    title: "node-first-project",
    name: "Node First Server",
    category: "Web Server",
    type: "Backend",
    status: "Completed",
    tech: ["Node.js", "HTTP"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/node-first-project",
    desc: "Basic Node.js server handling HTML files and 404s.",
  },
  {
    title: "nodejs-course",
    name: "NodeJS Course Project",
    category: "Web App",
    type: "Fullstack",
    status: "In Progress",
    tech: ["Node.js", "Express", "MongoDB", "MySQL"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/nodejs-course",
    desc: "Comprehensive course project featuring multiple databases.",
  },
  {
    title: "pci-cms",
    name: "PCI Headless CMS",
    category: "Headless CMS",
    type: "Backend",
    status: "Maintained",
    tech: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    link: null,
    github: null,
    desc: "Headless CMS with RBAC and multi-project support.",
  },
  {
    title: "pci-cms-frontend",
    name: "PCI CMS UI",
    category: "Web App",
    type: "Frontend",
    status: "Maintained",
    tech: ["Next.js", "React", "TypeScript"],
    link: null,
    github: null,
    desc: "Enterprise-grade UI for high-performance content delivery.",
  },
  {
    title: "pci_website",
    name: "PCI Main Website",
    category: "Web App",
    type: "Next.js",
    status: "In Progress",
    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
    link: "https://pci-website-teal.vercel.app",
    github: null,
    desc: "Dynamic web application for Premier Choice International.",
  },
  {
    title: "Resturant-Page",
    name: "Restaurant Page",
    category: "Web App",
    type: "Vanilla JS",
    status: "Completed",
    tech: ["JavaScript", "Webpack", "HTML"],
    link: "https://waleed-ahmad-dev.github.io/Resturant-Page/",
    github: "https://github.com/Waleed-Ahmad-dev/Resturant-Page",
    desc: "Dynamically loaded restaurant navigation using Webpack.",
  },
  {
    title: "rock-paper-scissor",
    name: "Python RPS",
    category: "Game",
    type: "Python",
    status: "Completed",
    tech: ["Python"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/rock-paper-scissor",
    desc: "Python implementation of Rock-Paper-Scissors.",
  },
  {
    title: "Rock-Papper-Scissors-Game",
    name: "Web RPS",
    category: "Web App",
    type: "Game",
    status: "Completed",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://waleed-ahmad-dev.github.io/Rock-Papper-Scissors-Game/",
    github: "https://github.com/Waleed-Ahmad-dev/Rock-Papper-Scissors-Game",
    desc: "Simple web game playing against the computer.",
  },
  {
    title: "school_management_system",
    name: "SMS Backend",
    category: "Web App",
    type: "Management",
    status: "In Progress",
    tech: ["Node.js", "Express", "Prisma", "MySQL"],
    link: null,
    github: null,
    desc: "System with authentication and session management.",
  },
  {
    title: "stop-watch",
    name: "JS Stopwatch",
    category: "Web App",
    type: "Utility",
    status: "Completed",
    tech: ["JavaScript", "HTML", "CSS"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/stop-watch",
    desc: "Simple stopwatch with start, stop, and reset.",
  },
  {
    title: "stop-watch-react",
    name: "React Stopwatch",
    category: "Web App",
    type: "React",
    status: "In Progress",
    tech: ["React", "Vite"],
    link: "https://stop-watch-react-eight.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/stop-watch-react",
    desc: "Minimal React setup for a stopwatch with HMR.",
  },
  {
    title: "Student_grading_program",
    name: "Student Grading",
    category: "Education Tool",
    type: "Python Data",
    status: "Completed",
    tech: ["Python", "Pandas", "Matplotlib"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/Student_grading_program",
    desc: "Analyze student marks from text or PDF exports.",
  },
  {
    title: "TaskMaster",
    name: "Task Master",
    category: "Web App",
    type: "Productivity",
    status: "In Progress",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://waleed-ahmad-dev.github.io/TaskMaster/",
    github: "https://github.com/Waleed-Ahmad-dev/TaskMaster",
    desc: "Task management for creating and editing to-do items.",
  },
  {
    title: "Temperature-conversion",
    name: "Temp Converter",
    category: "Web App",
    type: "Utility",
    status: "Completed",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://waleed-ahmad-dev.github.io/Temperature-conversion/",
    github: "https://github.com/Waleed-Ahmad-dev/Temperature-conversion",
    desc: "Convert temperatures between Celsius and Fahrenheit.",
  },
  {
    title: "Tic-Tac-Toe",
    name: "Tic-Tac-Toe",
    category: "Web App",
    type: "Game",
    status: "Completed",
    tech: ["JavaScript", "HTML"],
    link: "https://waleed-ahmad-dev.github.io/Tic-Tac-Toe/",
    github: "https://github.com/Waleed-Ahmad-dev/Tic-Tac-Toe",
    desc: "Game with single-player and multi-player modes.",
  },
  {
    title: "To-do-List",
    name: "Vanilla To-Do",
    category: "Web App",
    type: "Productivity",
    status: "In Progress",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://waleed-ahmad-dev.github.io/To-do-List/",
    github: "https://github.com/Waleed-Ahmad-dev/To-do-List",
    desc: "Simple to-do list with mark-as-complete functionality.",
  },
  {
    title: "to-do-list-react",
    name: "React To-Do",
    category: "Web App",
    type: "React",
    status: "In Progress",
    tech: ["React", "Vite"],
    link: "https://to-do-list-react-sandy.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/to-do-list-react",
    desc: "Minimal React setup for a persistent to-do list.",
  },
  {
    title: "to-do-list-react-native",
    name: "Mobile To-Do",
    category: "Mobile App",
    type: "React Native",
    status: "Completed",
    tech: ["React Native", "Expo"],
    link: null,
    github: "https://github.com/Waleed-Ahmad-dev/to-do-list-react-native",
    desc: "To-do list application built with React Native and Expo.",
  },
  {
    title: "Weather-App",
    name: "Weather App",
    category: "Web App",
    type: "API Integration",
    status: "Completed",
    tech: ["JavaScript", "OpenWeatherMap API"],
    link: "https://waleed-ahmad-dev.github.io/Weather-App/",
    github: "https://github.com/Waleed-Ahmad-dev/Weather-App",
    desc: "Displays current weather data for a given city.",
  },
  {
    title: "Whack-a-Mole",
    name: "Python Whack-a-Mole",
    category: "Game",
    type: "Python",
    status: "Completed",
    tech: ["Python", "Pygame"],
    link: "https://waleed-ahmad-dev.github.io/Whack-a-Mole/",
    github: "https://github.com/Waleed-Ahmad-dev/Whack-a-Mole",
    desc: "Classic arcade game implementation using Pygame.",
  }
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
    end: "while juggling school. Now at 16, I’m not just learning — I’m shipping real products.",
  },
  p3: "From a custom CMS for a big real-estate client to a full LMS, I love building software that solves real problems. The goal is simple: create things that work, ship them fast, and keep leveling up.",
};

// --- NAVIGATION ---
export const navbarData: { logoText: string; links: NavLink[] } = {
  logoText: "Shadow Scripter",
  links: [
    { id: "about", label: "About", link: "#about" },
    { id: "work", label: "Work", link: "#work" },
    { id: "skills", label: "Stack", link: "#skills" },
    { id: "projects", label: "Projects", link: "#projects" },
    { id: "contact", label: "Contact", link: "#contact" },
  ],
};
