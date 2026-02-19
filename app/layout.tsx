import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: "Mhamed | Full Stack Developer",
    description: "Senior Full Stack Developer specializing in modern web products, Next.js, and scalable architecture.",
    keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "Web3", "Frontend Engineer", "Mhamed"],
    authors: [{ name: "Mhamed" }],
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
            <body className={`${inter.variable} ${firaCode.variable} font-sans bg-background text-foreground min-h-screen selection:bg-primary selection:text-white`}>
                <ThemeProvider defaultTheme="dark" storageKey="theme-dark-only">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
