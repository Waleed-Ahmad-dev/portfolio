export const personalInfo = {
  name: "Waleed Ahmad",
  alias: "Shadow Scripter",
  role: "Full-Stack Developer",
  age: 16,
  location: "Pakistan",
  // Hook Options:
  // 1. "Compiling ideas into reality—from the shadows to the browser."
  // 2. "Level 16 Architect building enterprise systems while crushing O-Levels."
  tagline: "Architecting scalable digital realms from the shadows.",
  bio: "I'm a 16-year-old software artisan and O-Level student who speaks fluent JavaScript and Python. When I'm not studying for exams, I'm leading backend development for enterprise CMS platforms or crafting distraction-free tools for writers. I bridge the gap between 'it works on my machine' and production-grade software.",
  email: "contact@waleedahmad.dev", // Placeholder
  socials: {
    github: "https://github.com/Waleed-Ahmad-dev",
    linkedin: "#", // Add if you have one
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
    name: "PCI Sign App",
    type: "Internal Tool",
    tech: "JavaScript / HTML",
    link: "https://sign.pcirealestate.site/",
    github: "https://github.com/Waleed-Ahmad-dev/Sign-app",
    desc: "Automated email signature generator for corporate identity consistency."
  },
  {
    name: "The Arcade",
    type: "Game Collection",
    tech: "Vanilla JS / DOM",
    link: "https://waleed-ahmad-dev.github.io/Whack-a-Mole/",
    github: "https://github.com/Waleed-Ahmad-dev/Whack-a-Mole",
    desc: "A collection of browser games including Whack-a-Mole, Tic-Tac-Toe, and RPS."
  },
];

export const skills = {
  languages: [
    "TypeScript",
    "JavaScript (ES6+)",
    "Python",
    "Go (Learning)",
    "SQL",
    "Bash/Shell"
  ],
  frontend: [
    "Next.js 14",
    "React",
    "Tailwind CSS",
    "Three.js",
    "Framer Motion",
    "Redux Toolkit"
  ],
  backend: [
    "Node.js",
    "Express",
    "Prisma ORM",
    "PostgreSQL",
    "MongoDB",
    "Redis"
  ],
  devops: [
    "Docker",
    "Linux (Arch/Ubuntu)",
    "Git / GitHub Actions",
    "AWS",
    "Vercel",
    "Nginx"
  ],
  tools: [
    "Postman",
    "Figma",
    "Canva",
    "Vim/Neovim",
    "Obsidian"
  ]
};

const totalProjects = featuredProjects.length + playground.length;

export const aboutStats = {
  experienceYears: "2+",
  projectsCompleted: `${totalProjects}+`, // Dynamic Calculation
  stackStatus: "Full Stack Capable",
  stackSub: "From DB Design to UI Animations",
};

export const aboutText = {
  // We split these into an array so we can map them or use them individually
  p1: {
    main: "I started coding seriously at",
    age: "14",
    highlight: "The Odin Project",
    end: "while balancing school. Now, at 16, I’m not just writing code; I’m shipping products."
  },
  p2: "Currently, I’m an O-Levels student and a Lead Developer intern. My sweet spot is the Backend—designing scalable APIs and managing databases—but I’m equally dangerous on the Frontend.",
  p3: "Whether it’s building a custom CMS for a real estate giant or developing an LMS, I build software that solves real problems."
};