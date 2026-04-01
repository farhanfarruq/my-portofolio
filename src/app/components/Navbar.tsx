'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { personal } from '@/lib/data';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/60'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#"
            className="font-[var(--font-geist-mono)] text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
          >
            {personal.handle}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personal.social.email}
              aria-label="Email"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800"
          >
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-zinc-400 hover:text-zinc-100 py-2.5 text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-5 pt-4 border-t border-zinc-800 mt-2">
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200 transition-colors" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-200 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href={personal.social.email} className="text-zinc-500 hover:text-zinc-200 transition-colors" aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}