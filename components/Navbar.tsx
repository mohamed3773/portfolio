"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

import { SiteLogo } from "@/components/SiteLogo";

const MotionLink = motion(Link);

// Data for Nav Items with unique gradient themes
const navItems = [
    {
        name: "Home",
        href: "/",
        gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    },
    {
        name: "About",
        href: "#about",
        gradient: "from-amber-400 via-orange-500 to-red-500",
    },
    {
        name: "Projects",
        href: "#projects",
        gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    },
    {
        name: "Contact",
        href: "#contact",
        gradient: "from-fuchsia-400 via-purple-500 to-pink-500",
    },
];

const LogoTilt = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["25deg", "-25deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "25deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn("inline-block", className)}
        >
            <motion.div
                style={{ rotateX, rotateY }}
                className="inline-block will-change-transform"
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <header className="fixed top-0 left-0 right-0 z-[9999] flex justify-center py-4 px-4 transition-all duration-300 transform-gpu">
            <nav
                className={cn(
                    "relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 w-full max-w-6xl mx-auto overflow-visible",
                    isScrolled || isMobileMenuOpen
                        ? "bg-background/80 backdrop-blur-2xl border border-white/10 dark:border-white/5 shadow-none"
                        : "bg-transparent border border-transparent"
                )}
            >
                {/* Logo - Now with 3D Tilt Animation */}
                <div className="z-50">
                    <LogoTilt>
                        <Link href="/" className="group block hover:opacity-90 transition-opacity">
                            <SiteLogo />
                        </Link>
                    </LogoTilt>
                </div>

                {/* Desktop Menu - Animation enhanced with Framer Motion */}
                <div className="relative hidden md:!flex items-center gap-2 z-50">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group relative px-6 py-2.5 rounded-xl text-sm font-semibold", // Removed overflow-hidden from here
                                "text-foreground/80 hover:text-foreground",
                                "hover:-translate-y-1 hover:scale-[1.02] active:scale-95 transition-all duration-200 ease-out",
                                "transform-gpu"
                            )}
                        >
                            {/* Background Container - Handles Overflow Clipping */}
                            <span className="absolute inset-0 rounded-xl overflow-hidden z-0">
                                {/* 1. Base Background */}
                                <span className="absolute inset-0 bg-secondary/0 transition-colors duration-300 group-hover:bg-transparent" />

                                {/* 2. Gradient SLIDE UP Effect */}
                                <span className={cn(
                                    "absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out",
                                    "bg-gradient-to-r opacity-90",
                                    item.gradient
                                )} />

                                {/* 3. Bottom Border 'Lip' */}
                                <span className={cn(
                                    "absolute bottom-0 left-0 right-0 h-[3px] bg-foreground/10 transition-colors duration-300",
                                    "group-hover:h-full group-hover:opacity-0"
                                )} />
                            </span>

                            {/* 4. Text Content - Strictly outside the overflow container's clipping context regarding z-index, but physically inside Link */}
                            <span className="relative z-20 flex items-center gap-2">
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* CTA & Theme - Special 'Cosmic' Button */}
                <div className="relative hidden md:!flex items-center gap-4 z-50">


                    <Link
                        href="#contact"
                        className="group relative inline-flex items-center justify-center p-[2px] rounded-xl bg-transparent hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-200 ease-out transform-gpu"
                    >
                        {/* Background Container for Clipping */}
                        <span className="absolute inset-0 rounded-xl overflow-hidden z-0">
                            {/* Animated Gradient Border */}
                            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </span>

                        {/* Button Content */}
                        <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-background px-6 py-2.5 text-sm font-bold text-foreground backdrop-blur-3xl transition-all group-hover:bg-background/80 group-hover:text-white">
                            Start Project
                            {/* Inner Gradient Text on Hover */}
                            <span className="absolute inset-0 flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                Start Project
                            </span>
                        </span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-foreground p-2 hover:bg-accent rounded-lg transition-colors z-50"
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[120%] left-0 right-0 p-4 bg-background/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex flex-col gap-2 overflow-hidden"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="group relative w-full py-3 rounded-xl text-base font-semibold overflow-hidden text-foreground hover:text-white transition-colors text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {/* Gradient Slide Up Effect matching Desktop */}
                                <span className={cn(
                                    "absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out",
                                    "bg-gradient-to-r opacity-90",
                                    item.gradient
                                )} />

                                {/* Bottom Border matching Desktop */}
                                <span className={cn(
                                    "absolute bottom-0 left-0 right-0 h-[2px] bg-foreground/10 transition-colors duration-300",
                                    "group-hover:h-full group-hover:opacity-0"
                                )} />

                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </nav>
        </header>
    );
}
