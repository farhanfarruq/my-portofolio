"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { GlitchText } from "@/app/components/ui/GlitchText";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVercel,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { FaServer, FaCogs } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const iconMap: Record<string, React.ElementType> = {
  HTML5: SiHtml5,
  CSS3: SiCss3,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  PHP: SiPhp,
  Laravel: SiLaravel,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  Docker: SiDocker,
  Vercel: SiVercel,
  Figma: SiFigma,
  Postman: SiPostman,
  "VS Code": TbBrandVscode,
  "REST API": FaServer,
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="border-t border-primary/20 relative z-10 bg-surface/10"
      ref={ref}
    >
      <div className="px-8 md:px-16 py-10 border-b border-primary/20">
        <h2 className="font-display text-2xl text-tertiary tracking-[0.2em] uppercase">
          <GlitchText text="Skills Matrix" isBold />
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-primary/20">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="p-8 md:p-12 hover:bg-primary/5 transition-all group cursor-default"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="font-tech text-[10px] tracking-[0.3em] text-primary/40 uppercase">
                {`0${i + 1}`}
              </span>
              <h3 className="font-display text-[13px] text-tertiary tracking-[0.2em] uppercase group-hover:text-primary transition-colors">
                <GlitchText text={group.category} isBold />
              </h3>
            </div>

            <ul className="space-y-4">
              {group.skills.map((skill) => {
                const Icon = iconMap[skill] || FaCogs;
                return (
                  <li
                    key={skill}
                    className="flex items-center gap-4 text-text-muted text-[12px] font-mono leading-relaxed group/item hover:text-tertiary transition-colors"
                  >
                    <Icon className="text-primary/40 text-lg group-hover/item:text-primary transition-colors" />
                    <span>{skill}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="px-8 md:px-16 py-6 border-t border-primary/20 flex items-center justify-between bg-surface/20">
        <div className="flex items-center gap-3 cursor-pointer group">
          <span className="font-tech text-[10px] tracking-[0.4em] text-tertiary/40 uppercase group-hover:text-primary transition-colors">
            System Diagnostics
          </span>
          <div className="w-2 h-2 border-b border-r border-tertiary/40 rotate-45 group-hover:border-primary transition-colors" />
        </div>
      </div>
    </section>
  );
}
