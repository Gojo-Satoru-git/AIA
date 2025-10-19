import { Mail, Linkedin } from 'lucide-react';
import bearers from '../../server/data/officeBearers.json';
import styles from './Officers.module.css';

export default function OfficeBearers() {
  const getBadgeClass = (bgColor) => {
    const colorMap = {
      'bg-teal-400': 'teal',
      teal: 'teal',
      'bg-teal-500': 'teal',
      'bg-red-400': 'red',
      red: 'red',
      'bg-red-500': 'red',
      'bg-purple-400': 'purple',
      purple: 'purple',
      'bg-purple-500': 'purple',
      'bg-green-400': 'green',
      green: 'green',
      'bg-green-500': 'green',
    };
    return colorMap[bgColor] || 'default';
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Office Bearers</h1>
        <p className={styles.description}>
          Meet the distinguished leaders driving our mission forward
        </p>
      </div>

      {/* Bearers Grid */}
      <div className={styles.grid}>
        {bearers.map((bearer, index) => (
          <div key={index} className={styles.card}>
            {/* Profile Image */}
            <div className={styles.profileImageContainer}>
              <div className={styles.profileImage}>
                <img
                  src={bearer.image}
                  alt={bearer.name}
                  className={styles.image}
                />
              </div>

              {/* Icons on hover (always visible on mobile for better UX) */}
              <div className={styles.socialIcons}>
                {/* Mail icon */}
                <a
                  href={`mailto:${bearer.email}`}
                  className={styles.socialLink}
                >
                  <Mail className={`${styles.socialIcon} ${styles.mailIcon}`} />
                </a>

                {/* LinkedIn icon */}
                <a
                  href={bearer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <Linkedin
                    className={`${styles.socialIcon} ${styles.linkedinIcon}`}
                  />
                </a>
              </div>
            </div>

            {/* Name */}
            <h3 className={styles.name}>{bearer.name}</h3>

            {/* Title */}
            <div
              className={`${styles.position} ${
                styles[getBadgeClass(bearer.bgColor) + 'Badge']
              }`}
            >
              {bearer.position}
            </div>

            {/* Description */}
            <p className={styles.description}>
              {bearer.description && bearer.description !== 'Null'
                ? bearer.description
                : ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
