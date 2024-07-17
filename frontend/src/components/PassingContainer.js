import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
  openPlayCrossesCompleted, 
  cornersTaken,
  throughBalls, 
  layOffsCompleted, 
  passesCompletedOppHalf, 
  passesCompletedOwnHalf,
  forwardPasses, 
  backwardPasses, 
  sidewaysPasses,
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
  cornersTaken_per_90,
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
      pass: pass || '',
      oppass_atmpt: oppass_atmpt || '',
      oppass_comp: oppass_comp || '',
      longpass_atmpt: longpass_atmpt || '',
      longpass_comp: longpass_comp || '',
      crossatmpt: crossatmpt || '',
      crosscomp: crosscomp || '',
      openPlayCrossesCompleted: openPlayCrossesCompleted || '',
      cornersTaken: cornersTaken || '',
      throughBalls: throughBalls || '',
      layOffsCompleted: layOffsCompleted || '',
      passesCompletedOppHalf: passesCompletedOppHalf || '',
      passesCompletedOwnHalf: passesCompletedOwnHalf || '',
      forwardPasses: forwardPasses || '',
      backwardPasses: backwardPasses || '',
      sidewaysPasses: sidewaysPasses || '',
    });

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
  )

    const totalStats = (
        <>
          <Grid container spacing={2} direction="column">
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Passes Attempted: {passatmpt?passatmpt: "N/A"}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Passes Completed: {passcomp?passcomp: "N/A"}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Assists: {assists?assists: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Chances Created: {chances?chances: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Passing Accuracy %: {pass_per?pass_per: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Open-play Pass Attempted: {oppass_atmpt?oppass_atmpt: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Open-play Pass Completed: {oppass_comp?oppass_comp: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Open-play Pass Accuracy %: {oppass_per?oppass_per: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Long Pass Attempted: {longpass_atmpt?longpass_atmpt: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Long Pass Completed: {longpass_comp?longpass_comp: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Long Pass Accuracy %: {longpass_per?longpass_per: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Crosses Attempted: {crossatmpt?crossatmpt: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Crosses Completed: {crosscomp?crosscomp: 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Open-play Crosses: {openPlayCrossesCompleted ? openPlayCrossesCompleted : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Corners Taken: {cornersTaken ? cornersTaken : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Through-balls: {throughBalls ? throughBalls : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Lay-offs Completed: {layOffsCompleted ? layOffsCompleted : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Passes completed (Opp. Half): {passesCompletedOppHalf ? passesCompletedOppHalf : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Passes completed (Own Half): {passesCompletedOwnHalf ? passesCompletedOwnHalf : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Forward Passes: {forwardPasses ? forwardPasses : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Backward Passes: {backwardPasses ? backwardPasses : 'N/A'}</Typography>
            </Grid>
            <Grid item sx={{display: "flex", flexDirection: "row"}}>
              <Typography variant="b4">Sideways Passes: {sidewaysPasses ? sidewaysPasses : 'N/A'}</Typography>
            </Grid>
          </Grid>
        </>
      );
      const per90Stats = (
        <>
            <Grid container spacing={2} direction="column">
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Passes Attempted: {passatmpt_per_90 ? passatmpt_per_90 : "N/A"}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Passes Completed: {passcomp_per_90 ? passcomp_per_90 : "N/A"}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Assists: {assists_per_90 ? assists_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Chances Created: {chances_per_90 ? chances_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Passing Accuracy %: {pass_per_per_90 ? pass_per_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Open-play Pass Attempted: {oppass_atmpt_per_90 ? oppass_atmpt_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Open-play Pass Completed: {oppass_comp_per_90 ? oppass_comp_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Open-play Pass Accuracy %: {oppass_per_per_90 ? oppass_per_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Long Pass Attempted: {longpass_atmpt_per_90 ? longpass_atmpt_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Long Pass Completed: {longpass_comp_per_90 ? longpass_comp_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Long Pass Accuracy %: {longpass_per_per_90 ? longpass_per_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Crosses Attempted: {crossatmpt_per_90 ? crossatmpt_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Crosses Completed: {crosscomp_per_90 ? crosscomp_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Open-play Crosses: {openPlayCrossesCompleted_per_90 ? openPlayCrossesCompleted_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Corners Taken: {cornersTaken_per_90 ? cornersTaken_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Through-balls: {throughBalls_per_90 ? throughBalls_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Lay-offs Completed: {layOffsCompleted_per_90 ? layOffsCompleted_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Passes completed (Opp. Half): {passesCompletedOppHalf_per_90 ? passesCompletedOppHalf_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Passes completed (Own Half): {passesCompletedOwnHalf_per_90 ? passesCompletedOwnHalf_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Forward Passes: {forwardPasses_per_90 ? forwardPasses_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Backward Passes: {backwardPasses_per_90 ? backwardPasses_per_90 : 'N/A'}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1">Sideways Passes: {sidewaysPasses_per_90 ? sidewaysPasses_per_90 : 'N/A'}</Typography>
                </Grid>
            </Grid>
        </>
      );
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh'}}>
        <Box sx={{ bgcolor: '#065F89', p: 4, borderRadius: 2, textAlign: 'center', color: "whitesmoke", width: "80%"}}>
          <Typography variant="h4" gutterBottom>Passing</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}


