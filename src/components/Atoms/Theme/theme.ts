import * as Color from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const baseTheme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
    useNextVariants: true,
  },
});

export const theme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: 'light',
    primary: Color.blue,
    secondary: {
      main: '#f44336',
    },
  },
});

export const darkTheme = createMuiTheme({
  ...baseTheme,
  palette: {
    type: 'dark',
  },
});
