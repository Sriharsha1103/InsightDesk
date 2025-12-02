import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        padding={4}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '4rem' } }}
        >
          404 – Page Not Found
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.25rem' } }}
        >
          Oops! You seem to be lost. The page you’re looking for doesn’t exist.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('/')}
        >
          Go Back Home
        </Button>
      </Box>
    </Container>
  );
}

export default ErrorPage;
