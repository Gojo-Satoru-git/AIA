import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
export function Newprojectcard({image,title,decs,year,nos}){
    return(
        <Card sx={{ maxWidth:"32rem" ,borderRadius:"10px", transition: "all 0.3s ease-in-out",  "&:hover": {
          transform: "translateY(-5px) scale(1.05)", // lift & zoom
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",   // shadow effect
        },}}>
            <CardActionArea>
                <CardMedia component='img' height="150" image={image} alt="project-img"/>
                <CardContent sx={{padding:2}}>
                    <Typography variant="body1" sx={{fontWeight:"bold" ,"&:hover":{color:"red"}}}>{title}</Typography>
                    <Typography variant="caption" sx={{color:"diasbled"}}>{decs}</Typography>
                    <Stack spacing={1} direction="row" sx={{padding:"0.5rem 0rem"}}>
                    <Stack spacing={0.5} direction="row" >
                        <CalendarTodayOutlinedIcon sx={{fontSize:16}} color="disabled"/>
                        <Typography variant="caption" sx={{color:"grey"}}>{year}</Typography>
                    </Stack>
                    <Stack spacing={0.5} direction="row">
                        <PeopleAltOutlinedIcon  sx={{fontSize:16}} color="disabled"/>
                        <Typography variant="caption" sx={{color:"grey"}}>{nos} researches</Typography>
                    </Stack>
                    </Stack>
                    
                </CardContent>
                
            </CardActionArea>
        </Card>
    );
}