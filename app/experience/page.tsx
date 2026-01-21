"use client";

import * as React from "react";
import { MilliShell } from "@/components/MilliShell";

const LINE = "var(--line)";
const BLACK = "var(--black)";
const WHITE = "var(--white)";
const ACCENT = "var(--yellow, var(--accent, #B7FF2A))";

type Experience = {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    company: "San Quentin SkunkWorks",
    role: "Full Stack Developer",
    period: "Sep 2025 – Present",
    location: "Remote (LA-based NGO)",
    description:
      "Built and shipped secure, production workflows with startup-like ownership — calm UI, strong validation, predictable state handling.",
    bullets: [
      "Owned multi-step flows end-to-end: UI, state, validations, edge cases, stakeholder loops.",
      "Designed reusable UI patterns to keep the system scalable and consistent.",
      "Prioritized clarity + safety: accessible patterns and predictable behavior.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "PostgreSQL","Supabase","Drizzle ORM"],
  },
  {
    id: 2,
    company: "Infosys Ltd",
    role: "Software Engineer (Frontend-leaning)",
    period: "Nov 2019 – Dec 2022",
    location: "Pune, India",
    description:
      "Owned frontend delivery for enterprise web apps — production modules, bug-fix cycles, and feature rollouts with tight QA + backend collaboration.",
    bullets: [
      "Built/owned Angular UI modules end-to-end (implementation, enhancements, releases).",
      "Improved UX consistency via shared patterns/components and edge-case hardening.",
      "Worked in production rhythms: code reviews, sprint planning, incident fixes.",
    ],
    tags: ["Angular", "React", "TypeScript", "REST", "HTML/CSS"],
  },
  {
    id: 3,
    company: "ISRO",
    role: "Project Intern",
    period: "Jan 2019 – Jul 2019",
    location: "Bangalore, India",
    description:
      "Built prototypes + internal tooling with an engineering mindset — practical, measurable, easy to hand off.",
    bullets: [
      "Created small tools/dashboards to make workflows easier to monitor and explain.",
      "Iterated fast on prototypes; kept things structured and readable for handoff.",
    ],
    tags: ["Python", "Prototyping", "Dashboards"],
  },
];

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

function GridOverlay() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none opacity-[0.12]"
      style={{
        backgroundImage: `
          linear-gradient(${BLACK} 1px, transparent 1px),
          linear-gradient(90deg, ${BLACK} 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px",
      }}
    />
  );
}

function ExperienceCard({ item, index }: { item: Experience; index: number }) {
  return (
    <div
      className="bg-white grid grid-cols-1 lg:grid-cols-[480px_1fr]"
      style={{ 
        border: `${LINE} solid ${BLACK}`, 
        background: WHITE,
        height: '100%',
        minHeight: '500px'
      }}
    >
      {/* LEFT PANEL - Lime accent */}
      <div
        className="relative overflow-hidden"
        style={{
          background: ACCENT,
          borderBottom: `${LINE} solid ${BLACK}`,
        }}
      >
        {/* Desktop: right border */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-0 bottom-0 right-0"
          style={{ width: LINE, background: BLACK }}
        />
        {/* Mobile: bottom border */}
        <div
          aria-hidden
          className="lg:hidden absolute left-0 right-0 bottom-0"
          style={{ height: LINE, background: BLACK }}
        />

        <GridOverlay />

        <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col h-full">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-bold opacity-70">
            {item.period} • {item.location}
          </div>

          <div
            className="mt-5"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            {item.company}
          </div>

          <div className="mt-4 text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.28em] font-bold opacity-85">
            {item.role}
          </div>

          <div className="mt-auto pt-8 flex items-center justify-between">
            <div
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.34em] font-bold"
              style={{ borderTop: `${LINE} solid ${BLACK}`, paddingTop: 10 }}
            >
              {String(index + 1).padStart(2, "0")} • WORK
            </div>
            <div className="hidden lg:block text-3xl sm:text-4xl font-black leading-none select-none opacity-90">
              →
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - Content */}
      <div className="p-6 sm:p-8 lg:p-10 flex flex-col">
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90 max-w-[64ch]">
          {item.description}
        </p>

        <ul className="mt-6 lg:mt-8 space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-black">•</span>
              <span className="opacity-90">{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 lg:mt-10 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        {/* Desktop only footer */}
        <div
          className="hidden lg:flex mt-auto pt-6 items-center"
          style={{ borderTop: `${LINE} solid ${BLACK}` }}
        >
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-bold opacity-70">
            Swipe / scroll →
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const railRef = React.useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = React.useState(false);
  const [cardsVisible, setCardsVisible] = React.useState(false);
  const [navVisible, setNavVisible] = React.useState(false);

  React.useEffect(() => {
    const headerTimer = setTimeout(() => setHeaderVisible(true), 100);
    const cardsTimer = setTimeout(() => setCardsVisible(true), 400);
    const navTimer = setTimeout(() => setNavVisible(true), 800);
    
    return () => {
      clearTimeout(headerTimer);
      clearTimeout(cardsTimer);
      clearTimeout(navTimer);
    };
  }, []);

  const scrollByOneCard = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 1300, behavior: "smooth" }); // 1260px card + 40px gap
  };

  return (
    <MilliShell topText="WORK • WORK • WORK •">
      <div style={{ background: WHITE, color: BLACK }}>
        <header 
          className="px-5 sm:px-6 lg:px-10 pt-10 lg:pt-16 transition-all duration-1000 ease-out"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.8rem, 9vw, 7rem)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
            }}
          >
            WORK
          </h1>

          <p className="mt-4 max-w-[72ch] text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.32em] font-bold opacity-70">
            Detailed experience • Please scroll to see 
          </p>

          <div className="mt-8 lg:mt-10" style={{ borderTop: `${LINE} solid ${BLACK}` }} />
        </header>

        <section 
          className="px-5 sm:px-6 lg:px-10 pb-12 transition-all duration-1000 ease-out"
          style={{
            opacity: cardsVisible ? 1 : 0,
            transform: cardsVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {/* Mobile/Tablet: Vertical Stack */}
          <div className="lg:hidden mt-8 space-y-8">
            {experiences.map((item, idx) => (
              <ExperienceCard key={item.id} item={item} index={idx} />
            ))}
          </div>

          {/* Desktop: Horizontal Scroll */}
          <div className="hidden lg:block">
            <div
              ref={railRef}
              className="mt-10 flex gap-10 overflow-x-auto scroll-smooth"
              style={{
                scrollSnapType: "x mandatory",
                paddingBottom: 8,
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {experiences.map((item, idx) => (
                <div
                  key={item.id}
                  className="snap-start flex-shrink-0"
                  style={{ width: "1260px" }}
                >
                  <ExperienceCard item={item} index={idx} />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div 
              className="mt-6 flex justify-end gap-3 transition-all duration-1000 ease-out"
              style={{
                opacity: navVisible ? 1 : 0,
                transform: navVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <button
                type="button"
                onClick={() => scrollByOneCard(-1)}
                aria-label="Previous"
                className="w-14 h-14 flex items-center justify-center bg-white active:scale-95 transition-transform"
                style={{ border: `${LINE} solid ${BLACK}` }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollByOneCard(1)}
                aria-label="Next"
                className="w-14 h-14 flex items-center justify-center bg-white active:scale-95 transition-transform"
                style={{ border: `${LINE} solid ${BLACK}` }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <p 
              className="mt-4 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.34em] font-bold opacity-60 transition-all duration-1000 ease-out"
              style={{
                opacity: navVisible ? 0.6 : 0,
                transform: navVisible ? "translateY(0)" : "translateY(10px)",
              }}
            >
              Drag / trackpad / arrows
            </p>

            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </section>
      </div>
    </MilliShell>
  );
}