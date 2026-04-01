'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { personal } from '@/lib/data';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-zinc-500 text-sm font-[var(--font-geist-mono)]">
              Available for freelance work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-100 leading-[1.05] mb-6"
          >
            {personal.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-xl md:text-2xl text-zinc-400 font-light mb-6 leading-relaxed"
          >
            {personal.role}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-zinc-500 text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            I build clean, performant web applications with modern tools.
            Based in {personal.location}.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <Button href="#projects" variant="primary">
              View Projects <ArrowRight size={16} />
            </Button>
            <Button href={personal.social.github} external variant="ghost">
              <Github size={16} /> GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}