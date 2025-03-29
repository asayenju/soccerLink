import * as React from 'react';
import ResponsiveAppBar from './Header';
import Footer from './footer';

const HomePage = () => {
    return (
        <div>
            <ResponsiveAppBar isLoggedin={false} />
            
            <Footer />
        </div>
    )
  }
  
  export default HomePage;