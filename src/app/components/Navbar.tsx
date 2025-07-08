"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 bg-dark/90 backdrop-blur-md border-b border-primary/10' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#" className="text-xl font-bold text-primary hoverable">
            JD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-light/80 hover:text-primary transition-colors hoverable"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-primary transition-colors hoverable">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-primary transition-colors hoverable">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="mailto:john@example.com" className="text-light/70 hover:text-primary transition-colors hoverable">
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light/70 hover:text-primary focus:outline-none hoverable"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-darker/95 backdrop-blur-lg border-t border-primary/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-light/80 hover:text-primary hover:bg-dark/50 rounded-md transition-colors hoverable"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4 px-3 py-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-primary transition-colors hoverable">
                <FiGithub className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-primary transition-colors hoverable">
                <FiLinkedin className="h-5 w-5" />
              </a>
              <a href="mailto:john@example.com" className="text-light/70 hover:text-primary transition-colors hoverable">
                <FiMail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}