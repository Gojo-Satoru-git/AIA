import React, { useMemo, useState } from 'react';
import styles from './Placements.module.css';
import placementsData from '../../server/data/placements.json';
import { Box, Typography } from '@mui/material';
import { Placementcard } from '../../Components/placementCard/placementcard';
const PAGE_SIZE_OPTIONS = [6, 9, 12];
export default function Placements() {
  const PLACEMENTS = useMemo(
    () => (Array.isArray(placementsData) ? placementsData : []),
    [],
  );
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);

  const total = PLACEMENTS.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  if (page > totalPages) setPage(totalPages);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return PLACEMENTS.slice(start, start + pageSize);
  }, [page, pageSize, PLACEMENTS]);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Box
          sx={{
            textAlign: 'center',
            p: 2,
          }}
        >
          <h1>Placements</h1>
          <Typography
            variant="h6"
            sx={{ maxWidth: '700px', mx: 'auto', color: '#03353c' }}
          >
            Discover our students' success stories and their journey to top-tier
            companies in the AI industry
          </Typography>
        </Box>
        <div className={styles.grid}>
          {pageItems.map((p) => (
            <Placementcard
              key={`${p.company}-${p.name}`}
              logo={p.logo}
              company={p.company}
              role={p.role}
              name={p.name}
              location={p.location}
              year={p.year}
              salary={p.salary}
            />
          ))}
        </div>

        {selected && (
          <div className={styles.overlay} onClick={() => setSelected(null)}>
            <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.close}
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className={styles.dialogGrid}>
                <div
                  className={styles.dialogImage}
                  style={{
                    backgroundImage: selected.image
                      ? `url(${selected.image})`
                      : undefined,
                  }}
                />
                <div className={styles.dialogBody}>
                  <h3 className={styles.company}>{selected.company}</h3>
                  <p className={styles.meta}>Student: {selected.student}</p>
                  <p className={styles.meta}>Package: {selected.package}</p>
                  <p className={styles.description}>
                    More details will be added here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.pager}>
        <button
          className={styles.iconBtn}
          onClick={prev}
          disabled={page === 1}
          aria-label="Previous"
        >
          {' '}
          ‹{' '}
        </button>

        <div className={styles.pageList}>
          {Array.from({ length: totalPages }).map((_, i) => {
            const p = i + 1;
            return (
              <button
                key={p}
                className={`${styles.pageBtn} ${
                  p === page ? styles.active : ''
                }`}
                onClick={() => setPage(p)}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </button>
            );
          })}
        </div>

        <button
          className={styles.iconBtn}
          onClick={next}
          disabled={page === totalPages}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className={styles.pageSizeRow}>
        <label className={styles.pageSizeLabel}>
          Show
          <select
            className={styles.pageSizeSelect}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
          >
            {PAGE_SIZE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          per page
        </label>
      </div>
    </main>
  );
}
