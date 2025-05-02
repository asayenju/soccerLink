import * as React from 'react';
import ResponsiveAppBar from './Header';
import Footer from './footer';
import DashboardHome from './dashboardHome';
import AttackRadarChart from './radarChartHome';

const HomePage = () => {
    // Sample player data - replace with your actual data
    const players = [
        {
            name: "Player 1",
            stats: {
                "Goals": 25,
                "Shots": 60,
                "Shots On Target": 30,
                "Shot Conversion %": 50,
                "Key Passes": 40,
                "Big Chances Created": 10
            }
        },
        {
            name: "Player 2", 
            stats: {
                "Goals": 40,
                "Shots": 45,
                "Shots On Target": 25,
                "Shot Conversion %": 30,
                "Key Passes": 35,
                "Big Chances Created": 8
            }
        }
    ];

    return (
        <div>
            <ResponsiveAppBar isLoggedin={false} />
            <div style={{
                marginBottom: '50px',  // Increased bottom margin
                padding: '20px',
                borderRadius: '8px'
            }}>
                <AttackRadarChart players={players} />
            </div>
            <DashboardHome />
            <Footer />
        </div>
    )
}

export default HomePage;