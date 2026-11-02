import type { Resume } from '../types';

export const resume: Resume = {
  profile: {
    name: 'Rishabh ',
    headline: 'Full Stack Developer ',
    email: 'rishabh.example@gmail.com',
    phone: '+91 98765 43210',
    location: 'Bihar, India (Open to Relocate - Pune)',
    linkedin: 'https://linkedin.com/in/rishabhpandey',
    github: 'https://github.com/rishabhpandey',
    summary:
      'Software Engineer with 2 years of experience at Accenture in the banking domain. Built scalable front-end and back-end systems using React.js, Node.js, and PostgreSQL. Passionate about building scalable web applications and solving real-world problems.',
    resumePdfUrl: '/resume.pdf',
  },
  education: [
    {
      id: '1',
      institution: 'XYZ University, Bihar',
      degree: 'B.Tech in Computer Science and Engineering',
      dates: '2020 – 2024',
      grade: 'CGPA: 7.8',
      description:
        'XYZ University is a state university in Bihar known for strong computer science programs.',
      website: 'https://xyzuniversity.ac.in',
    },
    {
      id: '2',
      institution: 'Kendriya Vidyalaya',
      degree: 'Class 12 (CBSE)',
      dates: '2018 – 2019',
      grade: '82%',
      description: 'CBSE senior secondary — Physics, Chemistry, Maths, CS.',
    },
  ],
  experience: [
    {
      id: '1',
      company: 'Accenture',
      jobTitle: 'Associate Package Application Developer',
      dates: 'Jan 2023 – Present',
      location: 'Bengaluru, India',
      durationLabel: '2 years',
      responsibilities: [
        'Worked in banking domain for UBS client.',
        'Trained in PL/SQL and worked on PMO project.',
        'Collaborated with cross-functional teams and gained exposure to agile processes.',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PL/SQL', 'Agile'],
      about:
        'Accenture is a global professional services company that helps organizations build their digital core, optimize operations, and accelerate growth.',
      industry: 'IT Services & Consulting',
      employees: '700,000+',
      headquarters: 'Dublin, Ireland',
      website: 'https://www.accenture.com',
      keyLearnings:
        'Understanding enterprise systems, client requirements, teamwork and working in a large scale corporate environment.',
    },
  ],
  projects: [
    {
      id: '1',
      title: 'NeighbourBazaar – Hyperlocal Marketplace App',
      description:
        'A hyperlocal marketplace for renting/selling items and booking services.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis'],
      highlights: [
        'Built a housing society marketplace.',
        'Implemented authentication, in-app messaging, and service booking.',
      ],
      year: '2024',
      githubUrl: 'https://github.com/rishabhpandey/neighbourbazaar',
      liveUrl: 'https://neighbourbazaar.example.com',
    },
    {
      id: '2',
      title: 'Real-Time Chat & Notification Platform',
      description: 'Real-time chat with private DMs and group channels, Redis caching.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Docker'],
      highlights: ['Private DMs and group channels', 'Redis for caching and pub/sub'],
      year: '2024',
      githubUrl: 'https://github.com/rishabhpandey/realtime-chat',
    },
  ],
  skills: [
    { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Redux', 'HTML', 'CSS', 'Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'Kafka'] },
    { category: 'Tools', items: ['Docker', 'Git', 'Linux', 'Postman', 'Prisma'] },
  ],
  achievements: [],
};