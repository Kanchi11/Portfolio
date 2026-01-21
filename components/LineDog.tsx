"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type LineDogProps = {
  className?: string;
  size?: number;
  folder?: string;
  framesCount?: number;
  idleFrame?: number;       // 0
  blinkFrame?: number;      // 1
  imageOffsetY?: number;
  tapDurationMs?: number;
};

type Step = { frame: number; ms: number };

export default function LineDog({
  className,
  size = 260,
  folder = "/about/line-frames",
  framesCount = 8,
  idleFrame = 0,
  blinkFrame = 1,
  tapDurationMs = 650,
  imageOffsetY = 8,
}: LineDogProps) {
  const frames = useMemo(() => {
    return Array.from({ length: framesCount }, (_, i) => {
      const n = String(i).padStart(2, "0");
      return `${folder}/frame-${n}.png`;
    });
  }, [framesCount, folder]);

  const [frame, setFrame] = useState(idleFrame);
  const [isHovering, setIsHovering] = useState(false);

  const timersRef = useRef<number[]>([]);
  const runningRef = useRef<"idle" | "active">("idle");

  const clearAll = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
  };

  // --- Idle blinking loop ---
  const scheduleBlinkLoop = () => {
    // don’t start if active animation is running
    if (runningRef.current !== "idle") return;

    // random-ish blink interval: 3.5s to 6.5s
    const wait = 3500 + Math.random() * 3000;

    const t = window.setTimeout(() => {
      if (runningRef.current !== "idle") return;

      setFrame(blinkFrame);
      const t2 = window.setTimeout(() => {
        if (runningRef.current !== "idle") return;
        setFrame(idleFrame);
        scheduleBlinkLoop(); // schedule next blink
      }, 130); // blink duration
      timersRef.current.push(t2);
    }, wait);

    timersRef.current.push(t);
  };

  // --- Scripted “pet the pup” sequence ---
  const playSequence = (steps: Step[], onDone?: () => void) => {
    clearAll();
    runningRef.current = "active";

    let acc = 0;
    steps.forEach((s, idx) => {
      const t = window.setTimeout(() => {
        setFrame(s.frame);

        // last step
        if (idx === steps.length - 1) {
          runningRef.current = "idle";
          onDone?.();
        }
      }, acc);
      timersRef.current.push(t);
      acc += s.ms;
    });
  };

  // Your main hover script
  const hoverScript: Step[] = [
    { frame: 2, ms: 160 }, // hand approaches
    { frame: 3, ms: 320 }, // pet moment
    { frame: 4, ms: 220 }, // wag
    { frame: 4, ms: 220 }, // wag again (subtle repeat)
    { frame: 5, ms: 180 }, // roll start
    { frame: 6, ms: 520 }, // full roll (hold longer)
    { frame: 7, ms: 220 }, // settle
    { frame: 0, ms: 1 },   // back to idle
  ];

  const stopToIdle = () => {
    clearAll();
    runningRef.current = "idle";
    setFrame(idleFrame);
    scheduleBlinkLoop();
  };

  useEffect(() => {
    // start idle blink on mount
    scheduleBlinkLoop();
    return () => clearAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If user keeps hovering, you can optionally loop the “wag+roll” chunk
  useEffect(() => {
    if (!isHovering) return;

    // Play once. When done, if still hovering, replay (or just wag loop)
    playSequence(hoverScript, () => {
      if (isHovering) {
        // Replay full script (or replace with a smaller loop if you want)
        playSequence(hoverScript, () => {
          if (!isHovering) stopToIdle();
        });
      } else {
        stopToIdle();
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHovering]);

  return (
    <div
      className={className}
      style={{
        width: size,
        height: Math.round(size * 0.7),
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        userSelect: "none",
        background: "transparent",
      }}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        stopToIdle();
      }}
      onPointerDown={() => {
        // Mobile tap: play a short burst of the hover script
        setIsHovering(false);
        playSequence(hoverScript, () => stopToIdle());

        const t = window.setTimeout(() => {
          stopToIdle();
        }, tapDurationMs);
        timersRef.current.push(t);
      }}
      aria-label="Interactive dog"
      title="pet the pup"
    >
      <img
        src={frames[frame]}
        alt="Animated pup"
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center bottom",
          transform: `translateY(${imageOffsetY}px)`,
          display: "block",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}