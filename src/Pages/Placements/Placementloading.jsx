import React from 'react';
import { Box, Grid, Skeleton } from '@mui/material';

export  function PlacementLoading({ count = 6 }) {
  return (
    <>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
     
        <Skeleton variant="text" width="30%" height={80} />
      
    
        <Skeleton variant="text" width="60%" height={60} />
      
      </Box>
   <Grid container spacing={2} sx={{ p: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 2,
              p: 2,
            }}
          >
            {/* Image placeholder */}
            <Skeleton
              variant="rectangular"
              height={130}
              width="25rem"
              animation="wave"
              sx={{ borderRadius: 2 }}
            />

            {/* Text placeholders */}
            <Box sx={{ pt: 2 }}>
              <Skeleton width="60%" height={25} />
              <Skeleton width="40%" height={20} />
              <Skeleton width="80%" height={20} />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
    </>
  );
}
