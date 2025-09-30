import React, { useState, useEffect } from 'react';
import styles from './AlumniList.module.css';

const AlumniCard = ({ name, rollNo, batch }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={isMobile ? styles.card : styles.cardDesktop}
          style={{ boxShadow: isHovered ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
      <div>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardSubtitle}>Roll No: {rollNo}</p>
        <p className={styles.cardSubtitle}>Batch: {batch}</p>
      </div>
    </div>
  );
};

const AlumniList = () => {
  const [selectedBatch, setSelectedBatch] = useState('All');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBatch]);

  const alumni = [
    { name: 'Sophia Clark', rollNo: '20220001', batch: '22-26' },
    { name: 'Ethan Miller', rollNo: '20230002', batch: '23-27' },
    { name: 'Olivia Davis', rollNo: '20240003', batch: '24-28' },
    { name: 'Liam Wilson', rollNo: '20220004', batch: '22-26' },
    { name: 'Ava Taylor', rollNo: '20230005', batch: '23-27' },
    { name: 'Noah Anderson', rollNo: '20240006', batch: '24-28' },
    { name: 'Isabella Thomas', rollNo: '20220007', batch: '22-26' },
    { name: 'Jackson Jackson', rollNo: '20230008', batch: '23-27' },
    { name: 'Mia White', rollNo: '20240009', batch: '24-28' },
    { name: 'Aiden Harris', rollNo: '20220010', batch: '22-26' },
    { name: 'Emma Brown', rollNo: '20230011', batch: '23-27' },
    { name: 'Lucas Garcia', rollNo: '20240012', batch: '25-29' },
  ];

  const uniqueBatches = [...new Set(alumni.map(alum => alum.batch))].sort();
  const batches = ['All', ...uniqueBatches];

  const recordsPerPage = isMobile ? 20 : 60;

  const filteredAlumni =
    selectedBatch === 'All'
      ? alumni
      : alumni.filter(alum => alum.batch === selectedBatch);

  const totalPages = Math.ceil(filteredAlumni.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const displayedAlumni = filteredAlumni.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Alumni</h1>

      <div className={styles.filterBar}>
        <span className={styles.filterLabel}>Filter by batch:</span>
        <select
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
          className={styles.dropdown}
        >
          {batches.map((batch) => (
            <option key={batch} value={batch}>
              {batch}
            </option>
          ))}
        </select>
      </div>

      <div className={isMobile ? styles.grid : styles.gridDesktop}>
        {displayedAlumni.map((alum) => (
          <AlumniCard
            key={alum.rollNo}
            name={alum.name}
            rollNo={alum.rollNo}
            batch={alum.batch}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={currentPage === 1 ? styles.pageButtonDisabled : styles.pageButton}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className={styles.pageInfo}>
            Showing {currentPage} of {totalPages}
          </span>

          <button
            className={currentPage === totalPages ? styles.pageButtonDisabled : styles.pageButton}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AlumniList;
