"use client";
import { motion } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaFigma, FaJsSquare, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiGraphql, SiMongodb, SiVercel, SiPostman } from 'react-icons/si';

// Daftar ikon teknologi
const skills = [
  { icon: FaJsSquare, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#FFFFFF' },
  { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
  { icon: FaHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: FaCss3Alt, name: 'CSS3', color: '#1572B6' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiGraphql, name: 'GraphQL', color: '#E10098' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: FaGitAlt, name: 'Git', color: '#F05032' },
  { icon: FaDocker, name: 'Docker', color: '#2496ED' },
  { icon: FaAws, name: 'AWS', color: '#232F3E' },
  { icon: FaFigma, name: 'Figma', color: '#F24E1E' },
  { icon: SiVercel, name: 'Vercel', color: '#FFFFFF' },
  { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
];

// Fungsi untuk menghasilkan nilai acak
const getRandomValue = (min: number, max: number) => Math.random() * (max - min) + min;

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-darker/50">
      <div className="hoverable-text">
        <SectionHeading>Tools & Technologies</SectionHeading>
      </div>
      <div className="relative h-96 flex justify-center items-center">
        {skills.map((skill, index) => {
          const size = getRandomValue(40, 80);
          const duration = getRandomValue(15, 30);
          const delay = getRandomValue(0, 5);
          
          return (
            <motion.div
              key={index}
              className="absolute"
              initial={{ 
                x: `${getRandomValue(-30, 30)}vw`, 
                y: `${getRandomValue(-15, 15)}vh`,
                opacity: 0,
              }}
              animate={{
                x: `calc(${getRandomValue(-35, 35)}vw)`,
                y: `calc(${getRandomValue(-20, 20)}vh)`,
                opacity: [0, 0.7, 0.7, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <skill.icon 
                style={{ 
                  width: `${size}px`, 
                  height: `${size}px`, 
                  color: skill.color,
                }}
                className="hoverable"
                title={skill.name}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}