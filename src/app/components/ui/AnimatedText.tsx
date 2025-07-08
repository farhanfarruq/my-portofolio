"use client";
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function AnimatedText({ text, className = "" }: { text: string, className?: string }) {
  return (
    <motion.div
      className={`flex flex-wrap justify-center ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split(" ").map((word, wordIndex) => (
        <motion.span
          variants={container}
          key={`word-${wordIndex}`}
          className="whitespace-nowrap"
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              variants={child}
              key={`char-${wordIndex}-${charIndex}`}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
    </motion.div>
  );
}