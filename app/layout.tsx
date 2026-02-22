import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "https://mohamedtech.me";
const BRAND_NAME = "Mohamed";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // Use a dedicated OG image (recommended)

export const metadata: Metadata = {
  title: "Mohamed | Full Stack Developer & Scalable Web Architect",
  description:
    "Full Stack Developer building scalable, high-performance web applications with Next.js, TypeScript, and modern cloud architecture.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web3",
    "Frontend Engineer",
    "Software Engineer",
    "Mohamed",
    "Scalable Architecture",
  ],
  authors: [{ name: "Mohamed" }],

  // Required for absolute URLs in Open Graph and Twitter metadata
  metadataBase: new URL(SITE_URL),

  // Browser favicon (place favicon.ico inside /public)
  icons: {
    icon: "/favicon.ico",
  },

  // Open Graph configuration for social media previews
  openGraph: {
    title: "Mohamed | Full Stack Developer & Scalable Web Architect",
    description:
      "Full Stack Developer building scalable, high-performance web applications with Next.js, TypeScript, and modern cloud architecture.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Mohamed - Full Stack Developer",
      },
    ],
  },

  // Twitter Card configuration
  twitter: {
    card: "summary_large_image",
    title: "Mohamed | Full Stack Developer & Scalable Web Architect",
    description:
      "Full Stack Developer building scalable, high-performance web applications with Next.js, TypeScript, and modern cloud architecture.",
    images: [OG_IMAGE],
  },
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for search engines (identity + logo recognition)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamed",
    jobTitle: "Full Stack Developer",
    url: SITE_URL,
    image: `${SITE_URL}/profile.png`,
    logo: `${SITE_URL}/profile.png`,
    sameAs: [
      "https://github.com/mohamed3773",
      // Add your LinkedIn when ready:
      // "https://www.linkedin.com/in/YOUR_USERNAME/"
    ],
  };

  return (
    <html
      lang="en"
      className="scroll-smooth dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`${inter.variable} ${firaCode.variable} font-sans bg-background text-foreground min-h-screen selection:bg-primary selection:text-white`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="theme-dark-only">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
