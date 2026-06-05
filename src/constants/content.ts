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
  },
  {
    id: '5',
    role: 'Data Analyst Intern',
    company: 'InnoByte Services',
    period: '25th April 2026 - 25th May 2026',
    duration: '1 Month',
    description: 'Performed data analysis and insights generation. Worked with data visualization and reporting tools to support business decision-making.',
    skills: ['Data Analysis', 'SQL', 'Python', 'Data Visualization', 'Business Intelligence']
  },
  {
    id: '6',
    role: 'Data Analysis Intern',
    company: 'SYNTECXHUB',
    period: '18th May 2026 - 18th June 2026',
    duration: '1 Month',
    description: 'Delivered data-driven insights by modeling customer lifecycle stages via RFM analysis and diagnosing web traffic metrics to improve user acquisition and digital funnel conversion.',
    skills: ['Data Analysis', 'Excel', 'SQL', 'Reporting', 'Remote Collaboration']
  },
  {
    id: '7',
    role: 'Data Analytics Job Simulation',
    company: 'Deloitte',
    period: 'May 10th, 2026',
    duration: '1 Month',
    description: 'Over the period of April 2026 to May 2026, Nishant Kumar has completed practical tasks in Deloitte as part of a job simulation and earned a Certificate of Completion.',
    skills: ['Data Analytics', 'Business Analysis', 'SQL', 'Excel', 'Reporting']
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
    title: 'Personal Portfolio Website',
    description: 'A modern, highly responsive personal portfolio built with Vite and React to showcase my engineering journey, integrating structured SQL analytics with clean, optimized frontend architecture.',
    techStack: ['REACT', 'TAILWIND CSS', 'NODE JS', 'SQL'],
    githubUrl: 'https://github.com/NishantKumar947/nk-portfolio',
    liveUrl: 'https://nk-portfolio-rivp.vercel.app/',
    imageUrl: '/portfolio-website.svg',
    type: 'web',
    // include live demo link where the UI uses `project.githubUrl` for SOURCE; Sections.tsx will open this in a new tab
    // we keep live demo accessible by adding a separate field if needed later
  },
  {
    id: '2',
    title: 'Sales Performance Dashboard',
    description: 'An interactive analytics dashboard that cleans raw sales data to track seasonal revenue trends, identify high-performing products, and deliver region-wise KPIs for data-driven business growth.',
    techStack: ['POWER BI', 'TABLEAU', 'DATA CLEANING', 'KPI REPORTING'],
    githubUrl: 'https://github.com/NishantKumar947/Syntecxhub_Sales_Performance_Dashboard',
    imageUrl: '/sales-performance-dashboard.svg',
    type: 'data'
  },
  {
    id: '3',
    title: 'Student Performance Analysis',
    description: 'A data analytics project focused on preprocessing student academic records to evaluate subject-wise trends and correlate key factors like attendance and study hours to optimize academic results.',
    techStack: ['DATA ANALYSIS', 'EXCEL', 'STATISTICS', 'DATA VISUALIZATION'],
    githubUrl: 'https://github.com/NishantKumar947/Syntecxhub_Student_Performance_Analysis',
    imageUrl: '/student-performance-dashboard.svg',
    type: 'data'
  },
  {
    id: '4',
    title: 'Website Traffic Analytics',
    description: 'A digital analytics project that evaluates web traffic datasets to trace user acquisition channels, audit engagement metrics, and pinpoint conversion bottlenecks to optimize platform performance.',
    techStack: ['WEB ANALYTICS', 'DASHBOARDS', 'FUNNEL TRACKING', 'GOOGLE BI'],
    githubUrl: 'https://github.com/NishantKumar947/syntechhub-web-traffic-analytics',
    imageUrl: '/website-traffic-dashboard.svg',
    type: 'data'
  },
  {
    id: '5',
    title: 'Customer Segmentation Analytics',
    description: 'A behavioral analytics project that processes raw transactional logs to compute RFM metrics, segmenting customer lifecycles into distinct cohorts to drive targeted marketing and retention strategies.',
    techStack: ['PYTHON', 'SQL', 'RFM MODELING', 'MARKETING BI'],
    githubUrl: 'https://github.com/NishantKumar947/SyntechHub-Customer-Segmentation-RFM',
    imageUrl: '/customer-segmentation-rfm-dashboard.svg',
    type: 'data'
  },
  {
    id: '6',
    title: 'Amazon Sales Performance Report',
    description: 'A comprehensive e-commerce analysis project that cleans transaction logs to track sales trends, evaluate fulfillment channels, map geographical demand, and deliver actionable insights for inventory optimization.',
    techStack: ['DATA ANALYSIS', 'E-COMMERCE BI', 'GEO ANALYSIS', 'VISUALIZATION'],
    githubUrl: 'https://github.com/NishantKumar947/Amazon-Sales-Data-Analysis',
    type: 'data'
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
