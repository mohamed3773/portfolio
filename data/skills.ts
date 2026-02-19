export type SkillCategory = {
  category: string;
  skills: string[];
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Supabase", "PostgreSQL"],
  },
  {
    category: "Web3",
    skills: ["thirdweb", "Wallet Connection", "Smart Contracts"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "npm", "Vercel", "VS Code"],
  },
];
