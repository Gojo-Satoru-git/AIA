import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Grid,
  Chip,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function PlacementDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3, p: 2 },
      }}
    >
      {/* Header */}
      <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
          alt="Microsoft"
          style={{ width: 35 }}
        />
        <Box flexGrow={1}>
          <Typography variant="h6" fontWeight="bold">
            Microsoft
          </Typography>
          <Typography variant="body2" color="text.secondary">
            AI Research Engineer
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      <DialogContent>
        {/* Student Details */}
        <Box sx={{ backgroundColor: "#f5f9fb", p: 2, borderRadius: 2, mb: 2 }}>
          <Typography fontWeight="bold" mb={1}>
            Student Details
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Name:</strong> David Chen
              </Typography>
              <Typography variant="body2">
                <strong>CGPA:</strong> 9.0
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                <strong>Roll Number:</strong> AI2021002
              </Typography>
              <Typography variant="body2">
                <strong>Specialization:</strong> Computer Vision
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Placement Information */}
        <Box mb={2}>
          <Typography fontWeight="bold" mb={1}>
            Placement Information
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <AttachMoneyIcon color="success" fontSize="small" />
                <Typography variant="body2" color="green">
                  $115K
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <CalendarTodayIcon fontSize="small" />
                <Typography variant="body2">2024</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">Redmond, WA</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <WorkIcon fontSize="small" />
                <Typography variant="body2">Full-time</Typography>
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
                <Chip key={skill} label={skill} variant="outlined" />
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
    </Dialog>
  );
}
