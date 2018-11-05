import { MuiThemeProvider } from '@material-ui/core/styles';
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { GlobalHeader } from '../../Organisms/GlobalHeader';
import { theme } from './theme';

storiesOf('Atoms/Color', module)
    .addDecorator(centered)
    .add('Primary', () =>
        <MuiThemeProvider theme={theme}>
            <GlobalHeader
                color={ 'primary' }
                position={ 'static' }
            />
        </MuiThemeProvider>
        )
    .add('Secondary', () =>
        <MuiThemeProvider theme={theme}>
            <GlobalHeader
                color={ 'secondary' }
                position={ 'static' }
            />
        </MuiThemeProvider>
    );
