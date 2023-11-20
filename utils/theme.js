import { createTheme } from '@mui/material';
import { themedata } from '../data/themedata';

const theme = createTheme({
  palette: {
    primary: {
      main: themedata[0].primary,
    },
    secondary: {
      main: themedata[0].secondary,
    },
    three: {
      main: themedata[0].three,
    },
    four: {
      main: themedata[0].four,
    },
    four: {
      main: themedata[0].five,
    },
    six: {
      main: themedata[0].six,
    },
    seven: {
      main: themedata[0].seven,
    },
    eight: {
      main: themedata[0].eight,
    },
    nine: {
      main: themedata[0].nine,
    },
    ten: {
      main: themedata[0].ten,
    },
    eleven: {
      main: themedata[0].eleven,
    },
    twelve: {
      main: themedata[0].twelve,
    },
    facebook: {
      main: themedata[0].facebook,
    },
    homepage: {
      main : themedata[0].homepage,
    },
    buttermilk: {
      main : themedata[0].buttermilk,
    },
    instagram: {
      main: '#E4405F',
    },
    youtube: {
      main: '#CD201F',
    },
    tracred: {
      main: '#dd1b24',
    },
    tracgreen: {
      main: '#14640A',
    },
    tracgreen2: {
      main: '#16ad03',
    },
    tracblack: {
      main: '#010101',
    },
    transparent: {
      main: 'transparent',
    },
    type: 'dark',
  },
});

export default theme;
