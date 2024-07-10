import React from 'react';
import { Box, Grid } from '@mui/material'; // Importing Box and Grid for layout
import DataTable from './SearchPlayer'; // Assuming DataTable is your DataGrid component

const DashboardHome = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Search Bar (Assuming this is another component you've integrated) */}
        <Grid item xs={3}>
          {/* Your search component here */}
        </Grid>
        {/* DataGrid Section */}
        <Grid item xs={9}>
          <Box sx={{ height: 400 }}>
            <DataTable />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardHome;