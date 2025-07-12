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
      className="project-card group bg-darker/50 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hoverable"
    >
      <div className="relative h-48 w-full overflow-hidden">
        {/* Sekarang aman untuk langsung menggunakan 'image' */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex flex-col h-full">
        <h3 className="project-title text-xl font-bold text-light mb-3 transition-colors hoverable-text">{title}</h3>
        <p className="text-light/70 mb-4 flex-grow hoverable-text">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 mt-auto">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-primary transition-colors" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-light/70 hover:text-primary transition-colors" aria-label="Live Demo">
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}