"use client";

import { motion } from "framer-motion";

export function Marquee({ text, speed = 24 }: { text: string; speed?: number }) {
  const chunk = `${text} • ${text} • ${text} • ${text} • `;
  return (
    <div className="overflow-hidden whitespace-nowrap bg-white">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <div className="shrink-0 py-1">
          <span className="text-xs md:text-sm font-bold tracking-wider uppercase text-black px-2">
            {chunk}
          </span>
        </div>
        <div className="shrink-0 py-1" aria-hidden>
          <span className="text-xs md:text-sm font-bold tracking-wider uppercase text-black px-2">
            {chunk}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
