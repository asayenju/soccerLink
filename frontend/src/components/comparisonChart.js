import React, { useState } from 'react';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import AddPlayer from './AddPlayer';
import RadarChart from './radarChart';

const ComparisonChart = ({ showHeaderFooter = true }) => {
  const [selectedPlayers, setSelectedPlayers] = useState([null, null, null, null]);

  const handleSelectPlayer = (players) => {
    setSelectedPlayers(players);
  };

  return (
    <>
      {showHeaderFooter && <ResponsiveAppBar />}
      <AddPlayer onSelectPlayer={handleSelectPlayer} />
      <RadarChart selectedPlayers={selectedPlayers} />
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default ComparisonChart;
