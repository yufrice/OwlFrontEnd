import { MuiThemeProvider } from '@material-ui/core/styles';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { theme } from '../Theme';
import { Bar } from './Bar';


storiesOf('Atoms', module)
    .add('Bar',
       (() =>
            <MuiThemeProvider theme={theme}>
                <Bar child={ '' } color={ 'primary' } />
            </MuiThemeProvider>
        )
    );
