import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ResponsiveAppBar from './Header';
import Footer from './footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#065F89', // Primary blue color
    },
    secondary: {
      main: '#FF9A5C', // Complementary orange color for Radar Chart
    },
    success: {
      main: '#5cff9a', // Emerald green color for "Add Player" button
    },
    info: {
      main: '#9a5cff', // Custom color for "Search Player" button
    },
  },
});

export default function DashboardHome() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      
      <Container
        maxWidth="lg"
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh', 
          mt: 4, 
          mb: 4 
        }}
      >
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {/* Row 1: Radar Chart and Search Player */}
          <Grid container item spacing={2}>
            {/* Radar Chart Button (1/2 of the page) */}
            <Grid item xs={12} md={8}>
              <Button
                variant="contained"
                color="secondary" // Using the complementary orange color
                startIcon={<BarChartIcon />}
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '400px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.5rem',
                }}
              >
                Compare Players
              </Button>
            </Grid>

            {/* Search Player Button (1/4 of the page) */}
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                color="info" // Using the custom purple color
                startIcon={<PersonSearchIcon />}
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '250px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.5rem',
                }}
              >
                Search Player
              </Button>
            </Grid>
          </Grid>

          {/* Row 2: Add Player */}
          <Grid container item spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="success" // Using the emerald green color
                startIcon={<PersonAddAlt1Icon />}
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.5rem',
                }}
              >
                Add Player
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      
      <Footer />
    </ThemeProvider>
  );
}
