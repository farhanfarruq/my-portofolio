"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeading from './ui/SectionHeading';
import { fadeIn, staggerContainer } from '../hooks/useScrollAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product filtering, cart functionality, and Stripe payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/images/project1.jpg'
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for managing tasks with drag-and-drop functionality, real-time updates, and team collaboration features.',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/images/project2.jpg'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that displays current and forecasted weather using data from the OpenWeather API with interactive maps and charts.',
    tags: ['TypeScript', 'Chart.js', 'Leaflet', 'OpenWeather API'],
    github: 'https://github.com',
    live: 'https://example.com',
    image: '/images/project3.jpg'
  }
];

export default function Projects() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className="py-20 bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Featured Projects</SectionHeading>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="space-y-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`project-card group relative grid grid-cols-1 lg:grid-cols-5 gap-8 p-6 ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="lg:col-span-3">
                <div className="relative h-64 w-full rounded-lg overflow-hidden border border-dark/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="lg:col-span-2 flex flex-col justify-center">
                <h3 className="project-title text-2xl font-bold text-light mb-2 transition-colors">
                  {project.title}
                </h3>
                <p className="text-light/70 mb-4">{project.description}</p>
                
                <ul className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <li key={tag} className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded">
                      {tag}
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light/70 hover:text-primary transition-colors hoverable"
                      aria-label="GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light/70 hover:text-primary transition-colors hoverable"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}