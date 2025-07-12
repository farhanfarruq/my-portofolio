"use client";
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { fadeIn, fadeInUp, staggerContainer } from '../../hooks/useScrollAnimation';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FiExternalLink } from 'react-icons/fi';

const experiences = [
  {
    company: 'Freelance',
    position: 'Web Developer',
    period: '2024 - Present',
    description: [
      'Built custom websites and web applications for small businesses',
      'Worked with clients to understand requirements and deliver solutions',
      'Managed all aspects of projects from design to deployment'
    ]
  }
];

export default function Experience() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hoverable-text">
            <SectionHeading>Work Experience</SectionHeading>
        </div>
        
        {/* Kontainer utama untuk animasi stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="relative border-l-2 border-primary/20"
        >
          {experiences.map((exp, index) => (
            // Setiap item akan muncul dengan animasi fadeInUp
            <motion.div 
              key={index}
              variants={fadeInUp} // Ganti menjadi fadeInUp
              className="mb-12 pl-8 relative group"
            >
              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform" />
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-xl font-bold text-light hoverable-text">
                  {exp.position} <span className="text-primary">As {exp.company}</span>
                </h3>
                <span className="text-light/60 font-mono text-sm">{exp.period}</span>
              </div>
              
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex hoverable-text">
                    <span className="text-primary mr-3">▹</span>
                    <span className="text-light/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}