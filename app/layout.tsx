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
const BRAND_NAME = "Mhamed";
const OG_IMAGE = `${SITE_URL}/profile.png`;

export const metadata: Metadata = {
  title: "Mhamed | Full Stack Developer",
  description:
    "Senior Full Stack Developer specializing in modern web products, Next.js, and scalable architecture.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web3",
    "Frontend Engineer",
    "Mhamed",
  ],
  authors: [{ name: "Mhamed" }],

  // Required for absolute URLs in Open Graph and Twitter metadata
  metadataBase: new URL(SITE_URL),

  // Browser favicon (place favicon.ico inside /public)
  icons: {
    icon: "/favicon.ico",
  },

  // Open Graph configuration for social media previews
  openGraph: {
    title: "Mhamed | Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in modern web products, Next.js, and scalable architecture.",
    url: SITE_URL,
    siteName: BRAND_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BRAND_NAME} - Profile`,
      },
    ],
  },

  // Twitter Card configuration
  twitter: {
    card: "summary_large_image",
    title: "Mhamed | Full Stack Developer",
    description:
      "Senior Full Stack Developer specializing in modern web products, Next.js, and scalable architecture.",
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
    name: BRAND_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/profile.png`,
    logo: `${SITE_URL}/profile.png`,
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
