import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';

export default function PossessionContainer({handballs, cornersWon, touches, ballRecoveries, possessionLost,
    offsides, touchesInOppositionBox, timesTackled,
    handballs_per_90, cornersWon_per_90, touches_per_90, ballRecoveries_per_90, possessionLost_per_90,
    offsides_per_90, touchesInOppositionBox_per_90, timesTackled_per_90 }) {
  const totalStats = (
    <>
        <Grid container spacing={2} direction="column">
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Handballs: {handballs ? handballs : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Corners Won: {cornersWon ? cornersWon : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Touches: {touches ? touches : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Ball Recoveries: {ballRecoveries ? ballRecoveries : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Possession Lost: {possessionLost ? possessionLost : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Offsides: {offsides ? offsides : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Touches in Opposition Box: {touchesInOppositionBox ? touchesInOppositionBox : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Times Tackled: {timesTackled ? timesTackled : 'N/A'}</Typography>
            </Grid>
        </Grid>
     </>
    );

  const per90Stats = (
    <>
      
      <Grid container spacing={2} direction="column">
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Handballs: {handballs_per_90 ? handballs_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Corners Won: {cornersWon_per_90 ? cornersWon_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Touches: {touches_per_90 ? touches_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Ball Recoveries: {ballRecoveries_per_90 ? ballRecoveries_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Possession Lost: {possessionLost_per_90 ? possessionLost_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Offsides: {offsides_per_90 ? offsides_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Touches in Opposition Box: {touchesInOppositionBox_per_90 ? touchesInOppositionBox_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Times Tackled: {timesTackled_per_90 ? timesTackled_per_90 : 'N/A'}</Typography>
            </Grid>
        </Grid>
    </>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%" }}>
          <Typography variant="h4" gutterBottom>Possession</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
