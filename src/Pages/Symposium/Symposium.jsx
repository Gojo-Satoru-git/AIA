import React, { useMemo, useState } from 'react';
import data from '../../server/data/symposium.json';
import FeatureCard from '../../Components/FeaureCard/FeatureCard';
import styles from './Symposium.module.css';

export default function Symposium() {
  const ITEMS = useMemo(() => (Array.isArray(data) ? data : []), []);
  const [selected, setSelected] = useState(null);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Symposium</h1>
        <p>Our flagship event — join us for talks, panels and networking.</p>
      </header>

      <section className={styles.grid}>
        {ITEMS.map((item, i) => (
          <FeatureCard key={i} item={item} onClick={setSelected} />
        ))}
      </section>

      {selected && (
        <div className={styles.overlay} role="dialog" aria-modal="true">
          <div className={styles.modal}>
            <button
              className={styles.close}
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div
              className={styles.media}
              style={{ backgroundImage: `url(${selected.image})` }}
            />
            <div className={styles.body}>
              {selected.subtitle && (
                <p className={styles.subtitle}>{selected.subtitle}</p>
              )}
              <h2 className={styles.title}>{selected.title}</h2>
              <p className={styles.desc}>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
