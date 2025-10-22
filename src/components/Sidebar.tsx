'use client';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        height: '100vh',
        backgroundColor: '#1e1e1e',
        color: 'white',
        p: 3,
        display: 'flex',
        flexDirection: 'column',  
        gap: 3,
        borderRight: '1px solid #333',
      }}
    >
      <Typography variant="h5">Jun's Webby Assessment</Typography>
      <Link href="/" style={linkStyle}>Home Dashboard</Link>
      <Link href="/tasks" style={linkStyle}>Task Tracker</Link>
      <Link href="/about" style={linkStyle}>About Us</Link>
      <Link href="/api-list" style={linkStyle}>API List</Link>
    </Box>
  );
}

const linkStyle = {
  color: 'white',
  fontSize: '1.1rem',
  textDecoration: 'none',
  padding: '8px 0',
};