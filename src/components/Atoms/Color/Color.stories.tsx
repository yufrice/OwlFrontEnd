import { MuiThemeProvider } from '@material-ui/core/styles';
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { Bar } from '../Bar/Bar';
import { theme } from './color';

storiesOf('Atoms', module)
    .addDecorator(centered)
    .add('Color', () =>
        <MuiThemeProvider theme={theme}>
            <Bar
                child={ <h1> Primary </h1> }
                color={ 'primary' }
                position={ 'static' }
            />
            <Bar
                child={ <h1> Secondary </h1> }
                color={ 'secondary' }
                position={ 'static' }
            />
        </MuiThemeProvider>
        );
