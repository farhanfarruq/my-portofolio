"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import FloatingHook from '../components/ui/FloatingHook';
import CustomCursor from '../components/ui/CustomCursor';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Head>
        <title>John Doe | Web Developer</title>
        <meta name="description" content="Personal portfolio of John Doe, a skilled web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CustomCursor />
      <FloatingHook />

      <motion.div
        className="fixed inset-0 bg-gradient-to-b from-dark to-darker z-0"
        style={{ scale, opacity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        
        <main className="space-y-24 md:space-y-32 pb-24">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}