import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ToggleButtons from './ToggleButtons';

const RadarChart = ({ selectedPlayers }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // State for managing the filter dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState('Appearance');
  const open = Boolean(anchorEl);

  // State for managing stats type (Total or Per 90 mins)
  const [statsType, setStatsType] = useState('total');

// Data label categories
const labelsMapping = {
  Appearance: ['Games', 'Minutes', 'Starts', 'Sub On', 'Sub Off'],
  Defense: [
    'Interceptions',
    'Blocked Shots',
    'Clean Sheets',
    'Goals Conceded',
    'Goals Conceded Inside Box',
    'Goals Conceded Outside Box',
    'Own Goals',
    'Penalty Goals Conceded',
    'Shots On Target Faced',
    'Shots On Target Faced Inside Box',
    'Shots On Target Faced Outside Box'
  ],
  Discipline: ['Total Cards', 'Yellow Cards', 'Red Cards'],
  Duels: [
    'Take Ons Overrun',
    'Duels Contested',
    'Tackles Made',
    'Fouls From Tackle Attempts',
    'Last Man Tackles Made',
    'Take Ons Completed',
    'Fouls Won',
    'Fouls',
    'Penalties Won',
    'Aerial Duels Contested',
    'Aerial Duels Won',
    'Ground Duels Contested',
    'Ground Duels Won',
    'Duels Won',
  ],
  Goalkeeping: [
    'Shots Faced',
    'Saves Made',
    'Saves Made In Box',
    'Saves Made Out Box',
    'Penalties Faced',
    'Penalties Saved',
  ],
  Possession: [
    'Handballs',
    'Corners Won',
    'Touches',
    'Ball Recoveries',
    'Possession Lost',
    'Offsides',
    'Touches In Opposition Box',
    'Touches In Opposition Box %',
    'Times Tackled'
  ],
  Shooting: [
    'Total Shots',
    'Shots On Target',
    'Shots Off Target',
    'Shots Blocked',
    'Shots From Set Pieces',
    'Penalties',
    'Hit Woodwork',
    'Shooting Accuracy',
  ],
  Passing: [
    'Pass Attempts',
    'Passes Completed',
    'Assists',
    'Chances Created',
    'Opposition Half Pass Attempts',
    'Opposition Half Passes Completed',
    'Long Pass Attempts',
    'Long Passes Completed',
    'Cross Attempts',
    'Crosses Completed',
    'Open Play Crosses Completed',
    'Corners Crosses',
    'Through Balls',
    'Passes Completed in Own Half',
    'Lay Offs Completed',
    'Forward Passes',
    'Backward Passes',
    'Sideways Passes',
  ],
};

const labels = labelsMapping[selectedLabel];

// Event handlers for filter dropdown
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = (label) => {
  setSelectedLabel(label);
  setAnchorEl(null);
};

useEffect(() => {
  const ctx = chartRef.current.getContext('2d');

  if (chartInstanceRef.current) {
    chartInstanceRef.current.destroy();
  }

  const colors = ['#00A5E3', '#8DD7BF', '#FF97C5', '#FF5768'];

  const datasets = selectedPlayers.length > 0 ? selectedPlayers.map((player, index) => {
    const data = labels.map(label => {
      let value = player?.stats[selectedLabel][label] || 0;

      if (statsType === 'per90' && label !== 'Minutes') {
        const minutesPlayed = player?.stats[selectedLabel]['Minutes'] || 1;
        value = (value / minutesPlayed) * 90;
      }

      // Custom transformations for specific labels
      switch(label) {
        case 'Minutes':
          value = value / 100;
          break;
        case 'Interceptions':
          value = value / 2;
          break;
        case 'Touches':
          value = value / 10;
          break;
        case 'Shooting Accuracy':
        case 'Pass Attempts':
        case 'Passes Completed':
          value = value / 4;
          break;
        default:
          break;
      }

      return value;
    });

    return {
      label: player ? player.name : `Player ${index + 1}`,
      data: data,
      fill: true,
      backgroundColor: `${colors[index]}66`,
      borderColor: colors[index],
      borderWidth: 3,
      pointBackgroundColor: colors[index],
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: colors[index],
      playerData: player,
    };
  }) : [{
    label: 'No Data',
    data: labels.map(() => 0),
    fill: true,
    backgroundColor: '#CCCCCC66',
    borderColor: '#CCCCCC',
    borderWidth: 3,
    pointBackgroundColor: '#CCCCCC',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: '#CCCCCC',
  }];

  // Calculate the max value dynamically
  const maxValues = labels.map((label, index) => 
    Math.max(...datasets.map(dataset => dataset.data[index]))
  );

  const roundedMax = Math.ceil(Math.max(...maxValues) / 5) * 5;
  const max = roundedMax === 0 ? 10 : roundedMax;

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              const dataset = tooltipItem.dataset;
              const dataIndex = tooltipItem.dataIndex;
              const playerName = dataset.playerData?.name || '';
              const originalValue = selectedPlayers[tooltipItem.datasetIndex]?.stats[selectedLabel][labels[dataIndex]] || 0;
              return `${playerName}: ${originalValue}`;
            },
          },
        },
      },
      elements: {
        line: {
          borderWidth: 3,
        },
      },
      scales: {
        r: {
          max: max,
          beginAtZero: true,
          ticks: {
            display: false,
          },
          pointLabels: {
            color: '#065F89',
            font: {
              size: 12,
            },
            callback: function(label) {
              return label.split(' ').join('\n'); 
            }
          },
          grid: {
            color: '#065F89',
          },
        },
      },
      maintainAspectRatio: true,
    },
  };

  chartInstanceRef.current = new Chart(ctx, config);

  return () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
  };
}, [selectedPlayers, selectedLabel, statsType]);

return (
  <div style={{ width: '750px', height: '800px', margin: 'auto', position: 'relative' }}>
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2vh' }}>
      <ToggleButtons statsType={statsType} setStatsType={setStatsType} />
    </div>
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: "white", backgroundColor: "#065F89", padding: '2vh', '&:hover': {
            backgroundColor: '#054a6e',
          }, }}
      >
        {selectedLabel}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(selectedLabel)}
        TransitionComponent={Fade}
      >
        {Object.keys(labelsMapping).map((label) => (
          <MenuItem key={label} onClick={() => handleClose(label)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
    <canvas ref={chartRef} />
  </div>
);
};

export default RadarChart;