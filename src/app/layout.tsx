import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
