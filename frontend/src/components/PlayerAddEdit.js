import React from 'react';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import StatsTabs from './StatsTab';
import Button from '@mui/material/Button';
import Biography from './Biography'

const PlayerAddEdit = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Biography isForm={true} />
      <StatsTabs isForm={true} />
      <div 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          margin: '1vh'
          // No need for alignItems as we want vertical position to remain natural
        }}
      >
       <Button 
        variant="contained" 
        size="large" 
        sx={{ 
          width: '15%', 
          backgroundColor: 'green',
          '&:hover': {
            backgroundColor: '#50C878', // Change hover color to light green
          },
        }}
      >
        SAVE
      </Button>
      </div>
      <Footer />
    </>
  );
};

export default PlayerAddEdit;
