"use client";
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { useState } from 'react';

export default function FloatingHook() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 2 
        } 
      }}
      className="fixed bottom-8 right-8 z-40 hoverable"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-dark/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center cursor-pointer">
          <FaCode className="text-primary text-2xl" />
        </div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            transition: { repeat: Infinity, duration: 3 }
          }}
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent"
        />
        
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-dark/90 backdrop-blur-sm px-4 py-2 rounded-md border border-primary/20 whitespace-nowrap"
          >
            <span className="text-light/80 text-sm font-mono">console.log(&quot;Hello World!&quot;);</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}