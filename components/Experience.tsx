"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data/experience";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="min-h-screen py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-b from-gray-900 to-black">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter">
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-red-400 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-red-400 rounded-full border-4 border-black transform md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-red-400/50 transition-all"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-xl text-red-400 font-semibold">{exp.company}</p>
                      </div>
                      {exp.period.current && (
                        <span className="inline-block px-3 py-1 bg-red-400/20 text-red-400 text-xs font-bold rounded-full uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>
                          {exp.period.start} - {exp.period.end}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="text-gray-300 flex items-start gap-2">
                          <span className="text-red-400 mt-1.5">▸</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    {exp.metrics && exp.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-800">
                        {exp.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-2xl font-bold text-red-400">{metric.value}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
