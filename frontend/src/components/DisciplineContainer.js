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

export default function DisciplineContainer({ 
  isForm,
  minutesPlayed,
  totalCards, 
  yellowCards, 
  redCards,
  totalCards_per_90, 
  yellowCards_per_90, 
  redCards_per_90}) {

  const [formData, setFormData] = React.useState({
    totalCards: totalCards || '',
    yellowCards: yellowCards || '',
    redCards: redCards || '',
    });

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
                        renderTextField('Total Cards', 'totalCards', formData.totalCards, handleChange)
                    ) : (
                        <Typography variant="b4">Total Cards: {totalCards ? totalCards : 'N/A'}</Typography>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                        renderTextField('Yellow Cards', 'yellowCards', formData.yellowCards, handleChange)
                    ) : (
                        <Typography variant="b4">Yellow Cards: {yellowCards ? yellowCards : 'N/A'}</Typography>
                )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                        renderTextField('Red Cards', 'redCards', formData.redCards, handleChange)
                    ) : (
                        <Typography variant="b4">Red Cards: {redCards ? redCards : 'N/A'}</Typography>
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
                  renderTextField('Total Cards', 'totalCards_per_90', calculatePer90('totalCards', minutesPlayed), handleChange, false, true)
                ) : (
                  <Typography variant="b4">
                      Total Cards: {totalCards_per_90 ? totalCards_per_90 : 'N/A'}
                  </Typography>
              )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
            {isForm ? (
                        renderTextField('Yellow Cards', 'yellowCards_per_90', calculatePer90('yellowCards', minutesPlayed), handleChange, false, true)
                    ) : (
                        <Typography variant="b4">
                            Yellow Cards: {yellowCards_per_90 ? yellowCards_per_90 : 'N/A'}
                        </Typography>
                    )}
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "row" }}>
              {isForm ? (
                        renderTextField('Red Cards', 'redCards_per_90', calculatePer90('redCards', minutesPlayed), handleChange, false, true)
                    ) : (
                        <Typography variant="b4">
                            Red Cards: {redCards_per_90 ? redCards_per_90 : 'N/A'}
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
          <Typography variant="h4" gutterBottom>Discipline</Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
