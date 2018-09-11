import { MuiThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import centered from '@storybook/addon-centered';
import { withNotes } from '@storybook/addon-notes';
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
                />
                <Button
                    child = { 'Text' }
                    color = { 'secondary' }
                    variant = { 'outlined' }
                />
            </MuiThemeProvider>

    )
    .add('Icon',
        withNotes('サイドバーにしか使わないとおもう.') (() =>
            <div style={{display: 'flex'}}>
                <IconButton child = { <MenuIcon/> } />
            </div>
        )
    );
