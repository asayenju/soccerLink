import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const WhiteBorderTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      borderColor: 'white',
      color: 'white',
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
      },
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& label': {
      color: 'white',
    },
  });
  
const WhiteIconButton = styled(IconButton)({
    color: 'white',
  });

export default function DefenseContainer({
    minutesPlayed,
    clearances, 
    interceptions, 
    blockedShots,
    blockedShots_per,
    cleanSheets, 
    goalsConceded,
    goalsConceded_per,
    goalsConcededInsideBox,
    goalsConcededInsideBox_per, 
    goalsConcededOutsideBox, 
    goalsConcededOutsideBox_per,
    ownGoals,
    ownGoals_per, 
    penaltyGoalsConceded,
    penaltyGoalsConceded_per,
    shotsOnTargetFaced, 
    shotsOnTargetFacedInsideBox,
    shotsOnTargetFacedInsideBox_per, 
    shotsOnTargetFacedOutsideBox,
    shotsOnTargetFacedOutsideBox_per,
    clearances_per_90, 
    interceptions_per_90, 
    blockedShots_per_90, 
    cleanSheets_per_90, 
    goalsConceded_per_90,
    goalsConcededInsideBox_per_90, 
    goalsConcededOutsideBox_per_90, 
    ownGoals_per_90, 
    penaltyGoalsConceded_per_90,
    shotsOnTargetFaced_per_90, 
    shotsOnTargetFacedInsideBox_per_90, 
    shotsOnTargetFacedOutsideBox_per_90}) {
     
    const [formData, setFormData] = React.useState({
        interceptions: interceptions || '',
        blockedShots: blockedShots || '',
        cleanSheets: cleanSheets || '',
        goalsConceded: goalsConceded || '',
        goalsConcededInsideBox: goalsConcededInsideBox || '',
        goalsConcededOutsideBox: goalsConcededOutsideBox || '',
        ownGoals: ownGoals || '',
        penaltyGoalsConceded: penaltyGoalsConceded || '',
        shotsOnTargetFaced: shotsOnTargetFaced || '',
        shotsOnTargetFacedInsideBox: shotsOnTargetFacedInsideBox || '',
        shotsOnTargetFacedOutsideBox: shotsOnTargetFacedOutsideBox || '',
        });

    const calculateAcc = (attempts, completions) => {
        const att = parseFloat(formData[attempts] || 0);
        const comp = parseFloat(formData[completions] || 0);
        if (att > 0) {
            return ((comp / att) * 100).toFixed(2);
        }
        return 'N/A';
        };
    
    const calculatePer90 = (stat) => {
    const totalStat = parseFloat(formData[stat] || 0);
    if (minutesPlayed > 0) {
        return ((totalStat / minutesPlayed) * 90).toFixed(2);
    }
    return 'N/A';
    };
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    };
    
    const renderTextField = (label, name, value, handleChange, hasArrows = true) => (
    <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
        <Typography variant="body1" sx={{ color: 'white' }}>
            {label}
        </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
        <WhiteBorderTextField
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
            InputLabelProps={{
            shrink: true,
            }}
            InputProps={{
            endAdornment: hasArrows ? (
                <InputAdornment position="end">
                <WhiteIconButton
                    aria-label="increase"
                    size="small"
                    onClick={() =>
                    handleChange({
                        target: { name, value: parseInt(value || '0') + 1 },
                    })
                    }
                >
                    <ArrowUpwardIcon />
                </WhiteIconButton>
                <WhiteIconButton
                    aria-label="decrease"
                    size="small"
                    onClick={() =>
                    handleChange({
                        target: {
                        name,
                        value: Math.max(parseInt(value || '0') - 1, 0),
                        },
                    })
                    }
                >
                    <ArrowDownwardIcon />
                </WhiteIconButton>
                </InputAdornment>
            ) : null,
            }}
            sx={{ width: '100%' }} // Ensure all fields have equal width
        />
        </Grid>
    </Grid>
    );
        
        
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
