import React, { useState } from 'react';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import AddPlayer from './AddPlayer';
import RadarChart from './radarChart';

const ComparisonChart = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([null, null, null, null]);

  const handleSelectPlayer = (players) => {
    setSelectedPlayers(players);
  };

  return (
    <>
      <ResponsiveAppBar />
      <AddPlayer onSelectPlayer={handleSelectPlayer} />
      <RadarChart selectedPlayers={selectedPlayers} />
      <Footer />
    </>
  );
};

export default ComparisonChart;
