import * as React from 'react';
import { Avatar, Typography, Grid, TextField, InputAdornment, IconButton, Box } from '@mui/material';
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
  '& .MuiInputLabel-formControl': {
    top: '-5px',
  },
  '& .MuiOutlinedInput-input': {
    padding: '12.5px 14px',
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
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="b1" sx={{ color: 'white', marginBottom: '4px', whiteSpace: 'nowrap' }}>
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <WhiteBorderTextField
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
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
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      padding="20px"
      sx={{ overflowX: 'hidden' }}  // Prevent horizontal scrolling
    >
      {/* Avatar Section */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginRight={{ xs: 0, sm: '30vh' }} // Increased separation between Avatar and Biography section
        marginBottom={{ xs: '20px', sm: 0 }}
      >
        <Avatar sx={{ width: 300, height: 300, backgroundColor: '#065F89', marginBottom: 2 }}>
          {/* Avatar as before */}
        </Avatar>
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#065F89' }}>
          {name || 'Name'}
        </Typography>
      </Box>

      {/* Biography Section */}
      <Box flex={1} maxWidth="800px" marginLeft={{ xs: 0, sm: '10px' }}>
        <Typography variant="h3" sx={{ marginBottom: 2, textAlign: 'center', color: '#065F89' }}>
          Biography
        </Typography>
        <Box padding={7} border="1px solid #065F89" bgcolor="#065F89" color="whitesmoke" borderRadius={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              {isForm ? (
                renderTextField('Age', 'age', formState.age || '', handleInputChange, true)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  Age: {age || 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {isForm ? (
                renderTextField('Position', 'position', formState.position || '', handleInputChange)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  Position: {position || 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {isForm ? (
                renderTextField('Email', 'email', formState.email || '')
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  Email: {email || 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {isForm ? (
                renderTextField('Phone', 'phonenumber', formState.phonenumber || '', handleInputChange)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  Tel.: {phonenumber || 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {isForm ? (
                renderTextField('Nationality', 'nationality', formState.nationality || '', handleInputChange, true)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  Nationality: {nationality || 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {isForm ? (
                renderTextField('Academy', 'academy', formState.academy || '', handleInputChange, true)
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  Academy/School: {academy || 'N/A'}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Biography;
