import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

export default function TabsNu({ professional }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  
  const handleChangeTouch = (newValue) => {
    setValue(newValue);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab onClick={() => {handleChangeTouch(0)}} onTouchEnd={() => {handleChangeTouch(0)}} label="Info" {...a11yProps(0)} />
          <Tab onClick={() => {handleChangeTouch(1)}} onTouchEnd={() => {handleChangeTouch(1)}} label="Clients" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <p>{ professional.about }</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='tab-panel-clients'>
          {
            (professional.clients.length && professional.clients.map((client) => (
              <img key={client.name} src={client.img} alt={client.name}/>
            ))) || <p>There is not clients yet</p>
          }
        </div>
      </TabPanel>
    </Box>
  );
}