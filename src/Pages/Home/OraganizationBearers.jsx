import React from 'react';
import styles from './OrganizationBearers.module.css';

const OfficeBearers = () => {
  const bearers = [
    {
      name: 'Dr. Anya Sharma',
      role: 'President',
      image:
        'https://alchinlong.com/wp-content/uploads/2015/09/sample-profile.png',
    },
    {
      name: 'Mr. Ben Carter',
      role: 'Vice President',
      image:
        'https://alchinlong.com/wp-content/uploads/2015/09/sample-profile.png',
    },
    // Add other bearers here...
  ];

  return (
    <section className={styles.bearersSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Office Bearers</h2>
        <div className={styles.bearersGrid}>
          {bearers.map((bearer, index) => (
            <div key={index} className={styles.bearerCard}>
              <div
                className={styles.bearerImage}
                style={{ backgroundImage: `url(${bearer.image})` }}
              ></div>
              <h3 className={styles.bearerName}>{bearer.name}</h3>
              <p className={styles.bearerRole}>{bearer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeBearers;
