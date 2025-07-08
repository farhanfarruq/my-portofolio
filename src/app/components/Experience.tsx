"use client";
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { fadeIn, staggerContainer } from '../hooks/useScrollAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FiExternalLink } from 'react-icons/fi';

const experiences = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Frontend Developer',
    period: '2021 - Present',
    description: [
      'Led the migration of legacy systems to modern React and TypeScript architecture',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Mentored junior developers and conducted code reviews'
    ],
    link: 'https://techsolutions.com'
  },
  {
    company: 'Digital Agency XYZ',
    position: 'Web Developer',
    period: '2018 - 2021',
    description: [
      'Developed responsive websites for 20+ clients using modern frameworks',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Optimized website performance achieving 95+ Lighthouse scores'
    ],
    link: 'https://digitalagencyxyz.com'
  },
  {
    company: 'Freelance',
    position: 'Web Developer',
    period: '2015 - 2018',
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
        <SectionHeading>Work Experience</SectionHeading>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="relative pl-8 border-l-2 border-primary/20 pb-12 last:pb-0 last:border-l-0 group"
            >
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform" />
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="text-xl font-bold text-light">
                  {exp.position} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <span className="text-light/60 font-mono text-sm">{exp.period}</span>
              </div>
              
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary/80 hover:text-primary mt-1 hoverable"
                >
                  {exp.link.replace(/^https?:\/\//, '')}
                  <FiExternalLink className="ml-1" size={14} />
                </a>
              )}
              
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex">
                    <span className="text-primary mr-2">▹</span>
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