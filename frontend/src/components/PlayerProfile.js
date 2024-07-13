import * as React from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import StatsTabs from './StatsTab';

const PlayerProfile = ({ name, age, position, email, phonenumber, nationality, academy, photoUrl, Appearances, gamestarts, minutesplayed }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <Box sx={{ maxWidth: 1000, margin: 'auto', marginTop: 7, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontFamily: 'poppins-regular'}}>
        {/* Avatar Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Avatar sx={{ width: 180, height: 180, backgroundColor: '#065F89' }}>
            {photoUrl ? (
              <img src={photoUrl} alt={`${name}'s photo`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            ) : (
              <AccountCircleIcon sx={{ fontSize: 180 }} />
            )}
          </Avatar>
          <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'center', color: '#065F89' }}>{name ? name : "Name"}</Typography>
        </Box>

        {/* Biography Section */}
        <Grid>
          <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'center', color: '#065F89' }}>Biography</Typography>
          <Box component="section" sx={{ p: 2, border: '1px solid #065F89', marginBottom: 2, backgroundColor: '#065F89', color: "whitesmoke", borderRadius: 4, width: '100%' }}>
            <Grid container spacing={4} sx={{ padding: 1, position: 'relative' }}>
              {/* First Column: Age, Playstyle, Appearances */}
              <Grid item xs={12} sm={4}>
                <Grid sx={{ textAlign: 'center' }}>
                  <Typography variant="body2">Age:</Typography>
                  <Typography variant="body5">{age ? age : 'N/A'}</Typography>
                </Grid>
                <Grid sx={{ textAlign: 'center', marginTop: 2 }}>
                  <Typography variant="body2">Position:</Typography>
                  <Typography variant="body5">{position ? position : 'N/A'}</Typography>
                </Grid>
                <Grid sx={{ textAlign: 'center', marginTop: 2 }}>
                  <Typography variant="body2" >Appearances:</Typography>
                  <Typography variant="body5" >{Appearances ? Appearances : 'N/A'}</Typography>
                </Grid>
              </Grid>

              {/* Second Column: Position, Nationality, Game Starts */}
              <Grid item xs={12} sm={4}>
                <Grid sx={{ textAlign: 'center' }}>
                  <Typography variant="body2">Tel.:</Typography>
                  <Typography variant="body5">{phonenumber ? phonenumber : 'N/A'}</Typography>
                </Grid>
                <Grid sx={{ textAlign: 'center', marginTop: 2 }}>
                  <Typography variant="body2">Nationality:</Typography>
                  <Typography variant="body5">{nationality ? nationality : 'N/A'}</Typography>
                </Grid>
                <Grid sx={{ textAlign: 'center', marginTop: 2 }}>
                  <Typography variant="body2" >Game Starts: {gamestarts}</Typography>
                  <Typography variant="body5">{gamestarts ? gamestarts : 'N/A'}</Typography>
                </Grid>
              </Grid>

              {/* Third Column: Specified Position, Academy/School, Minutes Played */}
              <Grid item xs={12} sm={4}>
                <Grid sx={{ textAlign: 'center' }}>
                  <Typography variant="body2">Email:</Typography>
                  <Typography variant="body5">{email ? email : 'N/A'}</Typography>
                </Grid>
                <Grid sx={{ textAlign: 'center', marginTop: 2 }}>
                  <Typography variant="body2">Academy/School:</Typography>
                  <Typography variant="body5">{academy ? academy : 'N/A'}</Typography>
                </Grid>
                <Grid sx={{ textAlign: 'center', marginTop: 2, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="hbody2" >Minutes:</Typography>
                  <Typography variant="body5">{minutesplayed ? minutesplayed : 'N/A'}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
      <StatsTabs />
      <Footer />
    </div>
  );
};

export default PlayerProfile;
