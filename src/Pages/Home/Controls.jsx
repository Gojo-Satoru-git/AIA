// Controls.jsx
import {
  PauseIcon,
  PlayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import styles from './Controls.module.css';

export default function Controls({ paused, togglePause, goPrev, goNext }) {
  return (
    <div className={styles.controlsContainer}>
      {/* Pause/Play Button */}
      <button
        onClick={togglePause}
        className={`${styles.controlButton} ${styles.pauseButton}`}
      >
        {paused ? (
          <PlayIcon className={styles.icon} />
        ) : (
          <PauseIcon className={styles.icon} />
        )}
      </button>

      {/* Left Arrow */}
      <button
        onClick={goPrev}
        className={`${styles.controlButton} ${styles.prevButton}`}
      >
        <ChevronLeftIcon className={styles.icon} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        className={`${styles.controlButton} ${styles.nextButton}`}
      >
        <ChevronRightIcon className={styles.icon} />
      </button>
    </div>
  );
}
