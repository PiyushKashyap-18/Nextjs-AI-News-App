import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";

const geistSans2 = Sora({
  variable: "--font-geist-sans-2",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "QuickSwipe - AI Summarized News in Reels Style",
  description:
    "Swipe through AI-generated news summaries in 60–70 words. Stay informed quickly with QuickSwipe — your reels-style news app.",
  keywords: [
    "AI news",
    "news app",
    "news reels",
    "quick news",
    "news summaries",
    "QuickSwipe",
    "latest news",
    "daily headlines",
  ],
  openGraph: {
    title: "QuickSwipe - AI Summarized News in Reels Style",
    description:
      "Swipe through AI-generated news summaries in 60–70 words. Stay informed quickly with QuickSwipe.",
    url: "https://quickswipe.vercel.app",
    siteName: "QuickSwipe",
    images: [
      {
        url: "/public/quickswipe.png",
        width: 1200,
        height: 630,
        alt: "QuickSwipe - AI Summarized News",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickSwipe - AI Summarized News in Reels Style",
    description:
      "Swipe through AI-generated news summaries in 60–70 words. Stay informed quickly with QuickSwipe.",
    images: ["/public/quickswipe.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={` ${geistSans2.variable} antialiased`}>
        {children}
        <Toaster position="top-center" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
