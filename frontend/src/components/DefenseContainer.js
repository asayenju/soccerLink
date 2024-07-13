import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';

export default function DuelsContainer({clearances, interceptions, blockedShots, cleanSheets, goalsConceded,
    goalsConcededInsideBox, goalsConcededOutsideBox, ownGoals, penaltyGoalsConceded,
    shotsOnTargetFaced, shotsOnTargetFacedInsideBox, shotsOnTargetFacedOutsideBox,
    clearances_per_90, interceptions_per_90, blockedShots_per_90, cleanSheets_per_90, goalsConceded_per_90,
    goalsConcededInsideBox_per_90, goalsConcededOutsideBox_per_90, ownGoals_per_90, penaltyGoalsConceded_per_90,
    shotsOnTargetFaced_per_90, shotsOnTargetFacedInsideBox_per_90, shotsOnTargetFacedOutsideBox_per_90}) {
  const totalStats = (
    <>
        <Grid container spacing={2} direction="column">
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Clearances: {clearances ? clearances : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Interceptions: {interceptions ? interceptions : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Blocked Shots: {blockedShots ? blockedShots : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Clean Sheets: {cleanSheets ? cleanSheets : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Goals Conceded: {goalsConceded ? goalsConceded : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Goals Conceded Inside Box: {goalsConcededInsideBox ? goalsConcededInsideBox : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Goals Conceded Outside Box: {goalsConcededOutsideBox ? goalsConcededOutsideBox : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Own Goals: {ownGoals ? ownGoals : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Penalty Goals Conceded: {penaltyGoalsConceded ? penaltyGoalsConceded : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Shots Faced: {shotsOnTargetFaced ? shotsOnTargetFaced : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Shots Faced Inside Box: {shotsOnTargetFacedInsideBox ? shotsOnTargetFacedInsideBox : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Shots Faced Outside Box: {shotsOnTargetFacedOutsideBox ? shotsOnTargetFacedOutsideBox : 'N/A'}</Typography>
            </Grid>
        </Grid>
    </>
  );

  const per90Stats = (
    <>
        <Grid container spacing={2} direction="column">
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Clearances: {clearances_per_90 ? clearances_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Interceptions: {interceptions_per_90 ? interceptions_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Blocked Shots: {blockedShots_per_90 ? blockedShots_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Clean Sheets: {cleanSheets_per_90 ? cleanSheets_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Goals Conceded: {goalsConceded_per_90 ? goalsConceded_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Goals Conceded Inside Box: {goalsConcededInsideBox_per_90 ? goalsConcededInsideBox_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Goals Conceded Outside Box: {goalsConcededOutsideBox_per_90 ? goalsConcededOutsideBox_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Own Goals: {ownGoals_per_90 ? ownGoals_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Penalty Goals Conceded: {penaltyGoalsConceded_per_90 ? penaltyGoalsConceded_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Shots Faced: {shotsOnTargetFaced_per_90 ? shotsOnTargetFaced_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Shots Faced Inside Box: {shotsOnTargetFacedInsideBox_per_90 ? shotsOnTargetFacedInsideBox_per_90 : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                <Typography variant="b4">Shots Faced Outside Box: {shotsOnTargetFacedOutsideBox_per_90 ? shotsOnTargetFacedOutsideBox_per_90 : 'N/A'}</Typography>
            </Grid>
        </Grid>
    </>
);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%" }}>
          <Typography variant="h4" gutterBottom>Defense</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
