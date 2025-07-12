"use client";
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { staggerContainer } from '../../hooks/useScrollAnimation';
import ProjectCard from './ProjectCard';


// Data proyek Anda
const projectsData = 
  [
  {
    title: 'Sadar Diri Web App',
    description: 'A full-stack e-commerce web application built with Laravel. It includes features such as product filtering, cart functionality, user authentication, and integrated payment gateway. Deployed using Laravel Cloud for optimal performance and scalability.',
    tags: ['Laravel', 'Blade', 'MySQL', 'Laravel Cloud'],
    github: 'https://github.com/farhanfarruq/sadardiri-web',
    live: 'https://sadardiri-web.laravel.cloud/',
    image: '/images/project1.jpg'
  },
  {
    title: 'To-Do List Application',
    description: 'A task management application developed using Laravel with CRUD features, drag-and-drop interface, and user authentication. Designed for improving productivity and team collaboration.',
    tags: ['Laravel', 'Tailwind CSS', 'JavaScript', 'MySQL'],
    github: 'https://github.com/farhanfarruq',
    live: 'https://github.com/farhanfarruq',
    image: '/images/project2.jpg'
  },
  {
    title: 'Sistem Kampus CRUD',
    description: 'A simple campus data management system created with native PHP. Features include student record CRUD operations, basic authentication, and responsive UI with Bootstrap.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Vanilla JS'],
    github: 'https://github.com/farhanfarruq/sistem_kampus2',
    live: 'https://sistem-kampus.free.nf/',
    image: '/images/project3.jpg'
  }
]


export default function Projects() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hoverable-text">
            <SectionHeading>Featured Projects</SectionHeading>
        </div>
        
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        >
          {/* Mapping dan validasi data SEBELUM merender kartu */}
          {projectsData.map((project, index) => {
            // **Perbaikan Kritis**: Memastikan gambar default digunakan jika sumber tidak valid
            const validImage = project.image && project.image.trim() !== '' ? project.image : '/images/avatar.jpg';

            return (
              <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  github={project.github}
                  live={project.live}
                  image={validImage} // <-- Kirim path gambar yang sudah divalidasi
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
  
}