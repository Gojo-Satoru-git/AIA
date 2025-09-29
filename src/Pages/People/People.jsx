import React, { useMemo, useState } from 'react';
import styles from './People.module.css';
import peopleData from '../../data/people.json';

const PAGE_SIZE_OPTIONS = [5, 10, 20];

const People = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const total = peopleData.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  // Ensure current page is within bounds when pageSize changes
  if (page > totalPages) setPage(totalPages);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return peopleData.slice(start, start + pageSize);
  }, [page, pageSize]);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>People</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Students</h2>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th className={styles.th}>Name</th>
                  <th className={styles.th}>Roll Number</th>
                </tr>
              </thead>
              <tbody>
                {pageItems.map((s) => (
                  <tr key={s.roll} className={styles.tr}>
                    <td className={styles.tdPrimary}>{s.name}</td>
                    <td className={styles.tdSecondary}>{s.roll}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.paginationRow}>
            <div className={styles.leftControls}>
              <span className={styles.resultsText}>
                Showing {Math.min((page - 1) * pageSize + 1, total)} to {Math.min(page * pageSize, total)} of {total} results
              </span>
            </div>

            <div className={styles.rightControls}>
              <label className={styles.pageSizeLabel}>
                Show
                <select
                  className={styles.pageSizeSelect}
                  value={pageSize}
                  onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
                >
                  {PAGE_SIZE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                per page
              </label>

              <nav className={styles.pagination} aria-label="Pagination">
                <button className={styles.iconButton} onClick={prev} disabled={page === 1} aria-label="Previous page">
                  <svg className={styles.icon} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/></svg>
                </button>

                <div className={styles.pageList}>
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const p = i + 1;
                    return (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`${styles.pageButton} ${p === page ? styles.active : ''}`}
                        aria-current={p === page ? 'page' : undefined}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>

                <button className={styles.iconButton} onClick={next} disabled={page === totalPages} aria-label="Next page">
                  <svg className={styles.icon} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
                </button>
              </nav>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Alumni</h2>
          <div className={styles.alumniBox}>
            <h3 className={styles.alumniTitle}>Coming Soon</h3>
            <p className={styles.alumniText}>We're working on showcasing our esteemed alumni. Stay tuned for updates!</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default People;
