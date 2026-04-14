'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { personal } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:shadow-none">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 md:py-6 w-full">
        <Link href="#" className="text-xl font-bold tracking-tighter text-[#111111] dark:text-[#F9F9F9] uppercase">
          {personal.handle}
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          <Link href="#about" className="font-headline uppercase tracking-[0.2em] text-xs font-medium text-[#111111] dark:text-[#F9F9F9] opacity-60 hover:opacity-100 transition-opacity duration-300">About</Link>
          <Link href="#skills" className="font-headline uppercase tracking-[0.2em] text-xs font-medium text-[#111111] dark:text-[#F9F9F9] opacity-60 hover:opacity-100 transition-opacity duration-300">Skills</Link>
          <Link href="#experience" className="font-headline uppercase tracking-[0.2em] text-xs font-medium text-[#111111] dark:text-[#F9F9F9] opacity-60 hover:opacity-100 transition-opacity duration-300">Experience</Link>
          <Link href="#projects" className="font-headline uppercase tracking-[0.2em] text-xs font-medium text-[#111111] dark:text-[#F9F9F9] opacity-60 hover:opacity-100 transition-opacity duration-300">Work</Link>
          <Link href="#contact">
            <button className="bg-primary text-surface px-6 py-2 text-xs font-headline uppercase tracking-[0.2em] scale-95 transition-transform duration-200 hover:scale-100 cursor-pointer">
              Connect
            </button>
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-[#111111] border-b border-surface-variant flex flex-col"
          >
            <Link href="#about" onClick={() => setMobileOpen(false)} className="px-12 py-4 font-headline uppercase tracking-[0.2em] text-xs font-medium text-[#111111] dark:text-[#F9F9F9] border-t border-surface-variant/50 block">About</Link>
            <Link href="#skills" onClick={() => setMobileOpen(false)} className="px-12 py-4 font-headline uppercase tracking-[0.2em] text-xs font-medium text-[#111111] dark:text-[#F9F9F9] border-t border-surface-variant/50 block">Skills</Link>
            <Link href="#experience" onClick={() => setMobileOpen(false)} className="px-12 py-4 font-headline uppercase tracking-[0.2em] text-xs font-medium text-[#111111] dark:text-[#F9F9F9] border-t border-surface-variant/50 block">Experience</Link>
            <Link href="#projects" onClick={() => setMobileOpen(false)} className="px-12 py-4 font-headline uppercase tracking-[0.2em] text-xs font-medium text-[#111111] dark:text-[#F9F9F9] border-t border-surface-variant/50 block">Work</Link>
            <Link href="#contact" onClick={() => setMobileOpen(false)} className="px-12 py-4 font-headline uppercase tracking-[0.2em] text-xs font-medium text-primary border-t border-surface-variant/50 block">Connect</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}