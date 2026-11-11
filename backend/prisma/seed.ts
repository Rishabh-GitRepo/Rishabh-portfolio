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
      headline: 'Full-Stack Engineer | React.js | Node.js | TypeScript | Immediate Joiner',
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
        title: 'E-Cart- E-Commerce Shopping Site',
        description:
          'E-Cart is a modern, full‑stack multi‑vendor e‑commerce platform built with the latest technologies. It features role‑based workflows for Customers, Sellers, and Admins and promotes rapid development, scalable architecture, and a friendly developer experience.',
        technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router', 'Axios', 'Node.js', 'Express 5', 'MongoDB', 'Mongoose', 'JWT (access + refresh tokens)', 'bcrypt', 'RESTful API'],
        highlights: [
          'Architected a monorepo full-stack app — React 19 + Vite + Tailwind CSS frontend, Express 5 + TypeScript backend, MongoDB/Mongoose ODM',
          'Implemented secure JWT-based authentication with access + refresh tokens, bcrypt hashing, and role-based route guards (Customer/Seller/Admin)',
          'Designed RESTful API (~40 endpoints) covering products, cart, orders, reviews, categories, and admin/seller management',
          'Built a category-based commission engine with quantity thresholds, applied at order time or on COD payment confirmation',
          'Developed multi-role workflows — seller approval system, seller data isolation, admin analytics, and COD payment state tracking',
        ],
        year: 'Past Project',
        githubUrl: 'https://github.com/Rishabh-GitRepo',
      },
        {
        title: 'Interactive Resume-First Personal Portfolio',
        description:
          'Developing a responsive, interactive personal portfolio that combines a traditional resume layout with a dynamic contextual preview panel, allowing recruiters to explore professional experience, education, projects, and technical skills without navigating away from the page.',
        technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Docker', 'CSS', 'REST APIs.'],
        highlights: [
          'Designed a responsive two-column interface with an interactive resume and dynamic details panel',
          'Implemented hover and click interactions to display contextual information about education, professional experience, and projects.',
          'Integrated GitHub repositories, live project previews, LinkedIn profiles, and external links.',
          'Developed REST APIs using Node.js and Express.js to manage structured resume information.',
          'Designed relational database models using PostgreSQL and Prisma ORM.',
          'Containerized frontend, backend, and database services using Docker Compose.',
          'Implemented responsive layouts, accessible interactions, and downloadable PDF resume functionality.',
        ],
        year: 'Nov 2026',
        githubUrl: 'https://github.com/Rishabh-GitRepo/Rishabh-portfolio',
      },
      {
        title: 'LetsTalk-Discord-Like Real-Time Chat Platform',
        description:
          'A production-inspired, microservices-based real-time chat application built with TypeScript, React, and Node.js. Features group chats, channels, real-time messaging, presence indicators (online/offline/typing), and horizontal scalability.',
        technologies: ['TypeScript', 'Node.js', 'Fastify', 'React', 'PostgreSQL', 'Prisma', 'Redis', 'RabbitMQ', 'Socket.IO', 'Docker', 'GitHub Actions'],
        highlights: ['Microservices architecture — 7 independently deployable services',
          'Real-time messaging — WebSocket gateway with reconnect-and-catch-up',
          'Distributed presence — online/offline/typing via Redis TTL keys',
          'Reliable event delivery — transactional outbox pattern over RabbitMQ',
          'Stateless auth — JWT access + rotated refresh tokens with reuse detection',
          'Horizontal scaling — 2+ WebSocket replicas with Redis pub/sub adapter',
          'Observability — structured logs, Prometheus metrics, Grafana dashboards',
          'CI/CD — GitHub Actions → SSH deploy → Oracle Cloud VM',
          'Full-stack TypeScript — end-to-end type safety via shared contracts'],
        year: 'Oct 2026',
        githubUrl: 'https://github.com/Rishabh-GitRepo/LetsTalk',
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