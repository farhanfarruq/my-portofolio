"use client";
import { motion } from 'framer-motion';
import AnimatedText from './ui/Animated';
import { FiChevronDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="text-center space-y-8 px-4">
        {/* Tambahkan kelas hoverable-text di sini */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono mb-2 hoverable-text" 
        >
          Hi, my name is
        </motion.div>
        
        {/* Dan di sini */}
        <AnimatedText 
          text="Farhan Farruq" 
          className="text-6xl md:text-8xl font-bold text-light mb-4 hoverable-text" 
        />
        
        {/* Dan juga di sini */}
        <AnimatedText 
          text="I build things for the web." 
          className="text-2xl md:text-4xl font-semibold text-light/80 mb-8 hoverable-text" 
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-light/60 text-lg hoverable-text"
        >
          I'm a passionate web developer specializing in modern JavaScript frameworks. 
          I create exceptional digital experiences with clean, efficient code.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pt-8"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-primary text-primary font-mono rounded-md hover:bg-primary/10 transition-colors hoverable"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="hoverable">
          <FiChevronDown className="text-light/60 text-3xl animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}