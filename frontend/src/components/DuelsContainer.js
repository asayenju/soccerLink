import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';

export default function DuelsContainer({  takeOnsOverrun, duelsContested, tacklesMade, foulsFromTackleAttempts, lastManTacklesMade, 
    takeOnsCompleted, takeOnSuccessPercentage, foulsWon, fouls, penaltiesWon, aerialDuelsContested, 
    aerialDuelsWon, aerialDuelSuccessPercentage, groundDuelsContested, groundDuelsWon, duelsWon, 
    groundDuelSuccessPercentage, takeOnsOverrun_per_90, duelsContested_per_90, tacklesMade_per_90,
    foulsFromTackleAttempts_per_90,
    lastManTacklesMade_per_90, takeOnsCompleted_per_90, takeOnSuccessPercentage_per_90,
    foulsWon_per_90, fouls_per_90, penaltiesWon_per_90, aerialDuelsContested_per_90,
    aerialDuelsWon_per_90, aerialDuelSuccessPercentage_per_90, groundDuelsContested_per_90,
    groundDuelsWon_per_90, duelsWon_per_90, groundDuelSuccessPercentage_per_90}) {
  const totalStats = (
    <>
        <Grid container spacing={2} direction="column">
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Take-ons Overrun: {takeOnsOverrun ? takeOnsOverrun : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Duels Contested: {duelsContested ? duelsContested : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Tackles Made: {tacklesMade ? tacklesMade : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Fouls from Tackles: {foulsFromTackleAttempts ? foulsFromTackleAttempts : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Last-man Tackles Made: {lastManTacklesMade ? lastManTacklesMade : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Take-ons Completed: {takeOnsCompleted ? takeOnsCompleted : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Take-on Success %: {takeOnSuccessPercentage ? takeOnSuccessPercentage : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Fouls Won: {foulsWon ? foulsWon : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Fouls: {fouls ? fouls : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Penalties Won: {penaltiesWon ? penaltiesWon : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Aerial Duels Contested: {aerialDuelsContested ? aerialDuelsContested : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Aerial Duels Won: {aerialDuelsWon ? aerialDuelsWon : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Aerial Duel Success %: {aerialDuelSuccessPercentage ? aerialDuelSuccessPercentage : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Ground Duels Contested: {groundDuelsContested ? groundDuelsContested : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Ground Duels Won: {groundDuelsWon ? groundDuelsWon : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Duels Won: {duelsWon ? duelsWon : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Ground Duel Success %: {groundDuelSuccessPercentage ? groundDuelSuccessPercentage : 'N/A'}</Typography>
            </Grid>
        </Grid>
    </>
  );

  const per90Stats = (
    <Grid container spacing={2} direction="column">
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Take-ons Overrun: {takeOnsOverrun_per_90 ? takeOnsOverrun_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Duels Contested: {duelsContested_per_90 ? duelsContested_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Tackles Made: {tacklesMade_per_90 ? tacklesMade_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Fouls from Tackles: {foulsFromTackleAttempts_per_90 ? foulsFromTackleAttempts_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Last-man Tackles Made: {lastManTacklesMade_per_90 ? lastManTacklesMade_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Take-ons Completed: {takeOnsCompleted_per_90 ? takeOnsCompleted_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Take-on Success %: {takeOnSuccessPercentage_per_90 ? takeOnSuccessPercentage_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Fouls Won: {foulsWon_per_90 ? foulsWon_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Fouls: {fouls_per_90 ? fouls_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Penalties Won: {penaltiesWon_per_90 ? penaltiesWon_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Aerial Duels Contested: {aerialDuelsContested_per_90 ? aerialDuelsContested_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Aerial Duels Won: {aerialDuelsWon_per_90 ? aerialDuelsWon_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Aerial Duel Success %: {aerialDuelSuccessPercentage_per_90 ? aerialDuelSuccessPercentage_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Ground Duels Contested: {groundDuelsContested_per_90 ? groundDuelsContested_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Ground Duels Won: {groundDuelsWon_per_90 ? groundDuelsWon_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Duels Won: {duelsWon_per_90 ? duelsWon_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="b4">Ground Duel Success %: {groundDuelSuccessPercentage_per_90 ? groundDuelSuccessPercentage_per_90 : 'N/A'}</Typography>
        </Grid>
    </Grid>
);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%" }}>
          <Typography variant="h4" gutterBottom>Duels</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
