'use client';

import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="mt-8 flex flex-col items-center">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {displayedProjects.map((project, i) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            github={project.github}
            live={project.live}
            index={i}
            isInView={isInView}
          />
        ))}
      </div>
      
      {projects.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 px-6 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all duration-300"
        >
          {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Project'}
        </button>
      )}
    </div>
  );
}
