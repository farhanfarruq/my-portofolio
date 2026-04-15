'use client';

import { useState, useEffect, useRef } from "react";

export const GlitchImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [mousePos, setMousePos] = useState({ y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glitchSeed, setGlitchSeed] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setGlitchSeed(Math.random());
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ y });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group border border-primary/20 ${className || ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base Image - B&W to Color transition */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover grayscale contrast-125 brightness-75 transition-all duration-500 ${isHovered ? 'grayscale-0 brightness-100 scale-105' : ''}`}
        referrerPolicy="no-referrer"
      />

      {/* Rough Pixel Glitch Layers */}
      {isHovered && (
        <>
          {/* Pixelated Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay bg-[url('/noise.svg')] bg-[length:20px_20px]" />

          {/* Random Rough Slices */}
          {[...Array(5)].map((_, i) => {
            const top = Math.random() * 90;
            const height = 2 + Math.random() * 15;
            const offset = (Math.random() - 0.5) * 40;
            return (
              <div
                key={i}
                className="absolute inset-0 pointer-events-none overflow-hidden"
                style={{
                  clipPath: `inset(${top}% 0 ${100 - (top + height)}% 0)`,
                  transform: `translateX(${offset}px)`,
                  filter: `hue-rotate(${Math.random() * 360}deg) brightness(1.2) contrast(2)`,
                  opacity: 0.6
                }}
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          })}

          {/* Cursor-following Rough Row Glitch */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
              clipPath: `inset(${mousePos.y - 8}% 0 ${100 - (mousePos.y + 8)}% 0)`,
              transform: `translateX(${(Math.random() - 0.5) * 60}px)`,
              filter: 'invert(1) hue-rotate(180deg) brightness(1.5)',
            }}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover scale-125"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Vertical Pixel Strips */}
          <div
            className="absolute inset-0 pointer-events-none bg-primary/20"
            style={{
              clipPath: `inset(0 ${Math.random() * 95}% 0 ${Math.random() * 95}%)`,
              opacity: 0.3
            }}
          />
        </>
      )}

      <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface/40 to-transparent" />
      <div className="absolute bottom-10 right-12 font-tech text-[11px] tracking-[0.5em] text-primary uppercase glow-primary pointer-events-none">
        VIEW
      </div>
    </div>
  );
};
