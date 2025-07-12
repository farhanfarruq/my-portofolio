"use client";
import styles from '../../../styles/AnimatedBackground.module.css';

const AnimatedBackground = () => {
  // Menambah jumlah bintang agar terlihat lebih ramai
  const stars = Array.from({ length: 100 });

  return (
    <div className={styles.starsContainer}>
      {stars.map((_, i) => {
        const style = {
          // Ukuran acak antara 1px dan 3px
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          // Posisi horizontal awal yang acak
          left: `${Math.random() * 100}%`,
          // Durasi animasi acak (antara 10-30 detik)
          animationDuration: `${Math.random() * 20 + 10}s`,
          // Penundaan animasi acak (agar tidak mulai bersamaan)
          animationDelay: `${Math.random() * 10}s`,
        };
        return <div key={`star-${i}`} className={styles.star} style={style} />;
      })}
    </div>
  );
};

export default AnimatedBackground;