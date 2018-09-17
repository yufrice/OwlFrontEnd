import Btn from '@material-ui/core/Button';
import * as React from 'react';

import { IButtonProps } from './type';

export class Button extends React.Component<IButtonProps, {}> {
    public static defaultProps: Partial<IButtonProps> = {
        class: '',
        color: 'default',
        size: 'medium',
        variant: 'text',
    };

    public render() {
        return (
            <Btn className = {this.props.class}
                 color = {this.props.color}
                 onClick = {this.props.onClick}
                 size = {this.props.size}
                 variant = {this.props.variant}
            >
                {this.props.child}
            </Btn>
        );
    };
};
