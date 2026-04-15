"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/lib/data";
import { GlitchText } from "@/app/components/ui/GlitchText";
import { GlitchImage } from "@/app/components/ui/GlitchImage";

// Full bio text joined from all paragraphs
const BIO_PARAGRAPHS = personal.bio;

// READ_DELAY: how long to pause after finishing typing before restarting (ms)
const READ_DELAY = 3000;
// TYPING_SPEED: ms per character
const TYPING_SPEED = 22;

function TerminalBio() {
  const [paraIndex, setParaIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "reading" | "erasing">("typing");
  const [displayedTexts, setDisplayedTexts] = useState<string[]>(
    BIO_PARAGRAPHS.map(() => "")
  );

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      const currentPara = BIO_PARAGRAPHS[paraIndex];
      if (charIndex < currentPara.length) {
        timeout = setTimeout(() => {
          setDisplayedTexts((prev) => {
            const next = [...prev];
            next[paraIndex] = currentPara.slice(0, charIndex + 1);
            return next;
          });
          setCharIndex((c) => c + 1);
        }, TYPING_SPEED);
      } else {
        // Finished current paragraph
        if (paraIndex < BIO_PARAGRAPHS.length - 1) {
          // Move to next paragraph
          timeout = setTimeout(() => {
            setParaIndex((p) => p + 1);
            setCharIndex(0);
          }, 400);
        } else {
          // All paragraphs typed — enter reading phase
          timeout = setTimeout(() => setPhase("reading"), READ_DELAY);
        }
      }
    } else if (phase === "reading") {
      // After reading pause, start erasing from last paragraph back
      setPhase("erasing");
    } else if (phase === "erasing") {
      const currentPara = displayedTexts[paraIndex];
      if (currentPara.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedTexts((prev) => {
            const next = [...prev];
            next[paraIndex] = next[paraIndex].slice(0, -1);
            return next;
          });
        }, 8);
      } else if (paraIndex > 0) {
        // Move to previous paragraph
        timeout = setTimeout(() => {
          setParaIndex((p) => p - 1);
        }, 100);
      } else {
        // All erased — restart
        timeout = setTimeout(() => {
          setDisplayedTexts(BIO_PARAGRAPHS.map(() => ""));
          setParaIndex(0);
          setCharIndex(0);
          setPhase("typing");
        }, 400);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, paraIndex, charIndex, displayedTexts]);

  return (
    <div className="h-[200px] overflow-hidden relative">
      <div className="space-y-6 font-mono text-xs md:text-sm leading-relaxed">
        {BIO_PARAGRAPHS.map((_, index) => (
          <div key={index} className="flex gap-4">
            <span className="text-primary/40 select-none mt-1 shrink-0">{`0${index + 1}`}</span>
            <p className={index === 0 ? "text-tertiary/90" : "text-text-muted"}>
              {displayedTexts[index]}
              {/* Blinking cursor only on currently active paragraph */}
              {((phase === "typing" && index === paraIndex) ||
                (phase === "erasing" && index === paraIndex)) && (
                <span className="inline-block w-[2px] h-[1em] bg-primary/80 animate-pulse ml-0.5 align-middle" />
              )}
            </p>
          </div>
        ))}
      </div>
      {/* Fade gradient at bottom to mask overflow smoothly */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-surface-lowest/80 to-transparent pointer-events-none" />
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="border-t border-primary/20 relative z-10"
      id="about"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <h2 className="font-display text-2xl md:text-3xl text-tertiary mb-10 tracking-[0.2em] uppercase font-light">
          <GlitchText text="User Identity" />
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col h-full">
            <div className="bg-surface-lowest/60 border border-primary/10 p-8 md:p-12 border-glow relative overflow-hidden h-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="relative z-10 h-full flex flex-col"
              >
                {/* Terminal title bar */}
                <div className="flex items-center gap-1.5 mb-8 border-b border-primary/10 pb-4 shrink-0">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-tertiary/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-tertiary/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-tertiary/20" />
                  </div>
                  <span className="ml-2 text-[8px] tracking-[0.3em] text-tertiary/30 uppercase font-tech">
                    Bio.sys
                  </span>
                </div>

                {/* Prompt line */}
                <div className="flex items-center gap-2 mb-4 font-mono text-[11px] shrink-0">
                  <span className="text-primary/60">❯</span>
                  <span className="text-tertiary/60">cat profile.txt</span>
                </div>

                {/* Typing animation */}
                {isInView && <TerminalBio />}

                <div className="mt-auto pt-8 border-t border-primary/10 grid grid-cols-2 gap-8 font-mono text-xs md:text-sm shrink-0">
                  <div>
                    <div className="font-tech text-[10px] tracking-[0.4em] text-tertiary/30 uppercase mb-2">
                      Location
                    </div>
                    <div className="text-primary/80">{personal.location}</div>
                  </div>
                  <div>
                    <div className="font-tech text-[10px] tracking-[0.4em] text-tertiary/30 uppercase mb-2">
                      Status
                    </div>
                    <div className="text-secondary/80 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      Available
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-surface-lowest/40 to-transparent z-0" />
            </div>
          </div>

          {/* Photo — aligned perfectly with the terminal box height on desktop */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full h-full min-h-[300px] overflow-hidden border border-primary/20">
              <GlitchImage
                src="/images/avatar.jpg"
                alt={personal.name}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
