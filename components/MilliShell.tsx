"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Marquee } from "./Marquee";
import { SideText } from "./SideText";

const LINE = "var(--line)";
const BLACK = "var(--black)";
const WHITE = "var(--white)";
const YELLOW = "var(--yellow)";

const NAV_ITEMS = [
  { label: "WORK", href: "/experience" },
  { label: "ABOUT", href: "/about" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONNECT", href: "/contact" },
];

export function MilliShell({
  children,
  topText = "SOFTWARE ENGINEER • FRONTEND • FULLSTACK • BUILDING MODERN WEB APPS",
}: {
  children: React.ReactNode;
  topText?: string;
}) {
  const pathname = usePathname();

  const left = NAV_ITEMS.slice(0, 2);   // WORK, ABOUT
  const right = NAV_ITEMS.slice(2);     // PROJECTS, CONNECT

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* TOP MARQUEE */}
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{ borderBottom: `${LINE} solid ${BLACK}` }}
      >
        <Marquee text={topText} speed={26} />
      </div>


      {/* PAGE CONTENT */}
      <main
        className="mx-auto w-full max-w-6xl px-6 md:px-12"
        style={{ paddingTop: 84, paddingBottom: 84 }}
      >
        {children}
      </main>

      {/* BOTTOM NAV */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-5 bg-white"
        style={{ borderTop: `${LINE} solid ${BLACK}` }}
      >
        {/* LEFT 2 */}
        {left.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="text-center py-3 font-bold tracking-wider text-sm"
              style={{
                borderRight: `${LINE} solid ${BLACK}`,
                background: active ? YELLOW : WHITE,
              }}
            >
              {item.label}
            </Link>
          );
        })}

        {/* CENTER K (click -> landing) */}
        <Link
          href="/"
          className="flex items-center justify-center font-black italic"
          style={{
            borderRight: `${LINE} solid ${BLACK}`,
            borderLeft: `${LINE} solid ${BLACK}`,
            background: pathname === "/" ? YELLOW : WHITE,
          }}
        >
          K
        </Link>

        {/* RIGHT 2 */}
        {right.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="text-center py-3 font-bold tracking-wider text-sm"
              style={{
                borderRight: item.href === right[right.length - 1].href ? undefined : `${LINE} solid ${BLACK}`,
                background: active ? YELLOW : WHITE,
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
