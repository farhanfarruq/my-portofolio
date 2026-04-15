'use client';

import { motion } from 'framer-motion';
import { personal } from '@/lib/data';
import { GlitchText } from '@/app/components/ui/GlitchText';

export default function Hero() {
  const [firstName, ...lastNames] = personal.name.split(' ');
  const lastName = lastNames.join(' ');

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 md:py-32 relative z-10 pt-32">
      <div className="text-center max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-tech text-[10px] tracking-[0.5em] text-tertiary/40 mb-8 uppercase"
        >
          {personal.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-6xl text-tertiary mb-10 leading-[0.85] uppercase font-light"
        >
          <GlitchText text={firstName} subtle /><br />
          {lastName && <GlitchText text={lastName} subtle />}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-muted max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-16 font-light"
        >
          {personal.bio[0]}
        </motion.p>

        {/* Commands */}
        <div className="space-y-10 text-left max-w-md mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex justify-between items-center mb-3">
              <span className="font-tech text-[10px] tracking-[0.4em] text-tertiary/30 uppercase">1. Role</span>
              <span className="font-tech text-[9px] tracking-[0.3em] text-tertiary/20 uppercase cursor-pointer hover:text-primary transition-colors">Current</span>
            </div>
            <div className="bg-surface-lowest/80 border border-primary/20 p-4 font-mono text-xs text-primary/90 shadow-inner">
              {personal.role}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <div className="flex justify-between items-center mb-3">
              <span className="font-tech text-[10px] tracking-[0.4em] text-tertiary/30 uppercase">2. Contact</span>
              <a href={personal.social.email} className="font-tech text-[9px] tracking-[0.3em] text-tertiary/20 uppercase cursor-pointer hover:text-primary transition-colors">Email</a>
            </div>
            <div className="bg-surface-lowest/80 border border-primary/20 p-4 font-mono text-xs text-primary/90 shadow-inner">
              {personal.email}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
