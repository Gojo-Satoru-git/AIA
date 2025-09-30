import React from 'react';
import OfficeBearers from './OraganizationBearers';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to Artificial Intelligence Association
          </h1>
          {/*<p className={styles.heroSubtitle}>
            Explore the forefront of AI research and innovation. Join our
            community of experts and enthusiasts.
          </p>*/}
          <button className={styles.heroButton}>Learn More</button>
        </div>
      </section>

      {/* AI Topics */}
      {/* Office Bearers */}
      <OfficeBearers />
    </div>
  );
};

export default Home;
