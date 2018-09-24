import IconBtn from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';

import { IProps } from './type';

export class IconButton extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
    };

    public render() {
        return (
            <IconBtn
                className = {this.props.class}
                onClick = {this.props.onClick}
            >
                <MenuIcon/>
            </IconBtn>
        );
    };
};
