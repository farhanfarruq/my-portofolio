"use client";
import { motion } from 'framer-motion';

export default function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-light/80 font-medium">{name}</span>
        <span className="text-primary font-mono text-sm">{level}%</span>
      </div>
      <div className="w-full h-2 bg-dark/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  );
}