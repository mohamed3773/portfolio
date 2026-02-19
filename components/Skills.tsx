"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { Cpu, Globe, Database, Layout, Code2 } from "lucide-react";

const SKILLS = [
    { category: "Frontend", icon: Layout, items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"] },
    { category: "Backend", icon: Database, items: ["Node.js", "Express", "PostgreSQL", "Firebase", "Prisma", "Supabase"] },
    { category: "Tools & DevOps", icon: Cpu, items: ["Git", "Docker", "AWS", "Vercel", "Linux", "Figma"] },
];

export function Skills() {
    return (
        <SectionWrapper id="skills" className="bg-transparent">
            <div className="text-center mb-16 space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                >
                    Technical Arsenal
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground max-w-2xl mx-auto text-lg"
                >
                    A curated stack of modern technologies for building robust applications.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 perspective-[2000px]">
                {SKILLS.map((skillGroup, index) => {
                    // Define colors/gradients based on index/category for variety
                    const colors = [
                        {
                            gradient: "from-purple-600 to-pink-600",
                            border: "group-hover:border-purple-500/50",
                            iconColor: "text-purple-400",
                            backLayer: "bg-gradient-to-br from-fuchsia-600 via-purple-600 to-indigo-600"
                        },
                        {
                            gradient: "from-cyan-500 to-blue-500",
                            border: "group-hover:border-cyan-500/50",
                            iconColor: "text-cyan-400",
                            backLayer: "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600"
                        },
                        {
                            gradient: "from-emerald-500 to-teal-500",
                            border: "group-hover:border-emerald-500/50",
                            iconColor: "text-emerald-400",
                            backLayer: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600"
                        },
                    ][index % 3];

                    return (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20, transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover="hover"
                            variants={{
                                hover: {
                                    scale: 1.05,
                                    rotateX: 5,
                                    rotateY: -5,
                                    transition: { duration: 0.3 }
                                }
                            }}
                            className="group relative h-full w-full"
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Single Gradient Back Layer */}
                            <motion.div
                                variants={{
                                    hover: { x: 12, y: 12, rotateZ: 2 }
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className={`absolute inset-0 rounded-2xl ${colors.backLayer}`}
                                style={{ transform: "translateZ(-20px)" }}
                            />

                            {/* 3D Layer 2: Main Card Body */}
                            <div
                                className={`relative h-full bg-gradient-to-br from-slate-800 to-slate-950 border-t border-l border-white/20 border-b-4 border-r-4 border-black/30 rounded-2xl p-6 transition-all duration-300 shadow-xl ${colors.border}`}
                                style={{ transform: "translateZ(0px)" }}
                            >
                                {/* 3D Layer 3: Floating Content */}
                                <motion.div
                                    initial={{ z: 30 }}
                                    variants={{
                                        hover: { z: 60 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                >

                                    {/* Header with 3D Icon */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/10 to-black/30 border-t border-l border-white/10 shadow-[4px_4px_10px_rgba(0,0,0,0.3)]">
                                            <skillGroup.icon
                                                className={`h-6 w-6 ${colors.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}
                                                style={{ filter: "drop-shadow(0px 3px 0px rgba(0,0,0,0.3)) drop-shadow(0px 5px 10px rgba(0,0,0,0.3))" }}
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-white tracking-wide">{skillGroup.category}</h3>
                                    </div>

                                    {/* Skills List */}
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1.5 rounded-full text-sm font-medium bg-black/40 text-gray-300 border border-white/5 hover:text-white hover:border-white/20 transition-colors cursor-default shadow-sm"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
