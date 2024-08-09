import * as React from 'react';
import { Avatar, Typography, Grid, Button, TextField, InputAdornment, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CheckIcon from '@mui/icons-material/Check';

const WhiteBorderTextField = (props) => (
    <TextField
        {...props}
        variant="outlined"
        sx={{
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: 'whitesmoke',
                },
                '&:hover fieldset': {
                    borderColor: 'whitesmoke',
                },
            },
            input: {
                color: 'whitesmoke',
            },
            label: {
                color: 'whitesmoke',
            },
            width: '100%',
        }}
    />
);

const WhiteIconButton = (props) => (
    <IconButton {...props} sx={{ color: 'whitesmoke' }} />
);

const Biography = ({ isForm, name, age, position, email, phonenumber, nationality, academy, photoUrl, Appearances, gamestarts, minutesplayed, formData }) => {
    const [formState, setFormState] = React.useState(formData || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const renderTextField = (label, name, value, handleChange, type = 'text') => {
        let inputProps = {};
        let adornment = null;

        if (type === 'number') {
            inputProps = {
                endAdornment: (
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
                ),
            };
        } else if (type === 'phone') {
            adornment = (
                <InputAdornment position="start">
                    +1 {/* Add country code or customize */}
                </InputAdornment>
            );
        } else if (type === 'email') {
            inputProps = {
                endAdornment: (
                    <InputAdornment position="end">
                        <WhiteIconButton aria-label="verify email" size="small">
                            <CheckIcon />
                        </WhiteIconButton>
                    </InputAdornment>
                ),
            };
        }

        return (
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                    <Typography variant="body1" sx={{ color: 'white' }}>
                        {label}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <WhiteBorderTextField
                        type={type}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            ...inputProps,
                            startAdornment: adornment,
                        }}
                        sx={{ width: '100%' }}
                    />
                </Grid>
            </Grid>
        );
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            {/* Avatar Section */}
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 16, justifyContent: 'center', alignItems: 'center' }}>
                <Avatar sx={{ width: 180, height: 180, backgroundColor: '#065F89' }}>
                    {isForm ? (
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                            Upload file
                            <input type="file" hidden />
                        </Button>
                    ) : photoUrl ? (
                        <img src={photoUrl} alt={`${name}'s photo`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                    ) : (
                        <AccountCircleIcon sx={{ fontSize: 180 }} />
                    )}
                </Avatar>
                <Typography variant="h6" sx={{ marginBottom: 1, textAlign: 'center', color: '#065F89' }}>
                    {name || 'Name'}
                </Typography>
            </div>

            {/* Biography Details Section */}
            <div style={{ flex: 1 }}>
                <Typography variant="h6" sx={{ marginBottom: 16, textAlign: 'center', color: '#065F89' }}>
                    Biography
                </Typography>
                <div style={{ padding: 16, border: '1px solid #065F89', marginBottom: 16, backgroundColor: '#065F89', color: 'whitesmoke', borderRadius: 4 }}>
                    <Grid container spacing={4}>
                        {/* First Column */}
                        <Grid item xs={12} sm={6}>
                            <div style={{ textAlign: 'center', marginBottom: 16 }}>
                                {isForm ? (
                                    renderTextField('Age', 'age', formState.age || '', handleChange, 'number')
                                ) : (
                                    <Typography variant="h6">Age: {age || 'N/A'}</Typography>
                                )}
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: 16 }}>
                                {isForm ? (
                                    renderTextField('Position', 'position', formState.position || '', handleChange)
                                ) : (
                                    <Typography variant="h6">Position: {position || 'N/A'}</Typography>
                                )}
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: 16 }}>
                                {isForm ? (
                                    renderTextField('Appearances', 'Appearances', formState.Appearances || '', handleChange, 'number')
                                ) : (
                                    <Typography variant="h6">Appearances: {Appearances || 'N/A'}</Typography>
                                )}
                            </div>
                        </Grid>

                        {/* Second Column */}
                        <Grid item xs={12} sm={6}>
                            <div style={{ textAlign: 'center', marginBottom: 16 }}>
                                {isForm ? (
                                    renderTextField('Phone', 'phonenumber', formState.phonenumber || '', handleChange, 'phone')
                                ) : (
                                    <Typography variant="h6">Tel.: {phonenumber || 'N/A'}</Typography>
                                )}
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: 16 }}>
                                {isForm ? (
                                    renderTextField('Nationality', 'nationality', formState.nationality || '', handleChange)
                                ) : (
                                    <Typography variant="h6">Nationality: {nationality || 'N/A'}</Typography>
                                )}
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: 16 }}>
                                {isForm ? (
                                    renderTextField('Academy/School', 'academy', formState.academy || '', handleChange)
                                ) : (
                                    <Typography variant="h6">Academy/School: {academy || 'N/A'}</Typography>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Biography;
