import React from 'react';
import styles from './FeatureCard.module.css';

export default function FeatureCard({ item, onClick }) {
  if (!item) return null;
  const { title, subtitle, description, image } = item;

  return (
    <article
      className={styles.card}
      onClick={() => onClick && onClick(item)}
      role="button"
      tabIndex={0}
    >
      {image && (
        <div
          className={styles.media}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className={styles.body}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.desc}>{description}</p>}
      </div>
    </article>
  );
}
