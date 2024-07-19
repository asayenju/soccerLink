import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled } from '@mui/system';
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

export default function PassingContainer({
  isForm,
  passatmpt,
  passcomp,
  assists,
  chances,
  pass_per,
  oppass_atmpt,
  oppass_comp,
  oppass_per,
  longpass_atmpt,
  longpass_comp,
  longpass_per,
  crossatmpt,
  crosscomp,
  cross_per,
  openPlayCrossesCompleted,
  openPlayCrosses_per,
  cornersCrosses,
  cornersCrosses_per,
  throughBalls,
  throughBalls_per,
  layOffsCompleted,
  layOffsCompleted_per,
  passesCompletedOppHalf,
  passesCompletedOppHalf_per,
  passesCompletedOwnHalf,
  passesCompletedOwnHalf_per,
  forwardPasses,
  backwardPasses,
  sidewaysPasses,
  forwardPasses_per,
  backwardPasses_per,
  sidewaysPasses_per,
  passatmpt_per_90,
  passcomp_per_90,
  assists_per_90,
  chances_per_90,
  pass_per_per_90,
  oppass_atmpt_per_90,
  oppass_comp_per_90,
  oppass_per_per_90,
  longpass_atmpt_per_90,
  longpass_comp_per_90,
  longpass_per_per_90,
  crossatmpt_per_90,
  crosscomp_per_90,
  openPlayCrossesCompleted_per_90,
  cornersCrosses_per_90,
  throughBalls_per_90,
  layOffsCompleted_per_90,
  passesCompletedOppHalf_per_90,
  passesCompletedOwnHalf_per_90,
  forwardPasses_per_90,
  backwardPasses_per_90,
  sidewaysPasses_per_90,
  minutesPlayed
}) {
  const [formData, setFormData] = React.useState({
    passatmpt: passatmpt || '',
    passcomp: passcomp || '',
    assists: assists || '',
    chances: chances || '',
    oppass_atmpt: oppass_atmpt || '',
    oppass_comp: oppass_comp || '',
    longpass_atmpt: longpass_atmpt || '',
    longpass_comp: longpass_comp || '',
    crossatmpt: crossatmpt || '',
    crosscomp: crosscomp || '',
    openPlayCrossesCompleted: openPlayCrossesCompleted || '',
    cornersCrosses: cornersCrosses || '',
    throughBalls: throughBalls || '',
    layOffsCompleted: layOffsCompleted || '',
    passesCompletedOppHalf: passesCompletedOppHalf || '',
    passesCompletedOwnHalf: passesCompletedOwnHalf || '',
    forwardPasses: forwardPasses || '',
    backwardPasses: backwardPasses || '',
    sidewaysPasses: sidewaysPasses || '',
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
        <Grid item>
          {isForm ? (
            renderTextField('Passed Attempted', 'passatmpt', formData.passatmpt, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Passes Attempted: {passatmpt ? passatmpt : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Passes Completed', 'passcomp', formData.passcomp, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Passes Completed: {passcomp ? passcomp : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Assists', 'assists', formData.assists, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Assists: {assists ? assists : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Chances Created', 'chances', formData.chances, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Chances Created: {chances ? chances : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Passing Accuracy %', 'pass_per', calculateAcc('passatmpt', 'passcomp'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Passing Accuracy %: {pass_per ? pass_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Open-play Pass Attempted', 'oppass_atmpt', formData.oppass_atmpt, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Open-play Pass Attempted: {oppass_atmpt ? oppass_atmpt : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Open-play Passes Completed', 'oppass_comp', formData.oppass_comp, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Open-play Passes Completed: {oppass_comp ? oppass_comp : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Open-play Passing Percentage %', 'oppass_per', calculateAcc('oppass_atmpt', 'oppass_comp'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Open-play Passing Percentage %: {oppass_per ? oppass_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Long Pass Attempted', 'longpass_atmpt', formData.longpass_atmpt, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Long Pass Attempted: {longpass_atmpt ? longpass_atmpt : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Long Pass Completed', 'longpass_comp', formData.longpass_comp, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Long Pass Completed: {longpass_comp ? longpass_comp : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Long Pass Accuracy %', 'longpass_per', calculateAcc('longpass_atmpt', 'longpass_comp'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Long Pass Accuracy %: {longpass_per ? longpass_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Cross Attempted', 'crossatmpt', formData.crossatmpt, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Cross Attempted: {crossatmpt ? crossatmpt : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Cross Completed', 'crosscomp', formData.crosscomp, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Cross Completed: {crosscomp ? crosscomp : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Cross Accuracy %', 'cross_per', calculateAcc('crossatmpt', 'crosscomp'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Cross Accuracy %: {cross_per ? cross_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Open-play Crosses Completed', 'openPlayCrossesCompleted', formData.openPlayCrossesCompleted, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Open-play Crosses Completed: {openPlayCrossesCompleted ? openPlayCrossesCompleted : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Open-play Cross Percentage %', 'openPlayCrosses_per', calculateAcc('crosscomp', 'openPlayCrossesCompleted'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Open Play Cross Percentage %: {openPlayCrosses_per? openPlayCrosses_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Corners Crosses', 'cornersCrosses', formData.cornersCrosses, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Corners Crosses: {cornersCrosses ? cornersCrosses : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Corner Cross Percentage %', 'cornerCrosses_per', calculateAcc('crosscomp', 'cornersCrosses'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Corner Cross Percentage %: {cornersCrosses_per? cornersCrosses : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Through Balls', 'throughBalls', formData.throughBalls, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Through Balls: {throughBalls ? throughBalls : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Through Ball Percentage %', 'throughBalls_per', calculateAcc('passcomp', 'throughBalls'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Through Ball Percentage %: {throughBalls_per? throughBalls_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Lay Offs Completed', 'layOffsCompleted', formData.layOffsCompleted, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Lay Offs Completed: {layOffsCompleted ? layOffsCompleted : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Lay Offs Percentage %', 'layOffsCompleted_per', calculateAcc('passcomp', 'layOffsCompleted'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Lay Offs Percentage %: {layOffsCompleted_per? layOffsCompleted_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Passes Completed in Opponent Half', 'passesCompletedOppHalf', formData.passesCompletedOppHalf, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Passes Completed in Opponent Half: {passesCompletedOppHalf ? passesCompletedOppHalf : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Passes Completed in Opponent Half Percentage %', 'passesCompletedOppHalf_per', calculateAcc('passcomp', 'passesCompletedOppHalf'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Passes Completed in Opponent Half Percentage %: {passesCompletedOppHalf_per ? passesCompletedOppHalf_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Passes Completed in Own Half', 'passesCompletedOwnHalf', formData.passesCompletedOwnHalf, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Passes Completed in Own Half: {passesCompletedOwnHalf ? passesCompletedOwnHalf : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Passes Completed in Own Half Percentage %', 'passesCompletedOwnHalf_per', calculateAcc('passcomp', 'passesCompletedOwnHalf'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Passes Completed in Own Half Percentage %: {passesCompletedOwnHalf_per ? passesCompletedOwnHalf_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Forward Passes', 'forwardPasses', formData.forwardPasses, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Forward Passes: {forwardPasses ? forwardPasses : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Forward Passes Percentage %', 'forwardPasses_per', calculateAcc('passcomp', 'forwardPasses'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Forward Passes Percentage %: {forwardPasses_per ? forwardPasses_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Backward Passes', 'backwardPasses', formData.backwardPasses, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Backward Passes: {backwardPasses ? backwardPasses : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Backward Passes Percentage %', 'backwardPasses_per', calculateAcc('passcomp', 'backwardPasses'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Backward Passes Percentage %: {backwardPasses_per ? backwardPasses_per : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Sideways Passes', 'sidewaysPasses', formData.sidewaysPasses, handleChange)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Sideways Passes: {sidewaysPasses ? sidewaysPasses : 'N/A'}
            </Typography>
          )}
        </Grid>
        <Grid item>
          {isForm ? (
            renderTextField('Sideways Passes Percentage %', 'sidewaysPasses_per', calculateAcc('passcomp', 'sidewaysPasses'), handleChange, false, true)
          ) : (
            <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              Sideways Passes Percentage %: {sidewaysPasses_per ? sidewaysPasses_per : 'N/A'}
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
      const per90Stats = (
        <>
          <Grid container spacing={2} direction="column">
            <Grid item>
              {isForm ? (
                renderTextField('Passes Attempted', 'passatmpt_per_90', calculatePer90('passatmpt', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Passes Attempted: {passatmpt_per_90 ? passatmpt_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Passes Completed', 'passcomp_per_90', calculatePer90('passcomp', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Passes Completed: {passcomp_per_90 ? passcomp_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Assists', 'assists_per_90', calculatePer90('assists', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Assists: {assists_per_90 ? assists_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Chances Created', 'chances_per_90', calculatePer90('chances', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Chances Created: {chances_per_90 ? chances_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Passing Accuracy %', 'pass_per', calculateAcc('passatmpt', 'passcomp'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Passing Accuracy %: {pass_per ? pass_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Open-play Pass Attempted', 'oppass_atmpt_per_90', calculatePer90('oppass_atmpt', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Open-play Pass Attempted: {oppass_atmpt_per_90 ? oppass_atmpt_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Open-play Pass Completed', 'oppass_comp_per_90', calculatePer90('oppass_comp', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Open-play Pass Completed: {oppass_comp_per_90 ? oppass_comp_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Open-play Passing Percentage %', 'oppass_per', calculateAcc('oppass_atmpt', 'oppass_comp'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Open-play Passing Percentage %: {oppass_per ? oppass_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Long Pass Attempted', 'longpass_atmpt_per_90', calculatePer90('longpass_atmpt', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Long Pass Attempted: {longpass_atmpt_per_90 ? longpass_atmpt_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Long Pass Completed', 'longpass_comp_per_90', calculatePer90('longpass_comp', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Long Pass Completed: {longpass_comp_per_90 ? longpass_comp_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Long Pass Accuracy %', 'longpass_per', calculateAcc('longpass_atmpt', 'longpass_comp'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Long Pass Accuracy %: {longpass_per ? longpass_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Crosses Attempted', 'crossatmpt_per_90', calculatePer90('crossatmpt', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Crosses Attempted: {crossatmpt_per_90 ? crossatmpt_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Crosses Completed', 'crosscomp_per_90', calculatePer90('crosscomp', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Crosses Completed: {crosscomp_per_90 ? crosscomp_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Cross Accuracy %', 'cross_per', calculateAcc('crossatmpt', 'crosscomp'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Cross Accuracy %: {cross_per ? cross_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Open-play Crosses', 'openPlayCrossesCompleted_per_90', calculatePer90('openPlayCrossesCompleted', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Open-play Crosses: {openPlayCrossesCompleted_per_90 ? openPlayCrossesCompleted_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Open-play Cross Percentage %', 'openPlayCrosses_per', calculateAcc('crosscomp', 'openPlayCrossesCompleted'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Open Play Cross Percentage %: {openPlayCrosses_per? openPlayCrosses_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Corners Crosses', 'cornersCrosses_per_90', calculatePer90('cornersTaken', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Corners Crosses: {cornersCrosses_per_90 ? cornersCrosses_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Corner Cross Percentage %', 'cornerCrosses_per', calculateAcc('crosscomp', 'cornersCrosses'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Corner Cross Percentage %: {cornersCrosses_per? cornersCrosses_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Through-balls', 'throughBalls_per_90', calculateAcc('throughBalls', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Through-balls: {throughBalls_per_90 ? throughBalls_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Through Ball Percentage %', 'throughBalls_per', calculateAcc('passcomp', 'throughBalls'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Through Ball Percentage %: {throughBalls_per? throughBalls_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Lay-offs Completed', 'layOffsCompleted_per_90', calculatePer90('layOffsCompleted', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Lay-offs Completed: {layOffsCompleted_per_90 ? layOffsCompleted_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Lay Offs Percentage %', 'layOffsCompleted_per', calculateAcc('passcomp', 'layOffsCompleted'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Lay Offs Percentage %: {layOffsCompleted_per? layOffsCompleted_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Passes completed (Opp. Half)', 'passesCompletedOppHalf_per_90', calculatePer90('passesCompletedOppHalf', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Passes completed in Opponent Half: {passesCompletedOppHalf_per_90 ? passesCompletedOppHalf_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Passes Completed in Opponent Half Percentage %', 'passesCompletedOppHalf_per', calculateAcc('passcomp', 'passesCompletedOppHalf'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Passes Completed in Opponent Half Percentage %: {passesCompletedOppHalf_per ? passesCompletedOppHalf_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Passes completed (Own Half)', 'passesCompletedOwnHalf_per_90', calculatePer90('passesCompletedOwnHalf', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Passes completed in Own Half: {passesCompletedOwnHalf_per_90 ? passesCompletedOwnHalf_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Passes Completed in Own Half Percentage %', 'passesCompletedOwnHalf_per', calculateAcc('passcomp', 'passesCompletedOwnHalf'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Passes Completed in Own Half Percentage %: {passesCompletedOwnHalf_per ? passesCompletedOwnHalf_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Forward Passes', 'forwardPasses_per_90', calculatePer90('forwardPasses', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Forward Passes: {forwardPasses_per_90 ? forwardPasses_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Forward Passes Percentage %', 'forwardPasses_per', calculateAcc('passcomp', 'forwardPasses'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Forward Passes Percentage %: {forwardPasses_per ? forwardPasses_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Backward Passes', 'backwardPasses_per_90', calculatePer90('backwardPasses', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Backward Passes: {backwardPasses_per_90 ? backwardPasses_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Backward Passes Percentage %', 'backwardPasses_per', calculateAcc('passcomp', 'backwardPasses'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Backward Passes Percentage %: {backwardPasses_per ? backwardPasses_per : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Sideways Passes', 'sidewaysPasses_per_90', calculatePer90('sidewaysPasses', minutesPlayed), handleChange, false, true)
              ) : (
                <Typography variant="body1" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Sideways Passes: {sidewaysPasses_per_90 ? sidewaysPasses_per_90 : 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item>
              {isForm ? (
                renderTextField('Sideways Passes Percentage %', 'sidewaysPasses_per', calculateAcc('passcomp', 'sidewaysPasses'), handleChange, false, true)
              ) : (
                <Typography variant="h5" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  Sideways Passes Percentage %: {sidewaysPasses_per ? sidewaysPasses_per : 'N/A'}
                </Typography>
              )}
            </Grid>
          </Grid>


        </>
      );
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh'}}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "100%"}}>
          <Typography variant="h4" gutterBottom>Passing</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}