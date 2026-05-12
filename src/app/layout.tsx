import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "VitalK AI | AI-Powered Business Automation",
  description: "Transform your business with intelligent automation. Reclaim 20+ hours per week and scale operations without adding headcount.",
  keywords: "AI automation, business automation, workflow automation, AI consulting, process optimization",
  openGraph: {
    title: "VitalK AI | AI-Powered Business Automation",
    description: "Transform your business with intelligent automation",
    type: "website",
    url: "https://vitalkai.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VitalK AI - AI-Powered Business Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VitalK AI | AI-Powered Business Automation",
    description: "Transform your business with intelligent automation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "REPLACE_WITH_CLARITY_ID");
            `,
          }}
        />
      </head>
      <body className="antialiased bg-[#0a0a0f]">
        {children}
        {/* Google Analytics will be added here after GA ID is configured */}
        {/* <GoogleAnalytics gaId="G-XXXXXXXXXX" /> */}
      </body>
    </html>
  );
}
