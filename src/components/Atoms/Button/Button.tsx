import Btn from '@material-ui/core/Button';
import * as React from 'react';

export enum ButtonColor {
    default = 'default',
    inherit = 'inherit',
    primary = 'primary',
    secondary = 'secondary',
};

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
    color?: ButtonColor,
    variant?: ButtonVariant,
};

export class Button extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        color: ButtonColor.default,
        variant: ButtonVariant.text,
    };

    public render() {
        return (
            <Btn color={this.props.color} variant={this.props.variant}>
                {this.props.child}
            </Btn>
        );
    };
};
