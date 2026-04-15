"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";
import { GlitchText } from "@/app/components/ui/GlitchText";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="border-t border-primary/20 relative z-10 bg-surface-lowest/50"
      ref={ref}
    >
      <div className="px-8 md:px-16 py-10 border-b border-primary/20 flex justify-between items-center bg-surface/10">
        <h2 className="font-display text-2xl text-tertiary tracking-[0.2em] uppercase">
          <GlitchText text="Experience" isBold />
        </h2>
        <span className="font-tech text-[10px] tracking-[0.4em] text-tertiary/30 uppercase hidden md:inline-block">
          // Work_Log
        </span>
      </div>

      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 border-b border-primary/20 last:border-b-0 group"
          >
            {/* Left Column: Metadata */}
            <div className="lg:col-span-4 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-primary/20 bg-surface/20 group-hover:bg-primary/5 transition-colors relative overflow-hidden">
              <div className="relative z-10">
                <div className="font-tech text-[10px] tracking-[0.3em] text-primary/60 uppercase mb-4">
                  {exp.period}
                </div>
                <h3 className="font-display text-xl text-tertiary tracking-[0.1em] uppercase mb-2 group-hover:text-primary transition-colors">
                  <GlitchText text={exp.position} isBold={false} subtle />
                </h3>
                <div className="font-mono text-[12px] text-secondary/80">
                  @ {exp.company}
                </div>
                <div className="mt-8 inline-block border border-primary/20 px-3 py-1.5 font-tech text-[9px] tracking-[0.2em] text-tertiary/40 uppercase bg-surface-lowest/50 backdrop-blur-sm">
                  {exp.location}
                </div>
              </div>

              {/* Subtle noise effect on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity bg-[url('/noise.svg')] mix-blend-overlay" />
            </div>

            {/* Right Column: Description */}
            <div className="lg:col-span-8 p-8 md:p-12 bg-surface-lowest/20 group-hover:bg-surface-lowest/40 transition-colors flex flex-col justify-center relative overflow-hidden">
              <div className="space-y-4 font-mono text-[12px] md:text-[13px] leading-relaxed relative z-10">
                {exp.description.map((item, j) => (
                  <div key={j} className="flex gap-4 items-start">
                    <span className="text-primary/40 mt-0.5 select-none">{`>`}</span>
                    <p className="text-text-muted group-hover:text-tertiary/80 transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Terminal scanline decoration */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/10 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-linear" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
