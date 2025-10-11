import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
export function Placementcard({logo,company,role,name,location,year,salary}){
    
    return (
        <>
        <Card
      sx={{

        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        },
        
      }}
    >
      <CardContent>
        {/* Header Section */}
        <Box display="flex" alignItems="center" mb={1.5} >
            <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: 3, // rounded corners
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)", // soft shadow
         "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        },
      
      }}
    >
      <img
        src={logo}
        alt="company logo"
        style={{
          width: "80%",
          height: "80%",
          objectFit: "contain", // keeps logo proportions
        }}
      />
    </Box>
          <Box sx={{  padding:"1rem"}}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#004d40" }}>
             {company}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
              {role}
            </Typography>
          </Box>
        </Box>

        {/* Name */}
        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
          {name}
        </Typography>

        {/* Location & Year */}
        <Box sx={{display:"flex",justifyContent:"space-between"}} >
        <Box
          display="flex"
          alignItems="center"
          sx={{ color: "text.secondary", mb: 0.5 }}
        >
          <LocationOnOutlinedIcon sx={{ fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2">{location}</Typography>
          <CalendarTodayOutlinedIcon sx={{ fontSize: 16, ml: 2, mr: 0.5 }} />
          <Typography variant="body2">{year}</Typography>
        </Box>

        {/* Salary */}
        <Typography
          variant="h6"
          sx={{ color: "green", fontWeight: 700, mt: 1 }}
        >
          {salary}
        </Typography>
        </Box>
      </CardContent>
    </Card>
        </>
    );
}