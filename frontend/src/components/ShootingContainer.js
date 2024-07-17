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
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
      '&::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '&::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
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

export default function ShootingContainer({
  isForm,
  formData,
  handleChange,
  totalshots,
  shotson_target,
  shotsoff_target,
  shots_blocked,
  shots_setpieces,
  penalties,
  woodwork,
  totalshots_per_90,
  shotson_target_per_90,
  shotsoff_target_per_90,
  shots_blocked_per_90,
  shots_setpieces_per_90,
  penalties_per_90,
  woodwork_per_90,
  shots_accuracy,
  minutesPlayed
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*$/.test(value)) {
      handleChange(e);
    }
  };

  // Function to calculate Shot Accuracy based on Shots On Target and Total Shots
  const calculateShotAccuracy = () => {
    const shotsOnTarget = parseFloat(formData.shotson_target || 0);
    const totalShots = parseFloat(formData.totalshots || 0);
    
    if (totalShots > 0) {
      const accuracy = (shotsOnTarget / totalShots) * 100;
      return accuracy.toFixed(2); // Returns a string with 2 decimal places
    }
    
    return 'N/A';
  };

  // Function to calculate per 90 min stats
  const calculatePer90 = (stat, minutesPlayed) => {
    const totalStat = parseFloat(formData[stat] || 0);
    if (minutesPlayed > 0) {
      return ((totalStat / minutesPlayed) * 90).toFixed(2);
    }
    return 'N/A';
  };

  const renderTextField = (label, name, value, handleChange, showArrows = true) => (
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
          value={name === 'shots_accuracy' ? calculateShotAccuracy() : value}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {isForm && showArrows && (
                  <>
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
                  </>
                )}
              </InputAdornment>
            ),
          }}
          sx={{width: '100%'}}
        />
      </Grid>
    </Grid>
  );

  const totalStats = (
    <Grid container spacing={2} direction="column">
      <Grid item>
        {isForm ? (
          renderTextField('Total Shots', 'totalshots', formData.totalshots || '', handleChange, true)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Total Shots: {totalshots ? totalshots : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Shots On Target', 'shotson_target', formData.shotson_target || '', handleChange, true)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Shots On Target: {shotson_target ? shotson_target : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Shots Off Target', 'shotsoff_target', formData.shotsoff_target || '', handleChange, true)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Shots Off Target: {shotsoff_target ? shotsoff_target : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Shot Accuracy %', 'shots_accuracy', formData.shots_accuracy || '', handleChange, false)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Shot Accuracy %: {calculateShotAccuracy()}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Shots Blocked', 'shots_blocked', formData.shots_blocked || '', handleChange, true)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Shots Blocked: {shots_blocked ? shots_blocked : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Shots From Set Pieces', 'shots_setpieces', formData.shots_setpieces || '', handleChange, true)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Shots From Set Pieces: {shots_setpieces ? shots_setpieces : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Penalties Taken', 'penalties', formData.penalties || '', handleChange, true)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Penalties: {penalties ? penalties : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Hit Woodwork', 'woodwork', formData.woodwork || '', handleChange, true)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Hit Woodwork: {woodwork ? woodwork : 'N/A'}
          </Typography>
        )}
      </Grid>

    </Grid>
  );

  const per90Stats = (
    <Grid container spacing={2} direction="column">
      <Grid item>
        {isForm ? (
          renderTextField('Total Shots Per 90', 'totalshots_per_90', calculatePer90('totalshots', minutesPlayed), handleChange, false)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Total Shots: {calculatePer90('totalshots', minutesPlayed)}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Shots On Target Per 90', 'shotson_target_per_90', calculatePer90('shotson_target', minutesPlayed), handleChange, false)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Shots On Target: {calculatePer90('shotson_target', minutesPlayed)}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Shots Off Target Per 90', 'shotsoff_target_per_90', calculatePer90('shotsoff_target', minutesPlayed), handleChange, false)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Shots Off Target: {calculatePer90('shotsoff_target', minutesPlayed)}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Shot Accuracy %', 'shots_accuracy', calculateShotAccuracy('shotson_target', 'totalshots'), handleChange, false)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Shot Accuracy %: {calculateShotAccuracy('shotson_target', 'totalshots')}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Shots Blocked Per 90', 'shots_blocked_per_90', calculatePer90('shots_blocked', minutesPlayed), handleChange, false)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Shots Blocked: {calculatePer90('shots_blocked', minutesPlayed)}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Shots From Set Pieces Per 90', 'shots_setpieces_per_90', calculatePer90('shots_setpieces', minutesPlayed), handleChange, false)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Shots From Set Pieces: {calculatePer90('shots_setpieces', minutesPlayed)}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Penalties Per 90', 'penalties_per_90', calculatePer90('penalties', minutesPlayed), handleChange, false)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Penalties: {calculatePer90('penalties', minutesPlayed)}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Hit Woodwork Per 90', 'woodwork_per_90', calculatePer90('woodwork', minutesPlayed), handleChange, false)
        ) : (
          <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            Hit Woodwork: {calculatePer90('woodwork', minutesPlayed)}
          </Typography>
        )}
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
            width: '200%',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Shooting
          </Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
