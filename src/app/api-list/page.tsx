'use client';
import { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, Card, CardContent } from '@mui/material';

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export default function ApiListPage() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/github/repos?per_page=5') // this link is from github
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* This shows the blue bordered header */}
      <Box
        sx={{
          border: '2px solid #1976d2',
          borderRadius: 2,
          padding: 2,
          backgroundColor: '#0d47a1',
          color: '#e3f2fd',
        }}
      >
        <Typography variant="h2">API List</Typography>
      </Box>

      {/* this is for the Loading section */}
      {loading ? (
        <CircularProgress color="primary" />
      ) : (
        repos.map((repo) => (
          <Card key={repo.id} sx={{ backgroundColor: '#1e1e1e', color: 'white' }}>
            <CardContent>
              <Typography variant="h6">{repo.name}</Typography>
              <Typography variant="body2" sx={{ color: '#ccc', mb: 1 }}>
                {repo.description || 'No description provided.'}
              </Typography>
              <Typography
                variant="body2"
                component="a"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#90caf9', textDecoration: 'underline' }}
              >
                View on GitHub
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
}