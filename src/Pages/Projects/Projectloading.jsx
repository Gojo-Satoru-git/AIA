import { Box, Skeleton } from "@mui/material";

export function Projectloading(){
    return(
        <>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Skeleton variant="text" width="30%" height={80} />
            <Skeleton variant="text" width="60%" height={60} />
      </Box>
        </>
    );
}