export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "codereview-ai",
    title: "CodeReviewAI",
    description: "AI-Assisted Code Review Platform with real-time feedback and inline comments",
    longDescription: "Built a comprehensive code review platform that leverages AI to provide real-time, intelligent feedback on code submissions. Features include inline comments, diff visualization, persona-based checks (security, performance), and streaming responses via Server-Sent Events.",
    tech: ["React", "Node.js", "TailwindCSS", "Gemini API", "SSE", "Monaco Editor"],
    github: "https://github.com/Kanchi11/CodeReviewAI",
    demo: "#",
    metrics: [
      { label: "Review Time Reduction", value: "50%" },
      { label: "Adoption Boost", value: "3x" },
    ],
    featured: true,
  },
  {
    id: "j-tracker",
    title: "J-Tracker",
    description: "AI-Powered Job Tracker with automated listings, saved states, and OAuth integration",
    longDescription: "A full-stack job tracking platform that automates job discovery and helps manage application workflows. Features real-time listings, saved states (Wishlist, Applied, Status), Google OAuth authentication, unified search, and analytics. Includes LLM-based resume insights and automated cover letter generation.",
    tech: ["React", "Flask", "MongoDB", "Docker", "Selenium", "OAuth"],
    github: "https://github.com/Kanchi11/J-Tracker",
    demo: "#",
    metrics: [
      { label: "Reliability Improvement", value: "45%" },
      { label: "Automation Coverage", value: "100%" },
    ],
    featured: true,
  },
  {
    id: "sentimental-analyzer",
    title: "Sentimental Analyzer Pro",
    description: "Interactive Sentiment Analysis Dashboard with real-time visualizations",
    longDescription: "Built an interactive sentiment analysis dashboard using component-based architecture. Features responsive visualizations with Chart.js, client-side filtering, streamlined state management, and optimized data flows. Improved review and triage efficiency significantly.",
    tech: ["React", "Chart.js", "Flask", "Python", "REST APIs"],
    github: "https://github.com/Kanchi11/SentimentalAnalyzer",
    demo: "#",
    metrics: [
      { label: "Efficiency Improvement", value: "60%" },
      { label: "User Engagement", value: "+40%" },
    ],
    featured: true,
  },
];
