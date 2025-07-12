"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { fadeInUp } from '../../hooks/useScrollAnimation';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
}

export default function ProjectCard({ title, description, tags, github, live, image }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="project-card group bg-darker/50 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hoverable flex flex-col min-h-[500px]"
    >
      {/* GAMBAR */}
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
        <Image
          src={image || '/images/avatar.jpg'} // Fallback untuk gambar
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* KONTEN */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 project-title">{title}</h3>
        <p className="text-light/70 mb-4 flex-grow leading-relaxed">{description}</p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag) => (
            <span key={tag} className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* IKON LINK */}
        <div className="flex space-x-4 mt-auto pt-2 border-t border-primary/10">
          {/* Tautan GitHub */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/70 hover:text-primary transition-colors flex items-center gap-1"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          
          {/* Tautan Live Demo */}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light/70 hover:text-primary transition-colors flex items-center gap-1"
              aria-label="Live Demo"
            >
              <FiExternalLink size={20} />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}