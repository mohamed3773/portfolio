"use client";

import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, Briefcase } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const experiences = [
    {
        id: 1,
        period: "Present",
        title: "Software Engineering Student",
        institution: "OSTIM Technical University, Ankara",
        description: "Focused on advanced algorithms, software architecture, and full-stack web development. Actively participating in technical workshops and community coding events.",
        type: "education",
        isCurrent: true,
    },
    {
        id: 2,
        period: "2024 - Present",
        title: "Freelance Full Stack Developer",
        institution: "Remote / Independent",
        description: [
            "Developed and deployed production-ready web applications for various clients.",
            "Specialized in Next.js, Web3 integrations, and high-performance UI optimization.",
            "Managed end-to-end project lifecycles from requirement gathering to deployment."
        ],
        type: "work",
        isCurrent: true,
    }
];

export const Experience = () => {
    return (
        <SectionWrapper id="experience">
            {/* Header Section */}
            <div className="text-center mb-16 space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white tracking-tight"
                >
                    Experience & Education
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted-foreground max-w-2xl mx-auto text-lg"
                >
                    My academic foundation and professional journey.
                </motion.p>
            </div>

            <div className="relative max-w-4xl mx-auto mt-12">
                {/* Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent transform md:-translate-x-1/2" />

                <div className="space-y-12">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
                        >
                            {/* Desktop Spacer for EVEN items (Pushes content to Right) */}
                            {index % 2 === 0 && <div className="hidden md:block" />}

                            {/* Content Side */}
                            <div className={`relative ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                <div className={`relative p-6 rounded-2xl bg-zinc-900 border-t border-l border-white/10 border-b-4 border-r-4 border-black transition-all duration-300 group hover:-translate-y-1 hover:-translate-x-1 ${index % 2 === 0
                                    ? "hover:border-l-purple-500/50 hover:border-t-purple-500/50"
                                    : "hover:border-l-cyan-500/50 hover:border-t-cyan-500/50"
                                    }`}>

                                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? "md:items-end" : "md:items-start"
                                        }`}>
                                        {experience.isCurrent ? (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                                                {experience.period}
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-gray-400 border border-white/5">
                                                {experience.period}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {experience.title}
                                    </h3>
                                    <p className={`text-sm font-semibold mb-4 transition-colors ${index % 2 === 0 ? "text-purple-400 group-hover:text-purple-300" : "text-cyan-400 group-hover:text-cyan-300"
                                        }`}>
                                        {experience.institution}
                                    </p>

                                    {Array.isArray(experience.description) ? (
                                        <ul className={`space-y-2 text-gray-400 text-sm leading-relaxed list-disc ${index % 2 === 0 ? "md:mr-5 rtl:mr-5" : "ml-5"
                                            }`}>
                                            {experience.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {experience.description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Desktop Spacer for ODD items (Pushes content to Left) */}
                            {index % 2 !== 0 && <div className="hidden md:block" />}

                            {/* Center Dot - Adjusted for strict centering */}
                            <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-purple-500 transform -translate-x-1/2 md:mt-0 z-10">
                                <div className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-20" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
