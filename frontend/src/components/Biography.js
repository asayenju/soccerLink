import * as React from 'react';
import { Avatar, Typography, Grid, Button, TextField, InputAdornment, IconButton, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/system';

// Styled components
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

const Biography = ({ isForm, name, age, position, email, phonenumber, nationality, academy, photoUrl, formData }) => {
  const [formState, setFormState] = React.useState(formData || {});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderTextField = (label, name, value, handleChange, showArrows = true, readOnly = false) => (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <Typography variant="b1" sx={{ color: 'white' }}>
          {label}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <WhiteBorderTextField
          type="text"
          name={name}
          value={value}
          onChange={handleInputChange}
          disabled={!isForm || readOnly}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: !isForm || readOnly,
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
                {name === 'email' && (
                  <WhiteIconButton aria-label="verify email" size="small">
                    <CheckIcon />
                  </WhiteIconButton>
                )}
              </InputAdornment>
            ),
          }}
          sx={{ width: '100%' }}
        />
      </Grid>
    </Grid>
  );

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="flex-start" width="100%" padding="20px">
      {/* Avatar Section */}
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" marginRight="20px">
        <Avatar sx={{ width: 150, height: 150, backgroundColor: '#065F89', marginBottom: 2 }}>
          {isForm ? (
            <Button component="label" variant="contained" startIcon={<AddAPhotoIcon />}>
              <input type="file" hidden />
            </Button>
          ) : photoUrl ? (
            <img src={photoUrl} alt={`${name}'s photo`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          ) : (
            <AccountCircleIcon sx={{ fontSize: 150 }} />
          )}
        </Avatar>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#065F89' }}>
          {name || 'Name'}
        </Typography>
      </Box>

      {/* Biography Section */}
      <Box flex={1} maxWidth="600px" marginLeft="20px">
        <Typography variant="h3" sx={{ marginBottom: 2, textAlign: 'center', color: '#065F89' }}>
          Biography
        </Typography>
        <Box padding={2} border="1px solid #065F89" bgcolor="#065F89" color="whitesmoke" borderRadius={1}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {isForm ? (
                renderTextField('Age', 'age', formState.age || '', handleInputChange, true)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>Age: {age || 'N/A'}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              {isForm ? (
                renderTextField('Position', 'position', formState.position || '', handleInputChange, true)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>Position: {position || 'N/A'}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              {isForm ? (
                renderTextField('Email', 'email', formState.Appearances || '', handleInputChange, true)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>Email: {email || 'N/A'}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              {isForm ? (
                renderTextField('Phone', 'phonenumber', formState.phonenumber || '', handleInputChange, true)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>Tel.: {phonenumber || 'N/A'}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              {isForm ? (
                renderTextField('Nationality', 'nationality', formState.nationality || '', handleInputChange, true)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>Nationality: {nationality || 'N/A'}</Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              {isForm ? (
                renderTextField('Academy', 'academy', formState.academy || '', handleInputChange, true)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>Academy/School: {academy || 'N/A'}</Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Biography;
