import { MuiThemeProvider } from '@material-ui/core/styles';
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Bar } from '../Bar';
import { theme } from './theme';

storiesOf('Atoms/Color', module)
    .addDecorator(centered)
    .add('Primary', () =>
        <MuiThemeProvider theme={theme}>
            <Bar
                child={ <h1> Primary </h1> }
                color={ 'primary' }
                position={ 'static' }
            />
        </MuiThemeProvider>
        )
    .add('Secondary', () =>
        <MuiThemeProvider theme={theme}>
            <Bar
                child={ <h1> Secondary </h1> }
                color={ 'secondary' }
                position={ 'static' }
            />
        </MuiThemeProvider>
    );
