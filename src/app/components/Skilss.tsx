"use client";
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import SkillBar from './ui/SkillBar';
import { fadeIn, staggerContainer } from '../hooks/useScrollAnimation';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = [
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'React', level: 92 },
  { name: 'Next.js', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'HTML/CSS', level: 98 },
  { name: 'Tailwind CSS', level: 94 },
  { name: 'GraphQL', level: 80 },
  { name: 'MongoDB', level: 78 },
  { name: 'Git', level: 90 },
];

export default function Skills() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className="py-20 bg-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>My Skills</SectionHeading>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-2xl font-semibold text-light mb-6">Technical Skills</h3>
            {skills.slice(0, 5).map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
          
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-2xl font-semibold text-light mb-6">More Skills</h3>
            {skills.slice(5).map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {[
            'VSCode', 'Figma', 'GitHub', 'Docker', 'AWS',
            'Jest', 'Cypress', 'Postman', 'Photoshop', 'Framer'
          ].map((tool) => (
            <div
              key={tool}
              className="px-4 py-3 rounded-md bg-dark/50 border border-primary/10 hover:border-primary/30 flex items-center justify-center transition-all hoverable"
            >
              <span className="text-light/80">{tool}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}