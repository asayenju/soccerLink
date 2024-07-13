import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';

export default function ShootingContainer({totalshots, shotson_target, shotsoff_target, shots_accuracy, shots_blocked, shots_setpieces, penalties, woodwork, totalshots_per_90, shotson_target_per_90, shotsoff_target_per_90, shots_blocked_per_90, shots_setpieces_per_90, penalties_per_90, woodwork_per_90}) {
    const totalStats = (
        <>
         <Grid container spacing={2} direction="column">
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Total Shots: {totalshots?totalshots: "N/A"}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shots On Target: {shotson_target?shotson_target: "N/A"}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shots Off Target: {shotsoff_target?shotsoff_target: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shot Accuracy %: {shots_accuracy?shots_accuracy: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shots Blocked: {shots_blocked?shots_blocked: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shots From Set Pieces: {shots_setpieces?shots_setpieces: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Penalties Taken: {penalties?penalties: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Hit Woodwork: {woodwork?woodwork: 'N/A'}</Typography>
            </Grid>
          </Grid>
        </>
      );

    const per90Stats = (
        <>
         <Grid container spacing={2} direction="column">
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Total Shots: {totalshots_per_90?totalshots_per_90: "N/A"}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shots On Target: {shotson_target_per_90?shotson_target_per_90: "N/A"}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shots Off Target: {shotsoff_target_per_90?shotsoff_target_per_90: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shot Accuracy %: {shots_accuracy?shots_accuracy: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shots Blocked: {shots_blocked_per_90?shots_blocked_per_90: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Shots From Set Pieces: {shots_setpieces_per_90?shots_setpieces_per_90: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Penalties Taken: {penalties_per_90?penalties_per_90: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Hit Woodwork: {woodwork_per_90?woodwork_per_90: 'N/A'}</Typography>
            </Grid>
          </Grid>
        </>
    );
    
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh'}}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%"}}>
          <Typography variant="h4" gutterBottom>Shooting</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}


