import React from 'react';
import styles from './Top.module.css';

export default function Top() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>
        Welcome to Artificial Intelligence Association
      </h3>
      <p className={styles.description}>
        Join a vibrant community of AI enthusiasts, researchers, and innovators
        dedicated to advancing the frontiers of artificial intelligence
      </p>
    </section>
  );
}
