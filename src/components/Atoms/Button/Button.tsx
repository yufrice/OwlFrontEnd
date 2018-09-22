import _Button from '@material-ui/core/Button';
import * as React from 'react';

import { IButtonProps } from './type';

export class Button extends React.Component<IButtonProps, {}> {
    public static defaultProps: Partial<IButtonProps> = {
        class: '',
        color: 'default',
        disabled: false,
        size: 'medium',
        variant: 'text',
    };

    public render() {
        return (
            <_Button className = {this.props.class}
                 color = {this.props.color}
                 disabled = {this.props.disabled}
                 onClick = {this.props.onClick}
                 size = {this.props.size}
                 variant = {this.props.variant}
            >
                {this.props.child}
            </_Button>
        );
    };
};
