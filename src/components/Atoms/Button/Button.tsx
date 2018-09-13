import Btn from '@material-ui/core/Button';
import * as React from 'react';

import { IProps } from './type';

export class Button extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
        color: 'default',
        size: 'medium',
        variant: 'text',
    };

    public render() {
        return (
            <Btn className = {this.props.class}
                 color = {this.props.color}
                 size = {this.props.size}
                 variant = {this.props.variant}
            >
                {this.props.child}
            </Btn>
        );
    };
};
