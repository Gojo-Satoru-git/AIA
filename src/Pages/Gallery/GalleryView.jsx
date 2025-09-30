import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import folders from '../../data/folders'

const styles = {
  main: {
    flexGrow: 1,
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: '900',
    letterSpacing: '-0.025em',
    color: '#111827',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  imageCard: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
  imageContainer: {
    height: '16rem',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.3s ease',
  },
  imageContainerHover: {
    transform: 'scale(1.05)',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  overlayHover: {
    opacity: 1,
  },
  modal: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '2rem',
  },
  modalImage: {
    maxWidth: '90%',
    maxHeight: '90%',
    objectFit: 'contain',
    borderRadius: '0.5rem',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    color: 'white',
    fontSize: '2rem',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
  },
  closeButtonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  navigationButtons: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1rem',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  },
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: 'none',
    color: 'white',
    fontSize: '2rem',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    pointerEvents: 'auto',
  },
  navButtonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
};

const GalleryView = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [closeButtonHover, setCloseButtonHover] = useState(false);
  const [prevButtonHover, setPrevButtonHover] = useState(false);
  const [nextButtonHover, setNextButtonHover] = useState(false);

  const { folderTitle } = useParams();

  const folder = folders.find(f => f.title.toLowerCase() === folderTitle?.toLowerCase());
  const images = folder ? folder.images : [];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e) => {
    if (selectedImageIndex !== null) {
      if (e.key === 'ArrowLeft') {
        handlePrevImage(e);
      } else if (e.key === 'ArrowRight') {
        handleNextImage(e);
      } else if (e.key === 'Escape') {
        handleCloseModal();
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  if (!folder) {
    return (
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.title}>Gallery Not Found</h1>
        </div>
      </main>
    );
  }

  return (
    <>
      <main style={styles.main}>
        <div style={styles.container}>
          <h1 style={styles.title}>{folder.title}</h1>
          <div style={styles.grid}>
            {images.map((image, index) => (
              <div
                key={index}
                style={styles.imageCard}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleImageClick(index)}
              >
                <div
                  style={{
                    ...styles.imageContainer,
                    backgroundImage: `url("${image}")`,
                    ...(hoveredIndex === index ? styles.imageContainerHover : {}),
                  }}
                />
                <div
                  style={{
                    ...styles.overlay,
                    ...(hoveredIndex === index ? styles.overlayHover : {}),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedImageIndex !== null && (
        <div style={styles.modal} onClick={handleModalClick}>
          <button
            style={{
              ...styles.closeButton,
              ...(closeButtonHover ? styles.closeButtonHover : {}),
            }}
            onClick={handleCloseModal}
            onMouseEnter={() => setCloseButtonHover(true)}
            onMouseLeave={() => setCloseButtonHover(false)}
          >
            ×
          </button>
          
          <div style={styles.navigationButtons}>
            <button
              style={{
                ...styles.navButton,
                ...(prevButtonHover ? styles.navButtonHover : {}),
              }}
              onClick={handlePrevImage}
              onMouseEnter={() => setPrevButtonHover(true)}
              onMouseLeave={() => setPrevButtonHover(false)}
            >
              ‹
            </button>
            <button
              style={{
                ...styles.navButton,
                ...(nextButtonHover ? styles.navButtonHover : {}),
              }}
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
            style={styles.modalImage}
          />
        </div>
      )}
    </>
  );
};

export default GalleryView;