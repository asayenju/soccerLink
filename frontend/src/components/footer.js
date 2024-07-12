import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#2b9348', color: 'white', py: 3 }}>
      <Container maxWidth="xl">
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} SoccerLinks. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
