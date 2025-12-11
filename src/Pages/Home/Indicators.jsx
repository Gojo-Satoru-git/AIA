// Indicators.jsx
import styles from './Indicators.module.css';

export default function Indicators({ slides, current, setCurrent }) {
  return (
    <div className={styles.indicatorsContainer}>
      {slides.map((_, i) => (
        <div
          key={i}
          onClick={() => setCurrent(i)}
          className={`${styles.indicator} ${
            i === current ? styles.indicatorActive : styles.indicatorInactive
          }`}
        ></div>
      ))}
    </div>
  );
}
