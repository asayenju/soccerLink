import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const RadarChart = ({ selectedPlayers }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // State for managing the filter dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState('Appearance');
  const open = Boolean(anchorEl);

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
      'Shots On Target Faced Outside Box',
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

    // Destroy previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Colors for each player
    const colors = ['#00A5E3', '#8DD7BF', '#FF97C5', '#FF5768'];

    // Prepare data for the radar chart based on selected label
    const datasets = selectedPlayers.map((player, index) => ({
      label: player ? player.name : `Player ${index + 1}`,
      data: labels.map(label => player?.stats[label.toLowerCase()] || 0),
      fill: true,
      backgroundColor: `${colors[index]}66`, // 40% opacity
      borderColor: colors[index],
      borderWidth: 3, // Bold line
      pointBackgroundColor: colors[index],
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: colors[index],
    }));

    const data = {
      labels: labels,
      datasets: datasets,
    };

    // Chart configuration
    const config = {
      type: 'radar',
      data: data,
      options: {
        plugins: {
          legend: {
            display: false, // Hide the legend/key section
          },
        },
        elements: {
          line: {
            borderWidth: 3, // Bold line
          },
        },
        scales: {
          r: {
            beginAtZero: true,
            ticks: {
              display: false, // Hide the axis labels (0, 1, 2, etc.)
            },
            pointLabels: {
              color: '#065F89', // Label font color
              font: {
                size: 16, // Increase the font size
              },
            },
            grid: {
              color: '#065F89', // Grid lines color
            },
          },
        },
      },
    };

    // Create chart
    chartInstanceRef.current = new Chart(ctx, config);

    // Cleanup chart instance on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [selectedPlayers, selectedLabel]);

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start' }}>
        <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{color: "white", backgroundColor: "#065F89", padding: '2vh', '&:hover': {
              backgroundColor: '#054a6e', // Hover background color
            },}}
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
