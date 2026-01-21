"use client";

import { useEffect, useRef } from "react";

export function HorizontalRail({
  children,
  height = "calc(100vh - 220px)",
}: {
  children: React.ReactNode;
  height?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Optional: mouse wheel scroll vertically -> translate to horizontal (Milli vibe)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // If user is already doing horizontal, let it happen
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Only hijack wheel when the rail can scroll horizontally
      const canScroll =
        el.scrollWidth > el.clientWidth &&
        (el.scrollLeft > 0 || el.scrollLeft < el.scrollWidth - el.clientWidth);

      if (!canScroll) return;

      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={ref}
      className="w-full overflow-x-auto overflow-y-hidden"
      style={{
        height,
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        className="h-full flex gap-[var(--line)] px-2 md:px-4"
        style={{
          background: "var(--black)", // creates the thick divider gaps
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        {children}
      </div>
    </div>
  );
}
