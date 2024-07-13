import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';

export default function GoalsContainer({goals, homegoals, awaygoals, winninggoals, nonpenaltygoals, penaltygoals, goalsfrominsidebox, goalsfromoutsidebox, rightfootgoals, leftfootgoals, headergoals, othergoals, conv_rate, goals_per_90, homegoals_per_90, awaygoals_per_90, winninggoals_per_90, nonpenaltygoals_per_90, penaltygoals_per_90, goalsfrominsidebox_per_90, goalsfromoutsidebox_per_90, rightfootgoals_per_90, leftfootgoals_per_90, headergoals_per_90, othergoals_per_90}) {
  const totalStats = (
    <>
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
          <Typography variant="b4">Goals Inside Box: {goalsfrominsidebox?goalsfrominsidebox: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Goals Outside Box: {goalsfromoutsidebox?goalsfromoutsidebox: 'N/A'}</Typography>
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
    </>
  );
  const per90Stats = (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Goals: {goals_per_90?goals_per_90: "N/A"}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Home Goals: {homegoals_per_90?homegoals_per_90: "N/A"}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Away Goals: {awaygoals_per_90?awaygoals_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Winning Goals: {winninggoals_per_90?winninggoals_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Non-penalty Goals: {nonpenaltygoals_per_90?nonpenaltygoals_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Penalty Goals: {penaltygoals_per_90?penaltygoals_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Goals Inside Box: {goalsfrominsidebox_per_90?goalsfrominsidebox_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Goals Outside Box: {goalsfromoutsidebox_per_90?goalsfromoutsidebox_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Right Foot Goals: {rightfootgoals_per_90?rightfootgoals_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Left Foot Goals: {leftfootgoals_per_90?leftfootgoals_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Header Goals: {headergoals_per_90?headergoals_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Other Goals: {othergoals_per_90?othergoals_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b4">Conversion Rate %: {conv_rate?conv_rate: 'N/A'}</Typography>
        </Grid>
      </Grid>
    </>
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh'}}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%"}}>
          <Typography variant="h4" gutterBottom>Goals</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}


