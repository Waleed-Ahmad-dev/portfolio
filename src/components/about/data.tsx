import { Code, Layout, Server, Database } from 'lucide-react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiRemix, SiNodedotjs, 
  SiPython, SiDjango, SiFlask, SiTailwindcss, 
  SiMysql, SiPostgresql, SiMongodb, SiGo, 
  SiGit, SiGithub, 
  SiFirebase,
  SiVercel,
  SiCloudflare
} from 'react-icons/si';

export const  techStack = [
  { name: 'HTML5', color: 'from-[#4A1A0A] to-[#6B2610]', icon: <SiHtml5 className="text-white text-xl" /> },
  { name: 'CSS3', color: 'from-[#1A3A5A] to-[#2A5A8A]', icon: <SiCss3 className="text-white text-xl" /> },
  { name: 'JavaScript', color: 'from-[#3A3A00] to-[#5A5A00]', icon: <SiJavascript className="text-[#F7DF1E] text-xl" /> },
  { name: 'React', color: 'from-[#113355] to-[#224466]', icon: <SiReact className="text-[#61DAFB] text-xl" /> },
  { name: 'TypeScript', color: 'from-[#1A3A5A] to-[#2A5A8A]', icon: <SiTypescript className="text-white text-xl" /> },
  { name: 'Next.js', color: 'from-[#111111] to-[#222222]', icon: <SiNextdotjs className="text-white text-xl" /> },
  { name: 'GoLang', color: 'from-[#113355] to-[#224466]', icon: <SiGo className="text-white text-xl" /> },
  { name: 'Node.js', color: 'from-[#2A4A2A] to-[#3A5A3A]', icon: <SiNodedotjs className="text-[#8CC84B] text-xl" /> },
  { name: 'MySQL', color: 'from-[#003A5A] to-[#114A6A]', icon: <SiMysql className="text-white text-xl" /> },
  { name: 'PostgreSQL', color: 'from-[#113355] to-[#224466]', icon: <SiPostgresql className="text-white text-xl" /> },
  { name: 'MongoDB', color: 'from-[#2A4A2A] to-[#3A5A3A]', icon: <SiMongodb className="text-white text-xl" /> },
  { name: 'Firebase', color: 'from-[#FFCA28] to-[#FFA000]', icon: <SiFirebase className="text-white text-xl" /> },
  { name: 'Git', color: 'from-[#4A1A0A] to-[#6B2610]', icon: <SiGit className="text-white text-xl" /> },
  { name: 'GitHub', color: 'from-[#111111] to-[#3A2A5A]', icon: <SiGithub className="text-white text-xl" /> },
  { name: 'Vercel', color: 'from-[#000000] to-[#202020]', icon: <SiVercel className="text-white text-xl" /> },
  { name: 'Cloudflare', color: 'from-[#F38020] to-[#E55F00]', icon: <SiCloudflare className="text-white text-xl" /> },
  { name: 'Python', color: 'from-[#1A3A5A] to-[#2A5A8A]', icon: <SiPython className="text-[#FFD43B] text-xl" /> },
  { name: 'Django', color: 'from-[#092E20] to-[#0A3A2A]', icon: <SiDjango className="text-white text-xl" /> },
  { name: 'Flask', color: 'from-[#111111] to-[#222222]', icon: <SiFlask className="text-white text-xl" /> },
  { name: 'Tailwind CSS', color: 'from-[#113355] to-[#224466]', icon: <SiTailwindcss className="text-white text-xl" /> },
  { name: 'Remix.js', color: 'from-[#113355] to-[#224466]', icon: <SiRemix className="text-white text-xl" /> },
];

export const specialties = [
  {
    icon: <Code className="w-6 h-6 text-[#08D9D6]" />,
    title: "Clean Code",
    description: "Maintainable, efficient solutions following best practices"
  },
  {
    icon: <Layout className="w-6 h-6 text-[#08D9D6]" />,
    title: "UI/UX Design",
    description: "User-centric interfaces with intuitive interactions"
  },
  {
    icon: <Server className="w-6 h-6 text-[#08D9D6]" />,
    title: "Backend Systems",
    description: "Scalable server architecture and API design"
  },
  {
    icon: <Database className="w-6 h-6 text-[#08D9D6]" />,
    title: "Database Design",
    description: "Optimized data models and query performance"
  }
];