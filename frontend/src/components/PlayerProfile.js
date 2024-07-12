import * as React from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ResponsiveAppBar from './Header';

const PlayerProfile = ({ name, age, position, email, phonenumber, nationality, academy, photoUrl, Appearances, gamestarts, minutesplayed }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <Box sx={{ maxWidth: 1000, margin: 'auto', marginTop: 7, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontFamily: 'poppins-regular'}}>
      {/* Avatar Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Avatar sx={{ width: 180, height: 180, backgroundColor: '#2b9348' }}>
          {photoUrl ? (
            <img src={photoUrl} alt={`${name}'s photo`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          ) : (
            <AccountCircleIcon sx={{ fontSize: 180 }} />
          )}
        </Avatar>
        <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'center', color: '#2b9348' }}>{name ? name : "Name"}</Typography>
      </Box>

      {/* Biography Section */}
      <Grid>
        <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'center', color: '#2b9348' }}>Biography</Typography>
        <Box component="section" sx={{ p: 2, border: '1px solid #2b9348', marginBottom: 2, backgroundColor: '#2b9348', color: "whitesmoke", borderRadius: 4, width: '100%', maxwidth: '100%', textOverflow: 'ellipsis'}}>
          <Grid container spacing={4} sx={{ padding: 1, position: 'relative' }}>
            {/* First Column: Age, Playstyle, Appearances */}
            <Grid item xs={12} sm={4}>
              <Grid sx={{textAlign: 'center'}}>
              <Typography variant="h6">Age:</Typography>
              <Typography variant="body1">{age?age: 'N/A'}</Typography>
              </Grid>
              <Grid sx={{textAlign: 'center',  marginTop: 2}}>
              <Typography variant="h6">Position:</Typography>
              <Typography variant="body1">{position?position: 'N/A'}</Typography>
              </Grid>
              <Grid sx={{textAlign: 'center',  marginTop: 2}}>
              <Typography variant="h6" >Appearances:</Typography>
              <Typography variant="body1" >{Appearances?Appearances: 'N/A'}</Typography>
              </Grid>
              
            </Grid>

            {/* Second Column: Position, Nationality, Game Starts */}
            <Grid item xs={12} sm={4}>
              <Grid sx={{textAlign: 'center'}}>
              <Typography variant="h6">Phone Number:</Typography>
              <Typography variant="body1">{phonenumber?phonenumber: 'N/A'}</Typography>
              </Grid>
              <Grid sx={{textAlign: 'center', marginTop: 2}}>
              <Typography variant="h6">Nationality:</Typography>
              <Typography variant="body1">{nationality?nationality: 'N/A'}</Typography>
              </Grid>
              <Grid sx={{textAlign: 'center', marginTop: 2}}>
              <Typography variant="h6" >Game Starts: {gamestarts}</Typography>
              <Typography variant="body1">{gamestarts?gamestarts: 'N/A'}</Typography>
              </Grid>
              
            </Grid>

            {/* Third Column: Specified Position, Academy/School, Minutes Played */}
            <Grid item xs={12} sm={4}>
              <Grid sx={{textAlign: 'center'}}>
              <Typography variant="h6">Email:</Typography>
              <Typography variant="body1">{email?email: 'N/A'}</Typography>
              </Grid>
              
              <Grid sx={{textAlign: 'center', marginTop: 2}}>
              <Typography variant="h6">Academy/School:</Typography>
              <Typography variant="body1">{academy ? academy : 'N/A'}</Typography>
              </Grid>
              <Grid sx={{textAlign: 'center', marginTop: 2}}>
              <Typography variant="h6" >Minutes Played:</Typography>
              <Typography variant="body1">{minutesplayed?minutesplayed: 'N/A'}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
    </div>
    
  );
};

export default PlayerProfile;
