'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Badge from './ui/Badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  index: number;
  isInView: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  live,
  index,
  isInView,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-base font-medium text-zinc-100 group-hover:text-white transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-3 ml-4 shrink-0">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="text-zinc-600 hover:text-zinc-300 transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="text-zinc-600 hover:text-zinc-300 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-400 leading-relaxed flex-grow mb-5">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </motion.article>
  );
}