'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './ui/SectionHeading';
import { personal } from '@/lib/data';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading index="01." title="About Me" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start"
        >
          {/* Text — takes 3 cols */}
          <div className="md:col-span-3 space-y-4">
            {personal.bio.map((paragraph, i) => (
              <p key={i} className="text-zinc-400 leading-relaxed text-base">
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <p className="text-zinc-500 text-sm mb-3 font-[var(--font-geist-mono)] tracking-wide">
                Technologies I work with
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {personal.techStack.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className="text-zinc-600 font-[var(--font-geist-mono)]">—</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image — takes 2 cols */}
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="group relative w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-colors duration-300">
              <Image
                src="/images/avatar.jpg"
                alt={personal.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-all duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
