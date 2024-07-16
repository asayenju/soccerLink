import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled } from '@mui/system';

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

export default function GoalkeepingContainer({
  shotsfaced,
  savesmade,
  savesmade_in_box,
  savesmade_out_box,
  penalties_faced,
  penalties_saved,
  shotsfaced_per_90,
  savesmade_per_90,
  savesmade_in_box_per_90,
  savesmade_out_box_per_90,
  penalties_faced_per_90,
  penalties_saved_per_90,
  minutesPlayed, // Assuming this prop is passed to calculate per 90 stats
}) {
  const [formData, setFormData] = React.useState({
    shotsfaced: shotsfaced || '',
    savesmade: savesmade || '',
    savesmade_in_box: savesmade_in_box || '',
    savesmade_out_box: savesmade_out_box || '',
    penalties_faced: penalties_faced || '',
    penalties_saved: penalties_saved || '',
  });

  // Function to calculate Save Percentage
  const calculateSavePercentage = () => {
    const savesMade = parseFloat(formData.savesmade || 0);
    const shotsFaced = parseFloat(formData.shotsfaced || 0);
    if (shotsFaced > 0) {
      return ((savesMade / shotsFaced) * 100).toFixed(2);
    }
    return 'N/A';
  };

  // Function to calculate Saves In Box Percentage
  const calculateSavesInBoxPercentage = () => {
    const savesInBox = parseFloat(formData.savesmade_in_box || 0);
    const savesMade = parseFloat(formData.savesmade || 0);
    if (savesMade > 0) {
      return ((savesInBox / savesMade) * 100).toFixed(2);
    }
    return 'N/A';
  };

  // Function to calculate Saves Out Box Percentage
  const calculateSavesOutBoxPercentage = () => {
    const savesOutBox = parseFloat(formData.savesmade_out_box || 0);
    const savesMade = parseFloat(formData.savesmade || 0);
    if (savesMade > 0) {
      return ((savesOutBox / savesMade) * 100).toFixed(2);
    }
    return 'N/A';
  };

  // Function to calculate Penalties Saves Percentage
  const calculatePenaltiesSavesPercentage = () => {
    const penaltiesSaved = parseFloat(formData.penalties_saved || 0);
    const penaltiesFaced = parseFloat(formData.penalties_faced || 0);
    if (penaltiesFaced > 0) {
      return ((penaltiesSaved / penaltiesFaced) * 100).toFixed(2);
    }
    return 'N/A';
  };

  // Function to calculate Per 90 Statistics
  const calculatePer90 = (stat, minutesPlayed) => {
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
      <Grid item>{renderTextField('Shots Faced', 'shotsfaced', formData.shotsfaced, handleChange)}</Grid>
      <Grid item>{renderTextField('Saves Made', 'savesmade', formData.savesmade, handleChange)}</Grid>
      <Grid item>
        {renderTextField('Saves Made Inside Box', 'savesmade_in_box', formData.savesmade_in_box, handleChange)}
      </Grid>
      <Grid item>
        {renderTextField('Saves Made Outside Box', 'savesmade_out_box', formData.savesmade_out_box, handleChange)}
      </Grid>
      <Grid item>{renderTextField('Saves Accuracy %', 'save_per', calculateSavePercentage(), handleChange, false)}</Grid>
      <Grid item>
        {renderTextField('Saves In Box %', 'savesinbox_per', calculateSavesInBoxPercentage(), handleChange, false)}
      </Grid>
      <Grid item>
        {renderTextField('Saves Out Box %', 'savesoutbox_per', calculateSavesOutBoxPercentage(), handleChange, false)}
      </Grid>
      <Grid item>{renderTextField('Penalties Faced', 'penalties_faced', formData.penalties_faced, handleChange)}</Grid>
      <Grid item>{renderTextField('Penalties Saved', 'penalties_saved', formData.penalties_saved, handleChange)}</Grid>
      <Grid item>
        {renderTextField('Penalties Saves Accuracy %', 'penalties_saves_per', calculatePenaltiesSavesPercentage(), handleChange, false)}
      </Grid>
    </Grid>
  );

  const per90Stats = (
    <Grid container spacing={2} direction="column">
      <Grid item>{renderTextField('Shots Faced', 'shotsfaced_per_90', calculatePer90('shotsfaced', minutesPlayed), handleChange, false)}</Grid>
      <Grid item>{renderTextField('Saves Made', 'savesmade_per_90', calculatePer90('savesmade', minutesPlayed), handleChange, false)}</Grid>
      <Grid item>
        {renderTextField('Saves Made Inside Box', 'savesmade_in_box_per_90', calculatePer90('savesmade_in_box', minutesPlayed), handleChange, false)}
      </Grid>
      <Grid item>
        {renderTextField('Saves Made Outside Box', 'savesmade_out_box_per_90', calculatePer90('savesmade_out_box', minutesPlayed), handleChange, false)}
      </Grid>
      <Grid item>{renderTextField('Saves Accuracy %', 'save_per_90', calculateSavePercentage(), handleChange, false)}</Grid>
      <Grid item>
        {renderTextField('Saves In Box Accuracy %', 'savesinbox_per_90', calculateSavesInBoxPercentage(), handleChange, false)}
      </Grid>
      <Grid item>
        {renderTextField('Saves Out Box Accuracy %', 'savesoutbox_per_90', calculateSavesOutBoxPercentage(), handleChange, false)}
      </Grid>
      <Grid item>
        {renderTextField('Penalties Faced', 'penalties_faced_per_90', calculatePer90('penalties_faced', minutesPlayed), handleChange, false)}
      </Grid>
      <Grid item>
        {renderTextField('Penalties Saved', 'penalties_saved_per_90', calculatePer90('penalties_saved', minutesPlayed), handleChange, false)}
      </Grid>
      <Grid item>
        {renderTextField('Penalties Saves Accuracy %', 'penalties_saves_per_90', calculatePenaltiesSavesPercentage(), handleChange, false)}
      </Grid>
    </Grid>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
        }}
      >
        <Box
          sx={{
            bgcolor: '#065F89',
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
            color: 'whitesmoke',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Goalkeeping
          </Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
