import * as React from 'react';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import DashboardHome from './dashboardHome';

const HomePage = () => {
    return (
        <div>
            <ResponsiveAppBar isLoggedin={false} />
            <DashboardHome />
            <Footer />
        </div>
    )
  }
  
  export default HomePage;