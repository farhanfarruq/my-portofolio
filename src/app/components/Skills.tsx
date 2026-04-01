'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import Badge from './ui/Badge';
import { skillGroups } from '@/lib/data';

export default function Skills() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="skills" className="py-24 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <SectionHeading index="02." title="Skills" />

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                >
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="space-y-3"
                        >
                            <h3 className="text-xs font-[var(--font-geist-mono)] tracking-widest text-zinc-500 uppercase">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <Badge key={skill}>{skill}</Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
