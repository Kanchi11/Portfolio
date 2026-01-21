"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");

    // Simulate form submission (replace with actual API call)
    try {
      // TODO: Add actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-black to-gray-900">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter">
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-red-400 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let's build something amazing together. I'm always open to discussing new projects,
            creative ideas, or opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-400 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-red-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-red-500 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status !== "idle"}
              >
                {status === "idle" && (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle2 size={20} />
                    <span>Message Sent!</span>
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle size={20} />
                    <span>Error - Try Again</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="text-red-400 mt-1" size={20} />
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <a
                      href="mailto:kds@ncsu.edu"
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      kds@ncsu.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-red-400 mt-1" size={20} />
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <a
                      href="tel:+19192640047"
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      +1 (919) 264-0047
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400">Connect</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com/in/kanchanads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg hover:border-red-400 hover:text-red-400 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/Kanchi11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 border border-gray-700 rounded-lg hover:border-red-400 hover:text-red-400 transition-all"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
