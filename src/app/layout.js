import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Tanishq Joshi - Full Stack Developer & Young Tech Achiever",
  description: "Passionate Full Stack Web Developer specializing in Next.js, AI integration, and cloud solutions. Building innovative applications with modern technologies like OpenAI, AWS, and Azure.",
  keywords: "Full Stack Developer, Young Achiever, Next.js, React, AI Integration, OpenAI, AWS, Azure, DynamoDB, NextAuth",
  authors: [{ name: "Tanishq Joshi" }],
  creator: "Tanishq Joshi",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "Tanishq Joshi - Full Stack Developer & Young Tech Achiever",
    description: "Passionate Full Stack Web Developer specializing in Next.js, AI integration, and modern cloud technologies.",
    url: "https://tanishqjoshi.dev",
    siteName: "Tanishq Joshi Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishq Joshi - Full Stack Developer & Young Tech Achiever",
    description: "Passionate Full Stack Web Developer specializing in Next.js, AI integration, and modern cloud technologies.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
