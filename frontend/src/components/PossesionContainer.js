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

export default function PossessionContainer({
  isForm,
  minutesPlayed,
  handballs, 
  cornersWon, 
  touches, 
  ballRecoveries, 
  possessionLost,
  offsides, 
  touchesInOppositionBox,
  touchesInOppositionBox_per,
  timesTackled,
  handballs_per_90, 
  cornersWon_per_90, 
  touches_per_90, 
  ballRecoveries_per_90, 
  possessionLost_per_90,
  offsides_per_90, 
  touchesInOppositionBox_per_90, 
  timesTackled_per_90 }) {
  
  const [formData, setFormData] = React.useState({
    handballs: handballs || '',
    cornersWon: cornersWon || '',
    touches: touches || '',
    ballRecoveries: ballRecoveries || '',
    possessionLost: possessionLost || '',
    offsides: offsides || '',
    touchesInOppositionBox: touchesInOppositionBox || '',
    touchesInOppositionBox_per: touchesInOppositionBox_per || '',
    timesTackled: timesTackled || '',
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
                {isForm ? (
                    renderTextField('Handballs', 'handballs', formData.handballs, handleChange)
                ) : (
                    <Typography variant="b4">Handballs: {handballs ? handballs : 'N/A'}</Typography>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                {isForm ? (
                    renderTextField('Corners Won', 'cornersWon', formData.cornersWon, handleChange)
                ) : (
                    <Typography variant="b4">Corners Won: {cornersWon ? cornersWon : 'N/A'}</Typography>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                {isForm ? (
                    renderTextField('Touches', 'touches', formData.touches, handleChange)
                ) : (
                    <Typography variant="b4">Touches: {touches ? touches : 'N/A'}</Typography>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                {isForm ? (
                    renderTextField('Ball Recoveries', 'ballRecoveries', formData.ballRecoveries, handleChange)
                ) : (
                    <Typography variant="b4">Ball Recoveries: {ballRecoveries ? ballRecoveries : 'N/A'}</Typography>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                {isForm ? (
                    renderTextField('Possession Lost', 'possessionLost', formData.possessionLost, handleChange)
                ) : (
                    <Typography variant="b4">Possession Lost: {possessionLost ? possessionLost : 'N/A'}</Typography>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                {isForm ? (
                    renderTextField('Offsides', 'offsides', formData.offsides, handleChange)
                ) : (
                    <Typography variant="b4">Offsides: {offsides ? offsides : 'N/A'}</Typography>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                {isForm ? (
                    renderTextField('Touches in Opposition Box', 'touchesInOppositionBox', formData.touchesInOppositionBox, handleChange)
                ) : (
                    <Typography variant="b4">Touches in Opposition Box: {touchesInOppositionBox ? touchesInOppositionBox : 'N/A'}</Typography>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                {isForm ? (
                    renderTextField('Touches in Opposition Box %', 'touchesInOppositionBox_per', calculateAcc('touches', 'touchesInOppositionBox'), handleChange, false, true)
                ) : (
                    <Typography variant="b4">Touches in Opposition Box %: {touchesInOppositionBox_per ? touchesInOppositionBox_per : 'N/A'}</Typography>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                {isForm ? (
                    renderTextField('Times Tackled', 'timesTackled', formData.timesTackled, handleChange)
                ) : (
                    <Typography variant="b4">Times Tackled: {timesTackled ? timesTackled : 'N/A'}</Typography>
                )}
            </Grid>
        </Grid>
    </>
  );


  const per90Stats = (
    <>
      <Grid container spacing={2} direction="column">
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                  renderTextField('Handballs', 'handballs_per_90', calculatePer90('handballs', minutesPlayed), handleChange, false, true)
              ) : (
                  <Typography variant="b4">
                      Handballs: {handballs_per_90 ? handballs_per_90 : 'N/A'}
                  </Typography>
              )}
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                  renderTextField('Corners Won', 'cornersWon_per_90', calculatePer90('cornersWon', minutesPlayed), handleChange, false, true)
              ) : (
                  <Typography variant="b4">
                      Corners Won: {cornersWon_per_90 ? cornersWon_per_90 : 'N/A'}
                  </Typography>
              )}
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                  renderTextField('Touches', 'touches_per_90', calculatePer90('touches', minutesPlayed), handleChange, false, true)
              ) : (
                  <Typography variant="b4">
                      Touches: {touches_per_90 ? touches_per_90 : 'N/A'}
                  </Typography>
              )}
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                  renderTextField('Ball Recoveries', 'ballRecoveries_per_90', calculatePer90('ballRecoveries', minutesPlayed), handleChange, false, true)
              ) : (
                  <Typography variant="b4">
                      Ball Recoveries: {ballRecoveries_per_90 ? ballRecoveries_per_90 : 'N/A'}
                  </Typography>
              )}
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                  renderTextField('Possession Lost', 'possessionLost_per_90', calculatePer90('possessionLost', minutesPlayed), handleChange, false, true)
              ) : (
                  <Typography variant="b4">
                      Possession Lost: {possessionLost_per_90 ? possessionLost_per_90 : 'N/A'}
                  </Typography>
              )}
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                  renderTextField('Offsides', 'offsides_per_90', calculatePer90('offsides', minutesPlayed), handleChange, false, true)
              ) : (
                  <Typography variant="b4">
                      Offsides: {offsides_per_90 ? offsides_per_90 : 'N/A'}
                  </Typography>
              )}
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                  renderTextField('Touches in Opposition Box', 'touchesInOppositionBox_per_90', calculatePer90('touchesInOppositionBox', minutesPlayed), handleChange, false, true)
              ) : (
                  <Typography variant="b4">
                      Touches in Opposition Box: {touchesInOppositionBox_per_90 ? touchesInOppositionBox_per_90 : 'N/A'}
                  </Typography>
              )}
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                  renderTextField('Touches in Opposition Box %', 'touchesInOppositionBox_per', calculateAcc('touches', 'touchesInOppositionBox'), handleChange, false, true)
              ) : (
                  <Typography variant="b4">Touches in Opposition Box %: {touchesInOppositionBox_per ? touchesInOppositionBox_per : 'N/A'}</Typography>
              )}
          </Grid>
          <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                  renderTextField('Times Tackled', 'timesTackled_per_90', calculatePer90('timesTackled', minutesPlayed), handleChange, false, true)
              ) : (
                  <Typography variant="b4">
                      Times Tackled: {timesTackled_per_90 ? timesTackled_per_90 : 'N/A'}
                  </Typography>
              )}
          </Grid>
      </Grid>
    </>
  );


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "100%" }}>
          <Typography variant="h4" gutterBottom>Possession</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
