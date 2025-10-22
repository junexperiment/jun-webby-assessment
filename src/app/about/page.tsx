'use client';
import { Box, Typography, Chip } from '@mui/material';

export default function AboutPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box // border heading: creates border heading on the about us page
        sx={{
          border: '2px solid #1976d2',  
          borderRadius: 2,
          padding: 2,
          backgroundColor: '#0d47a1',
          color: '#e3f2fd',
        }}
      >
        <Typography variant="h2">About Us</Typography>
      </Box>

      <Typography variant="h4" sx={{ color: '#bbdefb' }}> 
        Author: Jun   
      </Typography>

      {/* This part is for Mission Section */}
      <Box>
        <Typography variant="h6" sx={{ color: '#e3f2fd', mb: 1 }}>
          Mission
        </Typography>
        <Typography variant="body2" sx={{ color: '#bbdefb' }}>
          To build a clean, maintainable, and user-friendly interfaces that helps users to manage thier tasks.
        </Typography>
      </Box>

      {/* This part is for Tech Stack Section */}
      <Box>
        <Typography variant="h6" sx={{ color: '#e3f2fd', mb: 1 }}>
          Tech Stack
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label="Next.js" color="primary" />
          <Chip label="TypeScript" color="primary" />
          <Chip label="Zustand" color="primary" />
          <Chip label="MUI" color="primary" />
          <Chip label="React Hook Form" color="primary" />
        </Box>
      </Box>
    </Box>
  );
}