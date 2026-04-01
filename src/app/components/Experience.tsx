'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { experiences } from '@/lib/data';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="py-24 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading index="03." title="Experience" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="space-y-0 border-l border-zinc-800 ml-2"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative pl-8 pb-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-950 ring-1 ring-zinc-600" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-base font-medium text-zinc-100">
                    {exp.position}
                    <span className="text-zinc-500 ml-2">@ {exp.company}</span>
                  </h3>
                  {exp.location && (
                    <span className="inline-flex items-center gap-1 text-xs text-zinc-600 mt-1">
                      <MapPin size={11} /> {exp.location}
                    </span>
                  )}
                </div>
                <span className="font-[var(--font-geist-mono)] text-xs text-zinc-600 shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <ul className="space-y-2">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                    <span className="text-zinc-700 font-[var(--font-geist-mono)] shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}