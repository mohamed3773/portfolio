"use client";

import React from "react";
import {
    Atom,
    Database,
    Terminal,
    Code2,
    Cpu,
    Globe,
    Server,
    LayoutTemplate,
    GitBranch,
    Box
} from "lucide-react";

// Simplified Icon wrapper - No Shadows, No Border, just clean content
function TechIcon({
    children,
    label,
    color,
    className,
    style
}: {
    children: React.ReactNode;
    label?: string;
    color: string;
    className?: string;
    style?: React.CSSProperties;
}) {
    return (
        <div
            className={`absolute flex flex-col items-center justify-center p-2 rounded-xl bg-transparent ${className}`}
            style={style}
        >
            <div className="flex items-center gap-2">
                <span style={{ color: color }}>{children}</span>
                {label && <span className="text-[10px] font-bold text-muted-foreground/60 font-mono tracking-wider uppercase">{label}</span>}
            </div>
        </div>
    );
}

// Simplified Badge - Flat color, no shadow
function MiniBadge({ text, color, style, className }: { text: string; color: string; style?: React.CSSProperties; className?: string }) {
    return (
        <div
            className={`absolute flex items-center justify-center font-bold font-mono tracking-tighter text-sm rounded-md ${className}`}
            style={{
                ...style,
                backgroundColor: color,
                color: '#000',
                width: '36px',
                height: '36px',
            }}
        >
            {text}
        </div>
    );
}

// Subtle Syntax text - No shadow
function SyntaxText({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
    return (
        <div
            className={`absolute font-mono font-bold select-none text-muted-foreground/20 ${className}`}
            style={style}
        >
            {text}
        </div>
    );
}

export function ShapeCluster() {
    return (
        <div className="w-full h-full overflow-hidden pointer-events-none relative">

            {/* 
               DISTRIBUTION STRATEGY:
               - Strictly adhere to outer edges (0-15% and 85-100% horizontal).
               - Leave center 70% completely empty.
               - Vertical spread avoids the absolute vertical center where headers usually are.
            */}

            {/* --- TOP LEFT SECTOR --- */}
            <MiniBadge
                text="JS"
                color="#F7DF1E"
                className="top-[10%] left-[5%] rotate-[-6deg]"
            />
            <TechIcon
                color="#a855f7"
                label="Server"
                className="hidden md:flex top-[25%] left-[8%]"
            >
                <Server size={22} />
            </TechIcon>
            <SyntaxText text="const" className="hidden md:block top-[18%] left-[12%] text-sm rotate-[-3deg]" />


            {/* --- MIDDLE LEFT SECTOR (Edge Only) --- */}
            <TechIcon
                color="#3b82f6"
                className="top-[45%] left-[3%] opacity-60"
            >
                <Database size={20} />
            </TechIcon>
            <SyntaxText text="{" className="hidden md:block top-[40%] left-[8%] text-5xl opacity-10" />
            <SyntaxText text="async" className="hidden md:block top-[52%] left-[6%] text-xs text-emerald-500/20" />


            {/* --- BOTTOM LEFT SECTOR --- */}
            <TechIcon
                color="#f97316"
                label="Git"
                className="top-[75%] left-[6%] rotate-[5deg]"
            >
                <GitBranch size={22} />
            </TechIcon>
            <TechIcon
                color="#10b981"
                className="hidden md:flex top-[85%] left-[12%] opacity-60"
            >
                <Terminal size={18} />
            </TechIcon>
            <SyntaxText text="Wait..." className="hidden md:block top-[80%] left-[2%] text-[10px] opacity-20" />


            {/* --- TOP RIGHT SECTOR --- */}
            <MiniBadge
                text="TS"
                color="#3178C6"
                style={{ color: 'white' }}
                className="top-[12%] right-[6%] rotate-[12deg]"
            />
            <TechIcon
                color="#06b6d4"
                label="UI"
                className="hidden md:flex top-[22%] right-[10%]"
            >
                <LayoutTemplate size={20} />
            </TechIcon>
            <SyntaxText text="=>" className="hidden md:block top-[16%] right-[15%] text-xl opactiy-20" />


            {/* --- MIDDLE RIGHT SECTOR (Edge Only) --- */}
            <TechIcon
                color="#61DAFB"
                className="top-[48%] right-[4%] opacity-80"
            >
                <Atom size={26} />
            </TechIcon>
            <SyntaxText text="}" className="hidden md:block top-[42%] right-[10%] text-5xl opacity-10" />
            <SyntaxText text="await" className="hidden md:block top-[55%] right-[8%] text-xs text-purple-500/20" />


            {/* --- BOTTOM RIGHT SECTOR --- */}
            <TechIcon
                color="#8b5cf6"
                label="Next"
                className="hidden md:flex top-[70%] right-[8%] rotate-[-5deg]"
            >
                <Box size={22} />
            </TechIcon>
            <TechIcon
                color="#ec4899"
                className="top-[82%] right-[5%] opacity-60"
            >
                <Code2 size={20} />
            </TechIcon>
            <SyntaxText text="</>" className="hidden md:block top-[88%] right-[12%] text-lg opacity-10" />

            {/* Micro decorative elements for texture - very faint */}
            <div className="absolute top-[8%] right-[30%] text-foreground/5 text-xs hidden md:block">export</div>
            <div className="absolute bottom-[10%] left-[30%] text-foreground/5 text-xs hidden md:block">return</div>

        </div>
    );
}
