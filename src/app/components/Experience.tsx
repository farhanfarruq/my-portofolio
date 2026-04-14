'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '@/lib/data';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-on-surface text-surface" id="experience">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 24 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
           className="flex flex-col gap-12 md:gap-16"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="grid grid-cols-12 gap-6"
            >
              <div className="col-span-12 md:col-span-3">
                <span className="font-headline italic text-lg md:text-xl font-semibold opacity-60">{exp.period}</span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h4 className="font-headline text-2xl md:text-3xl font-bold mb-2">{exp.position}</h4>
                <p className="font-label uppercase tracking-[0.1em] text-[10px] text-primary-container bg-on-primary-container inline-block px-2 py-1 mb-6">
                  {exp.company}
                </p>
                <div className="font-body text-sm md:text-base opacity-80 leading-relaxed space-y-2">
                  {exp.description.map((item, j) => (
                    <p key={j}>{item}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}