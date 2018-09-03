import Btn from '@material-ui/core/Button';

import * as React from 'react';
import * as Type from '../type';

export enum ButtonVariant {
    text = 'text',
    flat = 'flat',
    outlined = 'outlined',
    contained = 'contained',
    raised = 'raised',
    fab = 'fab',
    extendedFab = 'extendedFab',
};

interface IProps {
    child: React.ReactNode,
    class?: string,
    color?: Type.Color,
    variant?: ButtonVariant,
};

export class Button extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        class: '',
        color: Type.Color.default,
        variant: ButtonVariant.text,
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
