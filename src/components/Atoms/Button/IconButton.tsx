import IconBtn from '@material-ui/core/IconButton';
import * as React from 'react';

import { IIconProps } from './type';

export class IconButton extends React.Component<IIconProps, {}> {
    public static defaultProps: Partial<IIconProps> = {
        class: '',
    };

    public render() {
        return (
            <IconBtn
                className = {this.props.class}
                onClick = {this.props.onClick}
            >
                {this.props.child}
            </IconBtn>
        );
    };
};
