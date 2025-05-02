import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const AttackRadarChart = ({ players = [] }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // Attack-specific stats to compare
  const attackStats = [
    'Goals', 
    'Shots', 
    'Shots On Target',
    'Shot Conversion %', 
    'Key Passes',
    'Big Chances Created'
  ];

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    
    // Destroy previous chart if exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const colors = ['#FF6384', '#36A2EB', '#FFCE56']; // Red, blue, yellow
    
    const datasets = players.map((player, index) => ({
      label: player.name,
      data: attackStats.map(stat => {
        // Handle percentage values differently
        if (stat.includes('%')) {
          return player?.stats?.[stat] || 0;
        }
        // Normalize other stats (divide goals by 5 to keep scale similar)
        return stat === 'Goals' ? (player?.stats?.[stat] || 0) : 
               (player?.stats?.[stat] || 0);
      }),
      backgroundColor: `${colors[index]}40`,
      borderColor: colors[index],
      borderWidth: 2,
      pointBackgroundColor: colors[index]
    }));

    chartInstanceRef.current = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: attackStats,
        datasets: datasets.length ? datasets : [{
          label: 'No players selected',
          data: attackStats.map(() => 0),
          backgroundColor: '#CCCCCC40',
          borderColor: '#CCCCCC',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.dataset.label || '';
                const stat = attackStats[context.dataIndex];
                const rawValue = players[context.datasetIndex]?.stats?.[stat] || 0;
                return `${label}: ${stat.includes('%') ? rawValue + '%' : rawValue}`;
              }
            }
          }
        },
        scales: {
          r: {
            angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
            grid: { color: 'rgba(0, 0, 0, 0.1)' },
            pointLabels: { font: { size: 12 } },
            suggestedMin: 0,
            suggestedMax: 20 // Adjusted for normalized values
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [players]);

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ textAlign: 'center' }}>Compare different players</h3>
      <canvas ref={chartRef} height={400} />
      <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
        Note: Goals are divided by 5 for better visualization scale
      </p>
    </div>
  );
};

export default AttackRadarChart;