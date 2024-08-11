import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = ({ selectedPlayers }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Colors for each player
    const colors = ['#00A5E3', '#8DD7BF', '#FF97C5', '#FF5768'];

    // Prepare data for the radar chart
    const labels = ['Passing', 'Shooting', 'Defending', 'Dribbling', 'Pace', 'Physical', 'Appearance'];

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
  }, [selectedPlayers]);

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default RadarChart;
