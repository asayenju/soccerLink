import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#2b9348' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: 'white' } }}
        >
          <Tab label="Appearances" {...a11yProps(0)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Shooting" {...a11yProps(1)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Goalkeeping" {...a11yProps(2)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Goals" {...a11yProps(3)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Passing" {...a11yProps(4)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Duels" {...a11yProps(5)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Defence" {...a11yProps(6)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Discipline" {...a11yProps(7)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Possession" {...a11yProps(8)} sx={{ flexGrow: 1, color: 'white' }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Appearances Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Shooting Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Goalkeeping Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Goals Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Passing Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Duels Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        Defence Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        Discipline Content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        Possession Content
      </CustomTabPanel>
    </Box>
  );
}
