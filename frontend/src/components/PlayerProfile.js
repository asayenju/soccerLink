import * as React from 'react';
import { Box, Avatar, Typography, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PlayerProfile = ({ name, age, position, specifiedPosition, playstyle, nationality, academy, photoUrl, Appearances, gamestarts, minutesplayed }) => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', marginTop: 7, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      {/* Avatar Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: 2, marginRight: 20}}>
        <Avatar sx={{ width: 180, height: 180, backgroundColor: '#2b9348', marginTop: 4 }}>
          {photoUrl ? (
            <img src={photoUrl} alt={`${name}'s photo`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          ) : (
            <AccountCircleIcon sx={{ fontSize: 180 }} />
          )}
        </Avatar>
        <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'center' }}>{name ? name : "Name"}</Typography>
      </Box>

      {/* Biography Section */}
      <Grid>
        <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'center' }}>Biography</Typography>
        <Box component="section" sx={{ p: 2, border: '1px solid #2b9348', marginBottom: 2, borderRadius: 4, width: '100%' }}>
          <Grid container spacing={4} sx={{ padding: 1 }}>
            {/* First Column: Age, Playstyle, Appearances */}
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">Age: {age}</Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>Playstyle: {playstyle ? playstyle: "Not Available heheh"}</Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>Appearances: {Appearances}</Typography>
            </Grid>

            {/* Second Column: Position, Nationality, Game Starts */}
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">Position: {position}</Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>Nationality: {nationality}</Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>Game Starts: {gamestarts}</Typography>
            </Grid>

            {/* Third Column: Specified Position, Academy/School, Minutes Played */}
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">Specified Position: {specifiedPosition}</Typography>
              <Box sx={{ display: 'flex', marginTop: 2 }}>
                <Typography variant="body1">Academy/School: {academy ? academy : 'Not Available'}</Typography>
              </Box>
              <Typography variant="body1" sx={{ marginTop: 2 }}>Minutes Played: {minutesplayed}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default PlayerProfile;
