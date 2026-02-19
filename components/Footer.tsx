"use client";

import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { SiteLogo } from "@/components/SiteLogo";
import { SOCIAL_LINKS } from "@/lib/constants";

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

const XIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

export function Footer() {
    return (
        <footer className="relative border-t border-border bg-background/40 backdrop-blur-md pt-16 pb-8">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2 space-y-4">
                        <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                            <SiteLogo />
                        </Link>
                        <p className="text-muted-foreground/80 max-w-sm text-sm leading-relaxed mt-4">
                            Building digital experiences that matter. Focused on performance, accessibility, and modern aesthetics.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-4 font-mono tracking-tight">Navigation</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-foreground mb-4 font-mono tracking-tight">Socials</h4>
                        <div className="flex gap-4 flex-wrap">
                            <Link href={SOCIAL_LINKS.linkedin} target="_blank" className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-[#0077b5] transition-all hover:scale-110 flex items-center justify-center">
                                <LinkedInIcon className="h-4 w-4" />
                            </Link>
                            <Link href={SOCIAL_LINKS.twitter} target="_blank" className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all hover:scale-110 flex items-center justify-center">
                                <XIcon className="h-4 w-4" />
                            </Link>
                            <Link href={SOCIAL_LINKS.instagram} target="_blank" className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-pink-500 transition-all hover:scale-110 flex items-center justify-center">
                                <Instagram className="h-4 w-4" />
                            </Link>
                            <Link href={SOCIAL_LINKS.tiktok} target="_blank" className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-cyan-400 transition-all hover:scale-110 flex items-center justify-center">
                                <TikTokIcon className="h-4 w-4" />
                            </Link>
                            <Link href={SOCIAL_LINKS.youtube} target="_blank" className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-red-500 transition-all hover:scale-110 flex items-center justify-center">
                                <Youtube className="h-4 w-4" />
                            </Link>
                            <Link href={SOCIAL_LINKS.github} target="_blank" className="p-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-violet-500 transition-all hover:scale-110 flex items-center justify-center">
                                <GitHubIcon className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
                    <p>© {new Date().getFullYear()} Mohamed.Dev. All rights reserved.</p>
                    <p>Designed & Built with Next.js</p>
                </div>
            </div>
        </footer>
    );
}
