"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { X } from "lucide-react";

// Curated mix - IMAGES FIRST, then skills/work
const logoContent = [
  // Personal Images First (6 images)
  { type: "image", content: "1.jpg" },
  { type: "image", content: "2.jpg" },
  { type: "image", content: "3.jpg" },
  { type: "image", content: "4.jpg" },
  { type: "image", content: "5.jpg" },
  
  // Frontend
  { type: "text", content: "REACT + NEXT.JS" },
  { type: "text", content: "ANGULAR + TYPESCRIPT" },
  { type: "text", content: "TAILWIND CSS" },
  { type: "text", content: "CLEAN UI" },
  
  // Backend
  { type: "text", content: "NODE.JS + EXPRESS" },
  { type: "text", content: "POSTGRESQL + MONGODB" },
  { type: "text", content: "REST APIs" },
  { type: "text", content: "SQL" },
  
  // Cloud/DevOps
  { type: "text", content: "AWS + DOCKER" },
  { type: "text", content: "CI/CD PIPELINES" },
  
  // Skills
  { type: "text", content: "SYSTEM DESIGN" },
  { type: "text", content: "API DESIGN" },
  { type: "text", content: "PERFORMANCE OPTIMIZATION" },
  
  // Work Experience
  { type: "text", content: "SAN QUENTIN SKUNKWORKS" },
  { type: "text", content: "INFOSYS" },
];

const LINE = 3;
const BLACK = "#000";
const WHITE = "#fff";
const YELLOW = "#B7FF2A";

const GRID_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const Marquee = ({ text, speed = 20 }: { text: string; speed?: number }) => {
  const chunk = `${text} • ${text} • ${text} • ${text} • `;
  return (
    <div className="overflow-hidden whitespace-nowrap" style={{ background: WHITE }}>
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <div className="shrink-0 py-1">
          <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase px-2" style={{ color: BLACK }}>
            {chunk}
          </span>
        </div>
        <div className="shrink-0 py-1" aria-hidden>
          <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase px-2" style={{ color: BLACK }}>
            {chunk}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const SideText = ({ text, side }: { text: string; side: "left" | "right" }) => (
  <div
    className={`hidden md:block fixed ${
      side === "left" ? "left-3" : "right-3"
    } top-1/2 -translate-y-1/2 z-50 pointer-events-none`}
  >
    <div
      style={{ writingMode: "vertical-rl", textOrientation: "mixed", color: BLACK }}
      className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase"
    >
      {text}
    </div>
  </div>
);

type QuadrantProps = {
  title: string;
  href: string;
  position: "tl" | "tr" | "bl" | "br";
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
};

const Quadrant = ({ title, href, position, isHovered, onHover, onLeave }: QuadrantProps) => {
  const router = useRouter();
  
  // Responsive offset - smaller on mobile, larger on desktop
  const useResponsiveOffset = () => {
    const [offset, setOffset] = useState({ tl_tr: 70, bl_br: 80 });
    
    useEffect(() => {
      const updateOffset = () => {
        if (window.innerWidth < 640) {
          // Mobile
          setOffset({ tl_tr: 30, bl_br: 35 });
        } else if (window.innerWidth < 1024) {
          // Tablet
          setOffset({ tl_tr: 50, bl_br: 55 });
        } else {
          // Desktop
          setOffset({ tl_tr: 70, bl_br: 80 });
        }
      };
      
      updateOffset();
      window.addEventListener('resize', updateOffset);
      return () => window.removeEventListener('resize', updateOffset);
    }, []);
    
    return offset;
  };
  
  const offset = useResponsiveOffset();
  const OFFSET = (position === "tl" || position === "tr") ? offset.tl_tr : offset.bl_br;

  const titleOffset =
    position === "tl"
      ? { x: -OFFSET, y: -OFFSET }
      : position === "tr"
      ? { x: OFFSET, y: -OFFSET }
      : position === "bl"
      ? { x: -OFFSET, y: OFFSET }
      : { x: OFFSET, y: OFFSET };

  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer overflow-hidden"
      animate={{ backgroundColor: isHovered ? YELLOW : WHITE }}
      transition={{ duration: 0.7, ease: GRID_EASE }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() => router.push(href)}
      style={{ zIndex: 1 }}
    >
      <motion.h2
        className="select-none px-3 sm:px-6 md:px-8 lg:px-10 xl:px-14 uppercase text-center"
        style={{
          fontSize: "clamp(1.5rem, 4.5vw, 2.6rem)",
          fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial",
          fontWeight: 500,
          letterSpacing: "clamp(0em, 0.3vw, 0.02em)",
          lineHeight: 1.1,
          position: "relative",
          zIndex: 70,
          color: BLACK,
          whiteSpace: "nowrap",
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
          x: titleOffset.x,
          y: titleOffset.y,
        }}
        transition={{ duration: 0.35, ease: GRID_EASE }}
      >
        {title}
      </motion.h2>

      <X className="absolute top-2 left-2 sm:top-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4" style={{ color: BLACK, opacity: isHovered ? 0.55 : 0.18 }} />
      <X className="absolute top-2 right-2 sm:top-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4" style={{ color: BLACK, opacity: isHovered ? 0.55 : 0.18 }} />
      <X className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4" style={{ color: BLACK, opacity: isHovered ? 0.55 : 0.18 }} />
      <X className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4" style={{ color: BLACK, opacity: isHovered ? 0.55 : 0.18 }} />
    </motion.div>
  );
};

export default function MilliLandingPage() {
  const [hoveredQuadrant, setHoveredQuadrant] = useState<"tl" | "tr" | "bl" | "br" | null>(null);
  const [logoHovered, setLogoHovered] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    if (!logoHovered) {
      setContentIndex(0); // Reset to first image when hover ends
      return;
    }
    const interval = setInterval(() => setContentIndex((prev) => (prev + 1) % logoContent.length), 350);
    return () => clearInterval(interval);
  }, [logoHovered]);

  const getGridTemplate = () => {
    const normal = "1fr 1fr";
    const big = "1.25fr 0.75fr";
    const small = "0.75fr 1.25fr";

    switch (hoveredQuadrant) {
      case "tl":
        return { columns: big, rows: big };
      case "tr":
        return { columns: small, rows: big };
      case "bl":
        return { columns: big, rows: small };
      case "br":
        return { columns: small, rows: small };
      default:
        return { columns: normal, rows: normal };
    }
  };

  const getLogoPosition = () => {
    switch (hoveredQuadrant) {
      case "tl":
        return { left: "70%", top: "70%" };
      case "tr":
        return { left: "30%", top: "70%" };
      case "bl":
        return { left: "70%", top: "30%" };
      case "br":
        return { left: "30%", top: "30%" };
      default:
        return { left: "50%", top: "50%" };
    }
  };

  const gridTemplate = getGridTemplate();
  const logoPosition = getLogoPosition();
  const currentContent = logoContent[contentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: WHITE }}>
      {/* Top Marquee */}
      <div className="fixed top-0 left-0 right-0 z-50" style={{ background: WHITE, borderBottom: `${LINE}px solid ${BLACK}` }}>
        <Marquee text="SOFTWARE ENGINEER • 3+ YEARS EXPERIENCE • FRONTEND • FULLSTACK • BUILDING MODERN WEB APPS" speed={30} />
      </div>

      {/* Bottom Marquee */}
      <div className="fixed bottom-0 left-0 right-0 z-50" style={{ background: WHITE, borderTop: `${LINE}px solid ${BLACK}` }}>
        <Marquee text="REACT • NEXT.JS • TYPESCRIPT • NODE.JS • ANGULAR • TAILWIND • AWS • DOCKER • MONGODB • POSTGRESQL" speed={25} />
      </div>

      {/* Main Grid */}
      <div className="absolute inset-0" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <motion.div
          className="relative w-full h-full grid"
          animate={{
            gridTemplateColumns: gridTemplate.columns,
            gridTemplateRows: gridTemplate.rows,
          }}
          transition={{ duration: 0.75, ease: GRID_EASE }}
          style={{
            gap: `${LINE}px`,
            backgroundColor: BLACK,
            isolation: "isolate",
          }}
        >
          <Quadrant
            title="WORK"
            href="/experience"
            position="tl"
            isHovered={hoveredQuadrant === "tl"}
            onHover={() => setHoveredQuadrant("tl")}
            onLeave={() => setHoveredQuadrant(null)}
          />
          <Quadrant
            title="CONNECT"
            href="/contact"
            position="tr"
            isHovered={hoveredQuadrant === "tr"}
            onHover={() => setHoveredQuadrant("tr")}
            onLeave={() => setHoveredQuadrant(null)}
          />
          <Quadrant
            title="ABOUT"
            href="/about"
            position="bl"
            isHovered={hoveredQuadrant === "bl"}
            onHover={() => setHoveredQuadrant("bl")}
            onLeave={() => setHoveredQuadrant(null)}
          />
          <Quadrant
            title="PROJECTS"
            href="/projects"
            position="br"
            isHovered={hoveredQuadrant === "br"}
            onHover={() => setHoveredQuadrant("br")}
            onLeave={() => setHoveredQuadrant(null)}
          />

          {/* LOGO */}
          <motion.div
            className="absolute cursor-pointer"
            style={{ zIndex: 9999, pointerEvents: "auto" }}
            animate={{
              left: logoPosition.left,
              top: logoPosition.top,
              x: "-50%",
              y: "-50%",
              opacity: 1,
              scale: logoHovered ? 1.22 : 1,
            }}
            initial={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.45, ease: GRID_EASE }}
            onPointerEnter={() => setLogoHovered(true)}
            onPointerLeave={() => setLogoHovered(false)}
          >
            {/* Crosshair lines */}
            <div className="absolute left-0 right-0" style={{ top: -LINE, height: LINE, background: BLACK, transform: "translateY(-100%)", zIndex: -1, pointerEvents: "none" }} />
            <div className="absolute left-0 right-0" style={{ bottom: -LINE, height: LINE, background: BLACK, transform: "translateY(100%)", zIndex: -1, pointerEvents: "none" }} />
            <div className="absolute top-0 bottom-0" style={{ left: -LINE, width: LINE, background: BLACK, transform: "translateX(-100%)", zIndex: -1, pointerEvents: "none" }} />
            <div className="absolute top-0 bottom-0" style={{ right: -LINE, width: LINE, background: BLACK, transform: "translateX(100%)", zIndex: -1, pointerEvents: "none" }} />

            <motion.div>
              <motion.div 
                className="relative px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-8 lg:px-14 lg:py-10 overflow-hidden" 
                style={{ backgroundColor: YELLOW, zIndex: 10, border: `${LINE}px solid ${BLACK}` }} 
                animate={{ rotate: logoHovered ? [0, -2, 2, -2, 0] : 0 }} 
                transition={{ duration: 0.28 }}
              >
                {/* Flickering Content - Instant Switch */}
                {logoHovered && currentContent && (
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    {currentContent.type === "text" ? (
                      <div className="text-center px-2">
                        <span 
                          className="font-black leading-tight uppercase break-words"
                          style={{ 
                            fontSize: "clamp(0.9rem, 2.5vw, 1.4rem)",
                            color: BLACK,
                            letterSpacing: "0.05em"
                          }}
                        >
                          {currentContent.content}
                        </span>
                      </div>
                    ) : (
                      <div className="relative w-full h-full">
                        <Image
                          src={`/logo/${currentContent.content}`}
                          alt="Portfolio image"
                          fill
                          style={{ 
                            objectFit: "cover",
                            filter: "grayscale(100%)"
                          }}
                          priority
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* KANCHANA Text */}
                <motion.div 
                  className="relative" 
                  animate={{ opacity: logoHovered ? 0 : 1 }} 
                  transition={{ duration: 0.2 }}
                >
                  <div 
                    className="font-black leading-none tracking-tight whitespace-nowrap" 
                    style={{ 
                      fontSize: "clamp(1.75rem, 7vw, 4rem)", 
                      fontFamily: "'Impact', 'Arial Black', sans-serif", 
                      fontStyle: "italic", 
                      color: BLACK, 
                      textDecoration: `underline ${LINE}px ${BLACK}`, 
                      textUnderlineOffset: "6px", 
                      transform: "skewX(-10deg)", 
                      letterSpacing: "-0.05em" 
                    }}
                  >
                    KANCHANA
                  </div>
                  <X className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-4 h-4 sm:w-5 sm:h-5" style={{ color: BLACK }} strokeWidth={3} />
                  <X className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-5 sm:h-5" style={{ color: BLACK }} strokeWidth={3} />
                  <X className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-5 sm:h-5" style={{ color: BLACK }} strokeWidth={3} />
                  <X className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-5 sm:h-5" style={{ color: BLACK }} strokeWidth={3} />
                </motion.div>
              </motion.div>

              <motion.div 
                className="text-center mt-2 sm:mt-3" 
                animate={{ opacity: logoHovered ? 0 : 1 }}
              >
                <p className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] font-bold uppercase whitespace-nowrap" style={{ color: BLACK }}>
                  SOFTWARE ENGINEER
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Hint - Hidden on small mobile */}
      <motion.div 
        className="hidden sm:flex fixed bottom-14 md:bottom-16 left-1/2 -translate-x-1/2 z-50 pointer-events-none" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.0 }}
      >
        <span className="flex items-center gap-2 text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase" style={{ color: BLACK }}>
          {/* /* <X className="w-3 h-3" />CLICK ANY CORNER TO EXPLORE<X className="w-3 h-3" /> */}
        </span>
      </motion.div>
    </div>
  );
}