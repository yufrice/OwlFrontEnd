import IconBtn from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import * as React from 'react';

import { IProps } from './type';

export class IconButton extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
    };

    public render() {
        return (
            <IconBtn
                className={this.props.class}
                onClick={this.props.onClick}
                color='inherit'
            >
                <SettingsIcon/>
            </IconBtn>
        );
    };
};
