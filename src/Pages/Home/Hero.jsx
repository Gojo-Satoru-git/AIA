// Hero.jsx
import { useState, useRef, useEffect } from 'react';
import {
  PauseIcon,
  PlayIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import Slide from './Slide';
import Controls from './Controls';
import Indicators from './Indicators';
import styles from './Hero.module.css';

// Images and corresponding texts
const slides = [
  {
    image: 'https://picsum.photos/id/1018/1600/800',
    title: 'Future of Artificial Intelligence',
    subtitle: "Shaping tomorrow's technology today",
    description: 'Explore cutting edge AI research and innovation',
  },
  {
    image: 'https://picsum.photos/id/1033/1600/800',
    title: 'AI for Social Good',
    subtitle: 'Technology that makes a difference',
    description: 'Discover how AI can solve global challenges',
  },
  {
    image: 'https://picsum.photos/id/1037/1600/800',
    title: 'Machine Learning Excellence',
    subtitle: 'Advanced algorithm for real world solutions',
    description: 'Join out community of ML researchers',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideInterval = useRef(null);

  useEffect(() => {
    if (!paused) {
      slideInterval.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(slideInterval.current);
  }, [paused]);

  const goPrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const togglePause = () => setPaused((prev) => !prev);

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <div
          className={styles.slidesWrapper}
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, i) => (
            <Slide key={i} slide={slide} slideWidth={100 / slides.length} />
          ))}
        </div>

        <Controls
          paused={paused}
          togglePause={togglePause}
          goPrev={goPrev}
          goNext={goNext}
        />

        <Indicators slides={slides} current={current} setCurrent={setCurrent} />
      </div>
    </div>
  );
}
