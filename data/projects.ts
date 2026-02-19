export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  highlights: string[];
  image?: string; // Optional for now
};

export const PROJECTS: Project[] = [
  {
    id: "cbp",
    title: "ComfortBreak Penguin (CBP)",
    description: "A Web3 cryptocurrency platform supporting a community-driven digital token ecosystem centered around a branded penguin identity. Provides interactive promotional experiences and blockchain-based token participation.",
    tech: ["Next.js", "React", "TypeScript", "thirdweb", "Tailwind CSS", "Node.js"],
    github: "https://github.com/mohamed3773/crypto-token-sale",
    live: "https://thepenguins.live",
    highlights: [
      "Community-driven token ecosystem",
      "Secure wallet connectivity",
      "Smart contract integration",
    ],
    image: "/cbp-project.png"
  },
  {
    id: "marspioneers",
    title: "MarsPioneers 2040",
    description: "Full-stack digital platform for a futuristic NFT-inspired community centered around colonizing Mars. Features a structured roadmap, digital collection concept, and scalable architecture.",
    tech: ["TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Supabase"],
    github: "https://github.com/mohamed3773/MarsPioneers-Frontend",
    live: "https://marspioneers.tech",
    highlights: [
      "Futuristic NFT community platform",
      "RESTful backend architecture",
      "scalable architecture",
    ],
    image: "/mars-project.png"
  },
];
