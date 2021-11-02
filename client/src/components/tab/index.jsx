/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AgenteEstate from '../Agent/EstateAgent';
import StaticEstate from '../Agent/static';
import PenddingEstate from '../Agent/PenddingEstate';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
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

export default function ProfileTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '45%' }}>
      <Box sx={{
        borderBottom: 1, borderColor: 'divider', textTransform: 'none', width: '50%',
      }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ textTransform: 'none' }}>
          <Tab label="Insights" {...a11yProps(0)} sx={{ textTransform: 'none' }} />
          <Tab label="Publiched" {...a11yProps(1)} sx={{ textTransform: 'none' }} />
          <Tab label="Pending" {...a11yProps(2)} sx={{ textTransform: 'none' }} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <StaticEstate />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AgenteEstate />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PenddingEstate />

      </TabPanel>
    </Box>
  );
}
