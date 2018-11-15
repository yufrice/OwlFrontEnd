import * as Color from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Noto Sans JP',
            'sans-serif',
        ].join(','),
        useNextVariants: true,
    },
    palette: {
        primary: Color.blue,
        secondary: {
            main: '#f44336',
        },
    },
});
