import React, { useState, useEffect } from 'react';
import folders from '../../server/data/folders';
import { Link } from 'react-router-dom';
import styles from './Gallery.module.css';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImageIndices, setCurrentImageIndices] = useState({});

  useEffect(() => {
    const intervals = folders.map((folder, folderIndex) => {
      return setInterval(() => {
        setCurrentImageIndices((prev) => ({
          ...prev,
          [folderIndex]: ((prev[folderIndex] || 0) + 1) % folder.images.length,
        }));
      }, 4000); // Change image every 4 seconds
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>Gallery</h2>
        <p className={styles.description}>
          Explore our moments from various events, workshops, and more.
        </p>
      </div>
      <div className={styles.grid}>
        {folders.map((folder, index) => (
          <Link
            key={index}
            to={`/gallery/${folder.title.toLowerCase()}`}
            className={`${styles.folderCard} ${
              hoveredIndex === index ? styles.folderCardHover : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.folderIconContainer}>
              {folder.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${folder.title} ${imgIndex + 1}`}
                  className={styles.imageSlider}
                  style={{
                    opacity:
                      (currentImageIndices[index] || 0) === imgIndex ? 1 : 0,
                    zIndex:
                      (currentImageIndices[index] || 0) === imgIndex ? 1 : 0,
                  }}
                />
              ))}
            </div>
            <h3 className={styles.folderTitle}>{folder.title}</h3>
            <p className={styles.folderCount}>{folder.count} Photos</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
