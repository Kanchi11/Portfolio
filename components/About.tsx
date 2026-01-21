"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Github, Download } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-black to-gray-900">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter">
            ABOUT
          </h2>
          <div className="w-24 h-1 bg-red-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I'm a <span className="text-red-400 font-semibold">Frontend & Fullstack Developer</span> with 3+ years of experience building production web applications. 
                I specialize in creating modern, performant, and accessible user interfaces using React, Next.js, and TypeScript.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Currently working at <span className="text-red-400 font-semibold">San Quentin SkunkWorks</span>, building secure web applications 
                that support 1000+ users with role-based workflows. I'm passionate about creating smooth, interactive experiences 
                while maintaining clean, scalable code architecture.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open source, or diving deep into 
                AI/ML tools and their applications in modern development workflows.
              </p>
            </div>

            {/* Education */}
            <div className="pt-8 border-t border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-red-400">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-lg">Master of Science in Computer Science</h4>
                  <p className="text-gray-400">North Carolina State University</p>
                  <p className="text-gray-500 text-sm">August 2023 - May 2025</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Coursework: Algorithms, Software Engineering, Neural Networks & Deep Learning, 
                    Computer Networks, Parallel Computers, System Design
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                  <p className="text-gray-400">Electronics and Communication</p>
                  <p className="text-gray-400">Amrita School of Engineering</p>
                  <p className="text-gray-500 text-sm">August 2015 - May 2019</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-red-400" size={20} />
                <span>Seattle, WA / Remote</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-red-400" size={20} />
                <a href="mailto:kds@ncsu.edu" className="hover:text-red-400 transition-colors">
                  kds@ncsu.edu
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="text-red-400" size={20} />
                <span>+1 (919) 264-0047</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com/in/kanchanads"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900/50 border border-gray-800 px-6 py-3 rounded-lg hover:border-red-400 hover:text-red-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://github.com/Kanchi11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-900/50 border border-gray-800 px-6 py-3 rounded-lg hover:border-red-400 hover:text-red-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                <span>GitHub</span>
              </motion.a>
            </div>

            {/* Resume Download */}
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-red-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-red-500 transition-all w-full justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
