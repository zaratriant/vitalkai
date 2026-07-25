import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "VitalK.com — AI That Runs Your Growth. So You Can Run Your Business.",
  description:
    "VitalK helps small businesses replace costly human tasks with AI — customer outreach, marketing, email engagement, sales, web development, and more.",
  keywords:
    "AI for small business, AI marketing, AI automation, customer outreach AI, email engagement automation, AI web development, sales automation, small business AI agency",
  openGraph: {
    title: "VitalK.com — AI That Runs Your Growth",
    description:
      "Replace costly human tasks with AI. Customer outreach, marketing, email, sales, web — all automated.",
    type: "website",
    url: "https://vitalkai.com",
    siteName: "VitalK",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitalK.com — AI That Runs Your Growth",
    description:
      "Replace costly human tasks with AI. Customer outreach, marketing, email, sales, web — all automated.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-[#060608] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}