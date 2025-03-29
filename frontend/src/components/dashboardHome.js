import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {
    primary: {
      main: '#065F89',
    },
    secondary: {
      main: '#FF9A5C',
    },
    success: {
      main: '#5cff9a',
    },
    info: {
      main: '#9a5cff',
    },
  },
});

export default function DashboardHome({isDefault = false}) {
  const [open, setOpen] = React.useState(false);
  const [playerName, setPlayerName] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log('Player Name:', playerName);
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isDefault && <ResponsiveAppBar />}  {/* Only show when isDefault is true */}

      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Box 1: Compare Players */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 6
              }
            }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <BarChartIcon color="secondary" sx={{ fontSize: 60, mb: 2 }} />
                <Typography gutterBottom variant="h5" component="h2">
                  Compare Players
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Analyze and compare player statistics side by side
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Compare Now
              </Button>
            </Card>
          </Grid>

          {/* Box 2: Search Player */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 6
              }
            }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <PersonSearchIcon color="info" sx={{ fontSize: 60, mb: 2 }} />
                <Typography gutterBottom variant="h5" component="h2">
                  Search Player
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Find detailed information about any player
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="info"
                fullWidth
                sx={{ mt: 2 }}
              >
                Search Now
              </Button>
            </Card>
          </Grid>

          {/* Box 3: Add Player */}
          <Grid item xs={12} md={4}>
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 6
              }
            }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <PersonAddAlt1Icon color="success" sx={{ fontSize: 60, mb: 2 }} />
                <Typography gutterBottom variant="h5" component="h2">
                  Add Player
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Add new players to your database
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleClickOpen}
              >
                Add Player
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Dialog for Adding Player */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ color: theme.palette.primary.main }}>
          Add Player
        </DialogTitle>
        <DialogContent sx={{
          '& .MuiTextField-root': {
            '& label': { color: theme.palette.primary.main },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: theme.palette.primary.main },
              '&:hover fieldset': { borderColor: theme.palette.primary.main },
              '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
            },
            '& .MuiInputBase-input': { color: theme.palette.primary.main },
          },
        }}>
          <TextField
            autoFocus
            margin="dense"
            id="playerName"
            label="Player Name"
            type="text"
            fullWidth
            variant="outlined"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} sx={{ color: theme.palette.primary.main }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {isDefault && <Footer />}  {/* Only show when isDefault is true */}
    </ThemeProvider>
  );
}