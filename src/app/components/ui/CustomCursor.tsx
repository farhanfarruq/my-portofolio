"use client";
import { useState, useEffect } from 'react';
import { useMousePosition } from '../../hooks/useMouusePoaition';
export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const hoverables = document.querySelectorAll('.hoverable');
    
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovered(true));
      el.addEventListener('mouseleave', () => setIsHovered(false));
    });

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHovered(true));
        el.removeEventListener('mouseleave', () => setIsHovered(false));
      });
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isHidden) return null;

  return (
    <div 
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ${
        isHovered ? 'scale-150' : 'scale-100'
      }`}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <div className={`w-4 h-4 rounded-full ${
        isHovered ? 'bg-transparent border-2 border-primary' : 'bg-primary'
      } transition-all duration-300`}></div>
      {isHovered && (
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/10 animate-ping"
          style={{ animationDuration: '1500ms' }}
        />
      )}
    </div>
  );
}