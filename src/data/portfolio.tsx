import { Layout, Database, Cpu, Code } from "lucide-react";

// Updated Skill Groups based on your README
export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend & Mobile",
    icon: Layout,
    color: "cyan",
    skills: [
      "Next.js / React",
      "React Native (Expo)",
      "TypeScript",
      "Tailwind CSS",
      "Three.js / Framer",
      "Redux / React Query",
      "Vite",
    ],
  },
  {
    id: "backend",
    title: "Backend & Architecture",
    icon: Database, // Changed to Server icon contextually if needed, but Database fits
    color: "blue",
    skills: [
      "Node.js / Express",
      "NestJS",
      "PostgreSQL / Prisma",
      "MongoDB",
      "Redis",
      "Python (Flask/FastAPI)",
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
      "GitHub Actions (CI/CD)",
      "Nginx",
      "Vercel / Netlify",
    ],
  },
  {
    id: "languages",
    title: "Languages & Core",
    icon: Code,
    color: "yellow",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python",
      "Go (Golang) [Learning]",
      "SQL",
      "Bash / PowerShell",
    ],
  },
];

// Updated Personal Info with new Email and Socials
export const personalInfo = {
  name: "Waleed Ahmad",
  alias: "Shadow Scripter",
  role: "Full-Stack Architect",
  age: 16,
  location: "Pakistan",
  tagline: "Architecting scalable digital realms from the shadows.",
  bio: "I'm a 16-year-old software artisan balancing O-Levels with enterprise-grade development. From distinct backend architectures to fluid frontend experiences, I build systems that solve real-world problems.",
  email: "itswaleedqureshi@gmail.com",
  socials: {
    github: "https://github.com/Waleed-Ahmad-dev",
    linkedin: "https://linkedin.com/in/waleed-ahmed2009",
    instagram: "https://instagram.com/shadow.scripter",
  },
};

export const heroData = {
  status: "System Online",
  heading: {
    start: "Code in the",
    highlight: "Shadows.",
    end: "Brilliance on the Screen.",
  },
  subHeading: {
    text: "Building enterprise-grade systems while others are still learning the basics. O-Levels Student by day, Lead Developer by night.",
  },
  buttons: {
    primary: "View Projects",
    secondary: "GitHub",
  },
};

export const experience = [
  {
    company: "Premier Choice International",
    role: "Full Stack Intern (Lead)",
    period: "Oct 2025 – Present",
    desc: [
      "Spearheading the architecture of a proprietary Real Estate CMS using Node.js, React, and PostgreSQL, replacing legacy manual workflows.",
      "Developed 'Sign App', an internal microservice for generating standardized HTML email signatures for the entire workforce.",
      "Implementing Role-Based Access Control (RBAC) and complex data relationships for asset management.",
    ],
  },
  {
    company: "Firefly Tech Solutions",
    role: "Software Development Intern",
    period: "Jan 2025 – June 2025",
    desc: [
      "Optimized legacy codebases, reducing load times and improving maintainability.",
      "Collaborated on debugging critical web application features ensuring 99% uptime during testing cycles.",
      "Bridged the gap between design and functionality using modern frontend practices.",
    ],
  },
  {
    company: "The Odin Project",
    role: "Open Source Scholar",
    period: "2023",
    desc: [
      "Completed a rigorous, self-paced Full Stack curriculum at age 14.",
      "Mastered the foundations of the web (HTML, CSS, JS) through building 15+ projects from scratch.",
      "Cultivated the discipline to code daily while balancing full-time academic studies.",
    ],
  },
];

// Merged Client Work and High-Level Personal Projects
export const featuredProjects = [
  {
    title: "Premier Choice CMS",
    category: "Enterprise Architecture",
    status: "In Production",
    tech: ["Node.js", "React", "PostgreSQL", "Docker"],
    desc: "A monolithic content management system engineered for real estate asset management. Handles complex inventory logic, sales data, and automated workflows.",
    link: "https://cms.premierchoiceint.online",
    github: null, // Private Repo
  },
  {
    title: "PCI Sign App",
    category: "Internal Tool / Microservice",
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
    desc: "A spiritual Learning Management System (LMS) designed to transform religious education. Features user progress tracking, multimedia content delivery, and a serene UI.",
    link: "https://quranic-transformation.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Quranic-Transformation",
  },
  {
    title: "AI Attorney Backend",
    category: "API & Microservices",
    status: "Live",
    tech: ["Node.js", "Express", "AI Integration", "Security"],
    desc: "The secure backbone for a mobile legal assistant. Built RESTful APIs to handle legal queries, context management, and user authentication for the mobile front-end.",
    link: "https://www.aiattorney.com.pk/",
    github: null, // Private / Client work
  },
  {
    title: "Writer's Haven",
    category: "Productivity Tool",
    status: "Development",
    tech: ["Next.js", "Tailwind", "Local Storage", "Typography"],
    desc: "A minimalist digital sanctuary for authors. Features distraction-free writing modes, custom themes, and local-first data persistence for privacy-focused drafting.",
    link: "https://notes-app-six-green.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/notes_app",
  },
];

// Added all GitHub IO games and React mini-projects
export const playground = [
  {
    name: "Xora",
    type: "SaaS Landing Page",
    tech: "React / Tailwind",
    link: "https://xora-shadow-scripter.netlify.app/",
    github: "https://github.com/Waleed-Ahmad-dev/Xora",
    desc: "Modern SaaS UI implementation with complex gradients.",
  },
  {
    name: "Yoom",
    type: "Video Conferencing",
    tech: "Next.js / Stream API",
    link: "https://yoom-eight-eta.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Yoom",
    desc: "A Zoom clone handling real-time video streams.",
  },
  {
    name: "Shadow Cart",
    type: "E-Commerce",
    tech: "Redux / React",
    link: "https://shadow-store-ten.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Shadow_Cart",
    desc: "Full shopping cart state management logic.",
  },
  {
    name: "Memory Game",
    type: "Game Logic",
    tech: "React / Hooks",
    link: "https://memory-game-react-fawn.vercel.app/",
    github: "https://github.com/Waleed-Ahmad-dev/MemoryGame_React",
    desc: "Card flipping memory game using React state.",
  },
  {
    name: "React To-Do",
    type: "Productivity",
    tech: "React / LocalStorage",
    link: "https://to-do-list-react-sandy.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/to-do-list-react",
    desc: "Task management with persistence.",
  },
  {
    name: "The Library",
    type: "Data Structures",
    tech: "Vanilla JS / Objects",
    link: "https://waleed-ahmad-dev.github.io/Library/",
    github: "https://github.com/Waleed-Ahmad-dev/Library",
    desc: "Book management utilizing JS Object Constructors.",
  },
  {
    name: "Drawing App",
    type: "Canvas API",
    tech: "HTML5 Canvas",
    link: "https://waleed-ahmad-dev.github.io/drawing-app/",
    github: "https://github.com/Waleed-Ahmad-dev/drawing-app",
    desc: "Digital sketchpad with custom brush controls.",
  },
  {
    name: "Whack-a-Mole",
    type: "Browser Game",
    tech: "DOM Manipulation",
    link: "https://waleed-ahmad-dev.github.io/Whack-a-Mole/",
    github: "https://github.com/Waleed-Ahmad-dev/Whack-a-Mole",
    desc: "Arcade game logic using timing events.",
  },
  {
    name: "Tic-Tac-Toe",
    type: "Game AI",
    tech: "Minimax Algorithm",
    link: "https://waleed-ahmad-dev.github.io/Tic-Tac-Toe/",
    github: "https://github.com/Waleed-Ahmad-dev/Tic-Tac-Toe",
    desc: "Unbeatable game logic implementation.",
  },
  {
    name: "Weather App",
    type: "API Integration",
    tech: "Fetch API / Async",
    link: "https://waleed-ahmad-dev.github.io/Weather-App/",
    github: "https://github.com/Waleed-Ahmad-dev/Weather-App",
    desc: "Real-time weather data fetching.",
  },
  {
    name: "JS Calculator",
    type: "Utility",
    tech: "JavaScript Logic",
    link: "https://waleed-ahmad-dev.github.io/Calculator/",
    github: "https://github.com/Waleed-Ahmad-dev/Calculator",
    desc: "Complex math operations and edge case handling.",
  },
  {
    name: "RPS Game",
    type: "Game",
    tech: "JavaScript",
    link: "https://waleed-ahmad-dev.github.io/Rock-Papper-Scissors-Game/",
    github: "https://github.com/Waleed-Ahmad-dev/Rock-Papper-Scissors-Game",
    desc: "Rock Paper Scissors with score tracking.",
  },
];

const totalProjects = featuredProjects.length + playground.length;

export const aboutStats = {
  experienceYears: "2+",
  projectsCompleted: `${totalProjects}+`, // Dynamically counts all 17 projects
  stackStatus: "Full Stack Capable",
  stackSub: "From DB Design to UI Animations",
};

export const aboutText = {
  p1: {
    main: "I started coding seriously at",
    age: "14",
    highlight: "The Odin Project",
    end: "while balancing school. Now, at 16, I’m not just writing code; I’m shipping products.",
  },
  p2: "Currently, I’m an O-Levels student and a Lead Developer intern. My sweet spot is the Backend—designing scalable APIs and managing databases—but I’m equally dangerous on the Frontend.",
  p3: "Whether it’s building a custom CMS for a real estate giant or developing an LMS, I build software that solves real problems.",
};

export const navbarData = {
  logoText: "Shadow_Scripter",
  links: [
    { id: "about", label: "_about", link: "#about" },
    { id: "work", label: "_work", link: "#work" },
    { id: "skills", label: "_stack", link: "#skills" },
    { id: "contact", label: "_contact", link: "#contact" },
  ],
};
