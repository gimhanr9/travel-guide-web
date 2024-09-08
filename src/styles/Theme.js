import { createTheme } from '@mui/material/styles';
import { Fonts } from '../utils/Fonts';
import { Colors } from '../utils/Colors';


export const Theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#2E2252',
      secondary: '#000000',
    },

    background: {
      default: Colors.primaryBg,
      secondary: Colors.secondaryBg,
      paper: Colors.white,
    },

    primary: {
      main: '#2E2252',
      light: Colors.black,
      dark: Colors.black,
      contrastText: Colors.white,
    },
    secondary: {
      main: '#757ce8',
      light: Colors.black,
      dark: Colors.black,
      contrastText: Colors.white,
    },
    tertiary: {
      main: Colors.white,
      light: Colors.black,
      dark: Colors.black,
      contrastText: Colors.white,
    },

    // error: {
    //   main: Colors.error,
    //   light: Colors.errorLight,
    //   dark: Colors.errorDark,
    //   contrastText: Colors.errorText,
    // },
    // white: {
    //   main: Colors.white,
    //   contrastText: Colors.black,
    // },
    // black: {
    //   main: Colors.black,
    //   contrastText: Colors.white,
    // },
    // specialBlue: {
    //   main: Colors.blueHighlight,
    //   light: Colors.blueText,
    //   dark: Colors.secondary,
    //   contrastText: Colors.white,
    // },
  },
  typography: {
    h1: {
      fontFamily: 'Impact',
      fontWeight: 400,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      fontSize: 'clamp(3.5rem, 12vw, 8.5rem)',
    },
    h2: {
      fontFamily: Fonts.Impact,
      fontWeight: 400,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      fontSize: 'clamp(2rem, 10vw, 5.3rem)',
    },

    h3: {
      fontFamily: Fonts.Impact,
      fontWeight: 400,
      letterSpacing: '0.03em',
      lineHeight: '66px',
      textTransform: 'uppercase'
    },
    h4: {
      fontFamily: Fonts.Impact,
      fontWeight: 400,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      fontSize: 'clamp(1.5rem, 6vw, 3.8rem)',
    },
    h5: {
      fontFamily: Fonts.Impact,
      fontWeight: 400,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
    },

    h6: {
      fontFamily: Fonts.Impact,
      fontWeight: 400,
      letterSpacing: '0.03em',
      lineHeight: '34px',
      textTransform: 'uppercase'
    },
    subtitle1: { //Pricing text
      fontFamily: Fonts.Raleway,
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '0.03em',
    },
    subtitle2: {
      fontFamily: Fonts.Raleway,
      fontSize: 25,
      fontWeight: 700,
      letterSpacing: '0.03em',
    },
    body1: {
      fontFamily: Fonts.Raleway,
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '0.03em',
    },
    body2: {
      fontFamily: Fonts.Raleway,
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: '0.03em',
    },
    caption: {
      fontFamily: Fonts.Raleway,
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '0.03em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: Fonts.Raleway,
          fontWeight: 400,
          fontSize: 15,
          letterSpacing: '0.03em',
          textTransform: 'none',
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: Fonts.Raleway,
          fontSize: 15,
          fontWeight: '500',
          height: 48,
          border: 'none',
          outline: 'none'
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: Fonts.Raleway,
          fontSize: 14,
          fontWeight: 700,
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 25
        }
      }
    }
  },
});