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

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const colors = ['#00A5E3', '#8DD7BF', '#FF97C5', '#FF5768'];

    // Prepare data for the radar chart based on selected label
    const datasets = selectedPlayers.map((player, index) => {
      const data = labels.map(label => {
        // Divide only the 'Minutes' value by 100
        if (label === 'Minutes') {
          return player?.stats[selectedLabel][label] / 100 || 0;
        }
        return player?.stats[selectedLabel][label] || 0;
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
        // Attach player data to the dataset for access in tooltips
        playerData: player,
      };
    });

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
                // Get the dataset and data index
                const dataset = tooltipItem.dataset;
                const dataIndex = tooltipItem.dataIndex;
                
                // Get the player name and value from the dataset
                const playerName = dataset.playerData?.name || '';
                const originalValue = selectedPlayers[tooltipItem.datasetIndex]?.stats[selectedLabel][labels[dataIndex]] || 0;

                // Divide only the 'Minutes' value by 100 for tooltip display
                const displayValue = labels[dataIndex] === 'Minutes' ? originalValue : originalValue;

                // Return formatted tooltip label
                return `${playerName}: ${displayValue}`;
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
            max: 10,
            beginAtZero: true,
            ticks: {
              display: false,
            },
            pointLabels: {
              color: '#065F89',
              font: {
                size: 16,
              },
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
  }, [selectedPlayers, selectedLabel]);

  return (
    <div style={{ width: '720px', height: '720px', margin: 'auto', position: 'relative' }}>
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
