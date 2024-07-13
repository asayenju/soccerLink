import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function GoalsContainer({goals, homegoals, awaygoals, winninggoals, nonpenaltygoals, penaltygoals, goalsfrominsidebox, goalsfromoutsidebox, rightfootgoals, leftfootgoals, headergoals, othergoals, conv_rate}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh'}}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%"}}>
          <Typography variant="h4" gutterBottom>Goals</Typography>
          <Grid container spacing={2} direction="column">
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Goals: {goals?goals: "N/A"}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Home Goals: {homegoals?homegoals: "N/A"}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Away Goals: {awaygoals?awaygoals: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Winning Goals: {winninggoals?winninggoals: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Non-penalty Goals: {nonpenaltygoals?nonpenaltygoals: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Penalty Goals: {penaltygoals?penaltygoals: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Goals From Inside Box: {goalsfrominsidebox?goalsfrominsidebox: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Goals From Outside Box: {goalsfromoutsidebox?goalsfromoutsidebox: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Right Foot Goals: {rightfootgoals?rightfootgoals: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Left Foot Goals: {leftfootgoals?leftfootgoals: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Header Goals: {headergoals?headergoals: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Other Goals: {othergoals?othergoals: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Conversion Rate %: {conv_rate?conv_rate: 'N/A'}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}


