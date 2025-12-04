import { Layout, Database, Cpu, Code } from "lucide-react";

// --- PERSONAL INFO ---
export const personalInfo = {
  name: "Waleed Ahmad",
  alias: "Shadow Scripter",
  role: "Full-Stack Architect",
  age: 16,
  location: "Pakistan",
  tagline: "Architecting scalable digital realms from the shadows.",
  // Revised professional bio
  bio: "I’m a 16-year-old full-stack developer engineering production-scale applications. I manage end-to-end architecture, backend services, and modern front-end frameworks. O-Levels student during school hours — lead engineer on real enterprise projects after hours.",
  email: "itswaleedqureshi@gmail.com",
  socials: {
    github: "https://github.com/Waleed-Ahmad-dev",
    linkedin: "https://linkedin.com/in/waleed-ahmed2009",
    instagram: "https://instagram.com/shadow.scripter",
  },
};

// --- HERO SECTION DATA ---
export const heroData = {
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
// Colors mapped to: cyan (Primary), blue (Deep), purple (Bridge), red (Secondary)
export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend & Mobile",
    icon: Layout,
    color: "cyan",
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
    color: "blue",
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
    color: "purple",
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
    color: "red", // Switched to Red to match Secondary theme
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
export const experience = [
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
export const featuredProjects = [
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
export const playground = [
  {
    name: "Xora",
    type: "SaaS Landing",
    tech: "React / Tailwind",
    link: "https://xora-shadow-scripter.netlify.app/",
    github: "https://github.com/Waleed-Ahmad-dev/Xora",
    desc: "Modern SaaS UI with complex gradients.",
  },
  {
    name: "Yoom",
    type: "Video App",
    tech: "Next.js / Stream",
    link: "https://yoom-eight-eta.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Yoom",
    desc: "Zoom clone with real-time streaming.",
  },
  {
    name: "Shadow Cart",
    type: "E-Commerce",
    tech: "Redux / React",
    link: "https://shadow-store-ten.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Shadow_Cart",
    desc: "State-managed shopping cart logic.",
  },
  {
    name: "Memory Game",
    type: "Game Logic",
    tech: "React Hooks",
    link: "https://memory-game-react-fawn.vercel.app/",
    github: "https://github.com/Waleed-Ahmad-dev/MemoryGame_React",
    desc: "Card flipping memory mechanics.",
  },
  {
    name: "React To-Do",
    type: "Productivity",
    tech: "React",
    link: "https://to-do-list-react-sandy.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/to-do-list-react",
    desc: "Task management with persistence.",
  },
  {
    name: "The Library",
    type: "Data Structures",
    tech: "Vanilla JS",
    link: "https://waleed-ahmad-dev.github.io/Library/",
    github: "https://github.com/Waleed-Ahmad-dev/Library",
    desc: "Object Constructor patterns.",
  },
  {
    name: "Drawing App",
    type: "Canvas API",
    tech: "HTML5 Canvas",
    link: "https://waleed-ahmad-dev.github.io/drawing-app/",
    github: "https://github.com/Waleed-Ahmad-dev/drawing-app",
    desc: "Digital sketchpad with controls.",
  },
  {
    name: "Whack-a-Mole",
    type: "Browser Game",
    tech: "DOM Ops",
    link: "https://waleed-ahmad-dev.github.io/Whack-a-Mole/",
    github: "https://github.com/Waleed-Ahmad-dev/Whack-a-Mole",
    desc: "Event-driven arcade logic.",
  },
  {
    name: "Tic-Tac-Toe",
    type: "Game AI",
    tech: "Minimax Algo",
    link: "https://waleed-ahmad-dev.github.io/Tic-Tac-Toe/",
    github: "https://github.com/Waleed-Ahmad-dev/Tic-Tac-Toe",
    desc: "Unbeatable algorithmic opponent.",
  },
  {
    name: "Weather App",
    type: "API Integration",
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
export const navbarData = {
  logoText: "Shadow_Scripter",
  links: [
    { id: "about", label: "_about", link: "#about" },
    { id: "work", label: "_work", link: "#work" },
    { id: "skills", label: "_stack", link: "#skills" },
    { id: "projects", label: "_deployments", link: "#projects" },
  ],
};
