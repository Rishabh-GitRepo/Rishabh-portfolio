import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config'; // Ensure environment variables are loaded

// 1. Create adapter
const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});

// 2. Instantiate PrismaClient with adapter
const prisma = new PrismaClient({ adapter });

async function main() {
  // Clear existing data to avoid duplicates on re-seed
  await prisma.$transaction([
    prisma.resumeProfile.deleteMany(),
    prisma.education.deleteMany(),
    prisma.experience.deleteMany(),
    prisma.project.deleteMany(),
    prisma.skill.deleteMany(),
    prisma.socialLink.deleteMany(),
  ]);

  // 1. PROFILE
  await prisma.resumeProfile.create({
    data: {
      name: 'Rishabh Kumar Pandey',
      headline: 'Full-Stack Engineer | React.js | Node.js | TypeScript',
      email: 'rishavforjobs22@gmail.com',
      phone: '+91 86175 88984',
      location: 'Pune, India',
      linkedin: 'https://linkedin.com/in/rishabhpandey2611',
      github: 'https://github.com/Rishabh-GitRepo',
      summary:
        'Full-stack engineer with 2+ years at Accenture building enterprise banking applications with React.js, TypeScript, Node.js, and REST APIs - covering UI component architecture, performance optimization, secure auth, real-time WebSockets, PL/SQL, and containerized microservices deployment. Specializing in AI-powered application development - offline LLM pipelines (Whisper.cpp, Ollama, Silero VAD), real-time speech and GenAI integration using Tauri/Rust, and production deployment with Docker and Kubernetes.',
      resumePdfUrl: '/Rishabh_Kumar_Pandey_Resume.pdf', // Ensure you put the PDF in frontend/public folder
    },
  });

  // 2. EXPERIENCE
  await prisma.experience.create({
    data: {
      company: 'Accenture',
      jobTitle: 'Associate Software Engineer',
      dates: '2024 – Present',
      durationLabel: '2+ years',
      location: 'Pune, India',
      about:
        'Accenture is a global professional services company that helps organizations build their digital core, optimize operations, and accelerate growth. (Domain: Enterprise Banking Applications)',
      industry: 'IT Services & Consulting',
      employees: '700,000+',
      headquarters: 'Dublin, Ireland',
      website: 'https://www.accenture.com',
      responsibilities: [
        'Built and maintained enterprise banking features using React.js, TypeScript, and Node.js; delivered REST APIs with async handling, caching, and error management.',
        'Developed a reusable component library using React Hooks, Redux Toolkit, Context API, and Tailwind CSS; optimized rendering with useMemo, useCallback, lazy loading, and code splitting.',
        'Designed and optimized PL/SQL stored procedures, SQL queries, and indexes for high-volume banking data; secured access with JWT and OAuth 2.0.',
        'Implemented real-time chat using WebSockets and Socket.IO; containerized and deployed microservices with Docker and Kubernetes; integrated third-party APIs with retry logic and monitoring.',
      ],
      technologies: ['React.js', 'TypeScript', 'Node.js', 'REST APIs', 'PL/SQL', 'Docker', 'Kubernetes', 'WebSockets'],
      keyLearnings:
        'Gained deep expertise in enterprise banking architecture, secure authentication flows, high-performance React rendering, and containerized microservice deployment.',
    },
  });

  // 3. PROJECTS (Main Projects)
  await prisma.project.createMany({
    data: [
      {
        title: 'AI Interview Coach',
        description:
          'Building a cross-platform desktop interview coach using Tauri and Rust - fully offline-capable with no cloud dependency for core AI functions. Engineered a local AI pipeline combining Whisper.cpp (STT), Ollama (LLM), Silero VAD (voice detection), and Piper (TTS) for end-to-end offline speech processing and AI-driven interview interaction.',
        technologies: ['Tauri', 'Rust', 'TypeScript', 'Whisper.cpp', 'Ollama', 'Silero VAD', 'Piper', 'MediaPipe', 'Groq/Gemini'],
        highlights: [
          'Fully offline-capable with no cloud dependency for core AI functions.',
          'Integrated MediaPipe with Groq/Gemini for real-time behavioral and facial analysis.',
        ],
        year: 'Active Development',
        githubUrl: 'https://github.com/Rishabh-GitRepo/ai-interview-coach',
      },
      {
        title: 'AI Tutor - Real-Time Learning Platform',
        description:
          'Building a real-time AI-assisted learning platform with a React.js/Next.js frontend and Node.js backend. Implemented live sessions using Socket.IO for interactive learning.',
        technologies: ['React.js', 'Next.js', 'Node.js', 'Socket.IO'],
        highlights: [
          'Applied code splitting and lazy loading to reduce initial load time by ~30%.',
        ],
        year: 'Active Development',
        githubUrl: 'https://github.com/Rishabh-GitRepo/ai-tutor',
      },
      {
        title: 'Real-Time Chatbot',
        description:
          'Customer support chat application with real-time message delivery, read receipts, and persistent chat history.',
        technologies: ['React.js', 'Node.js', 'WebSockets'],
        highlights: ['Real-time delivery', 'Persistence using MongoDB'],
        year: 'Past Project',
        githubUrl: 'https://github.com/Rishabh-GitRepo', // Replace with exact link if available
      },
      {
        title: 'Performance Optimizer',
        description:
          'A React.js application focused on maximizing performance through advanced Webpack and Babel configurations.',
        technologies: ['React.js', 'TypeScript', 'Webpack', 'Babel'],
        highlights: ['Implemented lazy loading and code splitting', 'Reduced load time by ~30%'],
        year: 'Past Project',
        githubUrl: 'https://github.com/Rishabh-GitRepo',
      },
      {
        title: 'Auth System',
        description:
          'Secure authentication and authorization system supporting OAuth 2.0 and JWT tokens.',
        technologies: ['React.js', 'Node.js', 'JWT', 'OAuth 2.0', 'MongoDB'],
        highlights: ['Role-based access control', 'Session management'],
        year: 'Past Project',
        githubUrl: 'https://github.com/Rishabh-GitRepo',
      },
      {
        title: 'Microservices Pipeline',
        description:
          'CI/CD pipeline for deploying microservices with zero-downtime releases.',
        technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI'],
        highlights: ['Blue-green deployment', 'Zero-downtime releases'],
        year: 'Past Project',
        githubUrl: 'https://github.com/Rishabh-GitRepo',
      }
    ],
  });

  // 4. SKILLS
  await prisma.skill.createMany({
    data: [
      { 
        category: 'Languages', 
        items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'] 
      },
      { 
        category: 'Frontend', 
        items: ['React.js', 'Next.js', 'React Hooks', 'Redux Toolkit', 'Context API', 'Tailwind CSS', 'Webpack', 'Babel'] 
      },
      { 
        category: 'Backend & APIs', 
        items: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'Socket.IO', 'JWT', 'OAuth 2.0'] 
      },
      { 
        category: 'AI / GenAI', 
        items: ['LLMs', 'RAG', 'Ollama', 'Whisper.cpp', 'Silero VAD', 'Piper', 'MediaPipe', 'Groq', 'Gemini'] 
      },
      { 
        category: 'Databases', 
        items: ['MongoDB', 'PostgreSQL', 'SQL', 'Redis'] 
      },
      { 
        category: 'DevOps & Testing', 
        items: ['Docker', 'Kubernetes', 'Git', 'GitHub Actions', 'Jenkins', 'GitLab CI', 'Jest', 'Agile/Scrum'] 
      },
    ],
  });

  // 5. SOCIAL LINKS
  await prisma.socialLink.createMany({
    data: [
      { label: 'LinkedIn', url: 'https://linkedin.com/in/rishabhpandey2611', icon: 'linkedin' },
      { label: 'GitHub', url: 'https://github.com/Rishabh-GitRepo', icon: 'github' },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });