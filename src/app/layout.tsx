import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "VitalK — AI Automation for Small Business",
  description:
    "VitalK replaces costly human tasks with AI — customer outreach, marketing, email engagement, sales campaigns, web development. 24/7 growth without the headcount.",
  keywords:
    "AI for small business, AI marketing, AI automation, customer outreach AI, email engagement automation, AI web development, sales automation",
  openGraph: {
    title: "VitalK — AI Automation for Small Business",
    description: "Replace costly human tasks with AI. 24/7 growth without the headcount.",
    type: "website",
    url: "https://vitalkai.com",
    siteName: "VitalK",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitalK — AI Automation for Small Business",
    description: "Replace costly human tasks with AI. 24/7 growth without the headcount.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} scroll-smooth`}>
      <body className="antialiased bg-[#050507] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}