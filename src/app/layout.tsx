import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ['normal', 'italic'],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://farhanfarruq.dev"),
  title: {
    default: "Farhan Farruq — Full-Stack Web Developer",
    template: "%s | Farhan Farruq",
  },
  description:
    "Full-stack web developer based in Yogyakarta, Indonesia. Specializing in React, Next.js, and Laravel. Building clean, performant web applications.",
  keywords: [
    "Farhan Farruq",
    "web developer",
    "full-stack",
    "React",
    "Next.js",
    "Laravel",
    "Yogyakarta",
  ],
  authors: [{ name: "Farhan Farruq" }],
  creator: "Farhan Farruq",

  verification: {
    google: "23wCMmpYN6Q-hyRyzDo0-F3wlo8U3PiNQ2ENw0VNeEY",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farhanfarruq.dev",
    siteName: "Farhan Farruq",
    title: "Farhan Farruq — Full-Stack Web Developer",
    description:
      "Full-stack web developer based in Yogyakarta, Indonesia. Specializing in React, Next.js, and Laravel.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Farruq — Full-Stack Web Developer",
    description:
      "Full-stack web developer based in Yogyakarta, Indonesia.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        `}</style>
      </head>
      <body
        className={`${inter.variable} ${newsreader.variable} bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
