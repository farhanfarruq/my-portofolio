'use client';

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 md:gap-24 max-w-6xl mx-auto">
      {displayedProjects.map((project, index) => {
        const layoutType = index % 3;
        const numberStr = `0${index + 1}`.slice(-2);

        if (layoutType === 0) {
          // Left Aligned
          return (
            <div key={project.title} className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8">
                <div className="flex items-start gap-8">
                  <span className="font-headline text-5xl md:text-7xl font-extrabold opacity-5 leading-none">{numberStr}</span>
                  <div>
                    <h3 className="font-headline text-3xl md:text-4xl font-bold mb-3 md:mb-4 hover:italic transition-all cursor-default">{project.title}</h3>
                    <div className="flex flex-wrap gap-8 items-center">
                      <span className="font-label text-xs uppercase tracking-widest text-secondary">{project.tags.join(' / ')}</span>
                      <a className="font-label text-xs uppercase tracking-[0.2em] text-primary editorial-underline font-bold" href={project.live || project.github} target="_blank" rel="noopener noreferrer">
                        {project.live ? 'View Live' : 'View Code'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else if (layoutType === 1) {
          // Right Aligned
          return (
            <div key={project.title} className="grid grid-cols-12">
              <div className="col-span-12 md:col-start-5 md:col-span-8">
                <div className="flex items-start gap-8 justify-end text-right">
                  <div>
                    <h3 className="font-headline text-3xl md:text-4xl font-bold mb-3 md:mb-4 hover:italic transition-all cursor-default text-right">{project.title}</h3>
                    <div className="flex flex-wrap gap-8 items-center justify-end">
                      <a className="font-label text-xs uppercase tracking-[0.2em] text-primary editorial-underline font-bold" href={project.live || project.github} target="_blank" rel="noopener noreferrer">
                        {project.live ? 'View Live' : 'View Code'}
                      </a>
                      <span className="font-label text-xs uppercase tracking-widest text-secondary">{project.tags.join(' / ')}</span>
                    </div>
                  </div>
                  <span className="font-headline text-5xl md:text-7xl font-extrabold opacity-5 leading-none">{numberStr}</span>
                </div>
              </div>
            </div>
          );
        } else {
          // Center Aligned
          return (
            <div key={project.title} className="grid grid-cols-12">
              <div className="col-span-12 md:col-start-3 md:col-span-8 flex flex-col items-center">
                <div className="flex items-start gap-8">
                  <span className="font-headline text-5xl md:text-7xl font-extrabold opacity-5 leading-none">{numberStr}</span>
                  <div className="text-center">
                    <h3 className="font-headline text-3xl md:text-4xl font-bold mb-3 md:mb-4 hover:italic transition-all cursor-default">{project.title}</h3>
                    <div className="flex flex-wrap gap-8 items-center justify-center">
                      <span className="font-label text-xs uppercase tracking-widest text-secondary">{project.tags.join(' / ')}</span>
                      <a className="font-label text-xs uppercase tracking-[0.2em] text-primary editorial-underline font-bold" href={project.live || project.github} target="_blank" rel="noopener noreferrer">
                        {project.live ? 'View Live' : 'View Code'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}

      {projects.length > 3 && (
        <div className="flex justify-center mt-16 md:mt-32">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-label text-xs uppercase tracking-[0.2em] text-primary editorial-underline font-bold cursor-pointer"
          >
            {showAll ? 'Show Less Projects' : 'Load More Projects'}
          </button>
        </div>
      )}
    </div>
  );
}
