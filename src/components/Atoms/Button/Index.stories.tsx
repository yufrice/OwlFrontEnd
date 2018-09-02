import MenuIcon from '@material-ui/icons/Menu';
import centered from '@storybook/addon-centered';
import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/react';

import * as React from 'react';

import {Button, ButtonColor, ButtonVariant} from './Button';
import {IconButton} from './IconButton';

const menuIcon = <MenuIcon/>;
const buttonEnum = (variant: ButtonVariant) => (Object.keys(ButtonColor).map(
    (style: ButtonColor) => (
        <Button child = { style } color = { style } variant={ variant }/>
    )
));

storiesOf('Atoms/Button', module)
    .addDecorator(centered)
    .add('Text',
        withNotes('') (() =>
            <div style={{display: 'flex'}}>
                {buttonEnum(ButtonVariant.text)}
            </div>
        )
    )
    .add('Outlined',
        withNotes('') (() =>
            <div style={{display: 'flex'}}>
                {buttonEnum(ButtonVariant.outlined)}
            </div>
        )
    )
    .add('Contained',
        withNotes('') (() =>
            <div style={{display: 'flex'}}>
                {buttonEnum(ButtonVariant.contained)}
            </div>
        )
    )
    .add('Icon',
        withNotes('サイドバーにしか使わないとおもう.') (() =>
            <div style={{display: 'flex'}}>
                <IconButton icon = {menuIcon} />
            </div>
        )
    );
