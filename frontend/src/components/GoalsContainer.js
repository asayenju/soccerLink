import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import InputAdornment from '@mui/material/InputAdornment';
import NestedTabs from './NestedTabsForStatCards';

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

export default function GoalsContainer({
  isForm,
  goals,
  homegoals,
  awaygoals,
  winninggoals,
  nonpenaltygoals,
  penaltygoals,
  goalsfrominsidebox,
  goalsfromoutsidebox,
  rightfootgoals,
  leftfootgoals,
  headergoals,
  othergoals,
  conv_rate,
  goals_per_90,
  homegoals_per_90,
  awaygoals_per_90,
  winninggoals_per_90,
  nonpenaltygoals_per_90,
  penaltygoals_per_90,
  goalsfrominsidebox_per_90,
  goalsfromoutsidebox_per_90,
  rightfootgoals_per_90,
  leftfootgoals_per_90,
  headergoals_per_90,
  othergoals_per_90,
  minutesPlayed
}) {
  
  const [formData, setFormData] = React.useState({
    goals: goals || '',
    homegoals: homegoals || '',
    awaygoals: awaygoals|| '',
    winninggoals: winninggoals|| '',
    nonpenaltygoals: nonpenaltygoals || '',
    penaltygoals: penaltygoals|| '',
    goalsfrominsidebox: goalsfrominsidebox || '',
    goalsfromoutsidebox: goalsfromoutsidebox || '',
    rightfootgoals: rightfootgoals || '',
    leftfootgoals: leftfootgoals || '',
    headergoals: headergoals || '',
    othergoals: othergoals || ''
  });

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

  const calculateConvRate = () => {
    const goals = parseFloat(formData.goals || 0);
    const totalshots = parseFloat(formData.totalshots || 0);
    if (goals > 0) {
      return ((goals / totalshots) * 100).toFixed(2);
    }
    return 'N/A';
  };

  const calculatePer90 = (stat, minutesPlayed) => {
    const totalStat = parseFloat(formData[stat] || 0);
    if (minutesPlayed > 0) {
      return ((totalStat / minutesPlayed) * 90).toFixed(2);
    }
    return 'N/A';
  };

  const totalStats = (
    <Grid container spacing={2} direction="column">
      <Grid item>
      {renderTextField('Goals', 'goals', formData.goals, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Home Goals', 'homegoals', formData.homegoals, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Away Goals', 'awaygoals', formData.awaygoals, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Winning Goals', 'winninggoals', formData.winninggoals, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Non-penalty Goals', 'nonpenaltygoals', formData.nonpenaltygoals, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Penalty Goals', 'penaltygoals', formData.penaltygoals, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Goals Inside Box', 'goalsfrominsidebox', formData.goalsfrominsidebox, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Goals Outside Box', 'goalsfromoutsidebox', formData.goalsfromoutsidebox, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Right Foot Goals', 'rightfootgoals', formData.rightfootgoals, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Left Foot Goals', 'leftfootgoals', formData.leftfootgoals, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Header Goals', 'headergoals', formData.headergoals, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Other Goals', 'othergoals', formData.othergoals, handleChange)}
      </Grid>
      <Grid item>
      {renderTextField('Conversion Rate %', 'conv_rate', calculateConvRate(), handleChange, false)}
      </Grid>
    </Grid>
  );

  const per90Stats = (
    <Grid container spacing={2} direction="column">
      <Grid item>
        {isForm ? (
          renderTextField('Goals Per 90', 'goals_per_90', calculatePer90(goals, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Goals Per 90: {goals_per_90 ? goals_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Home Goals Per 90', 'homegoals_per_90', calculatePer90(homegoals, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Home Goals Per 90: {homegoals_per_90 ? homegoals_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Away Goals Per 90', 'awaygoals_per_90', calculatePer90(awaygoals, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Away Goals Per 90: {awaygoals_per_90 ? awaygoals_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Winning Goals Per 90', 'winninggoals_per_90', calculatePer90(winninggoals, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Winning Goals Per 90: {winninggoals_per_90 ? winninggoals_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Non-penalty Goals Per 90', 'nonpenaltygoals_per_90', calculatePer90(nonpenaltygoals, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Non-penalty Goals Per 90: {nonpenaltygoals_per_90 ? nonpenaltygoals_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Penalty Goals Per 90', 'penaltygoals_per_90', calculatePer90(penaltygoals, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Penalty Goals Per 90: {penaltygoals_per_90 ? penaltygoals_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Goals Inside Box Per 90', 'goalsfrominsidebox_per_90', calculatePer90(goalsfrominsidebox, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Goals Inside Box Per 90: {goalsfrominsidebox_per_90 ? goalsfrominsidebox_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Goals Outside Box Per 90', 'goalsfromoutsidebox_per_90', calculatePer90(goalsfromoutsidebox, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Goals Outside Box Per 90: {goalsfromoutsidebox_per_90 ? goalsfromoutsidebox_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Right Foot Goals Per 90', 'rightfootgoals_per_90', calculatePer90(rightfootgoals, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Right Foot Goals Per 90: {rightfootgoals_per_90 ? rightfootgoals_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Left Foot Goals Per 90', 'leftfootgoals_per_90', calculatePer90(leftfootgoals, minutesPlayed) || '', handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Left Foot Goals Per 90: {leftfootgoals_per_90 ? leftfootgoals_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Header Goals Per 90', 'headergoals_per_90', calculatePer90(headergoals, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Header Goals Per 90: {headergoals_per_90 ? headergoals_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Other Goals Per 90', 'othergoals_per_90', calculatePer90(othergoals, minutesPlayed), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Other Goals Per 90: {othergoals_per_90 ? othergoals_per_90 : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Conversion Rate %', 'conv_rate', calculateConvRate(), handleChange, false, true)
        ) : (
          <Typography variant="body1">
            Conversion Rate %: {conv_rate ? conv_rate : 'N/A'}
          </Typography>
        )}
      </Grid>
    </Grid>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: 'whitesmoke', width: '100%' }}>
          <Typography variant="h4" gutterBottom>Goals</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
