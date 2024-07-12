import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function GoalkeepingContainer({shotsfaced, savesmade, savesmade_in_box, savesmade_out_box, save_per, penalties_faced, penalties_saved}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh'}}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%"}}>
          <Typography variant="h4" gutterBottom>Goalkeeping</Typography>
          <Grid container spacing={2} direction="column">
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shots Faced: {shotsfaced?shotsfaced: "N/A"}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Saves Made: {savesmade?savesmade: "N/A"}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Saves Made From Inside Box: {savesmade_in_box?savesmade_in_box: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Saves Made From Outside Box: {savesmade_out_box?savesmade_out_box: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Saves Percentage %: {save_per?save_per: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Penalties Faced: {penalties_faced?penalties_faced: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Penalties Saved: {penalties_saved?penalties_saved: 'N/A'}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}


