import React, { useMemo, useState } from 'react';
import styles from './Projects.module.css';
import projectsData from '../../data/projects.json';
import { Projectcard } from '../../Components/projectCard/projectcard';

const PAGE_SIZE_OPTIONS = [6, 9, 12];

export default function Projects() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);

  const PROJECTS = useMemo(
    () => (Array.isArray(projectsData) ? projectsData : []),
    [],
  );
  const total = PROJECTS.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  if (page > totalPages) setPage(totalPages);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return PROJECTS.slice(start, start + pageSize);
  }, [page, pageSize, PROJECTS]);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Projects</h2>

        <div className={styles.grid}>
          {pageItems.map((proj, i) => (
            <Projectcard i={i} image={proj.image} title={proj.title} desc={proj.desc}/>
          ))}
        </div>

        <div className={styles.pager}>
          <button
            className={styles.iconBtn}
            onClick={prev}
            disabled={page === 1}
            aria-label="Previous"
          >
            ‹
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
      </div>
    </main>
  );
}
