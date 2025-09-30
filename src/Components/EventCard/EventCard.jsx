import React from 'react';
import styles from './EventCard.module.css';

export default function EventCard({ event, onClick }) {
  if (!event) return null;
  const { date, title, description, image } = event;

  return (
    <article
      className={styles.card}
      onClick={() => onClick && onClick(event)}
      role="button"
      tabIndex={0}
    >
      <div
        className={styles.media}
        style={{ backgroundImage: image ? `url(${image})` : undefined }}
        aria-hidden={!!image}
      />
      <div className={styles.body}>
        <p className={styles.date}>{date}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </article>
  );
}
