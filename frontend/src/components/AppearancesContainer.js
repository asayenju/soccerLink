import React from 'react';
import { styled } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import NestedTabs from './NestedTabsForStatCards';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import InputAdornment from '@mui/material/InputAdornment';

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

export default function AppearancesContainer({
  isForm,
  formData,
  handleChange,
  games,
  minutes,
  starts,
  sub_off,
  sub_on,
  games_per_90,
  minutes_per_90,
  starts_per_90,
  sub_off_per_90,
  sub_on_per_90,
}) {
  const renderTextField = (label, name, value, handleChange) => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (/^\d*$/.test(value)) {
        handleChange(e);
      }
    };

    return (
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Typography variant="body1" sx={{ color: 'white' }}>
            {label}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <WhiteBorderTextField
            type="text"
            name={name}
            value={value}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {isForm && (
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
          />
        </Grid>
      </Grid>
    );
  };

  const totalStats = (
    <Grid container spacing={2} direction="column">
      <Grid item>
        {isForm ? (
          renderTextField('Games', 'games', formData.games || '', handleChange)
        ) : (
          <Typography variant="body1">
            Games: {games ? games : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Minutes', 'minutes', formData.minutes || '', handleChange)
        ) : (
          <Typography variant="body1">
            Minutes: {minutes ? minutes : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Starts', 'starts', formData.starts || '', handleChange)
        ) : (
          <Typography variant="body1">
            Starts: {starts ? starts : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Subbed Off', 'sub_off', formData.sub_off || '', handleChange)
        ) : (
          <Typography variant="body1">
            Subbed Off: {sub_off ? sub_off : 'N/A'}
          </Typography>
        )}
      </Grid>
      <Grid item>
        {isForm ? (
          renderTextField('Subbed On', 'sub_on', formData.sub_on || '', handleChange)
        ) : (
          <Typography variant="body1">
            Subbed On: {sub_on ? sub_on : 'N/A'}
          </Typography>
        )}
      </Grid>
    </Grid>
  );

  const per90Stats = (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="body1">
          Games per 90: {games_per_90 ? games_per_90.toFixed(2) : 'N/A'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Minutes per 90: {minutes_per_90 ? minutes_per_90.toFixed(2) : 'N/A'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Starts per 90: {starts_per_90 ? starts_per_90.toFixed(2) : 'N/A'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Subbed Off per 90: {sub_off_per_90 ? sub_off_per_90.toFixed(2) : 'N/A'}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Subbed On per 90: {sub_on_per_90 ? sub_on_per_90.toFixed(2) : 'N/A'}
        </Typography>
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
            width: '80%',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Appearances
          </Typography>
          <NestedTabs totalStats={totalStats} per90Stats={per90Stats} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
