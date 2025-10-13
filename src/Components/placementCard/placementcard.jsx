import { Avatar, Box, Button, Card, CardActionArea, CardContent, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Grid } from "@mui/material";
import { useState } from "react";

export function Placementcard({
  logo,
  company,
  role,
  name,
  location,
  year,
  salary,
  jobtype,
  cgpa,
  rollno,
  specialisation
}){
    const [open,setopen]=useState(false);
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
      <CardActionArea onClick={()=>{setopen(true)}}>
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
      </CardActionArea>
    </Card>
     <Dialog
          open={open}
          onClose={()=>{setopen(false)}}
          maxWidth="md" 
          fullWidth
          PaperProps={{
            sx: { borderRadius: 3, p: 2 },
          }}
        >
          {/* Header */}
          <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={logo}
              alt="Microsoft"
              style={{ width: 35 }}
            />
            <Box flexGrow={1}>
              <Typography variant="h6" fontWeight="bold">
                {company}
              </Typography>
              <Typography variant="subtitle1"  color="text.secondary">
                {role}
              </Typography>
            </Box>
            <IconButton onClick={()=>{setopen(false)}} size="small">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
    
          <Divider />
    
          <DialogContent>
            {/* Student Details */}
            <Box sx={{ backgroundColor: "#f5f9fb", p: 2, borderRadius: 2, mb: 2 }}>
              <Stack direction="row" spacing={1}>
              <WorkspacePremiumIcon />
              <Typography fontWeight="bold" mb={1}>
                Student Details
              </Typography>
              </Stack>
              <Grid container rowSpacing={10} columnSpacing={20} sx={{padding:"1rem"}}>
            <Grid item xs={6} >
               <Stack  sx={{padding:"0.5rem"}}>
                <Typography variant="body1" sx={{color:"grey"}}>
                  Name
                </Typography>
                <Typography sx={{fontWeight:"bold"}}>
                  {name}
                </Typography>
              </Stack >
               <Stack sx={{padding:"0.5rem"}}>
                <Typography variant="body1" sx={{color:"grey"}}>
                  CGPA
                </Typography>
                <Typography sx={{fontWeight:"bold"}}>
                  {cgpa}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
             
              <Stack sx={{padding:"0.5rem"}}>
                <Typography variant="body1" sx={{color:"grey"}}>
                  Roll Number
                </Typography>
                <Typography sx={{fontWeight:"bold"}}>
                 {rollno}
                </Typography>
              </Stack>
              <Stack sx={{padding:"0.5rem"}}>
                <Typography variant="body1" sx={{color:"grey"}}>
                  Specialization
                </Typography>
                <Typography sx={{fontWeight:"bold"}}>
                  {specialisation}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

       
    
            {/* Placement Information */}
            <Box mb={2}>
              <Typography fontWeight="bold" mb={1}>
                Placement Information
              </Typography>
              <Grid container spacing={15}  sx={{padding:"1rem"}}>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <AttachMoneyIcon color="success" fontSize="medium" />
                <Stack sx={{padding:"0.5rem"}}>
                <Typography variant="body1" sx={{color:"grey"}}>Package</Typography>
                <Typography variant="body1" color="green" sx={{fontWeight:700}}>
                 {salary}
                </Typography>
                </Stack>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <CalendarTodayIcon  color="error" fontSize="medium" />
                <Stack sx={{padding:"0.5rem"}}>
                <Typography variant="body1" sx={{color:"grey"}}>Placement Year</Typography>
                <Typography variant="body1" sx={{fontWeight:"bold"}}>{year}</Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOnIcon fontSize="medium" />
                <Stack sx={{padding:"0.5rem"}}>
                 <Typography variant="body1" sx={{color:"grey"}}>Location</Typography>
                <Typography variant="body1" sx={{fontWeight:"bold"}}>{location}</Typography>
                </Stack>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <WorkIcon color="info" fontSize="medium" />
                <Stack sx={{padding:"0.5rem"}}>
                 <Typography variant="body1" sx={{color:"grey"}}>Job Type</Typography>
                <Typography variant="body1" sx={{fontWeight:"bold"}}>{jobtype}</Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
            </Box>
    
            {/* Key Skills */}
            <Box mb={2}>
              <Typography fontWeight="bold" mb={1}>
                Key Skills
              </Typography>
              <Box display="flex" gap={1} flexWrap="wrap">
                {["Python", "PyTorch", "Computer Vision", "OpenCV", "C++"].map(
                  (skill) => (
                    <Chip key={skill} label={skill} variant="outlined" sx={{ color: "#052517ff", backgroundColor: "#d3faf5ff" }} />
                  )
                )}
              </Box>
            </Box>
    
            {/* Quote / Remark */}
            <Box
              sx={{
                backgroundColor: "#ffecec",
                borderRadius: 2,
                p: 2,
                fontStyle: "italic",
              }}
            >
              “Outstanding contribution to research projects and published papers
              during undergraduate studies.”
            </Box>
          </DialogContent>
          <DialogActions>
              <Button
                        component="a"
                        href="https://www.linkedin.com/in/naveenkumar0320/"
                        startIcon={<LinkedInIcon sx={{ px: "0.5rem" }} />}
                        variant="contained"
                        sx={{
                            backgroundColor: "#3885f8ff",
                            textTransform: "none",
                            padding: "0.2rem 0.5rem",
                            "& .MuiButton-startIcon > *": { fontSize: "35px !important" },
                        }}
                    >
                        Linkedin
                    </Button>
          </DialogActions>
        </Dialog>
        </>
    );
}