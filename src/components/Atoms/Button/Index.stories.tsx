import MenuIcon from '@material-ui/icons/Menu';
import centered from '@storybook/addon-centered';
import { withNotes } from '@storybook/addon-notes';
import { storiesOf } from '@storybook/react';

import * as React from 'react';

import { Button } from './Button';
import { IconButton } from './IconButton';

storiesOf('Atoms/Button', module)
    .addDecorator(centered)
    .add('Text',
        () =>
            <div style={{display: 'flex'}}>
                <Button
                    child = { 'Text' }
                    color = { 'primary' }
                    variant = { 'outlined' }
                />
            </div>
    )
    .add('Icon',
        withNotes('サイドバーにしか使わないとおもう.') (() =>
            <div style={{display: 'flex'}}>
                <IconButton child = { <MenuIcon/> } />
            </div>
        )
    );
