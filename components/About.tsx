"use client";

import { motion } from "framer-motion";
import { User, MapPin, Calendar, Mail, Globe } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const ABOUT_DATA = {
    location: "Ankara, Turkey",
    email: "nabaa@example.com",
    experience: "2+ Years"
};

export function About() {
    return (
        <SectionWrapper id="about">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* Visual Column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                >
                    {/* 3D Stack Container */}
                    <div className="relative w-full max-w-[480px] aspect-square perspective-[1000px] group">

                        {/* Layer 1: Deep Purple Plate (Back) */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 opacity-100 transform -rotate-6 translate-x-[-10px] translate-y-[-10px] transition-transform duration-500 group-hover:-rotate-12 group-hover:-translate-x-4 border border-white/5" />

                        {/* Layer 2: Cyan Plate (Middle) */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-700 opacity-100 transform rotate-3 translate-x-[10px] translate-y-[10px] transition-transform duration-500 group-hover:rotate-6 group-hover:translate-x-4 border border-white/5" />

                        {/* Main Image Card (Top) */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-900 border-2 border-white/10 z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">

                            <img
                                src="/profile.png"
                                alt="Mohamed - Full Stack Developer"
                                className="object-cover w-full h-full"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const fallback = document.getElementById('profile-fallback');
                                    if (fallback) fallback.classList.remove('hidden');
                                }}
                            />

                            {/* Fallback */}
                            <div id="profile-fallback" className="hidden absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
                                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10">
                                    <User className="w-12 h-12 text-purple-400 opacity-50" />
                                </div>
                                <p className="text-white font-medium mb-1">Add Your Photo</p>
                                <p className="text-xs text-muted-foreground">Save as /public/profile.png</p>
                            </div>

                            {/* Name Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                                <h3 className="text-white text-2xl font-bold">Mohamed</h3>
                                <p className="text-purple-300 text-sm font-medium">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content Column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 pl-0 lg:pl-4"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            About Me
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am a passionate software engineering student and freelance developer with a knack for building efficient, scalable, and visually compelling web applications.
                            </p>
                            <p>
                                My journey in tech is driven by curiosity and a commitment to excellence. Whether I'm designing a new UI or optimizing backend logic, I always strive for the perfect balance between form and function.
                            </p>
                        </div>
                    </div>

                    {/* Multi-Layered 3D Info Cards */}
                    <div className="grid sm:grid-cols-2 gap-5">
                        {[
                            {
                                icon: MapPin,
                                label: "Location",
                                value: ABOUT_DATA.location,
                                gradient: "from-purple-600 to-pink-600",
                                border: "group-hover:border-purple-500/50",
                                iconColor: "text-purple-400"
                            },
                            {
                                icon: Calendar,
                                label: "Experience",
                                value: "2+ Years",
                                gradient: "from-cyan-500 to-blue-500",
                                border: "group-hover:border-cyan-500/50",
                                iconColor: "text-cyan-400"
                            },
                            {
                                icon: Mail,
                                label: "Email",
                                value: "Available",
                                gradient: "from-emerald-500 to-teal-500",
                                border: "group-hover:border-emerald-500/50",
                                iconColor: "text-emerald-400"
                            },
                            {
                                icon: Globe,
                                label: "Freelance",
                                value: "Available",
                                gradient: "from-blue-600 to-indigo-600",
                                border: "group-hover:border-blue-500/50",
                                iconColor: "text-blue-400"
                            },
                        ].map((item, index) => (
                            <div key={index} className="group relative">
                                {/* Layer 1: Deep Background Glow (Bottom) */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} opacity-20 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-100 group-hover:rotate-1`} />

                                {/* Layer 2: Offset Border (Middle) */}
                                <div className={`absolute inset-0 rounded-xl border border-white/5 bg-black/40 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1`} />

                                {/* Main Content Card (Top) */}
                                <div className={`relative h-full bg-gradient-to-br from-slate-800 to-slate-950 border-t border-l border-white/20 border-b-4 border-r-4 border-black/30 rounded-xl p-4 flex items-center gap-4 transition-all duration-500 shadow-xl group-hover:-translate-x-1 group-hover:-translate-y-1 ${item.border}`}>

                                    {/* 3D Icon Container */}
                                    <div className="relative h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/10 to-black/30 border-t border-l border-white/10 shadow-[4px_4px_10px_rgba(0,0,0,0.3)]">
                                        <item.icon
                                            className={`h-6 w-6 ${item.iconColor} transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}
                                            style={{ filter: "drop-shadow(0px 3px 0px rgba(0,0,0,0.3)) drop-shadow(0px 5px 10px rgba(0,0,0,0.3))" }}
                                            strokeWidth={2.5}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                                        <p className="text-sm font-bold text-white group-hover:text-white transition-colors">{item.value}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
