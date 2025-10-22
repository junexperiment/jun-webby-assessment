'use client';
import { Typography, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/*Bordered Heading Home Dashboard */}
      <Box
        sx={{
          border: '2px solid #1976d2',       // Show the Blue border
          borderRadius: 2,                   // For the Rounded corners
          padding: 2,                        // Make Space inside the box
          display: 'inline-block',           // Keeps border tight around text
          backgroundColor: '#0d47a1',        // Royal blue colour background
          color: '#e3f2fd',                  // Light blue colout text
        }}
      >
        <Typography variant="h2">Home Dashboard</Typography>
      </Box>

      {/* Welcome Text to show  */}
      <Typography variant="h4" sx={{ color: '#bbdefb' }}>
        Welcome to Webby Task Management System.
      </Typography>

      {/* Goal Overview Section */}
      <Box>
        <Typography variant="h6" sx={{ color: '#e3f2fd', mb: 1 }}>
          Goal Overview
        </Typography>
        <Typography variant="body2" sx={{ color: '#bbdefb' }}>
          Keep your goals visible and your tasks moving forward. Use the Task Tracker to manage your items!
        </Typography>
      </Box>
    </Box>
  );
}