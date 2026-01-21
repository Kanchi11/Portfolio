"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Kanchana Dhana. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with Next.js, TypeScript, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
