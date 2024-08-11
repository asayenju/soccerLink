import * as React from 'react';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import AddPlayer from './AddPlayer';
import RadarChart from './radarChart';

const ComparisonChart = () => {
    return (
        <>
            <ResponsiveAppBar />
            <AddPlayer />
            <RadarChart data={data} options={options} />
            <Footer />
        </>
    );
};

export default ComparisonChart;
