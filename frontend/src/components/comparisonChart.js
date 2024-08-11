import * as React from 'react';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import AddPlayer from './AddPlayer';

const ComparisonChart = () => {
    return (
        <>
            <ResponsiveAppBar />
            <AddPlayer />
            <Footer />
        </>
    );
};

export default ComparisonChart;
