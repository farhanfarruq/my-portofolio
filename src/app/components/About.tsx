'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal } from '@/lib/data';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low" id="about">
      <div className="grid grid-cols-12 gap-6">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 24 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
           className="col-span-12 md:col-start-3 md:col-span-8 flex flex-col items-center text-center"
        >
          <h2 className="font-headline italic text-3xl mb-8">The Silent Authority</h2>
          <div className="space-y-8 max-w-2xl">
            {personal.bio.map((paragraph, index) => (
              <p
                key={index}
                className={`font-body leading-relaxed ${
                  index === 0 ? 'text-lg md:text-xl text-on-surface' : 'text-sm md:text-base text-secondary'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
