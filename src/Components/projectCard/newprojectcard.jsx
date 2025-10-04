import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import CircleIcon from '@mui/icons-material/Circle';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
export function Newprojectcard({ image, title, decs, year, nos, tech, feature }) {
    const [details, setdetails] = useState(false)
    return (
        <>
            <Card sx={{
                maxWidth: "30rem", borderRadius: "10px", transition: "all 0.3s ease-in-out", "&:hover": {
                    transform: "translateY(-5px) scale(1.05)", // lift & zoom
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)", 
                     // shadow effect
                },
            }}>
                <CardActionArea onClick={() => setdetails(true)}>
                    <CardMedia component='img' image={image} alt="project-img" sx={{ maxHeight: 200, width: "100%", }} />
                    <CardContent sx={{ padding: 2 }}>
                        <Typography variant="body1" sx={{ fontWeight: "bold", "&:hover": { color: "red" } }}>{title}</Typography>
                        <Typography variant="caption" sx={{ color: "diasbled" }}>{decs}</Typography>
                        <Stack spacing={1} direction="row" sx={{ padding: "0.5rem 0rem" }}>
                            <Stack spacing={0.5} direction="row" >
                                <CalendarTodayOutlinedIcon sx={{ fontSize: 16 }} color="disabled" />
                                <Typography variant="caption" sx={{ color: "grey" }}>{year}</Typography>
                            </Stack>
                            <Stack spacing={0.5} direction="row">
                                <PeopleAltOutlinedIcon sx={{ fontSize: 16 }} color="disabled" />
                                <Typography variant="caption" sx={{ color: "grey" }}>{nos} researches</Typography>
                            </Stack>
                        </Stack>

                    </CardContent>

                </CardActionArea>
            </Card>
            <Dialog open={details} onClose={() => { setdetails(false) }} fullWidth maxWidth="md">
                <DialogTitle>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>{title}</Typography>
                        <IconButton onClick={() => { setdetails(false) }}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={1} direction="row" sx={{ padding: "0.5rem 0rem" }}>
                        <Stack spacing={0.5} direction="row" >
                            <CalendarTodayOutlinedIcon sx={{ fontSize: 18 }} color="disabled" />
                            <Typography variant="subtitle2" sx={{ color: "grey" }}>{year}</Typography>
                        </Stack>
                        <Stack spacing={0.5} direction="row">
                            <PeopleAltOutlinedIcon sx={{ fontSize: 18 }} color="disabled" />
                            <Typography variant="subtitle2" sx={{ color: "grey" }}>{nos} researches</Typography>
                        </Stack>
                    </Stack>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img
                            src={image}
                            alt="Complaint attachment preview"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                borderRadius: "10px",

                            }}
                        />
                    </Box>
                    <Stack>
                        <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, mb: 1 }}>Technologies Used</Typography>
                        <Stack spacing={1} direction="row">
                            {tech.map((item) => {
                                return <Chip label={item} sx={{ color: "#052517ff", backgroundColor: "#d3faf5ff" }} />
                            })}
                        </Stack>
                    </Stack>

                    <Stack>
                        {/* Project Overview Heading */}
                        <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, mb: 1 }} gutterBottom>
                            Project Overview
                        </Typography>

                        {/* Paragraphs */}
                        <Typography variant="body1" paragraph>
                            This cutting-edge project combines deep learning, computer vision, and robotics to
                            create a comprehensive autonomous vehicle navigation system. The system processes
                            input from multiple sensors including cameras, LIDAR, and radar to create a detailed
                            understanding of the vehicle's environment.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            Our approach uses state-of-the-art convolutional neural networks for real-time object
                            detection and classification, while implementing advanced path planning algorithms
                            that can adapt to dynamic traffic conditions. The system has been tested in various
                            weather conditions and demonstrates remarkable performance in both urban and highway
                            environments.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            The project contributes to the future of transportation by making autonomous vehicles
                            safer and more reliable, potentially reducing traffic accidents and improving overall
                            road safety.
                        </Typography>

                        {/* Key Features Heading */}
                        <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, mb: 1 }}>
                            Key Features
                        </Typography>

                        {/* Key Features List */}
                        <List>
                            {feature.map((feature, index) => (
                                <ListItem key={index} disableGutters sx={{ paddingTop: 0, paddingBottom: 1, paddingLeft: 0, paddingRight: 0, paddingY: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 16, paddingRight: 1 }} >
                                        <CircleIcon sx={{ fontSize: 8, color: "#2CA6A4" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={feature} sx={{
                                        margin: 0,
                                        padding: 0
                                    }} />
                                </ListItem>
                            ))}
                        </List>
                    </Stack>


                </DialogContent>
                <DialogActions sx={{ display: "flex", justifyContent: "flex-start", p: "1rem", gap: "0.5rem" }}>

                    <Button
                        component="a"
                        href="https://github.com/Naveen032006"
                        startIcon={<GitHubIcon sx={{ px: "0.5rem" }} />}
                        variant="contained"
                        sx={{
                            backgroundColor: "#fa443bff",
                            textTransform: "none",
                            padding: "0.2rem 0.5rem",
                            "& .MuiButton-startIcon > *": { fontSize: "35px !important" },
                        }}
                    >
                        View Code
                    </Button>                   
                     <Button component="a" href="https://github.com/Naveen032006" startIcon={<OpenInNewIcon sx={{ paddingLeft: "0.5rem", paddingRight: ".5rem" }} />} variant="outlined" sx={{
      color: "black",
      textTransform: "none",
      padding: "0.2rem 0.5rem",
      "& .MuiButton-startIcon > *": { fontSize: "35px !important" },
    }}>Live Demo</Button>

                </DialogActions>

            </Dialog>
        </>
    );
}