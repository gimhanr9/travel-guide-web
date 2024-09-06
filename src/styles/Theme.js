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
      fontFamily: Fonts.Roboto,
      fontSize: 36,
      fontWeight: 700,
    },
    h2: {
      fontFamily: Fonts.Roboto,
      fontSize: 34,
      fontWeight: 700,
    },
    h3: {
      fontFamily: Fonts.Roboto,
      fontSize: 32,
      fontWeight: 700,
    },
    h4: {
      fontFamily: Fonts.Roboto,
      fontSize: 34,
      fontWeight: 700,
    },
    h5: {
      fontFamily: Fonts.Roboto,
      fontSize: 28,
      fontWeight: 700,
    },
    h6: {
      fontFamily: Fonts.Roboto,
      fontSize: 24,
      fontWeight: 700,
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
    body2: { // link
      fontFamily: Fonts.Roboto,
      fontSize: 14,
      fontWeight: 700,
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
          fontFamily: Fonts.Roboto,
          fontWeight: 500,
          fontSize: 15,
          textTransform: 'none',
          borderRadius: 25,
          height: 48
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