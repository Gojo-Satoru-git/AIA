import React from 'react';
import Hero from './Hero';
import Courses from './Courses';
import Top from './Top';
import OfficeBearers from './Officers';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Top />
      <Hero />

      <section className={styles.coursesSection}>
        <h1 className={styles.coursesTitle}>AI Courses</h1>
        <p className={styles.coursesDescription}>
          Explore our comprehensive curriculum designed to advance your
          artificial intelligence expertise
        </p>
        <Courses />
      </section>

      <section className={styles.officersSection}>
        <OfficeBearers />
      </section>
    </div>
  );
}
