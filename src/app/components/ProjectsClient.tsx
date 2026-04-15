"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlitchText } from "@/app/components/ui/GlitchText";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.4 }}
              className="p-8 md:p-12 border-b border-primary/20 lg:odd:border-r hover:bg-primary/5 transition-colors group flex flex-col h-full relative"
            >
              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="font-display text-[14px] md:text-[16px] text-tertiary tracking-[0.1em] uppercase group-hover:text-primary transition-colors pr-8">
                  <GlitchText text={project.title} isBold />
                </h3>
                <div className="flex gap-4 items-center mt-1 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary/40 hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tertiary/40 hover:text-primary transition-colors"
                      aria-label="Live Project"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-text-muted text-[12px] md:text-[13px] leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity mb-10 flex-1 font-mono relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-tech text-[9px] tracking-[0.2em] uppercase text-primary/60 border border-primary/20 px-2 py-1 bg-surface-lowest/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Subtle hover gradient */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {projects.length > 4 && (
        <div className="px-8 md:px-16 py-8 flex items-center justify-center bg-surface/20">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 cursor-pointer group px-6 py-3 border border-primary/20 hover:bg-primary/5 transition-all bg-surface-lowest/50"
          >
            <span className="font-tech text-[10px] tracking-[0.4em] text-tertiary/40 uppercase group-hover:text-primary transition-colors">
              {showAll ? "Terminate Sequence" : "Execute Pagination"}
            </span>
            <div
              className={`w-2 h-2 border-b border-r border-tertiary/40 transition-all duration-300 group-hover:border-primary ${
                showAll ? "-rotate-[135deg] translate-y-1" : "rotate-45"
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
}
