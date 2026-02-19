import React from "react";

export const SiteLogo = ({ className, textClassName }: { className?: string; textClassName?: string }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* 3D Cube Icon (SVG) */}
            <div className="relative w-10 h-10 drop-shadow-md">
                <svg
                    viewBox="0 0 100 115"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    {/* Top Face - Lightest Blue */}
                    <path
                        d="M50 0 L93.3 25 L50 50 L6.7 25 L50 0Z"
                        fill="#60a5fa" // blue-400
                    />
                    {/* Right Face - Dark Blue */}
                    <path
                        d="M50 50 L93.3 25 V75 L50 100 V50Z"
                        fill="#1e3a8a" // blue-900
                    />
                    {/* Left Face - Medium Blue */}
                    <path
                        d="M50 50 V100 L6.7 75 V25 L50 50Z"
                        fill="#2563eb" // blue-600
                    />

                    {/* Stylized Cuts/Highlight to mimic the 'G/S' interlocking look if needed, 
              but a pure cube is often cleaner. Let's add a subtle inner stroke or cut for detail */}
                    <path
                        d="M50 50 L50 0 M50 50 L93.3 25 M50 50 L6.7 25"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                    />
                </svg>
            </div>

            {/* Text Block - Replicating the "Full Stack Developer" typography style */}
            <div className={`flex flex-col justify-center ${textClassName}`}>
                <span className="font-black text-lg leading-none tracking-wider text-foreground uppercase font-sans">
                    Mohamed
                </span>
                <span className="text-[0.65rem] font-bold text-muted-foreground tracking-[0.2em] uppercase leading-tight">
                    Full Stack Dev
                </span>
            </div>
        </div>
    );
};
