"use client";

import * as React from "react";
import Image from "next/image";
import { MilliShell } from "@/components/MilliShell";
import AboutPup from "@/components/AboutPup";

const LINE = "var(--line)";
const BLACK = "var(--black)";
const WHITE = "var(--white)";
const ACCENT = "var(--accent)";

function Rule({ className }: { className?: string }) {
  return <div className={className} style={{ borderTop: `${LINE} solid ${BLACK}` }} />;
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium"
      style={{
        border: `${LINE} solid ${BLACK}`,
        background: ACCENT,
      }}
    >
      {children}
    </span>
  );
}

function PhotoTile({
  src,
  alt,
  priority,
  delay = 0,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <figure
      className="overflow-hidden transition-all duration-1000 ease-out hover:scale-[1.02]"
      style={{
        border: `${LINE} solid ${BLACK}`,
        background: WHITE,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 25vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </figure>
  );
}

export default function AboutPage() {
  const [heroVisible, setHeroVisible] = React.useState(false);
  const [section2Visible, setSection2Visible] = React.useState(false);
  const [section3Visible, setSection3Visible] = React.useState(false);

  React.useEffect(() => {
    const heroTimer = setTimeout(() => setHeroVisible(true), 200);
    const s2Timer = setTimeout(() => setSection2Visible(true), 2000);
    const s3Timer = setTimeout(() => setSection3Visible(true), 2400);

    return () => {
      clearTimeout(heroTimer);
      clearTimeout(s2Timer);
      clearTimeout(s3Timer);
    };
  }, []);

  return (
    <MilliShell topText="FRONTEND LEANING FULL STACK ENGINEER • REACT • NEXT.JS • NODE.JS • BUILDING THOUGHTFUL INTERFACES">
      <div style={{ background: WHITE, color: BLACK }}>
        {/* HERO */}
        <section
          className="pt-12 md:pt-20 pb-12 transition-all duration-1200 ease-out"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <h1
            className="text-[70px] sm:text-[80px] md:text-[140px] lg:text-[180px] leading-[0.85] font-bold tracking-tighter mb-10 md:mb-12"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              letterSpacing: "-0.04em",
            }}
          >
            WHO I AM
          </h1>

          <div className="max-w-4xl space-y-6">
            {/* Inspired by + positioning */}
            <div
              className="inline-flex flex-wrap items-center gap-3 px-5 py-3 text-[10px] sm:text-xs font-black uppercase tracking-[0.28em]"
              style={{ border: `${LINE} solid ${BLACK}`, background: WHITE }}
            >
              <span style={{ background: ACCENT, border: `${LINE} solid ${BLACK}` }} className="inline-block h-3 w-8" />
              <span>A little context about this site and me</span>
            </div>

            <p className="text-lg md:text-xl leading-relaxed opacity-85">
            Hi !! I’m Kanchana Dhana Sadasivan. I build thoughtful software that feels seamless from the user’s first click to the logic running behind the scenes. I enjoy shaping interfaces that are intuitive and elegant, while making sure the systems supporting them are fast, reliable, and easy to maintain. Every line of code, whether on the page or the server, has a purpose.
            </p>

            <p className="text-lg md:text-xl leading-relaxed opacity-85">
              I graduated with a masters from NC State and I have 3.5+ years of experience shipping production web applications.
              Over these past years, I’ve taken ideas from concept to production, designing and shipping applications using React, Next.js, and Angular, while also building APIs, managing databases, and deploying to cloud environments. I focus on creating experiences that are polished and performant, while ensuring the architecture behind them is robust, scalable, and sustainable.
</p>

<p className="text-lg md:text-xl leading-relaxed opacity-85">
            </p>

            <p className="text-lg md:text-xl leading-relaxed opacity-85">
              What excites me most is seeing how thoughtful design and solid engineering come together to solve real problems. I enjoy exploring new ways to make products feel better, discovering small details that improve user experiences, and building systems that can grow with the product. Working across the full stack allows me to connect innovative ideas, design, and implementation in a way that delivers meaningful impact.
              I also care about clarity, maintainability, and good defaults so teams can move quickly without creating mess.
            </p>

            {/* TECH STACK */}
            <div className="pt-6">
              <div className="text-xs uppercase tracking-[0.28em] opacity-60 mb-4">
                TECH STACK
              </div>

              <div className="flex flex-wrap gap-3">
                <Chip>JavaScript</Chip>
                <Chip>TypeScript</Chip>
                <Chip>React</Chip>
                <Chip>Next.js</Chip>
                <Chip>Angular</Chip>
                <Chip>REST API</Chip>
                <Chip>HTML</Chip>
                <Chip>CSS</Chip>
                <Chip>Node.js</Chip>
                <Chip>Python</Chip>
                <Chip>Tailwind</Chip>
                <Chip>PostgreSQL</Chip>
                <Chip>MongoDB</Chip>
                <Chip>AWS</Chip>
                <Chip>Docker</Chip>
              </div>
            </div>
          </div>
        </section>

        <Rule />

        {/* PHOTO BAND (no captions) */}
        <section className="py-16 md:py-20">
          <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-4">
            <PhotoTile src="/about/me.jpg" alt="Kanchana outdoor portrait" priority delay={1000} />
            <PhotoTile src="/about/mepup.jpg" alt="Me with my dog" delay={1300} />
            <PhotoTile src="/about/adventure.jpg" alt="Parasailing adventure" delay={1600} />
            <PhotoTile src="/about/grad.jpg" alt="NC State graduation" delay={1900} />
          </div>
        </section>

        <Rule />

        {/* WHY I BUILT THIS */}
        <section
          className="py-16 md:py-20 transition-all duration-1200 ease-out"
          style={{
            opacity: section2Visible ? 1 : 0,
            transform: section2Visible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <h2
            className="text-[44px] sm:text-[48px] md:text-[72px] leading-[0.9] font-bold tracking-tight mb-8"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            MY INSPIRATION TO BUILD THIS 
          </h2>

          <div className="max-w-4xl space-y-6">
          <p className="text-lg md:text-xl leading-relaxed opacity-85">
  I built this portfolio because I wanted it to feel intentional and purposeful, not just a template or a collection of work. I was inspired by bold, minimal sites that balance clarity with personality, and I wanted to create something that feels polished and thoughtful while reflecting my own style and approach.
</p>

<p className="text-lg md:text-xl leading-relaxed opacity-85">
  Every choice, from typography and spacing to interactions and transitions, was made with care. I focused on how the content flows, how the interface feels to the user, and how small details can make an experience feel effortless. Even subtle touches can change the way people perceive and navigate a page.
</p>

<p className="text-lg md:text-xl leading-relaxed opacity-85">
  For me, the most rewarding part is seeing how design and user experience come together to create something that is not only visually appealing but also intuitive to use. That perspective guides how I approach every interface I build, whether it’s part of a portfolio or a production application.
</p>


            {/* Accent mark */}
            <div className="pt-4">
              <span
                aria-hidden
                className="inline-block h-[6px] w-24 md:w-32"
                style={{ background: ACCENT, border: `${LINE} solid ${BLACK}` }}
              />
            </div>
          </div>
        </section>

        <Rule />

        {/* OUTSIDE WORK */}
        <section
          className="py-16 md:py-20 transition-all duration-1200 ease-out"
          style={{
            opacity: section3Visible ? 1 : 0,
            transform: section3Visible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <h2
            className="text-[44px] sm:text-[48px] md:text-[72px] leading-[0.9] font-bold tracking-tight mb-8"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            OUTSIDE WORK
          </h2>

          <div className="max-w-5xl">
            <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start">
              <div className="flex-1 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed opacity-85">
  Outside of software, I enjoy raquet sports, long walks or hikes, and spending time with my dog. I also cook, paint and play board games, which let me explore creativity, strategy, and patience in different ways. These activities help me recharge, stay curious, and approach challenges with fresh perspective.
</p>

<p className="text-lg md:text-xl leading-relaxed opacity-85">
  I also notice the little details in the world around me, from the way a menu is structured to the way interactions feel in the apps I use. Those observations often spark ideas and influence how I think about building software that is clear, intuitive, and enjoyable to use.
</p>

              </div>

              <div className="flex flex-col items-center gap-4 flex-shrink-0 w-full md:w-auto">
                <div className="text-xs uppercase tracking-[0.28em] opacity-70 text-center">
                  <span className="inline-block pb-1" style={{ borderBottom: `${LINE} solid ${BLACK}` }}>
                    HOVER/TAP TO PET MY PUP
                  </span>
                </div>

                {/* lime framed plate */}
                <div
                  className="p-4"
                  style={{
                    border: `${LINE} solid ${BLACK}`,
                    background: ACCENT,
                  }}
                >
                  <div style={{ border: `${LINE} solid ${BLACK}`, background: WHITE }} className="p-3">
                    <AboutPup size={220} fps={5} mode="loopWhileHover" idleFrame={0} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-12 md:h-20" />
      </div>
    </MilliShell>
  );
}
