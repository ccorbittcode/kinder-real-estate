import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './DashboardTabs.css';
import { useState } from 'react';
import PropertyAddForm from './PropertyAddForm';

export default function DashboardTabs() {
  const [value, setValue] = useState(0);
  const [prevValue, setPrevValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
      bgcolor: 'background.paper',
      backgroundImage: 'linear-gradient(white, #24c5f3)'
      }}
      className="dashboard-tabs"
      >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Add Property" />
        <Tab label="Edit Profile" />
        <Tab label="Account Settings" />
      </Tabs>

      {value === 0 && (
        <div className={prevValue === 0 ? "slide-in" : "slide-out"}>
          <PropertyAddForm/>
        </div>
      )}

      {value === 1 && (
        <div className={prevValue === 0 ? "slide-in" : "slide-out"}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos impedit asperiores pariatur dolor nesciunt fugit aspernatur quia beatae eius qui neque quam blanditiis modi praesentium, natus incidunt consectetur exercitationem accusamus.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos impedit asperiores pariatur dolor nesciunt fugit aspernatur quia beatae eius qui neque quam blanditiis modi praesentium, natus incidunt consectetur exercitationem accusamus.</p>
        </div>
      )}

      {value === 2 && (
        <div className={prevValue === 0 ? "slide-in" : "slide-out"}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos impedit asperiores pariatur dolor nesciunt fugit aspernatur quia beatae eius qui neque quam blanditiis modi praesentium, natus incidunt consectetur exercitationem accusamus.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos impedit asperiores pariatur dolor nesciunt fugit aspernatur quia beatae eius qui neque quam blanditiis modi praesentium, natus incidunt consectetur exercitationem accusamus.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos impedit asperiores pariatur dolor nesciunt fugit aspernatur quia beatae eius qui neque quam blanditiis modi praesentium, natus incidunt consectetur exercitationem accusamus.</p>
        </div>
      )}
    </Box>
  );
}
