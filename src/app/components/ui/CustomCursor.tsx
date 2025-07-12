"use client";
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMousePosition } from '../../../hooks/useMousePosition';

export default function CustomCursor() {
  // 1. Dapatkan posisi mouse mentah
  const { x: mouseX, y: mouseY } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  // 2. Buat MotionValues untuk posisi kursor
  // Ini adalah nilai animasi yang tidak memicu re-render, sangat efisien.
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 3. Buat animasi pegas (spring) untuk kehalusan
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // 4. Perbarui MotionValues saat mouse bergerak
  useEffect(() => {
    cursorX.set(mouseX);
    cursorY.set(mouseY);
  }, [mouseX, mouseY, cursorX, cursorY]);

  // Event listener untuk mengubah state saat hover
  useEffect(() => {
    const hoverables = document.querySelectorAll('.hoverable');
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // 5. Definisikan variants untuk mengubah ukuran dan gaya
  const cursorVariants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "var(--color-primary)",
      borderWidth: "0px",
    },
    hovered: {
      width: 40,
      height: 40,
      backgroundColor: "transparent",
      borderWidth: "2px",
      borderColor: "var(--color-primary)",
    }
  };

  return (
    <motion.div
      variants={cursorVariants}
      animate={isHovered ? "hovered" : "default"}
      // 6. Terapkan posisi spring ke style
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%", // Centering trick
        translateY: "-50%", // Centering trick
      }}
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
    />
  );
}