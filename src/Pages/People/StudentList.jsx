import React, { useState, useEffect } from 'react';
import styles from './StudentList.module.css';

const StudentCard = ({ name, rollNo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={isMobile ? styles.card : styles.cardDesktop}
      style={{ boxShadow: isHovered ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardSubtitle}>Roll No: {rollNo}</p>
      </div>
    </div>
  );
};

const StudentList = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedYear]);

  const students = [
    { name: 'Sophia Clark', rollNo: '20210001', year: 1 },
    { name: 'Ethan Miller', rollNo: '20220002', year: 2 },
    { name: 'Olivia Davis', rollNo: '20230003', year: 3 },
    { name: 'Liam Wilson', rollNo: '20240004', year: 4 },
    { name: 'Ava Taylor', rollNo: '20210005', year: 1 },
    { name: 'Noah Anderson', rollNo: '20220006', year: 2 },
    { name: 'Isabella Thomas', rollNo: '20230007', year: 3 },
    { name: 'Jackson Jackson', rollNo: '20240008', year: 4 },
    { name: 'Mia White', rollNo: '20210009', year: 1 },
    { name: 'Aiden Harris', rollNo: '20220010', year: 2 },
  ];

  const years = ['All', '1st Year', '2nd Year', '3rd Year', '4th Year'];
  const recordsPerPage = isMobile ? 20 : 60;

  // Map year labels to numbers
  const yearMap = {
    'All': 'All',
    '1st Year': 1,
    '2nd Year': 2,
    '3rd Year': 3,
    '4th Year': 4
  };

  const filteredStudents =
    selectedYear === 'All'
      ? students
      : students.filter((student) => student.year === yearMap[selectedYear]);

  const totalPages = Math.ceil(filteredStudents.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const displayedStudents = filteredStudents.slice(startIndex, endIndex);

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Students</h1>

      <div className={styles.filterBar}>
        <span className={styles.filterLabel}>Filter by year:</span>
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={selectedYear === year ? styles.filterButtonActive : styles.filterButton}
          >
            {year}
          </button>
        ))}
      </div>

      <div className={isMobile ? styles.grid : styles.gridDesktop}>
        {displayedStudents.map((student) => (
          <StudentCard key={student.rollNo} name={student.name} rollNo={student.rollNo} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={currentPage === 1 ? styles.pageButtonDisabled : styles.pageButton}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            onMouseEnter={(e) => {
              if (currentPage !== 1) e.target.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 1) e.target.style.backgroundColor = 'white';
            }}
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
            onMouseEnter={(e) => {
              if (currentPage !== totalPages) e.target.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              if (currentPage !== totalPages) e.target.style.backgroundColor = 'white';
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentList;