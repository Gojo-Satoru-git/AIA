// Slide.jsx
import styles from './Hero.module.css';

export default function Slide({ slide, slideWidth }) {
  return (
    <div className={styles.slide} style={{ width: `${slideWidth}%` }}>
      <img src={slide.image} alt={slide.title} className={styles.slideImage} />

      {/* Text overlay */}
      <div className={styles.textOverlay}>
        <h1 className={styles.slideTitle}>{slide.title}</h1>
        <p className={styles.slideSubtitle}>{slide.subtitle}</p>
        <p className={styles.slideDescription}>{slide.description}</p>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Learn more
          </button>
          <button className={`${styles.button} ${styles.secondaryButton}`}>
            Join us
          </button>
        </div>
      </div>
    </div>
  );
}
