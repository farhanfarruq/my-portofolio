'use client';

import { motion } from 'framer-motion';
import { personal } from '@/lib/data';
import Image from 'next/image';

export default function Hero() {
  const [firstName, lastName] = personal.name.split(' ');
  return (
    <header className="relative w-full flex flex-col justify-center px-6 md:px-12 pt-32 pb-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="col-span-1 md:col-span-7"
        >
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-extrabold text-on-surface">
            {firstName}<br />{lastName || ''}
          </h1>
          <p className="mt-4 md:mt-8 font-label uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm text-primary font-semibold">
            {personal.role}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="col-span-1 md:col-span-5 flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[200px] sm:max-w-[240px] aspect-[3/4] grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
            <Image
              src="/images/avatar.jpg"
              alt={personal.name}
              fill
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}