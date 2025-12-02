import { Project, Experience, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Waleed Ahmad",
  alias: "Shadow Scripter",
  tagline: "Weaving Logic in the Shadows.",
  title: "Full-Stack Developer",
  email: "waleed@example.com", // Placeholder
  location: "Pakistan",
  about: "I am a 16-year-old aspiring software developer currently preparing for my O Levels. With over two years of practical programming experience, I specialize in backend development, scalable APIs, and server-side logic, while maintaining proficiency in full-stack tasks. I completed a software development internship at Firefly Tech Solutions and am currently interning at Premier Choice International, leading the development of a custom CMS. My goal is to create efficient systems and solve complex problems while continuously expanding my knowledge in emerging technologies like Go and Machine Learning."
};

export const PROJECTS: Project[] = [
  {
    title: "PCI CMS",
    description: "A custom Content Management System for Premier Choice International. I architected the backend using Node.js/PostgreSQL and contributed significantly to the React frontend.",
    liveUrl: "https://cms.premierchoiceint.online",
    techStack: ["Node.js", "Express", "PostgreSQL", "React", "Redux"],
    category: "cms"
  },
  {
    title: "Xora",
    description: "A modern SaaS landing page featuring sleek animations and a responsive high-performance design.",
    githubUrl: "https://github.com/Waleed-Ahmad-dev/Xora",
    liveUrl: "https://xora-shadow-scripter.netlify.app/",
    techStack: ["React", "Tailwind CSS", "Vite"],
    category: "frontend"
  },
  {
    title: "Yoom",
    description: "A secure video conferencing application enabling real-time meetings with authentication.",
    githubUrl: "https://github.com/Waleed-Ahmad-dev/Yoom",
    liveUrl: "https://yoom-eight-eta.vercel.app",
    techStack: ["Next.js", "TypeScript", "Clerk", "GetStream", "Shadcn"],
    category: "fullstack"
  },
  {
    title: "NoteScripter",
    description: "A specialized notes app designed for writers and poets to draft and design their books.",
    githubUrl: "https://github.com/Waleed-Ahmad-dev/notes_app",
    liveUrl: "https://notes-app-six-green.vercel.app",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    category: "fullstack"
  },
  {
    title: "AI Attorney",
    description: "Backend development for a legal AI mobile application providing automated legal assistance.",
    liveUrl: "https://www.aiattorney.com.pk/",
    techStack: ["Python", "FastAPI", "Mobile Backend"],
    category: "backend"
  },
  {
    title: "Shadow Cart",
    description: "A fully functional e-commerce platform with dynamic cart management and product filtering.",
    githubUrl: "https://github.com/Waleed-Ahmad-dev/Shadow_Cart",
    liveUrl: "https://shadow-store-ten.vercel.app",
    techStack: ["React", "Redux", "Fake Store API"],
    category: "frontend"
  },
  {
    title: "Quranic Transformation",
    description: "An LMS-style application focused on Quranic studies and educational transformation.",
    githubUrl: "https://github.com/Waleed-Ahmad-dev/Quranic-Transformation",
    liveUrl: "https://quranic-transformation.vercel.app",
    techStack: ["Next.js", "React", "Tailwind"],
    category: "fullstack"
  },
  {
    title: "Email Sign Generator",
    description: "A utility app that generates professional email signatures dynamically.",
    githubUrl: "https://github.com/Waleed-Ahmad-dev/Sign-app",
    liveUrl: "https://sign.pcirealestate.site/",
    techStack: ["React", "JavaScript", "CSS"],
    category: "frontend"
  },
  {
    title: "Mini Games Collection",
    description: "A collection of interactive games including Memory Game, Whack-a-Mole, Tic-Tac-Toe, and RPS to demonstrate logic and DOM manipulation.",
    githubUrl: "https://github.com/Waleed-Ahmad-dev",
    liveUrl: "https://waleed-ahmad-dev.github.io/Whack-a-Mole/",
    techStack: ["HTML5", "CSS3", "JavaScript", "React"],
    category: "frontend"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Premier Choice International",
    role: "Full Stack Intern",
    period: "Oct 2025 - Present",
    description: "Leading the development of a custom Content Management System (CMS) using modern technologies like Node.js, Express.js, and PostgreSQL. Responsible for backend architecture, database schema design, and frontend integration.",
  },
  {
    company: "Firefly Tech Solutions",
    role: "Software Development Intern",
    period: "Jan 2025 - June 2025",
    description: "Contributed to web application development and debugging. Gained hands-on experience in a professional software environment working with senior developers to optimize code and fix bugs.",
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Go (Learning)", "SQL", "HTML5/CSS3"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Three.js", "Redux", "React Query"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "Prisma/Sequelize", "Redis"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git/GitHub", "AWS", "Firebase", "Linux/Bash", "Postman", "Figma"]
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Waleed-Ahmad-dev", icon: "Github" },
  { platform: "LinkedIn", url: "#", icon: "Linkedin" } 
];