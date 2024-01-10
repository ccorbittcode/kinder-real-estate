import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Footer.css'
import { createTheme } from '@mui/material/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
  // const [value, setValue] = React.useState(0);

  return (
    <>
      {/* <ThemeProvider theme={theme}>
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
    </ThemeProvider> */}
      <Box
        className="footerbox"
        sx={{
          pb: 4,
          textAlign: "center",
          backgroundImage: 'linear-gradient(white,#24c5f3)',
        }}
      >
        <Divider variant="middle" sx={{ mt: 4, mb: 4 }} />
        <Typography
          className="footer"
          variant="h7"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Kinder Realty&#169; 2024, All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
