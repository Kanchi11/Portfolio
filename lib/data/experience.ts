export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: {
    start: string;
    end: string;
    current?: boolean;
  };
  description: string[];
  tech: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const experiences: Experience[] = [
  {
    id: "sq-skunkworks",
    role: "Software Engineer",
    company: "San Quentin SkunkWorks",
    location: "USA - Remote",
    period: {
      start: "Sep 2024",
      end: "Present",
      current: true,
    },
    description: [
      "Built and shipped a secure, production web application using Next.js, TypeScript, and PostgreSQL, supporting role-based workflows for 100+ users",
      "Implemented frontend flows, authentication, and application state management with Supabase, reducing manual processing by 40% and improving reliability",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "React"],
    metrics: [
      { label: "Manual Processing Reduction", value: "40%" },
      { label: "Users Supported", value: "100+" },
    ],
  },
  {
    id: "infosys",
    role: "Software Engineer",
    company: "Infosys Ltd",
    location: "Pune, India",
    period: {
      start: "Nov 2019",
      end: "Dec 2022",
    },
    description: [
      "Owned frontend development for Ford's ETIS Phase 2, building reusable Angular and React components focused on performance, accessibility, and usability for large-scale consumer-facing workflows",
      "Collaborated closely with product managers, designers, and backend engineers to ship new features and iterate on existing UI based on user feedback",
      "Built and integrated Node.js REST APIs with frontend applications, ensuring secure data flows and optimized client-side rendering",
      "Used Chrome DevTools and performance profiling to debug UI issues, reduce rendering bottlenecks, and improve page responsiveness by 25%",
    ],
    tech: ["Angular", "React", "Node.js", "REST APIs", "TypeScript", "JavaScript"],
    metrics: [
      { label: "Performance Improvement", value: "25%" },
      { label: "Component Reusability", value: "80%" },
    ],
  },
  {
    id: "isro",
    role: "Project Intern",
    company: "Indian Space Research Organization (ISRO)",
    location: "Bangalore, India",
    period: {
      start: "Jan 2019",
      end: "Jul 2019",
    },
    description: [
      "Built a supervised ML pipeline in Python/scikit-learn/TensorFlow to classify defective vs. non-defective bimetal components; improved QA accuracy by 35% after comparative model evaluation",
      "Prototyped a Flask dashboard for result visualization, experiment tracking, and exports to support QDSM lab reviews and future automation studies",
    ],
    tech: ["Python", "TensorFlow", "scikit-learn", "Flask", "Machine Learning"],
    metrics: [
      { label: "QA Accuracy Improvement", value: "35%" },
    ],
  },
];
