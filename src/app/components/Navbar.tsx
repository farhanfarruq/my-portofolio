"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/lib/data";
import { GlitchText } from "@/app/components/ui/GlitchText";
import { Sun, Moon } from "lucide-react";

const NavLink = ({
  item,
  href,
  onClick,
}: {
  item: string;
  href: string;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center px-6 lg:px-12 border-r border-primary/20 font-tech text-[10px] lg:text-[12px] tracking-[0.4em] text-tertiary/50 hover:text-primary hover:bg-primary/5 transition-all uppercase h-full"
    >
      <GlitchText text={item} externalHover={isHovered} />
    </Link>
  );
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#projects" },
  ];

  // Try to split the handle if it has spaces to match the two-line format, otherwise display as is
  const handleParts = personal.handle
    ? personal.handle.split(" ")
    : ["PORTFOLIO"];
  const firstPart = handleParts[0];
  const restPart = handleParts.slice(1).join(" ");

  return (
    <header className="fixed top-0 w-full z-50 border-b border-primary/20 flex flex-col items-stretch bg-surface/40 backdrop-blur-md">
      <div className="flex items-stretch h-16 md:h-24 w-full">
        <div className="px-6 md:px-12 flex items-center border-r border-primary/20 w-auto">
          <Link
            href="#"
            className="font-display text-lg md:text-2xl leading-[0.8] flex flex-col text-tertiary uppercase"
          >
            <GlitchText text={firstPart} />
            {restPart && <GlitchText text={restPart} />}
          </Link>
        </div>

        <nav className="hidden lg:flex flex-1 items-stretch">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item.name} href={item.href} />
          ))}
          <div className="flex-1 border-r border-primary/20" />
          <Link
            href="#contact"
            className="flex items-center px-12 border-r border-primary/20 group hover:bg-primary/5 transition-colors cursor-pointer"
          >
            <span className="font-tech text-[11px] tracking-[0.4em] text-primary uppercase group-hover:glow-primary transition-all">
              <GlitchText text="Connect" />
            </span>
          </Link>

          {/* Theme Toggle */}
          <div 
            onClick={toggleTheme}
            className="flex items-center px-10 gap-4 border-r border-primary/20 group hover:bg-primary/5 transition-all cursor-pointer select-none"
          >
            <span className="font-tech text-[10px] tracking-[0.4em] text-tertiary/30 uppercase group-hover:text-primary transition-colors hidden xl:block">
              {theme === 'dark' ? 'Dark' : 'Light'}
            </span>
            <div className="w-10 h-5 bg-tertiary/5 rounded-full relative border border-tertiary/10 transition-colors group-hover:border-primary/40">
              <motion.div 
                animate={{ x: theme === 'dark' ? 0 : 20 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute left-1 top-1 w-3 h-3 bg-tertiary/20 rounded-full flex items-center justify-center group-hover:bg-primary/40 transition-colors"
              >
                {theme === 'dark' ? (
                  <Moon className="w-2 h-2 text-surface" fill="currentColor" />
                ) : (
                  <Sun className="w-2 h-2 text-surface" fill="currentColor" />
                )}
              </motion.div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex-1 flex justify-end items-center pr-6 border-l border-primary/20">
          <button
            className="text-tertiary/50 hover:text-primary transition-colors cursor-pointer p-2 w-10 h-10 flex items-center justify-center border border-primary/20 rounded-sm bg-surface-lowest/50"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-surface-lowest/95 backdrop-blur-md border-t border-primary/20 flex flex-col"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-4 font-tech uppercase tracking-[0.4em] text-[10px] text-tertiary/50 hover:text-primary hover:bg-primary/5 border-b border-primary/20 block transition-all"
              >
                <GlitchText text={item.name} />
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-4 font-tech uppercase tracking-[0.4em] text-[10px] text-primary hover:bg-primary/5 border-b border-primary/20 block transition-all"
            >
              <GlitchText text="Connect" />
            </Link>

            {/* Mobile Theme Toggle */}
            <div 
              onClick={toggleTheme}
              className="px-6 py-6 flex items-center justify-between bg-primary/5 border-b border-primary/20 cursor-pointer select-none"
            >
              <span className="font-tech text-[10px] tracking-[0.4em] text-tertiary/40 uppercase">
                Theme: <span className="text-secondary ml-2">{theme === 'dark' ? 'Dark' : 'Light'}</span>
              </span>
              <div className="w-10 h-5 bg-tertiary/5 rounded-full relative border border-tertiary/10">
                <motion.div 
                  animate={{ x: theme === 'dark' ? 0 : 20 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-1 top-1 w-3 h-3 bg-tertiary/20 rounded-full flex items-center justify-center"
                >
                  {theme === 'dark' ? (
                    <Moon className="w-2 h-2 text-surface" fill="currentColor" />
                  ) : (
                    <Sun className="w-2 h-2 text-surface" fill="currentColor" />
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
