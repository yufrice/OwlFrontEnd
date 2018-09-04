import Btn from '@material-ui/core/Button';

import * as React from 'react';
import * as Type from '../type';

interface IProps {
    child: React.ReactNode,
    class?: string,
    color?: Type.Color,
    variant?: Type.Variant,
};

export class Button extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
        color: 'default',
        variant: 'text',
    };

    public render() {
        return (
            <Btn className = {this.props.class}
                 color = {this.props.color}
                 variant = {this.props.variant}
            >
                {this.props.child}
            </Btn>
        );
    };
};
