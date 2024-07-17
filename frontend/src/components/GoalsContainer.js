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
        {isForm ? (
          renderTextField('Goals', 'goals', formData.goals || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Goals: {formData.goals ? formData.goals : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Home Goals', 'homegoals', formData.homegoals || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Home Goals: {formData.homegoals ? formData.homegoals : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Away Goals', 'awaygoals', formData.awaygoals || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Away Goals: {formData.awaygoals ? formData.awaygoals : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Winning Goals', 'winninggoals', formData.winninggoals || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Winning Goals: {formData.winninggoals ? formData.winninggoals : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Non-penalty Goals', 'nonpenaltygoals', formData.nonpenaltygoals || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Non-penalty Goals: {formData.nonpenaltygoals ? formData.nonpenaltygoals : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Penalty Goals', 'penaltygoals', formData.penaltygoals || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Penalty Goals: {formData.penaltygoals ? formData.penaltygoals : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Goals Inside Box', 'goalsfrominsidebox', formData.goalsfrominsidebox || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Goals Inside Box: {formData.goalsfrominsidebox ? formData.goalsfrominsidebox : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Goals Outside Box', 'goalsfromoutsidebox', formData.goalsfromoutsidebox || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Goals Outside Box: {formData.goalsfromoutsidebox ? formData.goalsfromoutsidebox : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Right Foot Goals', 'rightfootgoals', formData.rightfootgoals || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Right Foot Goals: {formData.rightfootgoals ? formData.rightfootgoals : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Left Foot Goals', 'leftfootgoals', formData.leftfootgoals || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Left Foot Goals: {formData.leftfootgoals ? formData.leftfootgoals : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Header Goals', 'headergoals', formData.headergoals || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Header Goals: {formData.headergoals ? formData.headergoals : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Other Goals', 'othergoals', formData.othergoals || '', handleChange)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Other Goals: {formData.othergoals ? formData.othergoals : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Conversion Rate %', 'conv_rate', calculateConvRate(), handleChange, false)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Conversion Rate %: {calculateConvRate()}
          </Typography>
        )}
      </Grid>

    </Grid>
  );

  const per90Stats = (
    <Grid container spacing={2} direction="column">
     <Grid item>
      {isForm ? (
        renderTextField('Goals', 'goals_per_90', calculatePer90(goals, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Goals: {goals_per_90 ? goals_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Home Goals', 'homegoals_per_90', calculatePer90(homegoals, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Home Goals: {homegoals_per_90 ? homegoals_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Away Goals', 'awaygoals_per_90', calculatePer90(awaygoals, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Away Goals: {awaygoals_per_90 ? awaygoals_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Winning Goals', 'winninggoals_per_90', calculatePer90(winninggoals, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Winning Goals: {winninggoals_per_90 ? winninggoals_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Non-penalty Goals', 'nonpenaltygoals_per_90', calculatePer90(nonpenaltygoals, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Non-penalty Goals: {nonpenaltygoals_per_90 ? nonpenaltygoals_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Penalty Goals', 'penaltygoals_per_90', calculatePer90(penaltygoals, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Penalty Goals: {penaltygoals_per_90 ? penaltygoals_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Goals Inside Box', 'goalsfrominsidebox_per_90', calculatePer90(goalsfrominsidebox, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Goals Inside Box: {goalsfrominsidebox_per_90 ? goalsfrominsidebox_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Goals Outside Box', 'goalsfromoutsidebox_per_90', calculatePer90(goalsfromoutsidebox, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Goals Outside Box: {goalsfromoutsidebox_per_90 ? goalsfromoutsidebox_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Right Foot Goals', 'rightfootgoals_per_90', calculatePer90(rightfootgoals, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Right Foot Goals: {rightfootgoals_per_90 ? rightfootgoals_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Left Foot Goals', 'leftfootgoals_per_90', calculatePer90(leftfootgoals, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Left Foot Goals: {leftfootgoals_per_90 ? leftfootgoals_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Header Goals', 'headergoals_per_90', calculatePer90(headergoals, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Header Goals: {headergoals_per_90 ? headergoals_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Other Goals', 'othergoals_per_90', calculatePer90(othergoals, minutesPlayed), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Other Goals: {othergoals_per_90 ? othergoals_per_90.toFixed(2) : 'N/A'}
        </Typography>
      )}
    </Grid>
    <Grid item>
      {isForm ? (
        renderTextField('Conversion Rate %', 'conv_rate', calculateConvRate(), handleChange, false, true)
      ) : (
        <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          Conversion Rate %: {conv_rate ? conv_rate.toFixed(2) : 'N/A'}
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
