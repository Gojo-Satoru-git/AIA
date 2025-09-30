import React, { useMemo, useState } from 'react';
import eventsData from '../../data/events.json';
import EventCard from '../../Components/EventCard/EventCard';
import styles from './Events.module.css';

export default function Events() {
  const EVENTS = useMemo(
    () => (Array.isArray(eventsData) ? eventsData : []),
    [],
  );
  const [selected, setSelected] = useState(null);

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>Events</h1>
        <p>
          Discover our upcoming events, workshops, and conferences. Join us to
          explore the latest in AI.
        </p>
      </div>

      <section className={styles.grid}>
        {EVENTS.map((ev, idx) => (
          <EventCard key={idx} event={ev} onClick={setSelected} />
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
              className={styles.modalMedia}
              style={{ backgroundImage: `url(${selected.image})` }}
            />
            <div className={styles.modalBody}>
              <p className={styles.date}>{selected.date}</p>
              <h2 className={styles.title}>{selected.title}</h2>
              <p className={styles.description}>{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
