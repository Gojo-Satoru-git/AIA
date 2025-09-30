import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import folders from '../../data/folders';
import styles from './GalleryView.module.css';

const GalleryView = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [closeButtonHover, setCloseButtonHover] = useState(false);
  const [prevButtonHover, setPrevButtonHover] = useState(false);
  const [nextButtonHover, setNextButtonHover] = useState(false);

  const { folderTitle } = useParams();

  const folder = folders.find(f => f.title.toLowerCase() === folderTitle?.toLowerCase());
  const images = folder ? folder.images : [];

  const handleImageClick = index => setSelectedImageIndex(index);
  const handleCloseModal = () => setSelectedImageIndex(null);

  const handleModalClick = e => {
    if (e.target === e.currentTarget) handleCloseModal();
  };

  const handlePrevImage = e => {
    e.stopPropagation();
    setSelectedImageIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = e => {
    e.stopPropagation();
    setSelectedImageIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = e => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') handlePrevImage(e);
      else if (e.key === 'ArrowRight') handleNextImage(e);
      else if (e.key === 'Escape') handleCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  if (!folder) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Gallery Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{folder.title}</h1>
          <div className={styles.grid}>
            {images.map((image, index) => (
              <div
                key={index}
                className={styles.imageCard}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleImageClick(index)}
              >
                <div
                  className={`${styles.imageContainer} ${
                    hoveredIndex === index ? styles.imageContainerHover : ''
                  }`}
                  style={{ backgroundImage: `url("${image}")` }}
                />
                <div
                  className={`${styles.overlay} ${
                    hoveredIndex === index ? styles.overlayHover : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedImageIndex !== null && (
        <div className={styles.modal} onClick={handleModalClick}>
          <button
            className={`${styles.closeButton} ${
              closeButtonHover ? styles.closeButtonHover : ''
            }`}
            onClick={handleCloseModal}
            onMouseEnter={() => setCloseButtonHover(true)}
            onMouseLeave={() => setCloseButtonHover(false)}
          >
            ×
          </button>

          <div className={styles.navigationButtons}>
            <button
              className={`${styles.navButton} ${prevButtonHover ? styles.navButtonHover : ''}`}
              onClick={handlePrevImage}
              onMouseEnter={() => setPrevButtonHover(true)}
              onMouseLeave={() => setPrevButtonHover(false)}
            >
              ‹
            </button>
            <button
              className={`${styles.navButton} ${nextButtonHover ? styles.navButtonHover : ''}`}
              onClick={handleNextImage}
              onMouseEnter={() => setNextButtonHover(true)}
              onMouseLeave={() => setNextButtonHover(false)}
            >
              ›
            </button>
          </div>

          <img
            src={images[selectedImageIndex]}
            alt="Enlarged view"
            className={styles.modalImage}
          />
        </div>
      )}
    </>
  );
};

export default GalleryView;
