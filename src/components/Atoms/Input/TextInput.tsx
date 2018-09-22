import TextField from '@material-ui/core/TextField';
import * as React from 'react';

import { IProps } from './type';

export class TextInput extends React.Component<IProps, {}> {
    public static defaultProps: Partial<IProps> = {
        className: '',
    };

    public render() {
        return (
            <TextField
                className = {this.props.className}
                disabled = {this.props.disabled}
                error = {this.props.error}
                label = {this.props.label}
                type = {this.props.type}
                required = {this.props.required}
                value = {this.props.value}
                onChange = {this.props.onChange}
            />
        );
    };
};
