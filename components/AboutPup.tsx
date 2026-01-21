"use client";

import Image from "next/image";
import * as React from "react";

type AboutPupProps = {
  className?: string;
  size?: number; // px
  fps?: number; // frames per second
  idleFrame?: number;
  mode?: "loopWhileHover" | "playOnce";
};

const FRAMES = [
  "/about/pup/frame-00.png",
  "/about/pup/frame-01.png",
  "/about/pup/frame-02.png",
  "/about/pup/frame-03.png",
  "/about/pup/frame-04.png",
  "/about/pup/frame-05.png",
  "/about/pup/frame-06.png",
  "/about/pup/frame-07.png",
];

export default function AboutPup({
  className,
  size = 220,
  fps = 12,
  idleFrame = 0,
  mode = "loopWhileHover",
}: AboutPupProps) {
  const [idx, setIdx] = React.useState(idleFrame);
  const [hovered, setHovered] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Detect touch device
  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  // Preload frames (prevents flicker)
  React.useEffect(() => {
    FRAMES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Desktop: Loop while hovering
  React.useEffect(() => {
    if (isTouchDevice) return; // Skip on touch devices
    
    if (!hovered) {
      setIdx(idleFrame);
      return;
    }

    const ms = Math.max(40, Math.floor(1000 / fps));
    const t = window.setInterval(() => {
      setIdx((v) => (v + 1) % FRAMES.length);
    }, ms);

    return () => window.clearInterval(t);
  }, [hovered, fps, idleFrame, isTouchDevice]);

  // Mobile: Play once when tapped
  React.useEffect(() => {
    if (!isTouchDevice || !isPlaying) return;

    const ms = Math.max(40, Math.floor(1000 / fps));
    let frameIndex = 0;

    const t = window.setInterval(() => {
      frameIndex += 1;
      if (frameIndex >= FRAMES.length) {
        // Animation complete - stop and reset
        window.clearInterval(t);
        setIdx(idleFrame);
        setIsPlaying(false);
        return;
      }
      setIdx(frameIndex);
    }, ms);

    return () => window.clearInterval(t);
  }, [isPlaying, fps, idleFrame, isTouchDevice]);

  const handleTap = () => {
    if (isTouchDevice) {
      // Start animation from beginning
      setIdx(0);
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={className}
      onMouseEnter={() => !isTouchDevice && setHovered(true)}
      onMouseLeave={() => !isTouchDevice && setHovered(false)}
      onClick={handleTap}
      role="img"
      aria-label={isTouchDevice ? "Tap to pet the pup" : "Hover to pet the pup"}
      style={{ width: size, height: size, cursor: "pointer" }}
    >
      <div className="relative h-full w-full">
        <Image
          src={FRAMES[idx]}
          alt="Pup"
          fill
          sizes={`${size}px`}
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}