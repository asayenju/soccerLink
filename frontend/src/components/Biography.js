import * as React from 'react';
import { Typography, Grid, TextField, InputAdornment, IconButton, Box, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckIcon from '@mui/icons-material/Check';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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

const AddPhotoButton = styled(Button)({
  width: 300,
  height: 300,
  backgroundColor: '#065F89',
  color: 'white',
  borderRadius: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#065F89',
    opacity: 0.8,
  },
});

const Biography = ({ isForm, name, age, position, email, phonenumber, nationality, academy, formData }) => {
  const [formState, setFormState] = React.useState(formData || {});
  const [photo, setPhoto] = React.useState(null);
  const fileInputRef = React.useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderTextField = (label, name, value, handleChange, showArrows = true, readOnly = false, type = 'text', placeholder = '', required = false) => (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="b1" sx={{ color: 'white', marginBottom: '4px', whiteSpace: 'nowrap' }}>
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <WhiteBorderTextField
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          disabled={!isForm || readOnly}
          placeholder={placeholder}
          required={required}
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
      sx={{ overflowX: 'auto' }}  // Enable horizontal scrolling
    >
      {/* Add Photo Section */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginRight={{ xs: 0, sm: '30vh' }} // Increased separation between Add Photo and Biography section
        marginBottom={{ xs: '20px', sm: 0 }}
      >
        <AddPhotoButton onClick={handlePhotoClick}>
          {photo ? (
            <img
              src={photo}
              alt="avatar"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <>
              <PersonAddIcon sx={{ fontSize: 100 }} />
              <Typography variant="body1">Add Photo</Typography>
            </>
          )}
        </AddPhotoButton>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <Typography variant="h6" sx={{ textAlign: 'center', color: '#065F89', marginTop: 2 }}>
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
                renderTextField('Age', 'age', formState.age || '', handleInputChange, true, false, 'text', '', true)  // Age is required
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
                renderTextField('Email', 'email', formState.email || '', handleInputChange, false, false, 'email', 'johndoe@example.com', true)  // Email is required
              ) : (
                <Typography variant="h6" sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  Email: {email || 'N/A'}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              {isForm ? (
                renderTextField('Phone', 'phonenumber', formState.phonenumber || '', handleInputChange, false, false, 'tel', '123456789', true)  // Phone number is required
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
                  Academy: {academy || 'N/A'}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Box>
        <div 
        style={{
            display: 'flex', 
            justifyContent: 'space-between', // Evenly space buttons
            margin: '1vh',
            width: '50%', // Adjust as needed for overall container width
            marginLeft: 'auto',
            marginRight: 'auto', // Center the button group horizontally
        }}
        >
            <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                width: '45%', // Width of each button relative to the container
                backgroundColor: 'green',
                '&:hover': {
                  backgroundColor: '#50C878', // Change hover color to light green
                },
              }}
            >
                
                SAVE
            </Button>
            <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                width: '45%', 
                backgroundColor: '#B81D13',
                '&:hover': {
                    backgroundColor: '#ED4337', // Change hover color to light green
                },
                }}
            >
                DELETE
            </Button>
            </div>

      </Box>
    </Box>
  );
};

export default Biography;
