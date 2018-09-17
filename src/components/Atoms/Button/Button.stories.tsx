import { MuiThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Button, IconButton } from '.';
import { theme } from '../Theme';

storiesOf('Atoms/Button', module)
    .addDecorator(centered)
    .add('Text',
        () =>
            <MuiThemeProvider theme={theme}>
                <Button
                    child = { 'Text' }
                    color = { 'primary' }
                    onClick = { action('clicked') }
                />
                <Button
                    child = { 'Text' }
                    color = { 'secondary' }
                    onClick = { action('clicked') }
                    variant = { 'outlined' }
                />
            </MuiThemeProvider>

    )
    .add('Icon',
        () =>
            <div style={{display: 'flex'}}>
                <IconButton
                    onClick = { action('clicked') }
                    child = { <MenuIcon/> }
                />
            </div>
    );
