import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VitalK AI | AI-Powered Business Automation",
  description: "Transform your business with intelligent automation. Reclaim 20+ hours per week and scale operations without adding headcount.",
  keywords: "AI automation, business automation, workflow automation, AI consulting, process optimization",
  openGraph: {
    title: "VitalK AI | AI-Powered Business Automation",
    description: "Transform your business with intelligent automation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
