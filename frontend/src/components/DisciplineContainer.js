import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';

export default function DisciplineContainer({ totalCards, yellowCards, redCards,
    totalCards_per_90, yellowCards_per_90, redCards_per_90}) {
  const totalStats = (
    <>
      <Grid container spacing={2} direction="column">
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Total Cards: {totalCards ? totalCards : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Yellow Cards: {yellowCards ? yellowCards : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Red Cards: {redCards ? redCards : 'N/A'}</Typography>
            </Grid>
        </Grid>
    </>
  );

  const per90Stats = (
    <>
      
      <Grid container spacing={2} direction="column">
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Total Cards: {totalCards_per_90 ? totalCards_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Yellow Cards: {yellowCards_per_90 ? yellowCards_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Red Cards: {redCards_per_90 ? redCards_per_90 : 'N/A'}</Typography>
            </Grid>
        </Grid>
    </>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%" }}>
          <Typography variant="h4" gutterBottom>Discipline</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
