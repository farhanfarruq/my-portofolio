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
    "full stack web developer yogyakarta",
    "react next.js developer portfolio",
    "laravel full stack developer",
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
    url: "https://farhanfarruq.vercel.app",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://farhanfarruq.vercel.app/#person",
                  name: "Farhan Farruq",
                  jobTitle: "Full-Stack Web Developer",
                  url: "https://farhanfarruq.vercel.app",
                  sameAs: [
                    "https://github.com/farhanfarruq",
                    "https://linkedin.com/in/farhanfarruq"
                  ],
                  description: "Farhan Farruq is a full-stack web developer based in Yogyakarta, specializing in React, Next.js, and Laravel.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Yogyakarta",
                    addressCountry: "ID"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://farhanfarruq.vercel.app/#website",
                  url: "https://farhanfarruq.vercel.app",
                  name: "Farhan Farruq Portfolio",
                  publisher: {
                    "@id": "https://farhanfarruq.vercel.app/#person"
                  }
                }
              ]
            }),
          }}
        />
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
