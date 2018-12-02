import * as Color from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = (active: boolean) =>
  createMuiTheme({
    typography: {
      fontFamily: ['Noto Sans JP', 'sans-serif'].join(','),
      useNextVariants: true,
    },
    palette: {
      type: active ? 'dark' : 'light',
      primary: Color.blue,
      secondary: {
        main: '#f44336',
      },
    },
  });
