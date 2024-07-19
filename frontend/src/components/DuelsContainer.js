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

export default function DuelsContainer({
    isForm,
    minutesPlayed,
    takeOnsOverrun, 
    duelsContested, 
    tacklesMade, 
    foulsFromTackleAttempts, 
    lastManTacklesMade, 
    takeOnsCompleted, 
    takeOnSuccessPercentage, 
    foulsWon, 
    fouls, 
    penaltiesWon, 
    aerialDuelsContested, 
    aerialDuelsWon, 
    aerialDuelSuccessPercentage, 
    groundDuelsContested, 
    groundDuelsWon, 
    duelsWon, 
    groundDuelSuccessPercentage, 
    takeOnsOverrun_per_90, 
    duelsContested_per_90, 
    tacklesMade_per_90,
    foulsFromTackleAttempts_per_90,
    lastManTacklesMade_per_90, 
    takeOnsCompleted_per_90, 
    takeOnSuccessPercentage_per_90,
    foulsWon_per_90, 
    fouls_per_90, 
    penaltiesWon_per_90, 
    aerialDuelsContested_per_90,
    aerialDuelsWon_per_90, 
    aerialDuelSuccessPercentage_per_90, 
    groundDuelsContested_per_90,
    groundDuelsWon_per_90, 
    duelsWon_per_90, 
    groundDuelSuccessPercentage_per_90}) {

    const [formData, setFormData] = React.useState({
        takeOnsOverrun: takeOnsOverrun || '',
        duelsContested: duelsContested || '',
        tacklesMade: tacklesMade || '',
        foulsFromTackleAttempts: foulsFromTackleAttempts || '',
        lastManTacklesMade: lastManTacklesMade || '',
        takeOnsCompleted: takeOnsCompleted || '',
        foulsWon: foulsWon || '',
        fouls: fouls || '',
        penaltiesWon: penaltiesWon || '',
        aerialDuelsContested: aerialDuelsContested || '',
        aerialDuelsWon: aerialDuelsWon || '',
        groundDuelsContested: groundDuelsContested || '',
        groundDuelsWon: groundDuelsWon || '',
        duelsWon: duelsWon || '',
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
        <Grid container spacing={2} direction="column">
            <Grid item>
                {isForm ? (
                    renderTextField('Take-ons Overrun', 'takeOnsOverrun', formData.takeOnsOverrun, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Take-ons Overrun: {takeOnsOverrun ? takeOnsOverrun : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Duels Contested', 'duelsContested', formData.duelsContested, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Duels Contested: {duelsContested ? duelsContested : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Tackles Made', 'tacklesMade', formData.tacklesMade, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Tackles Made: {tacklesMade ? tacklesMade : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Fouls from Tackles', 'foulsFromTackleAttempts', formData.foulsFromTackleAttempts, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Fouls from Tackles: {foulsFromTackleAttempts ? foulsFromTackleAttempts : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Last-man Tackles Made', 'lastManTacklesMade', formData.lastManTacklesMade, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Last-man Tackles Made: {lastManTacklesMade ? lastManTacklesMade : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Take-ons Completed', 'takeOnsCompleted', formData.takeOnsCompleted, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Take-ons Completed: {takeOnsCompleted ? takeOnsCompleted : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Take-on Success %', 'takeOnSuccessPercentage', calculateAcc('takeOnsOverrun', 'takeOnsCompleted'), handleChange, false, false)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Take-on Success %: {calculateAcc('takeOnsOverrun', 'takeOnsCompleted') ? calculateAcc('takeOnsOverrun', 'takeOnsCompleted') : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Fouls Won', 'foulsWon', formData.foulsWon, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Fouls Won: {foulsWon ? foulsWon : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Fouls', 'fouls', formData.fouls, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Fouls: {fouls ? fouls : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Penalties Won', 'penaltiesWon', formData.penaltiesWon, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Penalties Won: {penaltiesWon ? penaltiesWon : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Aerial Duels Contested', 'aerialDuelsContested', FormData.maerialDuelsContested, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Aerial Duels Contested: {aerialDuelsContested ? aerialDuelsContested : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Aerial Duels Won', 'aerialDuelsWon', formData.aerialDuelsWon, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Aerial Duels Won: {aerialDuelsWon ? aerialDuelsWon : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Aerial Duel Success %', 'aerialDuelSuccessPercentage', calculateAcc('aerialDuelsContested', 'aerialDuelsWon'), handleChange, false, true)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Aerial Duel Success %: {calculateAcc('aerialDuelsContested', 'aerialDuelsWon') ? calculateAcc('aerialDuelsContested', 'aerialDuelsWon') : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Ground Duels Contested', 'groundDuelsContested', formData.groundDuelsContested, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Ground Duels Contested: {groundDuelsContested ? groundDuelsContested : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Ground Duels Won', 'groundDuelsWon', formData.groundDuelsWon, handleChange)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Ground Duels Won: {groundDuelsWon ? groundDuelsWon : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Duels Won', 'duelsWon', calculateAcc('duelsContested', 'duelsWon'), handleChange, false, false)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Duels Won: {calculateAcc('duelsContested', 'duelsWon') ? calculateAcc('duelsContested', 'duelsWon') : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Ground Duel Success %', 'groundDuelSuccessPercentage', calculateAcc('groundDuelsContested', 'groundDuelsWon'), handleChange, false, false)
                ) : (
                    <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        Ground Duel Success %: {calculateAcc('groundDuelsContested', 'groundDuelsWon') ? calculateAcc('groundDuelsContested', 'groundDuelsWon') : 'N/A'}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
    

    const per90Stats = (
        <Grid container spacing={2} direction="column">
            <Grid item>
                {isForm ? (
                    renderTextField('Take-ons Overrun', 'takeOnsOverrun_per_90', calculatePer90('takeOnsOverrun', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Take-ons Overrun: {takeOnsOverrun_per_90 ? takeOnsOverrun_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Duels Contested', 'duelsContested_per_90', calculatePer90('duelsContested', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Duels Contested: {duelsContested_per_90 ? duelsContested_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Tackles Made', 'tacklesMade_per_90', calculatePer90('tacklesMade', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Tackles Made: {tacklesMade_per_90 ? tacklesMade_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Fouls from Tackles', 'foulsFromTackleAttempts_per_90', calculatePer90('foulsFromTackleAttempts', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Fouls from Tackles: {foulsFromTackleAttempts_per_90 ? foulsFromTackleAttempts_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Last-man Tackles Made', 'lastManTacklesMade_per_90', calculatePer90('lastManTacklesMade', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Last-man Tackles Made: {lastManTacklesMade_per_90 ? lastManTacklesMade_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Take-ons Completed', 'takeOnsCompleted_per_90', calculatePer90('takeOnsCompleted', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Take-ons Completed: {takeOnsCompleted_per_90 ? takeOnsCompleted_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Take-on Success %', 'takeOnSuccessPercentage_per_90', calculateAcc('takeOnsOverrun', 'takeOnsCompleted'), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Take-on Success %: {takeOnSuccessPercentage_per_90 ? takeOnSuccessPercentage_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Fouls Won', 'foulsWon_per_90', calculatePer90('foulsWon', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Fouls Won: {foulsWon_per_90 ? foulsWon_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Fouls', 'fouls_per_90', calculatePer90('fouls', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Fouls: {fouls_per_90 ? fouls_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Penalties Won', 'penaltiesWon_per_90', calculatePer90('penaltiesWon', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Penalties Won: {penaltiesWon_per_90 ? penaltiesWon_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Aerial Duels Contested', 'aerialDuelsContested_per_90', calculatePer90('aerialDuelsContested', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Aerial Duels Contested: {aerialDuelsContested_per_90 ? aerialDuelsContested_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Aerial Duels Won', 'aerialDuelsWon_per_90', calculatePer90('aerialDuelsWon', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Aerial Duels Won: {aerialDuelsWon_per_90 ? aerialDuelsWon_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Aerial Duel Success %', 'aerialDuelSuccessPercentage_per_90', calculateAcc('aerialDuelsContested', 'aerialDuelsWon'), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Aerial Duel Success %: {aerialDuelSuccessPercentage_per_90 ? aerialDuelSuccessPercentage_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Ground Duels Contested', 'groundDuelsContested_per_90', calculatePer90('groundDuelsContested', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Ground Duels Contested: {groundDuelsContested_per_90 ? groundDuelsContested_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Ground Duels Won', 'groundDuelsWon_per_90', calculatePer90('groundDuelsWon', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Ground Duels Won: {groundDuelsWon_per_90 ? groundDuelsWon_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Duels Won', 'duelsWon_per_90', calculatePer90('duelsWon', minutesPlayed), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Duels Won: {duelsWon_per_90 ? duelsWon_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
            <Grid item>
                {isForm ? (
                    renderTextField('Ground Duel Success %', 'groundDuelSuccessPercentage_per_90', calculateAcc('groundDuelsContested', 'groundDuelsWon'), handleChange, false, true)
                ) : (
                    <Typography variant="b4">
                        Ground Duel Success %: {groundDuelSuccessPercentage_per_90 ? groundDuelSuccessPercentage_per_90 : 'N/A'}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
    

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "100%" }}>
          <Typography variant="h4" gutterBottom>Duels</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
