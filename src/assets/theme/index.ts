import { createTheme, responsiveFontSizes } from '@mui/material';

// declare module '@mui/material/styles' {
//   interface Theme {
//     pallete: {
//       primary: {
//         light: string;
//         main: string;
//         dark: string;
//         contrastText: string;
//       };
//       secondary: {
//         light: string;
//         main: string;
//         dark: string;
//         contrastText: string;
//       };
//     };
//   }

//   interface ThemeOptions {
//     pallete?: {
//       primary?: {
//         light: string;
//         main: string;
//         dark: string;
//         contrastText: string;
//       };
//       secondary?: {
//         light: string;
//         main: string;
//         dark: string;
//         contrastText: string;
//       };
//     };
//   }
// }

export let customTheme = createTheme({
  palette: {
    primary: {
      light: '#56c8d8',
      main: '#000',
      dark: '#006978',
      contrastText: '#fafafa'
    },
    secondary: {
      light: '#62efff',
      main: '#00bcd4',
      dark: '#008ba3',
      contrastText: '#fafafa'
    },
  }
});

customTheme = responsiveFontSizes(customTheme);
