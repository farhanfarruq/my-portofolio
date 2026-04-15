'use client';

import { useState, useEffect, useRef, useCallback } from "react";

const GLITCH_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@&%*!<>/?";

export const GlitchText = ({ text, className, isBold = false, subtle = false, externalHover }: { text: string; className?: string; isBold?: boolean; subtle?: boolean; externalHover?: boolean }) => {
  const [displayText, setDisplayText] = useState(text);
  const [internalHover, setInternalHover] = useState(false);
  const isHovered = externalHover !== undefined ? externalHover : internalHover;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startGlitch = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    const speed = subtle ? 40 : 25;
    const step = subtle ? 1 : 1 / 2;

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text.split("").map((char, index) => {
          if (index < iteration) return text[index];
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }).join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += step;
    }, speed);
  }, [text, subtle]);

  useEffect(() => {
    if (isHovered) {
      startGlitch();
    } else {
      setDisplayText(text);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, text, startGlitch]);

  return (
    <span
      className={`${className || ''}`}
      onMouseEnter={() => setInternalHover(true)}
      onMouseLeave={() => setInternalHover(false)}
    >
      {displayText}
    </span>
  );
};
