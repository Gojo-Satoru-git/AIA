import { Box, Skeleton } from "@mui/material";
import styles from "./Top.module.css";
import styles1 from "./Courses.module.css";
import styles2 from "./Officers.module.css";
export function Loading(){
    const skeletons = [1, 2, 3];
    return(
        <>
       <section className={styles.section}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
     
        <Skeleton variant="text" width="80%" height={80} />
      
    
        <Skeleton variant="text" width="60%" height={60} />
      
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
        <Skeleton variant="rectangular" width="80%" height={300} />
        <Skeleton variant="text" width="20%" height={50} />
        <Skeleton variant="text" width="80%" height={40} />
      </Box>
    </section>
    <div className={styles1.container}>
      <div className={styles1.grid}>
        {skeletons.map((index) => (
          <div key={index} className={styles1.courseCard}>
            {/* Icon Placeholder */}
            <Box className={styles1.iconContainer}>
              <Skeleton variant="circular" width={80} height={80} />
            </Box>

            {/* Title Placeholder */}
            <Skeleton
              variant="text"
              width="70%"
              height={40}
              sx={{ marginBottom: "0.75rem" }}
            />

            {/* Description Placeholder */}
            <Skeleton
              variant="text"
              width="90%"
              height={25}
              sx={{ marginBottom: "1rem" }}
            />
            <Skeleton
              variant="text"
              width="80%"
              height={25}
              sx={{ marginBottom: "1.5rem" }}
            />

            {/* Topics List Placeholder */}
            <Box sx={{ width: "100%", padding: "0 1rem", marginBottom: "2rem" }}>
              {[1, 2, 3, 4].map((t) => (
                <Skeleton
                  key={t}
                  variant="text"
                  width={`${70 + Math.random() * 20}%`}
                  height={20}
                  sx={{ marginBottom: "0.75rem" }}
                />
              ))}
            </Box>

            {/* Button Placeholder */}
            <Skeleton
              variant="rounded"
              width="50%"
              height={50}
              sx={{ borderRadius: "0.75rem" }}
            />
          </div>
        ))}
      </div>
    </div>
    <div className={styles2.container}>
      {/* Header Skeleton */}
      <div className={styles2.header}>
        <h1 className={styles2.title}>
          <Skeleton variant="text" width="60%" height={60} />
        </h1>
        <p className={styles2.description}>
          <Skeleton variant="text" width="80%" height={40} />
        </p>
      </div>

      {/* Grid Skeletons */}
      <div className={styles2.grid}>
        {skeletons.map((i) => (
          <div key={i} className={styles2.card}>
            {/* Profile Image Placeholder */}
            <Box className={styles2.profileImageContainer}>
              <Box className={styles2.profileImage}>
                <Skeleton
                  variant="circular"
                  width={120}
                  height={120}
                  sx={{ margin: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  marginTop: "0.75rem",
                }}
              >
                <Skeleton variant="circular" width={32} height={32} />
                <Skeleton variant="circular" width={32} height={32} />
              </Box>
            </Box>

            {/* Name & Position */}
            <Skeleton
              variant="text"
              width="60%"
              height={30}
              sx={{ marginBottom: "0.5rem" }}
            />
            <Skeleton
              variant="rounded"
              width="40%"
              height={25}
              sx={{ marginBottom: "1rem", borderRadius: "9999px" }}
            />

            {/* Description Placeholder */}
            <Skeleton
              variant="text"
              width="90%"
              height={20}
              sx={{ marginBottom: "0.5rem" }}
            />
            <Skeleton
              variant="text"
              width="85%"
              height={20}
              sx={{ marginBottom: "0.5rem" }}
            />
            <Skeleton
              variant="text"
              width="80%"
              height={20}
              sx={{ marginBottom: "1rem" }}
            />
          </div>
        ))}
      </div>
    </div>
   </>
    );
}