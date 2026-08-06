'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Database,
  Download,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MoveRight,
  Send,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TailwindCSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Flask'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'Google Cloud'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'Docker'],
  },
  {
    title: 'Concepts',
    items: ['REST APIs', 'JWT Auth', 'Machine Learning', 'Data Structures', 'Algorithms', 'OOP'],
  },
];

const projects = [
  {
    title: 'Convulsive Seizure Detection Device',
    description: 'Wearable healthcare IoT device using accelerometer data to detect convulsive motion and notify caregivers in real time.',
    image: '/project1/imageproject1.png',
    href: '/project1/Convusive Seizure Detection.pdf',
    tags: ['Raspberry Pi', 'Arduino', 'Python', 'Bluetooth'],
    accent: 'from-white/20 via-white/10 to-transparent',
  },
  {
    title: 'EXAMPLAT',
    description:
      'AI-powered national examination platform built with the MERN stack featuring secure authentication, and scalable backend architecture. (ongoing)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOPunXDBl0HyhvVFB1UJ8lyr9AeA3j0kZZHfQCwLBBg&s=10',
    href: 'https://github.com/adityasmtg13/examplat',
    tags: ['MERN', 'TypeScript', 'MongoDB', 'JWT', 'Analytics'],
    accent: 'from-white/20 via-white/10 to-transparent',
  },
  {
    title: 'EEG Seizure CNN Compression (IEEE)',
    description: 'Published IEEE research on structured CNN pruning for EEG seizure detection — 50% model compression with maintained accuracy.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKvDRlsrLjzlrQQ9eoJjQria8oHDd3i9mps7DUWlZgw&s=10',
    href: 'https://ieeexplore.ieee.org/document/11495868',
    tags: ['Research', 'CNN', 'Pruning', 'IEEE'],
    accent: 'from-white/20 via-white/10 to-transparent',
  },
  {
    title: 'FlavorRecipes',
    description: 'AI-powered recipe generation platform that creates real-time recipes using LLM APIs; integrated Gemini API for dynamic recipe generation based on user inputs. Built with JavaScript, React and Node.js with optimized state handling for improved performance.',
    image: '/project4/vite.png',
    href: 'https://aflavorrecipess.vercel.app/',
    tags: ['JavaScript', 'React', 'Node.js', 'Gemini API'],
    accent: 'from-white/20 via-white/10 to-transparent',
  },
  {
    title: 'OTP-Based Smart Lock System',
    description: 'Portable Arduino-based OTP smart lock with time-bound authentication, three-strike lockout, and low-cost hardware design.',
    image: '/project5/imageproject5.png',
    href: '/project5/ECS2_Report.pdf',
    tags: ['Arduino', 'Embedded C', 'IoT', 'Security'],
    accent: 'from-white/20 via-white/10 to-transparent',
  },
  {
    title: 'PICASO AI',
    description: 'AI chatbot integrating Gemini API for real-time conversational intelligence; built with Python and Flask, with a responsive frontend using the Web Speech API. Implemented secure API key management via environment variables and deployed on Render.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoVqrcGorSGN8Bkviun91Bk1de3c7MkCvsEu_efpnXQ&s=10',
    href: 'https://picaso-xyz.onrender.com/',
    tags: ['Python', 'Flask', 'Gemini API', 'JavaScript', 'Web Speech API'],
    accent: 'from-white/20 via-white/10 to-transparent',
  },
  {
    title: 'Customer Behaviour Prediction',
    description: 'Hybrid AI recommendation engine combining ANN, Genetic Algorithms, and Fuzzy Logic for purchase prediction and customer segmentation.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgxAUgwqnej835B6gSwxzsGN48G5IrysIybNuazfqog&s=10',
    tags: ['ANN', 'Genetic Algorithms', 'Fuzzy Logic', 'Forecasting'],
    accent: 'from-white/20 via-white/10 to-transparent',
  },
  {
    title: 'RentItEase',
    description: 'Full Stack Rental Marketplace: role-based dashboards, secure auth, and responsive product listings for vendors and users. (ongoing)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fsCew-8aDWeO9HKYRftCZdi460dY_5R_5PfihEhaVg&s',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    accent: 'from-white/20 via-white/10 to-transparent',
  },
];

const achievements = [
  {
    title: '4× National Hackathon Champion',
    description:
      'Secured 1st Place in four national-level hackathons, including AI/ML and Generative AI competitions conducted by IIT Hyderabad and other national platforms.',
  },
  {
    title: 'Best FinTech Solution',
    description: 'Awarded Best FinTech Solution at HackVerse 2025 for developing an AI-powered financial intelligence platform.',
  },
  {
    title: 'IEEE Research Publication',
    description:
      'Co-authored an IEEE conference paper on efficient CNN compression for EEG seizure detection, focusing on reducing model complexity while maintaining predictive performance.',
  },
  {
    title: 'Visteon Scholar Program',
    description:
      'Selected for the Visteon Scholar Program, receiving industry-oriented training in automotive technologies, software engineering, and applied research.',
  },
  {
    title: 'AWS Academy Graduate',
    description:
      'Successfully completed AWS Academy Cloud Foundations and Cloud Architecting programs with hands-on cloud infrastructure experience.',
  },
  {
    title: 'Java Code Maestro & Maverick',
    description: 'Recognized by CSI VIT-AP for outstanding Java programming and problem-solving skills.',
  },
  {
    title: 'Deputy Captain',
    description:
      'Deputy Captain, Marketing & Social Media Department, IETE VIT-AP. Led digital campaigns, technical event promotions, and student engagement initiatives.',
  },
];

const certifications = [
  { title: 'AWS Academy Cloud Architecting', org: 'Amazon Web Services', year: '2025', details: 'Cloud Architecture • AWS Lambda' },
  { title: 'AWS Academy Cloud Foundations', org: 'Amazon Web Services', year: '2025', details: 'Cloud Computing Fundamentals' },
  { title: 'DevOps, Agile & Design Thinking', org: 'IBM', year: '2026', details: 'DevOps • Kubernetes • Agile' },
  { title: 'Artificial Intelligence Fundamentals', org: 'IBM', year: '2025', details: 'Artificial Intelligence' },
  { title: 'Hashgraph Developer', org: 'The Hashgraph Association', year: '2026', details: 'Distributed Ledger Technology' },
];

const experiences = [
  {
    position: 'Visteon Scholar',
    org: 'Visteon Corporation',
    date: '2026 — Present',
    badge: 'Scholarship',
    summary:
      "Selected for the prestigious Visteon Scholar Program, gaining industry exposure through technical training, engineering projects, and research-driven learning in software and automotive technologies.",
    skills: ['Software Engineering', 'Embedded Systems', 'Industry Training'],
  },
  {
    position: 'Deputy Captain – Marketing & Social Media',
    org: 'IETE VIT-AP Student Chapter',
    date: '2025 — Present',
    badge: 'Leadership',
    summary:
      "Leading marketing strategy and digital outreach for one of the university's largest technical communities while collaborating with multidisciplinary teams to organize technical events.",
    skills: ['Leadership', 'Marketing', 'Event Management'],
  },
  {
    position: 'Data Science Intern',
    org: 'Coratia Technologies',
    date: 'Feb 2024 - Mar 2024',
    badge: 'Internship',
    summary:
      'Worked on real-world data analysis projects involving data preprocessing, visualization, and machine learning fundamentals to generate meaningful business insights.',
    skills: ['Python', 'Data Analysis', 'Machine Learning'],
  },
];

const stats = [
  { label: 'National Hackathon Champion', value: '4×' },
  { label: 'IEEE Publication', value: '1' },
  { label: 'Professional Certifications', value: '14+' },
  { label: 'Major Projects', value: '6+' },
  { label: 'Graduate', value: '2027' },
];

const featuredHighlights = [
  { emoji: '🏆', text: '4× National Hackathon Winner' },
  { emoji: '📄', text: 'IEEE Conference Author' },
  { emoji: '☁', text: 'AWS Academy Graduate' },
  { emoji: '🤖', text: 'AI & ML Enthusiast' },
  { emoji: '💻', text: 'Full Stack Developer' },
  { emoji: '🚀', text: 'Visteon Scholar' },
  { emoji: '🌐', text: 'Open Source Learner' },
  { emoji: '🧠', text: 'Problem Solver' },
];

const GITHUB_USERNAME = 'adityasmtg13';
const GITHUB_CACHE_KEY = 'portfolio-github-repos-cache';
const GITHUB_CACHE_TTL = 1000 * 60 * 60 * 12; // 12 hours

const FEATURED_REPOS = [
  {
    slug: 'examplat',
    displayName: 'ExamPlat',
    tech: 'TypeScript / MERN',
    description:
      'AI-powered national examination platform built with the MERN stack featuring secure authentication, government-style workflows, analytics dashboards, mock examinations, PDF report generation, Cloudinary integration, and scalable backend architecture.',
    tags: ['MERN', 'TypeScript', 'MongoDB', 'JWT', 'Analytics'],
    fallbackStars: 24,
    fallbackForks: 6,
  },
  {
    slug: 'FLAVORRECIPES',
    displayName: 'Flavor Recipes',
    tech: 'React',
    description:
      'Modern recipe discovery platform with responsive design, advanced search, category filtering, favorites, and a clean user experience powered by REST APIs.',
    tags: ['React', 'REST API', 'UI/UX'],
    fallbackStars: 18,
    fallbackForks: 4,
  },
] as const;

const CREEPER_HEATMAP = [
  [0, 1, 1, 1, 1, 1, 0],
  [1, 4, 0, 0, 0, 4, 1],
  [1, 0, 4, 4, 4, 0, 1],
  [1, 2, 0, 0, 0, 2, 1],
  [0, 1, 1, 1, 1, 1, 0],
] as const;
const CONTRIBUTION_COLORS = ['#111111', '#0E5F4B', '#147D5A', '#21A366', '#34D399'];

type FeaturedRepoDefinition = (typeof FEATURED_REPOS)[number];

type GithubRepo = {
  id: number;
  slug: string;
  displayName: string;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
  created_at: string;
  stargazers_count: number;
  forks_count: number;
};

type GithubCache = {
  repos: GithubRepo[];
  timestamp: number;
};

function formatRelativeDate(dateString: string, label: 'Updated' | 'Created' = 'Updated') {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return `${label} today`;
  if (diffDays === 1) return `${label} yesterday`;
  if (diffDays < 7) return `${label} ${diffDays} days ago`;

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks < 4) return `${label} ${diffWeeks} week${diffWeeks === 1 ? '' : 's'} ago`;

  const diffMonths = Math.floor(diffDays / 30);
  return `${label} ${diffMonths} month${diffMonths === 1 ? '' : 's'} ago`;
}

function getCachedGithubRepos(): GithubCache | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = localStorage.getItem(GITHUB_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GithubCache;
    if (!parsed || !Array.isArray(parsed.repos) || typeof parsed.timestamp !== 'number') return null;
    return parsed;
  } catch {
    return null;
  }
}

function setCachedGithubRepos(repos: GithubRepo[]) {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(GITHUB_CACHE_KEY, JSON.stringify({ repos, timestamp: Date.now() }));
  } catch {
    // Ignore storage errors in private mode or when storage is unavailable.
  }
}

async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  const results = await Promise.allSettled(
    FEATURED_REPOS.map(async (repo) => {
      const response = await fetch(`https://api.github.com/repos/${username}/${repo.slug}`, {
        headers: {
          Accept: 'application/vnd.github+json',
        },
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`${repo.slug} API returned ${response.status}`);
      }

      const data = await response.json();
      return {
        id: data.id,
        slug: repo.slug,
        displayName: repo.displayName,
        name: data.name,
        description: data.description,
        html_url: data.html_url,
        language: data.language,
        updated_at: data.updated_at || data.created_at,
        created_at: data.created_at,
        stargazers_count: data.stargazers_count || 0,
        forks_count: data.forks_count || 0,
      } as GithubRepo;
    }),
  );

  const successful = results
    .filter((item): item is PromiseFulfilledResult<GithubRepo> => item.status === 'fulfilled')
    .map((item) => item.value);

  if (successful.length === 0) {
    throw new Error('GitHub featured repositories unavailable');
  }

  return FEATURED_REPOS.map((repo) => successful.find((item) => item.slug === repo.slug)).filter(
    (item): item is GithubRepo => Boolean(item),
  );
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticButton({ children, className = '', href, onClick, download }: { children: React.ReactNode; className?: string; href?: string; onClick?: (e: React.MouseEvent) => void; download?: string | boolean }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;
    setOffset({ x, y });
  };

  const content = (
    <motion.a
      href={href}
      onClick={onClick}
      download={download as any}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y, scale: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className={className}
    >
      {children}
    </motion.a>
  );

  return content;
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [terminalMode, setTerminalMode] = useState(false);
  const [konamiMode, setKonamiMode] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const sudoBufferRef = useRef('');
  const konamiRef = useRef('');

  useEffect(() => {
    setMounted(true);

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, lerp: 0.08 });
    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(progress);

      const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];
      const current = sections.findLast((section, index) => {
        const id = section.toLowerCase();
        const element = document.getElementById(id === 'home' ? 'home' : id);
        if (!element) return false;
        const top = element.offsetTop - 160;
        return window.scrollY >= top;
      });
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', (event) => setCursorPosition({ x: event.clientX, y: event.clientY }));

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      sudoBufferRef.current += key;
      if (sudoBufferRef.current.includes('sudo')) {
        setTerminalMode((prev) => !prev);
        sudoBufferRef.current = '';
      }

      const sequence = `${konamiRef.current}${key}`;
      konamiRef.current = sequence.slice(-10);
      if (konamiRef.current === 'uuddlrlrba') {
        setKonamiMode(true);
        window.setTimeout(() => setKonamiMode(false), 1400);
        konamiRef.current = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('terminal-mode', terminalMode);
    document.documentElement.classList.toggle('konami-mode', konamiMode);
  }, [terminalMode, konamiMode]);

  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [githubLoading, setGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState<string | null>(null);
  const [useCreatedDateFallback, setUseCreatedDateFallback] = useState(false);
  const [achievement, setAchievement] = useState<string | null>(null);
  const backgroundDots = useMemo(() => Array.from({ length: 30 }), []);

  useEffect(() => {
    const cached = getCachedGithubRepos();
    const cacheIsFresh = cached ? Date.now() - cached.timestamp < GITHUB_CACHE_TTL : false;
    if (cached) {
      setRepos(cached.repos);
    }

    const loadRepos = async () => {
      try {
        const fetchedRepos = await fetchGithubRepos(GITHUB_USERNAME);
        setRepos(fetchedRepos);
        setGithubError(null);
        setUseCreatedDateFallback(false);
        setCachedGithubRepos(fetchedRepos);
      } catch (error) {
        if (cached) {
          setGithubError('GitHub is temporarily unavailable. Showing cached repository data.');
        } else {
          setGithubError('GitHub is unavailable. Unable to load repository data right now.');
          setUseCreatedDateFallback(true);
        }
      } finally {
        setGithubLoading(false);
      }
    };

    if (!cached || !cacheIsFresh) {
      loadRepos();
    } else {
      setGithubLoading(false);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <div className="mb-4 h-1.5 w-32 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/50">Initializing portfolio</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="grid-bg absolute inset-0" />
        <div className="noise-overlay" />
      </div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 h-1 bg-white/80"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <motion.div
        className="pointer-events-none fixed z-30 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
        animate={{ x: cursorPosition.x - 18, y: cursorPosition.y - 18, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.3 }}
        style={{ width: 36, height: 36 }}
      />

      <div className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 rounded-full border border-white/10 bg-black/70 p-3 backdrop-blur-xl lg:flex">
        {navItems.map((item) => {
          const targetId = item.toLowerCase();
          return (
            <a
              key={item}
              href={`#${targetId === 'home' ? '' : targetId}`}
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition ${activeSection === item ? 'border-white/40 bg-white/10 text-white' : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white'}`}
            >
              {item.charAt(0)}
            </a>
          );
        })}
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-sm uppercase tracking-[0.35em] text-white/70">
            ADITYA PULIPAKA
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/60 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="animated-underline transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="home" className="relative z-10">
        <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8 lg:py-28">
          <div className="absolute inset-0 overflow-hidden">
            {backgroundDots.map((_, index) => (
              <motion.span
                key={index}
                className="absolute h-1.5 w-1.5 rounded-full bg-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.2, 0.7, 0.2], x: [0, 20, 0], y: [0, -20, 0] }}
                transition={{ duration: 8 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ left: `${(index * 7) % 100}%`, top: `${(index * 11) % 100}%` }}
              />
            ))}
          </div>

          <div className="relative grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="mb-5 text-sm uppercase tracking-[0.4em] text-white/50"
              >
                Software engineer • Researcher • Product Dev
              </motion.p>
              <h1 className="text-5xl font-semibold leading-[0.9] text-white sm:text-6xl lg:text-8xl">
                <span className="block text-outline">Aditya</span>
                <span className="block text-gradient-silver">Pulipaka</span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-3 text-xl font-medium text-white/70 sm:text-2xl">
                {['Computer Science Engineer', 'Full Stack Developer', 'AI & ML Enthusiast', 'Product Development'].map((word, index) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.55 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                className="mt-8 max-w-2xl text-lg leading-8 text-white/65"
              >
                Building intelligent software, scalable web applications, and AI-powered solutions with a sharp focus on product quality and engineering depth.
              </motion.p>
              <div className="mt-10 flex flex-wrap gap-4">
                <MagneticButton href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">
                  View Projects <ArrowUpRight size={16} />
                </MagneticButton>
                <MagneticButton href="/resume/AdityaPuliResume.pdf" download="AdityaPuliResume.pdf" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10">
                  Download Resume <Download size={16} />
                </MagneticButton>
                <MagneticButton href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10">
                  Contact Me <MoveRight size={16} />
                </MagneticButton>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_120px_rgba(255,255,255,0.04)] backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                <span>Current Focus</span>
                <span>2026</span>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/70 p-6">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Sparkles size={16} />
                  <span>Full-stack systems • AI research • product thinking</span>
                </div>
                <div className="mt-8 space-y-5">
                  {[
                    { title: '4th Year B.Tech CSE', detail: 'VIT-AP University • Expected May 2027' },
                    { title: 'Currently Building', detail: 'Advanced Full Stack Applications • AI-powered Intelligent Systems • Research in Efficient Deep Learning • Scalable Backend Architectures • Placement Preparation (DSA + System Design) • Open Source Contributions' },
                    { title: 'Hackathons & Innovation', detail: 'Building fast, shipping thoughtful products' },
                  ].map((item) => (
                    <div key={item.title} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <p className="text-[0.95rem] font-medium text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-white/55">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">About</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">I care about building software that feels deliberate.</h2>
                <p className="mt-6 text-lg leading-8 text-white/65">
                  Building scalable software systems while preparing for software engineering roles through full-stack development, data structures & algorithms, and AI-powered product development.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    'Full Stack Development',
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Cloud',
                    'Problem Solving',
                    'Hackathons',
                    'Building impactful products',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white/70">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">Skills</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A stack shaped for product work.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/55">
                I work across the stack with the focus of someone who values reliable systems, strong UX, and thoughtful implementation.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} className="h-full">
                <motion.div
                  initial={{ rotateX: -8, rotateY: -8 }}
                  whileHover={{ y: -6, rotateX: 0, rotateY: 0, scale: 1.01 }}
                  transition={{ duration: 0.35 }}
                  className="h-full rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <div className="mb-5 flex items-center gap-3 text-white/70">
                    {index % 2 === 0 ? <Code2 size={16} /> : <Cpu size={16} />}
                    <h3 className="text-lg font-medium text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-black/50 px-3 py-2 text-sm text-white/65">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">Projects</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Selected work with real product intent.</h2>
            </div>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title}>
                <motion.article
                  whileHover={{ y: -8, scale: 1.01, rotateX: -2, rotateY: 2 }}
                  transition={{ duration: 0.35 }}
                  className="group h-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
                >
                  <div className="mb-6 overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50">
                      {index + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-8 text-white/65">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.href ? (
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="text-sm uppercase tracking-[0.22em] text-white/40">Project link</span>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
                      >
                        View project <ArrowUpRight size={14} />
                      </a>
                    </div>
                  ) : null}
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">Achievements</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Recognized for engineering, research, and leadership.</h2>
                <div className="mt-8 space-y-5">
                  {achievements.map((item) => (
                    <div key={item.title} className="group flex gap-3 border-b border-white/10 pb-4 text-white/70 last:border-b-0 last:pb-0">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/70" />
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-sm text-white/55 max-h-0 overflow-hidden transition-all duration-200 group-hover:max-h-40 group-hover:opacity-100 opacity-0">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">Certifications</p>
                <div className="mt-8 grid gap-4">
                  {certifications.map((cert) => (
                    <motion.div key={cert.title} whileHover={{ x: 4 }} className="rounded-2xl border border-white/10 bg-black/50 p-4 text-white/75">
                      <p className="text-sm font-medium text-white">{cert.title}</p>
                      <p className="mt-1 text-xs text-white/55">{cert.org} • {cert.year}</p>
                      <p className="mt-2 text-sm text-white/60">{cert.details}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        

        <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.35em] text-white/45">Experience</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Building software. Leading communities. Learning continuously.</h2>
            </div>
          </Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl relative">
            {/* vertical timeline line (visible on large screens) */}
            <div className="hidden lg:block absolute left-10 top-8 bottom-8 w-px bg-white/10" />
            {experiences.map((item, idx) => (
              <div
                key={`${item.position}-${item.org}`}
                className="group grid gap-6 lg:grid-cols-[0.35fr_1fr] py-4 pl-6 lg:pl-12 border-l-2 border-white/10 group-hover:border-l-4 bg-[#0A0A0A] group-hover:bg-[#111] transition-all duration-200 rounded-md transform group-hover:-translate-y-1"
              >
                <div className="relative">
                  {/* timeline dot */}
                  <span className="hidden lg:block absolute -left-6 top-4 h-3 w-3 rounded-full bg-white/10 ring-1 ring-white/20 transition-all group-hover:bg-white/20" />
                  <p className="text-sm text-white/45">{item.date}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <p className="text-lg font-semibold text-white">{item.position}</p>
                    <span className="inline-block rounded-full bg-white/6 px-2 py-1 text-xs text-white/70">{item.badge}</span>
                  </div>
                  <p className="mt-1 text-sm text-white/45">{item.org}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-[18px] max-h-12 overflow-hidden transition-all duration-200 group-hover:max-h-40 group-hover:opacity-100 opacity-90">{item.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((s) => (
                      <span key={s} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70 transform transition-transform duration-200 group-hover:-translate-y-0.5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {stats.map((stat) => (
                <motion.div key={stat.label} whileHover={{ y: -6 }} className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-3 text-sm leading-7 text-white/55">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-white/45">GitHub</p>
                    <h2 className="mt-4 text-3xl font-semibold text-white">Contribution rhythm.</h2>
                  </div>
                  <a href="https://github.com/adityasmtg13" className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white">
                    <Github size={18} /> View profile
                  </a>
                </div>
                <div className="mt-8 grid grid-cols-7 gap-2">
                  {CREEPER_HEATMAP.flatMap((row, rowIndex) =>
                    row.map((value, colIndex) => {
                      const color = CONTRIBUTION_COLORS[value] ?? CONTRIBUTION_COLORS[0];
                      return (
                        <motion.div
                          key={`${rowIndex}-${colIndex}`}
                          initial={{ opacity: 0.15, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 + rowIndex * 0.08 + colIndex * 0.03 }}
                          className="aspect-square rounded-[0.4rem] border border-white/10"
                          style={{ backgroundColor: color }}
                        />
                      );
                    }),
                  )}
                </div>
              </div>
              <div className="space-y-5">
                {githubLoading && repos.length === 0 ? (
                  Array.from({ length: 3 }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.25, 0.6, 0.25] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
                    >
                      <div className="h-6 w-3/4 rounded-full bg-white/10" />
                      <div className="mt-4 h-4 w-1/2 rounded-full bg-white/10" />
                      <div className="mt-6 h-3 w-1/3 rounded-full bg-white/10" />
                    </motion.div>
                  ))
                ) : (
                  FEATURED_REPOS.map((repoConfig) => {
                    const repo = repos.find((item) => item.slug === repoConfig.slug);
                    const isFlavorRecipes = repoConfig.slug === 'FLAVORRECIPES';
                    const label = githubError || !repo ? 'Created' : 'Updated';
                    const dateText = isFlavorRecipes
                      ? 'Updated 6 months ago'
                      : repo
                      ? formatRelativeDate(githubError ? repo.created_at : repo.updated_at, label)
                      : 'Repository metadata unavailable';
                    const starsText = isFlavorRecipes
                      ? '1 star'
                      : repo
                      ? `${repo.stargazers_count} stars`
                      : `${repoConfig.fallbackStars} stars`;
                    const forksText = isFlavorRecipes
                      ? '0 forks'
                      : repo
                      ? `${repo.forks_count} forks`
                      : `${repoConfig.fallbackForks} forks`;

                    return (
                      <motion.a
                        key={repoConfig.slug}
                        href={repo?.html_url || `https://github.com/${GITHUB_USERNAME}/${repoConfig.slug}`}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 6, y: -2 }}
                        className="group block rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-emerald-400/30"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-lg font-semibold text-white">{repoConfig.displayName}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-white/45">{repoConfig.tech}</p>
                          </div>
                          <span className="text-sm text-white/45">{repo?.language || 'JavaScript'}</span>
                        </div>
                        <p className="mt-4 min-h-[4rem] text-sm leading-7 text-white/60">{repo?.description || repoConfig.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2 text-[0.75rem] uppercase tracking-[0.25em] text-white/45">
                          <span>{dateText}</span>
                          <span>•</span>
                          <span>{starsText}</span>
                          <span>•</span>
                          <span>{forksText}</span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {repoConfig.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/60">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.a>
                    );
                  })
                )}
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">Resume</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">A concise snapshot of my work and direction.</h2>
                <p className="mt-6 text-lg leading-8 text-white/65">
                  Selected for a mix of software engineering, applied AI, research, and collaborative execution.
                </p>
                <MagneticButton href="/resume/AdityaPuliResume.pdf" download="AdityaPuliResume.pdf" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">
                  Download Resume <ArrowUpRight size={16} />
                </MagneticButton>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 backdrop-blur-xl">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>Resume Preview</span>
                    <span>2026</span>
                  </div>
                  <div className="mt-6 space-y-4">
                    {['Computer Science Engineer', 'Full Stack Developer', 'AI & ML Enthusiast', 'Research and product-minded builder'].map((text) => (
                      <div key={text} className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/75">
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-white/45">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Let’s build something thoughtful.</h2>
                <p className="mt-6 text-lg leading-8 text-white/65">
                  I’m open to meaningful software roles, research collaborations, and product-driven opportunities.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    { label: 'Email', href: 'mailto:aditya.pulipaka13@gmail.com', icon: Mail },
                    { label: 'GitHub', href: 'https://github.com/adityasmtg13', icon: Github },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-pulipaka-b82587294/', icon: Linkedin },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a key={item.label} href={item.href} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white/70 transition hover:text-white">
                        <Icon size={16} /> {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>
              <form action="mailto:aditya.pulipaka13@gmail.com" method="get" className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
                <div className="grid gap-5 md:grid-cols-2">
                  <input className="rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35" placeholder="Name" name="subject" />
                  <input className="rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35" placeholder="Email" name="cc" />
                </div>
                <input className="mt-5 w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35" placeholder="Subject" name="subject" />
                <textarea className="mt-5 min-h-[160px] w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35" placeholder="Message" name="body" />
                <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90" type="submit">
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/70 px-6 py-8 text-sm text-white/55 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aditya Pulipaka. Crafted with care and intention.</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2"><TerminalSquare size={16} /> {terminalMode ? 'Terminal mode enabled' : 'Minimal build'}</span>
            <a href="#home" className="inline-flex items-center gap-2 transition hover:text-white">
              Back to top <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
