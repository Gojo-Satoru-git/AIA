import React, { useMemo, useState } from 'react';
import styles from './Placements.module.css';
import placementsData from '../../data/placements.json';

export default function Placements() {
  const PLACEMENTS = useMemo(
    () => (Array.isArray(placementsData) ? placementsData : []),
    [],
  );
  const [selected, setSelected] = useState(null);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Placements</h2>
        <p className={styles.lead}>
          Explore the successful placements of our talented students in leading
          AI companies.
        </p>

        <div className={styles.grid}>
          {PLACEMENTS.map((p, i) => (
            <article
              key={i}
              className={styles.card}
              onClick={() => setSelected(p)}
            >
              <div
                className={styles.image}
                style={{
                  backgroundImage: p.image ? `url(${p.image})` : undefined,
                }}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.company}>{p.company}</h3>
                <p className={styles.meta}>Student: {p.student}</p>
                <p className={styles.meta}>Package: {p.package}</p>
                <button
                  className={styles.cta}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(p);
                  }}
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>

        {selected && (
          <div className={styles.overlay} onClick={() => setSelected(null)}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.close}
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className={styles.dialogGrid}>
                <div
                  className={styles.dialogImage}
                  style={{
                    backgroundImage: selected.image
                      ? `url(${selected.image})`
                      : undefined,
                  }}
                />
                <div className={styles.dialogBody}>
                  <h3 className={styles.company}>{selected.company}</h3>
                  <p className={styles.meta}>Student: {selected.student}</p>
                  <p className={styles.meta}>Package: {selected.package}</p>
                  <p className={styles.description}>
                    More details will be added here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
