import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppearancesContainer from './AppearancesContainer';
import ShootingContainer from './ShootingContainer';
import GoalkeepingContainer from './GoalkeepingContainer';
import GoalsContainer from './GoalsContainer';
import PassingContainer from './PassingContainer';
import DuelsContainer from './DuelsContainer';
import DefenseContainer from './DefenseContainer';
import DisciplineContainer from './DisciplineContainer';
import PossessionContainer from './PossesionContainer';

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

export default function StatsTabs({ isForm = false }) {
  const [value, setValue] = React.useState(0);
  const [formData, setFormData] = React.useState({
    appearances: '',
    // Add other stats here
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#065F89' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          textColor="inherit"
          TabIndicatorProps={{ style: { backgroundColor: 'white' } }}
        >
          <Tab label="Appearances" {...a11yProps(0)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Shooting" {...a11yProps(1)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Goalkeeping" {...a11yProps(2)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Goals" {...a11yProps(3)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Passing" {...a11yProps(4)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Duels" {...a11yProps(5)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Defense" {...a11yProps(6)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Discipline" {...a11yProps(7)} sx={{ flexGrow: 1, color: 'white' }} />
          <Tab label="Possession" {...a11yProps(8)} sx={{ flexGrow: 1, color: 'white' }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AppearancesContainer
          isForm={isForm}
          formData={formData}
          handleChange={handleInputChange}
          games={formData.games}
          minutes={formData.minutes}
          starts={formData.starts}
          sub_off={formData.sub_off}
          sub_on={formData.sub_on}
          games_per_90={formData.games_per_90}
          minutes_per_90={formData.minutes_per_90}
          starts_per_90={formData.starts_per_90}
          sub_off_per_90={formData.sub_off_per_90}
          sub_on_per_90={formData.sub_on_per_90}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ShootingContainer 
          isForm={isForm} 
          formData={formData} 
          handleChange={handleInputChange}
          totalshots={formData.totalshots}
          shotson_target={formData.shotson_target}
          shotsoff_target={formData.shotsoff_target}
          shots_accuracy={formData.shots_accuracy}
          shots_blocked={formData.shots_blocked}
          shots_setpieces={formData.shots_setpieces}
          penalties={formData.penalties}
          woodwork={formData.woodwork}
          totalshots_per_90={formData.totalshots_per_90}
          shotson_target_per_90={formData.shotson_target_per_90}
          shotsoff_target_per_90={formData.shotsoff_target_per_90}
          shots_blocked_per_90={formData.shots_blocked_per_90}
          shots_setpieces_per_90={formData.shots_setpieces_per_90}
          penalties_per_90={formData.penalties_per_90}
          woodwork_per_90={formData.woodwork_per_90}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <GoalkeepingContainer 
          isForm={isForm} 
          formData={formData} 
          handleChange={handleInputChange} 
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <GoalsContainer 
          isForm={isForm} 
          formData={formData} 
          handleChange={handleInputChange} 
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <PassingContainer 
          isForm={isForm} 
          formData={formData} 
          handleChange={handleInputChange} 
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <DuelsContainer 
          isForm={isForm} 
          formData={formData} 
          handleChange={handleInputChange} 
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <DefenseContainer 
          isForm={isForm} 
          formData={formData} 
          handleChange={handleInputChange} 
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <DisciplineContainer 
          isForm={isForm} 
          formData={formData} 
          handleChange={handleInputChange} 
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        <PossessionContainer 
          isForm={isForm} 
          formData={formData} 
          handleChange={handleInputChange} 
        />
      </CustomTabPanel>
    </Box>
  );
}
