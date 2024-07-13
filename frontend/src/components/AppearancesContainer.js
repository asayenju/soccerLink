import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';

export default function AppearancesContainer({ games, minutes, starts, sub_off, sub_on, games_per_90, minutes_per_90, starts_per_90, sub_off_per_90, sub_on_per_90 }) {
  const totalStats = (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1">Games: {games ? games : "N/A"}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1">Minutes: {minutes ? minutes : "N/A"}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1">Starts: {starts ? starts : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1">Subbed Off: {sub_off ? sub_off : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1">Subbed On: {sub_on ? sub_on : 'N/A'}</Typography>
        </Grid>
      </Grid>
    </>
  );

  const per90Stats = (
    <>
      
      <Grid container spacing={2} direction="column">
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1">Games: {games_per_90 ? games_per_90 : 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1">Minutes: {minutes_per_90 ? minutes_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1">Starts: {starts_per_90 ? starts_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1">Subbed Off: {sub_off_per_90 ? sub_off_per_90: 'N/A'}</Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="body1">Subbed On: {sub_on_per_90 ? sub_on_per_90: 'N/A'}</Typography>
        </Grid>
      </Grid>
    </>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%" }}>
          <Typography variant="h4" gutterBottom>Appearances</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
