export interface Project {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  techStack: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'cms';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  CONTACT = 'contact'
}
