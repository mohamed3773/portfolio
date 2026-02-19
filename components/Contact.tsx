"use client";

import { motion } from "framer-motion";
import { Mail, Twitter, Instagram, Youtube, ExternalLink } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import Link from "next/link";
import { SOCIAL_LINKS, CONTACT_EMAIL } from "@/lib/constants";

// Custom TikTok Icon
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

// Custom X (Twitter) Icon
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

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
);

export function Contact() {
    return (
        <SectionWrapper id="contact">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Let's build something <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">great</span></h2>
                        <p className="text-lg text-muted-foreground">
                            Have a project in mind or looking to hire? Drop me a message and I usually respond within an hour.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-xl bg-zinc-900 border-2 border-zinc-800 border-b-4 border-r-4 border-black text-purple-400 active:border-b-2 active:border-r-2 active:translate-y-1 transition-all">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Email</p>
                                <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg font-semibold text-white hover:text-purple-400 transition-colors">
                                    {CONTACT_EMAIL}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-zinc-900 border-t border-l border-white/10 border-b-4 border-r-4 border-black">
                        <h3 className="font-semibold mb-2 text-white">Connect Directly</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Want a faster response? Reach me on:
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <Link
                                href="https://wa.me/905067565708"
                                target="_blank"
                                className="group relative overflow-hidden p-3 rounded-xl bg-zinc-900 border-2 border-zinc-800 border-b-4 border-r-4 border-black hover:border-b-[#25D366] hover:border-r-[#25D366] hover:-translate-y-1 active:translate-y-0 active:border-b-2 active:border-r-2 transition-all duration-200"
                            >
                                <div className="relative flex items-center gap-3 justify-center">
                                    <div className="p-2 rounded-lg bg-[#25D366] text-white group-hover:scale-110 transition-transform duration-300">
                                        <WhatsAppIcon className="h-4 w-4" />
                                    </div>
                                    <span className="font-bold text-gray-200 text-sm group-hover:text-white transition-colors">WhatsApp</span>
                                </div>
                            </Link>

                            <Link
                                href="https://t.me/+905067565708"
                                target="_blank"
                                className="group relative overflow-hidden p-3 rounded-xl bg-zinc-900 border-2 border-zinc-800 border-b-4 border-r-4 border-black hover:border-b-[#0088cc] hover:border-r-[#0088cc] hover:-translate-y-1 active:translate-y-0 active:border-b-2 active:border-r-2 transition-all duration-200"
                            >
                                <div className="relative flex items-center gap-3 justify-center">
                                    <div className="p-2 rounded-lg bg-[#0088cc] text-white group-hover:scale-110 transition-transform duration-300">
                                        <TelegramIcon className="h-4 w-4" />
                                    </div>
                                    <span className="font-bold text-gray-200 text-sm group-hover:text-white transition-colors">Telegram</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Social Media Links */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <div className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border-t border-l border-white/10 border-b-4 border-r-4 border-black space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* LinkedIn */}
                            <Link
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                className="group relative overflow-hidden p-4 rounded-xl bg-zinc-900 border-2 border-zinc-800 border-b-4 border-r-4 border-black hover:border-b-blue-600 hover:border-r-blue-600 hover:-translate-y-1 active:translate-y-0 active:border-b-2 active:border-r-2 transition-all duration-200"
                            >
                                <div className="relative flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-[#0077b5] text-white group-hover:scale-110 transition-transform duration-300">
                                        <LinkedInIcon className="h-5 w-5 fill-current" />
                                    </div>
                                    <span className="font-bold text-gray-200 group-hover:text-white transition-colors">LinkedIn</span>
                                    <ExternalLink className="h-4 w-4 ml-auto text-zinc-500 group-hover:text-white" />
                                </div>
                            </Link>

                            {/* X (Twitter) */}
                            <Link
                                href={SOCIAL_LINKS.twitter}
                                target="_blank"
                                className="group relative overflow-hidden p-4 rounded-xl bg-zinc-900 border-2 border-zinc-800 border-b-4 border-r-4 border-black hover:border-b-zinc-400 hover:border-r-zinc-400 hover:-translate-y-1 active:translate-y-0 active:border-b-2 active:border-r-2 transition-all duration-200"
                            >
                                <div className="relative flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-black text-white group-hover:scale-110 transition-transform duration-300">
                                        <XIcon className="h-5 w-5 fill-current" />
                                    </div>
                                    <span className="font-bold text-gray-200 group-hover:text-white transition-colors">X</span>
                                    <ExternalLink className="h-4 w-4 ml-auto text-zinc-500 group-hover:text-white" />
                                </div>
                            </Link>

                            {/* Instagram */}
                            <Link
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                className="group relative overflow-hidden p-4 rounded-xl bg-zinc-900 border-2 border-zinc-800 border-b-4 border-r-4 border-black hover:border-b-pink-500 hover:border-r-pink-500 hover:-translate-y-1 active:translate-y-0 active:border-b-2 active:border-r-2 transition-all duration-200"
                            >
                                <div className="relative flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white group-hover:scale-110 transition-transform duration-300">
                                        <Instagram className="h-5 w-5" />
                                    </div>
                                    <span className="font-bold text-gray-200 group-hover:text-white transition-colors">Instagram</span>
                                    <ExternalLink className="h-4 w-4 ml-auto text-zinc-500 group-hover:text-white" />
                                </div>
                            </Link>

                            {/* TikTok */}
                            <Link
                                href={SOCIAL_LINKS.tiktok}
                                target="_blank"
                                className="group relative overflow-hidden p-4 rounded-xl bg-zinc-900 border-2 border-zinc-800 border-b-4 border-r-4 border-black hover:border-b-cyan-400 hover:border-r-cyan-400 hover:-translate-y-1 active:translate-y-0 active:border-b-2 active:border-r-2 transition-all duration-200"
                            >
                                <div className="relative flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-black border border-white/20 text-white group-hover:scale-110 transition-transform duration-300">
                                        <TikTokIcon className="h-5 w-5 drop-shadow-[1px_1px_0px_rgba(255,0,0,1)] drop-shadow-[-1px_-1px_0px_rgba(0,255,255,1)]" />
                                    </div>
                                    <span className="font-bold text-gray-200 group-hover:text-white transition-colors">TikTok</span>
                                    <ExternalLink className="h-4 w-4 ml-auto text-zinc-500 group-hover:text-white" />
                                </div>
                            </Link>

                            {/* YouTube */}
                            <Link
                                href={SOCIAL_LINKS.youtube}
                                target="_blank"
                                className="group relative overflow-hidden p-4 rounded-xl bg-zinc-900 border-2 border-zinc-800 border-b-4 border-r-4 border-black hover:border-b-red-600 hover:border-r-red-600 hover:-translate-y-1 active:translate-y-0 active:border-b-2 active:border-r-2 transition-all duration-200"
                            >
                                <div className="relative flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-red-600 text-white group-hover:scale-110 transition-transform duration-300">
                                        <Youtube className="h-5 w-5" />
                                    </div>
                                    <span className="font-bold text-gray-200 group-hover:text-white transition-colors">YouTube</span>
                                    <ExternalLink className="h-4 w-4 ml-auto text-zinc-500 group-hover:text-white" />
                                </div>
                            </Link>

                            {/* GitHub */}
                            <Link
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                className="group relative overflow-hidden p-4 rounded-xl bg-zinc-900 border-2 border-zinc-800 border-b-4 border-r-4 border-black hover:border-b-violet-600 hover:border-r-violet-600 hover:-translate-y-1 active:translate-y-0 active:border-b-2 active:border-r-2 transition-all duration-200"
                            >
                                <div className="relative flex items-center gap-4">
                                    <div className="p-3 rounded-lg bg-black border border-white/20 text-white group-hover:scale-110 transition-transform duration-300">
                                        <GitHubIcon className="h-5 w-5 fill-current" />
                                    </div>
                                    <span className="font-bold text-gray-200 group-hover:text-white transition-colors">GitHub</span>
                                    <ExternalLink className="h-4 w-4 ml-auto text-zinc-500 group-hover:text-white" />
                                </div>
                            </Link>

                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
