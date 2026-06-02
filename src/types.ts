export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  type: 'python' | 'data' | 'web';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
