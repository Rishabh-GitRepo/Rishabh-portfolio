import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is required to seed the database');
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

async function main() {
  if (await prisma.resumeProfile.findFirst()) {
    console.log('Resume data already exists; skipping seed.');
    return;
  }

  await prisma.$transaction(async (tx) => {
    await tx.resumeProfile.create({
      data: {
        name: 'Rishabh Kumar Pandey',
        headline: 'Full Stack Developer (React | Node.js | TypeScript)',
        email: 'rishabh.example@gmail.com',
        phone: '+91 98765 43210',
        location: 'Bihar, India (Open to Relocate - Pune)',
        linkedin: 'https://linkedin.com/in/rishabhpandey',
        github: 'https://github.com/rishabhpandey',
        summary:
          'Software Engineer with 2 years of experience at Accenture in the banking domain. Built scalable front-end and back-end systems using React.js, Node.js, and PostgreSQL. Passionate about building scalable web applications and solving real-world problems.',
        resumePdfUrl: '/resume.pdf',
      },
    });

    await tx.education.createMany({
      data: [
        {
          institution: 'XYZ University, Bihar',
          degree: 'B.Tech in Computer Science and Engineering',
          dates: '2020 – 2024',
          grade: 'CGPA: 7.8',
          description:
            'XYZ University is a state university in Bihar known for strong computer science programs.',
          website: 'https://xyzuniversity.ac.in',
        },
        {
          institution: 'Kendriya Vidyalaya',
          degree: 'Class 12 (CBSE)',
          dates: '2018 – 2019',
          grade: '82%',
          description: 'CBSE senior secondary — Physics, Chemistry, Maths, CS.',
        },
      ],
    });

    await tx.experience.create({
      data: {
        company: 'Accenture',
        jobTitle: 'Associate Package Application Developer',
        dates: 'Jan 2023 – Present',
        durationLabel: '2 years',
        location: 'Bengaluru, India',
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
    });

    await tx.project.createMany({
      data: [
        {
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
          thumbnail: '/thumbs/neighbourbazaar.png',
        },
        {
          title: 'Real-Time Chat & Notification Platform',
          description: 'Real-time chat with private DMs and group channels, Redis caching.',
          technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Docker'],
          highlights: ['Private DMs and group channels', 'Redis for caching and pub/sub'],
          year: '2024',
          githubUrl: 'https://github.com/rishabhpandey/realtime-chat',
        },
      ],
    });

    await tx.skill.createMany({
      data: [
        { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Redux', 'HTML', 'CSS', 'Tailwind'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis', 'Kafka'] },
        { category: 'Tools', items: ['Docker', 'Git', 'Linux', 'Postman', 'Prisma'] },
      ],
    });

    await tx.socialLink.createMany({
      data: [
        { label: 'LinkedIn', url: 'https://linkedin.com/in/rishabhpandey', icon: 'linkedin' },
        { label: 'GitHub', url: 'https://github.com/rishabhpandey', icon: 'github' },
      ],
    });
  });
}

main()
  .catch((error: unknown) => {
    console.error('Failed to seed resume data:', error);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());