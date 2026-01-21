export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "cloud" | "tools" | "ai";
  level: number; // 1-5
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 5 },
  { name: "Next.js", category: "frontend", level: 5 },
  { name: "TypeScript", category: "frontend", level: 5 },
  { name: "JavaScript", category: "frontend", level: 5 },
  { name: "Angular", category: "frontend", level: 4 },
  { name: "HTML5/CSS3", category: "frontend", level: 5 },
  { name: "TailwindCSS", category: "frontend", level: 5 },
  { name: "Redux", category: "frontend", level: 4 },
  
  // Backend
  { name: "Node.js", category: "backend", level: 5 },
  { name: "Express.js", category: "backend", level: 5 },
  { name: "REST APIs", category: "backend", level: 5 },
  { name: "Java", category: "backend", level: 4 },
  { name: "Python", category: "backend", level: 5 },
  { name: "Flask", category: "backend", level: 4 },
  
  // Database
  { name: "PostgreSQL", category: "database", level: 5 },
  { name: "MySQL", category: "database", level: 4 },
  { name: "MongoDB", category: "database", level: 4 },
  { name: "Supabase", category: "database", level: 5 },
  
  // Cloud & DevOps
  { name: "AWS (EC2, S3, Lambda)", category: "cloud", level: 4 },
  { name: "Docker", category: "tools", level: 4 },
  { name: "GitHub Actions", category: "tools", level: 4 },
  { name: "Jenkins", category: "tools", level: 3 },
  
  // Tools & Testing
  { name: "Jest", category: "tools", level: 4 },
  { name: "Cypress", category: "tools", level: 4 },
  { name: "Git", category: "tools", level: 5 },
  { name: "Linux", category: "tools", level: 4 },
  
  // AI/LLMs
  { name: "Gemini API", category: "ai", level: 4 },
  { name: "Claude AI", category: "ai", level: 4 },
  { name: "Cursor", category: "tools", level: 5 },
  { name: "GitHub Copilot", category: "tools", level: 4 },
];

export const skillCategories = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Databases",
  cloud: "Cloud & DevOps",
  tools: "Tools & Testing",
  ai: "AI & LLMs",
};
