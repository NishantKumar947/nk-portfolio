import { Education, Experience, Project, SkillCategory } from '../types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Associate Software Engineer',
    company: 'Accenture Pvt. Ltd.',
    period: 'Nov 2024 - Aug 2025',
    duration: '08 Month',
    description: 'Developed and maintained Python-based automation scripts for cloud infrastructure provisioning. Collaboration resulted in a 30% reduction in deployment manual overhead.',
    skills: ['Networking', 'Network Protocol', 'Alert Monitoring', 'Solarwinds', 'ServiceNow',]
  },
  {
    id: '2',
    role: 'MERN Stack Intern',
    company: 'Intern Nexus',
    period: 'June 2022- August 2022',
    duration: '2 months',
    description: ' Honed skills in MERN stack. Contributed to single projects in teamwork and enhanced project management.',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'React.js']
  },
  {
    id: '3',
    role: 'Blockchain with Cyber Security Intern',
    company: 'CodroidHub',
    period: 'June 2023 - Jul 2023',
    duration: '1 Months',
    description: 'Built responsive web components for client-side portals using React and Tailwind CSS. Optimized asset delivery improving Lighthouse performance scores by 15 points.',
    skills: ['Blockchain', 'Cyber Security', 'Solidity']
  },
   {
    id: '4',
    role: 'Web Development Intern',
    company: 'Oasis Infobyte',
    period: 'September 2023- October 2023',
    duration: '1 Months',
    description: 'Contributed to a prototype shopping website, temperature converter, and built a personal portfolio. Deepened understanding of front-end and back-end development',
    skills: ['HTML', 'CSS', 'Javascript', 'React.js', 'Node.js', 'SQL']
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: 'Master Of Computer Applications',
    institution: 'SRM Institute of Science and Technology.',
    period: '2025 - 2027',
    description: 'Built a strong foundation in software engineering, Data Analytics, Python, Artificial Intelligence.',
    highlights: ['Software Engineering', 'Data Analytics', 'AI', 'Database Systems']
  },
  {
    id: '2',
    degree: 'Bachelor Of Computer Applications',
    institution: 'Amity University Patna',
    period: '2021 - 2024',
    description: 'Focused on C Programmining, Java, Data Structures, Databases, Networking, and analytical problem-solving through coursework and practical programming projects.',
    highlights: ['C', 'Java', 'Data Structure', 'SQL', 'Networking']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CloudResource Optimizer',
    description: 'A Python CLI tool that monitors AWS resource usage and suggests cost-saving terminates for idle instances based on historical activity patterns.',
    techStack: ['Python', 'Boto3', 'JSON', 'CLI Development'],
    githubUrl: '#',
    type: 'python'
  },
  {
    id: '2',
    title: 'ChurnVision Dashboard',
    description: 'A comprehensive analytics dashboard for subscription-based businesses, visualizing churn probability and customer lifetime value metrics.',
    techStack: ['Python', 'SQL', 'Streamlit', 'Scikit-learn'],
    githubUrl: '#',
    type: 'data'
  },
  {
    id: '3',
    title: 'Modern Retailer Hub',
    description: 'A fast, SEO-optimized e-commerce storefront with dynamic product filtering, persistent cart state, and a clean minimalist UI/UX.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind', 'Framermotion'],
    githubUrl: '#',
    type: 'web'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'SQL', 'C', 'PostgreSQL']
  },
  {
    title: 'Data Analytics',
    skills: ['Pandas', 'NumPy', 'Tableau', 'PowerBI', 'Statistics', 'Matplotlib']
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js','HTML5/CSS3']
  },
  {
    title: 'Tools & Clouds',
    skills: ['Git', 'GitHub', 'Linux', 'Canva', 'VS Code']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL']
  }
];
