"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Globe } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { SectionWrapper } from "./SectionWrapper";
import { cn } from "@/lib/utils";

export function Projects() {
    return (
        <SectionWrapper id="projects" className="bg-black/20">
            <div className="text-center mb-16 space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white"
                >
                    Featured Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground max-w-2xl mx-auto text-lg"
                >
                    Selected works showcasing complex problem solving and modern tech stacks.
                </motion.p>
            </div>

            <div className="grid gap-12 lg:gap-20">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    >
                        {/* Project Preview (Left/Right alternating) */}
                        <div className={cn(
                            "relative aspect-[3/2] perspective-[1000px] group/card",
                            index % 2 === 1 && "lg:order-2"
                        )}>
                            {/* 3D Layer 1: Bottom Right */}
                            <div className={cn(
                                "absolute inset-0 rounded-2xl opacity-20 -z-20 transition-all duration-500 transform translate-x-0 translate-y-0 rotate-0 group-hover/card:opacity-100 group-hover/card:translate-x-3 group-hover/card:translate-y-3 group-hover/card:rotate-2",
                                project.id === "marspioneers" ? "bg-gradient-to-br from-orange-600 via-red-600 to-amber-600" :
                                    project.id === "cbp" ? "bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-500" :
                                        "bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"
                            )} />

                            {/* 3D Layer 2: Bottom Left */}
                            <div className={cn(
                                "absolute inset-0 rounded-2xl opacity-20 -z-10 transition-all duration-500 transform translate-x-0 translate-y-0 rotate-0 group-hover/card:opacity-100 group-hover/card:-translate-x-3 group-hover/card:translate-y-3 group-hover/card:-rotate-2",
                                project.id === "marspioneers" ? "bg-gradient-to-bl from-red-500 via-orange-500 to-yellow-500" :
                                    project.id === "cbp" ? "bg-gradient-to-bl from-cyan-400 via-sky-500 to-blue-600" :
                                        "bg-gradient-to-bl from-cyan-400 via-blue-500 to-sky-500"
                            )} />

                            {/* Main Card Body with 3D Bevel */}
                            <div className="relative h-full w-full rounded-2xl overflow-hidden border-t border-l border-white/20 border-b-4 border-r-4 border-black/50 bg-zinc-900 shadow-2xl transition-all duration-500 group-hover/card:scale-[1.01] group-hover/card:-translate-y-1">
                                {/* Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent z-0" />

                                {/* Project Image Logic */}
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 z-10"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none'; // Hide broken image
                                            e.currentTarget.nextElementSibling?.classList.remove('hidden'); // Show placeholder
                                        }}
                                    />
                                ) : null}

                                {/* Placeholder (Shown if no image or on error) */}
                                <div className={cn(
                                    "absolute inset-0 flex items-center justify-center text-white/20 z-0",
                                    project.image ? "hidden" : "" // Hidden by default if image exists
                                )}>
                                    <div className="text-center space-y-2">
                                        <Code2 className="h-16 w-16 mx-auto opacity-50" />
                                        <span className="text-sm font-mono block">Project Thumbnail</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className={cn(
                            "space-y-6",
                            index % 2 === 1 && "lg:order-1"
                        )}>
                            <div className="space-y-2">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((t) => (
                                        <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className={cn(
                                    "text-3xl font-bold text-white transition-all duration-300",
                                    project.id === "cbp" ? "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-300 group-hover:via-cyan-400 group-hover:to-blue-500" :
                                        project.id === "marspioneers" ? "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-red-500 group-hover:to-yellow-500" :
                                            "group-hover:text-purple-400"
                                )}>
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {project.description}
                            </p>

                            <ul className="space-y-2 text-sm text-gray-300">
                                {project.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap items-center gap-6 pt-6">
                                {/* 3D Live Demo Button - Clean 3D Block */}
                                <Link href={project.live} target="_blank" className="group relative inline-block">
                                    <div className="relative z-10 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-sm font-bold text-white transition-all duration-200 border-t border-l border-white/20 border-b-4 border-r-4 border-black group-hover:-translate-y-1 active:border-b-0 active:border-r-0 active:translate-y-1">
                                        <Globe className="h-4 w-4 text-white/90 transition-transform group-hover:rotate-12" />
                                        <span>Live Demo</span>
                                    </div>
                                </Link>

                                {/* 3D Source Code Button - Clean 3D Block */}
                                <Link href={project.github} target="_blank" className="group relative inline-block">
                                    <div className="relative z-10 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-900 px-8 py-3 text-sm font-bold text-gray-300 transition-all duration-200 border-t border-l border-white/10 border-b-4 border-r-4 border-black group-hover:text-white group-hover:-translate-y-1 active:border-b-0 active:border-r-0 active:translate-y-1">
                                        <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                                        <span>Source Code</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
