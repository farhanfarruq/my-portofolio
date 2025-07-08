"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './ui/SectionHeading';
import { fadeIn, staggerContainer } from '../hooks/useScrollAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>About Me</SectionHeading>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn} className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-light/80">
                Hello! I'm John, a web developer based in New York with a passion for building 
                exceptional digital experiences. My journey in web development started back in 2015 
                when I decided to try creating custom themes for my blog.
              </p>
              <p className="text-light/80">
                Fast-forward to today, I've had the privilege of working at an advertising agency, 
                a start-up, and as a freelancer for various clients. My main focus these days is 
                building accessible, inclusive products and digital experiences at Upstatement for 
                a variety of clients.
              </p>
              <p className="text-light/80">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'GraphQL', 'MongoDB'].map((tech) => (
                  <li key={tech} className="flex items-center">
                    <span className="text-primary mr-2">▹</span>
                    <span className="text-light/70">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="relative order-1 md:order-2 mx-auto md:mx-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hoverable">
              <Image
                src="/images/avatar.jpg"
                alt="John Doe"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply hover:bg-transparent transition-all duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}