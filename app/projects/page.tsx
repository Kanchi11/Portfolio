"use client";

import * as React from "react";
import { MilliShell } from "@/components/MilliShell";

const LINE = "var(--line)";
const BLACK = "var(--black)";
const WHITE = "var(--white)";
const ACCENT = "var(--accent)";

function Rule({ className }: { className?: string }) {
  return <div className={className} style={{ borderTop: `${LINE} solid ${BLACK}` }} />;
}

function GridOverlay({
  size = 64,
  opacity = 0.12,
}: {
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(${BLACK} 2px, transparent 2px),
          linear-gradient(90deg, ${BLACK} 2px, transparent 2px)
        `,
        backgroundSize: `${size}px ${size}px`,
        mixBlendMode: "multiply",
      }}
    />
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="px-3 py-2 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-bold"
      style={{ border: `${LINE} solid ${BLACK}`, background: WHITE }}
    >
      {children}
    </span>
  );
}

const projects = [
  {
    id: 1,
    title: "San Quentin SkunkWorks",
    subtitle: "Volunteer Clearance Platform",
    period: "Sep 2025 – Present",
    type: "Volunteer Project • Full-Stack",
    description:
      "Built and operated a full-stack volunteer-clearance system for a LA-based nonprofit working on criminal justice reform. The platform digitizes intake, approvals, and reporting end-to-end, cutting manual processing delays by 40% and supporting 100+ active users.",
    challenge:
      "The organization was managing volunteer clearances through manual paperwork and spreadsheets, creating delays of weeks and risking data inconsistencies. They needed a secure, role-based system that could handle sensitive background checks while remaining accessible to non-technical staff.",
    solution: [
      "Designed and built a multi-step clearance workflow with Next.js, PostgreSQL, and Supabase",
      "Implemented role-based permissions, background job processing, and comprehensive audit logging",
      "Optimized database queries and caching strategies to improve reliability/uptime by 25%",
      "Added performance metrics for throughput and latency to guide future improvements",
    ],
    impact:
      "Reduced manual processing time by 40%, eliminated data entry errors, and provided real-time visibility into clearance status for both volunteers and administrators. The system now handles all volunteer onboarding for the organization.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "TailwindCSS", "Drizzle ORM"],
    github: "https://github.com/Kanchi11",
  },
  {
    id: 2,
    title: "CodeReviewAI",
    subtitle: "AI-Assisted Code Review Platform",
    period: "May 2025 – Present",
    type: "Academic Project • Full-Stack + AI",
    description:
      "Developed a real-time AI-assisted code review tool that leverages Gemini API for contextual analysis and actionable fix suggestions. The platform provides inline comments, diff visualization, and persona-driven analysis modes to accelerate code review workflows.",
    challenge:
      "Manual code reviews are time-consuming and often miss subtle issues like security vulnerabilities or performance bottlenecks. Teams need intelligent assistance that can provide immediate feedback while learning from their specific codebase patterns.",
    solution: [
      "Built responsive React/TailwindCSS UI with Monaco Editor integration for professional code editing experience",
      "Implemented Node.js backend services streaming Gemini API feedback via Server-Sent Events (SSE)",
      "Created persona-based analysis modes (security, performance, maintainability, testing) for targeted reviews",
      "Added inline fix suggestions, diff visualization, and structured issue triage to speed reviewer focus",
    ],
    impact:
      "Reduced manual review effort by 50% and boosted developer adoption by 3× in internal testing. The tool now handles both automated initial reviews and assists human reviewers with complex issues.",
    stack: ["React", "TypeScript", "TailwindCSS", "Node.js", "Gemini API", "Monaco Editor", "SSE"],
    github: "https://github.com/Kanchi11",
  },
  {
    id: 3,
    title: "J-Tracker",
    subtitle: "AI-Powered Job Application Tracker",
    period: "Jan 2025 – Mar 2025",
    type: "Academic Project • Full-Stack + AI",
    description:
      "Built a comprehensive job tracking platform with real-time dashboards, resume analysis, and AI-powered cover letter customization. The system unifies job search, application tracking, and analytics in one streamlined interface.",
    challenge:
      "Job seekers struggle to manage multiple applications across different platforms, track their progress, and customize materials for each role. The process is fragmented and time-consuming, often leading to missed opportunities.",
    solution: [
      "Developed full-stack platform with React frontend and Flask microservices backend",
      "Integrated job board scraping using Selenium to aggregate listings from multiple sources",
      "Implemented LLM-based resume insights and automated cover letter generation via Ollama/Qwen2.5",
      "Created saved state system (Wishlist, Applied, Status) with Google OAuth authentication",
      "Dockerized all services for consistent development and deployment environments",
    ],
    impact:
      "Improved relevant job discovery rate by 35% through intelligent scraping and filtering. Automated cover letter generation saved users an average of 15 minutes per application while maintaining personalization quality.",
    stack: ["React", "Flask", "MongoDB", "Docker", "Selenium", "Ollama", "Google OAuth"],
    github: "https://github.com/Kanchi11",
  },
  {
    id: 4,
    title: "Sentimental Analyzer Pro",
    subtitle: "Sentiment Analysis Dashboard",
    period: "Apr 2025 – May 2025",
    type: "Academic Project • Full-Stack + ML",
    description:
      "Engineered a full-stack sentiment analysis platform with Chrome extension integration to classify sentiment from webpages, YouTube transcripts, and comments. Features real-time visualization, sentiment history tracking, and comprehensive testing suite.",
    challenge:
      "Understanding public sentiment from scattered online sources requires manual reading and interpretation. Content creators and researchers need automated tools to analyze sentiment at scale across multiple platforms.",
    solution: [
      "Built component-based React architecture with responsive visualizations using Chart.js",
      "Created Chrome extension for one-click sentiment analysis on any webpage",
      "Implemented Django REST API backend with TensorFlow for ML-powered classification",
      "Added sentiment history tracking, deletion, and CSV download features for analysis workflows",
      "Authored 40+ Jest and JSDOM test cases to ensure robust regression testing and frontend reliability",
    ],
    impact:
      "Boosted review and triage efficiency by 60% through optimized data flows and real-time visualization. The platform processes sentiment across multiple sources in seconds versus hours of manual analysis.",
    stack: ["React", "JavaScript", "Django", "TensorFlow", "Chart.js", "Jest", "Chrome API"],
    github: "https://github.com/Kanchi11",
  },
  {
    id: 5,
    title: "ETIS Phase 2",
    subtitle: "Ford Automotive Repair Management Suite",
    period: "Dec 2019 – Jan 2022",
    type: "Professional Project • Full-Stack",
    description:
      "Delivered and modernized Ford's repair management system by unifying legacy SBDO and DTA platforms into a scalable Angular-Node.js-PostgreSQL stack. The system serves thousands of technicians across Ford dealerships worldwide.",
    challenge:
      "Ford's existing repair systems were fragmented across legacy platforms, creating data silos and inefficient workflows. Technicians struggled with inconsistent interfaces and slow data retrieval, impacting service quality and turnaround times.",
    solution: [
      "Architected integration of legacy platforms into unified Angular-based single-page application",
      "Built reusable components for complaint logging, fault detection, repair logs, and service dashboards",
      "Optimized Angular performance to reduce UI load time by 25% through code splitting and lazy loading",
      "Implemented Node.js REST APIs with PostgreSQL for secure data flows and optimized queries",
      "Hardened CI/CD pipeline with Jenkins, Docker, and AWS EC2 for scalable deployments",
    ],
    impact:
      "Reduced manual data-entry errors by 40% and improved technician efficiency by 25%. The system now handles repair workflows for Ford's entire dealership network, processing thousands of service requests daily.",
    stack: ["Angular", "Node.js", "PostgreSQL", "Docker", "AWS EC2", "Jenkins", "REST APIs"],
  },
];

function ProjectCard({
  project,
  delay = 0,
}: {
  project: (typeof projects)[number];
  delay?: number;
}) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <article
      className="relative overflow-hidden transition-all duration-[1500ms] ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        border: `${LINE} solid ${BLACK}`,
        background: WHITE,
      }}
    >
      {/* LIME HEADER BAND */}
      <div
        className="relative overflow-hidden px-6 md:px-10 lg:px-16 py-10 md:py-12"
        style={{ background: ACCENT, borderBottom: `${LINE} solid ${BLACK}` }}
      >
        <GridOverlay size={64} opacity={0.12} />

        <div className="relative z-10 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-[0.28em] opacity-75 font-bold mb-3">
              {project.period} • {project.type}
            </div>

            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
              {project.title}
            </h3>

            <div className="mt-4 text-lg sm:text-xl md:text-2xl font-bold opacity-90">
              {project.subtitle}
            </div>
          </div>

          <div
            className="shrink-0 w-14 h-14 md:w-16 md:h-16 grid place-items-center font-black text-xl md:text-2xl"
            style={{ border: `${LINE} solid ${BLACK}`, background: BLACK, color: ACCENT }}
          >
            {String(project.id).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="px-6 md:px-10 lg:px-16 py-10 md:py-12">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-85 max-w-4xl">
          {project.description}
        </p>

        {/* STACK */}
        <div className="mt-8">
          <div className="text-xs uppercase tracking-[0.28em] font-black mb-4 opacity-70">
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="px-6 py-3 text-xs uppercase tracking-[0.28em] font-black active:translate-y-[1px]"
            style={{ border: `${LINE} solid ${BLACK}`, background: BLACK, color: ACCENT }}
          >
            {open ? "Read less" : "Read more"}
          </button>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs uppercase tracking-[0.28em] font-black active:translate-y-[1px]"
              style={{ border: `${LINE} solid ${BLACK}`, background: BLACK, color: ACCENT }}
            >
              View on GitHub →
            </a>
          ) : null}
        </div>

        {/* DETAILS */}
        {open ? (
          <div className="mt-10 pt-10" style={{ borderTop: `${LINE} solid ${BLACK}` }}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] font-black mb-3 opacity-70">
                    Challenge
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed opacity-85">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.28em] font-black mb-3 opacity-70">
                    Impact
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed opacity-85">
                    {project.impact}
                  </p>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-[0.28em] font-black mb-4 opacity-70">
                  Solution
                </div>
                <ul className="space-y-3">
                  {project.solution.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm sm:text-base leading-relaxed">
                      <span className="font-black opacity-85 shrink-0">→</span>
                      <span className="opacity-85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [headerVisible, setHeaderVisible] = React.useState(false);
  const [heroVisible, setHeroVisible] = React.useState(false);
  const [servicesVisible, setServicesVisible] = React.useState(false);

  React.useEffect(() => {
    const headerTimer = setTimeout(() => setHeaderVisible(true), 300);
    const heroTimer = setTimeout(() => setHeroVisible(true), 1100);
    const servicesTimer = setTimeout(() => setServicesVisible(true), 1900);

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(heroTimer);
      clearTimeout(servicesTimer);
    };
  }, []);

  return (
    <MilliShell topText="PROJECTS • PROJECTS • PROJECTS •">
      <div style={{ background: WHITE, color: BLACK }}>
        {/* HERO */}
        <section
          className="pt-12 md:pt-20 pb-16 md:pb-24 relative overflow-hidden transition-all duration-[1800ms] ease-out"
          style={{
            background: ACCENT,
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(40px)",
            border: `${LINE} solid ${BLACK}`,
          }}
        >
          <GridOverlay size={72} opacity={0.12} />

          <div className="relative z-10 px-5 sm:px-6 lg:px-10">
            <h1
              className="font-black leading-[0.85] tracking-tighter"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              PROJECTS
            </h1>

            <div
              className="mt-8 max-w-4xl transition-all duration-[1800ms] ease-out"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? "translateY(0)" : "translateY(18px)",
              }}
            >
              <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed font-medium">
                A collection of full-stack applications, AI-powered tools, and production systems
                I&apos;ve built — focused on solving real problems with clean code and thoughtful UX.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <div
                className="inline-block px-6 py-3 font-black text-sm uppercase tracking-wider"
                style={{ border: `${LINE} solid ${BLACK}`, background: BLACK, color: ACCENT }}
              >
                {projects.length} Projects
              </div>
              <div
                className="inline-block px-6 py-3 font-black text-sm uppercase tracking-wider"
                style={{ border: `${LINE} solid ${BLACK}`, background: BLACK, color: ACCENT }}
              >
                Full-Stack + AI
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          className="px-5 sm:px-6 lg:px-10 py-16 md:py-20 transition-all duration-[1800ms] ease-out"
          style={{
            opacity: servicesVisible ? 1 : 0,
            transform: servicesVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div
            className="text-xs uppercase tracking-[0.32em] font-black mb-8 pb-3"
            style={{ borderBottom: `${LINE} solid ${BLACK}` }}
          >
            What I Build
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Full-Stack Web Applications",
                desc: "Production-ready systems with React/Next.js frontends, Node.js/Flask backends, and PostgreSQL/MongoDB databases.",
              },
              {
                title: "AI-Powered Tools",
                desc: "LLM integrations, sentiment analysis, automated workflows using Gemini API, Ollama, and TensorFlow.",
              },
              {
                title: "Developer Tooling",
                desc: "CI/CD pipelines, containerization with Docker, automated testing, and performance optimization.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 relative overflow-hidden"
                style={{ border: `${LINE} solid ${BLACK}`, background: WHITE }}
              >
                <div className="text-xl md:text-2xl font-black mb-3 leading-tight">
                  {service.title}
                </div>
                <div className="text-sm md:text-base opacity-85 leading-relaxed">
                  {service.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LIST */}
        <section className="px-5 sm:px-6 lg:px-10 pb-16">
          <div className="space-y-10">
            {projects.map((project, idx) => (
              <div key={project.id}>
                {/* slower stagger */}
                <ProjectCard project={project} delay={2000 + idx * 520} />
                {idx !== projects.length - 1 ? <Rule className="my-10 opacity-100" /> : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    </MilliShell>
  );
}
