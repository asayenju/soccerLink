import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';

export default function GoalkeepingContainer({shotsfaced, savesmade, savesmade_in_box, savesmade_out_box, save_per, savesinbox_per, savesoutbox_per, penalties_faced, penalties_saved,penalties_saves_per, shotsfaced_per_90, savesmade_per_90, savesmade_in_box_per_90, savesmade_out_box_per_90, penalties_faced_per_90, penalties_saved_per_90}) {
  const totalStats = (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Shots Faced: {shotsfaced?shotsfaced: "N/A"}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves Made: {savesmade?savesmade: "N/A"}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves Made Inside Box: {savesmade_in_box?savesmade_in_box: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves Made Outside Box: {savesmade_out_box?savesmade_out_box: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves Accuracy %: {save_per?save_per: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves In Box Accuracy %: {savesinbox_per?savesinbox_per: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves Out Box Accuracy %: {savesoutbox_per?savesoutbox_per: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Penalties Faced: {penalties_faced?penalties_faced: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Penalties Saved: {penalties_saved?penalties_saved: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Penalties Saves Accuracy %: {penalties_saves_per?penalties_saves_per: 'N/A'}</Typography>
        </Grid>
      </Grid>
    </>
  );

  const per90Stats = (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Shots Faced: {shotsfaced_per_90?shotsfaced_per_90: "N/A"}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves Made: {savesmade_per_90?savesmade_per_90: "N/A"}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves Made Inside Box: {savesmade_in_box_per_90?savesmade_in_box_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5F">Saves Made Outside Box: {savesmade_out_box_per_90?savesmade_out_box_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves Accuracy %: {save_per?save_per: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves In Box Accuracy %: {savesinbox_per?savesinbox_per: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Saves Out Box Accuracy %: {savesoutbox_per?savesoutbox_per: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Penalties Faced: {penalties_faced_per_90?penalties_faced_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Penalties Saved: {penalties_saved_per_90?penalties_saved_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{display: "flex", flexDirection: "row"}}>
          <Typography variant="b5">Penalties Saves Accuracy %: {penalties_saves_per?penalties_saves_per: 'N/A'}</Typography>
        </Grid>
      </Grid>
    </>
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh'}}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%"}}>
          <Typography variant="h4" gutterBottom>Goalkeeping</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}


