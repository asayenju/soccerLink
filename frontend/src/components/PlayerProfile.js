import * as React from 'react';
import { Box } from '@mui/material';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import StatsTabs from './StatsTab';
import Biography from './Biography';

const PlayerProfile = ({ isForm, name, age, position, email, phonenumber, nationality, academy, photoUrl, Appearances, gamestarts, minutesplayed }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <Box sx={{ maxWidth: 1000, margin: 'auto', marginTop: 7 }}>
        <Biography
          isForm={isForm}
          name={name}
          age={age}
          position={position}
          email={email}
          phonenumber={phonenumber}
          nationality={nationality}
          academy={academy}
          photoUrl={photoUrl}
          Appearances={Appearances}
          gamestarts={gamestarts}
          minutesplayed={minutesplayed}
        />
      </Box>
      <StatsTabs />
      <Footer />
    </div>
  );
};

export default PlayerProfile;
