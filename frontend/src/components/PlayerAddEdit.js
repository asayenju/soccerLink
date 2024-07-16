import React from 'react';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import StatsTabs from './StatsTab';

const PlayerAddEdit = () => {
  return (
    <>
        <ResponsiveAppBar />
        <StatsTabs isForm={true}/>
        <Footer />
    </>

  );
};

export default PlayerAddEdit;