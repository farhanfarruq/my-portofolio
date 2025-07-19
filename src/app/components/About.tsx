"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './ui/SectionHeading';
import { staggerContainer, fadeInUp } from '../../hooks/useScrollAnimation';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function About() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={fadeInUp} className="order-2 md:order-1">
          <div className="hoverable-text">
            <SectionHeading>About Me</SectionHeading>
          </div>
          <div className="space-y-6 text-light/80 hoverable-text">
            <p>
              Hello! I&apos;m Farhan Miftakhul Farruq, a Computer Science undergraduate student at Institut Teknologi Dirgantara Adisutjipto based in Yogyakarta. I specialize in full-stack web development and have a strong passion for creating seamless and impactful digital experiences.
            </p>
            <p>
              Fast-forward to today, I&apos;ve been working as a freelance web developer, collaborating on a variety of projects ranging from personal websites to small business applications. This experience has allowed me to continuously sharpen my skills in both front-end and back-end development while helping clients bring their ideas to life online.
            </p>
            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4">
              {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'].map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className="text-primary mr-2">▹</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="relative order-1 md:order-2 mx-auto"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hoverable">
            <Image
              src="/images/avatar.jpg"  // <-- PERBAIKAN: Menambahkan slash "/"
              alt="Farhan Farruq"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-all" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}