import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme1 = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ffcc33',
      dark: '#F0B400',
      enhance: '#FF5E00',
      contrastText: '#000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000',
    },
  },
});

export const theme2 = createMuiTheme({
  palette: {
    primary: {
      main: '#8862a1',
      enhance: '#FF5E00',
    },
    secondary: {
      main: '#f6144a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
