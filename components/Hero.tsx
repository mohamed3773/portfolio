"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, MousePointer2, Copy, Check } from "lucide-react";
import { ShapeCluster } from "@/components/HeroBackground";
import { useState } from "react";

// --- STATIC 3D LAYERED CODE WINDOW ---
const CodeWindow = () => {
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-3xl mx-auto mt-20 relative z-30"
        >
            {/* --- 3D LAYERS UNDERNEATH --- */}

            {/* Layer 1: Bottom Most - Purple/Pink Gradient (Tilted Left) */}
            <div className="absolute inset-0 transform -translate-x-2 translate-y-3 -rotate-2 rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/20 -z-20" />

            {/* Layer 2: Middle - Cyan/Blue Gradient (Tilted Right) */}
            <div className="absolute inset-0 transform translate-x-2 translate-y-1.5 rotate-1 rounded-xl bg-gradient-to-r from-cyan-600/30 to-blue-600/30 border border-cyan-500/20 -z-10" />

            {/* Layer 3: Main Window - Straight & Sharp */}
            <div className="relative rounded-xl border border-white/10 bg-[#0d1117] overflow-hidden font-mono text-sm md:text-base leading-relaxed">

                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <span className="ml-3 text-xs text-muted-foreground/60 select-none">
                            Mohamed.tsx
                        </span>
                    </div>
                    {/* Copy Button */}
                    <button
                        onClick={onCopy}
                        className="text-muted-foreground/60 hover:text-white transition-colors"
                        title="Copy Code"
                    >
                        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                    </button>
                </div>

                {/* Code Content */}
                <div className="p-6 md:p-8 overflow-x-auto">
                    <pre className="text-left">
                        <code>
                            <div className="table-row">
                                <span className="table-cell text-right pr-4 select-none text-white/20">1</span>
                                <span className="table-cell">
                                    <span className="text-purple-400">const</span>{" "}
                                    <span className="text-blue-400">Developer</span>{" "}
                                    <span className="text-white">=</span>{" "}
                                    <span className="text-yellow-400">{"{"}</span>
                                </span>
                            </div>
                            <div className="table-row">
                                <span className="table-cell text-right pr-4 select-none text-white/20">2</span>
                                <span className="table-cell pl-4">
                                    <span className="text-cyan-400">name</span>:{" "}
                                    <span className="text-green-400">"Mohamed"</span>,
                                </span>
                            </div>
                            <div className="table-row">
                                <span className="table-cell text-right pr-4 select-none text-white/20">3</span>
                                <span className="table-cell pl-4">
                                    <span className="text-cyan-400">role</span>:{" "}
                                    <span className="text-green-400">"Full Stack Architect"</span>,
                                </span>
                            </div>
                            <div className="table-row">
                                <span className="table-cell text-right pr-4 select-none text-white/20">4</span>
                                <span className="table-cell pl-4">
                                    <span className="text-cyan-400">skills</span>: <span className="text-yellow-400">[</span>
                                </span>
                            </div>
                            <div className="table-row">
                                <span className="table-cell text-right pr-4 select-none text-white/20">5</span>
                                <span className="table-cell pl-8">
                                    <span className="text-green-400">"React"</span>,{" "}
                                    <span className="text-green-400">"Next.js"</span>,{" "}
                                    <span className="text-green-400">"TypeScript"</span>,
                                </span>
                            </div>
                            <div className="table-row">
                                <span className="table-cell text-right pr-4 select-none text-white/20">6</span>
                                <span className="table-cell pl-8">
                                    <span className="text-green-400">"Node.js"</span>,{" "}
                                    <span className="text-green-400">"TailwindCSS"</span>
                                </span>
                            </div>
                            <div className="table-row">
                                <span className="table-cell text-right pr-4 select-none text-white/20">7</span>
                                <span className="table-cell pl-4">
                                    <span className="text-yellow-400">]</span>,
                                </span>
                            </div>
                            <div className="table-row">
                                <span className="table-cell text-right pr-4 select-none text-white/20">8</span>
                                <span className="table-cell pl-4">
                                    <span className="text-cyan-400">hardWorker</span>:{" "}
                                    <span className="text-purple-400">true</span>,
                                </span>
                            </div>
                            <div className="table-row">
                                <span className="table-cell text-right pr-4 select-none text-white/20">9</span>
                                <span className="table-cell pl-4">
                                    <span className="text-cyan-400">problemSolver</span>:{" "}
                                    <span className="text-purple-400">true</span>
                                </span>
                            </div>
                            <div className="table-row">
                                <span className="table-cell text-right pr-4 select-none text-white/20">10</span>
                                <span className="table-cell">
                                    <span className="text-yellow-400">{"}"}</span>;
                                </span>
                            </div>
                        </code>
                    </pre>
                </div>
            </div>
        </motion.div>
    );
};

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-24 md:pt-32 pb-20">

            {/* Animated Gradient Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse delay-1000" />
            </div>

            {/* 3D Shapes Layer */}
            <div className="absolute inset-0 z-0 bg-transparent pointer-events-none">
                <div className="w-full h-full pointer-events-auto">
                    <ShapeCluster />
                </div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20 dark:opacity-100" />

            {/* Main Content */}
            <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">

                {/* Floating Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Open to New Opportunities
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 leading-tight"
                >
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400 animate-gradient-x">Mohamed.</span> <br />
                    <span className="text-foreground/80 text-4xl md:text-6xl mt-4 block">Building Digital Experiences.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light"
                >
                    I craft high-performance, accessible, and visually stunning web applications.
                    Merging technical precision with creative design to solve real-world problems.
                </motion.p>

                {/* Buttons - Professional 3D Layered Design */}
                {/* Buttons - Professional Clean Design with Slide-Up Gradient */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-6 mt-4"
                >
                    {/* View My Work Button */}
                    <Link
                        href="#projects"
                        className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl border border-purple-500/20 bg-purple-500/5 px-10 font-bold text-white transition-all duration-300 hover:border-purple-500/0"
                    >
                        {/* Slide-up Gradient */}
                        <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 transition-transform duration-500 ease-out group-hover:translate-y-0" />

                        {/* Content */}
                        <span className="relative flex items-center gap-2">
                            View My Work
                            <MousePointer2 className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>

                    {/* Contact Me Button */}
                    <Link
                        href="#contact"
                        className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-10 font-bold text-white transition-all duration-300 hover:border-cyan-500/0"
                    >
                        {/* Slide-up Gradient */}
                        <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-transform duration-500 ease-out group-hover:translate-y-0" />

                        {/* Content */}
                        <span className="relative flex items-center gap-2">
                            Start Project
                            <div className="relative flex h-5 w-5 items-center justify-center">
                                <svg className="relative h-5 w-5 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </span>
                    </Link>
                </motion.div>

                {/* NEW STATIC 3D LAYERED CODE WINDOW */}
                <CodeWindow />

            </div>
        </section>
    );
}
