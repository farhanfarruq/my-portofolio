'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillGroups } from '@/lib/data';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiPhp, SiLaravel,
  SiMysql, SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiVercel, SiFigma, SiPostman
} from 'react-icons/si';
import { FaServer, FaCogs } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';

const iconMap: Record<string, React.ElementType> = {
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  'PHP': SiPhp,
  'Laravel': SiLaravel,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Git': SiGit,
  'Docker': SiDocker,
  'Vercel': SiVercel,
  'Figma': SiFigma,
  'Postman': SiPostman,
  'VS Code': TbBrandVscode,
  'REST API': FaServer,
};

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="skills" className="py-16 md:py-24 px-6 md:px-12">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-3 mb-12 md:mb-0">
                    <h3 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter">SKILLS</h3>
                    <p className="font-label uppercase tracking-widest text-xs mt-4">Technical Arsenal</p>
                </div>
                
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="col-span-12 md:col-span-9"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-16">
                        {skillGroups.map((group, i) => (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 16 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex flex-col gap-4"
                            >
                                <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">
                                    {`0${i + 1}. ${group.category}`}
                                </span>
                                <ul className="font-headline text-xl md:text-2xl space-y-2">
                                    {group.skills.map((skill) => {
                                        const Icon = iconMap[skill] || FaCogs; // Fallback icon
                                        return (
                                            <li key={skill} className="flex items-center gap-3">
                                                <Icon className="text-primary/40 text-2xl" />
                                                {skill}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
