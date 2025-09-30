import React, { useState, useEffect } from 'react';
import folders from '../../data/folders';
import { Link } from 'react-router-dom';

const styles = {
  main: {
    flexGrow: 1,
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1rem',
  },
  header: {
    marginBottom: '2.5rem',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    letterSpacing: '-0.025em',
    color: '#101922',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '1.125rem',
    color: '#617589',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '2rem',
  },
  folderCard: {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.3s ease',
  },
  folderCardHover: {
    transform: 'scale(1.05)',
  },
  folderIconContainer: {
    position: 'relative',
    paddingTop: '100%',
    backgroundColor: 'rgba(17, 115, 212, 0.1)',
    borderRadius: '0.75rem',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSlider: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease-in-out',
  },
  folderTitle: {
    marginTop: '1rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#101922',
  },
  folderCount: {
    fontSize: '0.875rem',
    color: '#617589',
  },
};

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentImageIndices, setCurrentImageIndices] = useState({});



  useEffect(() => {
    const intervals = folders.map((folder, folderIndex) => {
      return setInterval(() => {
        setCurrentImageIndices(prev => ({
          ...prev,
          [folderIndex]: ((prev[folderIndex] || 0) + 1) % folder.images.length
        }));
      }, 4000); // Change image every 3 seconds
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <main style={styles.main}>
      <div style={styles.header}>
        <h2 style={styles.title}>Gallery</h2>
        <p style={styles.description}>
          Explore our moments from various events, workshops, and more.
        </p>
      </div>
      <div style={styles.grid}>
        {folders.map((folder, index) => (
          <Link
            key={index}
            to={`/gallery/${folder.title.toLowerCase()}`}
            style={{
              ...styles.folderCard,
              ...(hoveredIndex === index ? styles.folderCardHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={styles.folderIconContainer}>
              {folder.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`${folder.title} ${imgIndex + 1}`}
                  style={{
                    ...styles.imageSlider,
                    opacity: (currentImageIndices[index] || 0) === imgIndex ? 1 : 0,
                    zIndex: (currentImageIndices[index] || 0) === imgIndex ? 1 : 0,
                  }}
                />
              ))}
            </div>
            <h3 style={styles.folderTitle}>{folder.title}</h3>
            <p style={styles.folderCount}>{folder.count} Photos</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Gallery;