import Footer from "@/components/ui/Footer";
import { Navigation } from "@/components/ui/Navbar";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import CookieConsentLoader from "@/components/CookieConsentLoader";
import { siteConfig } from "./siteConfig";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  // Homepage title & global template for all other pages
  title: {
    default: "Fluxberry AI — Hire Top Talent in 48 Hours",
    template: "%s - Fluxberry AI",
  },
  description:
    "Fluxberry AI is an end-to-end AI Hiring OS that helps startups and growing teams source, screen, interview, and onboard talent faster than ever before.",
  keywords: [
    "Hiring",
    "Recruiting",
    "AI Sourcing",
    "ATS",
    "HR Tech",
    "Automation",
    "Talent Acquisition",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Fluxberry AI — Hire Top Talent in 48 Hours",
    description: siteConfig.description,
    siteName: "Fluxberry AI",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fluxberry AI — Hire Top Talent in 48 Hours",
    description: siteConfig.description,
    images: "/twitter-image.png",
  },

  // Canonical for the homepage (resolved against metadataBase)
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen overflow-x-hidden antialiased bg-background text-foreground selection:bg-gray-100 dark:selection:bg-gray-900 selection:text-black dark:selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative mx-auto w-full max-w-[1440px]">
            <Navigation />
          </div>
          {children}
          <Footer />
          <CookieConsentLoader />
        </ThemeProvider>
      </body>
    </html>
  );
}
