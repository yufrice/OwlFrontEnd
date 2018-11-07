import IconBtn from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import * as React from 'react';

import { IProps } from './type';

export const IconButton: React.SFC<IProps> = (props: IProps) => (
    <IconBtn
        onClick={props.onClick}
        color='inherit'
    >
        <SettingsIcon/>
    </IconBtn>
);
