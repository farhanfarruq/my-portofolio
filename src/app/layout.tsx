import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://farhanfarruq.vercel.app"),
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
    description: "Full-stack web developer based in Yogyakarta, Indonesia.",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        `}</style>
      </head>
      <body
        className="min-h-screen bg-surface text-tertiary font-sans flex flex-col relative selection:bg-primary selection:text-surface antialiased custom-scrollbar"
        suppressHydrationWarning
      >
        {/* Background Statue Image (Duotone Effect) */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
          <div
            className="absolute inset-0 bg-cover bg-center grayscale contrast-150 brightness-50"
            style={{
              backgroundImage:
                "url('https://picsum.photos/seed/hermes-statue-bg/1920/1080')",
            }}
          />
          <div className="absolute inset-0 bg-surface/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col">{children}</div>

        {/* Global Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[url('/noise.svg')]" />
      </body>
    </html>
  );
}
