import { Layout, Database, Cpu, Code } from "lucide-react"; // Assuming you are using Lucide icons

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend & Mobile",
    icon: <Layout />,
    color: "cyan",
    skills: [
      "Next.js",
      "React",
      "React Native (Expo)",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Framer Motion",
      "Redux / React Query",
    ],
  },
  {
    id: "backend",
    title: "Backend & Architecture",
    icon: <Database />,
    color: "blue",
    skills: [
      "Node.js",
      "Express / NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "FastAPI / Flask",
      "Socket.io",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: <Cpu />,
    color: "purple",
    skills: [
      "Docker",
      "Linux (Arch/Ubuntu)",
      "AWS / Google Cloud",
      "CI/CD (GitHub Actions)",
      "Nginx",
      "Vim/Neovim",
    ],
  },
  {
    id: "languages",
    title: "Languages & AI",
    icon: <Code />,
    color: "yellow",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Python (Data/ML)",
      "Go (Learning)",
      "SQL",
      "Bash / PowerShell",
    ],
  },
];

export const personalInfo = {
  name: "Waleed Ahmad",
  alias: "Shadow Scripter",
  role: "Full-Stack Architect",
  age: 16,
  location: "Pakistan",
  tagline: "Architecting scalable digital realms from the shadows.",
  bio: "I'm a 16-year-old software artisan balancing O-Levels with enterprise-grade development. From distinct backend architectures to fluid frontend experiences, I build systems that solve real-world problems.",
  email: "itswaleedqureshi@gmail.com", // Updated from Readme
  socials: {
    github: "https://github.com/Waleed-Ahmad-dev",
    linkedin: "https://linkedin.com/in/waleed-ahmed2009", // Updated from Readme
    instagram: "https://instagram.com/shadow.scripter", // Added from Readme
  }
};

export const heroData = {
  status: "System Online",
  heading: {
    start: "Code in the",
    highlight: "Shadows.",
    end: "Brilliance on the Screen."
  },
  subHeading: {
    text: "Building enterprise-grade systems while others are still learning the basics. O-Levels Student by day, Lead Developer by night."
  },
  buttons: {
    primary: "View Projects",
    secondary: "GitHub"
  }
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

export const playground = [
  {
    name: "Xora",
    type: "SaaS Landing Page",
    tech: "React / Tailwind",
    link: "https://xora-shadow-scripter.netlify.app/",
    github: "https://github.com/Waleed-Ahmad-dev/Xora",
    desc: "Modern SaaS UI implementation with complex gradients and responsive layouts."
  },
  {
    name: "Yoom",
    type: "Video Conferencing",
    tech: "Next.js / Stream API",
    link: "https://yoom-eight-eta.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Yoom",
    desc: "A Zoom clone handling real-time video and audio streams."
  },
  {
    name: "Shadow Cart",
    type: "E-Commerce Logic",
    tech: "Redux / React",
    link: "https://shadow-store-ten.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/Shadow_Cart",
    desc: "Full shopping cart state management with add/remove/update logic."
  },
  {
    name: "Memory Game",
    type: "Game Logic",
    tech: "React / State",
    link: "https://memory-game-react-fawn.vercel.app/",
    github: "https://github.com/Waleed-Ahmad-dev/MemoryGame_React",
    desc: "A card flipping memory game utilizing React hooks for game state."
  },
  {
    name: "React To-Do",
    type: "Productivity",
    tech: "React / LocalStorage",
    link: "https://to-do-list-react-sandy.vercel.app",
    github: "https://github.com/Waleed-Ahmad-dev/to-do-list-react",
    desc: "Task management app with CRUD operations and persistence."
  },
  {
    name: "The Library",
    type: "Data Structure",
    tech: "Vanilla JS / Objects",
    link: "https://waleed-ahmad-dev.github.io/Library/",
    github: "https://github.com/Waleed-Ahmad-dev/Library",
    desc: "Book management system demonstrating JavaScript object constructors."
  },
  {
    name: "Drawing App",
    type: "Canvas API",
    tech: "HTML5 Canvas / JS",
    link: "https://waleed-ahmad-dev.github.io/drawing-app/",
    github: "https://github.com/Waleed-Ahmad-dev/drawing-app",
    desc: "A digital sketchpad allowing custom colors and brush sizes."
  },
  {
    name: "Whack-a-Mole",
    type: "Browser Game",
    tech: "DOM Manipulation",
    link: "https://waleed-ahmad-dev.github.io/Whack-a-Mole/",
    github: "https://github.com/Waleed-Ahmad-dev/Whack-a-Mole",
    desc: "Classic arcade game focusing on timing events and DOM updates."
  },
  {
    name: "Tic-Tac-Toe",
    type: "Game Logic",
    tech: "Minimax Algorithm",
    link: "https://waleed-ahmad-dev.github.io/Tic-Tac-Toe/",
    github: "https://github.com/Waleed-Ahmad-dev/Tic-Tac-Toe",
    desc: "Unbeatable Tic-Tac-Toe implementing game logic and AI."
  },
  {
    name: "Weather App",
    type: "API Integration",
    tech: "Fetch API / Async",
    link: "https://waleed-ahmad-dev.github.io/Weather-App/",
    github: "https://github.com/Waleed-Ahmad-dev/Weather-App",
    desc: "Real-time weather fetching app with dynamic background updates."
  },
  {
    name: "JS Calculator",
    type: "Utility",
    tech: "JavaScript Logic",
    link: "https://waleed-ahmad-dev.github.io/Calculator/",
    github: "https://github.com/Waleed-Ahmad-dev/Calculator",
    desc: "A functional calculator handling mathematical operations and edge cases."
  },
  {
    name: "RPS Game",
    type: "Game",
    tech: "JavaScript",
    link: "https://waleed-ahmad-dev.github.io/Rock-Papper-Scissors-Game/",
    github: "https://github.com/Waleed-Ahmad-dev/Rock-Papper-Scissors-Game",
    desc: "Rock Paper Scissors implementation with score tracking."
  },
];

const totalProjects = featuredProjects.length + playground.length;

export const aboutStats = {
  experienceYears: "2+",
  projectsCompleted: `${totalProjects}+`,
  stackStatus: "Full Stack Capable",
  stackSub: "From DB Design to UI Animations",
};

export const aboutText = {
  p1: {
    main: "I started coding seriously at",
    age: "14",
    highlight: "The Odin Project",
    end: "while balancing school. Now, at 16, I’m not just writing code; I’m shipping products."
  },
  p2: "Currently, I’m an O-Levels student and a Lead Developer intern. My sweet spot is the Backend—designing scalable APIs and managing databases—but I’m equally dangerous on the Frontend.",
  p3: "Whether it’s building a custom CMS for a real estate giant or developing an LMS, I build software that solves real problems."
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