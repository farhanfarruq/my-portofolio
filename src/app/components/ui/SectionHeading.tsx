"use client";
import { motion } from 'framer-motion';
import { fadeIn } from '../../../hooks/useScrollAnimation';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.h2
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      className="section-heading text-3xl md:text-4xl font-bold mb-12 text-center"
    >
      {children}
    </motion.h2>
  );
}