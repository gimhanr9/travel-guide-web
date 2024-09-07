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
    subtitle1: {
      fontFamily: Fonts.Roboto,
      fontSize: 18,
      fontWeight: 700,
    },
    subtitle2: {// textfield label
      fontFamily: Fonts.Roboto,
      fontSize: 14,
      fontWeight: 700,
    },
    body1: {
      fontFamily: Fonts.Roboto,
      fontSize: 20,
      fontWeight: 400,
    },
    body2: {
      fontFamily: Fonts.Raleway,
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: '0.03em',
    },
    caption: {
      fontFamily: Fonts.Roboto,
      fontSize: 15,
      fontWeight: 400,
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
          fontFamily: Fonts.Roboto,
          fontSize: 15,
          fontWeight: '500',
          height: 48
        },
      },
    },

    // MuiCheckbox: {
    //   styleOverrides: {
    //     root: {
    //       '&.Mui-checked': {
    //         color: 'black',
    //       },
    //     },
    //   },
    // },

    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: Fonts.Roboto,
          fontSize: 14,
          fontWeight: 700,
        },
      },
    },

    // MuiContainer: {
    //   styleOverrides: {
    //     root: {
    //       // Change maxWidth property for lg breakpoint
    //       '@media (min-width: 1280px)': {
    //         maxWidth: '28%', // Specify your custom width for large screens
    //       },
    //     },
    //     maxWidthLg:{
    //       maxWidth:"40%"
    //     }
    //   },
    // },

    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: Fonts.Roboto,
          fontSize: 15,
          fontWeight: 500,
          padding: 3,
        },
      },
    },
  },
});