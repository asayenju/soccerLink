import React, { useRef, useEffect } from 'react';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register necessary components for the radar chart
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ data, options }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'radar',
            data: data,
            options: options,
        });
    }, [data, options]);

    return <canvas ref={chartRef}></canvas>;
};

export default RadarChart;
