import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Footer.css'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ace6f9',
      main: '#24c5f3',
      dark: '#00acf3',
      contrastText: '#000',
    },
    secondary: {
      light: '#fe7047',
      main: '#f35124',
      dark: '#d7431b',
      contrastText: '#fff',
    },
  },
});

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Box
      className= 'footerbox'
      >
        <BottomNavigation
          className="footer"
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
