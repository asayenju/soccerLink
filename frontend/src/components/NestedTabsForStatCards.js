import * as React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

function NestedTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nested-tabpanel-${index}`}
      aria-labelledby={`nested-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function NestedTabs({ totalStats, per90Stats }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '80%' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="nested tabs example"
          fullWidth
          centered
          sx={{ 
            backgroundColor: '#065F89',
            '& .MuiTabs-indicator': {
              backgroundColor: 'white',
            },
            '& .MuiTab-root': {
              color: 'white',
              '&.Mui-selected': {
                color: 'white',
              },
            },
          }}
        >
          <Tab label="Total" />
          <Tab label="Per 90 Mins" />
        </Tabs>
        <NestedTabPanel value={value} index={0}>
          <Typography>{totalStats}</Typography>
        </NestedTabPanel>
        <NestedTabPanel value={value} index={1}>
          <Typography>{per90Stats}</Typography>
        </NestedTabPanel>
      </Box>
    </Box>
  );
}
