import { useEffect } from 'react';
import { useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function useScrollAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true, // Animasi hanya akan berjalan sekali saat elemen masuk layar
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
}

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Sedikit menambah jeda antar item
    },
  },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// --- KODE BARU YANG DITAMBAHKAN ---
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 // Mulai dari posisi 50px di bawah
  },
  visible: {
    opacity: 1,
    y: 0, // Pindah ke posisi normal
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};