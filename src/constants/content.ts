import { Education, Experience, Project, SkillCategory } from '../types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Associate Software Engineer',
    company: 'Accenture Pvt. Ltd.',
    period: 'Nov 2024 - Aug 2025',
    duration: '08 Month',
    description: 'Developed and maintained Python-based automation scripts for cloud infrastructure provisioning. Collaboration resulted in a 30% reduction in deployment manual overhead.',
    skills: ['Python', 'Docker', 'Terraform', 'FastAPI']
  },
  {
    id: '2',
    role: 'Junior Data Analyst',
    company: 'GrowthMetrics Analytics',
    period: 'Jan 2022 - Feb 2023',
    duration: '1.2 Years',
    description: 'Conducted exploratory data analysis on retail datasets to identify customer churn trends. Created automated SQL pipelines for weekly stakeholder reporting dashboards.',
    skills: ['SQL', 'Pandas', 'PowerBI', 'Excel VBA']
  },
  {
    id: '3',
    role: 'Frontend Developer Intern',
    company: 'BlueWave Digital',
    period: 'May 2021 - Dec 2021',
    duration: '8 Months',
    description: 'Built responsive web components for client-side portals using React and Tailwind CSS. Optimized asset delivery improving Lighthouse performance scores by 15 points.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Figma']
  }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Tech Valley Institute of Engineering',
    period: '2018 - 2022',
    description: 'Built a strong foundation in software engineering, data structures, databases, and cloud-oriented application development.',
    highlights: ['Software Engineering', 'Data Structures', 'Database Systems']
  },
  {
    id: '2',
    degree: 'Higher Secondary Education',
    institution: 'Central Public School',
    period: '2016 - 2018',
    description: 'Focused on mathematics, computer science, and analytical problem-solving through coursework and practical programming projects.',
    highlights: ['Mathematics', 'Computer Science', 'Problem Solving']
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
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C++', 'Bash']
  },
  {
    title: 'Data Analytics',
    skills: ['Pandas', 'NumPy', 'Tableau', 'PowerBI', 'Statistics', 'Matplotlib']
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Motion', 'HTML5/CSS3']
  },
  {
    title: 'Tools & Clouds',
    skills: ['Git', 'Docker', 'AWS', 'Firebase', 'Jira', 'VS Code']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase Firestore', 'MySQL']
  }
];
